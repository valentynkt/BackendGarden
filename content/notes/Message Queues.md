---
created: 2024-05-26 14:35
aliases:
  - Queues
  - Point-to-Point
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Message brokers]]

# Message Queues

## Diagram

![[Pasted image 20240526143657.png]]

## Overview

A Message Queue is a form of [[Asynchronous]] service-to-service communication. Messages are stored in the queue until they are processed and deleted. Each message is processed [[Quality of Service#Exactly Once|only once]], by a single consumer. This decouples the producer from the consumer, allowing for reliable and scalable communication between different components of an application.

## Key Concepts


> [!summary] Producers and Consumers
> - **Producers**: Applications or services that send messages to the queue.
> - **Consumers**: Applications or services that receive and process messages from the queue.

> [!summary] Queue
> - **Queue**: A data structure that holds messages until they are processed by consumers. Messages are processed in the order they are received (FIFO - First In, First Out).

> [!summary] Message Acknowledgment
> - **Acknowledge**: Once a consumer processes a message, it sends an acknowledgment back to the queue. If a message is not acknowledged, it can be reprocessed.

## How It Works

1. **Message Sending**: A producer sends a message to the queue.
2. **Message Storage**: The queue stores the message until a consumer is ready to process it.
3. **Message Retrieval**: A consumer retrieves the message from the queue.
4. **Message Processing**: The consumer processes the message.
5. **Message Acknowledgment**: The consumer sends an acknowledgment to the queue indicating that the message has been processed.
6. **Message Deletion**: The queue deletes the message once it has been acknowledged.


## Types of Message Queues

Message queues come in various types, each suited for different use cases and offering distinct features.

>[!summary]
>
> - **[[AWS  SQS]]**: A fully managed service that decouples and scales microservices, distributed systems, and serverless applications with Standard and FIFO queues.
> 
> - **[[Apache Kafka]]**: A distributed streaming platform for high-throughput, low-latency data streaming, supporting both publish-subscribe and point-to-point models.
> 
> - **[[RabbitMQ]]**: An open-source message broker supporting multiple protocols, including [[AMQP]], with various queue types for different needs.
> 
> - **[[Azure Service Bus]]**: A managed enterprise message broker with queues and publish-subscribe topics, offering advanced features like sessions and dead-lettering.
> 
> - **Google Cloud Pub/Sub**: A real-time messaging service for sending and receiving messages between independent applications, supporting topics and subscriptions.
> 
> - **[[Database Backed Queue]]**: Uses a relational or NoSQL database as a queue. Suitable for applications that already use a database and need a simple queueing mechanism.
> 
> - **[[Redis]]**: An in-memory data structure store that can be used as a message broker with support for publish-subscribe and list-based queues, offering high performance and low latency.