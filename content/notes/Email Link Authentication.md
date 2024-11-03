---
created: 2024-05-20 18:19
aliases:
  - Email Auth
  - Email Authentication
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Passwordless Authentication]]

# Email Link Authentication

## Overview

Email Link Authentication is a passwordless method where users log in by clicking a one-time link sent to their email. This approach enhances security and simplifies the login process by eliminating passwords.

## How It Works

1. **User Login Request**: The user enters their email on the login page.
2. **Link Generation**: The server creates a one-time link and sends it to the user’s email.
3. **User Clicks Link**: The user clicks the link in their email, redirecting them to the application.
4. **Access Granted**: The server verifies the link and grants access.

## Pros and Cons

> [!success] **Pros**
> 
> - **Simplified Login**: Users don’t need to remember passwords.
> - **Improved Security**: Reduces risks like phishing and credential stuffing.
> - **Easy Setup**: Simple to integrate with existing systems.

> [!danger] **Cons**
> 
> - **Email Dependency**: Users must access their email to log in.
> - **Delivery Delays**: Email latency can impact user experience.
> - **Link Expiry**: Links need to expire quickly for security.

## Use Cases

- **User Login**: Quick, secure login for web and mobile apps.
- **Account Recovery**: Effective alternative for password recovery.