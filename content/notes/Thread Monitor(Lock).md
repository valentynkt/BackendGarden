---
created: 2024-08-16 16:38
aliases:
  - Thread Monitor
  - Thread Lock
  - Lock CSharp
  - Lock C#
  - Monitor.Enter
  - Monitor(Lock)
tags:
  - LearningIT
  - seed🌱
---

link: [[Thread Locks Methods CSharp]]

# Thread Monitor(Lock)

## Overview

The `lock` keyword in C# is used to prevent multiple threads from accessing shared resources at the same time. It ensures that only one thread can execute a critical section of code at a time, avoiding issues like data corruption and race conditions.

> [!important]
> **Key Point:** `lock` provides **exclusive locking**, meaning only one thread can access the locked resource at a time.

## How lock Works

- **Acquire Lock**: A thread tries to obtain the lock on an object.
- **Execute Critical Section**: If the lock is available, the thread enters the critical section and runs the code.
- **Release Lock**: Once done, the lock is automatically released, allowing other threads to proceed.

> [!info] Basic Syntax
> ``` csharp
> lock (someObject)
> {
>     // Critical section of code
> }
> ```
> **someObject**: The object on which the lock is acquired; it must be a reference type.


> [!important] Best Practices
> - **Use Private Objects**: Lock on private objects to avoid unintended interference.
> - **Keep It Short**: Minimize the code within the `lock` to reduce waiting time for other threads.
> - **Avoid Public Objects**: Don’t lock on publicly accessible objects like `this` or strings to prevent deadlocks.

### Example

> [!example]-  Using lock Keyword
> ``` csharp
> static object lockObject = new object();
> static int counter = 0;
> 
> static void IncrementCounter()
> {
>     for (int i = 0; i < 10000; i++)
>     {
>         lock (lockObject)
>         {
>             counter++;
>         }
>     }
> }
> ```
> In this example, `lock` ensures that only one thread can increment the `counter` at a time.

> [!example]- Using Monitor Class
> The `Monitor` class in C# offers similar functionality to `lock`, but with more control over the locking process. `Monitor.Enter` is used to acquire the lock, and `Monitor.Exit` is used to release it. This provides explicit control and ensures that the lock is released even if an exception occurs.
> ``` csharp
> static object lockObject = new object();
> static int counter = 0;
> 
> static void IncrementCounter()
> {
>     for (int i = 0; i < 10000; i++)
>     {
>         Monitor.Enter(lockObject);
>         try
>         {
>             counter++;
>         }
>         finally
>         {
>             Monitor.Exit(lockObject);
>         }
>     }
> }
> ```

## Summary

The `lock` keyword in C# is a simple and effective way to ensure thread safety in multithreaded applications. It should be used thoughtfully to avoid performance issues and deadlocks. For more complex scenarios, additional control can be achieved using the `Monitor` class.