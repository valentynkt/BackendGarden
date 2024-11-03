---
created: 2024-05-26 14:39
aliases:
  - Service Bus
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Azure]], [[Message brokers]]

# Azure Service Bus

## Overview

Azure Service Bus is a fully managed enterprise message broker offered by [[Azure|Microsoft Azure]]. It is designed to integrate applications and services, providing reliable and secure communication between distributed systems. Azure Service Bus supports a variety of messaging patterns, including point-to-point and publish-subscribe.

## Key Features

> [!summary] **Reliable Messaging**
> 
> - **Message Queues**: Ensure reliable delivery of messages between services, with features like dead-lettering, message deferral, and duplicate detection.
> - **Topics and Subscriptions**: Enable publish-subscribe messaging, allowing messages to be sent to multiple subscribers.

> [!summary] **Advanced Messaging Capabilities**
> 
> - **Message Sessions**: Group related messages into a single session for ordered processing.
> - **Scheduled Messages**: Schedule messages to be delivered at a specific time.
> - **Dead-Letter Queue**: Capture messages that cannot be delivered or processed, for later inspection and handling.

> [!summary] **Security and Compliance**
> 
> - **[[Role-Based Access Control]] (RBAC)**: Secure access to the Service Bus resources using Azure Active Directory.
> - **Transport Layer Security (TLS)**: Ensure secure communication over the network.

> [!summary] **Scalability and Performance**
> 
> - **Auto-Scaling**: Automatically scale to handle varying loads.
> - **High Throughput**: Support for high-volume messaging workloads with low latency.

## How It Works

### Components

> [!summary]
> 
> - **Namespaces**: Logical containers for Service Bus resources, providing isolation and management capabilities.
> - **Queues**: Store messages until they are retrieved by receiving applications.
> - **Topics and Subscriptions**: Topics allow messages to be published to multiple subscribers via subscriptions.
> - **Relays**: Enable direct, secure communication between on-premises and cloud-hosted services.

### Messaging Models

> [!important]
> 
> - **[[Message Queues|Point-to-Point]] ([[Azure Service Bus Queue]])**: Using queues, messages are sent from one producer to one consumer. This ensures that each message is processed by only one consumer.
> - **[[Message Topics|Publish-Subscriber]] ([[Azure Service Bus Topic]])**: Using topics and subscriptions, messages are published to a topic and can be received by multiple subscribers. Each subscriber can receive its own copy of the message.

## Related Topics

> [!summary]
> 
> - **[[Message-driven Architecture Pattern|Message-driven Architecture]]**, **[[Event-driven Architecture Pattern|Event-Driven Architecture]]**:: Azure Service Bus supports message-driven communication, enabling decoupled and asynchronous interactions between components.
> - **[[Azure Event Hub]]**: Another Azure messaging service, designed for large-scale event ingestion and stream processing, complementing Azure Service Bus in handling different messaging scenarios.
> - **[[Azure Event Grid]]**: Azure service for managing events in a reactive programming model, often used in conjunction with Service Bus to handle complex event-driven scenarios.
> - **[[Quality of Service]]**: Concepts related to ensuring reliable message delivery and processing in distributed systems, critical for Azure Service Bus implementations.
> - **[[Advanced Message Queuing Protocol]]**: Advanced Message Queuing Protocol supported by Azure Service Bus for standard-based messaging.

## Summary

Azure Service Bus is a powerful and flexible enterprise message broker that supports reliable messaging, advanced messaging patterns, and secure communication. It is ideal for integrating distributed systems, decoupling services, and implementing scalable and resilient architectures. With robust features and seamless integration with other Azure services, Azure Service Bus is a key component in modern cloud-based solutions.