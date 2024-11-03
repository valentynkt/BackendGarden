---
created: 2024-08-19 12:37
aliases: 
tags:
  - LearningIT
  - seed🌱
---

link: [[Thread Synchronization]]

# Thread Signaling

## Overview

Thread signaling is an essential synchronization technique in multithreaded programming, allowing threads to communicate and coordinate their actions. This ensures that operations are performed in a controlled manner, preventing race conditions and ensuring thread safety. This note covers various signaling methods in C#, including `WaitHandle` types ([AutoResetEvent](https://msdn.microsoft.com/en-us/library/system.threading.autoresetevent.aspx), [ManualResetEvent](https://msdn.microsoft.com/en-us/library/system.threading.manualresetevent.aspx), [CountdownEvent](https://msdn.microsoft.com/en-us/library/system.threading.countdownevent.aspx)) and `Monitor`-based signaling.

---

## Navigation

> [!info] **Table of Contents**
> - **WaitHandle-Based Signaling**:
>     - AutoResetEvent: Allows one thread to proceed at a time.
>     - ManualResetEvent: Allows multiple threads to proceed simultaneously.
>     - CountdownEvent: Synchronizes threads based on a countdown.
> - **Monitor-Based Signaling**:
>     - Monitor.Wait, Pulse: Flexible thread signaling using custom logic.

---

## WaitHandle-Based Signaling

### [AutoResetEvent](https://msdn.microsoft.com/en-us/library/system.threading.autoresetevent.aspx)

`AutoResetEvent` is a synchronization primitive that allows one thread to proceed at a time. It automatically resets after releasing a single thread, ensuring exclusive access to shared resources.

> [!info] **Key Points**
> 
> - **Behavior**: Automatically resets to a non-signaled state after one thread is released.
> - **Use Case**: Ideal for scenarios where only one thread should access a resource at a time.

> [!example] **Example: AutoResetEvent**
>``` csharp
>static EventWaitHandle autoResetEvent = new AutoResetEvent(false);
>
>internal static void Execute()
>{
>    var tasks = new Task[3];
>    for (int i = 0; i < 3; i++)
>    {
>        tasks[i] = Task.Run(() => DoWork());
>    }
>    Thread.Sleep(5000);
>    autoResetEvent.Set();
>    Task.WaitAll(tasks);
>}
>
>private static void DoWork()
>{
>    Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId} waiting for signal");
>    autoResetEvent.WaitOne();
>    Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId} got signal");
>    Thread.Sleep(3000);
>    Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId} leaving...");
>    autoResetEvent.Set();
>}
>
>```
>**Result**: Threads are queued and released one at a time.

---
### [ManualResetEvent](https://msdn.microsoft.com/en-us/library/system.threading.manualresetevent.aspx)

`ManualResetEvent` is a synchronization primitive that allows multiple threads to proceed when signaled. Unlike `AutoResetEvent`, it remains in a signaled state until manually reset.

> [!info] **Key Points**
> 
> - **Behavior**: Remains signaled until manually reset, allowing multiple threads to proceed.
> - **Use Case**: Suitable for scenarios where multiple threads need to be released simultaneously.

> [!example] **Example: ManualResetEvent**
>``` csharp
>static EventWaitHandle manualResetEvent = new ManualResetEvent(false);
>
>internal static void Execute()
>{
>    var tasks = new Task[3];
>    for (int i = 0; i < 3; i++)
>    {
>        tasks[i] = Task.Run(() => DoWork());
>    }
>    Thread.Sleep(5000);
>    manualResetEvent.Set();
>    Task.WaitAll(tasks);
>}
>
>private static void DoWork()
>{
>    Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId} waiting for signal");
>    manualResetEvent.WaitOne();
>    Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId} got signal");
>    Thread.Sleep(1000);
>    Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId} leaving...");
>}
>```
>**Result**: All threads are released together once the signal is received.

### [CountdownEvent](https://msdn.microsoft.com/en-us/library/system.threading.countdownevent.aspx)

`CountdownEvent` is a synchronization primitive that allows threads to wait until a specific number of operations have completed. It becomes signaled when its internal counter reaches zero.

> [!info] **Key Points**
> 
> - **Behavior**: Signaled when the countdown reaches zero.
> - **Use Case**: Ideal for scenarios where a thread must wait for multiple tasks to complete.

> [!example] **Example: CountdownEvent**
>``` csharp
>CountdownEvent countdownEvent = new CountdownEvent(3);
>
>internal static void Execute()
>{
>    var tasks = new Task[3];
>    for (int i = 0; i < 3; i++)
>    {
>        tasks[i] = Task.Run(() => DoWork());
>    }
>    countdownEvent.Wait();
>}
>
>private static void DoWork()
>{
>    Thread.Sleep(1000);
>    Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId} finished work.");
>    countdownEvent.Signal();
>}
>
>```
>**Result**: Threads wait for all tasks to finish before proceeding.

## Monitor-Based Signaling

### Monitor.Wait, Pulse

The `Monitor` class provides a more flexible method for thread signaling, allowing threads to wait for custom conditions and signal each other using `Pulse` or `PulseAll`.

> [!info] **Key Points**
> 
> - **Behavior**: `Monitor.Wait` releases the lock and waits for a signal; `Pulse` or `PulseAll` signals threads to proceed.
> - **Use Case**: Useful for complex synchronization scenarios, such as producer-consumer patterns.

> [!example] **Example: Monitor.Wait, Pulse**
>``` csharp
>class SimpleProducerConsumerQueue<T>
>{
>    readonly object _syncLock = new object();
>    Queue<T> _queue = new Queue<T>();
>
>    public T ConsumeItem()
>    {
>        lock (_syncLock)
>        {
>            while (_queue.Count == 0)
>            {
>                Monitor.Wait(_syncLock);
>            }
>            return _queue.Dequeue();
>        }
>    }
>
>    public void ProduceItems(params T[] items)
>    {
>        lock (_syncLock)
>        {
>            foreach (var item in items)
>            {
>                _queue.Enqueue(item);
>            }
>            Monitor.PulseAll(_syncLock);
>        }
>    }
>}
>```
>**Result**: The consumer thread waits for items, and the producer signals all waiting consumers when new items are produced.

## Conclusion

Thread signaling is a crucial aspect of multithreaded programming in C#. By leveraging `WaitHandle` objects like [AutoResetEvent](https://msdn.microsoft.com/en-us/library/system.threading.autoresetevent.aspx), [ManualResetEvent](https://msdn.microsoft.com/en-us/library/system.threading.manualresetevent.aspx), and [CountdownEvent](https://msdn.microsoft.com/en-us/library/system.threading.countdownevent.aspx), as well as `Monitor`-based signaling, developers can effectively manage thread coordination and ensure safe access to shared resources. Proper understanding and implementation of these techniques are essential for building robust, efficient multithreaded applications.

# Reference:

[Thread Synchronization](https://www.c-sharpcorner.com/UploadFile/1c8574/thread-synchronization/)

[book](http://www.albahari.com/threading/part4.aspx)
 