---
created: 2024-07-25 19:27
aliases:
  - Pointer Types
tags:
  - LearningIT
  - seed🌱
---

link: [[Data Types CSharp|Data Types]]

# Pointer Types CSharp

## Overview

A C# pointer is a variable that holds the memory address of another type. Pointers can only be declared to hold the memory address of [[Value Types CSharp|Value Types]] and arrays. Unlike reference types, pointer types are not tracked by the default [[Garbage Collector|Garbage Collection]] mechanism.

## Declaring a Pointer Type

The general form of declaring a pointer type is:

> [!example]- Pointer Declaration
> ```csharp
> type* variable_name;
> ```

For example:

> [!example]- Example
> ```csharp
> int* x;
> ```

This declares a pointer variable `x`, which can hold the address of an int type. The reference operator `&` can be used to get the memory address of a variable.

> [!example]- Example
> ```csharp
> int x = 100;
> int* ptr = &x;
> Console.WriteLine((int)ptr); // Displays the memory address
> Console.WriteLine(*ptr); // Displays the value at the memory address.
> ```

## Unsafe Code

Pointers are used within `unsafe` code blocks, which require special handling and permissions. For more information, refer to the dedicated note on [[Managed-Unmanaged Code#Unsafe Code|Unsafe Code]].

## Summary

Pointers in C# are variables that hold the memory address of value types and arrays. They are declared using the `type* variable_name` syntax and require the use of the `unsafe` keyword. Pointers are not managed by the garbage collector and should be used with caution.
