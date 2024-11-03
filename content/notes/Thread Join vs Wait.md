Date and Time: <u> 2023-10-15 21:50 </u>
Status: #LearningIT
Tags: [[CSharp]], [[Multithreading]], [[Thread Synchronization]], [[Thread Join]]

# Thread Join vs Wait

## [[Thread Join|join]]()  

``` ad-important
If a thread wants to wait until some other thread completion then we should go for join method.  
E.g  
If a thread t1 executes t2.join(), then t1 will be entered into waiting state until t2 completion.
```

If we are commenting t.join() then both Threads will be executed simultaneously and we can't expect exact execution order.  

If we are not commenting t.join() then main Thread will wait until completing child Thread.

## wait()

* If a thread executes wait() method it immediately releases the lock of that object(But not all locks) and entered into waiting state. Two threads can communicate with each other by using wait(), notify(), notifyAll().

* These methods are available in object class but not in thread class. Because threads are calling these methods on any object.  
  
* If a thread wants to call wait(), notify() and notifyAll() methods compulsory the Thread should be owner of the object. i.e., the Thread has to get lock of that object. i.e., the Thread should be in the synchronized area.

| **wait()**  | **join()**  |
|---|---|
|wait() method can be called by a synchronized block or method.|It is used to stop the current thread.|
|wait() method is implemented for performing multi-thread-synchronization.|It can be called either with synchronized and without synchronized context.|
|Its syntax is -:<br><br>**public final void wait() throws InterruptedException**|Its syntax is -:<br><br>**public final void join() throws InterruptedException**|
|wait() method causes the thread to sleep until notify() and notifyAll() are called|It can be used to add sequence among more than one thread|

 