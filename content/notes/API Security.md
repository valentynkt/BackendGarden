---
created: 2024-05-09 19:15
aliases: 
tags:
  - LearningIT
  - bud🌿
  - moc
links:
---

link: [[API]]

# API Security
## Diagram

![[45d16bfb-c541-4c01-8574-63cc39a5c560_1280x1664.webp]]

## Overview

API Security involves implementing measures to protect [[API|APIs]] from unauthorized access and attacks. This note organizes critical security concepts and strategies essential for safeguarding your [[API|APIs]].


> [!summary]- **Authentication and Authorization**
> - **[[Authentication]]**: Methods such as API keys, tokens, and certificates that verify the identity of a user or service accessing the API.
> - **[[Authorization]]**: Ensures that authenticated users have the correct permissions to perform actions.
> - **[[Access Control Lists]]**: Define which users can access which resources, providing a fine-grained security control.


> [!summary]- **[[Web Tokens|Token-Based]] Authentication**
> - **[[JSON Web Tokens|Json Web Tokens (JWT)]]**: A method for securely transmitting information as a JSON object.
> - **[[OAuth 2.0]]**: A protocol for authorization, providing a secure delegated access to server resources.
> - **[[OAuth 2.0 Flows]]**: Different authentication flows for varying application scenarios.
> - **[[OAuth PKCE]]**: Enhancement for public clients on mobile or desktop applications.
> - **[[OpenID Connect]]**: An identity layer on top of OAuth 2.0 for authentication.


> [!summary]- **Security Protocols and Practices**
> - **[[SSL and TLS Protocols|SSL/TLS]]**: Protocols for securing communications over a computer network.
> - **[[Cross-Origin Resource Sharing]]**: A mechanism that allows or restricts requested resources on a web server depending on where the HTTP request was initiated.


> [!summary]- **Threat Detection and Management**
> - **[[Intrusion Detection Systems]]**: Detects unauthorized access or anomalies in API usage.
> - **[[Rate Limiting]]**: Prevents abuse and ensures fair use by limiting how often each user can call the API.


> [!summary]- **Compliance and Best Practices**
> - [[OWASP API Security]] - Check for more recomendations and cheetsheets from OWASP.
> - **[[API Gateway Security]]**: Uses gateways as an additional layer of security to enforce API policies and reduce the risk of attacks.
> - **[[API Tesing]]**: Regular penetration testing, vulnerability assessments, and security audits to identify and mitigate risks.


