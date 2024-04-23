---
created: 19-04-2024 19:24
aliases:
  - OOP
  - Four Pillars
links: 
tags:
  - seed🌱
  - LearningIT
---
link:

# OOP

## Overview

![[pbyXtPuoCc.png]]
**Object-oriented programming is a paradigm based on the concept of wrapping pieces of data, and behavior related to that data, into special bundles called objects, which are constructed from a set of “blueprints”, defined by a programmer, called classes.**

> [!abstract]
>  Data stored inside the object’s fields is often referenced as state, and all the object’s methods define its behavior.

![[sIVH6rlgEg.png]]

## Content

### Key Concepts

OOP hinges on the use of classes and objects to create flexible and reusable software components:

> [!important]
> 
> - **Classes**: Blueprints defining the structure and capabilities of objects.
> - **Objects**: Instances created from classes that embody both state and behavior.

### Class Hierarchies

Class hierarchies provide a way to organize related classes through parent-child relationships, allowing shared characteristics:

> [!example]
> 
> - **Base Class (Animal)**: Defines common attributes for all animals.
> - **Derived Classes (Dog, Cat)**: Inherit common traits and add specific ones.
> ![[kWbNoV1hEd.png]]
> 
> - **General Class (Organism)**: A superclass for both **Animal** and **Plant** classes, extending the hierarchy.
> 
> ![[loGtbJvoY9.png]]
> 
> - Subclasses can override the behavior of methods that they inherit from parent classes. A subclass can either completely replace the default behavior or just enhance it with some extra stuff.

### Pillars of OOP

> [!important] **[[Abstraction]]**
> Simplifies complexity by hiding the unnecessary details from the user and emphasizing the essential attributes of an object. It allows developers to focus on what an object does instead of how it does it, facilitating interaction without bearing the complexity of internal implementations.
> >[!example] 
> >
> > In a vehicle control system, an abstraction might represent the interface with basic controls like steer(), accelerate(), and brake(), without exposing the detailed mechanics of how each function is implemented within different types of vehicles.

> [!important] **[[Encapsulation]]** 
> Involves bundling the data (attributes) and methods (functions) that operate on the data into a single unit or class, and restricting access to some of the object’s components. This means that the object's internal state cannot be accessed directly; it is only modifiable through its methods, thus guarding against unauthorized access and misuse.
>> [!example] 
>> 
>>  In a banking system, a class Account might include private attributes like balance and public methods like deposit() and withdraw(). These methods ensure that the balance is never directly changed; instead, all modifications go through checks and validations first.

> [!important] **[[Polymorphism]]** 
> Allows objects to be treated as instances of their parent class rather than their actual class. This enables multiple forms of behaviors to be handled through a unified interface, where the specific behavior is determined at runtime.
>> [!example] 
>> 
>>  Consider a graphics system with a class Shape and derived classes Circle, Rectangle, and Triangle. Each class has a method draw() that behaves differently. Through polymorphism, you can call draw() on a list of shapes, and each shape will be drawn according to its specific implementation, even though the calling code only sees them as generic shapes.

> [!important] **[[Inheritance]]** 
> Allows a new class to inherit properties and methods from an existing class. The new class (known as a derived class or subclass) can add additional properties and methods or override existing ones. Inheritance promotes code reusability and establishes a natural hierarchy between classes.
>> [!example]
>> 
>>  In an educational software system, a base class Person might include attributes and methods common to all people in the system, such as name and email. Derived classes like Student and Teacher can inherit these features from Person but also include specific attributes like studentID and salary, respectively.

## Summary

>[!summary]
> **OOP is a programming approach based on the concepts of classes and objects. It uses class hierarchies to organize and reuse code, with the four pillars—abstraction, encapsulation, polymorphism, and inheritance—providing a proper foundation for flexible and maintainable software design.**

# References

https://blog.sigma-star.io/2024/01/people-dont-understand-oop/#comments - Highly recommend for reading and understanding OOP more deeply
https://www.youtube.com/watch?v=dtZ-o96bH9A - Barbara Liskov About abstraction
https://refactoring.guru/design-patterns

