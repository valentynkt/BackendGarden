---
created: 2024-05-08 20:46
aliases: 
tags:
  - LearningIT
  - "#moc"
  - bud🌿
links:
---

link: [[Web]], [[API]]

# Web Security

## Diagram

![[45d16bfb-c541-4c01-8574-63cc39a5c560_1280x1664.webp]]

## Overview

Security in [[Web]] and [[API]] development involves implementing measures to protect data, communications, and resources from unauthorized access and attacks. This note consolidates key security concepts, strategies, and tools essential for safeguarding web applications and APIs.

## Content

> [!summary] Encryption and Data Protection
> 
> - **[[End-to-End Encryption]]**: Ensures data sent between two parties cannot be intercepted or tampered with, providing confidentiality and integrity.
> - **[[SSL and TLS Protocols]]**: Secure internet communications by encrypting data exchanged over the web, essential for web browsing, email, and more.
> - **[[Data Cryptography]]**: Secures data by transforming it into a format that cannot be easily understood by unauthorized users, using cryptographic algorithms and keys.


> [!summary] Network and Communication Security
> 
> - **[[VPN]]**: Virtual Private Networks secure and encrypt connections over less secure networks like the internet, protecting sensitive data and user identities.
> - **[[IPSec]] (Internet Protocol Security)**: A suite of protocols used to secure Internet communications by authenticating and encrypting each IP packet of a communication session.
> - **[[SSH]] (Secure Shell)**: Provides a secure channel over an unsecured network, offering strong authentication and encrypted data communications between two computers.


> [!summary] Authentication and Authorization
> 
> - **[[Authentication]]**: Techniques that ensure only authorized users can access a network or a resource, including methods like passwords, biometrics, two-factor authentication (2FA), and digital certificates.
> - **[[Authorization]]**: The process of granting or denying specific permissions to users, groups, or roles to access resources or perform operations within a network or application environment.
> - **[[Single Sign-On|SSO]] (Single Sign-On)**: Allows users to authenticate once and gain access to multiple systems without re-entering credentials.
> - **[[Access Control Lists]]**: Define which users can access which resources, providing a fine-grained security control.


> [!summary] Token-Based Authentication
> 
> - **[[JSON Web Tokens|JSON Web Tokens (JWT)]]**: A method for securely transmitting information as a JSON object.
> - **[[OAuth 2.0]]**: A protocol for authorization, providing a secure delegated access to server resources.
> - **[[OAuth 2.0 Flows]]**: Different authentication flows for varying application scenarios.
> - **[[OAuth PKCE]]**: Enhancement for public clients on mobile or desktop applications.
> - **[[OpenID Connect]]**: An identity layer on top of OAuth 2.0 for authentication.


> [!summary]  Security Protocols and Practices
> 
> - **[[SSL and TLS Protocols|SSL/TLS]]**: Protocols for securing communications over a computer network.
> - **[[Cross-Origin Resource Sharing]]**: A mechanism that allows or restricts requested resources on a web server depending on where the HTTP request was initiated.


> [!summary] Threat Detection and Management
> 
> - **[[Intrusion Detection Systems]]**: Detects unauthorized access or anomalies in API usage.
> - **[[Rate Limiting]]**: Prevents abuse and ensures fair use by limiting how often each user can call the API.
> - **[[Web Application Firewalls]] (WAF)**: Protects web applications from attacks by filtering and monitoring HTTP traffic, effective against threats like XSS and SQL injection.


> [!summary] Compliance and Best Practices
> 
> - **[[OWASP API Security]]**: Check for more recommendations and cheatsheets from OWASP.
> - **[[API Gateway]] Security**: Uses gateways as an additional layer of security to enforce API policies and reduce the risk of attacks.
> - **[[Software Testing]]**: Regular penetration testing, vulnerability assessments, and security audits to identify and mitigate risks.
> - **[[IPv4 vs IPv6]]**: Details the functionalities and improvements brought by IPv6 over IPv4, enhancing security capabilities and simplifying network configuration.

## Conclusion

Consolidating web and API security into a unified approach provides a comprehensive understanding of the measures required to protect applications and data. By implementing robust encryption, network security, access control, and threat management strategies, developers can ensure the security and integrity of their systems.
