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
    
- **[[HTTP 3.0]]**: Utilizes the QUIC transport protocol over UDP for reduced latency and improved security compared to TCP-based protocols.
    
- **[[HTTPS]]**: Not a separate version but an extension that adds encryption to HTTP, ensuring secure data transmission over the internet.


Understanding these versions and their differences is essential for optimizing web performance and ensuring secure communication between clients and servers.


## Difference

| Feature          | HTTP 1.0                                     | HTTP 1.1                                     | HTTP/2                                         | HTTP/3                                       |
|------------------|----------------------------------------------|----------------------------------------------|------------------------------------------------|----------------------------------------------|
| **Multiplexing** | No                                           | No                                           | Yes                                            | Yes                                          |
| **Header Compression** | No                                           | No                                           | Yes                                            | Yes                                          |
| **Server Push**  | No                                           | No                                           | Yes                                            | Yes (with server support)                   |
| **Persistent Connections** | No                                        | Yes                                          | Yes                                            | Yes                                          |
| **Connection Reuse** | No                                       | Yes                                          | Yes                                            | Yes                                          |
| **Stream Prioritization** | No                                     | No                                           | Yes                                            | Yes                                          |
| **Encryption**   | No                                           | No                                           | Yes (over TLS)                                 | Yes (over QUIC)                             |
| **Latency**      | Higher                                       | Lower                                        | Lower                                          | Lower                                        |
| **Protocol**     | HTTP                                          | HTTP                                          | Binary framing layer over TCP/TLS              | Datagram-based protocol over UDP             |
| **Overhead**     | Higher                                       | Lower                                        | Lower                                          | Lower                                        |
| **Compatibility**| Older                                         | Widely used                                  | Widely supported                               | Emerging                                     |





