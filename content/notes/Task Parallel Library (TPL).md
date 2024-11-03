---
created: 2024-08-30 15:06
aliases: 
tags:
  - LearningIT
  - seed🌱
---

link: [[Asynchronous CSharp|Asynchronous]]

# Task Parallel Library (TPL)

## Overview

The Task Parallel Library (TPL) is a set of public types and APIs in the .NET Framework that simplify the process of adding parallelism and concurrency to applications. It provides developers with a higher-level abstraction for working with threads, making it easier to write parallel code. The TPL is built around the `Task` and `Task<T>` classes, which represent asynchronous operations.

---

## Key Features

The TPL offers several powerful features that make it an essential tool for parallel programming in C#:

> [!info] **Key Features**
> 
> - **Task-Based Programming Model**: The core of TPL is the `Task` class, which represents a single unit of work. Tasks can be run asynchronously, and TPL handles the complexities of thread management.
> - **Task Continuations**: The TPL allows you to chain tasks together, so that when one task finishes, another one can start automatically. This is useful for creating workflows.
> - **Parallel Loops**: TPL provides methods like `Parallel.For` and `Parallel.ForEach`, which allow you to execute loops in parallel, distributing work across multiple processors.
> - **Task Composition**: Tasks can be combined in various ways, such as with `Task.WhenAll` and `Task.WhenAny`, to wait for multiple tasks to complete or for any one task to finish.
> - **Cancellation**: TPL supports cancellation tokens, allowing tasks to be canceled in a cooperative manner.
> - **Exception Handling**: TPL provides robust mechanisms for handling exceptions that occur in parallel tasks.

---

## Task Class

The `Task` class is the cornerstone of the TPL. It represents an asynchronous operation and provides methods for starting, waiting, and handling the result of the operation.

> [!example]- Creating and Running Tasks
> A task can be created and started using the `Task.Run` or `Task.Factory.StartNew` methods:
> 
> ``` csharp
> using System;
> using System.Threading.Tasks;
> 
> class Program
> {
>     static void Main()
>     {
>         Task task = Task.Run(() =>
>         {
>             Console.WriteLine("Task is running...");
>         });
> 
>         task.Wait();  // Wait for the task to complete
>         Console.WriteLine("Task completed.");
>     }
> }
> ```
> 

> [!example]- Task Continuations
> Tasks can be chained together using continuation tasks. A continuation task runs after the completion of its predecessor:
> 
> ``` csharp
> using System;
> using System.Threading.Tasks;
> 
> class Program
> {
>     static void Main()
>     {
>         Task task = Task.Run(() =>
>         {
>             Console.WriteLine("First task running...");
>         });
> 
>         Task continuation = task.ContinueWith(t =>
>         {
>             Console.WriteLine("Continuation task running...");
>         });
> 
>         continuation.Wait();
>     }
> }
> ```


## Parallel Loops

TPL simplifies the execution of parallel loops with `Parallel.For` and `Parallel.ForEach`, which automatically distribute iterations across multiple threads:

> [!example]- Parallel.For
> 
> ``` csharp
> using System;
> using System.Threading.Tasks;
> 
> class Program
> {
>     static void Main()
>     {
>         Parallel.For(0, 10, i =>
>         {
>             Console.WriteLine($"Processing {i}");
>         });
>     }
> }
> ```

> [!example]-  Parallel.ForEach
>
> ``` csharp
> using System;
> using System.Collections.Generic;
> using System.Threading.Tasks;
> 
> class Program
> {
>     static void Main()
>     {
>         var items = new List<int> { 1, 2, 3, 4, 5 };
> 
>         Parallel.ForEach(items, item =>
>         {
>             Console.WriteLine($"Processing item {item}");
>         });
>     }
> }
> ```

## Task Composition

Task composition allows you to work with multiple tasks simultaneously, coordinating their execution and managing their results.

> [!example]- Waiting for Multiple Tasks
> `Task.WhenAll` is used to wait for multiple tasks to complete:
> 
> ``` csharp
> using System;
> using System.Threading.Tasks;
> 
> class Program
> {
>     static async Task Main()
>     {
>         Task task1 = Task.Run(() => Console.WriteLine("Task 1 running"));
>         Task task2 = Task.Run(() => Console.WriteLine("Task 2 running"));
> 
>         await Task.WhenAll(task1, task2);
>         Console.WriteLine("Both tasks completed.");
>     }
> }
> 
> ```

> [!example]- Waiting for Any Task
> `Task.WhenAny` is used to wait for any one of the tasks to complete:
> ``` csharp
> using System;
> using System.Threading.Tasks;
> 
> class Program
> {
>     static async Task Main()
>     {
>         Task task1 = Task.Run(() => Console.WriteLine("Task 1 running"));
>         Task task2 = Task.Run(() => Console.WriteLine("Task 2 running"));
> 
>         await Task.WhenAny(task1, task2);
>         Console.WriteLine("One of the tasks completed.");
>     }
> }
> ```

## Cancellation and Exception Handling

TPL provides mechanisms to handle task cancellations and exceptions gracefully.

> [!example]- Cancellation
> You can cancel a running task by using a `CancellationToken`
> ``` csharp
> using System;
> using System.Threading;
> using System.Threading.Tasks;
> 
> class Program
> {
>     static void Main()
>     {
>         CancellationTokenSource cts = new CancellationTokenSource();
>         Task task = Task.Run(() =>
>         {
>             for (int i = 0; i < 10; i++)
>             {
>                 if (cts.Token.IsCancellationRequested)
>                 {
>                     Console.WriteLine("Task was canceled.");
>                     return;
>                 }
>                 Console.WriteLine($"Processing {i}");
>                 Thread.Sleep(500);
>             }
>         }, cts.Token);
> 
>         Thread.Sleep(2000);
>         cts.Cancel();  // Request cancellation
>         task.Wait();
>     }
> }
> 
> ```

> [!example]- Exception Handling
> Exceptions in TPL can be caught using a try-catch block around the task, or by using `Task.Wait` or `Task.Result`, which will propagate exceptions:
> ``` csharp
> using System;
> using System.Threading.Tasks;
> 
> class Program
> {
>     static void Main()
>     {
>         try
>         {
>             Task task = Task.Run(() =>
>             {
>                 throw new InvalidOperationException("Something went wrong");
>             });
> 
>             task.Wait();
>         }
>         catch (AggregateException ex)
>         {
>             Console.WriteLine($"Exception caught: {ex.InnerException.Message}");
>         }
>     }
> }
> ```

## Summary

The Task Parallel Library (TPL) in C# is a powerful framework that simplifies parallel and asynchronous programming. It provides a higher-level abstraction for working with tasks, making it easier to write efficient and scalable code. Whether you are handling simple asynchronous operations or complex parallel workflows, the TPL offers the tools needed to manage concurrency effectively.

# Reference:
https://www.pluralsight.com/guides/async-programming-task-parallel-library


 