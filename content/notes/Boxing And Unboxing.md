---
created: 2024-08-11 18:51
aliases: 
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]]

# Boxing And Unboxing

Boxing and Unboxing are fundamental concepts in C# that relate to the conversion between [[Value Types CSharp|Value Types]] and [[Reference Types CSharp|Reference Types]]. These processes are integral to the Common Type System ([[Common Type System]]) and enable a unified view of all types within the .NET framework.

## Overview

- **Boxing**: Converts a value type (e.g., `int`, `char`) to a reference type (`object`). This process is implicit.
- **Unboxing**: Converts a reference type (`object`) back to a value type. This process requires explicit casting.

## Boxing

![[Boxing.jpg]]

> [!info] **Key Points**
> 
> - **Implicit Conversion**: Boxing occurs automatically when a value type is assigned to a reference type variable.
> - **Memory Allocation**: The value type is copied from the stack to the heap when it is boxed.

**Example:**

``` csharp
int num = 23;  // Value type stored in the stack
object obj = num;  // Boxing: num is copied to the heap as an object
```

> [!info] **Description**:
> 
> In the example, the value `23` is first assigned to the value type variable `num`. When `num` is assigned to the reference type variable `obj`, boxing occurs, and the value is copied to the heap.

> [!example]- **Boxing Example in C#**
>``` csharp
>using System;
>class Program
>{
>    static void Main()
>    {
>        int num = 2020;
>        object obj = num;  // Boxing
>        num = 100;
>
>        Console.WriteLine("Value type value of num: {0}", num);
>        Console.WriteLine("Object type value of obj: {0}", obj);
>    }
>}
>
>```
> _output:_
>``` text
>Value type value of num: 100
>Object type value of obj: 2020
>
>```


## Unboxing

![[Unboxing.jpg]]

> [!info] **Key Points**
> 
> - **Explicit Conversion**: Unboxing requires explicit casting to convert an object back to its original value type.
> - **Memory Allocation**: The value is copied back from the heap to the stack.

**Example:**
``` csharp
object obj = 23;  // Boxing
int num = (int)obj;  // Unboxing: obj is cast back to an int
```

> [!info] **Description**:
> 
> In the example, `obj` holds the value `23` as an object. When unboxing, you must explicitly cast `obj` back to `int`, which moves the value from the heap back to the stack.

> [!example]- **Unboxing Example in C#**
>``` csharp
>using System;
>class Program
>{
>    static void Main()
>    {
>        object obj = 23;  // Boxing
>        int num = (int)obj;  // Unboxing
>
>        Console.WriteLine("Value of obj: {0}", obj);
>        Console.WriteLine("Value of num: {0}", num);
>    }
>}
>
>```
> _output:_
>``` text
>Value of obj: 23
>Value of num: 23
>```

## Important Considerations

> [!error] **Potential Errors**
> 
> - **Null Reference**: Unboxing a `null` object results in a `NullReferenceException`.
> - **Invalid Cast**: Unboxing to an incompatible type results in an `InvalidCastException`.

## Conclusion

> [!summary] **Boxing vs. Unboxing**
> 
> - **Boxing**: Converts a value type to an object type, moving the value from the stack to the heap.
> - **Unboxing**: Converts an object type back to a value type, moving the value from the heap to the stack.