---
created: 2024-09-02 22:21
aliases:
  - State Machine
tags:
  - LearningIT
  - seed🌱
---

link: [[Asynchronous CSharp|Asynchronous]]

# Async and Await State Machine

## Overview

The `async` and `await` keywords in C# allow for easy and intuitive asynchronous programming. However, behind the scenes, these keywords trigger the creation of a state machine by the compiler. This state machine is responsible for managing the flow of asynchronous methods, pausing execution at `await` points, and resuming it once the awaited task is complete.

---

## Key Concepts

### What Is a State Machine?

A state machine is a construct that keeps track of the state of a method’s execution. In the context of `async` and `await`:

- **Pauses** execution when it hits an `await`.
- **Resumes** execution once the awaited task completes.
- **Manages** the flow of the method to ensure it continues correctly.

### Why Use a State Machine?

The state machine allows asynchronous methods to:

- **Avoid Blocking**: The method can pause at `await` without blocking the current thread.
- **Resume Later**: The method can pick up where it left off once the awaited task finishes.
- **Maintain Context**: It ensures that all variables and method state are preserved across the asynchronous call.

---

## How the State Machine Works

> [!abstract] Behind the Scenes
> 
> When you write an asynchronous method using `async` and `await`, the compiler:
> 
> 1. **Transforms** the method into a state machine.
> 2. **Splits** the method into multiple parts, each representing a different state.
> 3. **Manages** the transitions between these states based on when tasks complete.


> [!abstract] Basic Structure
> The state machine typically includes:
> 
> - **State Variables**: Keep track of the current state (e.g., whether a task is still running or has completed).
> - **Task Builders**: Manage the task returned by the method, handling its completion and continuation.
> - **MoveNext Method**: Drives the state machine forward, deciding what to do next based on the current state.

> [!abstract]- Example Transformation
> Here’s a simple example:
> 
> Original method:
> ``` csharp
> async Task ExampleMethodAsync()
> {
>     Console.WriteLine("Start");
>     await Task.Delay(1000);
>     Console.WriteLine("End");
> }
> ```
> 
> Transformed by the compiler:
> ``` csharp
> private struct ExampleMethodAsyncStateMachine : IAsyncStateMachine
> {
>     public int state;
>     public AsyncTaskMethodBuilder builder;
>     private TaskAwaiter awaiter;
> 
>     public void MoveNext()
>     {
>         try
>         {
>             if (state == 0)
>             {
>                 Console.WriteLine("Start");
>                 awaiter = Task.Delay(1000).GetAwaiter();
>                 if (!awaiter.IsCompleted)
>                 {
>                     state = 1;
>                     builder.AwaitUnsafeOnCompleted(ref awaiter, ref this);
>                     return;
>                 }
>             }
> 
>             if (state == 1)
>             {
>                 awaiter.GetResult();
>                 Console.WriteLine("End");
>             }
>         }
>         catch (Exception ex)
>         {
>             builder.SetException(ex);
>             return;
>         }
>         builder.SetResult();
>     }
> 
>     public void SetStateMachine(IAsyncStateMachine stateMachine)
>     {
>         builder.SetStateMachine(stateMachine);
>     }
> }
> ```
> 
> **Explanation:**
> 
> - **State Variable (`state`)**: Tracks which part of the method is currently executing.
> - **MoveNext Method**: Handles the transitions between different states of the method, deciding what happens next.
> - **Awaiter (`awaiter`)**: Waits for the task to complete and then resumes the method.

## Practical Implications

### Non-Blocking Execution

The state machine ensures that asynchronous methods do not block the thread. Instead, they pause at `await` points, allowing other work to be done, and then resume when the awaited task completes.

### Exception Handling

The state machine also manages exceptions that occur during the asynchronous operation, ensuring they are handled properly and propagated if necessary.

### Performance Considerations

While the state machine introduces some overhead, this is generally outweighed by the benefits of writing clean, non-blocking asynchronous code.

---

## Summary

The Async and Await State Machine is an essential part of how asynchronous programming works in C#. It allows methods to pause and resume without blocking threads, enabling efficient and responsive applications. Understanding this process can help you write better asynchronous code and troubleshoot when things don't go as expected.

---

## Related Topics

> [!info] **Related Topics**
> 
> - **[[Async and Await Keywords]]**: The core keywords that create the state machine.
> - **[[Task Parallel Library (TPL)]]**: The underlying framework that supports asynchronous programming.
> - **[[Asynchronous Control Flow]]**: How control flow is managed in asynchronous methods.
> - **[[Multithreading]]**: How asynchronous programming compares to multithreading.