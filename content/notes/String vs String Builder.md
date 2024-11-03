---
created: 2024-07-25 20:40
aliases:
  - String Builder
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]], [[Data Types CSharp|Data Types]]

# String vs StringBuilder

While manipulating strings, we often use the `string` instance due to its simplicity. However, using `string` can be inefficient in terms of performance when performing frequent modifications. This note compares `string` with `StringBuilder`, highlighting the key differences and use cases.

## String

A `string` instance in C# is **immutable**, meaning that any modification creates a new string object. Each modification allocates a new block of memory and changes the reference to this new block, leaving the old memory for [[Garbage Collector|Garbage Collection]].

### Example and Memory Allocation

```csharp
string name = "TEST";
 ```
 
 Here, the string variable `name` holds a reference to a memory block with the value `"TEST"`:

![[SStringVsStringBuilder3.jpg]]

When modifying the string:
``` csharp
name += "1";
```

A new memory block is allocated for the modified string, and the reference is updated:

![[StringVsStringBuilder2.jpg]]

### Performance Considerations

- **Memory Allocation**: Each modification creates a new string object, resulting in frequent memory allocations.
- **Garbage Collection**: Old memory blocks are left for garbage collection, which can lead to performance overhead.
## StringBuilder

`StringBuilder` is a class from the `System.Text` namespace designed to handle frequent modifications efficiently by modifying the existing memory blocks rather than creating new ones.

### Creating a StringBuilder

``` csharp
StringBuilder name = new StringBuilder("TEST");
```

This allocates memory blocks for the string:

![[StringVsStringBuilder1.jpg]]

### Modifying with StringBuilder

To append a new string, use the `Append` method:
``` csharp
name.Append("1");
```

![[StringVsStringBuilder4.jpg]]

With `StringBuilder`, the existing memory blocks are extended to accommodate the new string, avoiding the creation of a new instance.

### Key Features

- **Efficient Memory Usage**: Modifies existing memory blocks, reducing the need for frequent allocations.
- **Performance**: Suitable for scenarios involving extensive string manipulation.

## Comparison

| Feature           | `string`                        | `StringBuilder`              |
| ----------------- | ------------------------------- | ---------------------------- |
| Mutability        | Immutable                       | Mutable                      |
| Memory Allocation | New block for each modification | Modifies existing blocks     |
| Performance       | Slower with frequent changes    | Faster with frequent changes |
| Use Case          | Few modifications               | Extensive modifications      |
|                   |                                 |                              |

## Summary

Using `string` is straightforward but can lead to performance issues due to frequent memory allocations and [[Garbage Collector|Garbage Collection]]. `StringBuilder` provides a more efficient way to handle extensive string manipulations by modifying existing memory blocks. 