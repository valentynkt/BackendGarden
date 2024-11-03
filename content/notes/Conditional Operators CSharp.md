---
created: 2024-07-25 21:04
aliases:
  - Conditional Operators
  - Ternary Operator
  - Null-Coalescing Operator
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]]

# Conditional Operators

## Overview

Conditional operators in C# provide a concise way to perform operations based on conditions. The two primary conditional operators are the ternary operator (`? :`) and the null-coalescing operator (`??`). These operators allow for more readable and maintainable code by reducing the need for lengthy if-else statements.

## Ternary Operator

The ternary operator is a shorthand for the if-else statement. It takes three operands: a condition, a result for true, and a result for false.

### Syntax

```csharp
condition ? trueResult : falseResult;
```

### Example

> [!example]
>``` csharp
>int a = 10;
>int b = 20;
>int max = (a > b) ? a : b;
>Console.WriteLine(max); // Output: 20
>
>```

## Null-Coalescing Operator

The null-coalescing operator (`??`) is used to define a default value for [[Nullable Types]] or reference types. It returns the left-hand operand if it is not null; otherwise, it returns the right-hand operand.

### Syntax

``` csharp
nullableValue ?? defaultValue;
```

### Example

> [!example]
>``` csharp
>string name = null;
>string displayName = name ?? "Default Name";
>Console.WriteLine(displayName); // Output: Default Name
>
>```

## Summary

Conditional operators in C# provide a powerful and concise way to perform conditional logic. The ternary operator allows for shorthand if-else statements, while the null-coalescing operator provides a way to handle null values with default alternatives. Combining these operators can lead to more readable and maintainable code.