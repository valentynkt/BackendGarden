---
created: 2024-08-16 15:10
aliases:
  - Thread Join
  - Thread Sleep
  - Monitor Wait
  - Thread Wait
tags:
  - LearningIT
  - seed🌱
---

link: [[Thread Synchronization]]

# Thread Blocking Methods

## Overview

Thread blocking methods are mechanisms that cause a thread to pause its execution temporarily, usually until a certain condition is met or a resource becomes available. Blocking methods are essential in scenarios where threads need to wait for certain operations to complete before proceeding, ensuring proper sequencing and resource management in multithreaded applications.

> [!abstract] **Key Concept**
> 
> - **Blocking**: Temporarily suspending the execution of a thread until a specific condition is met, such as waiting for another thread to complete or a resource to become available.


> [!important]
> - Thread Sleep
> - Thread Join
> - Monitor Wait
> - WaitOne

## Methods

### Thread Sleep

The `Thread.Sleep()` method pauses the execution of the current thread for a specified amount of time, measured in milliseconds. This is useful when a thread needs to wait before continuing execution.

> [!example] **Usage Example**
>``` csharp
> Thread.Sleep(1000); // Pauses the thread for 1 second
>```

> [!success] **Pros**
> 
> - Simple to use for delaying thread execution.
> - Useful in scenarios where you need to introduce a fixed wait time.

> [!danger] **Cons**
> 
> - The thread is blocked and not available for other tasks during this time.
> - Can lead to inefficiencies if used excessively or inappropriately.

### Thread Join

The `Thread.Join()` method blocks the calling thread until the thread on which it is called has completed its execution. This is commonly used to ensure that one thread waits for another to finish before continuing.

> [!example] Usage Example
> ``` csharp
> Thread t = new Thread(SomeMethod);
> t.Start();
> t.Join(); // Waits for the thread 't' to finish
> ```

> [!success] **Pros**
> 
> - Ensures that dependent threads complete before the calling thread proceeds.
> - Helps in coordinating the execution sequence of multiple threads.

> [!danger] **Cons**
> 
> - Can lead to a deadlock if not used carefully, especially when combined with other synchronization mechanisms.
> - The calling thread is blocked until the target thread completes, which can cause delays.

### Monitor Wait

`Monitor.Wait()` is used in conjunction with the `Monitor` class to release a lock and block the current thread until it reacquires the lock. It’s typically used within a `lock` block to implement custom waiting conditions.

> [!example] Usage Example
> 
> ``` csharp
> lock(someObject)
> {
>     Monitor.Wait(someObject); // Waits until a condition is met
> }
> ```

> [!success] **Pros**
> 
> - Provides fine-grained control over thread synchronization and waiting conditions.
> - Allows threads to wait for specific signals or conditions to be met.

> [!danger] **Cons**
> 
> - Requires a solid understanding of the `Monitor` class and synchronization.
> - Misuse can lead to complex bugs like missed signals or deadlocks.

### WaitOne

`AutoResetEvent.WaitOne()` and `ManualResetEvent.WaitOne()`  These methods block a thread until it receives a signal from another thread. The `AutoResetEvent` automatically resets after releasing a single thread, whereas the `ManualResetEvent` remains signaled until manually reset.

``` csharp
AutoResetEvent autoEvent = new AutoResetEvent(false);
autoEvent.WaitOne(); // Blocks the thread until signaled
```

> [!success] **Pros**
> 
> - Useful for thread signaling, where one thread waits for a signal from another.
> - Provides a way to synchronize threads without using busy-waiting.

> [!danger] **Cons**
> 
> - Can lead to complex synchronization scenarios if not carefully managed.
> - Requires explicit signaling, which can introduce bugs if signals are missed or incorrectly managed.

# Reference:

[Thread Synchronization](https://www.c-sharpcorner.com/UploadFile/1c8574/thread-synchronization/)