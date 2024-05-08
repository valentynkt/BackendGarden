---
created: 2024-05-08 17:51
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Web]]

# WebSockets

## Overview

[[HTTP]] and WebSocket both are communication protocols used in client-server communication.

WebSockets provide a way to open a bi-directional, persistent communication channel between the client and server over a single, long-lived connection. This protocol enables real-time data transfer and interaction, enhancing the capabilities of web applications that need to perform real-time updates such as chat applications, live notifications, and collaborative platforms.


> [!important]- Relationship with HTTP 
> 
> Similar to [[HTTP]], WebSocket operates on top of [[TCP]], ensuring reliable data transfer. However, WebSocket differs significantly in its operational model and capabilities: 
> - **Persistent Connection**: Unlike HTTP, which typically opens a new TCP connection for each request/response cycle, WebSocket uses a single TCP connection that remains open for the full duration of its communication. 
> - **Protocol Upgrade**: WebSocket connections begin with an [[HTTP]] handshake using the 'Upgrade' header, which then transitions the connection from HTTP to WebSocket. This mechanism allows WebSocket to integrate seamlessly with the existing web infrastructure.
> 


> [!important] Key Features of WebSockets 
> 
> - **Full Duplex Communication**: WebSocket enables messages to flow independently from client to server and vice versa simultaneously, which is ideal for real-time applications. 
> - **Low Latency**: By maintaining a persistent connection and minimizing overhead, WebSocket facilitates rapid data exchange, crucial for applications requiring instant interactions.
> - **Stateful Protocol**: Unlike [[HTTP]], WebSocket connections are stateful, allowing for more complex interactions and state management between messages.


> [!question]- How WebSockets Work?
> The WebSocket protocol facilitates more interactive communication sessions between a user's browser (the client) and a server. Here’s how it typically works:
> 
> 1. **Handshake**: Initiated by a WebSocket handshake request from the client, which looks like a standard [[HTTP]] request. This request includes an 'Upgrade' header that signals the server to switch from HTTP to WebSocket protocol.
> 2. **Connection Establishment**: If the server supports WebSockets, it responds with a handshake response, confirming the protocol switch. The connection then stays open until closed by either the client or the server.
> 3. **Data Transfer**: Once the connection is established, data can be sent back and forth in full duplex, allowing for interactive communication with minimal overhead.

WebSockets are suitable for [[Event-driven Architecture Pattern|Event-Driven]] apps and services that require high-frequency, low-latency communication between client and server. 
Also are particularly useful in applications where real-time data updates are crucial:

> [!example]- Usage Scenarios
> - **Chat Applications**: Instant messaging apps use WebSockets for real-time user-to-user communication.
> - **Gaming**: Multiplayer games use WebSockets for real-time player interactions and game state updates.
> - **Financial Applications**: Trading platforms use WebSockets to provide traders with real-time price updates and other financial data.
> - **Live Content Updates**: News sites and social media platforms use WebSockets to push live updates to users without requiring page refreshes.

## Conclusion

WebSockets revolutionize the way web applications interact with servers and clients, making it possible to build more dynamic, responsive, and real-time web applications. By maintaining an open connection, WebSockets eliminate the overhead associated with traditional [[HTTP]] requests, especially useful for applications requiring frequent updates from the server.


# References
https://ably.com/topic/websocket-vs-rest

