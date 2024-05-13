---
created: 2024-05-08 15:16
aliases:
  - Transmission Control Protocol
  - TCP/IP
tags:
  - LearningIT
  - evergreen🌳
links:
---

link: [[Web Communication Protocols]], [[TCP vs UDP]]

# TCP (Transmission Control Protocol)

## Overview

Transmission Control Protocol (TCP) is a core protocol of the Internet Protocol Suite, often referred to as TCP/IP. TCP is vital for managing data transmission between computers in a network, ensuring reliability and order, making it fundamental for internet communications.

## Key Features of TCP

TCP is designed to provide a reliable, ordered flow of data between hosts. Here are some of its primary features:

- **Reliable Delivery**: TCP ensures that data sent during a communication session will reach its destination without errors and in the same order it was sent.
- **Sequencing and Ordering**: Data packets are sequenced so that they can be reassembled in the correct order upon reaching their destination.
- **Error Detection**: Includes checksums in the header for error-checking data as it arrives at the destination.
- **Flow Control**: Uses windowing techniques to control the volume of data that a sender can send before needing acknowledgment from the receiver.
- **Congestion Control**: Dynamically adjusts the data transfer rate in response to the network's perceived load to prevent congestion.

## How TCP Works

TCP manages sessions using a system of signals and responses that establish reliability and flow control:


![[Pasted image 20231029135417.png]]


**Connection Establishment: The Three-Way Handshake**:

TCP connections are initiated with a three-way handshake, which is crucial for establishing a reliable connection between sender and receiver:

> [!important] **Three-Way Handshake Process**:
> 1. **SYN**: The client sends a SYN (synchronize) packet to the server to initiate a new connection.
> 2. **SYN-ACK**: The server responds with a SYN-ACK (synchronize-acknowledge) packet, indicating that it received the client's SYN.
> 3. **ACK**: The client sends an ACK (acknowledge) packet back to the server, after which the connection is established, and data transfer can begin.
>    
>    ![[Pasted image 20231029150852.png]]


> [!info]-  Data Transmission and Termination
> Once a connection is established, TCP facilitates the error-free transfer of data with mechanisms for acknowledgments, retransmissions, and end-to-end communication management.
> 
> - **Data Transfer**: Data packets are sent, and acknowledgments are returned by the receiver, confirming receipt.
> - **Session Termination**: Connections are terminated through a similar handshake process, ensuring both ends agree to close the connection.


> [!example]- Examples of TCP Usage
> - **Web Browsing**: TCP is used to load websites reliably, ensuring all resources are properly loaded and displayed.
> - **Email Transmission**: Ensures all components of an email are correctly sent and received.
> - **File Transfers**: In applications like FTP, TCP ensures files are correctly sent and received without corruption.


> [!warning]- Limitations and Vulnerabilities
> Despite its reliability, TCP is susceptible to several issues:
> - **Performance Degradation in High-Latency Environments**: TCP's performance can degrade in environments where latency and packet loss are high, due to its reliance on acknowledgments and retransmissions.
> - **Susceptibility to SYN Flood Attacks**: TCP connections can be exploited by SYN flood attacks, where a malicious actor sends a rapid succession of SYN requests to a target's system, potentially overwhelming it and denying service to legitimate traffic.

## Conclusion

TCP is a cornerstone protocol for the internet, enabling reliable and ordered data transmission across networked systems. Its comprehensive approach to data delivery, error handling, and congestion control makes it indispensable for ensuring the integrity and reliability of data communication.


