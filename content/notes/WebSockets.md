---
created: 2024-05-08 17:51
aliases:
  - WebSockets API
  - WebSocket
  - Websocket
  - Websockets
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Web]], [[API Architectures]]

# WebSockets

## Overview

[[HTTP]] and WebSocket are both communication protocols used in client-server communication. Unlike [[HTTP]], which is designed for short-lived connections, WebSockets provide a way to open a bi-directional, persistent communication channel. This allows for real-time data transfer and interaction, enhancing web applications that require live updates like chat applications, live notifications, and collaborative platforms.

> [!important]- Relationship with HTTP 
> 
> WebSocket operates on top of [[TCP]], ensuring reliable data transfer. It differs significantly from [[HTTP]] in:
> - **Persistent Connection**: Maintains a single [[TCP]] connection for the entire communication duration, unlike HTTP's new connection for each request/response cycle.
> - **Protocol Upgrade**: Begins with an [[HTTP]] handshake using the 'Upgrade' header, transitioning the connection from HTTP to WebSocket, allowing integration with existing web infrastructure.

## Key Features of WebSockets

> [!important]
> - **Full Duplex Communication**: Messages can flow independently from client to server and vice versa simultaneously, ideal for real-time applications.
> - **Low Latency**: Maintains persistent connections and minimizes overhead, enabling rapid data exchanges crucial for instant interactions.
> - **Stateful Protocol**: Unlike [[HTTP]], WebSocket connections are stateful, facilitating complex interactions and state management.


> [!question]- How WebSockets Work
> The WebSocket protocol facilitates interactive communication sessions between a user's browser (the client) and a server. The process involves:
> 1. **Handshake**: Initiated by the client with a WebSocket handshake request that includes an 'Upgrade' header to switch protocols.
> 2. **Connection Establishment**: The server responds with a handshake response if it supports WebSockets, establishing a persistent connection.
> 3. **Data Transfer**: Data is exchanged in full duplex after the connection is established, allowing for interactive communication with minimal overhead.

## Usage Scenarios

WebSockets are essential for [[Event-driven Architecture Pattern|Event-Driven]] applications that demand high-frequency, low-latency communication. They are particularly useful in:

> [!example]-
> - **Chat Applications**: For real-time user-to-user communication.
> - **Gaming**: For real-time interactions and updates in multiplayer games.
> - **Financial Applications**: To provide real-time updates like price changes in trading platforms.
> - **Live Content Updates**: For pushing live updates in news sites and social media platforms without page refreshes.

## Pros/Cons

> [!success]- Pros
> - **Reduced Latency**: WebSockets reduce latency by maintaining a persistent connection, eliminating the overhead caused by repeatedly opening and closing connections.
> - **Efficient Resource Utilization**: Open connections use fewer resources compared to constantly opening new [[HTTP]] connections.
> - **Real-Time Interactivity**: Ideal for applications that rely on the instant and constant exchange of information.
> - **Protocol Flexibility**: Can be used over any type of transport protocol, not just [[HTTP]].


> [!danger]- Cons
> - **Complexity in Handling**: More complex to implement and manage compared to traditional [[HTTP]] requests due to persistent connections.
> - **Scalability Issues**: Maintaining a large number of open connections can be resource-intensive and challenging to scale.
> - **Security Considerations**: Open connections may pose security risks if not properly managed, such as susceptibility to cross-site WebSocket hijacking.
> - **Limited Browser Support**: Older browsers may not fully support WebSockets, potentially limiting compatibility.

## Conclusion

WebSockets revolutionize the way web applications interact with servers and clients, making it possible to build more dynamic, responsive, and real-time web applications. By maintaining an open connection, WebSockets eliminate the overhead associated with traditional [[HTTP]] requests, especially useful for applications requiring frequent updates from the server.


# References

[WebSocket vs REST: Key differences and which to use](https://ably.com/topic/websocket-vs-rest)

