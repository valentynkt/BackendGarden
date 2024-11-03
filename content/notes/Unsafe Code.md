---
created: 2024-08-01 13:32
aliases: 
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]], [[NET|.NET]]

# Unsafe Code

## Overview

Unsafe code in C# allows direct memory manipulation using pointers, providing greater control over memory and performance. It is typically used in scenarios where performance is critical, such as low-level system programming or interoperation with unmanaged code.

## Key Concepts

> [!important]
> 
> - **Unsafe Context**: Code blocks marked with the `unsafe` keyword where pointers and direct memory manipulation are allowed.
> - **Fixed Statement**: Prevents the garbage collector from relocating a variable, ensuring the pointer points to a fixed memory address.
> - **Stack Allocation**: Allocates memory on the stack using the `stackalloc` keyword.

## Examples

> [!example] **Unsafe Context Example**
> 
> ```csharp
> public unsafe class UnsafeExample
> {
>     public void UsePointer()
>     {
>         int value = 10;
>         int* pointer = &value;
>         Console.WriteLine("Value: {0}, Address: {1}", value, (int)pointer);
>     }
> }
> 
> // Using the unsafe code
> UnsafeExample example = new UnsafeExample();
> example.UsePointer();
> ```

> [!example] **Fixed Statement Example**
> 
> ```csharp
> unsafe
> {
>     int[] array = { 1, 2, 3 };
>     fixed (int* pointer = array)
>     {
>         for (int i = 0; i < array.Length; i++)
>         {
>             Console.WriteLine(pointer[i]);
>         }
>     }
> }
> ```

> [!example] **Stack Allocation Example**
> 
> ```csharp
> unsafe
> {
>     int* array = stackalloc int[3];
>     array[0] = 1;
>     array[1] = 2;
>     array[2] = 3;
> 
>     for (int i = 0; i < 3; i++)
>     {
>         Console.WriteLine(array[i]);
>     }
> }
> ```

## Related Topics

> [!summary]
> 
> - **[[Managed-Unmanaged Code]]**: Understanding the difference between managed and unmanaged code.
> - **[[Memory Management CSharp|Memory Management]]**: Concepts and practices for managing memory in C#.
> - **[[IDisposable Interface]]**: Proper resource management, especially when dealing with unmanaged resources.

## Conclusion

Unsafe code in C# provides powerful capabilities for direct memory manipulation and performance optimization. However, it should be used cautiously due to the potential risks and complexities involved.

## References

[Understanding Unsafe Code in C#](https://www.c-sharpcorner.com/UploadFile/f0b2ed/understanding-unsafe-code-in-C-Sharp/)


 