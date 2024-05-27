---
created: 2024-05-26 14:36
aliases:
  - Publish-Subscriber
  - Pub/Sub
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

> [!note] 
> This pattern is closely related to the [[Observer Pattern|Observer]] Design Pattern, where subscribers (observers) are notified of events (messages) published by producers (subjects).

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


## Implementation Steps

1. **Create a Topic**: Define a topic in the messaging service.
2. **Subscribe Endpoints**: Subscribers register to the topic to receive messages.
3. **Publish Messages**: Producers publish messages to the topic.
4. **Broadcast Messages**: The topic broadcasts the messages to all active subscribers.
5. **Process Messages**: Subscribers retrieve and process messages independently.
6. **Manage Subscriptions**: Use the management tools to monitor and manage topic subscriptions.

