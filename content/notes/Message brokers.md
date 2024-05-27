---
created: 2024-05-24 18:34
aliases: []
tags:
  - LearningIT
  - seed🌱
links:
---

link: 

# Message brokers

## Diagram

![[1475ba84-8106-4d61-924e-6403cfdc1074_1280x1664.webp]]

![[Pasted image 20240527121808.png]]

## Overview

Message Brokers are middleware systems designed to facilitate the exchange of messages between different applications or services. They decouple the sender and receiver, allowing them to communicate asynchronously, which is crucial for building scalable and resilient systems.

> [!NOTE]
>  This allows applications to share information with one another, even if they’re written in different programming languages!

## Key Concepts

### Components

> [!summary]
> 
> - **Producer**: The application responsible for sending messages. It’s connected with the message broker. In the publish/subscribe pattern, they are called `publishers`.
> - **Consumer**: The endpoint that consumes messages waiting in the message broker. In the publish/subscribe pattern, they are called `subscribers`.
> - **Queue/Topic**: A storage mechanism in the message broker used to store messages.

### Messaging Systems

Message Brokers are integral to [[Message-driven Architecture Pattern|Message-driven Architecture]], where the communication between components is achieved through asynchronous messaging. They support various communication patterns and ensure reliable message delivery.

> [!important]
> 
> - **Message-Driven Architecture**: An architectural style where components communicate by sending and receiving messages via a messaging system, allowing for loose coupling and asynchronous interactions.

### Topics and Queues

- **[[Message Queues|Queues]]**: In a queue, each message is processed by a single consumer. This pattern is often used in point-to-point messaging, where a message is directed from one sender to one receiver.
- **[[Message Topics|Topics]]**: In a topic, each message can be processed by multiple consumers. This pattern is typically used in publish/subscribe messaging, where messages are broadcast to multiple subscribers.

### Messaging Patterns

- **Point-to-Point Messaging**: Messages are sent to a specific queue and consumed by a single receiver. This ensures that each message is processed only once.
    
    ![[Pasted image 20240526143657.png]]
    
- **Publish/Subscribe Messaging**: Messages are published to a topic and can be consumed by multiple subscribers, allowing for broad distribution of information.
    
    ![[Pasted image 20240526143742.png]]
    

## Types of Message Brokers

> [!summary]
> 
> - [[Azure Service Bus]]
> - [[Apache Kafka]]
> - [[Apache ActiveMQ]]
> - [[RabbitMQ]]
> - [[Redis]]
> - [[Amazon MQ]]
> - [[AWS SNS]]
> - [[AWS  SQS]]

### Overview of Common Message Brokers

1. **Azure Service Bus**: A fully managed enterprise message broker with message queues and publish/subscribe topics.
2. **Apache Kafka**: A distributed streaming platform known for high throughput, durability, and scalability.
3. **RabbitMQ**: An open-source message broker known for its flexibility and reliability, supporting various messaging protocols.
4. **Redis**: An in-memory data structure store that can function as a message broker with its pub/sub capabilities.
5. **Amazon MQ**: A managed message broker service for Apache ActiveMQ.
6. **Amazon SNS**: A fully managed pub/sub messaging service.
7. **Amazon SQS**: A fully managed message queuing service that supports both standard and FIFO queues.

## Pros and Cons

> [!success]- Pros
> 
> - **Decoupling**: Allows services to communicate without being tightly coupled, enhancing flexibility and maintainability.
> - **Scalability**: Can handle high volumes of messages and scale horizontally to accommodate increased load.
> - **Reliability**: Ensures messages are reliably delivered and processed, even in the event of service failures.

> [!danger]- Cons
> 
> - **Complexity**: Introduces additional infrastructure and operational complexity.
> - **Latency**: Can introduce latency due to the asynchronous nature of message delivery.
> - **Management Overhead**: Requires ongoing monitoring and management to ensure optimal performance and reliability.

## [[Quality of Service]]
![[Quality of Service#Quality of Service]]

## [[Message Topic vs Event Streaming]]
![[Message Topic vs Event Streaming#Message Topic vs Event Streaming]]
## Summary

Message Brokers are essential components in modern distributed systems, enabling asynchronous communication and enhancing the scalability, flexibility, and reliability of applications. By understanding the key concepts, patterns, and types of message brokers, developers can effectively leverage these tools to build robust and responsive systems.

# References

[Message broker – complete know-how, use cases and a step-by-step guide | TSH.io](https://tsh.io/blog/message-broker/)

[Why Do We Need a Message Queue? - ByteByteGo Newsletter](https://blog.bytebytego.com/p/why-do-we-need-a-message-queue?utm_source=publication-search)