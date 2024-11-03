---
created: 2024-08-01 12:39
aliases:
  - Static Keyword
  - Static Class
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]]

# Static Keyword

## Overview

The `static` keyword in C# is used to declare members that belong to the type itself rather than to a specific object. This means that `static` members are shared among all instances of the class and can be accessed without creating an instance of the class.

## Key Concepts

> [!important]
> 
> - **Static Class**: A class that cannot be instantiated and can contain only static members.
> - **Static Method**: A method that belongs to the class itself rather than an instance of the class.
> - **Static Field**: A field that is shared among all instances of a class.
> - **Static Property**: A property that is shared among all instances of a class.
> - **Static Constructor**: A special constructor used to initialize static fields or perform actions that need to be performed only once.

## Static Class

A `static` class is a class that cannot be instantiated and can contain only static members.

> [!example]- **Static Class Example**
> 
> ```csharp
> public static class Utility
> {
>     public static void PrintMessage(string message)
>     {
>         Console.WriteLine(message);
>     }
> }
> 
> // Using the static class
> Utility.PrintMessage("Hello, World!"); // Outputs: Hello, World!
> ```

## Static Method

A `static` method belongs to the class itself rather than an instance of the class.

> [!example]- **Static Method Example**
> 
> ```csharp
> public class MathUtilities
> {
>     public static int Add(int a, int b)
>     {
>         return a + b;
>     }
> }
> 
> // Using the static method
> int result = MathUtilities.Add(5, 3); // Outputs: 8
> ```

## Static Field

A `static` field is shared among all instances of a class.

> [!example]- **Static Field Example**
> 
> ```csharp
> public class Counter
> {
>     public static int Count;
> 
>     public Counter()
>     {
>         Count++;
>     }
> }
> 
> // Using the static field
> Counter c1 = new Counter();
> Counter c2 = new Counter();
> Console.WriteLine(Counter.Count); // Outputs: 2
> ```

## Static Property

A `static` property is shared among all instances of a class.

> [!example]- **Static Property Example**
> 
> ```csharp
> public class Configuration
> {
>     public static string ApplicationName { get; set; }
> }
> 
> // Using the static property
> Configuration.ApplicationName = "MyApp";
> Console.WriteLine(Configuration.ApplicationName); // Outputs: MyApp
> ```

## Static Constructor

A `static` constructor is used to initialize static fields or perform actions that need to be performed only once.

> [!example]- **Static Constructor Example**
> 
> ```csharp
> public class Logger
> {
>     public static string LogFilePath;
> 
>     static Logger()
>     {
>         LogFilePath = "log.txt";
>         // Initialization code here
>     }
> }
> 
> // Using the static constructor
> Console.WriteLine(Logger.LogFilePath); // Outputs: log.txt
> ```

## Key Points

> [!info] **Key Points**
> 
> - Static members belong to the class itself, not instances of the class.
> - Static methods and properties can be accessed without creating an instance of the class.
> - Static fields are shared among all instances of a class.
> - Static constructors are called automatically to initialize the class before the first instance is created or any static members are referenced.

## Related Topics

> [!summary]
> 
> - **[[Extension Methods CSharp|Extension Methods]]**: Extension methods must be defined in static classes.
> - **[[Singleton Pattern]]**: Often uses static fields and properties to ensure a single instance.

## Conclusion

The `static` keyword in C# is a powerful tool for creating members that belong to the class itself rather than to any instance. It is widely used for utility methods, shared data, and initialization tasks, making it an essential part of the C# language.
