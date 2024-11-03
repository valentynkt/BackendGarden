---
created: 2024-07-25 18:46
aliases:
  - Exception Handling
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]]

# Exception Handling CSharp

## Overview

Exception handling in C# is a mechanism that allows developers to manage and respond to runtime errors in a controlled manner. By using `try`, `catch`, `finally`, and `throw` constructs, C# provides a structured way to handle exceptions and ensure that the application remains robust and user-friendly.

## Basics


> [!warning] Exceptions That Cannot Be Caught
> - **StackOverflowException**: Occurs when the execution stack overflows due to excessive recursion.
> - **OutOfMemoryException**: Thrown when there is not enough memory to continue the execution of a program.
> - **ExecutionEngineException**: Occurs when there is an internal error in the [[Common Language Runtime]] execution engine.

### try-catch-finally

The `try` block contains the code that may throw an exception. The `catch` block handles the exception, and the `finally` block contains code that is always executed, regardless of whether an exception was thrown or not.

> [!example]- Basic Example
> ```csharp
> try {
>     // Code that may throw an exception
>     int[] numbers = {1, 2, 3};
>     Console.WriteLine(numbers[5]);
> } catch (IndexOutOfRangeException ex) {
>     // Handle the exception
>     Console.WriteLine("An error occurred: " + ex.Message);
> } finally {
>     // Code that always runs
>     Console.WriteLine("Execution completed.");
> }
> ```

## Advanced Features

### Multiple catch Blocks

C# allows multiple `catch` blocks to handle different types of exceptions separately.
Catch blocks should go from more specific to more general.

> [!example]- Multiple catch Blocks Example
> ```csharp
> try {
>     int x = int.Parse("NotANumber");
> } catch (FormatException ex) {
>     Console.WriteLine("FormatException: " + ex.Message);
> } catch (OverflowException ex) {
>     Console.WriteLine("OverflowException: " + ex.Message);
> } catch (Exception ex) {
>     Console.WriteLine("General Exception: " + ex.Message);
> }
> ```

### Custom Exceptions

Creating custom exceptions allows you to define specific error conditions in your application.

> [!example]- Custom Exception Example
> ```csharp
> public class MyCustomException : Exception {
>     public MyCustomException(string message) : base(message) {}
> }
> 
> try {
>     throw new MyCustomException("Something went wrong!");
> } catch (MyCustomException ex) {
>     Console.WriteLine(ex.Message);
> }
> ```

### Nested try-catch Blocks

You can nest `try-catch` blocks to handle exceptions at different levels of the code.

> [!example]- Nested try-catch Example
> ```csharp
> try {
>     try {
>         // Inner try block
>         int x = int.Parse("NotANumber");
>     } catch (FormatException ex) {
>         Console.WriteLine("FormatException: " + ex.Message);
>         throw; // Rethrow the exception to the outer catch block
>     }
> } catch (Exception ex) {
>     // Outer catch block
>     Console.WriteLine("Outer catch: " + ex.Message);
> }
> ```

### Exception Filtering

C# provides the ability to filter exceptions based on conditions using the `when` keyword.

> [!example]- Exception Filtering Example
> ```csharp
> try {
>     int number = int.Parse("NotANumber");
> } catch (FormatException ex) when (ex.Message.Contains("NotANumber")) {
>     Console.WriteLine("Caught a specific FormatException: " + ex.Message);
> }
> ```

### Aggregated Exceptions

In scenarios involving multiple concurrent operations, exceptions can be aggregated using the `AggregateException` class.

> [!example]- Aggregated Exceptions Example
> ```csharp
> try {
>     Task t1 = Task.Run(() => { throw new InvalidOperationException("Invalid operation"); });
>     Task t2 = Task.Run(() => { throw new ArgumentNullException("Null argument"); });
>     Task.WaitAll(t1, t2);
> } catch (AggregateException ex) {
>     foreach (var innerEx in ex.InnerExceptions) {
>         Console.WriteLine(innerEx.Message);
>     }
> }
> ```

### [[Monitoring and Logging]] and Monitoring

Effective exception handling often involves logging exceptions to understand and monitor application behavior.

> [!example]- Logging Example
> ```csharp
> try {
>     // Code that may throw an exception
> } catch (Exception ex) {
>     // Log the exception
>     LogException(ex);
> }
> 
> void LogException(Exception ex) {
>     // Example logging implementation
>     Console.WriteLine($"Exception: {ex.Message}\nStack Trace: {ex.StackTrace}");
> }
> ```

### Exception Handling Best Practices

> [!important]- Best Practices
> - **Specific Catch Blocks**: Catch specific exceptions rather than using a generic `catch` block.
> - **Avoid Silent Failures**: Do not catch exceptions without handling them; always log or rethrow them.
> - **Use finally Wisely**: Use the `finally` block for cleanup code that must run regardless of exceptions.
> - **Limit try Block Scope**: Keep the `try` block as short as possible to avoid catching exceptions from unrelated code.
> - **Document Exceptions**: Clearly document methods that can throw exceptions and the types of exceptions they may throw.
## Summary

Exception handling in C# is a critical aspect of writing robust and maintainable code. By understanding and utilizing advanced features and techniques, developers can create applications that handle errors gracefully, providing a better experience for users and easier maintenance for developers.
