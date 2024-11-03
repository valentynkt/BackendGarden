Date and Time: <u> 2023-10-15 18:03 </u>
Status: #LearningIT
Tags: [[CSharp|C#]],  [[Garbage Collector]] , [[Common Language Runtime]] 

# Finalizer & Dispose

[[Garbage Collector]] handles [[Memory Management CSharp]] in [[BackendGarden/public/notes/NET|.NET]] framework and conducts the allocation and reclaiming of memory for the applications. However, when we create objects that include unmanaged resources such as windows, files, network and database connections, we must explicitly release those resources after using them in our applications. This can be done by :

- using finalizers
- implementing _Dispose_ method from the _IDisposable_ interface

First, let’s learn about finalizers.

## **What is a finalizer?**

Finalizers (which are also called **destructors**) are used to perform any necessary final clean-up when a class instance is being collected by the  [[Garbage Collector]]. Some important points about finalizers are:

-   A class can have only one finalizer.
-   A finalizer does not have modifiers or parameters.
-   Finalizers cannot be called explicitly, they are called by the garbage collector (GC) when the GC considers the object eligible for finalization. They are also called when the program finishes in .NET framework applications.

Following is an example of a class with a finalizer:

``` CSharp
 public class Demo{
      ~Demo(){
         Console.WriteLine("Finalize called");
      }
   }
```

As you see, finalizers are called recursively for all instances in the inheritance chain, from the most-derived to the least-derived.

Finalize() is called by the Garbage Collector before an object that is eligible for collection is reclaimed. Garbage collector will take the responsibility to deallocate the memory for the unreferenced object. The Garbage Collector calls this method at some point after there are no longer valid references to that object in memory.

The framework does not guarantee that when this will happen, we can force for Garbage Collection but it will hurt performance of a program. Finalize() belongs to the Object class and it will be called by the runtime.

## [[IDisposable Interface]]
![[IDisposable Interface]]
