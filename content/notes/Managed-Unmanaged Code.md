---
created: 2024-08-01 13:20
aliases:
  - Managed vs Unmanaged Code
tags:
  - LearningIT
  - seed🌱
---

link: [[NET|.NET]], [[Common Language Runtime]]

# Managed and Unmanaged Code in .NET

![[clr.png]]

## Overview

In the .NET framework, code can be classified as either managed or unmanaged based on how it is executed and managed by the runtime.

## Managed Code

Managed code is executed by the .NET Common Language Runtime (CLR). The CLR provides various services such as [[Garbage Collector|Garbage Collection]], type safety, exception handling, and security.

> [!info] **Managed Code Characteristics**
> 
> - **Execution by CLR**: Managed code runs under the control of the CLR.
> - **Garbage Collection**: Automatic memory management to reclaim unused objects.
> - **Type Safety**: Ensures that objects are used according to their declared types.
> - **Security**: Provides code access security and verification.
> - **Example**: C#, VB.NET

> [!example] **Managed Code Example**
> 
> ```csharp
> public class ManagedExample
> {
>     public void DisplayMessage()
>     {
>         Console.WriteLine("This is managed code.");
>     }
> }
> ```

## Unmanaged Code

Unmanaged code is executed directly by the operating system. It is written in languages such as C or C++ and does not provide the services offered by the CLR.

> [!info] **Unmanaged Code Characteristics**
> 
> - **Direct Execution**: Runs directly on the OS without CLR intervention.
> - **Manual Memory Management**: Developers must manually manage memory (allocation and deallocation).
> - **No Type Safety**: Does not enforce type safety.
> - **No Built-in Security**: Lacks the security mechanisms provided by the CLR.
> - **[[#Unsafe Code]] in C#**: Allows direct memory manipulation within a managed application. Marked with the `unsafe` keyword.
> - **Example**: C, C++

> [!example] **Unmanaged Code Example**
> 
> ```c
> #include <stdio.h>
> 
> void displayMessage()
> {
>     printf("This is unmanaged code.\n");
> }
> 
> int main()
> {
>     displayMessage();
>     return 0;
> }
> ```

## Unsafe Code

While C# is a managed language, it provides a way to write code that can perform direct memory manipulation using the `unsafe` keyword. This code is still executed under the CLR but allows operations similar to unmanaged code.

> [!info] **Unsafe Code Characteristics**
> 
> - **Unsafe Context**: Code blocks marked with the `unsafe` keyword where pointers and direct memory manipulation are allowed.
> - **Pointer Types**: Ability to declare and use pointer variables.
> - **Fixed Statement**: Prevents the garbage collector from relocating a variable, ensuring the pointer points to a fixed memory address.
> - **Stack Allocation**: Allocates memory on the stack using the `stackalloc` keyword.
> - **Interoperability**: Useful for interfacing with unmanaged code or optimizing performance-critical sections.
> - **Security Considerations**: Requires the code to have appropriate permissions; unsafe code is not verified for type safety.

> [!example] **Unsafe Context Example**
> ``` csharp
> public unsafe class UnsafeExample
>{
>    public void UsePointer()
>    {
>        int value = 10;
>        int* pointer = &value;
>        Console.WriteLine("Value: {0}, Address: {1}", value, (int)pointer);
>    }
>}
>
>// Using the unsafe code
>class Program
>{
>    static void Main()
>    {
>        UnsafeExample example = new UnsafeExample();
>        example.UsePointer();
>    }
>}
>
> ```

> [!example] **Fixed Statement Example**
> ``` csharp
> unsafe
>{
>    int[] array = { 1, 2, 3 };
>    fixed (int* pointer = array)
>    {
>        for (int i = 0; i < array.Length; i++)
>        {
>            Console.WriteLine(pointer[i]);
>        }
>    }
>}
> ```

> [!example] **Stack Allocation Example**
> ``` csharp
> unsafe
>{
>    int* array = stackalloc int[3];
>    array[0] = 1;
>    array[1] = 2;
>    array[2] = 3;
>
>    for (int i = 0; i < 3; i++)
>    {
>        Console.WriteLine(array[i]);
>    }
>}
>
> ```

### Considerations When Using Unsafe Code

- **Performance**: Unsafe code can improve performance in scenarios where direct memory access reduces overhead.
- **Safety**: Bypasses some of the safety mechanisms of the CLR, so it should be used cautiously.
- **Security**: Requires full trust; not suitable for environments where code access security policies restrict permissions.
- **Maintenance**: Increases code complexity and potential for errors such as memory leaks or pointer-related bugs.
- 
## Interoperability

.NET provides mechanisms to interact with unmanaged code through [[Platform Invocation Services CSharp|Platform Invocation Services]] (P/Invoke) and COM Interoperability.

> [!info] **Interoperability Example**
> 
> ```csharp
> using System;
> using System.Runtime.InteropServices;
> 
> class Program
> {
>     [DllImport("user32.dll", CharSet = CharSet.Auto)]
>     public static extern int MessageBox(IntPtr hWnd, String text, String caption, uint type);
> 
>     static void Main()
>     {
>         MessageBox(IntPtr.Zero, "Hello, World!", "Hello", 0);
>     }
> }
> ```

## Key Points

> [!important] **Key Points**
> 
> - **Managed Code**: Runs under CLR, offers garbage collection, type safety, and security.
> - **Unmanaged Code**: Runs directly on OS, requires manual memory management, lacks CLR services.
> - **Interoperability**: .NET allows calling unmanaged code using P/Invoke and COM Interop.

## Related Topics

> [!summary] **Related Topics**
> 
> - **[[Garbage Collector|Garbage Collection]]**: Automatic memory management in managed code.
> - **[[COM and P Invoke|COM and P/Invoke]]**: Calling unmanaged functions from managed code, Using COM components in .NET applications.

## Conclusion

Understanding the differences between managed and unmanaged code is crucial for .NET developers. Managed code provides numerous benefits through the CLR, while unmanaged code offers direct execution and control. Interoperability features in .NET bridge the gap between the two, allowing for versatile and powerful applications. Unsafe code in C# allows for direct memory manipulation within a managed environment, providing flexibility when needed.
