---
created: 2024-05-15 17:49
aliases:
  - WAF
  - Web Application Firewall
  - Web Firewall
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Web Security]]

# Web Application Firewalls (WAF)

## Overview

A Web Application Firewall (WAF) is a security solution that monitors, filters, and blocks HTTP traffic to and from a web application. WAFs are designed to protect applications from common threats such as SQL injection, cross-site scripting (XSS), and other OWASP Top 10 vulnerabilities, ensuring that only safe traffic reaches the application.

## Key Concepts

> [!important]
> 
> - **Application Layer Protection**: WAFs focus on Layer 7 (Application Layer), inspecting HTTP requests and responses for malicious patterns.
> - **Rules and Policies**: Uses customizable rules to identify and mitigate specific attack patterns, allowing for flexible threat response.
> - **Real-Time Monitoring**: Tracks traffic patterns in real-time, blocking or alerting on suspicious activity to prevent attacks.

## How WAF Differs from a Network Firewall

| Feature                    | Web Application Firewall (WAF)                   | Network Firewall                              |
|----------------------------|--------------------------------------------------|-----------------------------------------------|
| **Focus**                  | Application Layer (Layer 7)                      | Network Layer (Layers 3 & 4)                  |
| **Protection Scope**       | Protects web applications from HTTP-based attacks | Protects entire networks from unauthorized access, IP-based attacks |
| **Attack Types Blocked**   | SQL injection, XSS, CSRF, malicious payloads     | DDoS, IP spoofing, port scanning, general access control |
| **Flexibility**            | Customizable rules for web traffic               | General access control rules                  |
| **Typical Deployment**     | Placed in front of web applications              | Deployed at network entry points (routers, gateways) |

## Benefits

> [!success]
>  **Application-Specific Protection**: Provides dedicated security for web applications, targeting HTTP and HTTPS vulnerabilities.
> **Customizable and Scalable**: Allows configuration for unique application needs and scales with web traffic.

## Examples of WAF Solutions

- **Amazon Web Services (AWS) WAF**: AWS WAF protects applications hosted on AWS by filtering malicious traffic based on customizable rules and automatically scaling to handle large amounts of traffic. AWS WAF can integrate with AWS Shield to provide additional DDoS protection.
  
- **Azure Web Application Firewall**: Azure WAF is part of [[Azure Front Door]] and Application Gateway services. It provides managed rules for application protection against common vulnerabilities and can be configured with custom rules to address unique security needs.

## Best Practices

> [!important] 
> 
> - **Use Managed Rules**: Start with managed rules to protect against the most common attacks.
> - **Customize Policies**: Create custom rules to address specific application requirements or vulnerabilities.
> - **Regularly Update Rules**: Review and update WAF policies to adapt to emerging threats.

## Related Topics

> [!summary]
> 
> - **[[Network Firewall]]**: Complements WAF by blocking network-layer attacks, while WAF focuses on application-layer threats.
> 
> - **[[Intrusion Detection Systems]] (IDS)**: Works with WAF to detect suspicious activities, adding another layer of monitoring for threats.
> 
> - **[[OWASP API Security]]**: Lists critical web vulnerabilities WAFs are designed to defend against, like SQL injection and XSS.
> 
> - **API Security**: WAFs help secure APIs by filtering malicious requests, protecting API endpoints.
> 
> - **[[Denial of Service|DDOS]] Protection**: WAFs offer basic DDoS filtering and work with dedicated tools to handle high-volume attacks.
> 
> - **[[SSL and TLS Protocols|SSL/TLS]] Encryption**: WAFs inspect encrypted traffic with SSL/TLS to detect malicious content within secure communications.
