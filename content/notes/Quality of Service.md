---
created: 2024-05-27 12:21
aliases:
  - Delivery Semantics
  - QoS
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Message brokers]]

# Quality of Service

## Diagram 
![[933ba5a8-cf94-4da2-86f2-53e2dc57d5cc_1999x1215.webp]]

## Overview


Delivery semantics define how messages are delivered and processed in a messaging system. They are crucial in ensuring that messages are handled correctly according to the application's needs. There are three primary delivery semantics:

### At Most Once

> [!info]
> 
> - **Definition**: A message is delivered not more than once. Messages may be lost, but they are not redelivered.
> - **Use Cases**: Suitable for scenarios where a small amount of data loss is acceptable, such as monitoring metrics or non-critical log data.
> - **Example**: Sending periodic updates where missing one update is not critical, like temperature readings from a sensor.

### At Least Once

> [!info]
> 
> - **Definition**: Each message is delivered at least once, but it may be delivered multiple times. No message should be lost.
> - **Use Cases**: Ideal for use cases where message loss is unacceptable, but duplicates can be tolerated or handled, such as logging systems or metrics collection.
> - **Example**: Sending notifications where ensuring the message is received is crucial, even if it means the recipient might get the same notification more than once.

### Exactly Once

> [!info]
> 
> - **Definition**: Each message is delivered exactly once, ensuring no duplicates and no message loss. This is the most stringent delivery semantic.
> - **Use Cases**: Critical for financial transactions, payment processing, trading, or any system where duplication or loss of messages cannot be tolerated.
> - **Example**: Processing orders in an e-commerce system where duplicating an order or losing an order can have significant financial implications.