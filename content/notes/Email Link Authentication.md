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

Email Link Authentication is a [[Passwordless Authentication]] method where users log in by clicking a one-time link sent to their email address. This method enhances security by eliminating the need for passwords and simplifying the user login process.

## How It Works

1. **User Initiates Login**: The user enters their email address on the login page.
2. **Send Authentication Link**: The server generates a one-time link and sends it to the user's email.
3. **User Clicks Link**: The user clicks the link in their email, which redirects them to the application.
4. **Access Granted**: The server verifies the link and grants the user access.

## Pros and Cons

> [!success] Pros
> 
> - **Simple User Experience**: No need to remember or enter passwords.
> - **Enhanced Security**: Reduces the risk of password-related attacks.
> - **Easy Implementation**: Straightforward to set up and integrate.

> [!danger] Cons
> 
> - **Email Dependency**: Requires users to have access to their email.
> - **Potential Delays**: Email delivery can sometimes be slow or unreliable.
> - **Link Expiry**: One-time links need to be carefully managed to ensure they expire after a short period for security reasons.

## Use Cases

- **Account Login**: Simplifies the login process for applications and websites.
- **Password Recovery**: Can be used as a method for recovering access to accounts.