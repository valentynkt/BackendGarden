---
created: 2024-05-13 15:21
aliases:
  - gRPC Communication Patterns
  - gRPC Designs
  - gRPC Achitecture
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[gRPC API]]

# gRPC Communication Patterns

gRPC, built on the modern [[HTTP 2.0|HTTP/2]] protocol, supports various communication patterns that cater to different needs in distributed system communications.


> [!summary]- Simple [[Remote Procedure Call|RPC]]
> **Simple RPC** is gRPC's most basic pattern, where the client sends a single request and receives a single response. This pattern mirrors a traditional function call but over a network, making it ideal for straightforward operations where only a simple response is needed.
> 
> ![[Pasted image 20231031151232.png]]


> [!summary]- Server-Streaming [[Remote Procedure Call|RPC]]
> **Server-Streaming RPC** is used when the server needs to send back multiple data streams in response to a client's single request. It's particularly useful for delivering continuous data, such as live feeds or streaming large datasets.
>
> The server sends multiple messages back to the client under the same request, which can enhance the client's ability to process data incrementally.
>
> ![[Pasted image 20231031151353.png]]


> [!summary]- Client-Streaming [[Remote Procedure Call|RPC]]
> **Client-Streaming RPC** allows the client to send a series of messages to the server, which responds with a single message after all the client messages have been received. This pattern suits scenarios where the client needs to upload significant amounts of data but only requires a small amount of data in response.
>
> This could be used for batch processing where the client sends data in chunks.
>
> ![[Pasted image 20231031151603.png]]


> [!summary]- Bidirectional Streaming [[Remote Procedure Call|RPC]]
> **Bidirectional Streaming RPC** enables both the client and server to send a stream of messages to each other simultaneously. This pattern is beneficial for applications requiring real-time communication and interaction, such as chat applications or collaborative platforms.
>
> Both parties can independently send and receive messages, which facilitates dynamic and responsive interactions.
>
> ![[Pasted image 20231031151741.png]]


