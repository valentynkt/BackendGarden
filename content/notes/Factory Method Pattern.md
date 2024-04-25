---
created: 2024-04-14 16:35
aliases:
  - Virtual Constructor Pattern
  - Creator Pattern
  - Factory Pattern
  - Constructor Pattern
links: "[[Creational patterns]]"
tags:
  - LearningIT
  - evergreen🌳
---
link: [[Creational patterns]]

# Factory Method Pattern

## Overview

![[Pasted image 20231009190305.png]]

_Also known as: Virtual Constructor_

> [!abstract] **Factory Method** 
> The Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

## Content

### Intent:

> [!danger]  **Problem** 
> In a logistics management application, the initial design only supported truck transportation, making it difficult to integrate sea transportation without modifying a lot of code tightly coupled with the Truck class.

![[Pasted image 20231009190706.png]]

> [!success]  **Solution** 
> The Factory Method pattern introduces a special factory method to manage object creation. This allows for extending the application to support new transportation modes by simply changing the factory method in a subclass to produce different products.

![[Pasted image 20231009193330.png]] ![[Pasted image 20231009193351.png]]

As long as all product classes implement a common interface, their objects can be passed to the client code without breaking it.

![[Pasted image 20231009193419.png]]

> [!important] **Client Awareness** 
> The client interacts with transport objects knowing they must have a deliver method, without needing to understand the specifics.

### Structure

![[Pasted image 20231009193705.png]]

1. **Product Interface (IProduct):**
    
    - This interface is common to all objects that can be produced by the creator and its subclasses.
2. **Concrete Products (ConcreteProduct1, ConcreteProduct2, etc.):**
    
    - These are implementations of the Product interface, each providing a different variant of the product.
3. **Creator Class:**
    
    - This class declares the factory method that returns new product objects. It may contain core business logic related to products.
4. **Concrete Creators:**
    
    - These classes override the factory method to return different types of products. They can also manage object reuse, such as caching or pooling.

> [!important] **Relation with [[Abstract Factory Pattern]]**
>  Using multiple factory methods can lead to a pattern similar to the Abstract Factory, which manages families of products.

### Applicability

 **When to Use Factory Method**
 - **Unknown Object Types at Compile Time:**
     - Ideal when you cannot specify the types of objects your code must work with upfront.
 - **Extensibility for Libraries and Frameworks:**
     - Allows library users to extend components by subclassing and overriding the factory method.
 - **Resource Management:**
     - Useful for managing resource-intensive objects like database connections or network sessions through pooling.

### How to Implement

1. **Define the Product Interface:**
    
    - Begin by creating an interface or abstract class for the products.
2. **Create the Creator Class:**
    
    - Develop an abstract class with a factory method that returns an object of the product type.
3. **Implement Concrete Creators:**
    
    - Create subclasses for each specific product type, implementing the factory method to produce the product.
4. **Configure with Parameters (Optional):**
    
    - Use parameters in the factory method to dynamically select the product type during runtime.
5. **Usage of the Factory Method:**
    
    - In client code, use the factory to instantiate objects, ensuring decoupling from concrete product classes.

### Pros and Cons

> [!success] **Advantages**
> 
> - **Flexibility and Decoupling:** The pattern allows systems to create objects without specifying the exact classes of the objects that will be created, simplifying the linkage between different parts of the application.
> - **[[Single Responsibility Principle]]:** It separates the product creation into distinct classes, simplifying system architecture and enhancing maintainability.
> - **[[Open Closed Principle]]:** It facilitates the addition of new types of products without altering existing code, enabling extensions through the addition of new creator subclasses.

> [!warning] **Disadvantages**
> 
> - **Increases Complexity:** The architecture may become more complex as the pattern introduces many new interfaces and classes.
> - **Class Proliferation:** Each new product type may necessitate a new creator class, potentially leading to an overwhelming number of classes.
> - **Integration Challenges:** Implementing this pattern might require significant changes if the existing architecture doesn’t support it, potentially leading to extensive modifications.

### Relations with Other Patterns

- **Factory Method and [[Abstract Factory Pattern]]y**:
    - Factory Method often serves as a stepping stone to the Abstract Factory pattern. While Factory Method involves subclassing to extend product types, Abstract Factory groups these factories based on themes or variants without specifying their concrete classes.
    - Abstract Factory setups can incorporate Factory Methods to manage object creation, offering a structured yet flexible approach to instantiation.
- **[[Prototype Pattern]]**:
    - Unlike Factory Method, which uses inheritance and relies on subclasses to handle object creation, the Prototype pattern creates objects by cloning a prototypical instance. This method avoids the pitfalls of inheritance but requires careful handling of the cloning process.
- **[[Template Method Pattern]]**:
    - Factory Method can be seen as a derivative of the Template Method pattern, which outlines the skeleton of an operation in a method, deferring some steps to subclasses. It effectively uses inheritance to vary parts of the algorithm.
    - Factory Methods can also be integrated into Template Methods as one of the steps in the algorithm, particularly for creating objects within the method's framework.

## Examples
  
This C# code demonstrates the **Factory Method** design pattern, which is used to delegate the creation of objects to subclass methods. This approach allows classes to instantiate objects without specifying their exact classes.


> [!abstract]+  **Components of the Implementation**
>1. **Creator (`Creator`)** - An abstract class that defines the `FactoryMethod`, which subclasses override to create specific types of products. It also includes a `PerformOperation` method that uses the product created by the factory method.
>2. **Concrete Creators (`ConcreteCreator1`, `ConcreteCreator2`)** - These subclasses of `Creator` implement the `FactoryMethod` to return instances of `ConcreteProduct1` and `ConcreteProduct2`, respectively.
>3. **Product Interface (`IProduct`)** - An interface that specifies the operations (`Operation`) that all concrete products must implement.
>4. **Concrete Products (`ConcreteProduct1`, `ConcreteProduct2`)** - Implementations of the `IProduct` interface, each providing a unique behavior for the `Operation` method.
>5. **Client (`Client`)** - Demonstrates the use of the `Creator` classes by executing code that works with instances of the concrete creators without depending on their concrete classes.
>6. **Program Flow (`Program`)** - Contains the `Main` method, the starting point of the application, which showcases how the Factory Method pattern is employed through dynamic instantiation of different creator classes.

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/FactoryMethod/Program.cs)


> [!example]- csharp
>``` csharp
>// The 'Creator' abstract class defines the method for creating products.
>abstract class Creator
>{
>    // Factory Method that subclasses will override to create specific products.
>    public abstract IProduct FactoryMethod();
>
>    // Common operation using the product created by the factory method.
>    public string PerformOperation()
>    {
>        var product = FactoryMethod();
>        return $"Creator: The product's operation result is {product.Operation()}";
>    }
>}
>
>// 'ConcreteCreator1' creates a specific 'ConcreteProduct1'.
>class ConcreteCreator1 : Creator
>{
>    public override IProduct FactoryMethod() => new ConcreteProduct1();
>}
>
>// 'ConcreteCreator2' creates a specific 'ConcreteProduct2'.
>class ConcreteCreator2 : Creator
>{
>    public override IProduct FactoryMethod() => new ConcreteProduct2();
>}
>
>// The 'Product' interface defines operations that all concrete products must implement.
>public interface IProduct
>{
>    string Operation();
>}
>
>// 'ConcreteProduct1' is a specific product implementing 'IProduct'.
>class ConcreteProduct1 : IProduct
>{
>    public string Operation() => "{Result of ConcreteProduct1}";
>}
>
>// 'ConcreteProduct2' is another specific product implementing 'IProduct'.
>class ConcreteProduct2 : IProduct
>{
>    public string Operation() => "{Result of ConcreteProduct2}";
>}
>
>// The 'Client' class demonstrates how to use the 'Creator' classes.
>class Client
>{
>    public void Main()
>    {
>        Console.WriteLine("App: Launched with ConcreteCreator1.");
>        ClientCode(new ConcreteCreator1());
>        Console.WriteLine();
>        Console.WriteLine("App: Launched with ConcreteCreator2.");
>        ClientCode(new ConcreteCreator2());
>    }
>
>    // The client code works with an instance of a concrete creator,
>    // although through its base interface.
>    public void ClientCode(Creator creator)
>    {
>        Console.WriteLine("Client: I'm not aware of the creator's class, but it still works.");
>        Console.WriteLine(creator.PerformOperation());
>    }
>}
>
>// Entry point of the application.
>class Program
>{
>    static void Main(string[] args)
>    {
>        new Client().Main();
>    }
>}
>
>```

Overall, this code is a clear example of the Factory Method pattern, illustrating how it can be used to decouple object creation from its usage, allowing for flexibility and easier maintenance.

## Summary

>[!summary]- **Cheat Sheet**
>**Purpose**:
>
>- Simplifies object creation by allowing classes to delegate this responsibility to subclasses, thus providing flexibility in determining which objects to instantiate.
>- Facilitates the addition of new product classes without altering existing code, by relying on inheritance and polymorphism.
>
>**Components**:
>- **Creator (abstract class)**: An abstract class that declares the factory method, which returns an object of a `Product` type. This class also can define a default behavior of the factory method that returns a default `Product` object.
>- **Concrete Creators**: Subclasses of the `Creator` that override the factory method to return an instance of a specific `Product`.
>- **Product (interface or abstract class)**: An interface or an abstract class which defines the products to be created.
>- **Concrete Products**: Implementations of the `Product` interface or subclasses of the `Product` abstract class that define product objects to be created by the concrete creators.
>
>**Usage**:
>- Define a `Product` interface or an abstract class to outline the structure of products.
>- Create concrete product classes that implement this interface or inherit from the abstract class.
>- Develop a `Creator` abstract class with a method that returns objects of the `Product` type.
>- Implement concrete creator classes that extend the `Creator` class and override the factory method to create specific product instances.
>- Use the concrete creators to generate new product objects, allowing for dynamic changes in product instantiation based on the concrete creator class used.
>
>**Benefits**:
>- Increases the flexibility of systems by isolating the product creation code from the product use code.
>- Supports the Open/Closed Principle by allowing the system to introduce new types of products without modifying existing client code.
>- Encapsulates product knowledge into a single location, simplifying code maintenance and enhancing scalability.


>[!note]- Personal Thoughts
>-  When dealing with the creation of multiple products within our concrete factory and having only one dimension of products (e.g., WinButton, MacButton, LinuxButton), it's feasible to utilize the Factory Method pattern effectively. Abstract Factory pattern might be overkill in this scenario.  
>- However, if we encounter situations where we have two dimensions of products, resulting in a multiplication of possibilities (e.g., WinButton, MacButton, LinuxButton, WinCheckbox, MacCheckbox, LinuxCheckbox), Abstract Factory pattern becomes more suitable. It provides a structured approach to handle the creation of related product families.

## Reference:

https://refactoring.guru/design-patterns
 
 