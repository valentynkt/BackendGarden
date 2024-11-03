---
created: 2024-08-01 13:25
aliases:
  - COM and P/Invoke
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]]

# COM and P/Invoke

## Overview

Interoperability in C# is the ability of managed code (like C#) to interact with unmanaged code (such as native Windows APIs, COM components, or other code written in languages like C or C++). The two primary mechanisms in C# for achieving this are **[[Component Object Model CSharp|COM]] (Component Object Model)** and **[[Platform Invocation Services CSharp|P/Invoke]] (Platform Invocation Services)**.

## [[Component Object Model CSharp|COM]]
![[Component Object Model CSharp#COM (Component Object Model)]]

## [[Platform Invocation Services CSharp|P/Invoke]]
![[Platform Invocation Services CSharp#Platform Invocation Services (P/Invoke)]]

## Summary

**COM** and **P/Invoke** are powerful tools for interoperability in C#, allowing managed code to interact with unmanaged components, whether they are legacy COM objects or system-level APIs. While both approaches have their complexities, they are essential for scenarios where leveraging existing unmanaged code is necessary.

For more on memory management and best practices when working with unmanaged code, refer to the [[Memory Management CSharp|Memory Management]] note.