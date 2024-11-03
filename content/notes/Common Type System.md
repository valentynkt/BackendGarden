---
created: 2024-09-03 19:19
aliases:
  - Common Type System (CTS)
  - CTS
tags:
  - LearningIT
  - seed🌱
---

link: [[Common Language Runtime|CLR]]

# Common Type System (CTS)

## Overview

The **Common Type System (CTS)** is a key component of the .NET framework that defines how types are declared, used, and managed in the runtime. The CTS provides a common framework that supports the cross-language integration, ensuring that data types used in one language can be recognized and used in another.

## Key Concepts

### Unified Type System

> [!info] 
> CTS defines a unified type system that all languages targeting .NET must conform to. This ensures that types used across different languages are interoperable.

### Types in CTS

The CTS supports two main categories of types:

- **[[Value Types CSharp|Value Types]]**: These are types that hold their data directly and are allocated on the stack. Examples include `int`, `char`, and `struct`.
- **[[Reference Types CSharp|Reference Types]]**: These types store a reference to their data, which is allocated on the heap. Examples include `class`, `interface`, `array`, and `delegate`.

### Language Interoperability

> [!info] 
> CTS ensures that types declared in one language can be used in another, promoting language interoperability within the .NET framework. For example, a `class` defined in C# can be used in a VB.NET project, and vice versa.

### Type Safety and [[Memory Management CSharp|Memory Management]]

The CTS enforces type safety, ensuring that code adheres to strict type rules, which helps prevent errors like invalid type casts. It also works closely with the **[[Garbage Collector]]** to manage memory efficiently by ensuring that reference types are properly tracked and cleaned up when no longer needed.

## Summary

The Common Type System (CTS) is fundamental to the .NET framework's support for language interoperability and type safety. By defining a consistent set of rules for all types, the CTS enables seamless integration of code written in multiple languages, ensuring that they work together within the same runtime environment.
