---
created: 2024-05-26 14:35
aliases:
  - Queues
  - Point-to-Point
  - Queue-based
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Message brokers]]

# Message Queues

## Diagram

![[Pasted image 20240526143657.png]]

## Overview

A Message Queue is a form of [[Asynchronous CSharp]] service-to-service communication. Messages are stored in the queue until they are processed and deleted. Each message is processed [[Quality of Service#Exactly Once|only once]], by a single consumer. This decouples the producer from the consumer, allowing for reliable and scalable communication between different components of an application.

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

