---
created: 19-04-2024 21:08
status: "#Draft 📝"
aliases:
  -  Base and Derived Classes
links: "[[Object Oriented Programming|OOP]]"
tags:
  - LearningIT
---
link: [[Object Oriented Programming|OOP]]

# Inheritance

## Overview

Inheretence is a fundamental concept in object-oriented programming that allows new classes to be created based on existing classes, enhancing code reusability and efficiency. By deriving a class from an existing one, new functionalities can be added or existing ones modified without the need to rewrite code.

>[!abstract] 
>Inheritance ensures that subclasses inherit the public and protected members of their parent class. However, it also mandates that subclasses cannot hide these inherited methods, nor can they avoid implementing the abstract methods defined in the superclass unless they themselves are declared abstract.

![[Pasted image 20231006153437.png]]

While most object-oriented languages restrict a class to inherit from only one superclass, they allow implementing multiple interfaces. This provides flexibility in adopting multiple behaviors or contracts, even though all subclasses of a class implementing an interface must also conform to that interface.

## Content

### Why Use Inheritance?

- **[[Code reuse|Code Reusability]]**: Inheritance promotes the reuse of existing code. You can create a new class from an existing class, modifying or extending it as needed.
- **Simplicity**: By using inherited properties and methods, new classes can be written with less code and complexity.
- Enhances the [[Polymorphism|Polymorphic Behavior]]  of the application .
### Implementation Overview

In C#, inheritance is implemented using the `:` symbol where the class on the right is the base class, and the class on the left is the derived class.


> [!example]+ Base and Derived Classes
> Consider the `Vehicle` class as a base class and `Car` as a derived class which extends `Vehicle`:
>``` csharp
>class Vehicle  // Base class (parent)
>{
>    public string brand = "Ford";  // Vehicle field
>    public void honk()             // Vehicle method
>    {
>        Console.WriteLine("Tuut, tuut!");
>    }
>}
>
>class Car : Vehicle  // Derived class (child)
>{
>    public string modelName = "Mustang";  // Car field
>}
>
>class Program
>{
>    static void Main(string[] args)
>    {
>        Car myCar = new Car();
>        myCar.honk();  // Calls the inherited method
>        Console.WriteLine(myCar.brand + " " + myCar.modelName);  // Accesses inherited field and own field
>    }
>}
>
>```

### Restricting Inheritance

To prevent a class from being inherited, C# uses the [[Sealed Keyword]]. Attempting to derive from a sealed class will result in a compilation error:


> [!error] 
>``` csharp
>sealed class Vehicle 
>{
>    // Sealed class content
>}
>
>class Car : Vehicle  // This will cause an error
>{
>    // Attempt to inherit from a sealed class
>}
>
>// Error: 'Car': cannot derive from sealed type 'Vehicle'
>
>```

This use of `sealed` ensures that the class cannot be extended, maintaining control over the inheritance chain and behavior customization.

## Summary

>[!summary]
>Inheritance in object-oriented programming allows for the creation of new classes based on existing ones, facilitating code reuse and system scalability. By extending classes, developers can enhance or modify functionalities without rewriting existing code. Inheritance structures help maintain a clean and manageable codebase, making systems easier to develop and maintain. The use of inheritance also supports the polymorphic use of objects, where a base class reference can be used to refer to any subclass object, promoting flexibility in the application's code.
>
>The `sealed` keyword in C# is a specific feature that prevents a class from being extended, thus safeguarding the design intentions of the original class developers against unintended derivations.

# Revision History
- **CreatedAt**: 19-04-2024 21:08
- **UpdatedAt**: `$= dv.current().file.mtime`

