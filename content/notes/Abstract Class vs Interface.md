---
created: 2024-07-25 18:40
aliases: 
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]]

# Abstract Class vs Interface

## Overview

Abstract classes and interfaces are both used to define contracts in C#, but they have distinct characteristics and use cases. Understanding the differences between them is crucial for designing robust and maintainable code.

## Abstract Class

An abstract class is a way to achieve abstraction in C#. It can contain both abstract methods (without implementation) and regular methods (with implementation).

> [!example]- Abstract Class Example
> ```csharp
> public abstract class Animal {
>     public abstract void MakeSound();
>     public void Sleep() {
>         Console.WriteLine("Sleeping...");
>     }
> }
> 
> public class Dog : Animal {
>     public override void MakeSound() {
>         Console.WriteLine("Bark");
>     }
> }
> 
> public class MainClass {
>     public static void Main() {
>         Animal myDog = new Dog();
>         myDog.MakeSound();
>         myDog.Sleep();
>     }
> }
> ```
> **Output:**
> ```
> Bark
> Sleeping...
> ```

## Interface

An interface contains only the declaration of methods, properties, events, or indexers. The implementation is provided by the class that implements the interface.

> [!example]- Interface Example
> ```csharp
> interface IAnimal {
>     void MakeSound();
>     void Sleep();
> }
> 
> public class Dog : IAnimal {
>     public void MakeSound() {
>         Console.WriteLine("Bark");
>     }
>     public void Sleep() {
>         Console.WriteLine("Sleeping...");
>     }
> }
> 
> public class MainClass {
>     public static void Main() {
>         IAnimal myDog = new Dog();
>         myDog.MakeSound();
>         myDog.Sleep();
>     }
> }
> ```
> **Output:**
> ```
> Bark
> Sleeping...
> ```

## Difference Between Abstract Class and Interface

| Feature                    | Abstract Class                                | Interface                                         |
| -------------------------- | --------------------------------------------- | ------------------------------------------------- |
| Declaration and Definition | Contains both declaration and definition      | Contains only declaration (pre-C# 8.0)            |
| Multiple Inheritance       | Not supported                                 | Supported                                         |
| Constructors               | Can contain constructors                      | Cannot contain constructors                       |
| Static Members             | Can contain static members                    | Cannot contain static members                     |
| Access Modifiers           | Supports various access modifiers             | All members are public by default                 |
| Performance                | Generally faster                              | Generally slower due to indirection               |
| **Usage**                  | **Core identity of a class**                  | **Peripheral abilities of a class**               |
| Implementation             | Can be partially implemented                  | Must be fully implemented                         |
| Syntax                     | `abstract` keyword                            | `interface` keyword                               |
| Members                    | Can contain fields, methods, properties, etc. | Can contain methods, properties, indexers, events |
| Default Implementation     | Can provide default implementation            | Default implementation from C# 8.0                |
| Extending                  | `extends` keyword for inheritance             | `implements` keyword for implementation           |

## Summary

Abstract classes and interfaces in C# provide ways to achieve abstraction but serve different purposes. Abstract classes are ideal for defining common behavior with a shared base, while interfaces define contracts that implementing classes must follow. Choosing between them depends on the specific requirements of your application and [[Design Principles]].
