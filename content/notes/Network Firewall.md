---
created: 2024-10-19 21:59
aliases:
  - Firewall
  - Firewalls
tags:
  - LearningIT
  - seed🌱
---

link: [[Web Security]]

# Network Firewall
![[Pasted image 20241019221654.png]]
## Overview

A **network firewall** is a critical security device or software that helps protect a network by monitoring and controlling incoming and outgoing traffic. It acts as a barrier between your internal network (trusted) and external networks (untrusted), such as the internet, to prevent unauthorized access, cyber-attacks, and the spread of malicious software.

Think of a firewall as a security checkpoint that decides which data can enter or leave your network.

## Why Do We Need a Firewall?

As businesses and individuals become more connected through the internet, the need to secure sensitive information grows. A firewall ensures that only legitimate traffic flows into and out of your network.

> [!important] **Key Reasons to Use Firewalls:**
> 
> - **Prevent Unauthorized Access**: Blocks hackers and unauthorized users from accessing your private network.
> - **Protect Sensitive Data**: Ensures that personal, financial, or business information stays secure.
> - **Monitor Traffic**: Controls data flow between networks, allowing only authorized communication.
> - **Prevent Malware**: Detects and blocks malicious software like viruses or ransomware from entering your network.
> - **Meet Compliance**: Helps organizations comply with legal and regulatory data protection standards.

## How a Firewall Works

Firewalls manage the flow of traffic between [[Local Area Network|Local Area Network (LAN)]] and [[Wide Area Network|Wide Area Network (WAN)]]. A **LAN** refers to your private internal network, such as home or office computers. A **WAN** is any larger external network, such as the internet.

> [!example] **Example Flow**:
>  - **Inbound Traffic**: Data from the internet (WAN) tries to access your internal network (LAN). The firewall checks if the data is safe and allowed. If it matches the security rules, the firewall lets it pass through. If not, it’s blocked.
>  - **Outbound Traffic**: Data from your internal network (LAN) wants to access the internet (WAN). The firewall checks if the request is legitimate, such as accessing a website or server. If it’s safe, the request is allowed; otherwise, it’s blocked.

### Key Components

1. **Packet Filtering**: Firewalls analyze packets (small units of data) based on predefined rules such as IP addresses, protocols, or port numbers.
2. **Stateful Inspection**: Firewalls track the state of active connections (like ongoing communication between your computer and a website) to ensure that only legitimate responses to outbound requests are allowed back in.
3. **Proxy Servers**: Some firewalls act as an intermediary between your network and external networks, further inspecting traffic for threats.
4. **Next-Generation Firewalls (NGFW)**: These firewalls include additional features like deep packet inspection and advanced threat detection (such as identifying malware).

### Protocols and Ports Used in Firewall Rules

Firewalls often manage traffic based on **protocols** and **ports**:

- **[[TCP]]** (Transmission Control Protocol): Ensures reliable data transmission. Common ports: 80 (HTTP), 443 (HTTPS).
- **UDP** (User Datagram Protocol): Used for faster, less reliable connections. Common for streaming or gaming.
- **IP** (Internet Protocol): Defines how data is sent from one computer to another over the internet.
- **ICMP** (Internet Control Message Protocol): Used by network devices to send error messages or operational information.
- **NAT** (Network Address Translation)**: A key feature of firewalls that maps multiple private IP addresses to a single public IP address for security and efficiency.

### Types of Firewall Rules

> [!summary] **Firewall Rules**
> 
> - **Allow List (Whitelist)**: Only allows traffic from trusted IP addresses or protocols.
> - **Block List (Blacklist)**: Blocks traffic from known malicious sources.
> - **Port Filtering**: Allows or blocks traffic based on port numbers (e.g., Port 80 for HTTP traffic).
> - **Application Layer Filtering**: Inspects the actual content of traffic (e.g., blocking access to specific websites or services).

## LAN, WAN, and Firewall Integration

In most networks, the firewall sits between your **LAN** (e.g., office computers, devices) and the **WAN** (the internet). This placement ensures that any data entering or leaving your internal network passes through the firewall. The firewall decides whether to allow, block, or log the traffic based on preset rules.

For example:

1. **LAN to WAN**: When a user in your office accesses a website, the request leaves the **LAN** and goes to the **WAN**. The firewall checks that the request is legitimate and allows the response from the internet to return to the user.
2. **WAN to LAN**: When external data (such as a hacker or malware) tries to enter your network, the firewall inspects the data, blocks suspicious activity, and protects your internal systems.

## Why Firewalls Are Necessary

Firewalls are essential for network security because:

> [!info] **Key Functions of a Firewall**
> 
> - **Prevent Data Breaches**: Firewalls block unauthorized access to sensitive information.
> - **Control and Monitor Traffic**: They manage what enters and exits your network, preventing unwanted traffic.
> - **Enable Secure Remote Access**: Firewalls allow safe remote access for users, which is especially important for businesses with remote employees.
> - **Safeguard Against Attacks**: Firewalls protect your network from a wide range of cyber threats, such as DDoS attacks, malware, and phishing.

## Types of Firewalls

> [!summary] **Firewall Types**
> 
> - **Hardware Firewalls**: These are physical devices that filter traffic at the network’s edge, ideal for businesses needing to protect large networks.
> - **Software Firewalls**: Installed on individual devices, such as computers or servers, to protect specific machines from attacks.
> - **Cloud Firewalls**: Managed in the cloud, these provide scalable and flexible protection, ideal for businesses using cloud services like AWS or Azure.

## Conclusion

A **network firewall** is crucial for protecting your data and network from external threats, unauthorized access, and cyber-attacks. By managing the traffic between your internal **LAN** and the external **WAN**, firewalls ensure that only trusted data flows into and out of your network. Whether it’s protecting a home network or an enterprise system, firewalls are a key line of defense in today’s connected world.