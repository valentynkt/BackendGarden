---
created: 2024-04-15 15:37
aliases:
  - Single Instance Pattern
  - Global Object Pattern
  - Unique Instance Pattern
  - One Object Pattern
links: "[[Creational patterns]]"
---
link: [[Creational patterns]]

# Singleton Pattern

## Overview

![[Pasted image 20231013130633.png]]

>[!abstract] Singleton
>**Singleton** is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

## Content

### Intent

> [!danger]  **Problem** 
> The Singleton pattern solves two problems simultaneously, but this violates the Single Responsibility Principle:
>1. **Ensure that a class has just a single instance.** This is commonly used to control access to shared resources like databases or files. With Singleton, if you attempt to create a new instance of a class that already exists, you'll receive the existing instance instead of a new one. Regular constructors cannot achieve this behavior since they always return a new object.
>![[Pasted image 20231013131242.png]]
>Clients may not even realize that they’re working with the same object all the time
>
>2. **Provide a global access point to that instance.** While global variables are convenient, they are also risky since any code can potentially overwrite their contents and crash the application. Singleton offers global access to an instance while protecting it from being overwritten by other code.
>
>It's worth noting that Singleton has become a popular term and may be used to refer to a pattern that solves only one of the listed problems.

> [!success]  **Solution** 
> All implementations of the Singleton have these two steps in common
>1. Make the default constructor private to prevent other objects from using the `new` operator with the Singleton class.
> 
>2. Create a static creation method that acts as a constructor. This method internally calls the private constructor to create an object and stores it in a static field. Subsequent calls to this method return the cached object. If your code has access to the Singleton class, it can call the Singleton’s static method, ensuring that the same object is always returned.

### Structure

![[Pasted image 20231013172239.png]]

1. **The Singleton** class declares the static method getInstance that returns the same instance of its own class.
2. **The Singleton’s** constructor should be hidden from the client code. Calling the getInstance method should be the only way of getting the Singleton object

### Applicability

- **Single Instance Control**: Use the Singleton pattern when your application requires exactly one instance of a class, such as a database connection or configuration manager. This ensures that the instance is easily accessible from a known location and prevents multiple instances from being created.
    
- **Resource Management**: The Singleton is ideal for managing shared resources. It ensures that all operations use the same instance, maintaining consistency and preventing resource conflicts.
    
- **Flexibility in Instance Control**: While the Singleton pattern generally restricts the creation of multiple instances, it can be adjusted to allow more than one instance if needed. This is done by modifying the `getInstance` method, which can be useful in specific scenarios like creating one instance per thread.
    
- **Efficient Resource Initialization**: Use the Singleton pattern for lazy initialization, where the object’s creation is deferred until it is first required. This method helps improve application startup performance by spreading the cost of initialization over time.

### How to Implement

1. **Private Static Field**: Add a private static field in the class to hold the singleton instance. This field will store the instance once it's created.
    
2. **Public Static Method**: Create a public static method that acts as the accessor for the singleton instance. This method is the global access point to obtain the instance.
    
3. **Lazy Initialization**: Implement lazy initialization within the static method. The first time this method is called, it should create a new instance of the class and store it in the previously created private static field. All subsequent calls to this method should return the existing instance without creating a new one.
    
4. **Private Constructor**: Make the constructor of the class private. This prevents other parts of your code from using the `new` operator to create a new instance of the class, enforcing the singleton pattern.
    
5. **Refactor Client Code**: Modify any client code that directly creates an instance of the class using the constructor to use the singleton's public static method instead. This change ensures that all instances of the class are accessed through the singleton mechanism

### Pros and Cons

> [!success] **Advantages**
>- **Singleton Instance**: Ensures that a class has only one instance and provides a global point of access to it.
>- **Lazy Initialization**: The singleton instance is created only when it is needed for the first time, which can help manage resources more efficiently.

> [!warning] **Disadvantages**
>- **[[Single Responsibility Principle]] Violation**: The Singleton pattern combines the task of controlling instance creation with the normal business logic of the class, mixing two responsibilities.
>- **Design Issues**: Can lead to poor design choices by making it easier for components to access global state or interact excessively with each other.
>- **Multithreading Complexity**: Special care must be taken to handle multithreading, ensuring that the singleton instance is created only once even when multiple threads access it simultaneously.
>- **Unit Testing Challenges**: The pattern makes unit testing difficult due to its reliance on a private constructor and static methods. This complicates the creation of mock objects and can hinder test-driven development.

### Relations with Other Patterns

- A [[Facade Pattern]] class can often be transformed into a Singleton since a single facade object is sufficient in most cases.
- [[Flyweight Pattern]] would resemble Singleton if you somehow managed to reduce all shared states of the objects to just one flyweight object. But there are two fundamental differences between these patterns:
	1.  There should be only one Singleton instance, whereas a Flyweight class can have multiple instances with different intrinsic states.
	2. The **Singleton** object can be mutable. Flyweight objects are immutable.

## Examples

The Singleton pattern ensures a class has only one instance, with global access. Its implementation can vary based on application needs, particularly in terms of thread safety.

For single-threaded applications, a simple Singleton without thread safety is adequate. This straightforward version is easy to implement but unsuitable for multi-threaded environments where concurrency issues might arise.

In contrast, multi-threaded applications require a thread-safe Singleton to prevent simultaneous instance creation by multiple threads. Techniques like locking or double-check locking are used to maintain a single instance securely across various threads.

Below are examples of both a non-thread-safe Singleton and a thread-safe Singleton using double-check locking, demonstrating their applications and differences.

> [!abstract]+  **Components of the Implementation**
>- **Singleton (Singleton Provider)**: Manages the creation of singleton instances. It includes methods for retrieving the Singleton instance, with one ensuring non-thread-safe access and the other ensuring thread-safe access using double-check locking.
>- **Non-Thread-Safe Singleton Access**: Provides a simple method to access the Singleton instance which is not safe for use in multithreaded environments as it allows multiple instances to be created if multiple threads access it at the same time.
>- **Thread-Safe Singleton Access**: Ensures that the Singleton instance is created only once using a double-check locking mechanism. This method is crucial for applications running in a multithreaded environment to prevent the creation of multiple instances.
>- **Program (Client)**: Demonstrates the use of the Singleton classes. It includes methods to test and display the behavior of both the thread-safe and non-thread-safe Singleton implementations.

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/Singleton/NonThreadSafe/Program.cs)

> [!example]- csharp
>``` csharp
> using System;
>
> class Singleton
> {
>     private static Singleton nonThreadSafeInstance;
>     private static Singleton threadSafeInstance;
>     private static readonly object lockObject = new object();
>
>     // Private constructor to prevent external instantiation.
>     private Singleton() { }
>
>     // Non-thread-safe Singleton accessor
>     public static Singleton GetNonThreadSafeInstance(string value)
>     {
>         if (nonThreadSafeInstance == null)
>         {
>             nonThreadSafeInstance = new Singleton { Value = value };
>         }
>         return nonThreadSafeInstance;
>     }
>
>     // Thread-safe Singleton accessor using double-check locking
>     public static Singleton GetThreadSafeInstance(string value)
>     {
>         if (threadSafeInstance == null)
>         {
>             lock (lockObject)
>             {
>                 if (threadSafeInstance == null)
>                 {
>                     threadSafeInstance = new Singleton { Value = value };
>                 }
>             }
>         }
>         return threadSafeInstance;
>     }
>
>     // Property to store value
>     public string Value { get; set; }
> }
>
> class Program
> {
>     static void Main()
>     {
>         TestNonThreadSafeSingleton();
>         TestThreadSafeSingleton();
>     }
>
>     static void TestNonThreadSafeSingleton()
>     {
>         // Demonstrate non-thread-safe Singleton
>         var singletonA = Singleton.GetNonThreadSafeInstance("Initial Value");
>         Console.WriteLine("Non-Thread-Safe Singleton Value: " + singletonA.Value);
>
>         // Attempting to change the instance value
>         var singletonB = Singleton.GetNonThreadSafeInstance("New Value");
>         Console.WriteLine("Non-Thread-Safe Singleton Value: " + singletonB.Value);
>     }
>
>     static void TestThreadSafeSingleton()
>     {
>         // Demonstrate thread-safe Singleton
>         var singletonC = Singleton.GetThreadSafeInstance("Initial Value");
>         Console.WriteLine("Thread-Safe Singleton Value: " + singletonC.Value);
>
>         // Attempting to change the instance value
>         var singletonD = Singleton.GetThreadSafeInstance("New Value");
>         Console.WriteLine("Thread-Safe Singleton Value: " + singletonD.Value);
>     }
> }
>```

## Summary

>[!summary]- **Cheat Sheet**
>**Purpose**:
>- Ensures a class has only one instance, and provides a global point of access to it.
>- Often used in cases where a single object is needed to coordinate actions across a system.
>
>**Components**:
>- **Singleton**: The class that is designed to have only one instance. It contains methods to allow clients to access the unique instance.
>
>**Usage**:
>- Use when exactly one instance of a class is required.
>- Use to control client access to some shared resource.
>
>**Benefits**:
>- Provides a single point of access for a given instance.
>- The instance is created only when needed.
>
>**Common Scenarios**:
>- Managing a connection to a database.
>- Controlling the print spooler.
>- Accessing a file system.


> [!note]- **Personal Thoughts**
> The Singleton pattern is designed to ensure that a class has only one instance, not multiple instances. If there's a need to allow multiple instances, it deviates from the Singleton pattern's intended usage. In such cases, modifying the body of the `getInstance` method to accommodate multiple instances would be necessary.

# References

https://refactoring.guru/design-patterns