---
created: 2024-10-25 18:39
aliases: 
tags:
  - LearningIT
  - seed🌱
---

link: [[Authentication]]


# OpenID Connect
## Overview

OpenID Connect (OIDC) is an identity layer built on top of the OAuth 2.0 protocol. It allows applications to verify user identities based on the authentication performed by an **Identity Provider (IdP)** and obtain basic profile information. While OAuth 2.0 focuses on authorizing access to resources, OIDC specifically manages user authentication, enabling a unified identity for accessing multiple applications, commonly known as **Single Sign-On (SSO)**.

---

## Key Concepts

OpenID Connect brings additional components to OAuth 2.0, enhancing its capabilities for secure and user-friendly authentication.

> [!summary] **Core Components of OpenID Connect**
> 
> - **Identity Provider (IdP)**: Authenticates users and issues ID tokens.
> - **Client (Relying Party)**: The application that uses OIDC to verify a user’s identity.
> - **ID Token**: A token in JSON Web Token (JWT) format containing claims about the user, like name and email.
> - **UserInfo Endpoint**: An optional endpoint that provides additional user information.

---

## OIDC Flow

OIDC works by adding authentication capabilities to OAuth 2.0’s authorization flow. Here’s an outline of the process:

1. **User Requests Login**: The user requests access to the client application.
2. **Authorization Request**: The client sends a request to the IdP’s authorization endpoint.
3. **User Authentication**: If the user isn’t already authenticated, the IdP prompts the user to log in.
4. **Authorization Response**: The IdP returns an authorization code to the client.
5. **Token Request**: The client exchanges the authorization code for an **ID token** and optionally an access token at the token endpoint.
6. **Token Validation**: The client validates the ID token, verifying the user’s identity.
7. **UserInfo Request** (Optional): The client can fetch additional profile information from the UserInfo endpoint if needed.

![[Pasted image 20231022185726.png]]

This process provides the client with an authenticated session and allows it to retrieve essential user information securely.

---

## ID Token Structure

The **ID token** is at the heart of OIDC, serving as proof of authentication. It contains claims about the user and the authentication event:

> [!important] **Core Claims in the ID Token**
> 
> - **sub**: Unique identifier for the user.
> - **name**: User’s full name.
> - **email**: User’s email address.
> - **aud**: Intended audience, usually the client ID.
> - **iss**: Issuer identifier, indicating the IdP that issued the token.
> - **iat** and **exp**: Timestamps for when the token was issued and when it expires.
> - **nonce**: A unique string used to prevent replay attacks.

The ID token is typically encoded as a JWT, signed by the IdP’s private key, ensuring integrity and authenticity.

---

## OpenID Connect Scopes and Claims

OIDC extends OAuth 2.0 scopes to allow fine-grained access to user information. Some standard OIDC scopes include:

> [!summary] **Key OIDC Scopes**
> 
> - **openid**: Required for OIDC; initiates ID token issuance.
> - **profile**: Access to basic profile information (e.g., name, birthdate).
> - **email**: Grants access to the user’s email address.
> - **address**: Provides access to the user’s physical address.
> - **phone**: Grants access to the user’s phone number.

These scopes determine which claims are included in the ID token or accessible through the UserInfo endpoint.

---

## OIDC Flows

OIDC supports multiple flows to accommodate different application types and security needs. The following flows are available:

> [!info] **OIDC Authorization Flows**
> 
> - **Authorization Code Flow**: Recommended for server-side applications, offering high security by exchanging an authorization code for tokens.
> - **Implicit Flow**: Suitable for Single Page Applications (SPAs) but generally discouraged for high-security apps due to limitations on token handling.
> - **Hybrid Flow**: A mix of authorization code and implicit flows, enabling clients to receive tokens both directly and through code exchanges.
> - **Client Credentials Flow** (OAuth only): A flow for machine-to-machine authentication, not generally used for user identity verification in OIDC.

For detailed examples of each flow, refer to [[OAuth 2.0 Flows]].

---

## OIDC Best Practices

OIDC has specific best practices for ensuring secure and reliable authentication.

> [!important] Best Practices
> 
> - **Use Authorization Code Flow**: For most applications, this flow offers the best balance of security and user experience.
> - **Short-Lived Tokens**: Use short-lived ID tokens to reduce the risk of token misuse.
> - **Validate the ID Token**: Check claims such as `iss` (issuer) and `aud` (audience) to ensure the token is intended for your application.
> - **Nonce for Replay Protection**: Use the `nonce` parameter to mitigate replay attacks.
> - **Secure Storage of Refresh Tokens**: If refresh tokens are used, store them securely (e.g., in a secure HTTP-only cookie).

---

## OIDC vs OAuth 2.0

While both OAuth 2.0 and OIDC work with tokens and share a similar workflow, their purposes are distinct:

- **OAuth 2.0**: Focuses on authorization, allowing applications to access resources on behalf of a user.
- **OpenID Connect**: Focuses on authentication, enabling applications to verify user identity.

Using OAuth 2.0 with OIDC allows applications to benefit from both secure authorization and user verification, a common setup for applications needing single sign-on (SSO) and data access from external providers.

---

## Related Topics

> [!summary]
> 
> - **[[OAuth 2.0]]**: The underlying framework that OIDC builds upon, providing token-based authorization.
> - **[[Single Sign-On]] (SSO)**: A feature enabled by OIDC that allows users to access multiple applications with one login.
> - **[[JSON Web Tokens]] (JWT)**: A token format commonly used in OIDC to securely transmit information between client and IdP.
> - **[[Authentication]]**: OIDC strengthens authentication by providing a standardized user identity verification layer.
> - **[[Identity Management]]**: OIDC plays a central role in managing and verifying digital identities across applications.

---

## Summary

OpenID Connect (OIDC) extends OAuth 2.0 by adding an authentication layer, enabling secure, standardized user identity verification across multiple applications. By leveraging OAuth 2.0’s token-based flow, OIDC facilitates Single Sign-On (SSO) while ensuring user information is secure and authenticated. Integrating OIDC into applications provides an effective solution for both authorization and identity management in modern web applications.

# Reference:
[How OpenID Connect Works - OpenID Foundation](https://openid.net/developers/how-connect-works/)
[What Is OpenID Connect? | Postman Blog](https://blog.postman.com/what-is-openid-connect/)
 