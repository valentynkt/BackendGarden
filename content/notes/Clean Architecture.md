---
created: 2024-06-16 10:40
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Architectural Patterns]]

# Clean Architecture

![[Pasted image 20240616104019.jpg]]

## Overview


Clean Architecture, proposed by Robert C. Martin (Uncle Bob), is a software design philosophy aimed at creating systems that are easy to maintain, test, and adapt. The core idea is to organize the system in such a way that the business logic is independent of frameworks, user interfaces, databases, and other external concerns. This separation of concerns is achieved through a layered approach, ensuring that the core business logic remains isolated from external changes.

## Key Concepts

> [!summary] **Core Concepts**
> 
> - **Independence**: The architecture promotes the independence of the business logic from the user interface, database, frameworks, and other external agencies.
> - **Layers**: The system is divided into concentric layers, each with specific responsibilities, ensuring clear separation of concerns.
> - **Dependency Rule**: Dependencies point inward, meaning that inner layers are not aware of the outer layers.

## Layers of Clean Architecture

> [!info] **Layers**
> 
> - **Entities**: At the core, representing the business objects and containing the core business logic and rules.
> - **Use Cases**: Surrounding the entities, these contain the application-specific business rules. They orchestrate the flow of data to and from the entities, driving the business processes.
> - **Interface Adapters**: These convert data from the format most convenient for the use cases and entities to the format most convenient for external agencies like databases and user interfaces.
> - **Frameworks and Drivers**: The outermost layer containing frameworks and tools such as the database, the web framework, etc. This layer is where all the external dependencies reside.

## Dependency Rule

> [!important] **Dependency Rule**
> 
> - All dependencies must point inward. 
> - Nothing in an inner circle can know anything about something in an outer circle. For example, entities do not know about use cases, use cases do not know about interface adapters, and so on.

## Example


> [!example]- Entities
> Core business objects with business rules.
>``` csharp
>public class Order
>{
>    public int Id { get; set; }
>    public DateTime OrderDate { get; set; }
>    public List<OrderItem> Items { get; set; }
>    public decimal Total => Items.Sum(item => item.Price * item.Quantity);
>}
>
>```


> [!example]- Use Cases
> Application-specific business rules.
>``` csharp
>public class CreateOrderUseCase
>{
>    private readonly IOrderRepository _orderRepository;
>
>    public CreateOrderUseCase(IOrderRepository orderRepository)
>    {
>        _orderRepository = orderRepository;
>    }
>
>    public void Execute(Order order)
>    {
>        // Business logic to create an order
>        _orderRepository.Save(order);
>    }
>}
>
>```


> [!example]- **Interface Adapters**
> Convert data formats.
>``` csharp
>public class OrderController
>{
>    private readonly CreateOrderUseCase _createOrderUseCase;
>
>    public OrderController(CreateOrderUseCase createOrderUseCase)
>    {
>        _createOrderUseCase = createOrderUseCase;
>    }
>
>    public void CreateOrder(OrderDto orderDto)
>    {
>        var order = MapToOrder(orderDto);
>        _createOrderUseCase.Execute(order);
>    }
>
>    private Order MapToOrder(OrderDto orderDto)
>    {
>        // Mapping logic from DTO to Order entity
>    }
>}
>
>```


> [!example]- Frameworks and Drivers
> External frameworks and tools.
>``` csharp
>public class OrderRepository : IOrderRepository
>{
>    private readonly DbContext _context;
>
>    public OrderRepository(DbContext context)
>    {
>        _context = context;
>    }
>
>    public void Save(Order order)
>    {
>        _context.Orders.Add(order);
>        _context.SaveChanges();
>    }
>}
>
>```

## Related Topics

> [!summary] **Related Topics**
> 
> - **[[Hexagonal Architecture]]**: Shares similar goals of separating concerns and promoting maintainability and testability.
> - **[](Hexagonal%20Architecture%20Pattern.md)rn]]**: Another architectural pattern that emphasizes keeping the core business logic isolated from external concerns.
> - **[[Domain Driven Design|Domain-Driven Design]]**: Often used in conjunction with Clean Architecture to model complex business domains.
> - **[[SOLID Principles]]**: Clean Architecture heavily relies on SOLID principles to ensure a robust, maintainable design.
> - **[[Microservices Architecture Pattern]]**: Can benefit from the decoupling principles of Clean Architecture.

# References 

[Hexagonal Architecture and Clean Architecture (with examples) - DEV Community](https://dev.to/dyarleniber/hexagonal-architecture-and-clean-architecture-with-examples-48oi)

[Clean Coder Blog](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

[GitHub - Code Challenge: Simple Blog API built with TypeScript and MongoDB.](https://github.com/dyarleniber/simple-blog-application-backend-challenge)