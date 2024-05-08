---
created: 2024-05-06 22:11
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[HTTP]]

# HTTP Versions

## Overview

HTTP, or Hypertext Transfer Protocol, has seen several iterations, each bringing advancements in performance, security, and functionality. Here's a brief overview of key versions:

- **[[HTTP 1.1]]**: Introduced persistent connections, pipelining, and chunked transfer encoding, enhancing efficiency.
    
- **[[HTTP 2.0]]**: Introduced multiplexing, header compression, and server push, significantly improving speed and performance.
    
- **[[HTTP 3.0]]**: Utilizes the [[QUIC Protocol]] transport protocol over [[UDP]] for reduced latency and improved security compared to TCP-based protocols.
    
- **[[HTTPS]]**: Not a separate version but an extension that adds encryption to [[HTTP]], ensuring secure data transmission over the internet.


Understanding these versions and their differences is essential for optimizing web performance and ensuring secure communication between clients and servers.


> [!NOTE]- Version Comparison
> 
> 
> | Feature          | HTTP 1.0                                     | HTTP 1.1                                     | HTTP/2                                         | HTTP/3                                       |
> |------------------|----------------------------------------------|----------------------------------------------|------------------------------------------------|----------------------------------------------|
> | **Multiplexing** | No                                           | No                                           | Yes                                            | Yes                                          |
> | **Header Compression** | No                                           | No                                           | Yes                                            | Yes                                          |
> | **Server Push**  | No                                           | No                                           | Yes                                            | Yes (with server support)                   |
> | **Persistent Connections** | No                                        | Yes                                          | Yes                                            | Yes                                          |
> | **Connection Reuse** | No                                       | Yes                                          | Yes                                            | Yes                                          |
> | **Stream Prioritization** | No                                     | No                                           | Yes                                            | Yes                                          |
> | **Encryption**   | No                                           | No                                           | Yes (over TLS)                                 | Yes (over QUIC)                             |
> | **Latency**      | Higher                                       | Lower                                        | Lower                                          | Lower                                        |
> | **Protocol**     | HTTP                                          | HTTP                                          | Binary framing layer over TCP/TLS              | Datagram-based protocol over UDP             |
> | **Overhead**     | Higher                                       | Lower                                        | Lower                                          | Lower                                        |
> | **Compatibility**| Older                                         | Widely used                                  | Widely supported                               | Emerging                                     |
> 

## History Of Each Version

![[4NaAZas6nN.png]]


> [!info]- History
> - HTTP 1.0 was finalized and fully documented in 1996. Every request to the same server requires a separate [[TCP]] connection. 
> 
> - [[HTTP 1.1]] was published in 1997. A [[TCP]] connection can be left open for reuse (persistent connection), but it doesn’t solve the HOL (head-of-line) blocking issue. HOL blocking - when the number of allowed parallel requests in the browser is used up, subsequent requests need to wait for the former ones to complete.
> 
> - [[HTTP 2.0]] was published in 2015. It addresses HOL issue through request multiplexing, which eliminates HOL blocking at the application layer, but HOL still exists at the transport ([[TCP]]) layer. As you can see in the diagram, HTTP 2.0 introduced the concept of [[HTTP]] “streams”: an abstraction that allows multiplexing different HTTP exchanges onto the same [[TCP]] connection. Each stream doesn’t need to be sent in order. 
> 
> - [[HTTP 3.0]] first draft was published in 2020. It is the proposed successor to HTTP 2.0. It uses [[QUIC Protocol|QUIC]] instead of [[TCP]] for the underlying transport protocol, thus removing HOL blocking in the transport layer.
