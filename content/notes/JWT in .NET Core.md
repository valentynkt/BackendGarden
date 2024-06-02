---
created: 2024-05-20 17:08
aliases: 
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[JSON Web Tokens|JWT]]

# JWT in .NET Core


## Introduction

In this article, we will implement an ASP.NET Core web [[API]] application using [[JSON Web Tokens|JWT]] for authentication and authorization. This application will handle login, logout, token refresh, and impersonation.

![[Pasted image 20231020194326.png]]

## JWT Workflow

> [!info] **JWT Workflow**
> 
> 1. **User Login**: The user sends credentials to the website to log in.
> 2. **Token Generation**: The website validates the credentials, generates a JWT and a refresh token, and returns them to the user.
> 3. **Subsequent Requests**: The user sends the JWT with each request to access protected resources.
> 4. **Token Verification**: The website validates the JWT and processes the request if the token is valid.
> 5. **Token Refresh**: When the JWT is about to expire, the client sends the refresh token to get a new JWT and refresh token.

## JWT Authentication Configuration


> [!example]- JwtTokenConfig Class
> ``` csharp
> public class JwtTokenConfig
> {
>     public string Secret { get; set; }
>     public string Issuer { get; set; }
>     public string Audience { get; set; }
>     public int AccessTokenExpiration { get; set; }
>     public int RefreshTokenExpiration { get; set; }
> }
> 
> ```


> [!example]- Configuration in **Startup.cs**
> Install `Microsoft.AspNetCore.Authentication.JwtBearer` NuGet package
> Add JWT Bearer authentication in the `ConfigureServices` method.
> 
> ``` csharp
> public void ConfigureServices(IServiceCollection services)
> {
>     var jwtTokenConfig = Configuration.GetSection("jwtTokenConfig").Get<JwtTokenConfig>();
>     services.AddSingleton(jwtTokenConfig);
>     services.AddAuthentication(x =>
>     {
>         x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
>         x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
>     }).AddJwtBearer(x =>
>     {
>         x.RequireHttpsMetadata = true;
>         x.SaveToken = true;
>         x.TokenValidationParameters = new TokenValidationParameters
>         {
>             ValidateIssuer = true,
>             ValidIssuer = jwtTokenConfig.Issuer,
>             ValidateIssuerSigningKey = true,
>             IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtTokenConfig.Secret)),
>             ValidAudience = jwtTokenConfig.Audience,
>             ValidateAudience = true,
>             ValidateLifetime = true,
>             ClockSkew = TimeSpan.FromMinutes(1)
>         };
>     });
>     // ...
> }
> 
> ```
> 
> Add the `app.UseAuthentication()` method in the `Configure` method.
> 
> ``` csharp
> public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
> {
>     // ...
>     app.UseRouting();
>     app.UseAuthentication();
>     app.UseAuthorization();
>     app.UseEndpoints(endpoints =>
>     {
>         endpoints.MapControllers();
>     });
> }
> 
> ```

## Token Generation and Login

> [!example]- JwtAuthManager Class
> 
> ``` csharp
> public class JwtAuthManager : IJwtAuthManager
> {
>     public IImmutableDictionary<string, RefreshToken> UsersRefreshTokensReadOnlyDictionary => _usersRefreshTokens.ToImmutableDictionary();
>     private readonly ConcurrentDictionary<string, RefreshToken> _usersRefreshTokens;
>     private readonly JwtTokenConfig _jwtTokenConfig;
>     private readonly byte[] _secret;
> 
>     public JwtAuthManager(JwtTokenConfig jwtTokenConfig)
>     {
>         _jwtTokenConfig = jwtTokenConfig;
>         _usersRefreshTokens = new ConcurrentDictionary<string, RefreshToken>();
>         _secret = Encoding.ASCII.GetBytes(jwtTokenConfig.Secret);
>     }
> 
>     public JwtAuthResult GenerateTokens(string username, Claim[] claims, DateTime now)
>     {
>         var shouldAddAudienceClaim = string.IsNullOrWhiteSpace(claims?.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Aud)?.Value);
>         var jwtToken = new JwtSecurityToken(
>             _jwtTokenConfig.Issuer,
>             shouldAddAudienceClaim ? _jwtTokenConfig.Audience : string.Empty,
>             claims,
>             expires: now.AddMinutes(_jwtTokenConfig.AccessTokenExpiration),
>             signingCredentials: new SigningCredentials(new SymmetricSecurityKey(_secret), SecurityAlgorithms.HmacSha256Signature));
>         var accessToken = new JwtSecurityTokenHandler().WriteToken(jwtToken);
> 
>         var refreshToken = new RefreshToken
>         {
>             UserName = username,
>             TokenString = GenerateRefreshTokenString(),
>             ExpireAt = now.AddMinutes(_jwtTokenConfig.RefreshTokenExpiration)
>         };
>         _usersRefreshTokens.AddOrUpdate(refreshToken.TokenString, refreshToken, (s, t) => refreshToken);
> 
>         return new JwtAuthResult
>         {
>             AccessToken = accessToken,
>             RefreshToken = refreshToken
>         };
>     }
> 
>     private static string GenerateRefreshTokenString()
>     {
>         var randomNumber = new byte[32];
>         using var randomNumberGenerator = RandomNumberGenerator.Create();
>         randomNumberGenerator.GetBytes(randomNumber);
>         return Convert.ToBase64String(randomNumber);
>     }
> }
> 
> ```

> [!example]- AccountController
> ``` csharp
> [ApiController]
> [Authorize]
> [Route("api/[controller]")]
> public class AccountController : ControllerBase
> {
>     private readonly ILogger<AccountController> _logger;
>     private readonly IUserService _userService;
>     private readonly IJwtAuthManager _jwtAuthManager;
> 
>     public AccountController(ILogger<AccountController> logger, IUserService userService, IJwtAuthManager jwtAuthManager)
>     {
>         _logger = logger;
>         _userService = userService;
>         _jwtAuthManager = jwtAuthManager;
>     }
> 
>     [AllowAnonymous]
>     [HttpPost("login")]
>     public ActionResult Login([FromBody] LoginRequest request)
>     {
>         if (!ModelState.IsValid)
>         {
>             return BadRequest();
>         }
> 
>         if (!_userService.IsValidUserCredentials(request.UserName, request.Password))
>         {
>             return Unauthorized();
>         }
> 
>         var role = _userService.GetUserRole(request.UserName);
>         var claims = new[]
>         {
>             new Claim(ClaimTypes.Name, request.UserName),
>             new Claim(ClaimTypes.Role, role)
>         };
> 
>         var jwtResult = _jwtAuthManager.GenerateTokens(request.UserName, claims, DateTime.Now);
>         _logger.LogInformation($"User [{request.UserName}] logged in the system.");
>         return Ok(new LoginResult
>         {
>             UserName = request.UserName,
>             Role = role,
>             AccessToken = jwtResult.AccessToken,
>             RefreshToken = jwtResult.RefreshToken.TokenString
>         });
>     }
> }
> 
> ```


> [!example]- Logout
> ``` csharp
> [HttpPost("logout")]
> [Authorize]
> public ActionResult Logout()
> {
>     var userName = User.Identity.Name;
>     _jwtAuthManager.RemoveRefreshTokenByUserName(userName); // can be more specific to ip, user agent, device name, etc.
>     _logger.LogInformation($"User [{userName}] logged out the system.");
>     return Ok();
> }
> 
> ```

## Refresh the JWT Access Token

> [!example]- Refresh Token API Endpoint
> ``` csharp
> [HttpPost("refresh-token")]
> [Authorize]
> public async Task<ActionResult> RefreshToken([FromBody] RefreshTokenRequest request)
> {
>     try
>     {
>         var userName = User.Identity.Name;
>         _logger.LogInformation($"User [{userName}] is trying to refresh JWT token.");
> 
>         if (string.IsNullOrWhiteSpace(request.RefreshToken))
>         {
>             return Unauthorized();
>         }
> 
>         var accessToken = await HttpContext.GetTokenAsync("Bearer", "access_token");
>         var jwtResult = _jwtAuthManager.Refresh(request.RefreshToken, accessToken, DateTime.Now);
>         _logger.LogInformation($"User [{userName}] has refreshed JWT token.");
>         return Ok(new LoginResult
>         {
>             UserName = userName,
>             Role = User.FindFirst(ClaimTypes.Role)?.Value ?? string.Empty,
>             AccessToken = jwtResult.AccessToken,
>             RefreshToken = jwtResult.RefreshToken.TokenString
>         });
>     }
>     catch (SecurityTokenException e)
>     {
>         return Unauthorized(e.Message); // return 401 so that the client side can redirect the user to login page
>     }
> }
> 
> ```


> [!example]- Refresh Method in JwtAuthManager
> ```
> public JwtAuthResult Refresh(string refreshToken, string accessToken, DateTime now)
> {
>     var (principal, jwtToken) = DecodeJwtToken(accessToken);
>     if (jwtToken == null || !jwtToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256Signature))
>     {
>         throw new SecurityTokenException("Invalid token");
>     }
> 
>     var userName = principal.Identity.Name;
>     if (!_usersRefreshTokens.TryGetValue(refreshToken, out var existingRefreshToken))
>     {
>         throw new SecurityTokenException("Invalid token");
>     }
>     if (existingRefreshToken.UserName != userName || existingRefreshToken.ExpireAt < now)
>     {
>         throw new SecurityTokenException("Invalid token");
>     }
> 
>     return GenerateTokens(userName, principal.Claims.ToArray(), now); // need to recover the original claims
> }
> 
> public (ClaimsPrincipal, JwtSecurityToken) DecodeJwtToken(string token)
> {
>     if (string.IsNullOrWhiteSpace(token))
>     {
>         throw new SecurityTokenException("Invalid token");
>     }
>     var principal = new JwtSecurityTokenHandler()
>         .ValidateToken(token,
>             new TokenValidationParameters
>             {
>                 ValidateIssuer = true,
>                 ValidIssuer = _jwtTokenConfig.Issuer,
>                 ValidateIssuerSigningKey = true,
>                 IssuerSigningKey = new SymmetricSecurityKey(_secret),
>                 ValidAudience = _jwtTokenConfig.Audience,
>                 ValidateAudience = true,
>                 ValidateLifetime = true,
>                 ClockSkew = TimeSpan.FromMinutes(1)
>             },
>             out var validatedToken);
>     return (principal, validatedToken as JwtSecurityToken);
> }
> ```

In the code above, the `DecodeJwtToken` method validates the original JWT access token and recovers the original claims. The `Refresh` method generates a new access token and refresh token if the provided refresh token is valid.

## Summary

In the code above, the `DecodeJwtToken` method validates the original JWT access token and recovers the original claims. The `Refresh` method generates a new access token and refresh token if the provided refresh token is valid.

# Reference:

[JWT Auth in ASP.NET Core | codeburst](https://codeburst.io/jwt-auth-in-asp-net-core-148fb72bed03?gi=361ba281760d)