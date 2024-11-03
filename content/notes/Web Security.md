---
created: 2024-05-08 20:46
aliases:
  - Security
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

Web security involves implementing practices and tools to protect web applications, APIs, and data from unauthorized access, misuse, and attacks. This note provides an expanded map covering key security concepts, tools, and strategies necessary for securing web environments.

## Content

> [!primary] **Core Security Concepts**
> 
> - **[[Authentication]]**: Verifies the identity of users through credentials like passwords, biometrics, or two-factor authentication.
> - **[[Authorization]]**: Grants or denies permissions, defining user roles and access rights after authentication.
> - **[[Access Control Lists|ACLs]]**: Specifies detailed permissions for different users or groups on resources, providing fine-grained access control.
> - **[[Single Sign-On|SSO]]**: Enables a single login for multiple applications, improving user experience and centralizing authentication.
> - **[[Zero Trust Security]]**: Assumes threats can originate anywhere, requiring continuous verification and access control, even within the network.

> [!data] **Data Protection and Encryption**
> 
> - **[[End-to-End Encryption]]**: Protects data in transit between sender and receiver, ensuring confidentiality and integrity.
> - **[[Cryptography]]**: Secures data by transforming it into an unreadable format for unauthorized users through algorithms and keys.
> - **[[SSL and TLS Protocols|SSL/TLS]]**: Protocols that encrypt data transmission over the internet, securing communication for web browsing, email, and other applications.
> - **[[Data Masking]]**: Hides sensitive data elements (e.g., credit card numbers) by obfuscating or transforming parts of the data, reducing exposure risk.

> [!access] **Network and Communication Security**
> 
> - **[[VPN]] (Virtual Private Network)**: Creates a secure, encrypted connection over public networks, protecting data privacy and user identity.
> - **[[IPSec]]**: Authenticates and encrypts IP packets for secure communication over IP networks.
> - **[[SSH]] (Secure Shell)**: Establishes an encrypted channel between devices, securing remote access and file transfers.
> - **[[Network Firewall]]**: Filters incoming and outgoing network traffic, controlling access to prevent unauthorized entry.
> - **[[Local Area Network|LAN]] / [[Wide Area Network|WAN]] (Local and Wide Area Networks)**: Understanding these network types is essential for securing data flow in internal and extended networks.
> - **[[DNS Security Extensions|DNSSEC]]**: Adds cryptographic authentication to DNS responses, preventing attacks like DNS spoofing and enhancing network reliability.

> [!token] **Token-Based and Delegated Authentication**
> 
> - **[[JSON Web Tokens|JWT]]**: A compact, URL-safe token used for transmitting claims between parties, commonly for API authentication.
> - **[[OAuth 2.0]]**: An authorization protocol that allows secure delegated access without exposing user credentials.
> - **[[OpenID Connect]]**: An identity layer built on OAuth 2.0 for handling authentication and retrieving user profile information.
> - **[[Session Management]]**: Manages user sessions with tokens or cookies, ensuring that authenticated sessions are secure and properly terminated.

> [!risk] **Threat Detection and Mitigation**
> 
> - **[[Intrusion Detection Systems|Intrusion Detection Systems (IDS)]]**: Monitors network or system activities to detect suspicious behavior and unauthorized access.
> - **[[Rate Limiting]]**: Controls the number of requests users can make to prevent abuse and ensure fair resource usage.
> - **[[Web Application Firewalls|WAF]]**: Filters and monitors HTTP traffic to protect web applications from common threats like SQL injection and XSS.
> - **[[Cross-Origin Resource Sharing|CORS]]**: Controls resource sharing across web origins, helping prevent unauthorized access from foreign domains.
> - **[[Bot Detection and Management]]**: Identifies and mitigates malicious bots attempting automated attacks or scraping, reducing risks like DDoS and data theft.

> [!compliance] **Compliance and Security Standards**
> 
> - **[[OWASP API Security]]**: Recommendations and best practices from OWASP to protect APIs from common vulnerabilities.
> - **[[API Gateway]]**: Uses API gateways to enforce security policies, monitor traffic, and reduce the risk of unauthorized access.
> - **[[Software Testing]]**: Conducts penetration tests, vulnerability assessments, and security audits to identify and fix potential weaknesses.
> - **[[IPv4 vs IPv6]]**: Highlights IPv6’s enhanced security features, such as simplified IPsec configuration, compared to IPv4.
> - **[[Data Privacy Regulations]]**: Enforces privacy compliance by adhering to standards like GDPR, HIPAA, and CCPA, protecting user data rights and enhancing trust.

> [!threat] **Common Web Vulnerabilities** 
> 
>- **[[Denial of Service]] (DoS)**: Overloads a server with excessive requests, causing it to become unavailable to legitimate users. 
>- **[[SQL Injection]]**: Exploits vulnerabilities in input fields to execute malicious SQL commands, compromising the database. 
>- **[[Cross-Site Scripting|Cross-Site Scripting (XSS)]]** : Injects malicious scripts into web pages, affecting users by running unwanted actions in their browsers. 
>- **[[Cross-Site Request Forgery|Cross-Site Request Forgery (CSRF)]]**: Tricks authenticated users into performing unwanted actions on a site by exploiting their logged-in session. 
>- **Insecure Deserialization**: Manipulates serialized objects to execute arbitrary code or access sensitive data within an application. 
>- **[[Man-in-the-Middle|Man-in-the-Middle (MITM)]]**: Intercepts and potentially alters communication between two parties, capturing sensitive information in transit.
> 
## Conclusion

A comprehensive approach to web security involves combining data encryption, network protection, secure access management, and active threat detection. By following best practices across these areas, developers can build secure, resilient applications that protect data integrity, ensure user trust, and meet compliance standards.
