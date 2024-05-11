---
created: 2024-04-14 17:55
aliases:
  - Kit Pattern
  - Factory System Pattern
  - Toolkit Pattern
  - Constructor Library Pattern
  - Abstract Factory
links: "[[Creational patterns]]"
tags:
  - LearningIT
  - evergreen🌳
---
link: [[Creational patterns]]

# Abstract Factory Pattern

## Overview

![[Pasted image 20231010130428.png]]

_Also known as: Virtual Constructor_

> [!abstract] **Abstract Factory** 
> **Abstract Factory** is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

## Content

### Intent

![[Pasted image 20231010155103.png]]
>[!danger]  Problem 
>Imagine that you’re creating a furniture shop simulator. Your code consists of classes that represent:
>1. A family of related products, say: Chair + Sofa + CoffeeTable . 
>2. Several variants of this family. For example, products **Chair + Sofa + CoffeeTable** are available in these variants: **Modern , Victorian , ArtDeco** .
>
>You need a way to create individual furniture objects so that they match other objects of the same family.
>A Modern-style sofa doesn’t match Victorian-style chairs.
>
>Also, you don’t want to change existing code when adding new products or families of products to the program. Furniture vendors update their catalogs very often, and you wouldn’t want to change the core code each time it happens.



> [!success]  **Solution** 
> **The Abstract [[Factory Method Pattern|Factory Pattern]]** addresses these challenges effectively. By defining interfaces for each product type within a family (Chair, Sofa, CoffeeTable), and ensuring all product variants comply with these interfaces, the application can manage furniture items more flexibly. Here’s how it works:
> 
> - Each style variant (Modern, Victorian, ArtDeco) is encapsulated within its own class hierarchy, enabling uniform style management across different product types.
> - An Abstract Factory interface is established, comprising methods like `createChair()`, `createSofa()`, and `createCoffeeTable()`. These methods return products that conform to the respective interfaces, ensuring stylistic consistency.
> - Separate factory classes for each style variant are implemented, such as `ModernFurnitureFactory`, each responsible for creating items in its specified style. This modular approach allows for easy adaptation to new styles or changes in product design.
> - Client code interacts with these factories through their abstract interfaces, allowing the application to switch between different furniture styles without altering the underlying operations. This abstraction also makes it possible to dynamically adjust the factory settings based on user preferences or configuration changes.

![[Pasted image 20231010155322.png]]

**Key Points:**

- The Abstract [[Factory Method Pattern|Factory Pattern]] facilitates the creation of compatible furniture families, ensuring stylistic consistency across different products.
- It decouples the client code from concrete implementations, enhancing the application's flexibility and maintainability.
- Factories are selected based on the application’s configuration or environment settings, allowing dynamic integration of various product styles.

![[Pasted image 20231010155511.png]]

> [!important] **Client Flexibility** 
> Clients can seamlessly interact with furniture items across different styles without concern for the underlying implementations, promoting a versatile and user-friendly application environment.

### Structure

![[Pasted image 20231010160849.png]]

**Abstract Products:**

- Declare interfaces for a set of distinct but related products which constitute a product family. (e.g., IChair, ISofa, ITable)

**Concrete Products:**

- Represent various implementations of abstract products, categorized by variants.
- Each abstract product (e.g., IChair, ISofa) must be implemented in all given variants (e.g., VictorianChair, ModernSofa).

**Abstract Factory:**

- Declare a set of methods for creating each abstract product. (e.g., IChair CreateChair(), ISofa CreateSofa())

**Concrete Factories:**

- Implement creation methods defined in the abstract factory.
- Each concrete factory corresponds to a specific variant of products and creates only those product variants.
    - VictorianFactory: IFactory
    - ModernFactory: IFactory

### Applicability

- **Product Family Independence**: Use the Abstract Factory when your code needs to operate with various families of related products without depending on their concrete classes. This setup is particularly useful when the exact product families are not known in advance or when you anticipate adding new families in the future.
- **Centralizing Product Creation**: Implement the Abstract Factory when you want to centralize the creation logic for a group of related products. This is especially beneficial when you have multiple factory methods scattered across a class, which can obscure its main responsibilities.

### How to Implement

1. **Define Product Families:**
   
    - Map out a matrix of product types (e.g., Chair, Sofa, Table) against their styles (e.g., Modern, Victorian, ArtDeco).
2. **Create Abstract Product Interfaces:**
   
    - Establish abstract interfaces for each product type, ensuring all variants will implement these interfaces.
3. **Develop Abstract Factory Interface:**
   
    - Create an abstract factory interface that includes methods for producing each abstract product.
4. **Construct Concrete Factory Classes:**
   
    - Develop specific factory classes for each product family. These classes should implement the factory methods to produce the appropriate products.
5. **Initialize Factories:**
   
    - Set up factory initialization logic within your application to select and instantiate an appropriate concrete factory based on the configuration or environment.
6. **Integrate Factory Methods:**
   
    - Replace all direct product construction calls in your code with calls to factory methods, thereby using the factory to obtain product instances.

### Pros and Cons
> [!success] **Advantages**
> 
> - **Compatibility Assurance**: Ensures all products from a factory are compatible with each other.
> - **Decoupling**: Reduces dependency between the client code and concrete products.
> - **[[Single Responsibility Principle]]**: Adheres to the Single Responsibility Principle by centralizing product creation, simplifying maintenance.
> - **[[Open Closed Principle]]**: Supports the Open/Closed Principle, enabling the introduction of new product variants without affecting existing code.

> [!warning] **Disadvantages**
> 
> - **Increased Complexity**: Introduces multiple new interfaces and classes, which can complicate the codebase unnecessarily.
>   

### Relations with Other Patterns

- **[[Factory Method Pattern]]:** - Often, designs begin with the [[Factory Method Pattern|Factory Method]] Pattern due to its simplicity and customization through subclasses. As requirements evolve, they may transition towards more flexible patterns like Abstract Factory, Prototype, or [[Builder Pattern|Builder]] Pattern. 
- **[[Builder Pattern]]:** - [[Builder Pattern|Builder]] Pattern focuses on incrementally constructing complex objects, whereas Abstract Factory specializes in creating families of related objects. Abstract Factory immediately returns the product, while [[Builder Pattern|Builder]] Pattern allows for additional construction steps before fetching the product. 
- **[[Facade Pattern]]:** - Abstract Factory can serve as an alternative to the [[Facade Pattern|Facade]] Pattern when the objective is solely to conceal the creation process of subsystem objects from the client code. 
- **[[Bridge Pattern]]:** - Abstract Factory can be effectively used in conjunction with the [[Bridge Pattern|Bridge]] Pattern. This combination is beneficial when certain abstractions defined by the [[Bridge Pattern|Bridge]] Pattern are constrained to work with specific implementations. Abstract Factory can encapsulate these relationships, abstracting away complexity from the client code. 
- **[[Singleton Pattern]]:** - Abstract Factories, [[Builder Pattern|Builder]] Pattern, and Prototype Pattern can all be implemented as [[Singleton Pattern|Singleton]] Patterns. This ensures that only a single instance of these patterns exists throughout the application, providing centralized control over their instantiation.

## Examples

![[Pasted image 20231010213849.png]]

This C# code illustrates the **Abstract Factory** design pattern, which is used to create groups of related objects without specifying their concrete classes:

> [!abstract]+  **Components of the Implementation**
>1. **Interfaces (`IButton`, `ICheckBox`)** - Define common operations for GUI elements.
>2. **Concrete Classes (`WinButton`, `WinCheckBox`, `MacButton`, `MacCheckBox`)** - Specific implementations for Windows and Mac platforms that render buttons and checkboxes according to platform standards.
>3. **Factory Interface (`IGUIFactory`)** - Specifies methods to create buttons and checkboxes. This layer abstracts the creation process from the concrete product.
>4. **Concrete Factories (`WinFactory`, `MacFactory`)** - Implement the factory interface to produce GUI elements for Windows and Mac, enabling platform-specific customization.
>5. **Service Class (`SomeService`)** - Manages GUI elements using a factory determined by the operating system configuration, showcasing the pattern's ability to switch between product families dynamically.
>6. **Program Flow (`Main`)** - Demonstrates how to use the service to render GUI elements and how client code interacts with the factory abstraction to remain decoupled from product instantiation details.
 
This setup ensures GUI element compatibility and simplifies maintenance and extension of the codebase by segregating the creation logic into distinct factory classes..

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/AbstractFactory/Program.cs)
> [!example]- csharp
>``` csharp
> using System;
>namespace AbstractFactory.Conceptual
>{  
>// Interface for Buttons
>    public interface IButton
>    {
>        void Paint();
>    }
>
>    // Interface for CheckBoxes
>    public interface ICheckBox
>    {
>        void Paint();
>    }
>
>    // Concrete implementation for Windows Button
>    class WinButton : IButton
>    {
>        public void Paint()
>        {
>            Console.WriteLine("This is a Windows Button");
>        }
>    }
>
>    // Concrete implementation for Windows CheckBox
>    class WinCheckBox : ICheckBox
>    {
>        public void Paint()
>        {
>            Console.WriteLine("This is a Windows CheckBox");
>        }
>    }
>
>    // Concrete implementation for Mac Button
>    class MacButton : IButton
>    {
>        public void Paint()
>        {
>            Console.WriteLine("This is a Mac Button");
>        }
>    }
>
>    // Concrete implementation for Mac CheckBox
>    class MacCheckBox : ICheckBox
>    {
>        public void Paint()
>        {
>            Console.WriteLine("This is a Mac CheckBox");
>        }
>    }
>
>    // Factory interface for GUI elements
>    public interface IGUIFactory
>    {
>        IButton CreateButton();
>        ICheckBox CreateCheckBox();
>    }
>
>    // Factory for Windows GUI elements
>    public class WinFactory : IGUIFactory
>    {
>        public IButton CreateButton()
>        {
>            return new WinButton();
>        }
>
>        public ICheckBox CreateCheckBox()
>        {
>            return new WinCheckBox();
>        }
>    }
>
>    // Factory for Mac GUI elements
>    public class MacFactory : IGUIFactory
>    {
>        public IButton CreateButton()
>        {
>            return new MacButton();
>        }
>
>        public ICheckBox CreateCheckBox()
>        {
>            return new MacCheckBox();
>        }
>    }
>
>    // Service that configures and uses GUI elements
>    public class SomeService
>    {
>        private IGUIFactory _factory;
>        private IButton _button;
>        private ICheckBox _checkBox;
>
>        public SomeService(string configOS)
>        {
>            // Initialize the correct factory based on configuration
>            switch (configOS)
>            {
>                case "Windows":
>                    _factory = new WinFactory();
>                    break;
>                case "Mac":
>                    _factory = new MacFactory();
>                    break;
>                default:
>                    _factory = new WinFactory(); // Default to Windows
>                    break;
>            }
>
>            _button = _factory.CreateButton();
>            _checkBox = _factory.CreateCheckBox();
>        }
>
>        public void PaintAllElements()
>        {
>            _button.Paint();
>            _checkBox.Paint();
>        }
>    }
>
>    class Program
>    {
>        static void Main(string[] args)
>        {
>            IGUIFactory factory;
>            // Configuration for OS type, should be set based on actual system settings
>            string configOS = "Windows";
>            var service = new SomeService(configOS);
>
>            // Paint GUI elements without direct access to the factory
>            Console.WriteLine("Rendering GUI elements using encapsulated factory methods.");
>            service.PaintAllElements();
>
>            // Accessing factory and GUI elements through an abstraction layer
>            Console.WriteLine("Accessing GUI elements through factory abstraction.");
>            factory = service.GetFactory();
>            var button = factory.CreateButton();
>            var checkBox = factory.CreateCheckBox();
>            button.Paint();
>            checkBox.Paint();
>        }
>    }
>}
>
>```

> [!note]
> - To implement correct default behavior we should have default implementation in our Abstract Factory (IGUIFactory) and default behavior in our elements (IButton, ICheckBox).
> - For this default implementation we should better use an **abstract class** instead of an interface.


> [!note]
> Here we have examples of how we can encapsulate abstraction or use it directly while hiding concrete implementations. These are two different levels of encapsulation and we can use both approaches according to our needs.

## Summary

>[!summary]- **Cheat Sheet**
>**Purpose**:
>- Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
>- Allows the code to be independent of how its products are created, composed, and represented.
>
>**Components**:
>- **Abstract Factory**: An interface that declares a set of methods for creating each of the abstract products.
>- **Concrete Factory**: Implements the abstract factory interface and returns products of a specific family.
>- **Abstract Products**: A set of related products that belong to a product family.
>- **Concrete Products**: Specific implementations of abstract products, grouped by variants.
>- **Client**: Code that uses the abstract factory and the abstract products interfaces. It can work with any user-defined concrete factory/product variant.
>
>**Usage**:
>- Use when the system should be independent of how its products are created, composed, and represented.
>- Use when the system needs to be configured with one of multiple families of products.
>
>**Benefits**:
>- Isolates concrete classes: The factory encapsulates the responsibility and the process of creating product objects.
>- Promotes consistency among products: When products are designed to work together, a factory can ensure these products are compatible.
>- Supports new kinds of products: Adding a new product family is easy because the abstract factory interface has fixed interfaces.
>
>**Common Scenarios**:
>- User interface kits where different operating systems require different visual appearances and behavior using the same abstract interface.
>- Tools for working with various database platforms, each with specific configurations, behaviors, and appearances.

^426b21


# References

https://refactoring.guru/design-patterns