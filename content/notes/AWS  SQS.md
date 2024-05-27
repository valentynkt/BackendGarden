---
created: 2024-05-26 14:44
aliases:
  - Simple Queue Service
  - Amazon SQS
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[AWS]], [[Message Queues]]

# AWS SQS

## Overview

AWS Simple Queue Service (SQS) is a fully managed message queuing service provided by [[AWS]] that enables decoupling and scaling of microservices, distributed systems, and serverless applications. SQS allows you to send, store, and receive messages between software components without losing messages or requiring other services to be available.

## Key Features

> [!summary]
> 
> - **Message Queuing**: SQS allows for reliable and scalable message queuing, ensuring that messages are delivered and processed asynchronously.
> - **Multiple Queue Types**: Supports Standard and FIFO (First-In-First-Out) queues to cater to different application requirements.
> - **Scalability**: Automatically scales to handle high throughput of messages.
> - **Security**: Provides message encryption, access control, and policies to secure data and ensure reliable delivery.

## How It Works

1. **Queues**: Create a queue that acts as a storage for messages until they are processed.
2. **Message Sending**: Producers send messages to the SQS queue.
3. **Message Storage**: SQS stores the messages in the queue.
4. **Message Receiving**: Consumers retrieve messages from the queue and process them.
5. **Message Deletion**: After processing, consumers delete the messages from the queue to prevent reprocessing.

## Combining With [[AWS SNS|SNS]]

![[AWS SNS#Combining with SQS]]