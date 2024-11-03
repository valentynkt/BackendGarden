---
created: 2024-07-27 19:49
aliases:
  - Class
  - Class Data Type
tags:
  - LearningIT
  - seed🌱
---

link: [[Data Types CSharp|Data Types]]

# Class

## Overview

The `class` data type in C# is a reference type used to define objects that [[Encapsulation|Encapsulate]] data and behavior. Classes are fundamental building blocks in [[Object Oriented Programming|object-oriented programming]], allowing for the creation of complex data structures and the implementation of various programming concepts like [[Inheritance]], [[Polymorphism]], and [[Encapsulation]].

## Key Concepts

> [!important]
> 
> - **[[Reference Types CSharp|Reference Types]]**: Classes are stored on the heap, and their instances are accessed via references.
> - **[[Encapsulation]]**: Classes encapsulate data (fields) and behavior (methods).
> - **[[Inheritance]]**: Classes can inherit from other classes, allowing for code reuse and the creation of hierarchical relationships.
> - **[[Polymorphism]]**: Classes support polymorphism, enabling objects to be treated as instances of their base or derived types.

### Class Declaration

To declare a class, use the `class` keyword. Classes can include fields, properties, methods, and constructors.

> [!example]- **Class Declaration**
> 
> ```csharp
> public class Person
> {
>     public string Name { get; set; }
>     public int Age { get; set; }
> 
>     public Person(string name, int age)
>     {
>         Name = name;
>         Age = age;
>     }
> 
>     public void DisplayInfo()
>     {
>         Console.WriteLine($"{Name}, {Age} years old");
>     }
> }
> ```

### Creating and Using Classes

Classes are instantiated using the `new` keyword, and their members are accessed via the dot notation.

> [!example]- **Creating and Using Classes**
> 
> ```csharp
> var person = new Person("Neymar Jr", 30);
> person.DisplayInfo(); // Output: Neymar Jr, 30 years old
> ```

## Features of Classes

> [!summary] **Features**
> 
> - **Constructors**: Special methods called when an instance of the class is created.
> - **Destructors**: Methods called when an instance of the class is destroyed (rarely used in C#).
> - **Properties**: Provide a flexible mechanism to read, write, or compute the values of private fields.
> - **Methods**: Define the behavior of the class.
> - **Events**: Allow objects to notify other objects when something of interest occurs.

## Summary

Classes in C# are essential for creating complex data structures and implementing object-oriented programming concepts. By understanding the key features and uses of classes, developers can design robust and maintainable applications.

## Related Topics

> [!summary]
> 
> - **[[Object Oriented Programming|OOP]]**: Classes are a core concept in OOP, supporting encapsulation, inheritance, and polymorphism.
> - **[Inheritance](Inheritance)**: Enables code reuse and the creation of hierarchical relationships between classes.
> - **[Polymorphism](Polymorphism)**: Allows objects to be treated as instances of their base or derived types, enabling flexible and reusable code.
> - **[Encapsulation](Encapsulation)**: Helps in bundling the data with methods that operate on that data, restricting direct access to some of the object's components.
