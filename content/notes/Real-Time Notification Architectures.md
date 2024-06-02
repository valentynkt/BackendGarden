---
created: 2024-05-09 20:01
aliases:
  - real-time data updates real-time updates
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[API Architectures]]

# Real-Time Notification Architectures

## Diagrams


> [!important]- Polling vs Webhook
> ![[1768b8ae-ba0a-4291-9c8c-b280006bc260_1280x1664.webp]]


> [!NOTE]- Short/long polling, SSE, WebSocket
> ![[4969af3d-893f-4cde-bf9b-ba65187c3af0_2235x3192.webp]]


## Overview

Real-time notification architectures are crucial in software development for applications that require immediate data exchange. These systems ensure that data is transmitted without delay, supporting features like live updates and interactive functionalities.

## Key Principles


> [!important] 
> - [[Webhooks API|Webhooks]]
> - [[WebSockets]]
> - [[gRPC API|gRPC]]
> - [[Server-Sent Events]] (SSE)
> - [[Message Queuing Telemetry Transport]]
> - [[AMQP]]
> - [[HTTP Polling]]


## Comparison

> [!summary]- Comparison
> 
> | Parameter                  | [[Webhooks API]]                                     | [[WebSockets]]                                                                 | [[HTTP Polling]]                                                              | [[Server-Sent Events]] (SSE)                                                                          | MQTT                                                                               |
> | -------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
> | **Type**                   | Event-driven                                                   | Full-duplex                                                                    | Request-response                                                               | Half-duplex                                                                   | Publish-Subscribe                                                                     |
> | **Description**            | Real-time updates triggered by events                          | Continuous, bi-directional communication                                       | Client periodically requests updates from the server                            | Server pushes updates to clients for one-way data flow                         | Lightweight messaging for low-bandwidth, high-latency environments                    |
> | **Latency**                | Moderate                                                       | Very Low                                                                       | Moderate                                                                       | Low                                                                           | Moderate                                                                              |
> | **Bandwidth Use**          | Depends on payload                                             | Moderate                                                                       | High                                                                           | Low                                                                           | Very Low                                                                              |
> | **Data Format**            | [[JSON]]/[[XML]]                                               | Binary/Text                                                                    | JSON/XML                                                                       | Text                                                                          | Binary                                                                                |
> | **Auth Level**             | Depends on implementation                                      | High                                                                           | Moderate                                                                       | Moderate                                                                      | High                                                                                  |
> | **Unique Features**        | Service integration with flexible payload formats              | Supports text and binary data for interactive services                         | Simple to implement                                                            | Simple, uses standard HTTP for unidirectional updates                          | Ideal for IoT with intermittent connectivity                                         |
> | **Scalability**            | Moderate                                                      | High                                                                           | Low                                                                            | Moderate                                                                      | High                                                                                |
> | **Development Complexity** | Moderate                                                       | Moderate                                                                       | Low                                                                            | Low                                                                           | High                                                                                  |

## Conclusion

Real-time notification architectures are a cornerstone of modern applications that rely on instant data exchange. Choosing the right protocol or technology can dramatically impact the responsiveness and functionality of your application, making it vital to understand the characteristics and best uses of each option.

# Reference:

[WebSockets, gRPC, MQTT, and SSE — Which Real-Time Notification Method Is For You?](https://betterprogramming.pub/websockets-grpc-mqtt-and-sse-which-real-time-notification-method-is-for-you-2d18bfc99dfc)
