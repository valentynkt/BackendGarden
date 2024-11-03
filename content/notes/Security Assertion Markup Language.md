---
created: 2024-05-21 14:21
aliases:
  - SAML
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Single Sign-On]], [[Web Tokens|Token-Based]]

#  Security Assertion Markup Language (SAML)
## Overview 

Security Assertion Markup Language (SAML) is an [[XML]]-based framework for exchanging authentication and authorization data between two entities: an identity provider (IdP) and a service provider (SP). It is commonly used to enable Single Sign-On (SSO) across different domains, allowing users to authenticate once and gain access to multiple applications without needing to log in separately.

> [!abstract] **SAML**
>  enables secure, seamless Single Sign-On (SSO) by transferring authentication data between an identity provider (IdP) and a service provider (SP), making it ideal for environments with multiple applications.

## Key Components

> [!summary]
> 
> - **Identity Provider (IdP)**: Authenticates users and provides identity information to service providers.
> - **Service Provider (SP)**: Provides services to users and relies on the IdP to authenticate users.
> - **SAML Assertions**: XML documents that contain user authentication and authorization information sent from the IdP to the SP.
> - **SAML Request**: A request sent by the SP to the IdP asking for an assertion.
> - **SAML Response**: The IdP's response, containing assertions that the SP uses to grant access.

## How SAML Works

1. **User Requests Access**: The user tries to access a service (SP) that requires authentication.
2. **SAML Request**: The SP generates a SAML request and redirects the user to the IdP.
3. **User Authentication**: The IdP authenticates the user (often by asking for login credentials if the user is not already authenticated).
4. **SAML Assertion**: After authentication, the IdP generates a SAML response with assertions about the user’s identity and authorization.
5. **Access Granted**: The user is redirected back to the SP with the SAML response, which the SP validates. Upon successful validation, the SP grants the user access.

> [!note] 
> This entire process is transparent to the user, who only needs to authenticate once with the IdP, resulting in a seamless experience when accessing multiple SPs.

## Types of SAML Assertions

> [!important]
> 
> - **Authentication Assertion**: Confirms the user’s identity and the time of authentication.
> - **Attribute Assertion**: Provides additional user attributes (e.g., name, email, roles) for authorization decisions.
> - **Authorization Decision Assertion**: Specifies whether the user has permission to access a particular resource.

## Pros and Cons

> [!success] Pros
> 
> - **Single Sign-On (SSO)**: Simplifies user experience by reducing login prompts across applications.
> - **Centralized Authentication**: Enhances security by centralizing authentication in one place.
> - **Reduced Password Fatigue**: Fewer login prompts lead to less password reuse and better overall security practices.

> [!danger] Cons
> 
> - **Complexity**: Implementing and configuring SAML can be complex, especially across different domains and platforms.
> - **Compatibility**: Not all applications natively support SAML, which may require additional configuration or middleware.
> - **Dependence on IdP**: If the IdP experiences downtime, users may be unable to authenticate across all connected SPs.

## Use Cases

> [!summary]
> 
> - **Enterprise SSO**: Used within enterprises to enable employees to access multiple business applications with a single login.
> - **Partner Portal Access**: Allows users from partner organizations to access external services securely.
> - **Federated Identity Management**: Facilitates secure identity sharing across different organizations or departments.

## Summary

Security Assertion Markup Language (SAML) is a widely used protocol for enabling secure Single Sign-On (SSO) by exchanging authentication and authorization data between an identity provider and a service provider. By implementing SAML, organizations can streamline user access to multiple applications, enhance security, and improve the user experience across various platforms and services.
