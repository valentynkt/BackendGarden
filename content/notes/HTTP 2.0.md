---
created: 2024-05-06 16:51
aliases:
  - HTTP/2.0
links: 
tags:
  - LearningIT
  - seed🌱
---
link: [[HTTP]]

# HTTP 2.0

Introduced in 2015, HTTP/2.0 is a significant evolution of the [[HTTP]] protocol that addresses the shortcomings of [[HTTP 1.1|HTTP/1.1]] and boosts web communication efficiency.

## Overview

HTTP/2.0 optimizes web page delivery over the internet through key enhancements:

- **Binary Protocol**: Switches from HTTP/1.1's textual format to a binary framing layer, enhancing parsing efficiency and reducing overhead.
- **Multiplexing**: Supports multiple request and response messages over a single [[TCP]] connection, substantially cutting latency and improving resource utilization.
- **Header Compression**: Utilizes the HPACK algorithm to minimize the size of headers, reducing the bandwidth needed for [[HTTP]] requests and responses.
- **Server Push**: Proactively sends resources to the client's cache, decreasing the waiting time for subsequent requests.
- **Stream Prioritization**: Allows clients to prioritize resources, ensuring that critical assets are loaded faster, which enhances user experience.

## Pros and Cons

> [!success]- Pros
> - **Efficiency**: Features like multiplexing and header compression permit simultaneous delivery over one connection, avoiding the latency associated with multiple TCP connections.
> - **Reduced Latency**: By interleaving multiple requests and responses, HTTP/2.0 minimizes the delay caused by the sequential order of HTTP/1.1.
> - **Enhanced User Experience**: Quickens page loads, providing a smoother browsing experience which can lead to increased user engagement and satisfaction.

> [!Danger]- Cons
> - **TLS Requirement**: Although not mandatory, HTTP/2.0 commonly employs [[SSL and TLS Protocols|TLS]] for security, introducing potential complexity and resource overhead, particularly for smaller or shared-hosting environments.
> - **Browser and Server Compatibility**: Some older browsers and web servers do not fully support HTTP/2.0, which may restrict its use.

HTTP/2.0 offers a substantial upgrade over HTTP/1.1, improving performance, reducing latency, and facilitating a better user experience. Its adoption is recommended for modern web environments and is well-supported by contemporary browsers and servers.

## HTTP/2 Deep Dive

HTTP/2's enhancements not only streamline communication but also improve how resources are managed between clients and servers.

- **Single [[TCP]] Connection**: Maintains one connection for all communications, which reduces the overhead associated with multiple TCP connections.

![[Pasted image 20231030165812.png]]

> [!important] Terminologies
> - **Frame**: The smallest unit of communication within HTTP/2, carrying specific payload types such as headers or data.
> - **Stream**: A bidirectional flow of frames within a single connection, allowing for multiple independent message exchanges simultaneously.
> - **Message**: A logical grouping of frames corresponding to a singular HTTP request or response.

### Stream Multiplexing

HTTP/2's ability to multiplex streams within a single TCP connection eliminates unnecessary delays and enhances throughput.

![[Pasted image 20231030170027.png]]

The diagram illustrates how HTTP/2 allows multiple streams to coexist on the same TCP connection. This setup enables the client and server to interleave frames from various streams, optimizing the use of available bandwidth and minimizing response times.

![[Pasted image 20231030170232.png]]

By incorporating these advanced features, HTTP/2 significantly outperforms its predecessors, making it an optimal choice for contemporary internet communications that require high efficiency and fast performance.


# References

https://medium.com/javarevisited/everything-you-need-to-know-about-http-2-protocol-e64bfffafe47


