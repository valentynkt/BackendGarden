---
created: 2024-07-25 13:32
aliases:
  - C Sharp
  - C# 
  - C-Sharp
tags:
  - LearningIT
  - seed🌱
  - moc
links:
---

link:

# CSharp (C#)

## Overview

C# (pronounced "C-sharp") is a modern, [[Object Oriented Programming|object-oriented programming]] language developed by Microsoft as part of the [[NET|.NET]] initiative. It is widely used for developing a variety of applications, ranging from [[Web]] and mobile applications to game development and enterprise software. This note serves as a central hub for exploring key concepts, best practices, and advanced topics in C#.

---

## General Information

C# was designed with simplicity, efficiency, and type safety in mind. It combines the power of C++ with the simplicity of Visual Basic. C# is utilized to develop secure and robust applications running on the .NET Framework and is standardized by [[ECMA]] and [[ISO]], with a rich set of libraries that integrate seamlessly into the .NET ecosystem.

### History and Evolution

- **Introduced by Microsoft**: 2000
- **Standardized by ECMA**: 2002
- **Continuous Evolution**: New features and improvements are added with each version, enhancing language capabilities.

### Key Features

- **Strongly Typed Language**: Enforces type safety and reduces runtime errors.
- **Multi-Paradigm Support**: Object-oriented, imperative, declarative, and functional programming.
- **Automatic Memory Management**: With a built-in [[Garbage Collector]].
- **Data Manipulation with LINQ**: Integrated query capabilities.
- **Asynchronous Programming**: Via [[Async and Await Keywords]].
- **Cross-Platform Development**: Through .NET Core and .NET 5+.

---

## Table of Contents

> [!important] **C# Learning Path**

### 1. **Fundamental Concepts**

- **.NET Foundation**
    - [[NET]]: Overview of the .NET framework.
	    - [[ASP.NET]]
	    - [[Blazor]]
	    - [[Entity Framework]]
    - [[Common Language Runtime|Common Language Runtime (CLR)]]
    - [[Common Language Specification|Common Language Specification (CLS)]]
    - [[Common Type System|Common Type System (CTS)]]
    - [[CIL|MSIL]](CIL, IL): Intermediate Language 
    - [[Memory Management CSharp|Memory Management]]: Managing memory in .NET.
    - [[Garbage Collector]]: Automatic memory management.
    - [[NET Compilation]]: Just-In-Time compilation.
- **Basic Language Constructs**
    
    - [[Data Types CSharp|Data Types]]: Understanding value and reference types.
    - **Control Flow**: Mastering conditional statements and loops.
    - **Classes and Object Types**: Core object-oriented concepts.
    - **Methods and Properties**: Encapsulation and behavior definition.
    - [[Static Keyword CSharp|Static Keyword]]: Static members and their usage.
    - [[Abstract Class vs Interface]]: Differences and best use cases.
    - [[Exception Handling CSharp|Exception Handling]]: Handling runtime errors.
    - **[[Arrays And Collections CSharp|Arrays And Collections]]**: Managing groups of data.
    - **Generics**: Type-safe data structures and algorithms.
    - [[Events And Delegates]]: Event-driven programming fundamentals.
    - [[String vs String Builder]]: Optimizing string manipulations.
    - [[Arrays And Collections CSharp|Array And Collections]]
### 2. **Intermediate Topics**

- **Enhancing Language Features**
    
    - [[Extension Methods CSharp|Extension Methods]]: Extending existing types.
    - [[Anonymous Types and Methods CSharp|Anonymous Types and Methods]]: Working with anonymous data structures.
    - **Tuples and Enums**: Advanced data structures.
    - [[Conditional Operators CSharp|Conditional Operators]]: Ternary and null-coalescing operators.
    - [[Nullable Types]], [[Reference Type Nullable]]: Handling null values.
    - [[Indexers CSharp|Indexers]]: Custom data access patterns.
    - [[Attributes CSharp|Attributes]]  and [[Reflection CSharp|Reflection]]: Metadata and runtime type information.
- **Resource Management**
    
    - [[IDisposable Interface]]: Managing resources effectively.
    - [[Using Declarations]]: Simplifying resource management with `using`.
    - [[File Input Output and Streams CSharp|File I/O and Streams]]: Handling file operations.
    - [[Class vs Struct vs Record]]: Choosing the right data structure.
- **Advanced Language Constructs**
    
    - [[Yield Return]]: Simplifying iterators.
    - [[IEnumerator]], [[IEnumerable]]: Implementing enumerators.
    - [[IEnumerable vs ICollection vs IList vs IQueryable]]: Understanding collection interfaces.
    - [[Boxing And Unboxing]]: Managing type conversions and performance.

### 3. **Advanced Topics**

- **Concurrent and Asynchronous Programming**
    
    - [[LINQ]]: Advanced querying techniques.
    - [[Asynchronous and Parallel (PLINQ)]]: Concurrent programming with LINQ.
    - [[Multithreading vs Asynchronous]]: Understanding different concurrency models.
    - [[Multithreading]]: Advanced thread management techniques.
    - [[Asynchronous CSharp|Asynchronous Programming]]:
        - [[Task Parallel Library (TPL)]]
        - [[Async and Await Keywords]]
        - [[Asynchronous Control Flow]]
        - [[Async and Await State Machine]]
- **Memory Optimization**
    
    - **Memory Management and** [[Span T CSharp|Span<T>]]: Efficient memory handling techniques.
- **Expression Trees**: Building and manipulating code expressions.
    
- [[Dynamic Types CSharp|Dynamic Types]]: Using dynamic typing in C#.
    
- **Interoperability**: [[COM and P Invoke]]: Interfacing with unmanaged code.
    
- [[Shallow Copy and Deep Copy]]: Managing object cloning.
- [[Dependency Injection in .NET]]
- [[gRPC in .NET]]
- [[SignalR in .NET]]
- [[Performance Optimization in .NET]]
- [[Feature Flags in .NET]]
- [[Expression Trees CSharp|Expression Trees]]

### 4. **Cutting-Edge Features and Practices**

- **Modern Language Features**
    - **Pattern Matching**: Enhancing control flow with pattern matching.
    - **Nullable Reference Types**: Avoiding null reference exceptions.
    - **C# 9.0 and Beyond**: Exploring the latest language features.
    - **Default Interface Methods**: Enhancing interfaces with default methods.
    - **Source Generators**: Automating repetitive code generation.
    - **Init-Only Setters**: Creating immutable properties.
    - **Target-Typed New Expressions**: Simplifying object creation.
    - **Top-Level Programs**: Writing concise C# programs.
    - **Enhanced Pattern Matching**: Advanced pattern matching techniques.
    - **Global Using Directives**: Simplifying namespace management.
    - **File-Scoped Namespaces**: Reducing namespace indentation.

---

## Summary

C# is a versatile and powerful programming language designed for developing a wide range of applications. This note serves as a comprehensive map of contents for exploring C#, covering essential concepts, best practices, and advanced features. By understanding these key areas, developers can leverage C# to build robust, efficient, and maintainable applications.