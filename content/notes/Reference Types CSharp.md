---
created: 2024-07-25 19:14
aliases:
  - Reference Types
  - Reference Type
tags:
  - LearningIT
  - seed🌱
---

link: [[Data Types CSharp|Data Types]]

# Reference Types

## Overview

Reference types variables contain a reference to their data, rather than containing the data directly. This allows for the creation of more complex data structures. C# provides several built-in reference types and allows the creation of custom reference types.

## Built-in Reference Types

- **string**: Represents a sequence of characters.
- **[[Dynamic Types CSharp|Dynamic Types]]**: Allows for operations that will be resolved at runtime.
- **Object**: The base class for all data types in C#. See [[Boxing And Unboxing]] for more information.

## Custom Reference Types

- **[[Events And Delegates]]**: Represents a reference to a method with a specific parameter list and return type.
- **class**: Defines a reference type that can contain data and behavior.
- **interface**: Defines a contract that can be implemented by classes and structs.

## Reference Type Equality

When comparing reference-type variables using the `==` operator or the `Equals()` method, the reference (i.e., the memory address) is compared.

> [!important]- Overriding Equality
> To override this behavior for custom types:
> - Overload the `==` operator
> - Override the `Equals()` method
> - Override the `GetHashCode()` method

## Reference Type Default Value

> [!info]- Default Value
> The default value of a reference type variable is `null`.

> [!example]- Example
> ```csharp
> // Declaring a reference type variable without initialization
> string exampleString;
> Console.WriteLine(exampleString == null); // Output: True
> 
> // Initializing the reference type variable
> exampleString = "Hello, World!";
> Console.WriteLine(exampleString); // Output: Hello, World!
> ```

## Reference Types in Memory Management

> [!info]- Memory Management
> Reference types are managed by the garbage collector in .NET. For detailed information, refer to:
> - [[Garbage Collector]]
> - [[Memory Management CSharp|Memory Management]]

## Summary

Reference types in C# include built-in types like `string`, `dynamic`, and `Object`, as well as custom types created with `delegate`, `class`, and `interface`. Understanding how reference type variables are compared and the implications of their default `null` value is crucial for effective C# programming.
