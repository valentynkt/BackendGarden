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

Multi-Factor Authentication (MFA) is a security approach that requires users to provide multiple forms of identification to verify their identity before accessing a system, application, or service. This method enhances security by combining independent credentials categorized as **something you know**, **something you have**, and **something you are**.

MFA significantly reduces the risk of unauthorized access, making it challenging for attackers to breach accounts. Even if one factor is compromised, the other required factors help maintain security.

> [!abstract] 
> MFA strengthens security by requiring multiple identifiers, ensuring that only authorized users gain access to sensitive systems and data.

## Key Concepts

> [!important]
> 
> - **Something You Know**: A password or PIN.
> - **Something You Have**: A [[Hardware Token Authentication|hardware token]], smartphone, or smart card.
> - **Something You Are**: [[Biometric Authentication|biometric verification]], like a fingerprint or facial recognition.

## Types of MFA

### Two-Factor Authentication (2FA)

Two-Factor Authentication (2FA) uses two distinct factors from the MFA categories:

> [!example] **2FA Example**
> 
> - **Something You Know**: Password
> - **Something You Have**: OTP sent to a mobile device
> 
> The user logs in with a password and confirms access with an OTP received on their phone.

### Three-Factor Authentication (3FA)

Three-Factor Authentication (3FA) increases security by incorporating three unique factors:

> [!example] **3FA Example**
> 
> - **Something You Know**: Password
> - **Something You Have**: Smart card
> - **Something You Are**: Fingerprint scan
> 
> All three forms of authentication are required for system access.

### Four-Factor Authentication (4FA)

Four-Factor Authentication (4FA) offers maximum security, often adding a location-based verification:

> [!example] **4FA Example**
> 
> - **Something You Know**: Password
> - **Something You Have**: Hardware token
> - **Something You Are**: Fingerprint scan
> - **Somewhere You Are**: Location-based verification
> 
> Access requires all four authentication factors.

## How MFA Works

1. **Login Attempt**: The user initiates login by entering their primary credentials (e.g., username and password).
2. **Primary Authentication**: The system verifies initial credentials.
3. **Additional Verification**: The system requests further verification, such as:
    - An **[[One-Time Password]] (OTP)** sent to the user’s mobile device.
    - A **[[Biometric Authentication|biometric scan]]**, like a fingerprint or face scan.
    - A **[[Hardware Token Authentication|hardware token]]** that generates an OTP.
4. **Access Granted**: Upon verifying all factors, the user gains access.

## Summary

Multi-Factor Authentication (MFA) is essential for modern security strategies, providing robust protection by requiring multiple identifiers. While MFA can introduce added complexity, its security benefits make it a critical tool in safeguarding sensitive information.
