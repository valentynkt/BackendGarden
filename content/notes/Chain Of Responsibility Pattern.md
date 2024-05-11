---
created: 2024-04-15 20:31
aliases:
  - CoR Pattern
  - Chain of Command Pattern
  - Successor Pattern
  - Chain Of Responsibility
links: "[[Behavioral patterns]]"
tags:
  - LearningIT
  - evergreen🌳
---
link: [[Behavioral patterns]]

# Chain Of Responsibility Pattern

## Overview

![[Pasted image 20240408210845.png]]

_Also known as: CoR, Chain of Command_

>[!abstract] 
>**Chain of Responsibility** is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

## Content

### Intent

> [!danger]  **Problem** 
> Imagine developing an online ordering system where access must be restricted to authenticated users, and users with administrative permissions need full access to all orders. Initially, it seemed necessary to perform several security checks sequentially:
> 
> 1. **Authentication:** Verify user credentials upon receiving a request. If authentication fails, no further checks are needed.
> 2. **Data Sanitization:** After a colleague's suggestion, a step was added to clean the raw data in a request to prevent security vulnerabilities.
> 3. **Brute Force Protection:** Following an observation about potential brute force attacks, a check was implemented to filter repeated failed requests from the same [[Internet Protocol|IP]] address.
> 4. **Caching:** To improve efficiency, another layer was added to return cached results for repeat requests containing the same data.
> 
>However, integrating these checks led to bloated and tangled code. Modifications in one area could unintentionally affect others, complicating maintenance and reuse across different system components.
>![[Pasted image 20240408211411.png]]
>_The request must pass a series of checks before the ordering system itself can handle it._
> 
>![[Pasted image 20240408211445.png]]
>_The bigger the code grew, the messier it became._

> [!success]  **Solution** 
> The Chain of Responsibility pattern offers a solution by encapsulating each check into its own class, known as a handler, with a single method to perform its function. This method takes the request and its data as parameters. Handlers are linked together in a sequence where each handler has a reference to the next one in the chain. This setup allows a request to be passed along the chain, giving each handler a chance to process it:
>
>- **Handling Requests:** Each handler can independently decide whether to pass the request down the chain. If a handler processes the request adequately (e.g., successful authentication), it may choose not to forward the request, halting further processing.
>- **Event Propagation Example:** In graphical user interfaces, this pattern is often used where an event (like a button click) travels through a chain of elements until an element capable of handling it processes it.
>![[Pasted image 20240408211555.png]]
>_Handlers are lined up one by one, forming a chain_

The key advantage of this approach is that all handlers implement the same interface, allowing for flexible composition of the chain at runtime without hard-coding dependencies on specific handler classes. This modularity and decoupling from concrete implementations simplify both development and maintenance, addressing the earlier challenges of bloated and inflexible code.

![[Pasted image 20240408212040.png]]
_A chain can be formed from a branch of an object tree_

### Structure

![[Pasted image 20240408212147.png]]

1. **Handler Interface:**
    
    - This interface is common to all concrete handlers. It typically includes a method for handling requests (`handle`). Occasionally, it might also feature a method for setting the next handler in the chain (`setNext`), allowing for dynamic chain modification.
2. **Base Handler:**
    
    - An optional component that consolidates shared code across handlers. This class generally maintains a reference to the next handler, which facilitates chain construction either through a constructor or a setter method. The Base Handler might also implement a default behavior, such as forwarding the request to the next handler if it exists, after an initial check.
3. **Concrete Handlers:**
    
    - These classes contain the specific logic for processing requests. Each Concrete Handler decides independently whether to handle a request and whether to forward it along the chain. They are designed to be immutable, receiving all necessary data via the constructor at the time of creation, which enhances stability and predictability.
4. **Client:**
    
    - The client's role is to assemble the handler chain, which can be set up either statically at design time or dynamically during runtime based on the application’s needs. It is important to note that requests can be initiated at any point in the chain, not necessarily starting with the first handler. This flexibility allows different parts of an application to leverage different segments of the chain as required.

This structured approach not only facilitates clear delineation of responsibilities among different components but also enhances the flexibility and reusability of the handlers within different contexts or applications.

### Applicability

1. **Varied Requests Processing:** Employ the CoR pattern when your application needs to handle a variety of requests in different ways, especially when the nature and sequence of the requests are not determined in advance.
2. **Dynamic Request Handling:** The pattern is useful for setting up a sequence of handlers that can be "queried" one by one to process a request, giving each handler an opportunity to handle the request or pass it along.
3. **Ordered Execution:** Utilize the pattern when it is critical to have handlers execute in a specific sequence. Handlers can be arranged in any order, ensuring requests are processed in the exact manner intended.
4. **Runtime Flexibility:** Apply the CoR pattern when you need the flexibility to change handlers and their order during runtime. With setters in handler classes, you can dynamically add, remove, or rearrange handlers as required.

This adaptation ensures requests are managed efficiently while providing the system with the necessary adaptability.

### How to Implement

1. **Declare Handler Interface:** Define an interface for handling requests. Opt for maximum flexibility by encapsulating request data within an object and passing this object to the handling method as an argument.
   
2. **Create an Abstract Base Handler:** Develop an abstract base class derived from the handler interface to reduce redundancy across concrete handlers. This class should:
    
    - Store a reference to the next handler in the chain.
    - Optionally be immutable, but include a setter for the reference field if you need to modify chains dynamically.
    - Implement a default behavior in the handling method that forwards the request to the next handler, unless no further handlers are available. This allows concrete handlers to extend this default behavior easily.

3. **Develop Concrete Handlers:** Implement specific handling methods in concrete handler subclasses. Each handler must decide:
    - Whether to process the request itself.
    - Whether to pass the request along the chain to the next handler.

4. **Chain Assembly by the Client:** Allow the client to either construct handler chains independently or use pre-assembled chains provided by other objects. Implement factory classes to build these chains based on configuration or environmental settings.

5. **Dynamic Chain Interaction:** The client should be prepared to activate any handler in the chain, not necessarily starting from the first. The request will circulate through the chain until a handler either declines to pass it further or it reaches the end of the chain unprocessed. Possible scenarios include:
    - Chains consisting of a single handler.
    - Requests that do not traverse the entire chain.
    - Requests that pass through all handlers without being processed.

This version should meet the desired formatting. Let me know if further adjustments are needed!

### Pros and Cons

> [!success] **Advantages**
> - **Controlled Order of Handling:** You can specify the exact order in which requests are handled, ensuring that they are processed in a systematic and predictable manner.
> - **[[Single Responsibility Principle]]:** This pattern allows you to decouple the classes that issue commands from those that execute them, promoting cleaner, more modular code.
> - **[[Open Closed Principle]]:** It is easy to introduce new handlers without altering the existing code, making the system extendable and maintaining its current functionality without modification.

> [!warning] **Disadvantages**
> - **Possibility of Unhandled Requests:** There is a risk that some requests may not be handled at all if no appropriate handler is available in the chain, potentially leading to incomplete processing.


### Relations with Other Patterns

- **Chain of Responsibility, [[Command Pattern]], [[Mediator Pattern]], and [[Observer Pattern]]:**  
    - **Chain of Responsibility:** Passes a request sequentially along a dynamic chain of potential receivers until one of them handles it.
    - **Command:** Establishes unidirectional connections between senders and receivers, allowing for requests to be encapsulated as objects.
    - **Mediator:** Eliminates direct connections between senders and receivers, facilitating communication indirectly through a mediator object.
    - **Observer:** Allows receivers to dynamically subscribe to and unsubscribe from receiving requests, promoting flexible communication.
- **[[Composite Pattern]]:** 
    - Often used in conjunction with the Chain of Responsibility. In such cases, requests received by a leaf component can be passed up through the chain of parent components to the root, integrating hierarchical structure management with request handling.
- **Handlers as Commands:**
    - Handlers in the Chain of Responsibility can be implemented using the Command pattern. This setup allows various operations to be executed over the same context object, represented by a request. Alternatively, the request itself might be a Command object, enabling the same operation to be executed across different contexts linked in a chain.
- **[[Decorator Pattern]]:**
    - The Chain of Responsibility and Decorator patterns have similar class structures, both relying on recursive composition to pass execution through a series of objects. However, crucial differences include:
        - **Chain of Responsibility:** Handlers can perform arbitrary operations independently and can terminate the request handling process at any point.
        - **Decorator:** Extends an object’s behavior while maintaining consistency with the base interface, without the ability to disrupt the request flow.

## Examples

This C# code demonstrates the **Chain of Responsibility** design pattern, which allows requests to be passed along a chain of handlers. Each handler in the chain either processes the request or forwards it to the next handler.

> [!abstract]+  **Components of the Implementation**
> 1. **`IHandler` Interface**:
>     
>     - Defines methods to set the next handler (`SetNext`) and to handle requests (`Handle`).
> 2. **`AbstractHandler` Base Class**:
>     
>     - Implements `IHandler`, maintaining a reference to the next handler. If it can't handle a request, it passes it to the next handler in the chain.
> 3. **Concrete Handlers (`MonkeyHandler`, `SquirrelHandler`, `DogHandler`)**:
>    
>     - Extend `AbstractHandler` and provide specific responses to the requests they can handle. If they can't handle a request, they call the base class's handle method to pass it along.
> 4. **`Client` Class**:
>         - Uses the chain of handlers to process a list of requests. It demonstrates the chain's ability to handle various requests and indicates which requests were not handled.

This setup demonstrates the flexibility of the Chain of Responsibility pattern in decoupling the request sender and receiver, allowing for dynamic handling of requests based on the handler's capabilities.

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/ChainOfResponsibility/Program.cs)

> [!example]- Server Side
>``` csharp
>    // The Handler interface declares a method for building the chain of
>    // handlers. It also declares a method for executing a request.
>    public interface IHandler
>    {
>        IHandler SetNext(IHandler handler);
>
>        object Handle(object request);
>    }
>
>    // The default chaining behavior can be implemented inside a base handler
>    // class.
>    abstract class AbstractHandler : IHandler
>    {
>        private IHandler _nextHandler;
>
>        public IHandler SetNext(IHandler handler)
>        {
>            this._nextHandler = handler;
>
>            // Returning a handler from here will let us link handlers in a
>            // convenient way like this:
>            // monkey.SetNext(squirrel).SetNext(dog);
>            return handler;
>        }
>
>        public virtual object Handle(object request)
>        {
>            if (this._nextHandler != null)
>            {
>                return this._nextHandler.Handle(request);
>            }
>            else
>            {
>                return null;
>            }
>        }
>    }
>
>    class MonkeyHandler : AbstractHandler
>    {
>        public override object Handle(object request)
>        {
>            if ((request as string) == "Banana")
>            {
>                return $"Monkey: I'll eat the {request}.\n";
>            }
>            else
>            {
>                return base.Handle(request);
>            }
>        }
>    }
>
>    class SquirrelHandler : AbstractHandler
>    {
>        public override object Handle(object request)
>        {
>            if (request.ToString() == "Nut")
>            {
>                return $"Squirrel: I'll eat the {request}.\n";
>            }
>            else
>            {
>                return base.Handle(request);
>            }
>        }
>    }
>
>    class DogHandler : AbstractHandler
>    {
>        public override object Handle(object request)
>        {
>            if (request.ToString() == "MeatBall")
>            {
>                return $"Dog: I'll eat the {request}.\n";
>            }
>            else
>            {
>                return base.Handle(request);
>            }
>        }
>    }
>```

> [!example]- Client Side
>``` csharp
>    static void Main(string[] args)
>    {
>        ConceptualExample();
>    }
>    private static void ConceptualExample()
>    {
>        // The other part of the client code constructs the actual chain.
>        var monkey = new MonkeyHandler();
>        var squirrel = new SquirrelHandler();
>        var dog = new DogHandler();
>        monkey.SetNext(squirrel).SetNext(dog);
>        // The client should be able to send a request to any handler, not
>        // just the first one in the chain.
>        Console.WriteLine("Chain: Monkey > Squirrel > Dog\n");
>        Client.ClientCode(monkey);
>        Console.WriteLine();
>        Console.WriteLine("Subchain: Squirrel > Dog\n");
>        Client.ClientCode(squirrel);
>    }
>    
>    class Client
>    {
>        // The client code is usually suited to work with a single handler. In
>        // most cases, it is not even aware that the handler is part of a chain.
>        public static void ClientCode(AbstractHandler handler)
>        {
>            foreach (var food in new List<string> { "Nut", "Banana", "Cup of coffee" })
>            {
>                Console.WriteLine($"Client: Who wants a {food}?");
>
>                var result = handler.Handle(food);
>
>                if (result != null)
>                {
>                    Console.Write($"   {result}");
>                }
>                else
>                {
>                    Console.WriteLine($"   {food} was left untouched.");
>                }
>            }
>        }
>    }
>```

## Summary

>[!summary]- **Cheat Sheet**
>**Chain of Responsibility Pattern Cheat Sheet**
>**Purpose**:
>- Allows passing a request along a chain of handlers until one of them handles the request.
>- Decouples the sender of a request from its receivers by giving multiple objects a chance to handle the request.
>
>**Components**:
>- **Handler Interface**: Defines an interface for handling requests and optionally implementing the successor link.
>- **Concrete Handler**: Handles requests they are responsible for; otherwise, forwards the request to the next handler in the chain.
>- **Client**: Initiates the request to a Concrete Handler object on the chain.
>
>**Usage**:
>- Use when more than one object may handle a request, and the handler isn't known in advance.
>- Use when the set of handlers should be specified dynamically.
>
>**Benefits**:
>- Reduces coupling since it frees an object from having to know which other object handles a request.
>- Adds flexibility in assigning responsibilities to objects.
>- Allows a set of classes to act as one with each class handling the request if they are capable.
>
>**Common Scenarios**:
>- Event handling systems where events might be handled at multiple stages.
>- Approval processes where a request passes through a chain of authority to get approved.

^6ef0ed



# References

https://refactoring.guru/design-patterns


