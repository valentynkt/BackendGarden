---
created: 2024-07-25 20:45
aliases:
  - Nullable
  - Nullable Data Types
  - Nullable References
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]], [[Data Types CSharp|Data Types]]

# Nullable Types

## Overview

Nullable types in C# allow you to represent a value type that can also be `null`. This is particularly useful when dealing with databases or other data sources where `null` values are common. Nullable types can be used with both value types and reference types, providing a way to handle scenarios where a value might be missing or undefined.

## Value Type Nullable

A value type, such as `int`, `double`, or `bool`, cannot be assigned `null` by default. To make a value type nullable, you use the `?` syntax or the `Nullable<T>` structure.

### Syntax

```csharp
int? nullableInt = null;
Nullable<int> anotherNullableInt = null;
```
### Accessing Nullable Value

To check and use the value, you can use properties like `HasValue` and `Value`:
``` csharp
if (nullableInt.HasValue) {
    int value = nullableInt.Value;
} else {
    Console.WriteLine("nullableInt is null");
}

```

You can also use the null-coalescing operator `??` to provide a default value:
``` csharp
int result = nullableInt ?? 0;
```

## [[Reference Type Nullable]]

![[Reference Type Nullable#Reference Nullable Types]]
## Memory and Performance

### Value Type Nullable

- **Memory**: A nullable value type uses slightly more memory because it needs to store both the value and an additional flag indicating whether the value is present.
- **Performance**: There is a small performance overhead due to the additional checks required to handle the nullable state.

### Reference Type Nullable

- **Memory**: There is no significant memory overhead for nullable reference types since references can naturally be null.
- **Performance**: The primary performance impact comes from the additional compile-time checks, which help avoid null reference exceptions but do not affect runtime performance.
## Example

> [!example]- Nullable Types Example
>``` csharp
>using System;
>
>class Program {
>    static void Main() {
>        // Nullable value type
>        int? nullableInt = null;
>        if (nullableInt.HasValue) {
>            Console.WriteLine($"Value: {nullableInt.Value}");
>        } else {
>            Console.WriteLine("nullableInt is null");
>        }
>        
>        // Nullable reference type
>        #nullable enable
>        string? nullableString = null;
>        if (nullableString != null) {
>            Console.WriteLine($"String length: {nullableString.Length}");
>        } else {
>            Console.WriteLine("nullableString is null");
>        }
>        #nullable disable
>    }
>}
>
>```

## Summary

Nullable types in C# provide a way to handle null values for both value and reference types, enhancing the language's ability to work with incomplete or missing data. By using nullable types, you can write more robust and error-resistant code, though it's important to be aware of the minor memory and performance implications.
