---
created: 2024-06-14 17:41
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Azure VPN Gateway]]

# Azure VNet-to-VNet

## Diagram

![[Pasted image 20240614174958.png]]

## Overview

A VNet-to-VNet connection allows you to securely connect two Azure virtual networks (VNets) using a [[VPN]] gateway. This setup provides a secure tunnel via IPsec/IKE and can be used to create complex network topologies combining cross-premises connectivity with inter-virtual network connectivity.

> [!summary] **Key Features**
> 
> - **Secure Tunnel**: Utilizes [[IPSec]]/IKE for secure communication between VNets.
> - **Flexible Connectivity**: VNets can be in the same or different regions, subscriptions, and deployment models.
> - **Combined Configurations**: Can be combined with multi-site connection configurations.

## Use Cases

- **Cross-Region Connectivity**: Connecting VNets located in different Azure regions.
- **Inter-Subscription Communication**: Securely connecting VNets in different Azure subscriptions.
- **Hybrid Network Topologies**: Combining VNet-to-VNet connections with site-to-site connections to establish comprehensive network topologies.


## Summary

Azure VNet-to-VNet connections provide a secure and flexible way to link multiple virtual networks, supporting various configurations across regions, subscriptions, and deployment models. This connectivity option is ideal for building robust and scalable network topologies within Azure.