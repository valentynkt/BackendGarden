---
created: 2024-06-14 17:41
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Azure VPN Gateway]]

# Azure Point-to-Site VPN

## Diagram

![[Pasted image 20240614174758.png]]

## Overview

A Point-to-Site (P2S) VPN gateway connection allows individual client computers to securely connect to an Azure virtual network. This type of connection is initiated from the client computer and is ideal for remote access scenarios.

> [!summary] **Key Features**
> 
> - **Client Initiated**: Connection is started from the individual client computer.
> - **Remote Access**: Suitable for telecommuters and remote workers.
> - **No Public IP Required**: Does not need an on-premises public-facing IP address or VPN device.

## Use Cases

- **Remote Work**: Telecommuters connecting to Azure virtual networks from remote locations.
- **Few Clients**: Ideal for scenarios with a small number of clients needing access to a virtual network.
- **Complement to Site-to-Site VPN**: Can be used alongside site-to-site connections on the same VPN gateway, given compatible configurations.
