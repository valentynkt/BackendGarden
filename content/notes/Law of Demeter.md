---
created: 2024-05-01 21:06
aliases:
  - LoD
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Design Principles]]

# Law of Demeter

The Law of Demeter, often referred to as the principle of least knowledge, is a design guideline for developing software, particularly in terms of object-oriented programming. It promotes loose coupling and high cohesion by restricting objects to interacting only with directly connected objects.

> [!important] Key Principles
> 
> - **Minimal Knowledge**: Objects should only communicate with immediate neighbors, avoiding calls to complex dependencies.
> - **Reduce Coupling**: Limits how much one component knows about another, thereby reducing dependencies.
> - **Simplification**: Simplifies maintenance and adaptability by localizing changes to individual components.

> [!warning] 
> Caution Strict adherence to the Law of Demeter can lead to an excessive number of wrapper classes, which might increase complexity and reduce performance.

By following the Law of Demeter, developers can create systems that are more modular, easier to understand, and maintain, thereby enhancing overall software quality.

