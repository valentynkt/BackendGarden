---
created: 18-04-2024 19:57
aliases:
  - Class Dependencies in OOP
  - Object Coupling
tags:
  - seed🌱
  - LearningIT
links: "[[Relations Between Objects]]"
---

link: [[Object Oriented Programming]] , [[Relations Between Objects]]

# Dependency relationships

## Content

![[Pasted image 20240328022100.png]]

Dependency is the most basic and the weakest type of relations between classes. In object-oriented programming (OOP), a dependency exists whenever one class uses another. This can be through direct instantiation, method calls, or through passing instances as parameters. Dependencies make one class reliant on another, often leading to a higher risk of bugs when changes are made:

## Example

Here’s a practical C# example illustrating a basic dependency relationship:

> [!example]+ csharp
>``` csharp
>using System;
>
>public class Car
>{
>    public void Start() => Console.WriteLine("Car started");
>    public void Stop() => Console.WriteLine("Car stopped");
>}
>
>public class Driver
>{
>    public void Drive(Car car)
>    {
>        car.Start();
>        Console.WriteLine("Car is being driven by the driver");
>        car.Stop();
>    }
>}
>
>class Program
>{
>    static void Main()
>    {
>        Car myCar = new Car();      // Creating a Car object
>        Driver john = new Driver(); // Creating a Driver object
>
>        john.Drive(myCar);  // Demonstrating dependency
>    }
>}
>
>```

In this code:

- The `Driver` class has a dependency on the `Car` class because it uses the `Car` object to perform its functions. The method `Drive` directly interacts with `Car`, implying that any change in `Car`'s interface would require changes in `Driver`.

> [!example] 
> This C# code snippet demonstrates a clear dependency where `Driver` relies on `Car`. Such dependencies are vital to identify as they dictate the robustness and flexibility of your code structure.

# References

[[design-patterns-en.pdf]]

