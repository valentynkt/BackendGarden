---
created: 2024-04-15 20:32
aliases:
  - Publish-Subscribe Pattern
  - Event-Subscriber Pattern
  - Dependents Pattern
links: "[[Behavioral patterns]]"
tags:
  - LearningIT
  - evergreen🌳
---

link: [[Behavioral patterns]]

# Observer Pattern

## Overview

![[Pasted image 20240409180259.png]]
_Also known as: Event-Subscriber, Listener_

>[!abstract] 
>**Observer** is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

## Content

### Intent

> [!danger]  **Problem** 
> Imagine you're running an online store, and customers want to know when new products are in stock. You could have customers repeatedly check the website, which can be time-consuming, or you could send everyone emails when new stock arrives, which might annoy those not interested in new products. It's a dilemma between bombarding everyone with notifications or having interested customers miss out on updates.
>
>![[Pasted image 20240409182352.png]]
>_Visiting the store vs. sending spam_

> [!success]  **Solution** 
> - **Publisher:** This is the part of the system where the action happens. For instance, the store that updates its stock.
>- **Subscribers:** These are the customers—or any other entities—that want to stay informed about the publisher's updates.
>![[Pasted image 20240409182411.png]]
>_A subscription mechanism lets individual objects subscribe to event notifications._
he Observer pattern introduces a subscription model where subscribers can sign up or opt-out of notifications from the publisher. This mechanism typically involves:
>
>1. A list within the publisher to keep track of subscribers.
>2. Public methods to add and remove subscribers from this list.
>
>When an event occurs, the publisher iterates through this list, notifying each subscriber of the update.

**Key Points:**
- To avoid dependency chaos, ensure that all subscribers implement a common interface. This allows the publisher to send notifications without needing to know the details of the subscribers.
- The common interface should include a notification method that the publisher can use to send context-relevant information to the subscribers.
- For systems with different types of publishers, consider a common publisher interface with standard subscription and notification methods. This means any subscriber can follow updates from any publisher, all without tightly coupling the two.

![[Pasted image 20240409182423.png]]
_Publisher notifies subscribers by calling the specific notification method on their objects._

**Outcome:** With the Observer pattern, you achieve a clean separation between the publisher and subscribers, allowing for efficient communication and a flexible design where publishers and subscribers can evolve independently.

### Structure

![[Pasted image 20240409182623.png]]

The structure of the Observer pattern is about managing communication and notifications between objects with dependencies—similar to a news agency delivering stories to various newspapers.

**1. Publisher:**

- This is the central figure in the pattern, sometimes known as the subject. It's the object other objects are interested in and want to receive updates from. It maintains a list of subscribers and provides methods for them to join or leave this list.

**2. Event Notification:**

- When something notable occurs, the publisher doesn't keep the news to itself. Instead, it notifies all its subscribers by calling their update methods, effectively broadcasting the event.

**3. Subscriber Interface:**

- To ensure that the publisher doesn't need to know the intricate details of its subscribers, all subscribers agree to follow the same interface, typically with an `update` method that the publisher can call.

**4. Concrete Subscribers:**

- These are the actual objects interested in the publisher's events. They implement the Subscriber interface and define what to do when they receive notifications.

**5. Contextual Information:**

- Subscribers often need more information to respond appropriately to a notification. So, the publisher can send along details with each notification. One way to do this is by passing itself as a reference, allowing subscribers to pull any additional information they need.

**6. The Client:**

- This is typically the part of the code responsible for creating publishers and subscribers and registering the subscribers with the publishers. It's like the person who subscribes to different news feeds and starts receiving updates.

In essence, this pattern decouples the objects that might interact with each other, reducing dependency and potential entanglement. It creates a clear protocol for communication, making it easier for both publishers to send messages and subscribers to receive and act upon them.


### Applicability

The Observer pattern is ideal in situations where the state of one object influences the state of others, and you have a dynamic set of objects observing changes. Here's a simpler explanation:

1. **Dynamic State Changes:** When you need to keep several objects in sync with changes happening to another object, the Observer pattern provides a clean structure for those objects to "listen" to events and updates without needing to maintain a list of dependencies.

2. **GUI Class Interactions:** A common use case is in graphical user interfaces (GUIs). For instance, you may have a button that, when clicked, should trigger actions in various parts of your program. The Observer pattern allows other parts of your program to "subscribe" to button click events and respond accordingly, without the button needing to know about the specifics of the actions.

3. **Temporary or Conditional Observations:** Subscribers can choose when to start and stop listening to the publisher, making the Observer pattern flexible for temporary or conditional event listening. This is useful when you need to monitor certain events only under specific conditions or for a limited period.


By applying the Observer pattern, your objects can communicate with each other in a well-organized manner, especially when it comes to implementing event-handling systems. It streamlines the process of creating reactive applications where actions taken by one part of the system need to be noticed and potentially acted upon by other parts.

### How to Implement

1. **Break Down Business Logic:**
    - Identify the core functionality that operates independently. This will become the publisher (subject).
    - The dependent functionalities will be turned into subscribers (observers).
2. **Define Subscriber Interface:**
    - Create an interface for subscribers with at least a method to receive updates, often called `update()` or `notify()`.
3. **Define Publisher Interface:**
    - Create an interface for publishers and include methods for attaching and detaching subscribers.
4. **Subscription Management:**
    - Choose a location for the subscription list and its management methods. A common approach is to place it in an abstract class implementing the publisher interface.
5. **Concrete Publisher Classes:**
    - Implement specific publishers that extend the abstract class or use the subscription management object. Publishers notify subscribers about changes.
6. **Implement Subscriber Methods:**
    - Define how subscribers should process updates. They may require context data, which can be passed as arguments or obtained directly by referencing the publisher.
7. **Client Configuration:**
    - Instantiate subscribers and register them with corresponding publishers to begin observing events.

By following these steps, you can establish a well-defined communication channel between publishers and subscribers, ensuring that any state changes in the publisher are automatically propagated to all interested subscribers, while keeping both sides decoupled and manageable.

### Pros and Cons

> [!success] **Advantages**
> 1. **[[Open Closed Principle]]:**
>     - New subscriber classes can be added without altering the publisher’s code, which promotes extensibility.
>     - If a publisher interface is in place, new publishers can be introduced without affecting existing subscribers.
> 2. **Dynamic Relationships:**  
>     - The pattern supports the dynamic establishment of relationships between objects, allowing for real-time updates and subscriptions.

> [!warning] **Disadvantages**
> 1. **Unpredictable Notification Order:**
>     - The order in which subscribers receive notifications can be random, depending on the underlying subscription management implementation. This may not be an issue for all applications, but in cases where the order of operations is significant, additional mechanisms may need to be implemented to control the sequence of notifications.

### Relations with Other Patterns

**1. [[Chain Of Responsibility Pattern]]:**
- Enables a request to pass through a sequence of handlers until it's processed. It differs from the Observer, as handlers in the chain can stop the request from going further down the line.

**2. [[Command Pattern]]:**
- Establishes a clear separation between command senders and receivers, unlike the Observer, which allows for a broadcast communication style.

**3. [[Mediator ]]:**
- The Mediator centralizes communication, reducing the direct connections that components might otherwise make (as seen in Observer broadcasts).

**4.  [[Mediator Pattern]]:**
- Both [[Mediator Pattern]] and Observer can be implemented together. For instance, a mediator might use the Observer pattern to inform components about its decisions or to listen to their events.
  
The Observer pattern is distinct in that it allows for a dynamic and potentially large number of "follower" objects to keep track of changes in "leader" objects, enabling a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

## Examples

![[Pasted image 20240409182643.png]]


This C# code illustrates the **Observer** design pattern, which allows objects, called subscribers, to watch and react to events published by another object, known as the publisher. This pattern is commonly used to implement distributed event-handling systems, where the publisher needs to notify multiple subscribers about significant occurrences without being tightly coupled to them.

 > [!abstract]+  **Components of the Implementation**
 >1. **`EventManager` Class (Publisher)**:
 >    
 >    - Manages subscriptions and notifications related to various event types. It holds a dictionary that maps event types to lists of listeners interested in those events.
 >    - Provides methods for subscribing (`Subscribe`), unsubscribing (`Unsubscribe`), and notifying listeners (`Notify`) about events.
 >2. **`IEventListener` Interface (Subscriber Interface)**:
 >    
 >    - Defines a single method `Update`, which is called by the `EventManager` when notifying subscribers of an event.
 >3. **`Editor` Class (Concrete Publisher)**:
 >    
 >    - Owns an instance of `EventManager` to manage event-related communications.
 >    - Has methods like `OpenFile` and `SaveFile` that trigger events. For example, opening a file triggers the "open" event, and saving a file triggers the "save" event, notifying all registered listeners through the event manager.
 >4. **`LoggingListener` and `EmailAlertsListener` Classes (Concrete Subscribers)**:
 >    
 >    - Implement the `IEventListener` interface to handle specific actions when an event occurs.
 >    - `LoggingListener` logs a message to a specified log file when notified.
 >    - `EmailAlertsListener` sends an email notification when notified.


This implementation of the Observer pattern effectively decouples the `Editor` from its listeners, allowing for flexible addition, removal, and modification of response behaviors to specific editor actions without modifying the `Editor` or the main application logic. It's a powerful way to handle events in systems where components need to react to changes enacted by others without tight coupling

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/Observer/Program.cs)

> [!example]- Server Side
>``` csharp
>    // Publisher
>public class EventManager
>{
>    private readonly Dictionary<string, List<IEventListener>> listeners = [];
>    public void Subscribe(string eventType, IEventListener listener)
>    {
>        if (!listeners.ContainsKey(eventType))
>        {
>            listeners[eventType] = [];
>        }
>        listeners[eventType].Add(listener);
>    }
>    public void Unsubscribe(string eventType, IEventListener listener)
>    {
>        if (listeners.ContainsKey(eventType))
>        {
>            listeners[eventType].Remove(listener);
>        }
>    }
>    public void Notify(string eventType, string data)
>    {
>        if (listeners.ContainsKey(eventType))
>        {
>            foreach (var listener in listeners[eventType])
>            {
>                listener.Update(data);
>            }
>        }
>    }
>}
>// Subscriber interface
>public interface IEventListener
>{
>    void Update(string filename);
>}
>// Concrete Publisher
>public class Editor
>{
>    public EventManager Events { get; }
>    private string file;
>    public Editor()
>    {
>        this.Events = new EventManager();
>    }
>    public void OpenFile(string path)
>    {
>        this.file = path;
>        this.Events.Notify("open", file);
>    }
>    public void SaveFile()
>    {
>        // File saving logic would go here...
>        this.Events.Notify("save", file);
>    }
>}
>// Concrete Subscriber
>public class LoggingListener : IEventListener
>{
>    private readonly string logFilename;
>    private readonly string message;
>    public LoggingListener(string logFilename, string message)
>    {
>        this.logFilename = logFilename;
>        this.message = message;
>    }
>    public void Update(string filename)
>    {
>        // Here you would write log to the file using logFilename
>        Console.WriteLine($"Log: {message.Replace("%s", filename)}");
>    }
>}
>public class EmailAlertsListener : IEventListener
>{
>    private readonly string email;
>    private readonly string message;
>    public EmailAlertsListener(string email, string message)
>    {
>        this.email = email;
>        this.message = message;
>    }
>    public void Update(string filename)
>    {
>        // Here you would send an email using email address
>        Console.WriteLine($"Email to {email}: {message.Replace("%s", filename)}");
>    }
>}
>```

> [!example]- Client Side
>``` csharp
>static void Main(string[] args)
>{
>    RealExample();
>}
>private static void RealExample()
>{
>    var editor = new Editor();
>    var logger = new LoggingListener("log.txt", "Someone has opened the file: %s");
>    editor.Events.Subscribe("open", logger);
>    var emailer = new EmailAlertsListener("admin@example.com", "File %s has been modified.");
>    editor.Events.Subscribe("save", emailer);
>    editor.OpenFile("test.txt");
>    editor.SaveFile();
>}
>```

## Summary

>[!summary]- **Cheat Sheet**
>**Observer Pattern Cheat Sheet**
>**Purpose**:
>- Allows a subject to notify a list of observers (subscribers) automatically of any state changes, usually by calling one of their methods.
>- Facilitates low coupling between a subject and its observers.
>
>**Components**:
>- **Subject**: Maintains a list of observers, facilitates adding or removing observers, and notifies them of state changes.
>- **Observer Interface**: Provides a method signature (`update`) that observers must implement in order to receive updates from the subject.
>- **Concrete Observer**: Implements the Observer interface to keep its state consistent with that of the subject. Performs actual update actions in response to notifications.
>
>**Usage**:
>- Use when changes to one object require changing others, and the number of objects involved is unknown or changes dynamically.
>- Use to promote a loosely coupled system where interacting components remain independent.
>
>**Benefits**:
>- Promotes the principle of separation of concerns.
>- Supports broadcast communication which is not feasible using other methods.
>- Observers are only loosely coupled to the subject: minimal interface requirements.
>
>**Common Scenarios**:
>- Implementing distributed event-handling systems.
>- In MVC architecture, model updates are often notified to multiple views using an Observer pattern.
>- Real-time data feeds that need to be updated in the UI or elsewhere when data changes.


# References

https://refactoring.guru/design-patterns