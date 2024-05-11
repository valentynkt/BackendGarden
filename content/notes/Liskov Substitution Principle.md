---
created: 2024-04-19 15:19
aliases:
  - LSP
  - LSP in OOP
links: "[[SOLID Principles]]"
tags:
  - LearningIT
  - bud🌿
---
link: [[SOLID Principles|SOLID]]


# Liskov Substitution Principle

## Overview

![[Pasted image 20240419180047.png]]
> [!important] **Objects of a subclass should be replaceable with objects of their superclass without altering the correctness of the program.**

The Liskov Substitution Principle (LSP) is an essential rule in object-oriented programming. It promotes the idea that subclasses should be able to replace their parent classes without causing any issues. This principle guarantees that classes built from a base class can be used just like the base class itself, without users needing to worry about any differences.

> [!abstract] 
> By following LSP, software becomes more reliable and easier to work with. It ensures that new classes built from existing ones don't change how the original classes behave, making the system easier to maintain and expand.

## Content

### Principle Explained

LSP is about ensuring that derived classes only extend without replacing the functionality of their base classes:

> [!important]
> 
> - **Substitutability**: A child class should enhance, not alter or diminish, the behavior of the parent class.
> - **Safeguarding Client Code**: Client code that uses the parent class should work with instances of the derived class without being aware of the change.

### LSP Requirements

To ensure compliance with the Liskov Substitution Principle, especially in statically typed languages like C#, it's essential to follow these guidelines:

> [!important]
> 
> - **Method Parameter Types**: In C#, the types of parameters in methods of a subclass should match or be more abstract than those in the parent class methods. This ensures that any method expecting a parent class instance will operate correctly if a subclass instance is passed.
> - **Method Return Types**: The return type in methods of a subclass should match or be a subtype of the return type in the parent class methods in C#. This maintains consistency in what the client code expects to receive, preventing errors and maintaining integrity.

These rules are built into C#'s type system and are crucial for ensuring that derived classes enhance rather than disrupt the functionality of their base classes. By adhering to these requirements, developers can leverage [[polymorphism]] effectively, promoting code reusability and scalability while adhering to LSP.

### Practical Example

Let’s explore how the LSP can be applied and violated, emphasizing the need for thoughtful class design:


> [!danger]- BEFORE
> BEFORE: Misapplication of inheritance can lead to a scenario where subclasses are not interchangeable with their base class without errors.
>``` csharp
>public class Program
>{
>    static void Main(string[] args)
>    {
>        Triangle triangle = new Circle();
>        Console.WriteLine(triangle.GetShape());  // Unexpected output
>    }
>}
>
>public class Triangle
>{
>    public virtual string GetShape()
>    {
>        return "Triangle";
>    }
>}
>
>public class Circle : Triangle
>{
>    public override string GetShape()
>    {
>        return "Circle";  // Violates LSP
>    }
>}
>
>```
>
>This example demonstrates a fundamental violation of LSP where the derived class `Circle` changes the inherent behavior expected from its base class `Triangle`. This misuse of inheritance leads to incorrect and unexpected results, showcasing that the derived class is not a proper substitute for the base class.


> [!success]- AFTER
> AFTER: Proper implementation using interfaces to ensure compliance with LSP, enhancing flexibility and correctness.
> 
> ``` csharp
> class Program
> {
>     static void Main(string[] args)
>     {
>         Shape shape = new Circle();
>         Console.WriteLine(shape.GetShape());
>         shape = new Triangle();
>         Console.WriteLine(shape.GetShape());
>     }
> }
> 
> public abstract class Shape
> {
>     public abstract string GetShape();
> }
> 
> public class Triangle : Shape
> {
>     public override string GetShape()
>     {
>         return "Triangle";
>     }
> }
> 
> public class Circle : Shape
> {
>     public override string GetShape()
>     {
>         return "Circle";
>     }
> }
> 
> ```
> In the corrected example, by abstracting the functionality into a `Shape` interface and ensuring both `Triangle` and `Circle` classes adhere to this interface without altering the expected behavior, we maintain LSP compliance. This approach allows objects of `Triangle` and `Circle` to be used interchangeably without breaking the functionality or client's expectations, embodying the core of LSP.


## Summary

>[!summary] 
>The Liskov Substitution Principle (LSP) ensures that you can use subclasses wherever you use their parent classes without causing problems in your program. It's really important for making software that's dependable and solid when you're using inheritance. When developers stick to LSP, they can make systems that are simpler to manage and grow. It means they can make changes and improvements without making mistakes. Following LSP helps create a more predictable and sturdy structure for applications, encouraging good software practices and design.

