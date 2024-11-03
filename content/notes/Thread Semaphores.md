---
created: 2024-08-19 12:04
aliases:
  - Semaphores
  - Semaphore
  - SemaphoreSlim
tags:
  - LearningIT
  - seed🌱
---

link: [[Thread Locks Methods CSharp|Thread Locks C#]]

# Thread Semaphores
## Overview

`Semaphore` and `SemaphoreSlim` are synchronization primitives in C# that control access to a resource pool by multiple threads. Unlike `Mutex` or `SpinLock`, which allow only one thread at a time to access a resource, `Semaphore` and `SemaphoreSlim` allow a specified number of threads to access a resource concurrently.

> [!important]
>  **Key Point:** `Semaphore` and `SemaphoreSlim` are used to limit the number of threads that can access a resource simultaneously, making them ideal for managing access to limited resources.

## Semaphore

### How Semaphore Works

A `Semaphore` controls access by maintaining a count, which represents the number of threads that can access the resource at the same time:

- **Initialize**: The semaphore is initialized with a maximum count and an initial count.
- **Wait (Enter)**: A thread requests access by calling `WaitOne()`. If the count is greater than zero, the thread is allowed to proceed, and the count is decremented. If the count is zero, the thread blocks until another thread releases the semaphore.
- **Release (Exit)**: When a thread finishes using the resource, it calls `Release()`, which increments the count, potentially unblocking a waiting thread.

> [!info] Basic Syntax
>``` csharp
>Semaphore semaphore = new Semaphore(initialCount: 2, maximumCount: 2);
>
>// Thread A
>semaphore.WaitOne();
>try
>{
>    // Critical section
>}
>finally
>{
>    semaphore.Release();
>}
>```
>- **initialCount**: The number of threads that can enter initially.
>- **maximumCount**: The maximum number of threads that can enter concurrently.
>- **WaitOne()**: Decrements the count and blocks if the count is zero.
>- **Release()**: Increments the count, potentially unblocking a waiting thread.

### Example

> [!example]- Using Semaphore
>
>``` csharp
>using System;
>using System.Threading;
>
>class Program
>{
>    static Semaphore semaphore = new Semaphore(2, 2);
>
>    static void Main(string[] args)
>    {
>        for (int i = 0; i < 5; i++)
>        {
>            Thread t = new Thread(AccessResource);
>            t.Start(i);
>        }
>    }
>
>    static void AccessResource(object id)
>    {
>        Console.WriteLine($"Thread {id} waiting to access resource...");
>        semaphore.WaitOne();
>        try
>        {
>            Console.WriteLine($"Thread {id} granted access to resource.");
>            Thread.Sleep(2000);  // Simulate resource use
>        }
>        finally
>        {
>            Console.WriteLine($"Thread {id} releasing resource.");
>            semaphore.Release();
>        }
>    }
>}
>```
>In this example, only two threads can access the critical section at the same time. The other threads will wait until one of the resources is released.

## SemaphoreSlim

### How SemaphoreSlim Works

`SemaphoreSlim` is a lightweight alternative to `Semaphore`, optimized for scenarios where wait times are expected to be short, and cross-process synchronization is not required. It provides similar functionality but with reduced overhead.

> [!info] Basic Syntax
>
>``` csharp
>SemaphoreSlim semaphoreSlim = new SemaphoreSlim(initialCount: 2, maxCount: 2);
>
>// Thread A
>await semaphoreSlim.WaitAsync();
>try
>{
>    // Critical section
>}
>finally
>{
>    semaphoreSlim.Release();
>}
>```
>
>- **WaitAsync()**: Asynchronously waits to enter the semaphore.
>- **Release()**: Increments the semaphore count, potentially unblocking a waiting thread.

### Example

> [!example]- Using SemaphoreSlim
>
>``` csharp
>using System;
>using System.Threading;
>using System.Threading.Tasks;
>
>class Program
>{
>    static SemaphoreSlim semaphoreSlim = new SemaphoreSlim(2, 2);
>
>    static async Task Main(string[] args)
>    {
>        Task[] tasks = new Task[5];
>        for (int i = 0; i < 5; i++)
>        {
>            int taskId = i;
>            tasks[i] = Task.Run(async () => await AccessResource(taskId));
>        }
>        await Task.WhenAll(tasks);
>    }
>
>    static async Task AccessResource(int id)
>    {
>        Console.WriteLine($"Task {id} waiting to access resource...");
>        await semaphoreSlim.WaitAsync();
>        try
>        {
>            Console.WriteLine($"Task {id} granted access to resource.");
>            await Task.Delay(2000);  // Simulate resource use
>        }
>        finally
>        {
>            Console.WriteLine($"Task {id} releasing resource.");
>            semaphoreSlim.Release();
>        }
>    }
>}
>```
>In this example, `SemaphoreSlim` allows up to two tasks to access the critical section simultaneously, and other tasks wait asynchronously until a slot is available.


## Summary

- **Semaphore** is a powerful synchronization tool in C# that allows a specific number of threads to access a resource simultaneously, making it ideal for controlling access to limited resources.
- **SemaphoreSlim** is a lighter, more efficient version of `Semaphore`, designed for scenarios where high performance is critical and cross-process synchronization is not needed.