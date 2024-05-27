---
created: 2024-05-26 14:44
aliases:
  - SNS
  - Amazon SNS
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[AWS]], [[Message brokers]]

# AWS SNS

## Overview

Amazon Simple Notification Service (SNS) is a fully managed messaging service provided by [[AWS]] that enables the decoupling of [[Microservices Architecture Pattern|Microservices]] and distributed systems. SNS supports the publish/subscribe (pub/sub) messaging pattern, allowing you to send notifications to multiple subscribers at once.

## Key Features

> [!summary]
> 
> - **Publish/Subscribe Messaging**: Allows messages to be published to topics, which can then be subscribed to by multiple endpoints or clients.
> - **Multiple Protocols**: Supports a variety of protocols for message delivery, including HTTP/HTTPS, email, SMS, and AWS Lambda functions.
> - **Scalability**: Automatically scales to handle high message throughput.
> - **Security**: Provides message encryption and access control mechanisms.

## How It Works

1. **Topics**: Create a topic that acts as a logical access point for publishing messages.
2. **Subscriptions**: Endpoints (e.g., email addresses, HTTP/HTTPS endpoints, SQS queues, or Lambda functions) subscribe to the topic.
3. **Publishing**: Applications publish messages to the topic.
4. **Delivery**: SNS delivers the messages to all subscribed endpoints.


## Combining with SQS

Combining Amazon SNS with [[AWS  SQS]] leverages the power of publishing to multiple recipients with the durability of queues. This integration is beneficial for creating robust, scalable messaging solutions.

### Architecture Overview

![message broker architecture](https://tsh.io/wp-content/uploads/fly-images/17921/message-broker-architecture_-800x520.png)

**How It Works:**

1. **Publisher**: Sends messages to the Amazon SNS topic.
2. **SNS Topic**: Replicates and sends the received message to all its subscribers.
3. **Subscribers**: Amazon SQS queues act as subscribers to the SNS topic.
4. **Consumers**: Applications or services pull messages from the SQS queues.

This solution guarantees that messages are delivered to applications requiring immediate notifications for some events. They are also persistent, thanks to the queues, and can wait there until a consumer is available.

