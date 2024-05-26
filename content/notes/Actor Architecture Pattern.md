---
created: 2024-05-23 15:28
aliases:
  - Actor Architecture
  - Actor Design
  - Actor Model
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Architectural Patterns]]

# Actor Architecture Pattern

## Overview

The Actor Pattern is a conceptual model used to build highly concurrent and distributed systems. This pattern treats "actors" as the fundamental unit of computation, encapsulating state and behavior. Each actor can send and receive messages, create new actors, and manage its own state, which leads to a system where concurrency is managed without the need for locks or other synchronization mechanisms.

> [!abstract] 
> The Actor Pattern provides a robust model for building concurrent and distributed systems, where actors are the primary entities that encapsulate state and behavior, communicate via messaging, and operate independently.

## Key Concepts

> [!summary]
> 
> - **Actors**: Fundamental units of computation that encapsulate state and behavior. Each actor processes messages sequentially and independently, ensuring no shared state between actors.
>     
> - **Messaging**: Actors communicate through asynchronous message passing. This decouples actors from each other and avoids the need for locks, as each actor handles its own messages independently.
>     
> - **Actor Creation**: Actors can create new actors. This allows the system to dynamically adapt and scale by spawning new actors as needed.
>     
> - **State Management**: Each actor manages its own state. This encapsulation of state ensures that state is not shared between actors, reducing the complexity of concurrency control.
>     
> - **Supervision**: Actors can supervise other actors. If a supervised actor fails, the supervisor can take action, such as restarting the actor or escalating the failure.
>     
> - **Location Transparency**: Actors communicate with each other without needing to know the physical location of other actors. This allows actors to be distributed across multiple nodes in a cluster seamlessly.
>     

## How It Works

### Flow

The Actor Pattern operates through the following flow:

1. **Message Sending**: An actor sends a message to another actor. The message is placed in the recipient actor's mailbox.
2. **Message Processing**: The recipient actor processes messages sequentially from its mailbox. It handles each message independently and can change its state based on the message.
3. **Actor Creation**: An actor can create new actors to handle specific tasks or workloads. These new actors operate independently.
4. **Supervision**: Actors can be supervised by other actors. If an actor encounters an error or failure, the supervising actor can decide how to handle the failure, such as by restarting the actor.
5. **Concurrency Management**: Since each actor processes messages independently and manages its own state, the system inherently handles concurrency without requiring locks or other synchronization mechanisms.

### Example

Consider a simple example in an e-commerce system:

- **Order Actor**: Handles the state and behavior related to customer orders.
- **Payment Actor**: Manages payment processing.
- **Notification Actor**: Sends notifications to customers about their orders.

When a new order is placed, the Order Actor can create a Payment Actor to handle the payment processing. Once the payment is processed, the Notification Actor can send a confirmation message to the customer. Each actor handles its part of the process independently, and messages are passed between actors to coordinate the workflow.

## Related Principles and Patterns

> [!summary]
> 
> - **[[Message-driven Architecture Pattern|Message-driven Architecture]]**: The Actor Pattern aligns well with message-driven architectures, where components communicate through asynchronous messaging, enhancing decoupling and scalability.
>     
> - **[[Event-driven Architecture Pattern|Event-Driven Architecture]]**: Actors can emit events in response to messages, integrating smoothly with event-driven systems. This allows for reactive systems that respond to changes and events in real-time.
>     
> - **[[Microservices Architecture Pattern]]**: Actors can be used within microservices to manage concurrency and state, providing a robust model for building scalable microservices.
>     
> - **[[Reactive Architecture]]**: The Actor Pattern supports reactive principles by handling asynchronous message passing and enabling systems to react to changes and events.
>     
> - **[[Command Query Responsibility Segregation]] (CQRS)**: The separation of concerns in CQRS can be implemented using actors, where different actors handle commands and queries independently.
>     

## Pros/Cons

> [!success]- Pros
> 
> - **Concurrency Management**: Simplifies concurrency by ensuring actors handle their own state and process messages sequentially.
> - **Scalability**: Easily scales horizontally by adding more actors and distributing them across nodes.
> - **Fault Tolerance**: The supervision model allows for graceful handling of failures, enhancing system resilience.
> - **Decoupling**: Encourages loose coupling between components through asynchronous messaging.

> [!danger]- Cons
> 
> - **Complexity**: Can introduce complexity in understanding and managing actor systems, especially for large-scale applications.
> - **Debugging**: Debugging distributed actor systems can be challenging due to the asynchronous nature of message passing.
> - **Overhead**: Managing a large number of actors and messages can introduce overhead, requiring efficient resource management.

## Implementation Overview

To implement the Actor Pattern, consider the following steps:

1. **Define Actor Model**: Identify the actors, their state, and behavior.
2. **Set Up Messaging System**: Implement a messaging system to handle asynchronous message passing between actors.
3. **Create Actors**: Develop actors with defined state management and message-handling logic.
4. **Implement Supervision**: Set up supervision hierarchies to manage actor failures and restarts.
5. **Optimize for Scalability**: Ensure the actor system can scale horizontally by distributing actors across nodes.
6. **Monitor and Maintain**: Implement monitoring tools to observe actor behavior and system performance.

## Process Details

Actors manage their internal state, process messages, and create new actors. Each actor has:

- **Mailbox**: A queue where incoming messages are stored.
- **Private State**: Data that the actor manages and can modify based on the messages it processes.

### Process Flow

1. **Receiving Messages**: Actors receive messages asynchronously.
2. **Processing Messages**: Actors process each message sequentially, update their state, and may generate responses or new messages.
3. **Creating Actors**: Actors can create other actors to handle tasks or workloads.
4. **Supervising Actors**: Supervising actors manage the lifecycle and failure handling of their child actors.

## Distributed Actors

### Distributed Actor Model

The Actor Pattern can be extended across multiple nodes, allowing actors to be distributed for scalability and fault tolerance.

### Virtual Actors

Virtual Actors abstract the actor's physical location, enabling seamless distribution and scaling. Tools like Microsoft Orleans leverage this concept.

## Tools for Implementing Actor Model

- **Erlang**: A language designed for building concurrent, distributed, and fault-tolerant systems.
- **Elixir**: A functional, concurrent language built on the Erlang VM.
- **[[Microsoft Orleans]]**: A .NET framework for building distributed, scalable applications using the Virtual Actor model.
- **Akka**: A toolkit for building concurrent, distributed applications on the JVM.

## Conclusion

The Actor Pattern provides a powerful model for building concurrent and distributed systems by encapsulating state and behavior within actors, utilizing asynchronous messaging, and managing failures through supervision. By leveraging the principles of [[Message-driven Architecture Pattern|Message-driven Architecture]] and [[Event-driven Architecture Pattern|Event-Driven Architecture]], the Actor Pattern enables the development of scalable, resilient, and decoupled systems6 

# References

[A brief introduction to the actor model & distributed actors - YouTube](https://www.youtube.com/watch?v=YTQeJegJnbo)

[Actor Model Explained - YouTube](https://www.youtube.com/watch?v=ELwEdb_pD0k)

[Using the Actor Model with Domain-Driven Design (DDD) in Reactive Systems - YouTube](https://www.youtube.com/watch?v=rMv4sul0RwU)