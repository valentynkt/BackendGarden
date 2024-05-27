---
created: 2024-05-26 14:36
aliases:
  - Publish-Subscriber
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Message brokers]]

# Message Topics

## Diagram

![[Pasted image 20240526143742.png]]

## Overview

A Message Topic is a form of [[Asynchronous]] service-to-service communication used in publish-subscribe (pub/sub) messaging systems. Unlike [[Message Queues]], where each message is processed by a single consumer, message topics allow multiple consumers to receive and process each message. This enables efficient broadcasting of messages to multiple subscribers, facilitating scalable and decoupled communication between different components of an application.

## Key Concepts

> [!summary] Producers and Subscribers
> 
> - **Producers**: Applications or services that publish messages to the topic.
> - **Subscribers**: Applications or services that subscribe to the topic to receive and process messages.

> [!summary] Topic
> 
> - **Topic**: A logical channel that producers publish messages to. Subscribers receive messages from the topic based on their subscriptions.

> [!summary] Message Delivery
> 
> - **Broadcast**: Messages published to a topic are delivered to all active subscribers, enabling one-to-many communication.

## How It Works

1. **Message Publishing**: A producer publishes a message to the topic.
2. **Message Broadcasting**: The topic broadcasts the message to all active subscribers.
3. **Message Retrieval**: Subscribers retrieve the message from the topic.
4. **Message Processing**: Subscribers process the message independently.
5. **Message Acknowledgment**: Depending on the system, subscribers may acknowledge receipt of the message to ensure reliable delivery.

## Types of Message Topics

Message topics come in various implementations, each suited for different use cases and offering distinct features.

> [!summary]
> 
> - **[[AWS SNS]]**: A fully managed publish-subscribe service that allows you to send notifications to multiple subscribers using various protocols, including HTTP/HTTPS, email, SMS, and AWS Lambda.
>     
> - **[[Apache Kafka]]**: A distributed streaming platform that supports high-throughput, low-latency data streaming with robust pub/sub capabilities, enabling scalable data processing.
>     
> - **[[RabbitMQ]]**: An open-source message broker that supports multiple messaging protocols, including AMQP, with versatile exchange types for different pub/sub needs.
>     
> - **[[Azure Service Bus]]**: A managed enterprise messaging service that provides robust publish-subscribe capabilities with support for advanced features like sessions and dead-lettering.
>     
> - **Google Cloud Pub/Sub**: A fully managed real-time messaging service for sending and receiving messages between independent applications, supporting topics and subscriptions.
>     

## Implementation Steps

1. **Create a Topic**: Define a topic in the messaging service.
2. **Subscribe Endpoints**: Subscribers register to the topic to receive messages.
3. **Publish Messages**: Producers publish messages to the topic.
4. **Broadcast Messages**: The topic broadcasts the messages to all active subscribers.
5. **Process Messages**: Subscribers retrieve and process messages independently.
6. **Manage Subscriptions**: Use the management tools to monitor and manage topic subscriptions.

## Pros and Cons

> [!success] Pros
> 
> - **Scalability**: Efficiently broadcasts messages to multiple subscribers, supporting large-scale applications.
> - **Decoupling**: Facilitates loose coupling between components, enhancing system modularity.
> - **Flexibility**: Allows multiple consumers to process the same message independently, supporting various use cases.

> [!danger] Cons
> 
> - **Complexity**: Managing subscriptions and ensuring reliable delivery can be complex.
> - **Latency**: Depending on the system, message delivery latency may be higher than direct messaging.
> - **Resource Usage**: Broadcasting messages to multiple subscribers can consume more resources compared to point-to-point messaging.

## Related Topics

- [[Observer Pattern]]