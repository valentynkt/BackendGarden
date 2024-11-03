---
created: 2024-07-27 19:44
aliases:
  - Record
  - Records
tags:
  - LearningIT
  - seed🌱
---

link: [[Data Types CSharp|Data Types]]

# Record Data Type

## Overview

The `record` data type in C# is designed to provide a concise way to define immutable reference types with value-based equality. Introduced in C# 9.0, records are ideal for modeling data that is primarily used for reading and passing data around, rather than being modified.

## Key Concepts

> [!important]
> 
> - **Immutable [[Reference Types CSharp|Reference Type]]**: Records are reference types that are typically immutable.
> - **Value-Based Equality**: Records implement value-based equality, meaning two record instances are considered equal if their properties have the same values.
> - **Concise Syntax**: Records provide a concise syntax for defining data objects.

### Record Declaration

To declare a record, use the `record` keyword. You can define properties directly in the record declaration.

> [!example]- **Record Declaration**
> 
> ```csharp
> public record Person(string Name, int Age);
> ```

### Creating and Using Records

Records can be instantiated and used similarly to classes, but they provide additional features like value-based equality and immutability.

> [!example]- **Creating and Using Records**
> 
> ```csharp
> var person1 = new Person("Neymar Jr", 30);
> var person2 = new Person("Neymar Jr", 30);
> 
> Console.WriteLine(person1 == person2); // True
> Console.WriteLine(person1.Equals(person2)); // True
> 
> var person3 = person1 with { Age = 29 };
> Console.WriteLine(person3); // Person { Name = Neymar Jr, Age = 29 }
> ```

In the example above, `person1` and `person2` are considered equal because they have the same values for their properties. The `with` expression creates a new record with modified values.

## Types of Records

C# provides several variations of records to cater to different needs:

> [!summary] **Types of Records**
> 
> - **Record**
> - **Readonly Record**
> - **Record Struct**

### Record

A basic record is a reference type that provides value-based equality and immutability.

> [!example]- **Basic Record**
> 
> ```csharp
> public record Person(string Name, int Age);
> ```

### Readonly Record

Readonly records are designed to be immutable, ensuring that their state cannot be modified after creation. This promotes thread safety and other benefits.

> [!example]- **Readonly Record**
> 
> ```csharp
> public record Person
> {
>     public string Name { get; init; }
>     public int Age { get; init; }
> 
>     public Person(string name, int age)
>     {
>         Name = name;
>         Age = age;
>     }
> }
> ```

### Record Struct

Record structs, introduced in C# 10, provide a way to define value types with additional benefits like value-based equality and concise syntax for defining data structures.

> [!example]- **Record Struct**
> 
> ```csharp
> public record struct Point(int X, int Y);
> ```

Record structs automatically implement `IEquatable<T>` and provide implementations for `Equals`, `ToString()`, and `GetHashCode`.

## Use Cases

> [!important] **When to Use Records**
> 
> - When you need immutable data structures.
> - When you need value-based equality.
> - When you need to model data objects concisely.
> - When you want to ensure thread safety with immutable data.

## Comparison with Classes

Records and classes both represent reference types, but records are designed to provide better support for immutability and value-based equality.

> [!info]- **Comparison with Classes**
> 
> - **Immutability**: Records are typically immutable, whereas classes are mutable by default.
> - **Equality**: Records use value-based equality, while classes use reference-based equality.
> - **Syntax**: Records offer a more concise syntax for defining data objects.
