---
created: 2024-04-19 02:28
aliases:
  - Abstraction in Software Design
  - Interface-based Programming
links: "[[Design Principles]]"
tags:
  - LearningIT
  - bud🌿
---
link: [[Design Principles]]

# Depend on [[Abstraction]]

## Overview

**Depend on Abstraction** is a fundamental software design principle aimed at reducing dependencies on concrete implementations to enhance system flexibility and [[extensibility]].

> [!abstract] 
> This principle encourages programming to an interface or an abstract class rather than to a specific implementation, allowing systems to be more adaptable to change and easier to maintain.

## Content

### Definition and Application

The principle of depending on abstraction helps in setting up flexible relationships between components, facilitating easier maintenance and scalability:

> [!important]
> 
> - **[[Encapsulation]] of Behavior**: Abstracting behavior through interfaces or abstract classes encapsulates usage patterns, making components reusable and interchangeable.
> - **Reduces Coupling**: This approach minimizes direct dependencies on concrete classes, reducing the coupling within the system.

### Implementation Overview

Transforming direct class dependencies into abstracted interactions can significantly simplify code and enhance modularity:

- **Before**: Initially, classes may be tightly coupled with specific implementations.
- **Transition**: Implementing interfaces introduces [[polymorphism]] but may still retain some dependencies.
- **After**: Fully abstracted interactions make core methods independent of concrete classes, often utilizing [[design patterns]] like the Factory Method to manage object creation.
 ![[Pasted image 20231006235616.png]] ![[Pasted image 20231006235636.png]] ![[Pasted image 20231007001305.png]]

This is example of [[Factory Method Pattern]]

## Summary

>[!summary]+ 
>The principle of "Depend on Abstraction" not only streamlines software development by promoting reuse and reducing tight coupling but also prepares the architecture to accommodate new changes with minimal disruption. By focusing on interfaces, systems become inherently more adaptable and easier to extend without significant rework.

# References

https://refactoring.guru/design-patterns
