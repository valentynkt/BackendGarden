---
created: 2024-04-18 18:13
aliases:
  - Composition Patterns
  - Structure Design Patterns
  - System Structure Patterns
  - Structural
links: "[[Design Patterns]]"
tags:
  - LearningIT
  - evergreen🌳
---
link: [[Design Patterns]]

# Structural patterns

## Overview

Structural design patterns are essential in software engineering for assembling objects and classes into larger, more complex structures while maintaining flexibility and efficiency. These patterns ensure that the architecture of a software system remains robust and adaptable, facilitating the integration and scaling of components.

> [!abstract] 
> Structural patterns simplify the relationships between objects and classes, enabling the creation of complex structures that are easy to manage, understand, and scale.

## Content

### Key Concepts

Structural patterns are crucial for managing the design and interaction of different classes and objects within a system. They help reduce complexity and increase the modularity of the system:

> [!important]
> 
> - [[Adapter Pattern]]: Facilitates cooperation between objects with incompatible interfaces by converting the interface of one class into another interface clients expect. 
>   ![[Pasted image 20240402183346.png]]
> - [[Bridge Pattern]]: Decouples an abstraction from its implementation so that the two can vary independently, simplifying the scalability of both aspects. 
>   ![[Pasted image 20240402183406.png]]
> - [[Composite Pattern]]: Allows you to compose objects into tree-like structures to represent part-whole hierarchies, enabling clients to treat individual objects and compositions uniformly.
>    ![[Pasted image 20240402183419.png]]
> - [[Decorator Pattern]]: Adds new responsibilities to objects dynamically by placing them inside special wrapper objects that contain the behaviors. 
>   ![[Pasted image 20240402183430.png]]
> - [[Facade Pattern]]: Provides a simplified interface to a complex subsystem, reducing the learning curve and increasing the usability of the subsystem. 
>   ![[Pasted image 20240402183442.png]]
> - [[Flyweight Pattern]]: Minimizes memory use by sharing as much data as possible with similar objects; it is a fine choice for systems with a large number of objects that do not vary much in state.
>    ![[Pasted image 20240402183453.png]]
> - [[Proxy Pattern]]: Provides a placeholder for another object to control access to it, useful for managing how an object is accessed or adding other responsibilities dynamically. 
>   ![[Pasted image 20240402183503.png]]

### Implementation Overview

Implementing structural patterns involves an understanding of how components interact within a system and tailoring the structural relationships to leverage these interactions optimally:

- **Enhance Flexibility and Scalability**: Choose appropriate patterns to manage and simplify interactions between complex objects.
- **Reduce Complexity**: Use patterns like [[Facade Pattern|Facade]] to provide simple interfaces to complex systems, thus reducing dependencies and increasing modularity.
- **Optimize Resource Usage**: Apply patterns like [[Flyweight Pattern|Flyweight]] when the system demands efficient management of resources by sharing common states among objects.


## Summary

>[!summary] 
>Structural design patterns are instrumental in building complex yet efficient systems. By enabling better control over how classes and objects are composed and interact, these patterns help developers create software that is both easier to manage and more flexible to extend. Whether it's integrating new functionalities with [[Decorator Pattern|Decorator]] or managing memory effectively with [[Flyweight Pattern|Flyweight]], structural patterns provide the tools necessary for building sophisticated software architectures.

# References

https://refactoring.guru/design-patterns
