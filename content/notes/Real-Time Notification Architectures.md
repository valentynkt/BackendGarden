---
created: 2024-05-09 20:01
aliases: 
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[API Architectures]]

# Real-Time Notification Architectures

## Overview

Real-time notification architectures are crucial in software development for applications that require immediate data exchange. These systems ensure that data is transmitted without delay, supporting features like live updates and interactive functionalities.

## Comparison

> [!summary]- Comparison
> 
> | Parameter                  | [[Webhooks API\|Webhooks]]                                     | [[WebSockets]]                                                                 | [[gRPC API\|gRPC]]                                                              | SSE                                                                           | [[MQTT]]                                                                                  |
> | -------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
> | **Type**                   | Event-driven                                                   | Full-duplex                                                                    | Full-duplex                                                                     | Half-duplex                                                                   | Publish-Subscribe                                                                     |
> | **Protocol**               | [[HTTP]]                                                       | [[TCP]]                                                                        | [[HTTP 2.0\|HTTP/2.0]]                                                          | [[HTTP]]                                                                      | [[TCP]]                                                                               |
> | **Description**            | Triggers real-time updates to external systems upon events.    | Maintains a continuous connection for real-time, bi-directional communication. | High-performance RPC framework ideal for efficient inter-service communication. | Server pushes updates to clients, primarily used for one-way data flow.       | Lightweight messaging protocol designed for low-bandwidth, high-latency environments. |
> | **Latency**                | Moderate                                                       | Very Low                                                                       | Very Low                                                                        | Low                                                                           | Moderate                                                                              |
> | **Bandwidth Use**          | Depends on payload                                             | Moderate                                                                       | Low                                                                             | Low                                                                           | Very Low                                                                              |
> | **Data Format**            | [[JSON]]/[[XML]]                                                       | Binary/Text                                                                    | Binary (ProtoBuf)                                                               | Text                                                                          | Binary                                                                                |
> | **Auth Level**             | Depends on implementation                                      | High                                                                           | High                                                                            | Moderate                                                                      | High                                                                                  |
> | **Unique Features**        | Widely used for service integration, flexible payload formats. | Supports both text and binary data; ideal for interactive services.            | Utilizes HTTP/2 features like streaming and header compression.                 | Simple implementation, uses standard HTTP; mainly for unidirectional updates. | Excellent for IoT with intermittent connectivity and network constraints.             |
> | **Security Features**      | Customizable security based on implementation.                 | Robust security protocols available.                                           | Strong security with HTTP/2 capabilities.                                       | Basic HTTP security features.                                                 | Advanced security with low overhead.                                                  |
> | **Scalability**            | Scalability varies widely by use case and implementation.      | High scalability with efficient management of connections.                     | Excellent scalability in [[Microservices Architecture Pattern|microservices]] environments.                            | Good for simple scalable updates without heavy data exchange.                 | Highly scalable, especially in distributed environments.                              |
> | **Development Complexity** | Setup complexity depends on external system compatibility.     | Requires understanding of real-time communication concepts.                    | Requires familiarity with advanced programming concepts.                        | Easier to implement with fewer moving parts.                                  | Requires knowledge of IoT protocols and connectivity challenges.                      |
> | **Ecosystem Support**      | Varies by platform but generally well-documented.              | Extensive support and documentation available.                                 | Strongly supported by Google and a growing community.                           | Good support and widely understood.                                           | Supported by a strong IoT development community.                                      |
> 

## Conclusion

Real-time notification architectures are a cornerstone of modern applications that rely on instant data exchange. Choosing the right protocol or technology can dramatically impact the responsiveness and functionality of your application, making it vital to understand the characteristics and best uses of each option.

# Reference:

https://betterprogramming.pub/websockets-grpc-mqtt-and-sse-which-real-time-notification-method-is-for-you-2d18bfc99dfc
