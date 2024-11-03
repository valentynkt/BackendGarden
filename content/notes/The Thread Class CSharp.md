---
created: 2024-08-16 14:42
aliases:
  - Thread Class
tags:
  - LearningIT
  - seed🌱
---

link: [[Multithreading]]

# The Thread Class

## Overview

The `Thread` class, part of the `System.Threading` namespace, is the cornerstone of multithreaded programming in C#. It provides the essential methods and properties needed to create, control, and manage threads, enabling concurrent execution within applications.

## Creating and Starting Threads

To create and start a thread, you instantiate the `Thread` class with a method to be executed, and then call the `Start` method to begin the thread's execution.

> [!example]-
> ``` csharp
> using System;
> using System.Threading;
> 
> class Example
> {
>     public void FirstThread()
>     {
>         for (int i = 0; i < 5; i++)
>         {
>             Console.WriteLine("My Thread");
>         }
>     }
> }
> 
> class Program
> {
>     static void Main()
>     {
>         Example e = new Example();
>         Thread t = new Thread(new ThreadStart(e.FirstThread));
>         t.Start();
>         Console.Read();
>     }
> }
> ```
> 
> **Output**:
>``` text
>My Thread
>My Thread
>My Thread
>My Thread
>My Thread
>```


### Main Thread

The main thread is the first thread created by the CLR when an application starts. You can access the main thread using the `Thread.CurrentThread` property.

> [!example]-
> ``` csharp
> using System;
> using System.Threading;
> 
> class Program
> {
>     static void Main(string[] args)
>     {
>         Thread myThread = Thread.CurrentThread;
>         myThread.Name = "Main_Thread";
>         Console.WriteLine("This thread is the {0}", myThread.Name);
>     }
> }
> ```
> _Output:_
>``` text
>This thread is the Main_Thread
>```

## Key Properties of the Thread Class

The `Thread` class offers several properties to manage and monitor the state and behavior of threads.

> [!summary] **Important Thread Properties**
> 
> - **`IsAlive`**: Indicates whether the thread is still running.
> - **`Name`**: Gets or sets the name of the thread.
> - **`Priority`**: Sets the scheduling priority of the thread.
> - **`ThreadState`**: Describes the current state of the thread (e.g., running, waiting, stopped).
> - **`ManagedThreadId`**: Provides a unique identifier for the thread.

> [!example]- Checking Thread Status
> ``` csharp
> using System;
> using System.Threading;
> 
> class Program
> {
>     static void Main(string[] args)
>     {
>         Thread t = Thread.CurrentThread;
>         t.Name = "MyThread";
>         Console.WriteLine("Status of current thread = {0}", t.IsAlive);
>         Console.ReadKey();
>     }
> }
> ```
>``` text
>Status of current thread = True
>```

## Key Methods of the Thread Class

The `Thread` class provides methods to control the execution and behavior of threads.

> [!summary] **Commonly Used Thread Methods**
> 
> - **`Start()`**: Starts the execution of the thread.
> - **`Sleep(int milliseconds)`**: Pauses the thread for a specified duration.
> - **`Join()`**: Blocks the calling thread until the thread on which `Join` is called has finished executing.
> - **`Abort()`**: Attempts to abort the thread, which raises a `ThreadAbortException` and begins the process of terminating the thread (not recommended in modern C# due to potential instability).
> - **`Interrupt()`**: Interrupts a thread that is in the waiting or sleeping state, causing a `ThreadInterruptedException` to be thrown.

> [!example]- Pausing a Thread
> 
> ``` csharp
> using System;
> using System.Threading;
> 
> class Program
> {
>     static void Main(string[] args)
>     {
>         Thread t = Thread.CurrentThread;
>         t.Name = "First Thread";
>         Console.WriteLine("Thread Name : {0}", t.Name);
>         Console.WriteLine("Thread Priority : {0}", t.Priority);
>         Console.WriteLine("Child Thread Paused...");
>         
>         // Pause the thread for 1 second
>         Thread.Sleep(1000);
>         
>         Console.WriteLine("Child Thread Resumed...");
>         Console.ReadKey();
>     }
> }
> ```