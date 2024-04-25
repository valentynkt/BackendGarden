---
created: 2024-04-18 18:14
aliases:
  - Interaction Patterns
  - Behavior Design Patterns
  - Communication Patterns
links: "[[Design Patterns]]"
tags:
  - LearningIT
  - evergreen🌳
---
link: [[Design Patterns]]

# Behavioral patterns

## Overview

Behavioral design patterns are fundamental to improving communication between objects and encapsulating complex control logic. They are crucial for defining how different parts of a system interact and for managing responsibilities and algorithms in software development.

> [!abstract]
>  Behavioral patterns streamline the interactions within and across objects, making designs more dynamic and robust. They facilitate the delegation of responsibilities, which can help manage workflows more effectively and enhance the responsiveness of applications.

## Content

### Key Concepts

Behavioral patterns provide mechanisms for efficient and flexible object interaction. By organizing object communications, these patterns increase the flexibility in carrying out communication:

> [!important]
> 
> - [[Chain Of Responsibility Pattern]]: Allows passing request along a chain of potential handlers until one of them handles the request. 
>   ![[Pasted image 20240408114527.png]]
> - [[Command Pattern |Command]]: Encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations. 
>   ![[Pasted image 20240408221337.png]]
> - [[Iterator Pattern |Iterator]]: Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. 
>   ![[Pasted image 20240408221401.png]]
> - [[Mediator Pattern |Mediator]]: Reduces chaotic dependencies between objects by making them communicate indirectly, through a mediator object. 
>   ![[Pasted image 20240408221408.png]]
> - [[Memento Pattern|Memento]]: Enables saving and restoring the previous state of an object without exposing the details of its implementation.
>    ![[Pasted image 20240408221416.png]]
> - [[Observer Pattern |Observer]]: Allows a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing. 
>   ![[Pasted image 20240408221422.png]]
> - [[State Pattern |State]]: Allows an object to alter its behavior when its internal state changes. The object will appear to change its class. 
>   ![[Pasted image 20240408221429.png]]
> - [[Strategy Pattern |Strategy]]: Enables defining a family of algorithms, encapsulating each one, and making them interchangeable. Strategy lets the algorithm vary independently from clients that use it. 
>   ![[Pasted image 20240408221436.png]]
> - [[Template Method Pattern |Template Method]]: Defines the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure. 
>   ![[Pasted image 20240408221442.png]]
> - [[Visitor Pattern |Visitor]]: Lets you define a new operation without changing the classes of the elements on which it operates.
>    ![[Pasted image 20240408221450.png]]

### Implementation Overview

Implementing behavioral patterns typically involves the following considerations:

- **Enhance Object Communication**: Use patterns like Mediator and Observer to manage and optimize communication between objects.
- **Encapsulate Complex Logic**: Apply patterns like Strategy and Command to isolate complex logic and algorithms, making them more manageable and reusable.
- **Maintain System Flexibility**: Leverage patterns such as State and Template Method to maintain flexibility in your system’s behavior and algorithm structure.


## Summary

>[!summary]
> Behavioral design patterns are vital for managing complex interactions and responsibilities within software systems. They not only streamline communication between objects but also provide significant flexibility in managing the system's operations. By properly implementing these patterns, developers can ensure more maintainable, scalable, and robust applications.

# References

https://refactoring.guru/design-patterns

