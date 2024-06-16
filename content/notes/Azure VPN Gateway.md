---
created: 2024-06-14 17:36
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[VPN]], [[Azure]]

# Azure VPN Gateway

## Overview

Azure VPN Gateway is a service that enables you to establish secure, cross-premises connectivity between your on-premises network and your Azure virtual network. It supports site-to-site, point-to-site, and VNet-to-VNet connections, ensuring secure data transmission across public and private networks.

> [!important] Key Features
> 
> - **[[Azure Site-to-Site VPN]]**: Connects your on-premises network to an Azure virtual network securely.
> - **[[Azure Point-to-Site VPN]]**: Allows individual devices to connect to an Azure virtual network from anywhere.
> - **[[Azure VNet-to-VNet]]**: Enables secure communication between two or more virtual networks within Azure.
> - **High Availability**: Supports active-active and active-passive configurations for redundancy and high availability.
> - **Scalability**: Easily scales to handle increasing traffic and connections.

## Types of Azure VPN Gateway

> [!summary] Types
> 
> - **Policy-Based VPN**: Uses static routing, suitable for simple scenarios with fewer connections.
> - **Route-Based VPN**: Uses dynamic routing (BGP), suitable for complex scenarios requiring scalability and flexibility.


## Best Practices

> [!important] Best Practices
> 
> - **Monitor Performance**: Regularly monitor VPN performance and health using Azure Monitor.
> - **Use High Availability**: Configure active-active or active-passive gateways for redundancy.
> - **Secure Configuration**: Ensure VPN configurations follow security best practices, such as using strong encryption protocols and key management.

## Summary

Azure VPN Gateway is a robust solution for establishing secure, scalable, and high-availability connections between on-premises networks and Azure virtual networks. By understanding its types, use cases, limitations, and best practices, organizations can effectively leverage Azure VPN Gateway for their hybrid cloud and remote connectivity needs.

## References

https://learn.microsoft.com/en-us/azure/vpn-gateway/