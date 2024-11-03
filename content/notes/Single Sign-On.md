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

# Single Sign-On (SSO)

## Diagram

![[a82bcd2d-cb65-4c35-b53c-e3a9f771f0b3_2283x1953.webp]] ![[ff52780c-e94e-4d80-a083-7c9cbead8b6f_1600x1473.webp]]

## Overview

Single Sign-On (SSO) is an authentication mechanism that enables users to access multiple applications with a single set of credentials. By centralizing the login process, SSO improves user convenience and simplifies credential management across applications.

## How SSO Works

1. **User Initiates Access**: Attempts to access a protected resource.
2. **Authentication Request**: The application requests authentication through the SSO service.
3. **Session Verification**: If a session already exists, the SSO service provides a token. Otherwise, it prompts the user to log in.
4. **User Authenticates**: Credentials are submitted and verified by a central authentication system.
5. **Token Generation**: Upon successful verification, the SSO service generates a token for the session.
6. **Access Granted**: The application validates the token and grants access.

## Benefits of SSO

> [!success] **Pros**
> 
> - **Improved User Experience**: Single login grants access to multiple apps, reducing login frequency.
> - **Centralized Authentication**: Simplifies credential and policy management from a single location.
> - **Increased Productivity**: Reduces the time spent on logging in and managing passwords.
> - **Enhanced Security**: Allows consistent and centralized application of security policies.

> [!danger] **Cons**
> 
> - **Single Point of Failure**: SSO downtime or a security compromise can impact access across all connected systems.
> - **Complex Integration**: Requires setting up and maintaining SSO across multiple applications.
> - **Security Vulnerability**: Compromised SSO credentials could grant access to multiple applications.

## Common SSO Protocols and Standards

1. **[[Security Assertion Markup Language|SAML]]**: XML-based, widely used in enterprise environments for secure identity federation.
2. **[[OAuth 2.0|OAuth]]**: Authorization framework often paired with OpenID Connect for user profile sharing.
3. **[[OpenID Connect]]**: Authentication layer on top of OAuth 2.0, frequently used for handling identity and profile information.
4. **Kerberos**: Network authentication protocol that utilizes cryptographic keys and a trusted third-party system.

## Real-World Examples

- **Google Workspace**: Unified access to Gmail, Google Drive, Calendar, and other Google services with a single login.
- **Microsoft 365**: Single sign-on to Outlook, OneDrive, SharePoint, and other Microsoft applications.
- **Enterprise Networks**: Many organizations implement SSO for streamlined employee access to internal systems and applications.

## Summary

SSO is a valuable authentication method that simplifies access to multiple applications using one set of credentials. While it significantly enhances user experience and centralizes management, SSO implementation requires careful planning to address potential security and operational challenges.
