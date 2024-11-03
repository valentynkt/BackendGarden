---
created: 2024-07-27 18:37
aliases: 
tags:
  - LearningIT
  - seed🌱
---

link:[[Data Types CSharp|Data Types]]

# Struct Data Type

## Overview

The `struct` data type in C# is a value type that is used to encapsulate small groups of related variables. Unlike classes, structs are stored on the [[Memory Management CSharp#Stack|Stack]], which can lead to performance benefits for small, frequently used data structures.

## Key Concepts

> [!important]
> 
> - **[[Value Types CSharp|Value Types]]**: Structs are value types and are stored on the stack.
> - **Encapsulation**: Used to encapsulate small groups of related variables.
> - **Immutability**: Can be made immutable by using the `readonly` keyword.

### Struct Declaration

To declare a struct, use the `struct` keyword. You can include properties, methods, and constructors within the struct.

> [!example]- **Struct Declaration**
> 
> ```csharp
> struct Person
> {
>     public string Name { get; set; }
>     public int Age { get; set; }
> }
> ```

### Creating and Using Structs

Structs can be instantiated and used similarly to classes, but they exhibit value type semantics.

> [!example]- **Creating and Using Structs**
> 
> ```csharp
> Person person = new Person();
> person.Age = 30;
> person.Name = "Neymar Jr";
> Console.WriteLine(person.Name + " " + person.Age); // Neymar Jr 30
> 
> var person1 = person;
> person1.Age = 29;
> Console.WriteLine(person.Name + " " + person.Age); // Neymar Jr 30
> Console.WriteLine(person1.Name + " " + person1.Age); // Neymar Jr 29
> ```

In the example above, `person1` is a copy of `person`, and modifying `person1` does not affect `person` because structs are value types.

## Types of Structs

C# provides several variations of structs to cater to different needs:

> [!summary] **Types of Structs**
> 
> - **Struct**
> - **Readonly Struct**
> - **Ref Struct**
> - **Record Struct**

### Struct

A basic struct is a value type that should ideally represent a single value. Examples include `DateTime`, `int`, `double`, and custom structs like `Point2D`.

> [!example]- **Basic Struct**
> 
> ```csharp
> public struct Color 
> { 
>     public byte Red; 
>     public byte Green; 
>     public byte Blue;
> 
>     public Color(byte red, byte green, byte blue) 
>     { 
>         Red = red; 
>         Green = green; 
>         Blue = blue; 
>     }
> 
>     public void ShiftToGrayscale() 
>     {
>         var avg = (byte)((Red + Green + Blue) / 3);
>         Red = Green = Blue = avg; 
>     }
> }
> ```

### Readonly Struct

Readonly structs are designed to be immutable, ensuring that their state cannot be modified after creation. This promotes thread safety and other benefits.

> [!example]- **Readonly Struct**
> 
> ```csharp
> public readonly struct Color 
> { 
>     public readonly byte Red;
>     public readonly byte Green; 
>     public readonly byte Blue; 
> 
>     public Color(byte red, byte green, byte blue) 
>     {
>         Red = red; 
>         Green = green; 
>         Blue = blue;
>     } 
> 
>     public Color ShiftToGrayscale() 
>     { 
>         var avg = (byte)((Red + Green + Blue) / 3); 
>         return new Color(avg, avg, avg); 
>     } 
> }
> ```

### Ref Struct

Ref structs are guaranteed to live on the stack and cannot escape to the heap. They are used in high-performance scenarios where allocations on the heap should be avoided.

> [!important] **Ref Struct Constraints**
> 
> - A `ref struct` can't be the element type of an array.
> - A `ref struct` can't be a declared type of a field of a class or a non-ref struct.
> - A `ref struct` variable can't be captured by a lambda expression or a local function.
> - A `ref struct` variable can't be used in an `async` method.
> - A `ref struct` variable can't be used in iterators.
> - A `ref struct` can't implement interfaces, except for `IDisposable`.

### Record Struct

Record structs, introduced in C# 10, provide a way to define value types with additional benefits like value-based equality and concise syntax for defining data structures.

> [!example]- **Record Struct**
> 
> ```csharp
> public record struct Color(byte Red, byte Green, byte Blue) 
> { 
>     public Color ShiftToGrayscale() 
>     {
>         var avg = (byte)((Red + Green + Blue) / 3); 
>         return new Color(avg, avg, avg); 
>     } 
> }
> ```

Record structs automatically implement `IEquatable<T>` and provide implementations for `Equals`, `ToString()`, and `GetHashCode`.

## Use Cases

> [!important] **When to Use Structs**
> 
> - When the scope of the object is small.
> - When the data group is small and simple.
> - When better performance is needed for the system.

## Summary

Structs in C# are a powerful tool for creating value types that are efficient and easy to use. They are best used for small, simple data structures that need to be passed around by value. By understanding the different types of structs and their use cases, developers can write more efficient and effective C# code.

# References

[Steven Giesel](https://steven-giesel.com/blogPost/2a52cd8d-b3b2-42e4-87e8-d6dc14147ddb)