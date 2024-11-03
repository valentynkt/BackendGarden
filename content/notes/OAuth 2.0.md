---
created: 2024-10-25 18:37
aliases:
  - OAuth
  - OAuth 2
tags:
  - LearningIT
  - seed🌱
---

link: [[Authentication]]

# OAuth 2.0

![[Pasted image 20231019204643.png]]

## Overview

OAuth 2.0 is an authorization framework that enables third-party applications to access a user’s resources without sharing user credentials. It provides a token-based authorization process, allowing users to grant applications access to specific data securely and efficiently.

---

## Core Components of OAuth 2.0

OAuth 2.0 involves four main roles, each critical to the authorization workflow:

> [!summary]
> - **Resource Owner (User)**: The individual granting access to their data.
> - **Client (Application)**: The third-party application requesting access to the user’s data.
> - **Authorization Server**: Issues and manages tokens, facilitating access requests.
> - **Resource Server**: Hosts the protected resources and verifies access using the provided tokens.

## OAuth 2.0 Workflow

OAuth 2.0 enables the resource owner to grant access to their data without directly sharing credentials. This involves:

1. **Authorization Request**: The client requests authorization from the user.
2. **Authorization Grant**: If approved, the client receives an authorization grant.
3. **Token Request**: The client exchanges the authorization grant for an access token from the authorization server.
4. **Access Resource**: The client uses the access token to access the protected resources on the resource server.

### Tokens in OAuth 2.0

- **Access Token**: A short-lived token enabling access to protected resources.
- **Refresh Token**: A long-lived token used to obtain new access tokens when they expire.
- **Token Format**: Most commonly, access tokens are [[JSON Web Tokens|JWT]]s, securely storing claims and permissions.

## Real-World Example

Consider signing up for Stack Overflow using a Google account:

> [!info] Real-World Scenario
> - **Resource Owner**: The user registering on Stack Overflow.
> - **Client**: Stack Overflow as the third-party app requesting access.
> - **Authorization Server**: Google, verifying the user and issuing an access token.
> - **Resource Server**: Google servers storing the user’s data.

In this example, Google issues an access token to Stack Overflow, allowing it to access basic user profile data without direct access to the user's credentials.

---

## OAuth 2.0 Flows

OAuth 2.0 offers multiple flows for different application needs:

> [!summary] 
> 
> - **Authorization Code Flow**: Secure flow for server-side applications, using an authorization code to exchange for an access token.
> - **Implicit Flow**: Simplified flow for single-page applications where tokens are returned directly.
> - **Client Credentials Flow**: Used for machine-to-machine (M2M) authentication.
> - **Resource Owner Password Credentials Flow**: Suitable for legacy systems, where users provide credentials directly to the client.

For detailed flow explanations, see: [Authentication and Authorization Flows](https://auth0.com/docs/get-started/authentication-and-authorization-flow)

---

## Best Practices for OAuth 2.0

Following best practices can improve the security and efficiency of OAuth 2.0 implementations:

> [!important] Best Practices
> 
> - **Use Short-Lived Access Tokens**: Limit the lifespan to reduce security risks; provide refresh tokens if necessary.
> - **Limit Token Scope**: Ensure tokens have only the minimum permissions required.
> - **Secure Token Storage**: Store tokens in headers, avoid storing them in cookies or URLs.
> - **Implement Rate Limiting**: Protect against DoS attacks with rate limiting on token issuance.
> - **Token Revocation**: Allow users to revoke access to their data.

---

## OAuth 2.0 and [[OpenID Connect]] Integration

OAuth 2.0 focuses on resource authorization, while **OpenID Connect** (OIDC) adds a layer of user authentication. OIDC builds on OAuth 2.0, allowing applications to authenticate users and retrieve basic profile information.

> [!summary]
> 
> - **OAuth 2.0**: Manages authorization and data sharing between applications.
> - **OpenID Connect**: Adds authentication capabilities, enabling user identity verification through OAuth 2.0.

Using both protocols, applications benefit from secure, streamlined authentication and authorization, enabling Single Sign-On (SSO) across multiple applications.

> ![[Pasted image 20231022181230.png]]

### Advantages of Using OAuth 2.0 with OpenID Connect

> [!success] Key Benefits
> - **Enhanced Security**: Combines authorization with identity verification.
> - **SSO Capabilities**: Simplifies login across multiple apps with one authentication process.
> - **Streamlined User Experience**: Reduces login prompts, improving usability.

---

## Summary

OAuth 2.0 is a robust authorization framework that enables secure data sharing between applications while protecting user credentials. When paired with OpenID Connect, it provides complete user identity verification, facilitating Single Sign-On and ensuring a seamless, secure experience.

--- 

# Reference:
[Authentication and Authorization Flows](https://auth0.com/docs/get-started/authentication-and-authorization-flow)
[What is OAuth 2.0. What the heck is OAuth 2.0? | Medium](https://medium.com/@vidura.prasangana16/what-is-oauth-2-0-476aabded278)
[What Is OAuth 2.0? | Postman Blog](https://blog.postman.com/what-is-oauth-2-0/)

