---
created: 2024-11-02 00:20
aliases: 
tags:
  - LearningIT
  - seed🌱
---

link:

# Dependency Injection

![[Pasted image 20231017220802.png]]![[Pasted image 20231017220902.png]]

## Overview

Dependency Injection (DI) is a design pattern used to achieve Inversion of Control (IoC) between classes and their dependencies. Instead of classes creating their dependencies, they receive them from an external source, known as an injector or DI container. This setup leads to a loosely coupled system that is easier to maintain, extend, and test.

## Key Benefits

> [!summary] **Advantages of Dependency Injection**
> 
> - **Decoupling**: Reduces dependencies between classes, making code easier to maintain and refactor.
> - **Enhanced Testability**: Simplifies testing by allowing easy replacement of dependencies with mocks or stubs.
> - **Increased Reusability**: Promotes modularity, making components easier to reuse in different parts of an application.

## DI Concepts

1. **Dependency Injection Container**: A DI container is responsible for creating and managing the lifecycle of objects and their dependencies. It injects required dependencies based on configuration.
2. **Injection Types**:
    - **Constructor Injection**: Passes dependencies through a constructor. This is the most common and recommended approach.
    - **Property Injection**: Assigns dependencies through public properties, typically optional dependencies.
    - **Method Injection**: Dependencies are passed directly to methods where needed.

## DI Service Lifetimes

The lifetime of dependencies managed by DI containers can be configured to control object creation and reuse:

- **Singleton**: A single instance is used throughout the application's lifecycle.
- **Scoped**: A new instance is created per client request (often used in web applications).
- **Transient**: A new instance is created each time the dependency is requested.

## Example Workflow

1. **Configure Services**: Define dependencies in the DI container configuration (e.g., `services.AddSingleton<IService, ServiceImplementation>();`).
2. **Injection**: The DI container injects dependencies into objects as needed, either through constructors, properties, or methods.
3. **Resolution**: The container resolves dependencies at runtime, ensuring objects have the required dependencies available.

## Best Practices

> [!important]
> 
> - **Use Constructor Injection**: This method ensures that all required dependencies are available when the object is created.
> - **Avoid Service Locator Pattern**: Avoid retrieving dependencies manually from the DI container; let DI handle it.
> - **Prefer Interface Injection**: Use interfaces for dependencies to make classes more modular and interchangeable.

## Related Topics

> - **[[Dependency Injection in .NET]]**: Provides an in-depth look at DI configuration and usage specific to .NET applications.
> - **[[Dependency Inversion Principle]]**: Explains how DI is a form of IoC, enabling dependencies to be injected rather than constructed within the class.

# Reference:

[Mastering Dependency Injection in C#: Best Practices, Pitfalls, and Future Trends | by Artem A. Semenov | Medium](https://artemasemenov.medium.com/mastering-dependency-injection-in-c-best-practices-pitfalls-and-future-trends-61189ad97f25)
[Understanding Dependency Injection in C# | by Lewis Baxter | Medium](https://lewisjohnbaxter.medium.com/understanding-dependency-injection-in-c-567e65701a34)

 