This article explains, with examples, the need for locking a block of code when it is overwhelmed by several threads simultaneously.

A multithread application has more than one thread; each thread is responsible for running a certain number of methods. The controller shares the running time between the threads, but the user generally does not have much control over which thread will start first nor how much time is taken before the controller starts the next thread. In a normal case of a multithread application, every thread starts, but before it’s done it gets interrupted by other threads then resumes its work again, but gets interrupted again... and so on until the thread finishes all its tasks and exits. This goes for every single thread.

If there is a method or a block of code which manipulates a global variable (shared resource), and if all threads can access the same block at the same time without protecting the variable then different values of the global variable appear every time the app runs. This is a result of **Data Race**, a condition which happens with this kind of behavior. **Data Race condition gives no time to threads to inform other parts in the same application with the final value of shared resources which all thread are accessing at once which leads to incorrect outputs. Controlling this kind of behavior will give every thread enough time to change the value of the shared resource without allowing other threads to interrupt the process and at the same time gives enough time to inform other parts with the latest value of the shared resource.**

To avoid Data Race, which leads to inconsistent results in a multithread application, lock the code where the global variable is expected to get hit by many threads simultaneously. This can be done using the lock keyword.

The following console application example shows the results and the behavior of threads; one time without using the lock, and the second time using the lock. The example will also show how **Data Race** occurs. The application uses a global integer variable, representing the shared resources between threads. It also uses a second global variable, type Object, which will be used to lock the chunk of code where the shared resources variable is manipulated. A Void method, **PlusFive()**, increments the shared resources variable from 0 to 5 each time it gets called.

Create a C# console application, name it **ThreadLock**.

Declare two global variables :

![](https://miro.medium.com/max/674/1*umgs9MZdUly_n_2eQeMAxw.png)

Create the **PlusFive()** method :

![](https://miro.medium.com/max/816/1*Dqgm6sq_AyTequ_dsGyBog.png)

Now let's call the **PlusFive()** method three times, **no threads are used here** :

![](https://miro.medium.com/max/875/1*lDK1zP3CeNuVCxW65a8exg.png)

RESULTS:

![](https://miro.medium.com/proxy/1*FyXmi_DRRWvYwZRj4YP5Kw.png)

The results above are **expected**; Adding 5s three times totals up to 15.

The code above is executed by only one thread, the main thread. Now let's create three threads. Each thread will call the **PlusFive()** method **_(no locking here)_**, and the application must be run more than once or twice in order to observe if it will give the same result._(note: remember to add the Join() method for every thread in order for the main thread to wait until all threads are done)._

![](https://miro.medium.com/max/875/1*hEmfJ2fEOWweOLD2oMUjEg.png)

**RESULTS :**

**First** time running: **total = 15**

![](https://miro.medium.com/max/875/1*UOtC40vgOvHjzBnBONEtgg.png)

**Second** time running:**total = 13**

![](https://miro.medium.com/max/875/1*Z0a1jZUWaUSNUlWSXP102g.png)

**Third** time running: **total = 12**

![](https://miro.medium.com/max/780/1*cztETlmXsg_hriqywOsVpg.png)

**Fourth** time running: **total = 15**

![](https://miro.medium.com/proxy/1*fSavbuLhiGb1MbvFd4oBig.png)

Running the application four times, as seen above, with no locking is giving inconsistent results. In the first run, the total was **15**, in the second run it was **13**, in the third one**12** and in the fourth run 15 . **_How did this happen?_** This is what we call **_Data Race_**. **While one thread is changing the value of total, for example from 8 to 9 ,another thread is accessing same variable same time and trying to change it from 9 to 10 ,while doing this the first thread which is carrying a value of 8 went informing the rest of the application that the latest value of total is 8, missing all the changes done by the second thread.** To demonstrate how Data Race happens, one can print out which thread is accessing the shared variable “total” and what value it incremented into. This will reveal how threads manipulate the total when the code block is not locked.

In the **PlusFive()** method, add this line:

**Console.WriteLine(“Total is : “ + total + “ updated by “ + Thread.CurrentThread.Name);**

![](https://miro.medium.com/max/875/1*ngc5WyQzjTtHJ5eTyo6nRg.png)

Run the app,

**RESULTS:**

![](https://miro.medium.com/max/875/1*lJLdWerIegWFEOGJ2RzoBQ.png)

**Results showing hoe Data Race occurs case not using lock**

The results above show how Data Race occurs; It can be seen that t3 started first, it incremented <total> from 0 to 1 , but then t1 interrupted t3 and incremented <total> from 1 to 2 , when t2 interrupted t1 and incremented <total> from 2 to 3 ,then t3 is back and incremented <total> from 3 to 4.

This scenario will differ every time we run the application, and it will give us different results for <total>, once 15, another 13, 12 and so on.

Now, let us lock the block of code which increments the total, run the application and discuss the results.

To do this, the Object variable **\_lock** must first be locked until the thread shared time is done. Then release the object, allowing the other thread to enter. Doing this will prevent threads from interrupting each other and protect total value. Overall, this will make the final result consistent every time the application is run.

**for (int i = 1; i <= 5; i++)**

**{**

**lock (\_lock)**

**{**

**total++;**

**}**

**}**

![](https://miro.medium.com/max/875/1*HnWRD2adwvh9Q1M94nm7Xg.png)

**Comment out the code in _line 44_** (we will use it later ) as for this step we want to see if the final result of total if consistent.

Run the application:

**RESULTS:**

**First** time running:**total =15**

![](https://miro.medium.com/proxy/1*fSavbuLhiGb1MbvFd4oBig.png)

**Second** time running: **total=15**

![](https://miro.medium.com/proxy/1*fSavbuLhiGb1MbvFd4oBig.png)

**Third** time running: **total=15**

![](https://miro.medium.com/proxy/1*fSavbuLhiGb1MbvFd4oBig.png)

**Fourth** time running: **total=15**

![](https://miro.medium.com/proxy/1*fSavbuLhiGb1MbvFd4oBig.png)

From the results above, we can see that the value of the total is **always 15** every time the application is run

Now let us **uncomments _line 44_** to watch the thread’s behavior with the object locked :

![](https://miro.medium.com/max/875/1*0z0loq66nJb8rcElROTfQQ.png)

RESULTS:

![](https://miro.medium.com/max/875/1*SYCx5G_JJ2PIhN-Ql4AaeQ.png)

Results of No Data Race occur when using lock

From the results above, it is observed that every thread is able to access the variable total, and made this change with no interruption from other threads.

Locking shared resource in multithread applications ensures results consistency.

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

**_Other articles by_** [**_Ghadeer Kenaw_**](https://www.linkedin.com/in/ghadeer-kenawi-b480b311/)**_i :_**

[**_Threads in C# — Part1_**_: Single-threaded vs Multi-threaded applications_](https://medium.com/@ghadeer.kenawi/threads-in-c-part-1-9e546545c3d6)

[**_Threads in C# -Part2_**_\- Behind the Scene — ParameterizedThreadStart_](https://medium.com/@ghadeer.kenawi/threads-in-c-part2-behind-the-scene-parameterizedthreadstart-205c891c35cb)

[**_Reflection in C# —_** _How to load assembly and retrieve its metadata using Reflection_](https://medium.com/@ghadeer.kenawi/reflection-in-c-fa27d8f827f8)

[**_C#-Fluent Interfaces for Unit Testing_**](https://medium.com/@ghadeer.kenawi/c-fluent-interfaces-for-unit-testing-860d9019e21d)

_Resources:_

[_Threads and threading | Microsoft Docs_](https://docs.microsoft.com/en-us/dotnet/standard/threading/threads-and-threading)

l[ock statement — C# Reference | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/lock-statement)

## Basic locking

The issues with threading are usually correlated with shared resources (e.g. variables). One thread can start modifying it, while in meantime another thread also start do that. Then, sometimes, we cannot predict the final state of the resource (value of variable). Moreover, in one execution it can be value set by thread #1 and in the other — by thread #2.

To solve this issue, we have constructs such as: [semaphors](http://en.wikipedia.org/wiki/Semaphore_(programming)) or [monitors](http://en.wikipedia.org/wiki/Monitor_(synchronization)). In C#, the monitor implementation is lock statement. To apply it, we need ‘locker object’, which has to be locked before access to shared resources and unlocked after. Once ‘locker object’ is locked, other threads has to wait until it becomes unlocked. Look at below example :

``` csharp
using System;   
using System.Threading;   
class ThreadTest   
{   
  static bool done; // Static fields are shared between all threads  
  static void Main()   
  {   
    new Thread (Go).Start();   
    Go();   
  }   
  static void Go()   
  {   
    if (!done)   
    {   
      done = true;   
      Console.WriteLine ("Done");   
    }   
  }   
}
```

The bool variable done is shared resource. Above program will have 2 threads. First one, starts in a new thread and second one, right after the first one, in main thread. Both will try to access shared resource. We can see that during method Go() execution, the shared variable is accessed actually 2 times. First — to check its value, and second — to set it (if it was false). The problem is that thread #1 can access it first (when it is false), then give up processor for thread #2, which also will check the value (still false) and we will get “Done” printed twice. That’s something we do not want. To solve this issue, we introduce ‘locker object’ represented by variable locker.

``` csharp
using System;   
using System.Threading; class ThreadSafe   
{   
  static bool done;   
  static readonly object locker = new object();   
    
  static void Main()   
  {   
    new Thread (Go).Start();   
    Go();   
  }   
    
  static void Go()   
  {   
    lock (locker)   
    {   
      if (!done)   
      {    
        Console.WriteLine ("Done");   
        done = true;   
      }   
    }   
  }   
}
```

Now, the if statement is secured by lock. Every thread, which wants to enter it, has to obtain the lock. Once one thread obtain the lock, another threads cannot. They have to wait, until it becomes unlocked. In above example, when thread #1 has the lock and start executing critical section, then even if it give up for thread #2, we have warranty that another thread will not enter the critical section. Additionally, only thread #1 can release the lock.

The following code:

``` csharp
lock(locker) { //code }
```

is equivalent to:

``` csharp
Monitor.Enter(locker) //code Monitor.Exit(locker)
```

In the following circumstances, do not use the `lock` keyword:

``` ad-error
1. Using lock on value types instead of reference types results in a compile-time error.
2. To avoid thread deadlocks, use private reference variables instead of this keyword.
3. On a string object - Interned strings are global and can be halted by other threads without your knowledge. Avoid locking string objects.
```

### Conclusion
A lock prevents several threads from accessing a resource simultaneously. It is released when the current thread ends, allowing other threads to run. Mutex and monitor are the fundamental locking constructs.