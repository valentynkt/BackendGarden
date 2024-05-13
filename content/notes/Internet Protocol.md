---
created: 2024-05-08 16:22
aliases:
  - IP
  - Internet Protocol(IP)
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Web Communication Protocols]]

# Internet Protocol (IP)

![[952f571b-811b-4e70-b441-4b439b3b7890.webp]]

## Overview

The Internet Protocol (IP) is a core protocol of the Internet Protocol Suite, which is used to relay datagrams (packets of data) across network boundaries. Its routing function enables internetworking and essentially establishes the Internet. IP is the primary protocol in the Internet layer of the Internet Protocol Suite and has the task of delivering packets from the source host to the destination host solely based on the IP addresses in the packet headers.

## Key Features of IP

IP is designed to ensure efficient and reliable network communication through several key features:

- **Connectionless Protocol**: IP does not establish a connection before sending data, which allows for each packet to be treated independently.
- **Packet Routing**: IP routes each packet based on a four-layer model, ensuring that packets can move across multiple networks.
- **Addressing**: Every device on an IP network, such as the Internet, is identified by a unique IP address which ensures that data packets reach the correct destination.
- **Fragmentation and Reassembly**: IP packets can be fragmented by routers along the route if they exceed the Maximum Transmission Unit (MTU) of any medium along the path. They are reassembled at the destination.


> [!question]- How IP Works
> IP operates by transferring blocks of data called packets, each of which is handled independently as it travels through various network devices to reach its destination. The process involves:
> 
> 1. **Packetization**: Data is divided into smaller packets at the source device.
> 2. **Addressing and Labeling**: Each packet is labeled with header information, including source and destination IP addresses.
> 3. **Transmission**: Packets are sent out through the network, using routers to reach the destination based on the address information.
> 4. **Reassembly**: The destination device reassembles the packets into the original data using the information in the packet headers.


> [!important] IP Addressing
> There are two primary versions of IP addresses:
> 
> - **[[IPv4]]**: Consists of 32-bit addresses, offering over 4 billion unique addresses. They are usually expressed in dot-decimal notation (e.g., 192.168.1.1).
> - **[[IPv6]]**: Developed to deal with the address exhaustion of [[IPv4]], [[IPv6]] uses 128-bit addresses, significantly increasing the number of available addresses. It is expressed in hexadecimal notation (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).
> 
> ![[1715096711053.gif]]



> [!info]- IP Classes and Subnetting
> IP addresses are categorized into different classes (Class A, B, C, D, and E) based on the network's size and network segment requirements. Subnetting further divides a class into multiple smaller networks to enhance routing efficiency and internet management.

## Conclusion

The Internet Protocol is a crucial element in the fabric of the Internet, managing the logistics of data packet transmission across diverse network systems. Understanding IP is essential for networking professionals to design efficient, scalable, and secure internet services.


