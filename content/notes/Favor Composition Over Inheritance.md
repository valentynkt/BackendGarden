---
created: 2024-04-19 02:39
aliases:
  - Composition vs Inheritence
  - Coposition over Inheritence
links: "[[Design Principles]]"
tags:
  - LearningIT
  - bud🌿
---
link: [[Design Principles]]

# Favor Composition Over Inheritance

## Overview

"Favor Composition Over Inheritance" is a design principle in object-oriented programming that emphasizes the use of composition to combine behaviors at runtime rather than [[inheritance]] hierarchies, which can be rigid and less modular.

> [!abstract] 
> This principle is pivotal in creating flexible software structures where objects are composed of other objects with specific behaviors, allowing for easy behavior exchange and extension without altering the object's source code.


The principle highlights two fundamental ways of reusing functionality in object-oriented systems:

> [!important]
> 
> - **[[Inheritance]]**: An "is a" relationship that can lead to rigid class structures and complicate future changes.
> - **Composition**: A "has a" relationship that provides greater flexibility by assembling objects to get complex behavior.

> [!example]- Examples and Best Practices
> 
> - **[[Aggregation Relationships]]**: Apply composition techniques to aggregation, where objects have relationships with others but do not manage their entire lifecycle.
> - **Runtime Flexibility**: Composition allows for changing behavior at runtime by substituting components, which is not possible with inheritance.
> - **[[Strategy Pattern]]**: An example of composition in action, where algorithms are encapsulated in separate classes and can be changed within an object dynamically.
> 
> ![[Pasted image 20231008173915.png]] ![[Pasted image 20231008174035.png]]
> 

## Summary

>[!summary]
>"Favor Composition Over Inheritance" promotes designing systems that are easy to modify, extend, and test. It supports a more decoupled architecture that can evolve over time with fewer side effects, embodying the essence of flexible design in software engineering.

# References

https://refactoring.guru/design-patterns

