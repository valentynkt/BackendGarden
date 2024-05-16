---
created: 2024-05-06 18:32
aliases:
  - HTTP Secure
tags:
  - LearningIT
  - evergreen🌳
links:
---

link: [[HTTP]]

# # HTTPS

![[Pasted image 20231028214015.png]]

HTTPS (Hypertext Transfer Protocol Secure) combines the standard [[HTTP]] protocol with encryption provided by [[SSL and TLS Protocols|SSL/TLS]] to secure web communications. It encrypts data exchanged between web browsers (clients) and servers, enhancing security across the internet.

## Overview

HTTPS ensures the confidentiality and integrity of data during transmission. By encrypting the communication channel, it protects sensitive information from eavesdropping, tampering, and interception.

## Key Features of HTTPS

> [!summary]- Key Features
> 
> - **Encryption**: Secures data in transit, preventing interception by unauthorized parties.
> - **Data Integrity**: Uses cryptographic methods to ensure data is transmitted accurately, without alterations.
> - **Authentication**: Confirms the legitimacy of websites, protecting users from fraudulent sites.
> - **Trust and Security**: Utilizes digital certificates from trusted Certificate Authorities (CAs) to verify server identities and foster trust.
> - **SEO Benefits**: Enhances website visibility and ranking on search engines like Google, which favor HTTPS-secured sites.

## Implementation of HTTPS

Implementing HTTPS involves several key steps:

> [!important]-
> - **[[SSL and TLS Protocols|SSL/TLS]] Certificate**: Obtain an SSL/TLS certificate that includes the server's public key and identity, verified by a trusted Certificate Authority (CA).
> - **Server Configuration**: Configure the web server to use HTTPS, enabling encryption for all data exchanged with clients.

> [!example]-
> **Protocol Compatibility**:
> - **Mandatory**: HTTPS is required for [[HTTP 2.0|HTTP/2.0]] and [[HTTP 3.0|HTTP/3.0]], ensuring enhanced security for these protocols.
> - **Optional**: While HTTPS is not required for HTTP/1.0 and [[HTTP 1.1|HTTP/1.1]], its use is strongly recommended to protect user data and privacy.

HTTPS not only secures web transactions but also plays a critical role in maintaining privacy, integrity, and trust across the web, making it essential for modern internet usage.

## Flow

![[vx8MSwbYOn.png]]


> [!summary]- Detailed Flow
> Step 1 - The client (browser) and the server establish a [[TCP]] connection. 
> 
> Step 2 - The client sends a “client hello” to the server. The message contains a set of necessary encryption algorithms (cipher suites) and the latest TLS version it can support. The server responds with a “server hello” so the browser knows whether it can support the algorithms and TLS version. The server then sends the SSL certificate to the client. The certificate contains the public key, host name, expiry dates, etc. The client validates the certificate.
> 
> Step 3 - After validating the SSL certificate, the client generates a [[Session Management|session]] key and encrypts it using the public key. The server receives the encrypted [[Session Management|session]] key and decrypts it with the private key. 
> 
> Step 4 - Now that both the client and the server hold the same [[Session Management|session]] key (symmetric encryption), the encrypted data is transmitted in a secure bi-directional channel.
