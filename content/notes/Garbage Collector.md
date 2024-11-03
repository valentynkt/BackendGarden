---
created: 2024-07-25 19:23
aliases:
  - Garbage Collection
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]]

# Garbage Collector

## Overview

The Garbage Collector (GC) is an automatic memory management system provided by .NET's Common Language Runtime (CLR). It helps in reclaiming unused memory by removing objects that are no longer in use, thereby preventing memory leaks and optimizing the performance of an application.

Garbage collection in .NET occurs when specific conditions are met, which are as follows:

> [!important]
> 
> - **Low Physical Memory**: If the system detects low physical memory, garbage collection is triggered to free up resources.
> - **Memory Usage Exceeds Threshold**: When the memory allocated to objects in the heap exceeds a predefined threshold, the garbage collector automatically runs.
> - **Manual Invocation**: If the `GC.Collect()` method is explicitly called, garbage collection will occur. This is typically done only in unusual situations where manual intervention is necessary, as the GC is designed to run automatically and efficiently.

## Phases of Garbage Collection

Garbage collection in .NET consists of three main phases, which work in sequence to efficiently clean up memory.

![[Pasted image 20231015153754.png]]

1. **Marking Phase**:
    
    - In this phase, the GC identifies all the live objects in the heap. It starts with the root objects and traces all references to create a list of objects that are still in use.
    - Any object that is not on the list of live objects is considered garbage and will be eligible for deletion.
2. **Relocating Phase**:
    
    - Once the live objects are identified, the GC updates the references to these objects to prepare for their relocation.
    - This step ensures that all references still point to the correct memory location when the objects are moved in the compacting phase.
3. **Compacting Phase**:
    
    - In the compacting phase, the heap memory is reorganized to eliminate fragmentation. The space occupied by dead objects is released, and the live objects are moved to new locations to make the memory contiguous.
    - This reduces fragmentation and helps improve memory allocation efficiency for future objects.

## Heap Generations in Garbage Collection

The heap memory in .NET is organized into three generations to optimize garbage collection for objects with different lifetimes:

![[HeapGenerationInGarbageCollection.png]]

- **Generation 0**:
    
    - This generation contains short-lived objects, such as temporary variables. All newly allocated objects belong to Generation 0 unless they are large objects.
    - Generation 0 is collected most frequently because short-lived objects are likely to become unreachable quickly.
- **Generation 1**:
    
    - Objects from Generation 0 that survive the initial garbage collection move to Generation 1.
    - Generation 1 acts as a buffer between short-lived (Generation 0) and long-lived objects (Generation 2). These objects are more likely to be used for a longer period compared to Generation 0 objects.
- **Generation 2**:
    
    - Objects from Generation 1 that survive multiple garbage collections move to Generation 2.
    - Generation 2 contains long-lived objects, such as static members and application-level objects, that persist for the duration of the application lifecycle.

> [!info] **Full Garbage Collection**
> 
> - Garbage collection of a generation also collects all younger generations. For example, a collection of Generation 2 implies that Generation 0 and Generation 1 are also collected.
> - This process is called a **Full Garbage Collection**, as it reclaims all objects across the heap.
> - The memory allocated to each generation follows the rule: **Generation 2 > Generation 1 > Generation 0**, which means Generation 2 has more space compared to Generation 1, and similarly for Generation 0.

### Example: Demonstrating Heap Generations

The following C# program demonstrates how to determine the number of heap generations using the `GC.MaxGeneration` property of the `GC` class:

> [!example] **C# Code Example**
>
> ``` csharp
> using System;
> public class Demo {
>     // Main Method
>     public static void Main(string[] args)
>     {
>         Console.WriteLine("The number of generations are: " +
>                                           GC.MaxGeneration);
>     }
> }
> ```
> **Output**: The number of generations are: 2

## Key Benefits of Garbage Collection

> [!success] **Advantages**
> 
> - **Automatic Memory Management**: Reduces the risk of memory leaks and ensures efficient memory allocation and deallocation.
> - **Reduced Fragmentation**: The compacting phase of garbage collection reduces memory fragmentation, which helps in more efficient memory utilization.
> - **Ease of Development**: Developers do not need to manually manage memory, which reduces the chances of errors like dangling pointers or double deallocation.

> [!danger] **Potential Downsides**
> 
> - **Performance Overhead**: Although the GC is efficient, it still introduces some overhead, especially during full garbage collections, which can momentarily pause application execution.
> - **Non-deterministic**: Garbage collection is non-deterministic, meaning developers cannot predict precisely when it will occur, which may lead to unpredictable application pauses.

- **Explicit Control Limitations**: Calling `GC.Collect()` to force garbage collection should generally be avoided, as it can interfere with the GC's optimization routines.

## Summary

Garbage collection in .NET is a fundamental mechanism to automate memory management, prevent memory leaks, and optimize the performance of applications. By organizing memory into different generations and using efficient phases, the garbage collector ensures that memory is reclaimed from objects that are no longer needed, allowing applications to run smoothly without the developer explicitly managing memory allocation and deallocation. Understanding garbage collection, its phases, and how generations work is crucial for writing efficient and resource-friendly C# applications.