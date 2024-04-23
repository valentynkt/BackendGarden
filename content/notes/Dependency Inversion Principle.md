---
created: 19-04-2024 18:01
aliases:
  - DIP
  - DIP in OOP
links: "[[SOLID Principles]]"
tags:
  - seed🌱
  - LearningIT
---
link: [[SOLID Principles|SOLID]]

# Dependency Inversion Principle

## Overview

![[Pasted image 20240419180149.png]]

> [!important] High-level modules should not be dependent on low-level modules; both should rely on abstractions. Additionally, these abstractions should not be based on details; rather, the details should be based on abstractions.

The Dependency Inversion Principle (DIP) is crucial for building software that's modular and simple to maintain. It guides the development of a system where different parts are not tightly connected but can work together through abstract interfaces. This means that the main logic of the program doesn't depend on the nitty-gritty details of how things are done at a lower level.

## Content

### Principle Explained

The principle distinguishes between two types of classes:

- **High-Level Modules**: Contain complex business logic that directs low-level classes to do something.
- **Low-Level Modules**: Implement basic operations such as working with a disk, transferring data over a network, connecting to a database, etc. 

To ensure compliance with DIP follow this rules:
1. High-level modules should not depend on low-level modules. Both should depend on abstractions.
2. Abstractions should not depend on details. Details should depend on abstractions.

### Practical Example

> [!danger]+ BEFORE 
> Initially, a high-level module is directly dependent on a low-level module, leading to a rigid and fragile structure that is challenging to test and maintain. ![[Pasted image 20231008195638.png]]

> [!success]+ AFTER 
> By inverting the dependency, both high-level and low-level modules rely on shared abstractions. This results in a more flexible and maintainable system where changes to low-level details have minimal impact on high-level modules. ![[Pasted image 20231008195732.png]]

This approach not only enhances code reusability and maintainability but also simplifies unit testing by allowing for easy mocking or stubbing of the lower-level components.


## ### Summary

> [!summary] 
> Following the Dependency Inversion Principle brings flexibility and easier maintenance to software systems. It encourages a setup where the core business logic is neatly separated from the technical details of how things are done. This separation is crucial for a well-designed application.

