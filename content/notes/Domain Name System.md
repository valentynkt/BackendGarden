---
created: 2024-05-03 18:49
aliases:
  - DNS
  - Domain Name System (DNS)
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Web Communication Protocols]]

# Domain Name System (DNS)

![[H9PGiVvOX8.png]]
## Overview

The Domain Name System (DNS) is a hierarchical and decentralized naming system used to resolve human-readable domain names (like www.example.com) into machine-readable [[Internet Protocol]] addresses (like 192.0.2.1), which are necessary for locating and identifying computer services and devices with the underlying network protocols. It functions as the "phone book" of the Internet, allowing users to access information online through domain names rather than [[Internet Protocol|IP]] addresses.

> [!important]- Key Features of DNS
> DNS provides a vital service on the Internet, and its operation hinges on several key features:
> 
> - **Domain Name Hierarchy**: DNS uses a hierarchical structure which includes levels like the root level, top-level domains (TLDs), second-level domains, and subdomains.
> - **Distributed Database**: DNS information is distributed across many servers worldwide, which helps in load balancing and reduces the distance data must travel.
> - **Caching**: Once a DNS lookup has been performed, the results are typically cached by the resolver for a certain period, significantly speeding up subsequent requests to the same domain name.
> - **Zone Files**: DNS records are stored in zone files; these files contain mappings between domain names and IP addresses.


> [!question]- How DNS Works?
> DNS resolution involves several steps to translate a domain name into an IP address:
> 
> 1. **DNS Query**: A user's computer sends a query to a DNS resolver (typically operated by the ISP) to request the [[Internet Protocol]] address associated with a domain name.
> 2. **Resolver Query**: The resolver queries a root DNS server, which responds with the address of a TLD server (like .com or .net) that holds the domain's information.
> 3. **TLD Server Query**: The resolver then queries the TLD server, which responds with the address of the domain's nameserver.
> 4. **Nameserver Query**: Finally, the resolver queries the domain's nameserver to get the IP address associated with the domain name.
> 5. **Response**: The resolver returns the IP address to the user's computer, which can then make an HTTP request to the IP address.


> [!summary]- DNS Record Types
> Several types of DNS records are used to specify information about the domain:
> 
> - **A Record (Address Record)**: Maps a domain to a physical IP address.
> - **MX Record (Mail Exchange Record)**: Specifies mail servers responsible for receiving email on behalf of a domain.
> - **CNAME Record (Canonical Name Record)**: Maps a domain to another domain (aliasing).
> - **TXT Record**: Allows administrators to insert arbitrary text into a DNS record; often used for email security.
> - **NS Record (Name Server Record)**: Specifies authoritative DNS servers for a domain.

## Conclusion

DNS is a foundational technology for the internet that allows users and services to locate computers and services through user-friendly domain names instead of [[Internet Protocol|IP]] addresses. It enhances the usability and functionality of the web by making the Internet accessible and navigable for humans.



