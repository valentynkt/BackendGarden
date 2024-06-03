---
created: 2024-05-09 17:54
aliases:
  - SSO
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Web Security]], [[Authentication]]

# Single Sign-On

## Diagram

![[a82bcd2d-cb65-4c35-b53c-e3a9f771f0b3_2283x1953.webp]]
![[ff52780c-e94e-4d80-a083-7c9cbead8b6f_1600x1473.webp]]

## Overview

Single Sign-On (SSO) is an authentication process that allows a user to access multiple applications or services with a single set of login credentials (e.g., username and password). SSO improves user experience by reducing the number of times a user has to log in and enhances security by centralizing authentication.

## How SSO Works

1. **User Initiates Access**: The user attempts to access a protected resource or application.
2. **Authentication Request**: The application sends an authentication request to the SSO service.
3. **SSO Service**: The SSO service checks if the user has an active session.
    - If the user is already authenticated, the SSO service returns a token to the application, allowing access.
    - If the user is not authenticated, the SSO service prompts the user to log in.
4. **User [[Authentication]]**: The user provides their login credentials, which the SSO service validates against a central authentication system.
5. **Token Generation**: Upon successful authentication, the SSO service generates a token or ticket.
6. **Access Granted**: The application receives the token and grants the user access to the resource.

## Benefits of SSO

> [!success]- **Pros**
> 
> - **Improved User Experience**: Users only need to remember one set of credentials and log in once to access multiple applications.
> - **Centralized Authentication**: Simplifies management of user credentials and access control policies.
> - **Increased Productivity**: Reduces the time spent on logging in and managing multiple passwords.
> - **Enhanced Security**: Centralized authentication allows for better monitoring and enforcement of security policies (e.g., multi-factor authentication, password complexity).

> [!danger]- **Cons**
> 
> - **Single Point of Failure**: If the SSO service is compromised or experiences downtime, users may be unable to access multiple applications.
> - **Complex Implementation**: Integrating SSO with various applications and maintaining the system can be complex and resource-intensive.
> - **Security Risks**: If an attacker gains access to SSO credentials, they potentially gain access to all linked applications.

## Common SSO Protocols and Standards

1. **[[Security Assertion Markup Language]] (SAML)**:
    
    - XML-based framework for exchanging authentication and authorization data.
    - Commonly used in enterprise environments.
    - Provides robust security features.
2. **OAuth**:
	- [[Authorization]] Framework
    - Open standard for access delegation.
    - Often used for authorizing third-party applications to access user information.
    - Frequently combined with OpenID Connect for authentication.
3. **OpenID Connect**:
    
    - Layer on top of OAuth 2.0.
    - Provides authentication and basic profile information.
    - Widely used in consumer applications.
4. **Kerberos**:
    
    - Network authentication protocol designed to provide strong authentication for client-server applications.
    - Uses secret-key cryptography and a trusted third party (Key Distribution Center).


## Real-World Examples

- **Google Suite**: Users log in once to access Gmail, Google Drive, Google Calendar, and other services.
- **Microsoft 365**: Provides access to Outlook, OneDrive, SharePoint, and other Microsoft applications with a single login.
- **Corporate Networks**: Employees use SSO to access various internal applications and services, such as email, intranet, and business tools.

## Conclusion

Single Sign-On (SSO) simplifies the login process by allowing users to access multiple applications with a single set of credentials. While it improves user experience and centralizes authentication, it also introduces potential risks and complexities that must be carefully managed. Understanding the benefits, challenges, and implementation steps is crucial for effectively leveraging SSO in any organization.