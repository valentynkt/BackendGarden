---
created: 2024-05-20 14:39
aliases:
  - Password Auth Methods
  - Password-Based Login
  - Password Security
  - Password Based
  - Password-Based
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Authentication]]

# Password-Based Authentication

## Overview

Password-based authentication is one of the most common methods for verifying user identity. It involves a user providing a secret combination of characters, known only to them, to gain access to a system or application. Despite its widespread use, this method has both advantages and limitations.



>[!summary]- **Common Types**
>
>- **[[HTTP Basic Authentication]]**: A simple authentication scheme built into the HTTP protocol where the user credentials are encoded and sent with each request.
>- **[[Session-Cookie Authentication]]**: Involves creating a session on the server side after the user logs in. The server stores session information and sends a session identifier (session cookie) to the client, which is included in subsequent requests to maintain the session.
>- **[[Web Tokens|Token-Based Authentication]]**: Involves the user providing credentials to receive a token, which is then used for subsequent requests instead of resending the username and password.

## How Password-Based Authentication Works

1. **User Request**: The user attempts to access a system or application.
2. **Credentials Submission**: The user enters their username and password.
3. **Verification**: The system verifies the credentials against stored information.
4. **Access Granted**: If the credentials match, the user is granted access.

## Best Practices

> [!important]- **Best Practices**
> 
> - **Enforce Strong Passwords**: Require passwords to meet complexity criteria (e.g., length, special characters).
> - **[[Cryptography Hashing|Hashing]] and [[Cryptography Salt|Salt]]**: Store passwords securely by hashing and salting them.
> - **Regular Updates**: Encourage users to update passwords regularly.
> - **Monitor and Alert**: Implement monitoring and alerting for suspicious login attempts.
> - **Account Lockout Mechanism**: Lock accounts after multiple failed login attempts to prevent brute-force attacks.

## Pros and Cons

> [!success]- **Pros**
> - **Simplicity**: Easy to implement and use.
> - **Ubiquity**: Supported by nearly all systems and applications.
> - **Cost-Effective**: Requires minimal additional infrastructure or technology.

> [!danger]- **Cons**
> - **Security Risks**: Susceptible to attacks such as brute-force, phishing, and credential stuffing.
> - **User Management**: Can be cumbersome to manage, especially with password resets and recoveries.
> - **Password Fatigue**: Users often struggle with remembering multiple complex passwords, leading to poor practices like reusing passwords.

