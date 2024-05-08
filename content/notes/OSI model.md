---
created: 2024-05-06 15:27
aliases: 
links: 
tags:
  - LearningIT
  - seed🌱
---
link: [[Web]]

# OSI model

## Overview

> [!warning] 
> It is a deprecated model and does not precisely represent how the internet works in modern applications. Some levels can be skipped or combined.

The OSI Model acts as a universal language for computer networking. It divides a communication system into seven abstract layers, each building upon the one beneath it.

![[Pasted image 20231028214734.png]]

Each layer of the OSI Model has a specific function and interacts with the layers above and below it. DDoS attacks often target specific layers of a network connection; application layer attacks focus on Layer 7, and protocol layer attacks target layers 3 and 4.

## Layers Details

![[8c53f73a-c6ec-45cc-afb5-4018ac97a488_1600x1085.webp]]

> [!summary]- Layer 7: The Application Layer
> 
> **The application layer** is the interface between the user's applications and the network. It directly interacts with user data and enables communication with software applications like web browsers and email clients. However, it's important to note that client software applications are not part of the application layer; rather, this layer handles protocols and data manipulation for meaningful user data presentation.
> **[[API]] calls and responses belong to this layer**
> 
> ![[Pasted image 20231028215345.png]]
> 
> - **Responsibilities:**
>     - Handling user data interaction
>     - Initiating communications
>     - Managing API calls and responses
> - **Protocols:**
>     - [[HTTP]]: Hypertext Transfer Protocol for web communication
>     - [[SMTP]]: Simple Mail Transfer Protocol for email communication

> [!summary]- Layer 6: The Presentation Layer
> 
> **The presentation layer** is responsible for data translation, [[Cryptography Encryption|encryption]], and compression to ensure compatibility between different systems. It prepares data for the application layer, making it presentable for applications to consume.
> 
> ![[Pasted image 20231028220528.png]]
> 
> - **Responsibilities:**
>     - Translating data into a compatible format
>     - Ensuring data security through encryption
>     - Data compression for efficient transmission
> - **Tasks:**
>     - Translation of encoding methods
>     - Compression of data before delivery to Layer 5
>  - **Protocols:**
> 	 - [[SSL and TLS Protocols|SSL/TLS protocols]]

> [!summary]- Layer 5: The Session Layer
> 
> **The session layer** manages communication sessions between devices, ensuring data transfer completion and implementing checkpoints for interrupted transfers.
> 
> ![[Pasted image 20231028221203.png]]
> 
> - **Responsibilities:**
>     - Opening and closing communication sessions
>     - Ensuring session persistence for data exchange
>     - Synchronization of data transfer with checkpoints
> - **Functionality:**
>     - Resuming interrupted transfers from checkpoints
> - **Example**:
> 	  The session layer uses checkpoints to ensure smooth data transfer. Imagine sending a 100-megabyte file. With checkpoints set every 5 megabytes, if a disruption occurs at 52 megabytes, the transfer can resume from the last checkpoint. This way, only the remaining 50 megabytes need to be transferred, avoiding a complete restart.

> [!summary]- Layer 4: The Transport Layer
> 
> **The transport layer** facilitates end-to-end communication, segmenting data into manageable chunks called segments and ensuring error-free transmission.
> The transport layer on the receiving device is responsible for reassembling the segments into data the session layer can consume.
> 
> ![[Pasted image 20231028221313.png]]
> 
> - **Responsibilities:**
>     - Segmenting data into segments
>     - Ensuring reliable data transmission
>     - Error detection and correction
> - **Protocols:**
>     - [[TCP]]: Transmission Control Protocol for reliable communication
>     - [[UDP]]: User Datagram Protocol for lightweight communication

> [!summary]- Layer 3: The Network Layer
> 
> **The network layer** enables data transfer between different networks, breaking data into packets, and finding the best path for transmission.
>
> If the two devices communicating are on the same network, then the network layer is unnecessary.
>
> ![[Pasted image 20231028221932.png]]
> 
> - **Responsibilities:**
>     - Facilitating inter-network data transfer
>     - Packetization of data for transmission
>     - Determining optimal data routing paths
> - **Protocols:**
>     - [[Internet Protocol|IP]]: Internet Protocol for addressing and routing
>     - ICMP: Internet Control Message Protocol for network error messaging
>     - IGMP: Internet Group Management Protocol for multicast group management
>     - IPsec: IP Security Protocol suite for secure data transmission

> [!summary]- Layer 2: The Data Link Layer
> 
> **The data link layer** handles data transfer within the same network, breaking data into frames and managing intra-network communication.
> 
> ![[Pasted image 20231028222152.png]]
> 
> - **Responsibilities:**
>     - Facilitating intra-network data transfer
>     - Frame segmentation of data packets
>     - Flow control and error control within the network
> - **Protocols:**
>     - Ethernet: Standard protocol for wired network communication
>     - Wi-Fi: Wireless protocol for network communication

> [!summary]- Layer 1: The Physical Layer
> 
> **The physical layer** involves physical equipment like cables and switches, converting data into bit streams, and establishing signal conventions for data transmission.
> 
> ![[Pasted image 20231028222301.png]]
> 
> - **Responsibilities:**
>     - Transmitting raw data over physical mediums
>     - Converting data into bit streams
>     - Establishing signal conventions for data transmission
> - **Components:**
>     - Cables, switches, routers
>     - Signal transmission mediums (e.g., copper wires, fiber optics)


## OSI Model Flow

![[qELQuFRmbu.png]]

> [!example]- Real Flow
> Mr. Cooper uses his email application to compose a message to Ms. Palmer. When he hits 'send', the email application passes the message to the application layer.
>The application layer selects a protocol (SMTP) and hands the data to the presentation layer, where it's compressed.
>Next, the data reaches the session layer, initiating the communication session.
> 
> Moving down the OSI layers, the data hits the transport layer, where it's segmented for transmission.
> These segments become packets at the network layer, then frames at the data link layer.
> Finally, the frames reach the physical layer, where they're converted into 1s and 0s and sent through a physical medium, like a cable.
> 
> On Ms. Palmer's device, the process is reversed:
> The physical layer converts the received 1s and 0s into frames, which are passed to the data link layer.
> The data link layer reassembles frames into packets for the network layer, which forms segments for the transport layer.
> The transport layer then reassembles the segments into the original data.
> 
> Ascending the layers, the data flows into the receiver's session layer, where the communication session ends.
> Then, the presentation layer removes compression, and the raw data is passed to the application layer.
> Finally, Ms. Palmer's email software presents the human-readable message on her laptop screen.

## Network Security


> [!danger] Network Attacks
>
> ![[10156f95-a4c2-47e2-86cf-645e9e7ab169_1280x1664.webp]]
>
>- Application Layer  
>    - Pushing  
>    - Malware injection  
>    - DDos attacks
>    
>- Presentation Layer  
>    - Encoding/decoding vulnerabilities  
>    - Format string attacks  
>    - Malicious code injection
>    
>- Session Layer  
>    - Session hijacking  
>    - Session fixation attacks  
>    - Brute force attacks
>    
>- Transport Layer  
>    - Man-in-the-middle attacks  
>    - SYN/ACK flood
>    
>- Network Layer  
>    - IP spoofing  
>    - Route table manipulation  
>    - DDos attacks
>    
>- Data Link Layer  
>    - MAC address spoofing  
>    - ARP spoofing  
>    - VLAN hopping
>    
>- Physical Layer  
>    - Wiretapping  
>    - Physical tampering  
>    - Electromagnetic interference


# References

https://www.cloudflare.com/en-gb/learning/ddos/glossary/open-systems-interconnection-model-osi/


