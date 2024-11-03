---
created: 2024-08-30 14:32
aliases:
  - Producer-Consumer
tags:
  - LearningIT
  - seed🌱
---

link: [[Thread Synchronization]]

# Thread Producer-Consumer

## Overview

The Producer-Consumer problem is a classic example of a multithreaded application, commonly used to illustrate synchronization challenges in concurrent programming. In this pattern, one or more producer threads generate data and place it into a shared buffer, while one or more consumer threads retrieve and process this data from the buffer.

This pattern is widely applicable in real-world scenarios, such as task scheduling, data streaming, and resource management, where coordination between multiple threads is required.

---

## Key Concepts

The Producer-Consumer pattern involves several key components:

> [!info] **Components**
> 
> - **Producer**: Generates tasks or data and adds them to a shared buffer.
> - **Consumer**: Retrieves and processes tasks or data from the buffer.
> - **Buffer**: A shared queue or collection that temporarily holds the data until it is consumed.
> - **Synchronization**: Ensures that producers and consumers access the buffer in a thread-safe manner, preventing race conditions.

## Implementation Details

> [!example]- Basic Implementation
> 
> The following C# implementation demonstrates a simple Producer-Consumer queue using `AutoResetEvent` for signaling and a `Queue<string>` as the shared buffer:
> 
> ``` csharp
> using System;
> using System.Threading;
> using System.Collections.Generic;
> 
> class ProducerConsumerQueue : IDisposable
> {
>     EventWaitHandle _wh = new AutoResetEvent(false);
>     Thread _worker;
>     readonly object _locker = new object();
>     Queue<string> _tasks = new Queue<string>();
> 
>     public ProducerConsumerQueue()
>     {
>         _worker = new Thread(Work);
>         _worker.Start();
>     }
> 
>     public void EnqueueTask(string task)
>     {
>         lock (_locker) _tasks.Enqueue(task);
>         _wh.Set();  // Signal the worker that a new task is available
>     }
> 
>     public void Dispose()
>     {
>         EnqueueTask(null);  // Signal the worker to exit
>         _worker.Join();      // Wait for the worker thread to finish
>         _wh.Close();         // Release OS resources
>     }
> 
>     void Work()
>     {
>         while (true)
>         {
>             string task = null;
>             lock (_locker)
>                 if (_tasks.Count > 0)
>                 {
>                     task = _tasks.Dequeue();
>                     if (task == null) return;  // Exit signal received
>                 }
> 
>             if (task != null)
>             {
>                 Console.WriteLine("Performing task: " + task);
>                 Thread.Sleep(1000);  // Simulate work
>             }
>             else
>                 _wh.WaitOne();  // Wait for a new task
>         }
>     }
> }
> 
> class Program
> {
>     static void Main()
>     {
>         using (var q = new ProducerConsumerQueue())
>         {
>             q.EnqueueTask("Hello");
>             for (int i = 0; i < 10; i++) q.EnqueueTask("Say " + i);
>             q.EnqueueTask("Goodbye!");
>         }
>     }
> }
> ```


### How It Works

1. **Producer Thread (Main Thread)**:
    
    - The main thread acts as a producer, creating tasks and adding them to the queue using `EnqueueTask`.
    - It signals the worker thread whenever a new task is added by calling `_wh.Set()`.
2. **Consumer Thread (Worker Thread)**:
    
    - The worker thread continuously checks the queue for tasks.
    - If tasks are available, it dequeues and processes them.
    - If the queue is empty, the worker thread waits for a signal from the producer thread using `_wh.WaitOne()`.
3. **Termination**:
    
    - When the main thread is done producing tasks, it enqueues a `null` task, signaling the worker thread to exit.
    - The worker thread terminates when it dequeues the `null` task.

### Thread Synchronization

The key to this implementation is [[Thread Synchronization]], which ensures that both the producer and consumer access the shared buffer safely. The `lock` keyword is used to prevent race conditions when multiple threads interact with the queue.

> [!important] **Signaling**
> 
> - The `AutoResetEvent` is crucial for signaling between the producer and consumer threads.
> - It ensures that the worker thread only processes tasks when there are items in the queue and waits otherwise.

---

## Use Cases

The Producer-Consumer pattern is widely used in various real-life scenarios, including:

- **Task Scheduling**: Managing a pool of tasks where multiple producers generate tasks and a pool of workers (consumers) process them.
- **Data Streaming**: Streaming data from a source (producer) and processing it in real-time (consumer).
- **Logging Systems**: Producers generate log messages, which are then processed and written to a log file by consumers