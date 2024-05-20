Date and Time: <u> 2023-10-21 20:05 </u>
Status: #LearningIT
Tags: [[API]], [[Authentication and Authorization]], [[JSON Web Tokens]]

# OAuth 2.0

![[Pasted image 20231019204643.png]]
Below we will take a look on OAuth 2.0 and how it works

OAuth 2.0 is an authorization framework that defines a token-based authorization process for how third-party applications can get consented access to users’ data. OAuth 2.0 is a very powerful protocol for user authorization, but it does not define a clear and secure way to handle user authentication.
## OAuth 2.0 Workflow
Before we will discuss about OAuth 2.0 Workflow we should understand the four specific roles that are involved into OAuth 2.0:

``` ad-important
- **Resource Owner(User)**: This is the user that grant a third-party services access to their data 

- **Client**: This is a third-party application that is accessing access to Resource Owner data. When the resource Owner grants access, the client receive access token that will be used to request resources according to it granted scope(access scope)

- **Authorization service(**OAuth server**)**:This is the place where creates, stores, and authenticate(check whether the token is valid) the token. Usually, there are two endpoints. They are usually`/oauth/auth` and `/oauth/token`.
The authorization server act as intermediary between Resource Owner and Resource Server. If Resource owrner authorize the request, Authorization service giving access token to the client, and Client can use this access token to access Resource Server. 

- **Resource Server**: This is the server that hosts the protected resources. It is reponsible for acceptint and responding to requests to access protected resources using an access token received from the client
```
In most cases, both Resource Server and OAuth Server are in one server.

OAuth 2.0 enables the resource owner (user) to give the client (the third-party application) access to their data without having to share their credentials. Instead, the credentials are shared with the authorization server, which issues an access token to the client. The client can then use this access token to get the user’s data from the resource server.

### Access and Refresh Tokens

Access tokens can be stored in different formats, the most common being the [[JSON Web Tokens|JSON Web Tokens]] (JSON Web Token) format. This format allows the token to contain encrypted data, which can be securely retrieved before the token expires.
Access tokens are often short-lived and therefore need to be re-generated upon expiration. Refresh tokens are used to obtain new access tokens and often have a longer lifespan than access tokens.

---
## Real-World example
Let's take Google and StackOverflow as an example. Google doesnt send all your data to StackOverflow upon you signed up using Google. First, it sends an access token. Both Google and Stackoverflow stores that access token for future usage. When Stackoverflow wants to get details about you, it sends a request to google server with that access token. Then google server check the validity of token and if it is valid, Google sends requested data to Stackoverflow

``` ad-important
- **Resource Owner(User)**:- the user is the person who signs up to the StackOverflow using google
- **Client**:- The client is a third-party application that you signed up. It can be a web application or mobile application. In here it is StackOverflow
- **Resource Server**:- This is the back-end of where resources/data is stored. In our case, it is google servers.
- **Resources**:-This is the place where your data is stored(the database).
- **OAuth server**:- This is the place where creates, stores, and authenticate(check whether the token is valid) the token. In our case, it is also google. Usually, there are two endpoints. They are usually`/oauth/auth` and `/oauth/token`
```

[[OAuth 2.0 Flows]]

## [[OAuth 2.0 Flows]]
![[OAuth 2.0 Flows#OAuth 2.0 Flows]]



## OAuth 2.0 Best Practices
When implementing OAuth 2.0 it is important to follow best practices in order to secure you application and protect user data
``` ad-important
- **Use short-lived access tokens:** Limiting the lifespan of access tokens is important for security. When you have short-lived access token you should provide refresh tokens(Which can also have limited lifespan but they live longer than access token). Refresh tokens allow legitimate clients to obtain new access tokens without involving the user. 
- **Limit token scope:** Access tokens should always have the smallest scope required for the specific application functionality. Do not provide unnecessary data scope.
- **Secure the application against common attack patterns**: It is important to take adequate measures to reduce your system’s vulnerability to attack. For instance, using the `state` parameter when initiating an authorization request—and validating the returned state against the initial value—can help protect against CSRF (Cross-Site Request Forgery) attacks. You should also implement rate limiting, which will help prevent Denial-of-Service (DoS) attacks.
- **Handle access tokens securely**: Access tokens should be sent in a request header when the client is requesting a resource from the resource server. They shouldn’t be stored as cookies or transmitted over query parameters. Additionally, the authorization server must include the HTTP “Cache-Control” response header field with a value of “no-store” in any response containing tokens, credentials, or other sensitive information.
- **Allow users to revoke access to their data**: OAuth 2.0 is designed in such a way that the resource owner has complete control of their data. It is therefore important to provide a mechanism to revoke tokens so that users can block unwanted access.
- **Provide clear documentation:** If you’re providing OAuth access to your users’ data, it’s crucial to provide clear, concise, and detailed documentation for the entire OAuth flow. This will help accelerate the onboarding process and increase adoption rates
```

## OAuth 2.0 and [[OpenID Connect]]


``` ad-important
While OAuth 2.0 is about resource access and sharing, OIDC is about user authentication. Its purpose is to give you one login for multiple sites. Each time you need to log in to a website using OIDC, you are redirected to your OpenID site where you log in, and then taken back to the website. For example, if you chose to sign in to Auth0 using your Google account then you used OIDC. Once you successfully authenticate with Google and authorize Auth0 to access your information, Google sends information back to Auth0 about the user and the authentication performed. This information is returned in a JWT. You'll receive an access token and if requested, an ID token.
```

OAuth 2.0 is an authorization framework that defines a token-based authorization process for how third-party applications can get consented access to users’ data. OAuth 2.0 is a very powerful protocol for user authorization, but it does not define a clear and secure way to handle user authentication.

The [OpenID protocol](https://en.wikipedia.org/wiki/OpenID) was introduced in 2005 as an open standard for single sign-on (SSO) and decentralized user authentication. It allowed users to log in to multiple websites using a single digital identity. An example of this type of flow is logging in to multiple websites using a Google account. OpenID defines how user authentication can be simplified, but it does not specify how user information should be securely exchanged between the client application and the identity provider.

The [OpenID Foundation](https://openid.net/foundation/) realized the need to integrate authentication into OAuth 2.0, and in 2014, they released the OpenID Connect protocol.

``` ad-important
**OAuth 2.0** provide us with token-based authorization process
OpenID Connect add authentication features to OAuth 2.0

**OIDC** builds on top of OAuth 2.0 and adds authentication and user information features. This solves the two problems highlighted earlier.
```

By combining the two, developers can leverage the authorization capabilities of OAuth 2.0 while obtaining verified user identity from OpenID Connect.
![[Pasted image 20231022181230.png]]

To achieve this synergy, OpenID Connect introduces new endpoints and token types to the OAuth 2.0 framework. It extends the standard OAuth 2.0 authorization flow by adding the ID token as an additional response. The ID token contains essential user information, allowing the client application to establish the user’s identity with confidence.

``` ad-important
One of the key advantages of using **OAuth 2.0** and **OpenID Connect** together is the ability to implement **single sign-on (SSO)** across multiple applications.
```

Once a user has authenticated with **Identity Provider (IdP)** or **OpenID Provider (OP)**, subsequent requests to other applications that support OpenID Connect can leverage the existing session. This eliminates the need for the user to log in multiple times.

These protocols provide standardized mechanisms for handling authentication and authorization, reducing the complexity of implementation and promoting interoperability across various systems and platforms.
# Reference:
https://medium.com/@vidura.prasangana16/what-is-oauth-2-0-476aabded278
https://blog.postman.com/what-is-oauth-2-0/

