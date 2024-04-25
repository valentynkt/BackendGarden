---
created: 2024-04-15 20:33
aliases:
  - Template Algorithm Pattern
  - Hook Method Pattern
  - Algorithm Outline Pattern
links: "[[Behavioral patterns]]"
tags:
  - LearningIT
  - evergreen🌳
---

links: [[Behavioral patterns]]

# Template Method Pattern

## Overview

![[Pasted image 20240411150242.png]]

>[!abstract] 
>**Template Method** is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

## Content

### Intent

> [!danger]  **Problem** 
> Suppose you’re developing a data mining application to process different types of documents (PDF, DOC, CSV). Initially, the application could handle only DOC files, but later you expanded it to process CSV and PDF formats. Each format required a different parsing technique, but once the data was parsed, the processing and analysis steps were largely the same across all formats. The challenge was the code duplication in these post-parsing steps and the cumbersome conditional logic in the client code used to instantiate and manage these parser object.
>
>![[Pasted image 20240411150414.png]]
>_Data mining classes contained a lot of duplicate code_

> [!success]  **Solution** 
> The Template Method pattern offers a structured approach to algorithm design by defining a sequence of steps in a base class. This method allows specific steps to be customized in subclasses to adapt to different requirements. 
> 
>![[Pasted image 20240411150421.png]]
>
>_Template method breaks the algorithm into steps, allowing subclasses to override these steps but not the actual method._
>
>Here’s a explanation based on the example of a data mining application that handles various document formats:
>1. **Template Method Definition:**
>    - The base class outlines a 'template method' which consists of several steps executed in a specific order. This method orchestrates when each step of the algorithm should be executed and is designed not to be overridden, ensuring the algorithm’s structure remains intact across different implementations.
>2. **Step Definition and Implementation:**
>As you can see, we’ve got two types of steps: 
>	 - abstract steps must be implemented by every subclass 
>	 - optional steps already have some default implementation, but still can be overridden if needed
>1. **Code Reuse and Reduction of Duplication:**
>    - Common functionalities among different document formats, such as analyzing data and generating reports, are implemented in the base class. This central implementation prevents code duplication and allows subclasses to reuse code effectively.
>2. **Flexible Step Customization with Hooks:**
>    - The pattern can include hooks—optional methods with no implementation in the base class. Subclasses can override these hooks to extend the algorithm without changing its structure. Hooks provide flexibility, offering points of extension before, after, or even between the main steps of the algorithm.
>3. **Ease of Maintenance and Extension:**
>    - Any changes to the common functionality of the algorithm need to be made only once in the base class, simplifying maintenance. Adding a new document format involves creating a new subclass and implementing the abstract methods without affecting existing code.

By applying the Template Method pattern, the data mining application can efficiently handle multiple document formats while maintaining a clear and manageable code structure. This approach not only optimizes code reuse and maintenance but also enhances the system’s flexibility to incorporate new types of documents as the application evolves.

### Structure

![[Pasted image 20240411151059.png]]

1. **Abstract Class:**
    - This class defines the skeleton of the algorithm in the form of a template method. This method outlines the sequence of steps required to execute the algorithm, invoking them in a specific order. The individual steps within the template method are implemented as methods within the same class. These step methods can be either:
        - **Abstract Methods:** Which must be implemented by subclasses, ensuring they fit the specific needs of the subclass.
        - **Default Methods:** Which provide a standard implementation that can be overridden by subclasses if different behavior is required.
2. **Concrete Classes:**
    - These classes inherit from the abstract class and implement the abstract step methods, providing specific behavior that varies between different subclasses. While concrete classes are free to override default methods to alter parts of the algorithm, they cannot change the template method itself, preserving the algorithm's structure and order of execution.

### Applicability

1. **Controlled Flexibility:**
    - The pattern is perfect for situations where you want to allow extensions or modifications to certain aspects of an algorithm without changing its overall structure. By defining the skeleton of the algorithm in a base class, you ensure that the fundamental workflow remains consistent while specific steps can be customized in subclasses.
2. **Reducing Redundancy:**
    - It proves advantageous when similar algorithms are implemented across multiple classes, differing only slightly in their specifics. Centralizing these algorithms into a single template method within a base class helps eliminate duplicate code and centralizes control, making the system easier to maintain and adapt.
3. **Streamlining Maintenance:**
    - The Template Method pattern helps minimize code duplication by consolidating the common elements of algorithms into a base class. This structure allows individual variations to be implemented in derived classes, simplifying updates and maintenance as changes to the common process require modifications in just one location

### How to Implement

1. **Break Down the Algorithm:** Identify different stages of the algorithm. Determine which steps are common across all versions and which are unique to each implementation.
2. **Create Abstract Base Class:** Develop an abstract class that defines the skeleton of the algorithm with a template method. This method should call a sequence of steps, implemented as abstract or virtual methods that subclasses will define.
3. **Provide Default Implementations:** Not every method needs to be abstract; you can offer default implementations for some steps that subclasses can optionally override.
4. **Add Hooks for Flexibility:** Insert hooks at key points in the template method. These are optional methods that subclasses can override to modify the behavior before or after critical steps.
5. **Implement Variations:** Create concrete subclasses for each variant of the algorithm. These should fulfill all abstract methods and can modify default behaviors as needed.

This approach simplifies the algorithm's structure into manageable steps, allowing for easy modifications and extensions without disrupting the overall workflow.

### Pros and Cons

> [!success] **Advantages**
> - **Customization of Parts:** Clients can override specific parts of an algorithm without altering its overall structure.
> - **Reduction of Code Duplication:** Common behaviors can be centralized in the superclass, reducing redundancy

> [!warning] **Disadvantages**
> - **Algorithm Rigidity:** The rigid structure of the template method may limit how clients can use the class.
> - **[[Liskov Substitution Principle]] Issues:** Overriding a method in a subclass to provide no action or a null operation can violate the Liskov Substitution Principle, as it alters the expected behavior of the superclass.
> - **Maintenance Complexity:** Template methods with many steps can become difficult to manage and maintain as variations and exceptions increase.

### Relations with Other Patterns

- **[[Factory Method Pattern]] as a Specialization**: The Factory Method pattern is often seen as a specialization of the Template Method pattern. This is because the Factory Method itself can act as one step in a broader Template Method, specifically in the context of object creation. This integration showcases how one pattern can naturally extend the functionality of another within a single algorithmic process.
    
- **Template Method and [[Strategy Pattern]]**:
    - **[[Inheritance]] vs. [[Composition relationships]]**: The Template Method pattern uses inheritance to define the skeleton of an algorithm in a base class and allows subclasses to implement the variable parts. This approach is inherently static, as it relies on extending a base class to provide specific behavior.
    - **Behavioral Flexibility**: In contrast, the Strategy pattern uses composition to change the behavior of an object at runtime. By encapsulating the variable parts of a behavior in separate strategy classes and using a common interface to integrate them with the main object, the Strategy pattern provides dynamic flexibility, enabling runtime changes to the object’s behavior.

## Examples
  
This C# code demonstrates the **Template Method** design pattern through the implementation of a game AI system. The pattern is used to define the skeleton of an algorithm, leaving the implementation of specific steps to subclasses.

> [!abstract]+  **Components of the Implementation**
>1. **`GameAI` Abstract Class**:
>    
>    - Acts as the base class for different types of game AI.
>    - Defines a template method `Turn()` that outlines the algorithm's structure: collecting resources, building structures, building units, and attacking.
>    - Includes concrete and abstract methods that subclasses need to implement according to their specific behaviors.
>2. **Concrete Implementations (`OrcsAI`, `MonstersAI`)**:
>    
>    - `OrcsAI`: Implements all abstract methods, handling game actions like building structures and units tailored to Orcs' strategy.
>    - `MonstersAI`: Overrides methods to provide behavior suitable for monsters, such as not collecting resources or building units.
>3. **Supporting Methods and Properties**:
>    
>    - Methods like `CollectResources()` and `Attack()` are defined in the `GameAI` class to provide common functionality, which can be overridden by subclasses if needed.
>    - Properties such as `BuiltStructures` and `map` support game logic.
>
> **Workflow**:
>- The `Turn()` method in the `GameAI` class is called to execute a turn for the AI, which sequentially processes resource collection, structure building, unit creation, and attacking.
>- Each action within `Turn()` is tailored to the specific AI's strategy through overridden methods in subclasses.
  
This setup effectively showcases the Template Method pattern by ensuring that each type of AI adheres to a specific game turn algorithm while allowing for flexibility in how each step of the algorithm is executed. This makes the game AI system extendable and easy to maintain, with each AI type encapsulating its unique behaviors.

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/TemplateMethod/Program.cs)

> [!example]- **Server Side**
>``` csharp
>   // Abstract class that defines the template method and abstract methods
>   public abstract class GameAI
>   {
>       // Template method that defines the skeleton of the algorithm
>       public void Turn()
>       {
>           CollectResources();
>           BuildStructures();
>           BuildUnits();
>           Attack();
>       }
>
>       // Default implementation of a method in the base class
>       public virtual void CollectResources()
>       {
>           foreach (var structure in BuiltStructures)
>           {
>               structure.Collect();
>           }
>       }
>
>       // Abstract methods to be implemented by subclasses
>       public abstract void BuildStructures();
>       public abstract void BuildUnits();
>
>       public void Attack()
>       {
>           var enemy = ClosestEnemy();
>           if (enemy == null)
>           {
>               SendScouts(new Position(map.Center));
>           }
>           else
>           {
>               SendWarriors(enemy.Position);
>           }
>       }
>
>       public abstract void SendScouts(Position position);
>       public abstract void SendWarriors(Position position);
>
>       // Example properties and methods to support the game logic
>       protected List<Structure> BuiltStructures { get; set; }
>       protected Map map { get; set; }
>
>       protected virtual Enemy ClosestEnemy()
>       {
>           return new Enemy(); // Dummy implementation
>       }
>   }
>
>   // Concrete class implementing the abstract operations
>   public class OrcsAI : GameAI
>   {
>       public override void BuildStructures()
>       {
>           if (ResourcesAvailable)
>           {
>               // Build farms, then barracks, then stronghold
>           }
>       }
>
>       public override void BuildUnits()
>       {
>           if (ResourcesPlentiful)
>           {
>               if (!ScoutsExist)
>               {
>                   // Build peon, add it to scouts group
>               }
>               else
>               {
>                   // Build grunt, add it to warriors group
>               }
>           }
>       }
>
>       public override void SendScouts(Position position)
>       {
>           if (Scouts.Count > 0)
>           {
>               // Send scouts to position
>           }
>       }
>
>       public override void SendWarriors(Position position)
>       {
>           if (Warriors.Count > 5)
>           {
>               // Send warriors to position
>           }
>       }
>
>       // Example properties to support the game logic
>       protected bool ResourcesAvailable { get; set; }
>       protected bool ResourcesPlentiful { get; set; }
>       protected bool ScoutsExist { get; set; }
>       protected List<Unit> Scouts { get; set; }
>       protected List<Unit> Warriors { get; set; }
>   }
>
>   // Another concrete class with some overridden methods
>   public class MonstersAI : GameAI
>   {
>       public override void CollectResources()
>       {
>           // Monsters don't collect resources
>       }
>
>       public override void BuildStructures()
>       {
>           // Monsters don't build structures
>       }
>
>       public override void BuildUnits()
>       {
>           // Monsters don't build units
>       }
>
>       public override void SendScouts(Position position)
>       {
>           // Possibly implement a different way to handle scouting
>       }
>
>       public override void SendWarriors(Position position)
>       {
>           // Implement a monster-specific way to handle attacks
>       }
>   }
>
>   // Supporting classes and structs
>   public class Structure
>   {
>       public void Collect() { }
>   }
>
>   public class Position
>   {
>       public Position(int center) { }
>   }
>
>   public class Map
>   {
>       public int Center { get; set; }
>   }
>
>   public class Unit
>   {
>       public string Name { get; set; }
>   }
>   public class Enemy
>   {
>       public Position Position { get; set; }
>   }
>```

> [!example]- **Client Side**
>``` csharp
>    static void Main(string[] args)
>    {
>        RealExample();
>        ConceptualExample();
>    }
>    private static void RealExample()
>    {
>        Console.WriteLine("Starting the game simulation...\n"
>        // Create an instance of OrcsAI and simulate a turn
>        GameAI orcsAI = new OrcsAI();
>        Console.WriteLine("Orcs' turn:");
>        orcsAI.Turn();
>        Console.WriteLine(
>        // Create an instance of MonstersAI and simulate a turn
>        GameAI monstersAI = new MonstersAI();
>        Console.WriteLine("Monsters' turn:");
>        monstersAI.Turn();
>        Console.WriteLine(
>        Console.WriteLine("Game simulation completed.");
>    }
>``` 

## Summary

>[!summary]- **Cheat Sheet**
>**Template Method Pattern Cheat Sheet**
>**Purpose**:
>- Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.
>- Allows redefining certain steps of an algorithm without changing the algorithm's structure.
>
>**Components**:
>- **Abstract Class**: Defines abstract primitive operations that concrete subclasses define to implement steps of an algorithm.
>- **Concrete Class**: Implements the primitive operations to carry out subclass-specific steps of the algorithm.
>
>**Usage**:
>- Use when you want to let clients extend only particular steps of an algorithm, but not the algorithm's structure.
>- Use when you have several classes that contain nearly identical algorithms with some minor differences in the sequence of steps.
>
>**Benefits**:
>- Facilitates code reuse and avoids duplication in subclasses.
>- Offers a clear template for an algorithm sequence, ensuring consistency.
>- Simplifies maintenance as changes to the algorithm's structure require modifications only in the abstract class, not in each subclass.
>
>**Common Scenarios**:
>- Data processing frameworks where the steps to process data are the same, but the actual processing differs based on the data format.
>- Games or applications that need to extend the framework's algorithm while keeping the outline the same.


# References

https://refactoring.guru/design-patterns