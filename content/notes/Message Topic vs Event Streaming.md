---
created: 2024-05-27 12:48
aliases: 
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Message brokers]], [[Event Streaming]]

# Message Topic vs Event Streaming

## Overview

Both message brokers and event streaming platforms facilitate communication between different parts of a system, but they serve distinct purposes and are optimized for different types of messaging patterns.

## Key Differences

| Aspect                  | Message Brokers                                            | Event Streaming Platforms                                      |
| ----------------------- | ---------------------------------------------------------- | -------------------------------------------------------------- |
| **Message Handling**    | Manages individual messages that need reliable delivery    | Manages continuous streams of data                             |
| **Consumer Model**      | Consumers typically receive each message only once         | Consumers can read from any point in the stream multiple times |
| **Examples**            | RabbitMQ, Azure Service Bus, Amazon MQ                     | Apache Kafka, Apache Pulsar, Amazon Kinesis                    |
| **Processing Model**    | Point-to-point or publish/subscribe                        | Primarily publish/subscribe                                    |
| **Scalability**         | Scales by adding more consumers                            | Scales horizontally by adding more partitions                  |
| **Use Cases**           | Task distribution, command handling, short-lived messaging | Event sourcing, real-time analytics, data pipeline             |

## Overview

**[[Message brokers]]**:

- **Task Distribution**: Ideal for scenarios where tasks need to be distributed among multiple workers.
- **Short-lived Messaging**: Suitable for messaging patterns where messages are processed quickly and do not need to be retained long-term.
- **Reliable Delivery**: Ensures each message is delivered reliably to one or more consumers.

**Event Streaming Platforms**:

- **[[Event Sourcing Architecture Pattern|Event Sourcing]]**: Captures and stores all changes to the state as a series of events, which can be replayed to reconstruct past states.
- **Real-time Analytics**: Processes streams of data in real-time for analytics and monitoring.
- **Data Pipeline**: Facilitates the flow of data across various stages of processing, ensuring that data can be consumed by multiple downstream systems independently.