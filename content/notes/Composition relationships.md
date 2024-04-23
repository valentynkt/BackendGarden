---
created: 19-04-2024 01:27
aliases:
  - Strong Aggregation in OOP
  - UML Composition Relationships
tags:
  - seed🌱
  - LearningIT
links: "[[Relations Between Objects]]"
---

link: [[Object Oriented Programming]] , [[Relations Between Objects]]

# Composition relationships


## Content

![[Pasted image 20240328022307.png]]
Composition is a stringent form of aggregation in object-oriented programming that defines a "part-whole" relationship where parts cannot exist independently of the whole. This type of relationship is crucial for ensuring that objects are well-integrated within a system, enforcing encapsulation and enhancing the system's robustness.

Composition is a specific kind of aggregation known for its strictness in part-whole relationships:

> [!important]+ 
> Composition ensures that when the container (whole) is destroyed, its contents (parts) are also destroyed. This relationship is ideal for representing natural part-whole hierarchies in an application, such as graphical user interfaces or management systems where components must not exist without the whole.

## Example

``` csharp
using System;

public class Engine
{
    public void Start() => Console.WriteLine("Engine started");
    public void Stop() => Console.WriteLine("Engine stopped");
}

public class Car
{
    private Engine engine = new Engine(); // Composition: Car "has-a" Engine

    public void Start()
    {
        engine.Start();
        Console.WriteLine("Car started");
    }

    public void Stop()
    {
        engine.Stop();
        Console.WriteLine("Car stopped");
    }
}

class Program
{
    static void Main()
    {
        Car myCar = new Car();
        myCar.Start();
        myCar.Stop();
    }
}

```

In this C# example:

- The `Car` class is composed of an `Engine`. The `Car` owns the `Engine` and controls its lifecycle.
- The `Engine` cannot exist independently of the `Car`, demonstrating a composition relationship.
- The methods `Start` and `Stop` in `Car` delegate to `Engine`, encapsulating its functionality within the `Car`.

# References

[[Favor Composition Over Inheritance]] - design principle 
[[design-patterns-en.pdf]]

