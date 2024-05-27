---
created: 2024-05-27 11:54
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Real-Time Notification Architectures]], [[Message brokers]]

# MQTT

## Diagram

![[Pasted image 20240527115849.png]]

## Overview

MQTT (Message Queuing Telemetry Transport) is a lightweight, publish/subscribe messaging protocol designed for low-bandwidth, high-latency, or unreliable networks. It is widely used in Internet of Things (IoT) applications due to its efficiency and ease of implementation.

## Key Features

> [!summary]
> 
> - **Lightweight**: Designed to be efficient, minimizing network bandwidth and device resource requirements.
> - **Publish/Subscribe Model**: Supports flexible and scalable communication between devices.
> - **Quality of Service (QoS) Levels**: Provides three levels of message delivery assurance to balance reliability and performance.
> - **Persistent Sessions**: Allows clients to maintain session states between connections.
> - **Last Will and Testament (LWT)**: Notifies subscribers of an unexpected disconnection of a client.

## How It Works

### Components

- **Broker**: The server that handles message distribution between clients.
- **Clients**: Devices or applications that connect to the broker to send (publish) or receive (subscribe to) messages.

### Workflow

1. **Connection**: A client establishes a connection to the MQTT broker.
2. **Subscription**: The client subscribes to one or more topics of interest.
3. **Publishing**: A client publishes messages to specific topics.
4. **Delivery**: The broker routes the published messages to all clients subscribed to those topics.
5. **Disconnection**: The client can disconnect from the broker when it no longer needs to send or receive messages.

## Quality of Service (QoS) Levels

Supports 3 QoS levels
![[Quality of Service#Diagram]]
## Pros/Cons

> [!success] Pros
> 
> - **Efficiency**: Low overhead makes it suitable for constrained environments.
> - **Scalability**: Easily handles a large number of devices and messages.
> - **Flexibility**: Publish/subscribe model decouples message producers from consumers.

> [!danger] Cons
> 
> - **Security**: Requires additional measures to secure communication, such as TLS.
> - **Message Ordering**: No guarantee of message ordering in all scenarios.
> - **Broker Dependency**: Relies on a central broker, which can be a single point of failure if not managed correctly.

## Summary

MQTT is a versatile protocol ideal for scenarios requiring efficient, low-overhead communication across unreliable or constrained networks. Its lightweight design and flexible publish/subscribe model make it particularly suited for IoT applications, remote monitoring, and mobile messaging, where bandwidth and resource conservation are crucial.