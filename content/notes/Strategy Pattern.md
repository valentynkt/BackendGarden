---
created: 15-04-2024 20:32
aliases:
  - Policy Pattern
  - Strategy Design Pattern
links: "[[Behavioral patterns]]"
tags:
  - LearningIT
  - evergreen🌳
---

links: [[Behavioral patterns]]

# Strategy Pattern

## Overview

![[Pasted image 20240410211640.png]]

>[!abstract] 
>**Strategy** is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

## Content

### Intent

> [!danger]  **Problem** 
> Imagine developing a navigation app designed for travelers, featuring an interactive map to aid in city exploration. Initially, the app provided only road routes, which thrilled car users. However, user needs were diverse, prompting the addition of walking paths, public transport options, cycling routes, and even scenic paths passing all tourist attractions.
>
>![[Pasted image 20240410211811.png]]
>_The code of the navigator became bloated._
>
>Despite the app's commercial success, its technical management became increasingly challenging. Every new routing algorithm exponentially enlarged the main class, complicating maintenance. Simple adjustments or bug fixes in one routing algorithm risked affecting others due to the intertwined code. Moreover, as the team grew, developers found themselves constantly resolving merge conflicts due to simultaneous modifications in the same large class.

> [!success]  **Solution** 
> The Strategy pattern offers a solution by separating the routing algorithms into distinct strategy classes. The core class, or the context, retains a reference to one of these strategy objects, delegating the routing tasks to it rather than handling them internally.
>
>![[Pasted image 20240410211833.png]]
>_Route planning strategies._
>
>This structure removes the context’s responsibility for determining the appropriate routing algorithm, which is instead passed by the client. Consequently, the context interacts with all strategies through a uniform interface, typically encapsulating the routing method that accepts start and end points and returns the route checkpoints.
>
>Thus, the context remains oblivious to the specifics of the strategies, allowing for the easy introduction of new algorithms or modification of existing ones without altering the context's code or other strategies' implementations. In the navigation app scenario, switching between different routing strategies is simplified, allowing UI elements like buttons to adjust the routing method dynamically without disrupting the underlying map rendering logic.

**Benefits**: This pattern significantly decouples the algorithmic logic from the main application logic, enhancing code maintainability and scalability. By employing the Strategy pattern, developers can avoid the pitfalls of a monolithic architecture prone to bugs and challenging merges, ensuring a robust, adaptable application structure.

### Structure

![[Pasted image 20240410212109.png]]

1. **Context**:
    - Holds a reference to a strategy object.
    - All strategy operations are delegated to this object.
    - Communicates with the strategy through a common interface.
    - Does not know or need to know about the concrete implementation of the strategy.
2. **Strategy Interface**:  
    - Defines a method that all concrete strategies must implement.
    - This method encapsulates the algorithm or behavior that the context will execute through the strategy interface.
3. **Concrete Strategies**:
    - These are classes that implement the Strategy interface.
    - Each class encapsulates a specific algorithm or behavior to be executed.
    - Although offering the same functionality, each implements it differently based on the specific requirements and context.
4. **Execution Method**:
    - The context uses this method to execute the strategy's algorithm.
    - This method is defined in the Strategy interface and implemented by all Concrete Strategies.
    - The context remains unaware of the specific type of strategy it is working with and the details of how the strategy executes the task.
5. **Client Setup**:
    - The client chooses the appropriate Concrete Strategy and sets it on the context.
    - This is typically done by passing the strategy object to the context’s setter method.
    - This setup allows the strategy associated with the context to be changed at runtime, enhancing flexibility and adaptability.

### Applicability

1. **Dynamic Algorithm Substitution:**
    - Use the Strategy pattern to switch algorithms within an object at runtime. This is particularly useful when an object needs to alternate between different behaviors or algorithms depending on the application context or user preferences.
2. **Consolidating Similar Behaviors:**
    - When multiple classes differ only in their behavior, the Strategy pattern can centralize these variations in separate strategy classes. This approach reduces redundancy by eliminating the need to maintain multiple similar classes, thus simplifying code maintenance and expansion.
3. **Decoupling Algorithm Implementation:**
    - Employ the Strategy pattern to isolate the implementation details of algorithms from the core business logic of the classes using these algorithms. This separation enhances modularity and makes the system easier to understand and modify, as the interdependencies between the business logic and algorithm implementations are minimized.
4. **Eliminating Conditional Statements:**
    - If your class performs different behaviors based on internal state represented by conditional statements, the Strategy pattern can simplify this by externalizing these behaviors into distinct strategy classes. This avoids the clutter of conditional logic, making the code cleaner and easier to manage.

By applying the Strategy pattern, you can ensure that the system remains flexible and easy to adapt or extend. It allows for swapping out the behavior encapsulated by strategies without altering the clients that use them, fostering a more modular and cohesive codebase.

### How to Implement

1. **Identify the Algorithm:** Locate the behavior in your context class that changes frequently or might change in the future.
2. **Create Strategy Interface:** Develop a common interface for all versions of this algorithm. This interface will define the methods that all strategies must implement.
3. **Develop Concrete Strategies:** Transform each version of the algorithm into its own class that implements the strategy interface.
4. **Integrate Strategies with Context:** Add a reference to the strategy interface in your context class. This reference allows the context to call strategy methods without knowing the details of each implementation. Provide a method to change the strategy at runtime.
5. **Enable Client Configuration:** Let clients choose and set the desired strategy on the context. They do this by creating an instance of a specific strategy and assigning it to the context.

### Pros and Cons

> [!success] **Advantages**
> - **Flexibility in Switching Algorithms:** Allows runtime changes in the algorithm used within an object, enhancing flexibility.
> - **Separation of Concerns:** Decouples the implementation details of algorithms from the code that uses them, leading to cleaner, more modular code.
> - **[[Favor Composition Over Inheritance]]:** By using composition instead of inheritance, strategies can be easily switched out and extended independently of the clients that use them.
> - **Compliance with [[Open Closed Principle]]:** New strategies can be introduced without altering the context or existing strategies, adhering to the principle of being open for extension but closed for modification.

> [!warning] **Disadvantages**
> - **Potential Overhead:** Introducing the pattern might be an overkill for simple algorithm changes or when there are only a few strategies which rarely change, unnecessarily complicating the design.
> - **Client Involvement:** Requires clients to understand the differences between strategies to choose the appropriate one, which can increase complexity in client code.
> - **Alternative Approaches:** Many modern languages support functional programming which can handle multiple behaviors through anonymous functions without creating multiple classes or interfaces, offering a simpler alternative to the Strategy pattern in some ca

### Relations with Other Patterns

1. **[[Bridge Pattern]], [[State Pattern]], [[Strategy Pattern]], and [[Adapter Pattern]]:**
    - These patterns all utilize composition to delegate tasks to other objects, facilitating flexible and interchangeable object configurations without altering those objects' interfaces. While they share structural similarities, each solves unique design problems:
        - **Bridge** separates an abstraction from its implementation so that both can be varied independently.
        - **Adapter** allows objects with incompatible interfaces to collaborate.
        - **Strategy** and **State** both allow for changing behavior dynamically, but they are used in different contexts (Strategy for changing algorithms, State for changing state behaviors based on internal conditions).
	1. **[[Command Pattern]] vs. [[Strategy Pattern]]:**    
    - Both patterns involve encapsulating operations, but their purposes diverge significantly:
        - **Command** encapsulates an operation as an object, enabling the operation's scheduling, queuing, and execution to be controlled externally. This pattern is useful for operations that might need to be undone or redone, delayed, or triggered remotely.
        - **Strategy** provides different algorithms or strategies that can be switched at runtime to alter an object's behavior. It's used when various algorithms might be chosen at runtime depending on the situation.
3. **[[Decorator Pattern]] vs. [[Strategy Pattern]]:**
    - **Decorator** and **Strategy** both alter an object’s capabilities, but they do so in fundamentally different ways:
        - **Decorator** modifies objects by adding new functionality through wrapping them with new decorator classes.
        - **Strategy** changes the essential behavior or algorithm of an object by swapping out parts of it dynamically.
4. **[[Template Method Pattern]] vs. [[Strategy Pattern]]:**
    - Both patterns aim to define the skeleton of an algorithm, with differences in how they allow for changes to the algorithm's parts:
        - **Template Method** uses inheritance and defines an algorithm’s structure in a base class while allowing its steps to be redefined in subclasses.
        - **Strategy** uses composition to change parts of an object's behavior by replacing parts of the object (strategies) with different implementations that conform to a common interface.
5. **[[State Pattern]] as an Extension of [[Strategy Pattern]]:**
    - **State** can be seen as an extension or a specific use-case of the **Strategy** pattern:
        - In **State**, the context's behavior changes based on its internal state, and state transitions can be dynamic, reflecting the evolving conditions within the application.
        - While **Strategy** might allow similar dynamic changes to an object’s behavior, it does not inherently involve states or the conditions for transitions between different behaviors, which are central to the State pattern.

## Examples

This C# code demonstrates the **Strategy** design pattern, which is used to define a family of algorithms, encapsulate each one, and make them interchangeable. This pattern allows the algorithm's behavior to be selected at runtime depending on the client's needs.

> [!abstract]+  **Components of the Implementation**
>1. **`IStrategy` Interface**:
>    
>    - Declares a method `Execute` that all concrete strategies must implement. This method takes two integer arguments and returns an integer result, representing the outcome of the algorithm.
>2. **Concrete Strategy Classes (`ConcreteStrategyAdd`, `ConcreteStrategySubtract`, `ConcreteStrategyMultiply`)**:
>    
>    - These classes implement the `IStrategy` interface, each providing a different way to handle two integers (`a` and `b`):
>        - `ConcreteStrategyAdd` adds the two integers.
>        - `ConcreteStrategySubtract` subtracts the second integer from the first.
>        - `ConcreteStrategyMultiply` multiplies the two integers.
>    - Each strategy encapsulates the specific computational logic.
>3. **`Context` Class**:
>    
>    - Maintains a reference to a strategy object and allows it to be changed at runtime through the `SetStrategy` method.
>    - The `ExecuteStrategy` method is used to delegate the execution of the algorithm to the current strategy object. This method effectively abstracts the algorithm execution from the client, allowing different strategies to be applied without changing the client code.
>
>
>**Workflow**:
>- The `Context` class is configured with a specific strategy based on user input.
>	- It uses the strategy object to execute an operation, which is abstracted from the specific algorithmic logic contained in each strategy.

This implementation of the Strategy pattern illustrates its use in creating a flexible system that can change its algorithmic behavior at runtime based on user input. This approach simplifies the management of multiple algorithms and promotes a cleaner system architecture by separating the algorithmic concerns from the client that uses them.

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/Strategy/Program.cs)

> [!example]- **Server Side**
> 
>``` csharp
>    // The strategy interface declares operations common to all supported versions of some algorithm.
>    public interface IStrategy
>    {
>        int Execute(int a, int b);
>    }
>
>    // Concrete strategies implement the algorithm while following the base strategy interface.
>    public class ConcreteStrategyAdd : IStrategy
>    {
>        public object DoAlgorithm(object data)
>        {
>            throw new NotImplementedException();
>        }
>
>        public int Execute(int a, int b)
>        {
>            return a + b;
>        }
>    }
>
>    public class ConcreteStrategySubtract : IStrategy
>    {
>        public object DoAlgorithm(object data)
>        {
>            throw new NotImplementedException();
>        }
>
>        public int Execute(int a, int b)
>        {
>            return a - b;
>        }
>    }
>
>    public class ConcreteStrategyMultiply : IStrategy
>    {
>        public object DoAlgorithm(object data)
>        {
>            throw new NotImplementedException();
>        }
>
>        public int Execute(int a, int b)
>        {
>            return a * b;
>        }
>    }
>
>    // The context defines the interface of interest to clients.
>    public class Context
>    {
>        private IStrategy _strategy;
>
>        // Usually, the context accepts a strategy through the constructor, 
>        // and also provides a setter so that the strategy can be switched at runtime.
>        public void SetStrategy(IStrategy strategy)
>        {
>            _strategy = strategy;
>        }
>
>        // The context delegates some work to the strategy object instead of implementing multiple versions of the algorithm on its own.
>        public int ExecuteStrategy(int a, int b)
>        {
>            return _strategy.Execute(a, b);
>        }
>    }
>```

> [!example]- **Client Side**
> 
>``` csharp
>        static void Main(string[] args)
>        {
>            CalculatorExample();
>            ConceptualExample();
>        }
>
>        private static void CalculatorExample()
>        {
>            var context = new Calculator.Context();
>            Console.WriteLine("Enter the first number:");
>            int firstNumber = int.Parse(Console.ReadLine());
>
>            Console.WriteLine("Enter the second number:");
>            int secondNumber = int.Parse(Console.ReadLine());
>
>            Console.WriteLine("Enter the desired action (addition, subtraction, multiplication):");
>            string action = Console.ReadLine();
>
>            switch (action)
>            {
>                case "addition":
>                    context.SetStrategy(new Calculator.ConcreteStrategyAdd());
>                    break;
>                case "subtraction":
>                    context.SetStrategy(new Calculator.ConcreteStrategySubtract());
>                    break;
>                case "multiplication":
>                    context.SetStrategy(new Calculator.ConcreteStrategyMultiply());
>                    break;
>            }
>
>            int result = context.ExecuteStrategy(firstNumber, secondNumber);
>            Console.WriteLine($"Result: {result}");
>        }
>```

## Summary

>[!summary]- **Cheat Sheet**
>**Strategy Pattern Cheat Sheet**
>**Purpose**:
>- Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
>- Offers a way to define a group of behaviors or algorithms and make them interchangeable within that family.
>
>**Components**:
>- **Context**: Maintains a reference to one of the concrete strategies and communicates with this object only via the strategy interface.
>- **Strategy Interface**: Common interface for all strategies that declares a method the context uses to call the algorithm defined by a Concrete Strategy.
>- **Concrete Strategies**: Implement different variations of an algorithm the Strategy interface defines.
>
>**Usage**:
>- Use when different variations of an algorithm are needed.
>- Use when algorithm uses data clients shouldn't know about. Hide complex, algorithm-related data structures behind an interface.
>- Use to replace conditional statements related to various behaviors packed into one class.
>
>**Benefits**:
>- A family of algorithms can be easily switched at runtime (interchangeability).
>- Encapsulation of algorithm and implementation details.
>- Adding new strategies or modifying existing ones does not disturb the host context.
>
>**Common Scenarios**:
>- Data validation processes that use various algorithms based on the nature of data being validated.
>- Different user interface behaviors under various configurations or environments.
>- Resource negotiation algorithms that vary depending on system load and network conditions.


# References

https://refactoring.guru/design-patterns