---
created: 2024-05-22 19:38
aliases:
  - Event Sourcing
  - Event Sourcing Architecture
  - Event Design
  - Event Sourcing Design
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Microservices Architecture Pattern|Microservices]], [[Architectural Patterns]]

# Event Sourcing Architecture

## Diagram

![[Pasted image 20240522195422.png]]

## Overview

Event Sourcing is an architectural pattern in which state changes of an application are captured as a sequence of events. Instead of storing the current state, the system stores all events that have led to the current state. This approach provides a reliable and scalable way to manage data, ensuring that every change is trackable and reversible.

> [!abstract]
> Event Sourcing maintains a complete history of changes to the application state as a sequence of events, enabling the reconstruction of the state at any point in time.

## Key Concepts

Event Sourcing revolves around several fundamental principles:

> [!important]
> 
> - **Event Log**: All changes are stored as an immutable sequence of events, capturing every state transition.
> - **Event Replay**: The current state is reconstructed by replaying the events from the event log.
> - **Consistency**: Ensures strong consistency by applying events in the same order they were generated.
> - **Auditability**: Provides a complete audit trail of all changes, allowing for detailed analysis and debugging.

## How Event Sourcing Works
![[#Diagram]]
### Normal System Design

1. Bob wants to buy a product. The order is created and inserted into the database.
2. Bob wants to change the quantity from 5 to 6. The order is modified with a new state in the database.

### Event Sourcing Design

1. Bob wants to buy a product. A `NewOrderEvent` is created, sequenced, and stored in the event store with `eventID=321`.
2. Bob wants to change the quantity from 5 to 6. A `ModifyOrderEvent` is created, sequenced, and persisted in the event store with `eventID=322`.
3. The order view is rebuilt from the order events, showing the latest state of an order.

The event store is an append-only log, ensuring that events are sequenced with incremental numbers to guarantee their ordering. The order states can be rebuilt from these events and maintained in an `OrderView`. If the `OrderView` is down, the event store, which is the source of truth, can always be relied upon to recover the order states.

## Pros and Cons

> [!success] Pros
> 
> - **Auditability**: Provides a complete history of all changes, allowing for detailed audits and debugging.
> - **Scalability**: Can handle high write throughput and is scalable by design.
> - **Event Replay**: Enables state reconstruction at any point in time, facilitating debugging and recovery.

> [!danger] Cons
> 
> - **Complexity**: Increases the complexity of the system, requiring careful design and implementation.
> - **Storage Requirements**: Can lead to large storage requirements due to the accumulation of events.
> - **Latency**: Eventual consistency can introduce latency in state visibility, requiring careful management.

## Use Cases

Event Sourcing is particularly useful in scenarios requiring a detailed audit trail or complex state transitions:

- **Financial Systems**: Ensures every transaction is recorded and traceable.
- **Order Management**: Tracks the lifecycle of orders, providing a detailed history.
- **User Activity Tracking**: Captures user actions for analysis and debugging.

![[4f0e49cb-dce6-417f-9e57-78f3fd9bc1ed_1280x1664.webp]]

> [!example]- Real Use Cases
> 1. **New York Times**: The newspaper website stores every article, image, and byline since 1851 in an event store. The raw data is then denormalized into different views and fed into different ElasticSearch nodes for website searches.
> 2. **Change Data Capture (CDC)**: A CDC connector pulls data from the tables and transforms it into events. These events are pushed to Kafka and other sinks consume events from Kafka.
> 3. **Microservice Connector**: The event-sourcing paradigm can be used for transmitting events among microservices. For example, the shopping cart service generates various events for adding or removing items from the cart. Kafka broker acts as the event store, and other services, including the fraud service, billing service, and email service, consume events from the event store. Since events are the source of truth, each service can determine the domain model on its own.

## Summary

Event Sourcing is a powerful architectural pattern that ensures data consistency, auditability, and scalability by capturing all state changes as a sequence of events. While it introduces complexity and storage overhead, its benefits in terms of traceability and resilience make it a valuable approach for many high-demand applications.

## Related Topics

> [!summary]
> 
> - **[[Command Query Responsibility Segregation|CQRS]]**: Often used with Event Sourcing to separate read and write models, enabling more efficient data access and manipulation.
> - **[[Domain Driven Design|Domain-Driven Design]]**: Event Sourcing aligns well with DDD by capturing domain events that represent significant changes in the state of the system.
> - **[[Microservices Architecture Pattern|Microservices]]**: Event Sourcing supports microservices by providing a way to handle data consistency and state management across distributed services.
> - **[[Message-driven Architecture Pattern|Message-driven]], [[Event-driven Architecture Pattern|Event-Driven]]**: Utilizes events as messages, promoting decoupling and scalability in distributed systems.
> - **[[Distributed Systems]]**: Event Sourcing is integral to distributed systems, ensuring consistent state and data replication across multiple nodes.
