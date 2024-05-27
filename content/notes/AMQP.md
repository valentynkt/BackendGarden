---
created: 2024-05-27 11:54
aliases:
  - Advanced Message Queuing Protocol
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Real-Time Notification Architectures]],  [[Message brokers]]

# AMQP (Advanced Message Queuing Protocol)

## Overview

AMQP (Advanced Message Queuing Protocol) is an open standard protocol for message-oriented middleware. It enables the reliable exchange of business messages between different applications or systems. AMQP is designed to support various messaging patterns and provide features like message queuing, routing, reliability, and security.

## Key Features

> [!summary]
> 
> - **Reliability**: Ensures messages are delivered once and only once.
> - **Interoperability**: Allows different systems to communicate regardless of the language or platform they use.
> - **Flexibility**: Supports a wide range of messaging patterns, including point-to-point, publish/subscribe, and more.
> - **Security**: Provides mechanisms for secure message transmission through authentication and encryption.
> - **Flow Control**: Manages the rate of message delivery to prevent overwhelming consumers.

## How It Works

1. **Producers**: Applications or services that send messages.
2. **Consumers**: Applications or services that receive messages.
3. **Brokers**: Middleware that routes and stores messages. Common AMQP brokers include RabbitMQ and Apache Qpid.
4. **Exchanges**: Receives messages from producers and routes them to queues based on rules called bindings.
5. **Queues**: Buffers that store messages until they are processed by consumers.
6. **Bindings**: Rules that define the relationship between exchanges and queues.

## AMQP vs. [[MQTT]]

| Feature                | AMQP                                                             | MQTT                                                                |
| ---------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Protocol Type**      | Message queuing protocol                                         | Lightweight publish/subscribe messaging protocol                    |
| **Designed For**       | High reliability and enterprise messaging                        | Low bandwidth and constrained environments                          |
| **Message Size**       | Supports large message payloads                                  | Optimized for small message payloads                                |
| **QoS Levels**         | Ensures exactly once delivery                                    | Offers three QoS levels: at most once, at least once, exactly once  |
| **Overhead**           | Higher due to extensive features                                 | Lower due to simplicity                                             |
| **Usage**              | Enterprise systems, financial services, supply chain             | IoT, mobile applications, sensor networks                           |
| **Security**           | Robust security features including authentication and encryption | Basic security features; often relies on underlying transport layer |
| **Transport Protocol** | TCP                                                              | TCP, WebSockets                                                     |
