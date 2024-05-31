---
created: 2024-04-18 18:42
aliases:
  - Microservice Design Pattern
  - Distributed Services Architecture
  - Microservices
  - Microservices Architecture
links: "[[Architectural Patterns]]"
tags:
  - LearningIT
  - "#moc"
  - bud🌿
---
link: [[Architectural Patterns]]

# Microservices Architecture Pattern

## Diagram

![[../Files/Images/Pasted image 20240426170348.png]]

## Overview

Microservices Architecture is a design approach where an application is divided into small, autonomous services, each designed around specific business capabilities. This architectural style is preferred for its scalability, flexibility, and ability to facilitate agile development and deployment practices.

## Key Concepts

Microservices Architecture promotes a decentralized approach to software development with the following core principles:

> [!important]
> 
> - **Independent Deployment**: Each microservice operates independently, allowing for individual scaling, deployment, and updating without affecting other components of the application.
> - **Decentralized Data Management**: Each microservice manages its own database, ensuring loose coupling and data encapsulation.
> - **Polyglot Programming**: Services can be developed using different programming languages and technologies best suited for their specific requirements.
> - **Simplified Scaling**: Independent services allow for targeted scaling of application components as needed, enhancing resource efficiency.

### Communication

Understanding the communication patterns and operational dynamics is crucial in a Microservices Architecture:

> [!important]
> 
> - **[[API Gateway]]**: A single entry point that routes requests to the appropriate microservices. It handles request routing, composition, and protocol translation, simplifying the client interface.
> - **[[Service Registry Pattern|Service Discovery]]**: Mechanisms for services to find and communicate with each other. This can be either client-side or server-side (using a service registry).
> - **Synchronous Communication**: Often implemented using REST or gRPC API for direct service-to-service communication.
> - **Asynchronous Communication**: Utilizes message queues and event streams, where services communicate via events. This method decouples service dependencies and enhances resilience, often using [[Message brokers]].

These communication strategies ensure that services can operate and interact effectively without tight coupling, maintaining the integrity and agility of the application architecture.

### Pros and Cons

The adoption of Microservices Architecture brings notable advantages and challenges:

> [!success] **Pros**
> 
> - **Flexibility in Technology**: Microservices allow the use of various frameworks, languages, and data storage technologies to best fit the service needs.
> - **Resilience**: By isolating services, failures in one area do not cause a system-wide outage.
> - **Scalability**: Independent scalability of services allows for efficient resource use.

> [!warning] **Cons**
> 
> - **Complexity in Coordination**: Managing multiple services and their interactions can complicate system design and operations.
> - **Data Consistency**: Ensuring consistency across services can be challenging and may require sophisticated synchronization mechanisms.
> - **Network Latency**: Inter-service communication over networks can introduce delays and reliability issues.

## Related Topics

> [!important]
> 
> - **[[Scalability|Scalability]]**: Enhances the ability of a system to handle increased loads by adding resources, ensuring that microservices can scale independently.
> - **[[Fault Tolerance]]**: Ensures that the system can continue operating properly even in the event of failures, often using redundancy and failover strategies.
> - **[[High Availability]]**: Measures the uptime of the system, ensuring that services remain accessible to users even in the face of failures.
> - **[[Data Replication]]**: Duplicates data across multiple nodes or locations to ensure data availability and consistency, aiding in fault tolerance and disaster recovery.
> - **[[Load Balancing]]**: Distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed, enhancing performance and reliability.
> - **[[API Gateway]]**: A single entry point that routes requests to the appropriate microservices, handling request routing, composition, and protocol translation.
> - **[[Service Registry Pattern]]**: Maintains a registry of services and their instances, enabling efficient service discovery.
> - **[[Circuit Breaker Pattern]]**: Protects services from cascading failures by breaking the circuit and preventing calls to a service when failures reach a certain threshold.
> - **[[Event-driven Architecture Pattern]]**: Facilitates asynchronous communication and decoupling of services by using events as the primary form of communication.
> - **[[Database per Service]]**: Each microservice manages its own database, promoting loose coupling and data encapsulation.
> - **[[Command Query Responsibility Segregation]]**: Separates read and write operations into different models to optimize performance and scalability.
> - **[[Externalized Configuration]]**: Manages application settings outside the deployable artifacts, allowing dynamic changes without redeployment.
> - **[[Saga Pattern]]**: Manages data consistency across multiple services in distributed transactions using a sequence of local transactions and compensating actions.
> - **[[Bulkhead Pattern]]**: Isolates system components to prevent failures from cascading, enhancing resilience by limiting the impact of a failure.
> - **[[Backends for Frontends pattern]]**: Creates specific backends for different frontends (e.g., mobile, web) to optimize performance and user experience.
> - **[[Orchestration and Choreography]]**: Defines how microservices interact to complete a business process, with Orchestration having a central controller and Choreography using decentralized events.

## [[Monolith vs Microservice]]

![[Monolith vs Microservice#Monolithic vs Microservices Architecture Pattern]]

## Summary

> [!summary] 
> Microservices Architecture is a powerful pattern for developing complex, scalable software systems. It supports rapid, reliable, and efficient application development by structuring an application as a collection of loosely coupled services. This architecture not only fosters innovation and agility but also imposes challenges that require careful strategy and robust infrastructure to overcome.

# References

[Cloud design patterns - Azure Architecture Center | Microsoft Learn](https://learn.microsoft.com/en-us/azure/architecture/patterns/)