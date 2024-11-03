---
created: 2024-07-25 19:58
aliases: 
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]], [[Observer Pattern|Observer]]

# Events and Delegates

## Overview

Events and delegates are powerful features in C# that enable communication between objects. Delegates allow methods to be passed as parameters, while events provide a way for objects to notify subscribers when something of interest occurs.

## Delegates

A delegate is a type that represents references to methods with a specific parameter list and return type. Delegates are used to pass methods as arguments to other methods. 

### Declaring and Using Delegates

> [!example]- Delegate Example
> ```csharp
> // Declare a delegate
> public delegate void MyDelegate(string message);
> 
> // Method that matches the delegate signature
> public void PrintMessage(string message)
> {
>     Console.WriteLine(message);
> }
> 
> // Using the delegate
> MyDelegate del = PrintMessage;
> del("Hello, World!");
> ```

## Events

Events are based on delegates and provide a way for a class to notify other classes or objects when something of interest happens. The class that sends (or raises) the event is called the publisher, and the classes that receive (or handle) the event are called subscribers.

### Declaring and Using Events

> [!example]- Event Example
> ```csharp
> // Declare a delegate for the event
> public delegate void MyEventHandler(string message);
> 
> // Declare the event using the delegate
> public event MyEventHandler MyEvent;
> 
> // Method to raise the event
> protected virtual void OnMyEvent(string message)
> {
>     if (MyEvent != null)
>     {
>         MyEvent(message);
>     }
> }
> 
> // Subscriber method
> public void EventHandlerMethod(string message)
> {
>     Console.WriteLine("Event received: " + message);
> }
> 
> // Subscribing to the event
> MyEvent += EventHandlerMethod;
> 
> // Raising the event
> OnMyEvent("Hello, Event!");
> ```

## Comparison of Delegates and Events

| Delegates                                               | Events                                                   |
| ------------------------------------------------------- | -------------------------------------------------------- |
| Can hold references to methods with a specific signature. | Are built on top of delegates.                           |
| Used to pass methods as parameters.                      | Used to provide notifications.                           |
| Can be invoked directly.                                 | Can only be invoked from within the class that declares them. |
| Supports multicast (can hold multiple methods).          | Supports multicast (multiple subscribers).                |

## Summary

Events and delegates in C# provide a flexible way to handle method references and notifications. Delegates allow methods to be passed as parameters, while events enable objects to notify subscribers of important occurrences. Understanding these concepts is essential for effective C# programming, especially in scenarios involving [[Event-driven Architecture Pattern|Event-Driven]] programming and callbacks.


 