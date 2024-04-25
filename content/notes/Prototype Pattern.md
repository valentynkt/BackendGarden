---
created: 2024-04-14 19:41
aliases:
  - Clone Pattern
  - Object Copying Pattern
  - Prototype Instance Pattern
  - Cloning Pattern
tags:
  - LearningIT
  - evergreen🌳
links: "[[Creational patterns]]"
---
link: [[Creational patterns]]

# Prototype Pattern

## Overview

![[Pasted image 20231012162959.png]]

Also known as: Clone

>[!abstract] 
>Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

## Content

### Intent

> [!danger]  **Problem** 
>Say you have an object, and you want to create an exact copy of it. How would you do it? First, you have to create a new object of the same class. Then you have to go through all the fields of the original object and copy their values over to the new object. 
>
>Nice! But there’s a catch. Not all objects can be copied that way because some of the object’s fields may be private and not visible from outside of the object itself.
>
>![[Pasted image 20231013022449.png]]
>
>Copying an object “from the outside” isn’t always possible
>
>There’s one more problem with the direct approach. Since you have to know the object’s class to create a duplicate, your code becomes dependent on that class. If the extra dependency doesn’t scare you, there’s another catch. Sometimes you only know the interface that the object follows, but not its concrete class, when, for example, a parameter in a method accepts any objects that follow some interface.

> [!success]  **Solution** 
> The Prototype pattern delegates the cloning process to the actual objects that are being cloned. The pattern declares a common interface for all objects that support cloning. This interface lets you clone an object without coupling your code to the class of that object. Usually, such an interface contains just a single clone method.
>
>The implementation of the clone method is very similar in all classes. The method creates an object of the current class and carries over all of the field values of the old object into the new one. You can even copy private fields because most programming languages let objects access private fields of other objects that belong to the same class.
>
>![[Pasted image 20231013022556.png]]
>
>Pre-built prototypes can be an alternative to subclassing.
>
>An object that supports cloning is called a prototype. When your objects have dozens of fields and hundreds of possible configurations, cloning them might serve as an alternative to subclassing.
>
>Here’s how it works: you create a set of objects, configured in various ways. When you need an object like the one you’ve configured, you just clone a prototype instead of constructing a new object from scratch

### Structure

![[Pasted image 20231013022712.png]]
1. **Prototype** interface declares the cloning methods. In most cases, it’s a single clone method.
2. **Concrete Prototype** class implements the cloning method. In addition to copying the original object’s data to the clone, this method may also handle some edge cases of the cloning process related to cloning linked objects, untangling recursive dependencies, etc.
3. **Client** can produce a copy of any object that follows the prototype interface

>[!tip] 
>- Instead of ConcretePrototype we can use abstract class for our base Prototype and have there our base logic. The example below merge Prototype and ConcretePrototype in one abstraction

> [!example]- csharp
>``` csharp
> // Base prototype.
>    public abstract class Shape
>    {
>        public int X { get; set; }
>        public int Y { get; set; }
>        public string Color { get; set; }
>        // regular constructor
>        protected Shape()
>        {
>
>        }
>
>        protected Shape(Shape source) : this()
>        {
>            this.X = source.X;
>            this.Y = source.Y;
>            this.Color = source.Color;  
>        }
>        public abstract Shape Clone();
>    }
>```

### Applicability

- **Use the Prototype pattern** when your code needs to work with objects passed from third-party code via some interface, and you want the client code to be independent of the concrete classes of these objects. By providing a general interface for cloning, the Prototype pattern ensures that the client code can work with all objects supporting cloning without relying on their specific concrete classes.
- **Use the pattern** when you aim to reduce the number of subclasses that only differ in the way they initialize their respective objects. For instance, if you have a complex class that requires laborious configuration before use, and this configuration code is scattered throughout your application, creating multiple subclasses with common configuration code in their constructors can lead to duplication. Instead, using the Prototype pattern allows you to use pre-built objects configured in various ways as prototypes. This approach eliminates the need for creating numerous subclasses and simplifies the process by allowing the client to clone an appropriate prototype rather than instantiating a matching subclass.

### How to Implement

1. **Create the prototype interface** and declare the `clone` method within it. Alternatively, add the `clone` method to all classes in an existing class hierarchy, if applicable.
2. **Define a prototype class** with an alternative constructor that accepts an object of the same class as an argument. Within this constructor, copy the values of all fields defined in the class from the passed object into the newly created instance. Ensure that subclasses call the parent constructor to handle the cloning of private fields.
3. **Implement the cloning method** in each class by invoking the `new` operator with the appropriate constructor. It's crucial to explicitly override the cloning method in each class and use its own class name alongside the `new` operator to ensure the correct object is cloned. Failure to do so may result in the cloning method producing an object of a parent class.
4. **Optionally, create a centralized prototype registry** to store frequently used prototypes. This registry can be implemented as a new factory class or integrated into the base prototype class with a static method for retrieving the prototype. The retrieval method should search for a prototype based on specified criteria provided by the client code. This criteria could be a simple string tag or a more complex set of search parameters. Once the appropriate prototype is located, the registry should clone it and return the copy to the client. Replace direct calls to subclass constructors with calls to the factory method of the prototype registry.

### Pros and Cons

> [!success] **Advantages**
> - You can clone objects without coupling to their concrete classes.
> - You can get rid of repeated initialization code in favor of cloning pre-built prototypes.
> - You can produce complex objects more conveniently.
> - You get an alternative to inheritance when dealing with configuration presets for complex objects.

> [!warning] **Disadvantages**
> Cloning complex objects that have circular references might be very tricky.

### Relations with Other Patterns

- [[Abstract Factory Pattern]] classes are often based on a set of [[Factory Method Pattern]], but you can also use Prototype to compose the methods on these classes.
- [[Prototype Pattern]] can be beneficial when you need to save copies of Commands into history.
- Designs heavily using [[Composite Pattern]] and [[Decorator Pattern]] can often benefit from Prototype. Applying the pattern allows you to clone complex structures instead of reconstructing them from scratch.
- [[Prototype Pattern]] doesn’t rely on inheritance, avoiding its drawbacks. However, Prototype requires a complicated initialization of the cloned object. In contrast,[[Factory Method Pattern]] relies on inheritance but doesn’t necessitate an initialization step.
- Sometimes Prototype can serve as a simpler alternative to [[Memento]]. This is feasible if the object whose state you want to store in the history is relatively straightforward and doesn’t have links to external resources, or if the links are easy to re-establish.
- [[Abstract Factory Pattern]], [[Builder Pattern]], and Prototype Pattern can all be implemented as [[Singleton Pattern]].

## Examples

In this example, the Prototype pattern lets you produce exact copies of geometric objects, without coupling the code to their classes.
![[Pasted image 20231013023259.png]]
Cloning a set of objects that belong to a class hierarchy.

All shape classes follow the same interface, which provides a cloning method. A subclass may call the parent’s cloning method before copying its own field values to the resulting object.

> [!abstract]+  **Components of the Implementation**
>1. **Base Prototype (`Shape`)** - An abstract class that serves as the prototype for cloning. It defines common properties (`X`, `Y`, `Color`) and includes a clone method (`Clone`) that concrete implementations must override. The class also provides a protected constructor for copying these properties from an existing instance.
>2. **Concrete Prototypes (`Rectangle`, `Circle`)** - These classes extend the `Shape` base class and include additional properties specific to their respective shapes (`Width` and `Height` for `Rectangle`; `Radius` for `Circle`). They override the `Clone` method to return a new instance of themselves, ensuring that all properties, both inherited and specific, are copied.
>3. **Cloning Method (`Clone`)** - Defined abstractly in `Shape` and implemented by each concrete prototype. This method uses the copy constructor to create a deep copy of the object, preserving the unique and shared properties of the shape.

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/Prototype/Program.cs)

> [!example]- csharp
>``` csharp
>using System;
>using System.Collections.Generic;
>using System.Text;
>
>namespace Prototype.Conceptual
>{
>    // Base prototype.
>    public abstract class Shape
>    {
>        public int X { get; set; }
>        public int Y { get; set; }
>        public string Color { get; set; }
>        // regular constructor
>        protected Shape()
>        {
>
>        }
>
>        protected Shape(Shape source) : this()
>        {
>            this.X = source.X;
>            this.Y = source.Y;
>            this.Color = source.Color;  
>        }
>        public abstract Shape Clone();
>    }
>
>    public class Rectangle : Shape
>    {
>        public int Width { get; set; }
>        public int Height { get; set; }
>
>        public Rectangle()
>        {
>            
>        }
>        // A parent constructor call is needed to copy private
>        // fields defined in the parent class.
>        public Rectangle(Rectangle source) : base(source)
>        {
>           this.Width = source.Width;
>           this.Height = source.Height;
>        }
>
>        public override Shape Clone()
>        {
>           return new Rectangle(this);
>        }
>    }
>
>    public class Circle : Shape
>    {
>        public int Radius { get; set; }
>
>        public Circle()
>        {
>            
>        }
>
>        // A parent constructor call is needed to copy private
>        // fields defined in the parent class.
>
>        public Circle(Circle source) : base(source)
>        {
>            this.Radius = source.Radius;
>        }
>
>        public override Shape Clone()
>        {
>            return new Circle(this);
>        }
>    }
>}
>
>```

## Summary

>[!summary]- **Cheat Sheet**
>**Purpose**:
>- Allows objects to be created by copying a prototypical instance, using cloning.
>- Well-suited for scenarios where object creation is expensive and requires a lot of resources.
>
>**Components**:
>- **Prototype**: An interface that standardizes the cloning method.
>- **Concrete Prototype**: Implements the cloning method to create duplicate objects.
>- **Client**: Modifies the clone according to its needs.
>
>**Usage**:
>- Use when the classes to instantiate are specified at runtime, for instance, by dynamic loading.
>- Use when avoiding building a class hierarchy of factories that parallels the class hierarchy of products.
>- Use when instances of a class can have one of only a few different combinations of state.
>
>**Benefits**:
>- Adds and removes products dynamically.
>- Specifies new objects by varying values.
>- Reduces subclassing.
>
>**Common Scenarios**:
>- Implementing undo/redo operations where states are saved and restored.
>- Generating complex, repeatable configurations on the fly.

>[!note]- Personal Thoughts
>- Prototype patter can help us to copy even base private fields from object if they follow the same interface because we can pass our object to base constructor - 
**ctor : base(obj)**
>- We can also have several methods of copy, for example [[Shallow Copy and Deep Copy]]
>- We can merge Prototype and ConcretePrototype using abstract class with default implementation.

# References

https://refactoring.guru/design-patterns