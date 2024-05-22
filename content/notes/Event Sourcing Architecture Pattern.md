---
created: 2024-05-22 19:38
aliases:
  - Event Sourcing
  - Event Sourcing Architecture
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Microservices Architecture Pattern|Microservices]], [[Architectural Patterns]]

# Event Sourcing Architecture
## Diagram

![[Pasted image 20240522195422.png]]
## Overview

Event Sourcing is an architectural pattern in which state changes of an application are captured as a sequence of events. Instead of storing the current state, the system stores all events that have led to the current state. This approach provides a reliable and scalable way to manage data, ensuring that every change is trackable and reversible.

> [!abstract]
>  Event Sourcing maintains a complete history of changes to the application state as a sequence of events, enabling the reconstruction of the state at any point in time.

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

The event store is an append-only log, ensuring that events are sequenced with incremental numbers to guarantee their ordering. The order states can be rebuilt from these events and maintained in `OrderView`. If the `OrderView` is down, the event store, which is the source of truth, can always be relied upon to recover the order states.

## Pros/Cons

> [!success]- Pros
> 
> - **Auditability**: Provides a complete history of all changes, allowing for detailed audits and debugging.
> - **Scalability**: Can handle high write throughput and is scalable by design.
> - **Event Replay**: Enables state reconstruction at any point in time, facilitating debugging and recovery.

> [!danger]- Cons
> 
> - **Complexity**: Increases the complexity of the system, requiring careful design and implementation.
> - **Storage Requirements**: Can lead to large storage requirements due to the accumulation of events.
> - **Latency**: Eventual consistency can introduce latency in state visibility, requiring careful management.

## Use Cases

Event Sourcing is particularly useful in scenarios requiring a detailed audit trail or complex state transitions:

- **Financial Systems**: Ensures every transaction is recorded and traceable.
- **Order Management**: Tracks the lifecycle of orders, providing a detailed history.
- **User Activity Tracking**: Captures user actions for analysis and debugging.

## Summary

Event Sourcing is a powerful architectural pattern that ensures data consistency, auditability, and scalability by capturing all state changes as a sequence of events. While it introduces complexity and storage overhead, its benefits in terms of traceability and resilience make it a valuable approach for many high-demand applications.