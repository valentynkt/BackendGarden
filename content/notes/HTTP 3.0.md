---
created: 2024-05-06 17:34
aliases:
  - HTTP/3.0
  - HTTP/3
  - HTTP 3
tags:
  - LearningIT
  - evergreen🌳
links:
---

link: [[HTTP]]

# HTTP 3.0

HTTP/3 is the latest evolution of the Hypertext Transfer Protocol ([[HTTP]]), integrating the benefits of [[HTTP 2.0|HTTP/2.0]] with the advanced capabilities of the [[QUIC Protocol]] to push web performance and security to new heights.

## Introduction to HTTP/3

Developed to surpass the capabilities of HTTP/1 and HTTP/2, HTTP/3 utilizes [[UDP]] instead of [[TCP]] for data transmission, incorporating the efficiency and speed of QUIC. This adoption marks a significant shift aimed at overcoming the traditional challenges associated with [[TCP]] connections.

## Key Features of HTTP/3

![[Pasted image 20240506182410.png]]

HTTP/3 enhances web communication by leveraging QUIC's innovations, offering several key advantages:

> [!summary]- **Distinctive Features of HTTP/3**:
> - **Efficient Multiplexing**: Implements multiplexing to allow many requests and responses to share a single connection, which reduces the overhead and delays associated with HTTP/2.
> - **Default Security**: Integrates [[SSL and TLS Protocols|TLS]] encryption inherently within its protocol, akin to [[QUIC Protocol|QUIC]], enhancing security measures across all communications.
> - **Minimized Latency**: By utilizing [[UDP]], HTTP/3 reduces the overall latency for connection setups and data transfer, which significantly speeds up web interactions.
> - **Robust Connection Handling**: Facilitates connection migration, which is essential for maintaining stable connections even when network interfaces change, thus supporting a seamless mobile user experience.
> - **Advanced Congestion Control**: Employs sophisticated congestion control techniques that enable more effective handling of network density and variability, improving data throughput and stability.

HTTP/3 marks a major evolution in web protocols, transforming how data is transmitted to better meet the modern demands for speed, reliability, and security. It's on track to become the new standard, widely supported across browsers and platforms.

The shift to HTTP/3 will greatly affect web development, prioritizing faster and more efficient user experiences while maintaining high security. As more developers adopt it, HTTP/3 will become central to the future of web communications.

# References

https://kinsta.com/blog/http3/
