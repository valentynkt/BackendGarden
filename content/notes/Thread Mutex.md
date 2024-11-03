---
created: 2024-08-16 16:48
aliases:
  - Mutex
tags:
  - LearningIT
  - seed🌱
---

link: [[Thread Locks Methods CSharp]]

# Thread Mutex

## Overview

The `Mutex` class in C# is used to prevent multiple threads or processes from accessing shared resources simultaneously. Unlike `lock`, which is limited to threads within a single process, `Mutex` can be used across multiple processes, providing cross-process synchronization.

> [!important]
>  **Key Point:** `Mutex` provides **exclusive locking** across threads and processes, ensuring that only one thread or process can access the locked resource at a time.

## How Mutex Works

- **Acquire Mutex**: A thread or process attempts to acquire the `Mutex`. If the `Mutex` is available, it is granted.
- **Execute Critical Section**: The thread or process that owns the `Mutex` can enter the critical section and execute the code.
- **Release Mutex**: Once the critical section is completed, the `Mutex` is released, allowing other threads or processes to acquire it.

> [!info] Basic Syntax
>
>``` csharp
>using (Mutex mutex = new Mutex())
>{
>    mutex.WaitOne();
>    try
>    {
>        // Critical section of code
>    }
>    finally
>    {
>        mutex.ReleaseMutex();
>    }
>}
>```
> 
> - **mutex.WaitOne()**: Acquires the `Mutex`.
> - **mutex.ReleaseMutex()**: Releases the `Mutex`.

> [!important] Best Practices
> 
> - **Use with Care**: Since `Mutex` can be used across processes, ensure it's only used when cross-process synchronization is necessary.
> - **Avoid Deadlocks**: Ensure that all acquired `Mutex` instances are properly released to avoid deadlocks.
> - **Keep Critical Sections Short**: As with `lock`, keep the critical section within the `Mutex` as short as possible to reduce contention.

### Example

> [!example]- Using Mutex for Thread Synchronization
> 
>``` csharp
>using System;
>using System.Threading;
>
>class Program
>{
>    static Mutex mutex = new Mutex();
>    static int counter = 0;
>
>    static void Main(string[] args)
>    {
>        // Create two threads that increment a shared counter
>        Thread t1 = new Thread(IncrementCounter);
>        Thread t2 = new Thread(IncrementCounter);
>
>        t1.Start();
>        t2.Start();
>
>        t1.Join();
>        t2.Join();
>
>        Console.WriteLine("Counter value: " + counter);
>    }
>
>    static void IncrementCounter()
>    {
>        for (int i = 0; i < 10000; i++)
>        {
>            mutex.WaitOne();
>            try
>            {
>                counter++;
>            }
>            finally
>            {
>                mutex.ReleaseMutex();
>            }
>        }
>    }
>}
>```
> 
> In this example, `Mutex` ensures that only one thread at a time can increment the `counter`, even if threads belong to different processes.

## Summary

The `Mutex` class in C# provides a robust mechanism for synchronizing access to shared resources, particularly when cross-process synchronization is needed. It should be used with care, particularly in scenarios where multiple processes might need to access the same resource. As with other synchronization techniques, careful management is required to avoid issues such as deadlocks and performance bottlenecks.