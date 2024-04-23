---
created: 19-04-2024 20:53
aliases:
  - Dynamic Method Dispatch
  - Object Behavior Variability
  - Runtime Polymorphism
  - Polymorphic Behavior
  - Method Overriding Principles
links: "[[Object Oriented Programming|OOP]]"
tags:
  - LearningIT
  - bud🌿
---
link: [[Object Oriented Programming|OOP]]

# Polymorphism

## Overview

Polymorphism, derived from Greek words meaning "many forms," is a fundamental concept in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass. It is closely related to inheritance, as it allows classes to be related through their behaviors while retaining their own unique implementations of those behaviors.

>[!abstract] 
>Polymorphism enables a single action to be processed in different ways, and it's a key component of the [[Inheritance]] principle, which allows one class to inherit fields and methods from another.


## Content

### Practical Example

Consider a base class called `Animal` with a method named `animalSound()`. Various derived classes such as `Pig`, `Cat`, `Dog`, and `Bird` might implement this method to produce sounds appropriate to each type of animal:

> [!example]+ csharp
>```csharp
>class Animal  // Base class (parent) 
>{
>  public void animalSound() 
>  {
>    Console.WriteLine("The animal makes a sound");
>  }
>}
>
>class Pig : Animal  // Derived class (child) 
>{
>  public void animalSound() 
>  {
>    Console.WriteLine("The pig says: wee wee");
>  }
>}
>
>class Dog : Animal  // Derived class (child) 
>{
>  public void animalSound() 
>  {
>    Console.WriteLine("The dog says: bow wow");
>  }
>}
>
>class Program 
>{
>  static void Main(string[] args) 
>  {
>    Animal myAnimal = new Animal();  // Create a Animal object
>    Animal myPig = new Pig();  // Create a Pig object
>    Animal myDog = new Dog();  // Create a Dog object
>
>    myAnimal.animalSound();
>    myPig.animalSound();
>    myDog.animalSound();
>  }
>}
>```

The output will be:

`The animal makes a sound   The animal makes a sound   The animal makes a sound`

Not The Output I Was Looking For

The output from the example above was probably not what you expected. That is because the base class method overrides the derived class method, when they share the same name.

However, C# provides an option to override the base class method, by adding the `virtual` keyword to the method inside the base class, and by using the `override` keyword for each derived class methods

> [!example]+ csharp
>```csharp
>class Animal  // Base class (parent) 
>{
>  public virtual void animalSound() 
>  {
>    Console.WriteLine("The animal makes a sound");
>  }
>}
>
>class Pig : Animal  // Derived class (child) 
>{
>  public override void animalSound() 
>  {
>    Console.WriteLine("The pig says: wee wee");
>  }
>}
>
>class Dog : Animal  // Derived class (child) 
>{
>  public override void animalSound() 
>  {
>    Console.WriteLine("The dog says: bow wow");
>  }
>}
>
>class Program 
>{
>  static void Main(string[] args) 
>  {
>    Animal myAnimal = new Animal();  // Create a Animal object
>    Animal myPig = new Pig();  // Create a Pig object
>    Animal myDog = new Dog();  // Create a Dog object
>
>    myAnimal.animalSound();
>    myPig.animalSound();
>    myDog.animalSound();
>  }
>} 
>```

The output will be:
`The animal makes a sound   The pig says: wee wee   The dog says: bow wow`

With this setup, each `animalSound()` invocation respects the object's actual class, thanks to polymorphism. 

## Summary

> [!important] Benefits of Using Inheritance and Polymorphism:
> - **Code Reusability**: Leverage existing fields and methods when creating new classes. 
> - **Flexibility**: Implement shared methods differently across multiple subclasses. 
> - **Scalability**: Manage growing codebases more effectively by grouping common logic and extending it where necessary.


> [!summary] 
> Polymorphism is a fundamental concept in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass. It enables the same method to be used differently across various subclasses, enhancing the software's flexibility. This feature is crucial for creating expandable and easy-to-maintain systems. By using polymorphism, developers can write more general and reusable code, making the software easier to manage and extend. Through inheritance and method overriding, each class can exhibit unique behaviors while conforming to a universal interface, promoting efficient and adaptable coding practices.

# References

[Polymorphism](https://www.w3schools.com/cs/cs_polymorphism.php) - w3school
