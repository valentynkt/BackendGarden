---
created: 2024-05-27 15:57
aliases:
  - Redis Queue
  - Redis as Queue
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Redis]], [[Message Queues]]

# Redis-Backed Queue
## Diagram

![[Pasted image 20240527160819.png]]
## Overview

A Redis-backed queue leverages [[Redis]], an in-memory data structure store, to implement message queuing mechanisms. Redis can be used as a message queue in three main ways: Pub/Sub, List, and Stream. Each method offers different features and trade-offs, making Redis a versatile option for various queuing needs.

## Key Concepts

### Pub/Sub

> [!summary] How It Works
> 
> - **Subscription**: Consumers subscribe to a channel.
> - **Publishing**: Producers publish messages to the channel.
> - **Delivery**: Messages are delivered to all subscribers.
> 
> **Limitations**:
> 
> - At-Most-Once Delivery: Missed messages if a consumer is down.
> - No Data Persistence: Messages are lost if Redis goes down.
> 
> **Use Case**: Suitable for metrics monitoring.

### List

> [!summary] How It Works
> 
> - **Enqueue**: Producers add messages to the end of the list using `RPUSH`.
> - **Dequeue**: Consumers remove messages from the start of the list using `BLPOP`.
> 
> **Features**:
> 
> - Persistence: Lists can be persisted to disk.
> - Consumer Groups: Multiple consumers can form a group, ensuring each message is consumed only once.
> 
> **Use Case**: Ideal for scenarios requiring message persistence and order.

### Stream

> [!summary] How It Works
> 
> - **Add Messages**: Producers add messages using `XADD`.
> - **Read Messages**: Consumers read messages using `XREAD`.
> - **Consumer Groups**: Ensure each message is processed only once by a single consumer in the group.
> 
> **Features**:
> 
> - At-Least-Once Delivery: Ensures reliable message delivery.
> - Persistence: Streams can be persisted in Redis RDB.
> - Flexible Reading: Start reading from a specific ID, beginning, or latest messages.
> 
> **Use Case**: Suitable for reliable message delivery and critical tasks.