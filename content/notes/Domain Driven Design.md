---
created: 2024-05-23 14:10
aliases:
  - DDD
  - Domain-Driven Design
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Architectural Patterns]]

# Domain Driven Design

## Design

![[Pasted image 20240523152502.png]]

## Overview

Domain-Driven Design (DDD) is an approach to software development that emphasizes the importance of the domain (the specific area of knowledge or activity) and domain logic over other aspects of the software development process. DDD aims to create a common understanding of the domain among developers, stakeholders, and users, ensuring that the software accurately reflects the business requirements and processes.

> [!abstract]
>  Domain-Driven Design (DDD) focuses on modeling software to reflect the complexities and nuances of the business domain, using a shared language and collaboration between technical and business stakeholders.

## Key Concepts


> [!summary] 
> 
> - **Ubiquitous Language**: A shared language created by developers and domain experts to ensure that everyone involved in the project understands the domain concepts in the same way. This language is used consistently throughout the code, documentation, and discussions to avoid misunderstandings and ensure clarity.
> 
> - **Bounded Context**: Defines the boundaries within which a particular model is defined and applicable. Different parts of the system may have different models, and bounded contexts help manage these differences by isolating them. Each bounded context has its own ubiquitous language and is clearly separated from other contexts.
> 
> - **Entities**: Objects that have a distinct identity that runs through time and different states. They are uniquely identifiable and are often mutable. Examples include a customer or an order in an e-commerce system.
>     
> - **Value Objects**: Immutable objects that describe certain aspects of the domain and do not have a distinct identity. They are defined by their attributes rather than an identity. Examples include a date range, an address, or a money amount.
> 
> - **Aggregates**: A cluster of related entities and value objects that are treated as a single unit for data changes. Each aggregate has a root entity (aggregate root) that is responsible for controlling access to its members.
>     
> - **Repositories**: Mechanisms for encapsulating storage, retrieval, and search behavior which emulates a collection of objects. They provide a way to manage aggregates and handle database operations.
> 
> - **Domain Services**: Operations that do not naturally fit within the lifecycle of an entity or value object. These are stateless services that contain domain logic and can operate across multiple entities or aggregates.
> 
> - **Factories**: Responsible for creating complex objects and aggregates. They encapsulate the creation logic and ensure that the created objects are in a valid state.
> 
> - **Domain Events**: Events that represent something that happened in the domain. They are used to capture changes in state and can trigger side effects or other operations. Domain events help in maintaining consistency and can be used for integrating bounded contexts. Additionally, domain events are a crucial component of the [[Event Sourcing Architecture Pattern|Event Sourcing]] pattern, where the state of an entity is derived from a sequence of events.


### Example

Consider an e-commerce system:

- **Entity**: Customer, Order
- **Value Object**: Address, Money
- **Aggregate**: Order (with OrderItems as part of the aggregate)
- **Repository**: OrderRepository, CustomerRepository
- **Domain Service**: OrderService (handles complex order processing logic)
- **Factory**: OrderFactory (creates complex order instances)
- **Domain Event**: OrderPlaced, OrderCancelled

## How It Works

### Flow

Implementing Domain-Driven Design involves several steps, each focused on capturing and modeling the domain logic effectively.

1. **Collaborate with Domain Experts**:
    
    - Engage with domain experts to understand the business processes, requirements, and terminology.
    - Develop a ubiquitous language to ensure consistent communication.
2. **Identify Bounded Contexts**:
    
    - Define the boundaries within which a particular model is applicable.
    - Ensure that each bounded context has a clear separation from others, maintaining its own model and language.
3. **Model Entities and Value Objects**:
    
    - Identify key entities and value objects within each bounded context.
    - Ensure entities have unique identities and encapsulate business rules, while value objects represent descriptive aspects of the domain.
4. **Define Aggregates and Repositories**:
    
    - Group related entities and value objects into aggregates.
    - Design repositories to manage these aggregates, handling data access and ensuring consistency.
5. **Implement Domain Services and Factories**:
    
    - Create domain services for operations that span multiple entities or aggregates.
    - Use factories to handle the creation of complex objects and ensure they are in a valid state upon creation.
6. **Leverage Domain Events**:
    
    - Capture changes in the domain by emitting domain events.
    - Use these events to trigger other actions or notify other parts of the system, maintaining eventual consistency.

### Example Flow

In an e-commerce system, the flow might look like this:

- **Step 1**: Domain experts and developers collaborate to define the ubiquitous language and identify bounded contexts such as Customer Management and Order Processing.
- **Step 2**: Within the Order Processing context, entities like Order and OrderItem are identified, along with value objects like Address and Money.
- **Step 3**: The Order aggregate is defined, grouping Order and OrderItem. An OrderRepository is created to manage data access for the Order aggregate.
- **Step 4**: OrderService is implemented to handle complex order processing logic, such as calculating total order value or checking inventory.
- **Step 5**: OrderFactory is used to create new orders, ensuring all necessary information is provided and the order is in a valid state.
- **Step 6**: When an order is placed, an OrderPlaced domain event is emitted. This event triggers other actions such as updating inventory or notifying the customer.

## Pros/Cons

> [!success]- Pros
> 
> - **Alignment with Business Needs**: Ensures the software accurately reflects business requirements through close collaboration between developers and domain experts.
> - **Modularity**: Promotes modularity by defining clear boundaries (bounded contexts) and encapsulating domain logic within aggregates and services.
> - **Scalability**: Facilitates scalability by enabling the independent evolution of different parts of the system.

> [!danger]- Cons
> 
> - **Complexity**: Can introduce complexity, particularly in large domains with many entities and relationships.
> - **Learning Curve**: Requires a good understanding of both the domain and DDD principles, which can have a steep learning curve.
> - **Initial Effort**: Involves significant initial effort in creating the ubiquitous language, defining bounded contexts, and modeling the domain.


## Conclusion

Domain-Driven Design (DDD) is a powerful approach to building complex software systems that accurately reflect business requirements. By focusing on the domain and collaborating with domain experts, DDD ensures that the software is aligned with business needs and can adapt to changes over time. Despite its complexity and initial effort, DDD offers significant benefits in terms of modularity, scalability, and maintainability.

# References

[An introduction to Domain-Driven Design | Medium](https://medium.com/inato/an-introduction-to-domain-driven-design-386754392465)

[Domain-Driven Design](https://devopedia.org/domain-driven-design)

[Using the Actor Model with Domain-Driven Design (DDD) in Reactive Systems - YouTube](https://www.youtube.com/watch?v=rMv4sul0RwU)

[DDD, Event Sourcing and Actors - Alexey Zimarev - KanDDDinsky 2019 - YouTube](https://www.youtube.com/watch?v=58_Ehl3oETY)