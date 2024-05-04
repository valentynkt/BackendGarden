Date and Time: <u> 2023-10-20 17:07 </u>
Status: #LearningIT
Tags: [[CSharp]], [[NET]] , [[API]], [[Authentication and Authorization]], [[Json Web Tokens]]

# JWT in .NET Core

## Intro
In this article, I will show you how to implement an ASP.NET Core web API application using JWT authentication and authorization. This web API application implements processes such as login, logout, refresh token, impersonation, and so on. The following screenshot shows the API endpoints that we are going to walk through in this article.
![[Pasted image 20231020194326.png]]

## JWT workflow

``` ad-important
1. A user sends credentials to the website to login.
2. The website back-end validates the credentials, declares proper claims, then generates a JWT and returns it to the user(Refresh token process).
3. The user holds the JWT until it expires, and sends the JWT to the website in subsequent requests.
4. The website validates the JWT and decides if the resource is accessible, then processes the request accordingly.
```

Usually, a random string, refresh token, is generated along with the JWT access token in step 2. When the JWT access token is about to expire, the client sends the refresh token to the server-side to get a new JWT access token. It is recommended that the system should return a new refresh token together with the new access token. Therefore, the application no longer has a long-lived refresh token. This technique is known as [Refresh Token Rotation](https://auth0.com/docs/tokens/concepts/refresh-token-rotation).

## JWT Authentication Configuration
 A set of common configurations is defined in the following `JwtTokenConfig` class
``` csharp
public class JwtTokenConfig
{
    public string Secret { get; set; }
    public string Issuer { get; set; }
    public string Audience { get; set; }
    public int AccessTokenExpiration { get; set; }
    public int RefreshTokenExpiration { get; set; }
}
```

The property `Secret` is a string that needs to be kept in a secure place, for example, the app pool user’s environment variables, or a cloud secret store or key vault. The `AccessTokenExpiration` and `RefreshTokenExpiration` are two integers representing the total lifetimes of the tokens since they were generated. The times are in minutes based on the implementation of this demo project. For simplicity purposes, we will store the parameters in the `appsettings.json` file. Then we are ready to pass the values into the JWT Bearer configurations.

The good news is that authenticating with JWT tokens is straightforward, and the `Microsoft.AspNetCore.Authentication.JwtBearer` NuGet package does most of the work for us. After we have installed the latest version of this NuGet package, we have two choices to configure JWT authentication: (1) use the `app.UseJwtBearerAuthentication()` middleware in the `Startup.Configure` method; (2) call the `services.AddJwtBearer()` method to register the JWT authentication scheme in the `Startup.ConfigureServices` method.

Here, we will configure the JWT Bearer authentication via the second approach. The following code snippet shows an example `ConfigureServices` method.

``` csharp
public void ConfigureServices(IServiceCollection services)
{
    var jwtTokenConfig = Configuration.GetSection("jwtTokenConfig").Get<JwtTokenConfig>();
    services.AddSingleton(jwtTokenConfig);
    services.AddAuthentication(x =>
    {
        x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    }).AddJwtBearer(x =>
    {
        x.RequireHttpsMetadata = true;
        x.SaveToken = true;
        x.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = jwtTokenConfig.Issuer,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtTokenConfig.Secret)),
            ValidAudience = jwtTokenConfig.Audience,
            ValidateAudience = true,
            ValidateLifetime = true,
            ClockSkew = TimeSpan.FromMinutes(1)
        };
    });
    // ...
}
```

In the code above, line 3 read our settings and register the `JwtTokenConfig` as a Singleton in the [[Dependency Injection]] (DI) container.

Lines 5 to 8 set the default to authenticate and challenge schemes to `Bearer` in this application.
Lines 9 to 24 configure the JWT Bearer token, especially the token validation parameters. I would like to point out the following attributes.

- `RequireHttpsMetadata`: the default value is `true`, which means that the authentication requires HTTPS for the metadata address or authority.
- `SaveToken`: the default value is `true`, which saves the JWT access token in the current `HttpContext`, so that we can retrieve it using the method `await HttpContext.GetTokenAsync(“Bearer”, “access_token”)` or something similar. If we want to set the `SaveToken` to be `false`, then we can save the JWT access token in claims, and then retrieve its value using the method: `User.FindFirst("access_token")?.Value`.
- `TokenValidationParameters`: this object sets the parameters used to validate identity tokens. The meaning for each property is self-explanatory. One thing I want to mention is the `ClockSkew` property. I set its value to be one minute, which gives an allowance time for the token expiration validation. I have an integration test for this property, and you can play with it.

Then we move on and add the `app.UseAuthentication()` method in the `Startup.Configure` method like below.

``` csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    // ...
    app.UseRouting();
    app.UseAuthentication();
    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}
```

The `Authentication` middleware, line 5, is critical to make the registered authentication schemes (JWT Bearer, in this case) work. On the other hand, the `Authorization` middleware, line 6, is critical to make the registered authorization mechanisms work. In this project, we use the default role-based authorization. Both lines 5 and 6 are needed so that we can use the `[Authorize]` attribute over controllers and action methods. In addition, please note that **the order of the middleware is important**.

## Token Generation and Login

We will create a `JwtAuthManager` class to put together all utilities related to the JWT access tokens and refresh tokens.

### JwtAuthManager
``` csharp
public class JwtAuthManager : IJwtAuthManager
{
    public IImmutableDictionary<string, RefreshToken> UsersRefreshTokensReadOnlyDictionary => _usersRefreshTokens.ToImmutableDictionary();
    private readonly ConcurrentDictionary<string, RefreshToken> _usersRefreshTokens;  // can store in a database or a distributed cache
    private readonly JwtTokenConfig _jwtTokenConfig;
    private readonly byte[] _secret;

    public JwtAuthManager(JwtTokenConfig jwtTokenConfig)
    {
        _jwtTokenConfig = jwtTokenConfig;
        _usersRefreshTokens = new ConcurrentDictionary<string, RefreshToken>();
        _secret = Encoding.ASCII.GetBytes(jwtTokenConfig.Secret);
    }

    public JwtAuthResult GenerateTokens(string username, Claim[] claims, DateTime now)
    {
        var shouldAddAudienceClaim = string.IsNullOrWhiteSpace(claims?.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Aud)?.Value);
        var jwtToken = new JwtSecurityToken(
            _jwtTokenConfig.Issuer,
            shouldAddAudienceClaim ? _jwtTokenConfig.Audience : string.Empty,
            claims,
            expires: now.AddMinutes(_jwtTokenConfig.AccessTokenExpiration),
            signingCredentials: new SigningCredentials(new SymmetricSecurityKey(_secret), SecurityAlgorithms.HmacSha256Signature));
        var accessToken = new JwtSecurityTokenHandler().WriteToken(jwtToken);

        var refreshToken = new RefreshToken
        {
            UserName = username,
            TokenString = GenerateRefreshTokenString(),
            ExpireAt = now.AddMinutes(_jwtTokenConfig.RefreshTokenExpiration)
        };
        _usersRefreshTokens.AddOrUpdate(refreshToken.TokenString, refreshToken, (s, t) => refreshToken);

        return new JwtAuthResult
        {
            AccessToken = accessToken,
            RefreshToken = refreshToken
        };
    }

    private static string GenerateRefreshTokenString()
    {
        var randomNumber = new byte[32];
        using var randomNumberGenerator = RandomNumberGenerator.Create();
        randomNumberGenerator.GetBytes(randomNumber);
        return Convert.ToBase64String(randomNumber);
    }
}
```

In the `JwtAuthManager` class, we save a dictionary `_usersRefreshTokens` as a cache for refresh tokens. Alternatively, we can save the refresh tokens in a database or a distributed cache storage. Keeping a copy of refresh tokens on the server-side allows the system to validate the refresh tokens and look up metadata about user sessions.

The `GenerateTokens` method creates a JWT access token and a refresh token. We pass the user claims into the payload in the JWT access token and set proper values for JWT token validation parameters. The refresh token is simply a random string, but we also enrich the `RefreshToken` object with an expiration time and username. We can further attach other metadata to the `RefreshToken` objects, for example, client IP, user agent, device ID, and so on, so that we can identify and monitor user sessions, and detect fraudulent tokens.

Notice lines 17 and 20 will prevent the token from being lengthy when the token is refreshed multiple times. The reason why the JWT token gets longer is that the `aud` claim is an array and keeps appending new values to it. For sure, there are other ways to keep the `aud` claim clean.

### AccountController
Since the `JwtAuthManager` class doesn’t have Scoped or Transient dependencies, we can register it as a Singleton in the [[Dependency Injection]] container. Then we can inject the `JwtAuthManager` to the `AccountController`, which performs the `Login` action. The following code snippet shows the `AccountController` and the `Login` action method.

``` csharp
[ApiController]
[Authorize]
[Route("api/[controller]")]
public class AccountController : ControllerBase
{
    private readonly ILogger<AccountController> _logger;
    private readonly IUserService _userService;
    private readonly IJwtAuthManager _jwtAuthManager;

    public AccountController(ILogger<AccountController> logger, IUserService userService, IJwtAuthManager jwtAuthManager)
    {
        _logger = logger;
        _userService = userService;
        _jwtAuthManager = jwtAuthManager;
    }

    [AllowAnonymous]
    [HttpPost("login")]
    public ActionResult Login([FromBody] LoginRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }

        if (!_userService.IsValidUserCredentials(request.UserName, request.Password))
        {
            return Unauthorized();
        }

        var role = _userService.GetUserRole(request.UserName);
        var claims = new[]
        {
            new Claim(ClaimTypes.Name,request.UserName),
            new Claim(ClaimTypes.Role, role)
        };

        var jwtResult = _jwtAuthManager.GenerateTokens(request.UserName, claims, DateTime.Now);
        _logger.LogInformation($"User [{request.UserName}] logged in the system.");
        return Ok(new LoginResult
        {
            UserName = request.UserName,
            Role = role,
            AccessToken = jwtResult.AccessToken,
            RefreshToken = jwtResult.RefreshToken.TokenString
        });
    }
}
```

In the code above, we first validate the login credentials in lines 26 to 29 using a `UserService`. Then we generate claims in lines 31 to 36. Line 38 calls the `GenerateTokens` method in the `JwtAuthManager` class to get the access token and refresh token. Finally, the `Login` method returns an object with the tokens to the client-side.

## Logout

After the JWT tokens are sent back to the client, they are stored on the client-side. When the client wants to logout, we can remove the token by deleting the tokens in cookie or localStorage. However, a user may still be able to hold the access token. Usually, the risk is low because the access token will be expired after a small time frame.

We will leave the access token alone, but we will invalidate the refresh token on the server-side. In the `AccountController`, we add the `Logout` method as follows.

``` csharp
[HttpPost("logout")]
[Authorize]
public ActionResult Logout()
{
    var userName = User.Identity.Name;
    _jwtAuthManager.RemoveRefreshTokenByUserName(userName); // can be more specific to ip, user agent, device name, etc.
    _logger.LogInformation($"User [{userName}] logged out the system.");
    return Ok();
}
```

In this `Logout` method, we first get the current username (or we can get the user ID to identify the user if we save the ID in claims). Based on the username, we can remove the user’s refresh token so that the user won’t be able to refresh his/her session until a fresh login.

``` ad-note
Removing refresh tokens based on a username is not ideal because it will log out all sessions for this user even if the user is using two browsers, or one in Desktop and one in Mobile. Therefore, to improve the user experience, we should only remove a specific token (for example, based on user-agent and client IP), which can be identified in the request body or headers.
```

## Refresh the JWT Access Token

Some mobile apps only need to login once, so refreshing the JWT access tokens is not that significant. But for most web apps, refreshing access tokens is mandatory. The client usually triggers the refresh token action when the access token is about to expire. When that happens, the client sends a `RefreshToken` to the API endpoint. The following code snippet shows an example API action method in the `AccountController` class.

``` csharp
[HttpPost("refresh-token")]
[Authorize]
public async Task<ActionResult> RefreshToken([FromBody] RefreshTokenRequest request)
{
    try
    {
        var userName = User.Identity.Name;
        _logger.LogInformation($"User [{userName}] is trying to refresh JWT token.");

        if (string.IsNullOrWhiteSpace(request.RefreshToken))
        {
            return Unauthorized();
        }

        var accessToken = await HttpContext.GetTokenAsync("Bearer", "access_token");
        var jwtResult = _jwtAuthManager.Refresh(request.RefreshToken, accessToken, DateTime.Now);
        _logger.LogInformation($"User [{userName}] has refreshed JWT token.");
        return Ok(new LoginResult
        {
            UserName = userName,
            Role = User.FindFirst(ClaimTypes.Role)?.Value ?? string.Empty,
            AccessToken = jwtResult.AccessToken,
            RefreshToken = jwtResult.RefreshToken.TokenString
        });
    }
    catch (SecurityTokenException e)
    {
        return Unauthorized(e.Message); // return 401 so that the client side can redirect the user to login page
    }
}
```

Line 16 is the place where the magic happens. The implementation of the `Refresh` method is shown below.

The below code is placed in JwtAuthManager
``` csharp
public JwtAuthResult Refresh(string refreshToken, string accessToken, DateTime now)
{
    var (principal, jwtToken) = DecodeJwtToken(accessToken);
    if (jwtToken == null || !jwtToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256Signature))
    {
        throw new SecurityTokenException("Invalid token");
    }

    var userName = principal.Identity.Name;
    if (!_usersRefreshTokens.TryGetValue(refreshToken, out var existingRefreshToken))
    {
        throw new SecurityTokenException("Invalid token");
    }
    if (existingRefreshToken.UserName != userName || existingRefreshToken.ExpireAt < now)
    {
        throw new SecurityTokenException("Invalid token");
    }

    return GenerateTokens(userName, principal.Claims.ToArray(), now); // need to recover the original claims
}

public (ClaimsPrincipal, JwtSecurityToken) DecodeJwtToken(string token)
{
    if (string.IsNullOrWhiteSpace(token))
    {
        throw new SecurityTokenException("Invalid token");
    }
    var principal = new JwtSecurityTokenHandler()
        .ValidateToken(token,
            new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = _jwtTokenConfig.Issuer,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(_secret),
                ValidAudience = _jwtTokenConfig.Audience,
                ValidateAudience = true,
                ValidateLifetime = true,
                ClockSkew = TimeSpan.FromMinutes(1)
            },
            out var validatedToken);
    return (principal, validatedToken as JwtSecurityToken);
}
```

In the code above, we first decode the JWT access token to confirm that we get an authentic identity. The parameters in the `DecodeJwtToken` method should match the `TokenValidationParameters` in the `Startup.cs` file.

Another reason why we need to decode the original JWT access token is that we need to recover all claims in the original token. Then we can generate a new access token with a proper payload.
# Reference:
https://codeburst.io/jwt-auth-in-asp-net-core-148fb72bed03


 