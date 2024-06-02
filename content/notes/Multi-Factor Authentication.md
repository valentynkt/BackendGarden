---
created: 2024-05-20 18:57
aliases:
  - MFA
  - Two-Factor Authentication
  - 2FA
  - 3FA
  - 4FA
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Authentication]]

# Multi-Factor Authentication (MFA)
## Overview

Multi-Factor Authentication (MFA) is a security mechanism that requires users to provide multiple forms of identification to verify their identity before granting access to a system, application, or service. This approach enhances security by combining two or more independent credentials: what the user knows, what the user has, and what the user is.

MFA significantly reduces the risk of unauthorized access by making it more difficult for attackers to compromise an account. Even if one factor is compromised, additional authentication factors are needed to gain access.

> [!abstract] 
> MFA enhances security by requiring multiple forms of identification, ensuring that only authorized users can access sensitive information.

## Key Concepts

> [!important]
> 
> - **Something You Know**: A password or PIN.
> - **Something You Have**: A [[Hardware Token Authentication|Hardware Token]], a smartphone, or a smart card.
> - **Something You Are**: [[Biometric Authentication|Biometric Verification]], such as a fingerprint or facial recognition.

## Types of MFA

### Two-Factor Authentication (2FA)

Two-Factor Authentication (2FA) involves verifying the user's identity using two different factors from the common authentication factors:

> [!example] **2FA Example**
> 
> - **Something You Know**: Password
> - **Something You Have**: OTP sent to a mobile phone
> 
> The user logs in with their password and then enters the OTP received on their phone to gain access.

### Three-Factor Authentication (3FA)

Three-Factor Authentication (3FA) adds an additional layer of security by incorporating three different factors from the common authentication factors:

> [!example] **3FA Example**
> 
> - **Something You Know**: Password
> - **Something You Have**: Smart card
> - **Something You Are**: Fingerprint scan
> 
> The user must provide all three forms of authentication to access the system.

### Four-Factor Authentication (4FA)

Four-Factor Authentication (4FA) further increases security by requiring four different factors, often incorporating an additional "somewhere you are" verification:

> [!example] **4FA Example**
> 
> - **Something You Know**: Password
> - **Something You Have**: Hardware token
> - **Something You Are**: Fingerprint scan
> - **Somewhere You Are**: Location-based verification
> 
> All four forms of authentication are required to gain access.

## How MFA Works

1. **User Login Attempt**: The user initiates a login attempt by entering their username and password.
2. **Initial Authentication**: The system verifies the user's credentials (username and password).
3. **Additional Verification**: The system requests additional authentication factors, such as:
    - A **[[One-Time Password]] (OTP)** sent to the user's mobile device.
    - A **[[Biometric Authentication|biometric scan]]**, such as a fingerprint or facial recognition.
    - A **[[Hardware Token Authentication|Hardware Token]]** that generates an OTP.
4. **Access Granted**: If the additional authentication factors are verified, the user is granted access.


## Summary

Multi-Factor Authentication (MFA) is a critical security measure that enhances protection by requiring multiple forms of identification from users. While it introduces some complexity and potential costs, its benefits in terms of enhanced security and user trust make it an essential component of modern security strategies.