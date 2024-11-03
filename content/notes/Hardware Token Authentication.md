---
created: 2024-05-20 18:56
aliases:
  - Hardware Token
  - Hardware Auth
  - Hardware Authentication
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Passwordless Authentication]]

# Hardware Token Authentication

## Overview

Hardware Token Authentication uses a physical device that generates one-time codes for login. Often part of multi-factor authentication (MFA), it adds a strong layer of security by requiring a physical token.

## How It Works

1. **Login Attempt**: The user initiates login.
2. **Token Generation**: The hardware token produces a one-time code.
3. **Code Entry**: The user enters the code.
4. **Verification**: The system checks the code for access.

## Common Hardware Tokens

- **YubiKey**: Provides OTP, FIDO U2F, FIDO2, and smart card functions.
- **RSA SecurID**: Generates OTPs every 60 seconds, ideal for enterprise security.
- **Google Titan**: Security key supporting FIDO U2F and FIDO2, often used for Google accounts.

## Pros and Cons

> [!success] **Pros**
> 
> - **High Security**: Resistant to phishing and online attacks.
> - **Offline Access**: Works without an internet connection.
> - **Easy for Users**: Simple code-based login.

> [!danger] **Cons**
> 
> - **Costly**: Requires distributing physical tokens.
> - **Token Loss**: Risk of users losing access if token is misplaced.
> - **Administrative Overhead**: Tokens need management and maintenance.

## Use Cases

- **Corporate Security**: Secures enterprise networks and VPNs.
- **Online Banking**: Protects online accounts with an added layer.
- **High-Security Environments**: Used in government and military for secure access.