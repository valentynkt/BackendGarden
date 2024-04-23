---
created: 19-04-2024 20:41
aliases:
- Data Hiding in OOP 
- Object Data Protection
- Class Privacy Management

links: "[[Object Oriented Programming|OOP]]"
tags:
  - seed🌱
  - LearningIT
---
link: [[Object Oriented Programming|OOP]]

# Encapsulation

## Overview

Encapsulation is a fundamental concept in object-oriented programming that involves bundling the data (attributes) and methods that operate on the data into a single unit or class. It also restricts direct access to some of the object's components, which can prevent the accidental modification of data and hide complex details.

Encapsulation helps to protect the internal state of an object and enforces controlled interactions through methods, which can be seen as a protective barrier that prevents the data from being accessed directly. The public interface of a class is what the outside world interacts with, while the implementation details are kept hidden.

## Content

> [!example] 
> To start a car engine, you only need to turn a key or press a button. You don’t need to connect wires under the hood, rotate the crankshaft and cylinders, and initiate the power cycle of the engine. These details are hidden under the hood of the car. You have only a simple interface: a start switch, a steering wheel and some pedals. This illustrates how each object has an interface—a public part of an object, open to interactions with other objects.

### Key Concepts

- **Private and Protected Access:** Encapsulation is achieved using access modifiers like `private` and `protected`. Private members are only accessible within the same class, while protected members are accessible in the class and its subclasses.
- **Simplified User Interface:** Similar to using a car, where you start the engine with a key or button without needing to understand its internal mechanics, encapsulation provides a simplified interface to interact with.

### Practical Example

![[Pasted image 20231006151239.png]]

In programming, interfaces and abstract classes are used to define a strict contract for what a class can do without dictating how it should do it. For instance, a `FlyingTransport` interface might declare a method like `fly(origin, destination, passengers)`. This allows different transportation classes like `Airplane`, `Helicopter`, or even a `DomesticatedGryphon` to implement this interface in their own way while ensuring they can all be used interchangeably in contexts like an air transportation simulator.


> [!example]+ csharp
>``` csharp
>public interface IFlyingTransport {
>    void Fly(string origin, string destination, int passengers);
>}
>
>public class Airplane : IFlyingTransport {
>    public void Fly(string origin, string destination, int passengers) {
>        // Specific implementation for an airplane
>    }
>}
>
>public class Helicopter : IFlyingTransport {
>    public void Fly(string origin, string destination, int passengers) {
>        // Specific implementation for a helicopter
>    }
>}
>
>// Example of using encapsulation with an interface
>public class Airport {
>    public void ManageFlight(IFlyingTransport flyingTransport) {
>        flyingTransport.Fly("New York", "London", 150);
>    }
>}
>
>```


In this example, the `Airport` class is designed to operate with any objects that implement the `IFlyingTransport` interface. It doesn't need to know the specific details of how each flying object operates, just that they can fly from one point to another. This design allows the implementation details of each flying object to remain encapsulated and interchangeable.

You could change the implementation of the fly method in these classes in any way you want. As long as the signature of the method remains the same as declared in the interface, all instances of the Airport class can work with your flying objects just fine.

### [[Abstraction vs Encapsulation]] 

![[Abstraction vs Encapsulation#Abstraction vs Encapsulation]]

## Summary

>[!summary]
>Encapsulation improves maintainability and flexibility of the code by separating the interface from the implementation. It enables objects to hide their state and to be manipulated only through their interface, reducing the likelihood of bugs and design errors while enhancing security and ease of use.

 