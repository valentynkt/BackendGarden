---
created: 2024-07-25 19:24
aliases:
  - Heap and Stack
  - Stack and Heap
  - Stack vs Heap
  - Memory Management
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]]

# Memory Management

Memory management in C# is a critical aspect of application performance and stability. Understanding how memory is allocated and managed by the [[NET|.NET]] runtime, particularly the distinction between the stack and heap, and the role of the [[Garbage Collector]], is essential for writing efficient and reliable code.

## **Stack and Heap**

In C#, memory is primarily managed in two areas: the stack and the heap. The **Common Language Runtime (CLR)**, part of the .NET framework, is responsible for allocating memory for objects in these regions.

**Visual Representation**:

![Stack vs Heap](https://miro.medium.com/max/813/1*2JIMuh2U8DLlEx13vs52mg.jpeg)
### Stack

The stack is a simple, structured, last-in-first-out (LIFO) memory area. It is used for static memory allocation, where the memory required is known at compile time. Variables and method calls are allocated on the stack, which makes access to this memory very fast. Each time a method is invoked, the CLR allocates a block of memory on the stack for the method's local variables. When the method completes, this block of memory is released in one operation.

**Key Characteristics:**

- **Speed**: Memory allocation and deallocation on the stack is very fast.
- **Structure**: LIFO structure, which means the most recently allocated memory is the first to be freed.
- **Scope**: Variables stored on the stack are local to the method and are automatically cleaned up when the method exits.
- **Size Limit**: The stack has a smaller, fixed size compared to the heap.

**Common Uses:**

- **[[Value Types CSharp|Value Types]]**: Most value types (e.g., `int`, `bool`, `struct`) are stored on the stack.
- **Method Calls**: Parameters, return addresses, and local variables are stored on the stack.

### Heap

The heap is a more complex memory area used for dynamic memory allocation, where the memory required is determined at runtime. Objects and [[Reference Types CSharp|Reference Types]] are allocated on the heap. Unlike the stack, the heap does not automatically deallocate memory when a method completes; instead, the [[Garbage Collector]] (GC) is responsible for managing heap memory.

**Key Characteristics:**

- **Flexibility**: Memory allocation on the heap is more flexible and can handle objects of varying sizes.
- **Size**: The heap is larger than the stack and can grow as needed, limited only by the system’s virtual memory.
- **[[Garbage Collector|Garbage Collection]]**: Memory on the heap is managed by the Garbage Collector, which automatically frees up memory that is no longer in use.

**Common Uses:**

- **[[Reference Types CSharp|Reference Types]]**: All reference types (e.g., `class`, `array`, `string`) are stored on the heap.
- **Large Objects**: Objects larger than a certain size (typically 85,000 bytes) are allocated on the Large Object Heap (LOH).

### Value vs Reference Types

- **[[Value Types CSharp|Value Types]]**: Stored directly on the stack or inline within another object in the heap. Examples include `int`, `float`, and `struct`.
- **[[Reference Types CSharp|Reference Types]]**: Stored on the heap, with a reference or pointer stored on the stack. Examples include `class`, `array`, and `string`.

For more detailed information on how memory is managed between these types, refer to the [[Data Types CSharp|Data Types]] note.

---

## **Large Object Heap (LOH)**

The Large Object Heap (LOH) is a special area of the heap dedicated to storing large objects. In .NET, any object greater than 85,000 bytes is placed on the LOH. This includes large arrays and some types of collections.

### LOH Allocation

When the CLR allocates memory for a large object, it places it on the LOH to avoid fragmentation in the main heap. The LOH is intended for objects that are too large to efficiently manage in the standard heap.

**Key Points:**

- **Threshold**: Objects larger than 85,000 bytes are allocated on the LOH.
- **Array Exception**: Arrays of `double` are an exception and are placed on the LOH when they exceed 1000 elements (on 32-bit architectures).

### LOH Deallocation

The LOH is collected during a Generation 2 garbage collection (GC). This can be triggered when memory usage exceeds certain thresholds for either the LOH or Generation 2 objects. The GC also tracks free memory blocks within the LOH to efficiently allocate new objects.

**GC Optimization**: The GC merges adjacent free memory blocks in the LOH to prevent fragmentation and improve memory allocation efficiency.

![[Pasted image 20231102011400.png]]


**Further Reading**: For a deeper dive into how the GC manages the LOH, refer to the [[Garbage Collector]] note.

---

## **Best Practices for Memory Management**

1. **Minimize Heap Allocations**: Wherever possible, use stack-allocated [[Value Types CSharp|Value Types]] instead of heap-allocated [[Reference Types CSharp|Reference Types]] to reduce GC pressure.
2. **Avoid LOH Overuse**: Large objects can cause LOH fragmentation, leading to inefficient memory usage. Try to keep objects smaller than 85,000 bytes when possible.
3. **Use [[Span T CSharp|Span<T>]]**: For performance-critical code, consider using `Span<T>` to work with slices of memory without heap allocations. See the [[Span T CSharp|Span<T>]] note for more details.
4. **Understand the GC**: Familiarize yourself with how the [[Garbage Collector]] works, including generation-based collection, to write more efficient code.

---

## **Summary**

Memory management in C# is a critical aspect of performance optimization. By understanding how the stack and heap work, the role of the Large Object Heap, and the importance of minimizing unnecessary allocations, you can write more efficient, high-performance code. The `Span<T>` type and careful use of value vs reference types can further optimize memory usage in your applications.

# References

[What about Large Object Heap (LOH)? - CodeJourney.net](https://www.codejourney.net/net-internals-08-what-about-large-object-heap-loh/)