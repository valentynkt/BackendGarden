---
created: 15-04-2024 20:32
aliases:
  - Controller Pattern
  - Intermediary Pattern
  - Hub Pattern
links: "[[Behavioral patterns]]"
tags:
  - LearningIT
  - evergreen🌳
---
link: [[Behavioral patterns]]

# Mediator Pattern

## Overview


![[Pasted image 20240409125816.png]]
_Also known as: Intermediary, Controller_

>[!abstract] 
>**Mediator** is a behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

## Content

### Intent

> [!danger]  **Problem** 
> Consider a scenario where you're developing a dialog for creating and editing customer profiles, featuring various form elements like text fields, checkboxes, and buttons. These elements often need to interact with one another. For example, selecting a checkbox labeled "I have a dog" might reveal a text field for entering the dog's name. Similarly, a submit button may need to validate all field values before proceeding with data submission.  
>![[Pasted image 20240409131745.png]]
>_Relations between elements of the user interface can become chaotic as the application evolves._
>
>Implementing such interactivity directly within the form elements leads to high coupling among them, which complicates reusing these elements in other parts of the application. For instance, a checkbox designed to reveal a text field for the dog's name in one form becomes unusable in another context without significant modifications, forcing you to use all or none of the specific form elements designed for the profile editing dialog  
>![[Pasted image 20240409131757.png]]
>_Elements can have lots of relations with other elements. Hence, changes to some elements may affect the others._

> [!success]  **Solution** 
> The Mediator pattern addresses these challenges by eliminating direct communication between the components that need to interact. Instead, it introduces a mediator object to manage coordination between these components, thus centralizing complex communications and control logic.
>
>![[Pasted image 20240409132016.png]]
>_UI elements should communicate indirectly, via the mediator object._
>
>In the context of the profile editing form, the dialog class itself can serve as the mediator. This setup is often practical because the dialog class typically knows about all its sub-components, making it unnecessary to introduce new dependencies. Here’s how it works:
>
>- **Decoupling Components:** Each component, like a submit button, no longer needs to directly interact with other form elements for validation or event handling. Instead, it communicates with the mediator—the dialog class—which then handles the necessary interaction with other components.
>   
>- **Simplifying Interactions:** For instance, when the submit button is pressed, rather than validating each field itself, it simply notifies the dialog of the event. The dialog then takes over the task of validation, either performing it directly or delegating it back to the individual components.
>   
>- **Flexible and Reusable:** By abstracting the interaction logic into a mediator, individual components become less dependent on each other. They only need to know how to communicate with the mediator. This approach not only reduces direct dependencies among components but also enhances their reusability in different contexts.
>    
>- **Interface Extraction:** To further enhance flexibility, you can define a common interface for all dialogs that includes methods for receiving notifications from the form elements. This way, any form element, such as the submit button, can operate with any dialog that implements this interface, making the system even more modular and adaptable.

By centralizing the control logic within a mediator, the Mediator pattern facilitates better management of complex interactions within an application, making classes less dependent on each other and thereby easier to manage, extend, and reuse.

### Structure

![[Pasted image 20240409132150.png]]

**1. Component Classes (ComponentA, ComponentB, ComponentC, ComponentD):**

- **Role:** Act as the actors within the system that contain business logic and interact with other parts of the application.
- **Reference to Mediator:** Each component has a reference to a mediator, allowing it to communicate with the mediator without knowing the details of other components.

**2. Mediator Interface:**

- **Role:** Declares the communication protocol that mediators will use to talk with components.
- **Notification Method:** Typically includes a method (like `notify`) for components to send notifications. This method should be generic enough to pass any relevant information without creating dependencies between components.

**3. Concrete Mediator:**

- **Role:** Implements the mediator interface and coordinates the interaction between various components.
- **References to Components:** Maintains references to the components it mediates, which can involve managing their lifecycle or directly invoking their methods.
- **Communication Logic:** Contains the logic to react to notifications sent by components, deciding how these should be forwarded to or handled by other components.

**4. Interaction Flow:**

- **Independence of Components:** Components do not communicate directly with one another but instead go through the mediator, which dictates the flow of communication.
- **Notification Handling:** Upon receiving a notification, the mediator can identify the sender and determine the appropriate recipients for the notification or the necessary actions to take.


> [!important] 
>The outlined structure emphasizes decoupling components to minimize direct interactions, which in turn simplifies the dependencies within the system. It enables a more maintainable and flexible architecture where adding or modifying individual components has minimal impact on others. The mediator acts as a central point of control, directing traffic and interactions between disparate parts of the system.

### Applicability

1. **Complex Interdependencies:**
    - Use the Mediator pattern to manage systems where multiple components interact in complicated ways. Centralizing communication in a mediator reduces the dependencies between components, simplifying updates and maintenance.
2. **Component Reusability:**
    - If components are tightly coupled with many others, making them hard to reuse, the Mediator can decouple them. This allows components to communicate through a single intermediary rather than directly with each other, enhancing reusability across different parts of an application or in different applications.
3. **Subclass Explosion:**
    - When numerous subclasses are created to reuse a component in slightly different contexts, the Mediator pattern can be a solution. It encapsulates the interaction logic in one place, reducing the need for multiple component subclasses and making the system easier to understand and extend.

The Mediator pattern is beneficial for creating more maintainable, adaptable, and reusable software by centralizing complex communications and decoupling components. This approach not only cleans up the inter-component communications but also makes the entire architecture more flexible.

### How to Implement

Implementing the Mediator pattern involves several key steps to decouple a set of interacting classes and consolidate their communication into a single mediator entity. Here’s how you can implement this pattern:

**1. Identify Coupled Classes:**
- **Goal:** Find a group of classes that are tightly coupled, with many interdependencies that complicate their maintenance and reuse. These are your candidates for refactoring with the Mediator pattern.

**2. Define Mediator Interface:**
- **Communication Protocol:** Create an interface for the mediator, outlining how it will communicate with components. Typically, a single method for receiving notifications from components suffices.
- **Reusability:** This interface is essential for reusing components across different contexts. By interacting through this generic interface, components can work with various mediator implementations.

**3. Create Concrete Mediator:**
- **Manage Components:** Implement a concrete mediator class that keeps references to component objects, enabling it to invoke any component’s methods.
- **Central Control:** The mediator directs communication between components, acting on their behalf based on the notifications it receives.

**4. Mediator as a Factory or Facade:**
- **Lifecycle Management:** Optionally, the mediator can take on the responsibility for creating and destroying component objects, which may cause it to function similarly to a factory or facade pattern.

**5. Establish Connections:**
- **Reference to Mediator:** Components should hold a reference to their mediator, typically set through the constructor where the mediator instance is passed as a parameter.

**6. Refactor Components:**
- **Delegate Communication:** Alter the components’ code so they rely on the mediator to notify them of any events rather than directly invoking other components.
- **Move Interactions to Mediator:** Any code in components that involves interactions with other components should be moved to the mediator. This code is then executed in response to notifications from components.

### Pros and Cons

> [!success] **Advantages**
> 1. **[[Single Responsibility Principle]]:**
>     - Centralizes inter-component communication into a single class, simplifying system understanding and maintenance.
> 2. **[[Open Closed Principle]]:** 
>     - Allows the introduction of new mediators for new behavior without altering the existing components, facilitating extensibility.
> 3. **Reduces Coupling:**
>     - Decreases direct dependencies between various components, promoting a more modular and decoupled system architecture.
> 4. **Enhances Reusability:**
>     - Components become more reusable as their communication logic is abstracted away, making them easier to implement in different scenarios without changes.

> [!warning] **Disadvantages**
> 1. **Risk of a God Object:**
>     - The mediator may become overly complex by accumulating too many responsibilities, transforming into a God Object that is hard to maintain. This happens when too much logic is funneled through the mediator, making it a single point of failure and a bottleneck in the system's design.


> [!tip]
>The **Mediator** pattern is valuable for managing complex communications within a system but requires careful implementation to avoid centralizing too much control and logic within a single mediator. The benefits of reduced coupling and increased component reusability need to be balanced against the potential for creating an overly dominant mediator class


### Relations with Other Patterns

**[[Chain Of Responsibility Pattern]], [[Command Pattern]], Mediator, and [[Observer Pattern]]:**
- These patterns provide different mechanisms for how objects in a system communicate and cooperate.
    - **Chain of Responsibility** delegates commands along a chain of potential receivers until one of them handles the command.
    - **Command** encapsulates a request as an object, thus allowing for parameterized clients and queue or log requests, and provides the capability to undo operations.
    - **Mediator** centralizes complex communications and controls between objects in the system.
    - **Observer** allows observers to subscribe and unsubscribe to events or notifications provided by a publisher object.
  
**[[Facade Pattern]] vs. Mediator:**

- Both Facade and Mediator patterns aim to simplify interactions among classes or components in a system, but they do so differently.
    - **Facade** provides a simplified interface to a subsystem without adding new functionality, and it does not prevent direct communication within the subsystem.
    - **Mediator** acts as the central authority through which all components communicate, thus removing direct communication between the components.
      
**Mediator and [[Observer Pattern]]:**

- The line between Mediator and Observer patterns can sometimes become blurred because they can be combined; Mediator can use Observer for communicating with the components.
    - **Mediator as Observer:** In implementations where the Mediator uses the Observer pattern, the mediator may act as the publisher, with various components acting as subscribers. This setup allows components to remain unaware of each other's presence while still enabling communication through the mediator.
    - **Distinct Roles:** The Mediator's role is to centralize communication and control how components cooperate, while the Observer's role is to establish a broadcasting connection where certain objects publish notifications that other objects can subscribe to.

**[[Observer Pattern]] without Central Mediator:**

- If all components act as publishers and create dynamic connections without a centralized mediator, the system employs the Observer pattern exclusively, creating a distributed network of objects that observe each other.

## Examples

This C# code demonstrates the **Mediator** design pattern, which reduces coupling between classes by centralizing complex communications and controls in a mediator object. This pattern facilitates easier maintenance and a clearer workflow between components.

 > [!abstract]+  **Components of the Implementation**
 >1. **`IMediator` Interface**:
 >    
 >    - Outlines the `Notify` method that components use to alert the mediator about various events.
 >2. **`ConcreteMediator` Class**:
 >    
 >    - Implements the `IMediator` interface, coordinating actions between two components, `Component1` and `Component2`.
 >    - Responds to specific events by triggering actions in these components.
 >3. **`BaseComponent` Class**:
 >    
 >    - Acts as a superclass for components participating in mediation, holding a reference to the `IMediator`.
 >4. **`Component1` and `Component2` Classes**:
>   
 >    - Execute specific functions (`DoA`, `DoB`, `DoC`, `DoD`) and notify the mediator about the events.

> [!tip] More Examples
>There are more interesting example for Mediator pattern which show real world case.
>If you are interested, visit my GitHub


### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/Mediator/Program.cs)

> [!example]- Server Side
>``` csharp
>    // The Mediator interface declares a method used by components to notify the
>    // mediator about various events. The Mediator may react to these events and
>    // pass the execution to other components.
>    public interface IMediator
>    {
>        void Notify(object sender, string ev);
>    }
>
>    // Concrete Mediators implement cooperative behavior by coordinating several
>    // components.
>    class ConcreteMediator : IMediator
>    {
>        private readonly Component1 _component1;
>
>        private readonly Component2 _component2;
>
>        public ConcreteMediator(Component1 component1, Component2 component2)
>        {
>            this._component1 = component1;
>            this._component1.SetMediator(this);
>            this._component2 = component2;
>            this._component2.SetMediator(this);
>        }
>
>        public void Notify(object sender, string ev)
>        {
>            if (ev == "A")
>            {
>                Console.WriteLine("Mediator reacts on A and triggers folowing operations:");
>                this._component2.DoC();
>            }
>            if (ev == "D")
>            {
>                Console.WriteLine("Mediator reacts on D and triggers following operations:");
>                this._component1.DoB();
>                this._component2.DoC();
>            }
>        }
>    }
>
>    // The Base Component provides the basic functionality of storing a
>    // mediator's instance inside component objects.
>    class BaseComponent
>    {
>        protected IMediator _mediator;
>
>        public BaseComponent(IMediator mediator = null)
>        {
>            this._mediator = mediator;
>        }
>
>        public void SetMediator(IMediator mediator)
>        {
>            this._mediator = mediator;
>        }
>    }
>
>    // Concrete Components implement various functionality. They don't depend on
>    // other components. They also don't depend on any concrete mediator
>    // classes.
>    class Component1 : BaseComponent
>    {
>        public void DoA()
>        {
>            Console.WriteLine("Component 1 does A.");
>
>            this._mediator.Notify(this, "A");
>        }
>
>        public void DoB()
>        {
>            Console.WriteLine("Component 1 does B.");
>
>            this._mediator.Notify(this, "B");
>        }
>    }
>
>    class Component2 : BaseComponent
>    {
>        public void DoC()
>        {
>            Console.WriteLine("Component 2 does C.");
>
>            this._mediator.Notify(this, "C");
>        }
>
>        public void DoD()
>        {
>            Console.WriteLine("Component 2 does D.");
>
>            this._mediator.Notify(this, "D");
>        }
>    }
>```

> [!example]- Client Side
>``` csharp
>static void Main(string[] args)
>{
>    ConceptualExample();
>}
>private static void ConceptualExample()
>{
>    // The client code.
>    Component1 component1 = new Component1();
>    Component2 component2 = new Component2();
>    new ConcreteMediator(component1, component2);
>    Console.WriteLine("Client triggers operation A.");
>    component1.DoA();
>    Console.WriteLine();
>    Console.WriteLine("Client triggers operation D.");
>    component2.DoD();
>}
>```

## Summary

>[!summary]- **Cheat Sheet**
>**Mediator Pattern Cheat Sheet**
>**Purpose**:
>- Defines an object that encapsulates how a set of objects interact.
>- Promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.
>
>**Components**:
>- **Mediator Interface**: Defines the interface for communication between Colleague objects.
>- **Concrete Mediator**: Implements the Mediator interface and coordinates communication between Colleague objects. It knows and maintains its colleagues.
>- **Colleague Classes**: Each Colleague class knows its Mediator object. It communicates with its mediator whenever it would have otherwise communicated with another colleague.
>
>**Usage**:
>- Use when a set of objects communicate in well-defined but complex ways that are hard to manage or understand.
>- Use to centralize complex communications and control logic between related objects.
>
>**Benefits**:
>- Reduces subclassing by centralizing control logic.
>- Decouples colleagues which leads to fewer, more manageable dependencies.
>- Simplifies maintenance of the application by centralizing control logic.
>
>**Common Scenarios**:
>- User interface designs where multiple components need to interact, but it's undesirable for them to have direct references to each other.
>- Distributed systems where multiple services interact, and central control of these interactions is required.


# References

https://refactoring.guru/design-patterns

