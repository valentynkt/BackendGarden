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
  - bud🌿
links:
---

link: [[Authentication]]

# Password-Based Authentication

### Overview

Password-based authentication is a common user identity verification method where users provide a password to gain system access. This method, while simple, has both advantages and limitations.

> [!summary] **Types of Password-Based Authentication**
> 
> - **[[HTTP Basic Authentication]]**: Sends encoded credentials with each request.
> - **[[Session-Cookie Authentication]]**: Uses server-side sessions with cookies for ongoing access.
> - **[[Web Tokens|Token-Based Authentication]]**: Replaces credentials with a token for session management.

### How It Works

1. **User Request**: User tries to access the system.
2. **Credentials Submission**: User enters username and password.
3. **Verification**: System checks credentials.
4. **Access Granted**: Matching credentials allow access.

### Best Practices

> [!important] **Best Practices for Password-Based Authentication**
> 
> - **Strong Passwords**: Enforce complexity requirements.
> - **Hashing and Salting**: Store passwords securely.
> - **Regular Updates**: Encourage frequent password changes.
> - **Monitoring**: Alert on suspicious login attempts.
> - **Account Lockout**: Prevent brute-force attacks by locking accounts after multiple failures.

### Pros and Cons

> [!success] **Pros**
> 
> - **Simplicity**: Easy to implement and use.
> - **Ubiquity**: Supported universally across systems.
> - **Cost-Effective**: Minimal additional infrastructure needed.

> [!danger] **Cons**
> 
> - **Security Risks**: Susceptible to attacks like phishing and brute-force.
> - **User Management**: Requires frequent resets and management.
> - **Password Fatigue**: Users often reuse passwords, leading to vulnerabilities.