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
  - seed🌱
links:
---

link:

# Multi-Factor Authentication (MFA)

## Overview

Multi-Factor Authentication (MFA) is a security mechanism that requires users to provide multiple forms of identification to verify their identity before granting access to a system, application, or service. This approach enhances security by combining two or more independent credentials: what the user knows, what the user has, and what the user is.

MFA significantly reduces the risk of unauthorized access as it makes it more difficult for attackers to compromise an account. Even if one factor is compromised, additional authentication factors are needed to gain access.

> [!summary] **Common Authentication Factors**
> 
> - **Something You Know**: A password or PIN.
> - **Something You Have**: A hardware token, a smartphone, or a smart card.
> - **Something You Are**: Biometric verification, such as a fingerprint or facial recognition.

## Types of MFA

> [!example]- Two-Factor Authentication (2FA)
> Two-Factor Authentication (2FA) involves verifying the user's identity using two different factors from the common authentication factors:
> 
> 1. **Something You Know**
> 2. **Something You Have**
> 3. **Something You Are**
> 
> **Example**: A common implementation of 2FA is using a password (something you know) and an OTP sent to a mobile phone (something you have). The user logs in with their password and then enters the OTP received on their phone to gain access.


> [!example]- Three-Factor Authentication (3FA)
> Three-Factor Authentication (3FA) adds an additional layer of security by incorporating three different factors from the common authentication factors:
> 
> 1. **Something You Know**
> 2. **Something You Have**
> 3. **Something You Are**
> 
> **Example**: An example of 3FA could involve using a password (something you know), a smart card (something you have), and a fingerprint scan (something you are). The user must provide all three forms of authentication to access the system.


> [!example]- **Four-Factor Authentication (4FA)**
>  Four-Factor Authentication (4FA) further increases security by requiring four different factors, often incorporating an additional "somewhere you are" verification:
> 
> 1. **Something You Know**
> 2. **Something You Have**
> 3. **Something You Are**
> 4. **Somewhere You Are**
> 
> **Example**: An implementation of 4FA might involve using a password (something you know), a hardware token (something you have), a fingerprint scan (something you are), and location-based verification (somewhere you are). All four forms of authentication are required to gain access.

## How MFA Works

1. **User Login Attempt**: The user initiates a login attempt by entering their username and password.
2. **Initial Authentication**: The system verifies the user's credentials (username and password).
3. **Additional Verification**: The system requests additional authentication factors, such as:
    - **A [[One-Time Password]] (OTP)** sent to the user's mobile device.
    - **A biometric scan**, such as a fingerprint or facial recognition.
    - **A hardware token** that generates an OTP.
4. **Access Granted**: If the additional authentication factors are verified, the user is granted access.

## Examples of Authentication Methods

> [!summary] Something You Have
> - **[[Email Link Authentication]]**: Users receive a link via email to authenticate. Clicking the link logs them in without needing a password.
> - **[[Push Notification Authentication]]**: Sends a push notification to the user's mobile device, which they must approve to log in.
> - **[[Hardware Token Authentication]]**: Utilizes physical devices like USB tokens or smart cards that generate a one-time password (OTP) or cryptographic key.


> [!summary] Something You Are
> - **[[Biometric Authentication]]**: Uses unique biological traits, such as fingerprints, facial recognition, or iris scans, to verify identity.

## Pros/Cons

> [!success] **Pros**
> 
> - **Enhanced Security**: Significantly reduces the risk of unauthorized access by requiring multiple forms of verification.
> - **Mitigates Password Weaknesses**: Protects against password-based attacks such as phishing, brute force, and credential stuffing.
> - **Increased Trust**: Builds trust among users and customers by ensuring that sensitive information and resources are protected.

> [!danger] **Cons**
> 
> - **Complexity**: Implementing and managing MFA can be complex and require additional resources.
> - **User Experience**: May introduce friction in the user experience, as users need to provide multiple forms of authentication.
> - **Cost**: Can involve additional costs for deploying and maintaining MFA solutions, especially hardware tokens or biometric systems.