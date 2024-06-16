---
created: 2024-06-14 17:40
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Azure VPN Gateway]]

# Azure Site-to-Site VPN

## Diagram

![[Pasted image 20240614174217.png]]

## Overview

Azure Site-to-Site (S2S) VPN allows you to securely connect your on-premises network to an Azure virtual network over [[IPSec]]/IKE (IKEv1 or IKEv2) [[VPN]] tunnels. This connection type is ideal for cross-premises and hybrid configurations.

## Key Points

> [!summary] **Key Features**
> 
> - **Secure Connectivity**: Uses IPsec/IKE protocols for encrypted communication.
> - **Hybrid Configuration**: Connects on-premises networks to Azure virtual networks.
> - **Active-Standby Mode**: One IPsec tunnel is active while the other is on standby, ensuring failover support.
> - **Active-Active Mode**: Both IPsec tunnels are active simultaneously, providing higher throughput and redundancy.

## Configuration

1. **Create Virtual Network and Gateway in Azure**:
    - Set up a virtual network and create a VPN gateway.
2. **Configure On-Premises VPN Device**:
    - Ensure the on-premises device has a public IP and supports IPsec/IKE.
3. **Establish VPN Connection**:
    - Create and configure the VPN connection in Azure, matching the on-premises device settings.

## Modes

> [!important] **Modes**
> 
> - **Active-Standby Mode**: Uses one public IP; one IPsec tunnel is active, the other is standby. Traffic switches to the standby tunnel in case of a failure.
> - **Active-Active Mode**: Uses two public IPs; both IPsec tunnels are active simultaneously, providing higher throughput and redundancy. This is the recommended setup.

## Multiple Connections

- **Route-Based VPN**: Required for multiple connections from a single virtual network gateway.
- **Multi-Site Connection**: Supports connections to multiple on-premises sites through the same gateway.

![[Pasted image 20240614174228.png]]