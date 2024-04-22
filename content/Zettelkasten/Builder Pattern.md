---
created: 14-04-2024 19:12
status: ReadyForPublication 🚀
aliases:
  - Object Builder Pattern
  - Construction Interface Pattern
  - Director Pattern
  - Complex Constructor Pattern
links: "[[Creational patterns]]"
tags:
  - LearningIT
---
link: [[Creational patterns]]
# Builder Pattern

## Overview

![[Pasted image 20231011195426.png]]

>[!abstract] Builder
>**Builder** is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

## Content

### Intent

> [!danger]+ **Problem** 
> ![[Pasted image 20231011195525.png]]
> Creating complex objects often involves a cumbersome initialization process, involving a constructor with many parameters, or scattered initialization across the client code. This can be seen in scenarios such as building a house, where a simple structure requires basic elements like walls and a roof, but more complex structures involve additional features like plumbing and electrical systems. Managing these through subclassing leads to a proliferation of classes, while a constructor with numerous parameters can make calls messy and inefficient, as many parameters are unused in most instances.
> ![[Pasted image 20231011195616.png]]

> [!success]+ **Solution** 
> ![[Pasted image 20231011195803.png]]
> The Builder pattern addresses this by separating the construction of a complex object from its class, using separate builder objects. This pattern allows for the construction of various parts of an object step-by-step, isolating the construction complexity from the main class. Different builders can implement these steps in different ways, allowing for the creation of diverse objects using the same construction process. This modular approach simplifies the creation process and enhances the flexibility and reusability of the construction code.
> ![[Pasted image 20231011200352.png]]

**Different builders execute the same task in various ways**

For example, one builder might use wood and glass, another stone and iron, and a third gold and diamonds. Calling the same set of steps with these builders you get a regular house, a small castle, and a palace, respectively.
### Director
![[Pasted image 20231011200658.png]]

The Director enhances the Builder pattern by orchestrating the construction steps needed to build a product. It specifies the sequence of operations to ensure products are built correctly, while builders implement these operations.

**Role of the Director:**
- **Orchestration:** The Director determines the order of construction steps, ensuring they're executed correctly to build the product.
- **Decoupling:** It helps to separate the construction process from the specific parts being built, simplifying the client code. The client doesn't need to know the details of object construction, just how to initiate it.

**Benefits:**
- **Reusability:** Centralizes common construction routines, making it easy to reuse them across different parts of the application.
- **Simplicity for Clients:** Clients interact with a simple interface to build objects, without needing to understand the underlying building process.

Including a Director in the Builder pattern is optional but beneficial for managing complex construction sequences and providing a clear, reusable approach to building objects in your system.
### Structure

![[Pasted image 20231011200818.png]]

- **Builder Interface:** This interface outlines the steps required to construct different parts of a product. It is common to all builders, ensuring they all provide the same operations.
- **Concrete Builders:** Implement the builder interface and provide specific implementations of the building steps. Each builder can create a different type of product with various features and representations.
- **Products:** The complex objects created by the builders. These products can vary widely in their structure and complexity, depending on how the concrete builders implement the building steps.
- **Director Class:** Manages the order in which to execute the building steps to construct a product. The director uses the builder interface to execute the necessary steps in the correct order. This helps to build objects according to a specific plan or configuration.
- **Client:** The client creates a director object and configures it with the desired builder object. The client then calls construction methods on the director, which directs the builder to assemble the final product. The client retrieves the product from the builder after construction is complete.
  
### Applicability

- **Complex Constructor Scenarios:** Use the Builder pattern to avoid complex constructors with many optional parameters. This is particularly useful when objects require various combinations of ingredients or configurations, which can lead to a proliferation of constructor signatures.
- **Step-by-Step Construction:** The Builder pattern is ideal when an object needs to be assembled step-by-step especially when the assembly process involves several steps, and the order of assembly might vary depending on the specifics of the data or the required configuration.
- **Different Representations:** Employ the Builder pattern when creating various representations of the same product (like different types of houses or pizzas) without cluttering up the code with numerous specific classes. This pattern allows you to produce different types and representations of an object using the same construction process.
- **Complex Compositions:** The Builder pattern simplifies the construction of complex compositions, particularly when you need to produce a complex object that requires meticulous assembly of various parts. A typical scenario might involve constructing a Composite tree where different nodes might have different requirements and configurations. and avoid the complexity of overloaded constructors.
Here’s how the Builder pattern can be applied in practice to streamline object construction and enhance code manageability:

> [!example]- csharp
>``` csharp
>// Simplified example without overloaded constructors
>public class PizzaBuilder {
>    private int size;
>    private bool cheese;
>    private bool pepperoni;
>
>    public PizzaBuilder SetSize(int size) {
>        this.size = size;
>        return this;
>    }
>
>    public PizzaBuilder AddCheese() {
>        this.cheese = true;
>        return this;
>    }
>
>    public PizzaBuilder AddPepperoni() {
>        this.pepperoni = true;
>        return this;
>    }
>
>    public Pizza Build() {
>        return new Pizza(size, cheese, pepperoni);
>    }
>}
>
>// Usage
>var pizza = new PizzaBuilder().SetSize(12).AddCheese().Build();
>
>```

### How to Implement

1. **Define Builder Interface:** Start by defining a builder interface with methods corresponding to the construction steps required for your product. This interface ensures that all concrete builders will implement these steps.
2. **Create Concrete Builders:** For each variant of the product, create a concrete builder class that implements the builder interface. Each of these classes will define specific implementations for the construction steps defined in the interface.
3. **Add Product Retrieval:** Include a method in each concrete builder to retrieve the final product. This method is crucial as it allows the client to access the completed object once all construction steps have been executed.
4. **Implement Director Class:** Optionally, implement a director class to handle the construction process using a builder object. The director defines the order of construction steps to enforce certain construction sequences.
5. **Client Interaction:** In the client code, instantiate the appropriate concrete builder and director classes. Configure the director with the chosen builder, and initiate the construction process. Finally, retrieve the finished product from the builder.
6. **Director Interaction (Optional):** If using a director, the client typically only interacts with this director and not directly with the builder. The director manages the builder, improving the construction process's manageability and flexibility.
   
### Variations of pattern

#### **Independent Builders for Different Products**
- **Use Case**: Best for scenarios where the products created by the builders have nothing in common.
- **Benefits**: This approach offers flexibility, allowing each builder to create entirely unique products without the need for a common interface.
- **Example**: A software tool that needs to generate different types of reports, like PDFs, HTML pages, and plain text documents, might use separate builders for each report type.

#### **Unified Product Interface with Distinct Builders**
- **Use Case**: Suitable when all products share a common set of operations or attributes but are implemented differently.
- **Benefits**: Enhances code maintainability by using a common interface for all products, which simplifies the client interactions with the products through a single point of reference.
- **Example**: A graphics software that renders various shapes might use an `IShape` interface for all shapes (like circles, rectangles) but different builders for each shape to handle specific construction details.
  
#### **Implementation Insight**:
- **`IProduct` Interface**: All products implement this interface which includes the essential functionalities that all products must have.
- **Concrete Products**: Specific implementations of the `IProduct`, like `ProductA` and `ProductB`, each tailored to meet distinct requirements.
- **`IBuilder` Interface**: Defines a method for building products.
- **Concrete Builders**: Each builder class, like `BuilderA` and `BuilderB`, creates an object of one of the product types.
- **Client Usage**: The client uses the `IBuilder` interface to create products. This setup decouples the product creation details from the client code, making it easy to add new product types without affecting existing code.
  
### Pros and Cons

> [!success] **Advantages**
> - **Step-by-Step Construction:** The Builder pattern allows for precise control over the construction process. You can construct objects step-by-step, defer construction steps, or even run steps recursively, which is particularly useful for building complex objects.
>- **Reusable Construction Code:** You can use the same construction process to build different representations of products, which makes the builder classes reusable.
>- **[[Single Responsibility Principle]]** The Builder pattern helps in isolating complex construction code from the business logic of the product. This separation enhances manageability and minimizes the risk of errors during the development process.

> [!warning] **Disadvantages**
> - **Increased Complexity:** Implementing the Builder pattern involves creating multiple new classes, which can complicate the codebase. This includes separate builder classes for each product variant and potentially a director class to manage the construction process. This added complexity might be an overkill for simpler construction scenarios.

### Relations with Other Patterns

- **[[Abstract Factory Pattern]] vs. Builder**: The Abstract Factory pattern is best suited for creating families of related objects with a common theme, without specifying their concrete classes. In contrast, the Builder pattern is ideal for constructing complex objects step-by-step and allows for the construction process to be different for each resulting object.
- **Builder and [[Composite Pattern]]**: The Builder pattern can be particularly useful for constructing Composite trees. It provides a structured approach to building complex, hierarchical object structures like those found in the Composite pattern, by defining individual construction steps.
- **Builder and [[Bridge Pattern]]**: Integrating the Builder pattern with the Bridge pattern can enhance flexibility. The director in the Builder pattern can act as an abstraction layer that guides the construction process, while various builders implement this process for different representations of the object, acting similarly to the implementation side in the Bridge pattern.
- **[[Singleton Pattern]] Implementation**: The Abstract Factory, Builder, and Prototype patterns can all be instantiated as Singletons. This ensures that a single instance of a factory, builder, or prototype is used throughout the application, which helps in managing the creation process and maintaining consistency across the product.

## Examples
This real-world code demonstates the Builder pattern in which different vehicles are assembled in a step-by-step fashion. The Shop uses VehicleBuilders to construct a variety of Vehicles in a series of sequential steps.

> [!abstract]+  **Components of the Implementation**
>- **Shop (Director)**: Directs the construction process outlined in the `Construct` method, orchestrating the sequence of building steps executed by builders. It calls methods to reset the builder, build the frame, engine, wheels, and doors.
>- **VehicleBuilder (Abstract Builder)**: Defines a template for creating parts of a Vehicle object. It contains methods to reset the building process, get the final product, and abstract methods for constructing different parts of a vehicle like the frame, engine, wheels, and doors.
>- **Concrete Builders (MotorCycleBuilder, CarBuilder, ScooterBuilder)**: Implement the building steps for specific types of vehicles. Each builder initializes a new type of vehicle and defines specific details like frame type, engine size, wheel count, and door count. They override the `Reset` method to start a new build and the `GetVehicle` method to return the finished product.
>- **Vehicle (Product)**: Represents the complex object being built. It stores vehicle type and parts such as the frame, engine, wheels, and doors. It also provides a method to display the vehicle's specifications.

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/Builder/Program.cs)

> [!example]- Server Side
>``` csharp
>using System;
>using System.Collections.Generic;
>using System.Text;
>
>namespace Builder.Conceptual
>{
>    // The 'Director' class
>   public class Shop
>   {
>       // Orchestrates the build steps
>       public void Construct(VehicleBuilder vehicleBuilder)
>       {
>           vehicleBuilder.Reset();
>           vehicleBuilder.BuildFrame();
>           vehicleBuilder.BuildEngine();
>           vehicleBuilder.BuildWheels();
>           vehicleBuilder.BuildDoors();
>       }
>   }
>
>   // The 'Builder' abstract class
>   public abstract class VehicleBuilder
>   {
>       protected Vehicle vehicle;
>
>       // Resets the builder with a new vehicle instance
>       public virtual void Reset() { }
>
>       // Returns the built vehicle and resets the builder
>       public Vehicle GetVehicle()
>       {
>           var result = vehicle;
>           Reset();
>           return result;
>       }
>
>       // Abstract build methods
>       public abstract void BuildFrame();
>       public abstract void BuildEngine();
>       public abstract void BuildWheels();
>       public abstract void BuildDoors();
>   }
>
>   // 'ConcreteBuilder' for Motorcycles
>   public class MotorCycleBuilder : VehicleBuilder
>   {
>       public override void Reset()
>       {
>           vehicle = new Vehicle("MotorCycle");
>       }
>
>       public override void BuildFrame()
>       {
>           vehicle["frame"] = "MotorCycle Frame";
>       }
>
>       public override void BuildEngine()
>       {
>           vehicle["engine"] = "500 cc";
>       }
>
>       public override void BuildWheels()
>       {
>           vehicle["wheels"] = "2";
>       }
>
>       public override void BuildDoors()
>       {
>           vehicle["doors"] = "0"; // Motorcycles don't have doors
>       }
>   }
>
>   // 'ConcreteBuilder' for Cars
>   public class CarBuilder : VehicleBuilder
>   {
>       public override void Reset()
>       {
>           vehicle = new Vehicle("Car");
>       }
>
>       public override void BuildFrame()
>       {
>           vehicle["frame"] = "Car Frame";
>       }
>
>       public override void BuildEngine()
>       {
>           vehicle["engine"] = "2500 cc";
>       }
>
>       public override void BuildWheels()
>       {
>           vehicle["wheels"] = "4";
>       }
>
>       public override void BuildDoors()
>       {
>           vehicle["doors"] = "4";
>       }
>   }
>
>   // 'ConcreteBuilder' for Scooters
>   public class ScooterBuilder : VehicleBuilder
>   {
>       public override void Reset()
>       {
>           vehicle = new Vehicle("Scooter");
>       }
>
>       public override void BuildFrame()
>       {
>           vehicle["frame"] = "Scooter Frame";
>       }
>
>       public override void BuildEngine()
>       {
>           vehicle["engine"] = "50 cc";
>       }
>
>       public override void BuildWheels()
>       {
>           vehicle["wheels"] = "2";
>       }
>
>       public override void BuildDoors()
>       {
>           vehicle["doors"] = "0"; // Scooters don't have doors
>       }
>   }
>
>   // The 'Product' class
>   public class Vehicle
>   {
>       private readonly string vehicleType;
>       private readonly Dictionary<string, string> parts = [];
>
>       public Vehicle(string vehicleType)
>       {
>           this.vehicleType = vehicleType;
>       }
>
>       public string this[string key]
>       {
>           get => parts.ContainsKey(key) ? parts[key] : null;
>           set => parts[key] = value;
>       }
>
>       public string Show()
>       {
>           return $"\n--------------------------\n" +
>                  $"Vehicle Type: {vehicleType}\n" +
>                  $"Frame: {this["frame"]}\n" +
>                  $"Engine: {this["engine"]}\n" +
>                  $"#Wheels: {this["wheels"]}\n" +
>                  $"#Doors: {this["doors"]}";
>       }
>    }
>}
>```

> [!example]- Client Side
>``` csharp
> private static void RealCarExampleSimplify()
> {
>     Shop shop = new Shop();
>
>     // Test building a Scooter
>     VehicleBuilder scooterBuilder = new ScooterBuilder();
>     shop.Construct(scooterBuilder);
>     Vehicle scooter = scooterBuilder.GetVehicle();
>     Console.WriteLine(scooter.Show());
>
>     // Test building a Car
>     VehicleBuilder carBuilder = new CarBuilder();
>     shop.Construct(carBuilder);
>     Vehicle car = carBuilder.GetVehicle();
>     Console.WriteLine(car.Show());
>
>     // Test building a Motorcycle
>     VehicleBuilder motorcycleBuilder = new MotorCycleBuilder();
>     shop.Construct(motorcycleBuilder);
>     Vehicle motorcycle = motorcycleBuilder.GetVehicle();
>     Console.WriteLine(motorcycle.Show());
>
>     // Wait for user to view output
>     Console.ReadKey();
> }
>```

This setup illustrates how the Builder pattern can be effectively used to separate the construction of a complex object from its components, making the code more modular, easier to read, and easier to maintain. It allows for different representations of products (vehicles, in this case) using the same construction process.
## Summary

> [!summary]- **Cheat Sheet**
>**Builder Pattern Cheat Sheet**
>**Purpose**:
>- Separates the construction of a complex object from its representation so that the same construction process can create different representations.
>- Allows for fine control over the construction process.
>
>**Components**:
>- **Director**: Controls the construction process of an object using a builder instance.
>- **Builder**: Provides an interface for adding parts to the objects being constructed.
>- **Concrete Builder**: Implements the builder interface and provides an interface for retrieving the finished product.
>- **Product**: The complex object being constructed.
>
>**Usage**:
>- Use when the algorithm for creating a complex object should be independent of the parts that make up the object and how they're assembled.
>- Use when construction needs to allow different representations for the object that's constructed.
>
>**Benefits**:
>- Encapsulates code for construction and representation.
>- Provides control over steps of the construction process.
>- Supports varying the internal representation of products.
>
>**Common Scenarios**:
>- Creating complex composite objects that need to be constructed in various configurations.
>- Generating different types of object representations under the same construction process.

## References
[[design-patterns-en.pdf]]

## Revision History
- **CreatedAt**: 14-04-2024 19:12
- **UpdatedAt**: `$= dv.current().file.mtime`
