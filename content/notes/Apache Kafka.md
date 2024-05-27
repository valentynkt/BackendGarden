---
created: 2024-05-26 14:40
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Message brokers]]

# Apache Kafka
## Overview

Apache Kafka is a distributed event streaming platform capable of handling high-throughput, low-latency data streams. Originally developed by LinkedIn and later open-sourced, Kafka is widely used for building real-time data pipelines and streaming applications.

## Key Concepts


> [!summary] Topics
> 
> - **Definition**: Topics are the categories to which records are sent.
> - **Structure**: A topic is divided into partitions for scalability and parallelism.
> - **Replication**: Each partition can be replicated across multiple nodes for fault tolerance.


> [!summary] Producers
> 
> - **Role**: Send records to Kafka topics.
> - **Mechanism**: Can send data to a specific partition within a topic, allowing for ordered delivery within that partition.


> [!summary] Consumers
> 
> - **Role**: Read records from Kafka topics.
> - **Consumer Groups**: Consumers can be part of a consumer group, enabling load balancing of data consumption.


> [!summary] Brokers
> 
> - **Definition**: Kafka brokers are servers that store data and serve clients.
> - **Cluster**: A Kafka cluster is composed of multiple brokers working together.


> [!summary] Zookeeper
> 
> - **Role**: Manages the Kafka cluster metadata and configurations.
> - **Coordination**: Helps in leader election for partitions and keeping track of brokers.

## Models Supported

> [!important]
> 
> - **[[Message Topics|Publish-Subscribe]] Model**: Kafka supports a publish-subscribe messaging model where producers publish messages to topics, and multiple consumers can subscribe to those topics to receive the messages.
> - **[[Message Queues|Point-to-Point]] Model**: Through the use of consumer groups, Kafka can also support a point-to-point model where each message is processed by only one consumer within a group.

## How It Works

### Data Flow

1. **Producers**: Send messages to a Kafka topic.
2. **Broker**: Receives the message and stores it in the topic's partition.
3. **Consumers**: Subscribe to the topic and read messages from the partitions.

### [[Quality of Service]]

![[Quality of Service#Diagram]]
## Use Cases

- **Real-time Data Processing**: Processing streams of data in real time, such as log aggregation and monitoring.
- **Data Integration**: Integrating data across various systems and applications.
- **[[Event Sourcing Architecture Pattern|Event Sourcing]]**: Storing state changes as a sequence of events, enabling replay and reconstruction of system state.


![[540cd170-0fde-4ba0-8451-8b145e4c5b38_1280x1664.webp]]

## Related Topics

- [[Event Sourcing Architecture Pattern]]
- [[Event-driven Architecture Pattern]]
- [[Reactive Architecture]]

# References

[Cloudflare’s Trillion-Message Kafka Infrastructure: A Deep Dive](https://blog.bytebytego.com/p/cloudflares-trillion-message-kafka?utm_source=publication-search)