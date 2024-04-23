---
created: 15-04-2024 20:32
aliases:
  - Objects for States Pattern
  - State Object Pattern
  - Context Pattern
links: "[[Behavioral patterns]]"
tags:
  - seed🌱
  - LearningIT
---

# State Pattern

## Overview

![[Pasted image 20240409193907.png]]

>[!abstract] 
>**State** is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class

## Content

### Intent

> [!danger]+ **Problem** 
> Finite-State Machines (FSMs) are a common way to represent different "states" within a program or an object. An FSM for an object would have a finite number of states, and the object’s behavior is different for each state. Transitions between states are defined and can depend on conditions or events.
>![[Pasted image 20240409194000.png]]
>_Finite-State Machine_
>
>![[Pasted image 20240409194023.png]]
>_Possible states and transitions of a document object_
>Consider an example of a `Document` object with states like `Draft`, `Moderation`, and `Published`. Depending on its state, the `publish` behavior of the document changes.
>
>The issue with FSMs comes when they are implemented with numerous conditionals (`if` or `switch` statements), making the code bloated, hard to maintain, and prone to errors as more states and transitions are added over time.

> [!success]+ **Solution** 
> The State pattern suggests encapsulating state-specific behaviors into separate classes and having the original object delegate state-related work to these classes, known as state objects. The original object, known as the context, maintains a reference to one of these state objects to represent its current state.
>![[Pasted image 20240409194035.png]]
>_Document delegates the work to a state object_
>
>When a state transition occurs, the context simply switches the state object to another one that represents the new state. This approach adheres to the Open/Closed Principle, making it easy to introduce new states without changing existing state classes or the context.
>
>State objects can initiate transitions to other states, making the State pattern distinct from the Strategy pattern, where each strategy is independent and unaware of the others.

**Benefits:**

- The pattern organizes state-specific behaviors and divides them into separate classes.
- It introduces new states without altering existing state classes or the context.
- By eliminating bulky conditional statements, it simplifies the maintenance of state-dependent behaviors.

### Structure

![[Pasted image 20240409195123.png]]

1. **Context Class:**
    - The Context maintains a reference to an instance of a Concrete State subclass, which represents the current state of the object.
    - The Context delegates all state-specific work to the current State object.
    - The Context provides a setter to change the State object and can have methods to facilitate state transitions.
2. **State Interface:**
    - This interface declares methods that all Concrete State classes must implement. The methods defined in the State interface correspond to the behavior that can change across different states.
3. **Concrete State Subclasses:**
    - These classes implement the State interface and provide their own implementations for state-specific behavior.
    - To reduce redundancy, you can create abstract classes that encapsulate common behavior shared by various states.
    - Concrete States can store a backreference to the Context, allowing them to transition the Context to a different state.
4. **State Transitions:**
    - The State objects change the Context's current state by passing a new State object to the Context's setter method.
    - The context and the current State object collaborate closely, with State objects being responsible for carrying out state transitions by instructing the Context to change its current State object.

This approach allows for a clean separation of concerns between the changing behavior encapsulated in State objects and the invariant part of the behavior within the Context. It contributes to organizing state-specific logic and making an object's behavior adaptable to its internal state without using numerous conditionals.

### Applicability

The State pattern is particularly useful in scenarios where an object's behavior changes based on its state, and where these states are numerous and change frequently. Here are some situations where applying the State pattern is beneficial:

1. **Complex State-Dependent Behavior:**
    - Use the State pattern when an object's behavior varies significantly depending on its internal state. This pattern helps in managing state-dependent behaviors by encapsulating them into separate classes, thereby making the system easier to understand and manage.
2. **Large Conditional Logic:**
    - If a class has extensive conditional logic that adjusts its behavior based on the object's state, the State pattern can simplify this by moving the state-specific logic into distinct classes. This approach not only makes the main class cleaner and more comprehensible but also simplifies modifications in state management.
3. **Frequent Changes in State Logic:**
    - When the logic associated with state transitions or the state-dependent behaviors needs frequent updates, having a State pattern makes these changes more manageable and isolated. Each state can be modified or extended independently without affecting others, which enhances flexibility and reduces error risk.
4. **Code Duplication Across States:**
    - If there are duplicative codes in multiple condition branches that handle different states, the State pattern can centralize this common functionality in a base state class. Derived state classes can then inherit common behaviors and override them when necessary, which reduces redundancy and errors.

By organizing state-specific behaviors into separate classes and promoting the use of a common interface for interacting with these states, the State pattern allows for a more organized and scalable approach. It's particularly useful in systems where operations or behaviors are tightly linked to the state of objects, such as in user interfaces, document management systems, and game programming.


### How to Implement

1. **Identify the Context Class:**
    - Determine which class will act as the context. This could be an existing class with state-dependent code or a new class if the state-specific code is spread across several classes.
2. **Declare the State Interface:**
    - Define an interface that represents the various states. This interface should declare methods that encapsulate state-specific behaviors. Focus only on those methods that will exhibit different behaviors in different states.
3. **Create Concrete State Classes:**
    - For each state of the context, create a concrete class that implements the state interface. Extract the state-specific code from the context class to these new classes. During this process, you may encounter dependencies on the context’s private members. Address these by:
        - Making necessary members public (not recommended due to breaking encapsulation).
        - Adding public methods in the context to perform the required operations and calling these methods from the state classes.
        - If supported by your programming language, nesting state classes within the context class to give them access to its private members.
4. **Add State Management in the Context:**
    - Include a field in the context class that holds a reference to the current state object, as defined by the state interface. Provide a public setter to allow changing the state from outside the context class.
5. **Integrate State Methods into the Context:**
    - Revise the context’s methods where state-dependent code was removed. Replace the old code with delegation calls to the corresponding methods of the state object.
6. **Manage State Transitions:**
    - Implement logic within the context or state classes to change the state. This involves instantiating the appropriate state class and setting it as the current state of the context. This could be triggered by certain actions within the context or explicitly by the client.
7. **Client Interaction:**
    - The client or other parts of the application that interact with the context should now work with it through the state interface. This setup abstracts the state management from the client and promotes a more dynamic and flexible interaction model.

This approach modularizes the code by separating different states into distinct classes. It not only makes the code cleaner and easier to manage but also facilitates easier extension and maintenance of the system by isolating state-specific behavior

### Pros and Cons

> [!success] **Advantages**
> 1. **[[Single Responsibility Principle]]:** By organizing the code related to specific states into separate classes, each class handles the behavior associated with that state, thereby adhering to the Single Responsibility Principle. This separation enhances modularity and readability.
>     
> 2. **[[Open Closed Principle]]:** The pattern allows new states to be introduced without altering existing state classes or the context class. This makes the application more extensible and maintainable, as new functionalities can be added with minimal changes to existing code.
>     
> 3. **Simplified Context Code:** By removing bulky conditional statements related to state transitions and behaviors from the context class and delegating these responsibilities to individual state classes, the overall complexity of the context class is significantly reduced. This cleanup makes the context class easier to understand and maintain.

> [!warning] **Disadvantages**
> 1. **Overhead of Using the Pattern:** Implementing the State pattern can be considered overkill for scenarios where the state machine involved has only a few states or when the states do not change frequently. In such cases, the overhead of setting up separate classes for each state may not justify the benefits.
>     
> 2. **Increased Number of Classes:** Each state is represented by its own class, which can lead to a proliferation of classes in the system. This increase in the number of classes can make the system architecture more complex and potentially harder to navigate, especially for new developers or in very large projects.
>     
> 3. **Potential for Over-Engineering:** There's a risk of over-engineering the solution if the State pattern is applied where simpler conditional logic would suffice. This can lead to unnecessary abstraction and complexity, increasing the learning curve and potentially impacting performance.

### Relations with Other Patterns

The State pattern has interesting relationships with several other design patterns. Each pattern serves a unique purpose, and understanding these relationships can help in selecting the appropriate pattern for a given problem:

1. **[[Bridge Pattern]]:**
    - **Structure Similarity:** Both the Bridge and State patterns use composition to separate responsibilities into different classes. While Bridge focuses on separating an abstraction from its implementation, allowing them to vary independently, the State pattern concentrates on altering the behavior of an object when its internal state changes.
    - **Usage Context:** Bridge is more about organizing code to manage abstractions and their implementations independently, making it easier to scale. State is used for managing state transitions in a more structured manner.
2. **[[Strategy Pattern]]:** 
    - **Common Foundation:** Both patterns leverage composition to change the behavior of the context by delegating work to helper objects. This structural similarity can sometimes lead to confusion in distinguishing between the two.
    - **Behavioral Differences:** While Strategy allows the context to change its strategy algorithm dynamically, treating strategies as interchangeable, State lets the state objects control transitions and behave differently depending on the state of the context. States are aware of each other and can initiate transitions, which are not capabilities of Strategy.
3. **[[Adapter Pattern]]:**
    - **Structural Overlap:** Like the Bridge, the Adapter pattern shares structural similarities with State in that it uses composition to delegate work to other objects. However, the Adapter is primarily focused on making one interface compatible with another, bridging a gap between two incompatible interfaces.
    - **Functional Distinction:** The Adapter is used to allow two incompatible interfaces to work together without modifying their existing code. This is fundamentally different from State’s purpose of managing changes in an object’s behavior based on its internal state.


## Examples

This C# code demonstrates the **State** design pattern, which allows an object to change its behavior when its internal state changes. In this example, the pattern is applied to an audio player that can be in different states, such as playing music, being locked, or ready to play.

> [!abstract]+  **Components of the Implementation**
>1. **`IState` Interface**:
>    
>    - Defines the state interface with methods (`ClickLock`, `ClickPlay`, `ClickNext`, `ClickPrevious`) that represent actions triggered by the user.
>2. **`AudioPlayer` Class (Context)**:
>    
>    - Acts as the context class that maintains an instance of the state interface to delegate user actions to the current state.
>    - Transitions between different states based on interactions, manipulating playback and track navigation based on the state.
>3. **Concrete States (`LockedState`, `ReadyState`, `PlayingState`)**:
>    
>    - **`LockedState`**: When the player is locked, most actions (play, next, previous) have no effect, but clicking lock will unlock it and switch to the `ReadyState`.
>    - **`ReadyState`**: The default state where the player is ready to start playback. Actions in this state can start playing music, or navigate through songs.
>    - **`PlayingState`**: When music is playing, actions here can stop playback, lock the player, or navigate to the next or previous tracks.
>
>
>**Workflow**:
>
>- The `AudioPlayer` initializes in the `ReadyState`.
>- User actions are routed through the `AudioPlayer`'s state object, which performs actions and transitions the player to different states as needed.

This implementation of the State pattern effectively demonstrates managing an object's state transitions in response to user actions, encapsulating state-specific behaviors within state objects. This design keeps the context class clean and focused on forwarding user actions to the current state, making the system easier to extend and maintain.

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/State/Program.cs)

>[!example]- **Server Side**
>``` csharp
> // State interface
> public interface IState
> {
>     void ClickLock();
>     void ClickPlay();
>     void ClickNext();
>     void ClickPrevious();
> }
> // Context class
> public class AudioPlayer
> {
>     public IState State { get; set; }
>     // Fields for UI, volume, playlist, currentSong are assumed to be implemented
>     public AudioPlayer()
>     {
>         State = new ReadyState(this);
>         // Assume UI with buttons is initialized and events are hooked up properly
>     }
>     // Methods to change the states
>     public void ClickLock()
>     {
>         State.ClickLock();
>     }
>     public void ClickPlay()
>     {
>         State.ClickPlay();
>     }
>     public void ClickNext()
>     {
>         State.ClickNext();
>     }
>     public void ClickPrevious()
>     {
>         State.ClickPrevious();
>     }
>     // Other functionality related to the player
>     public void StartPlayback()
>     {
>         // Start playing the music
>     }
>     public void StopPlayback()
>     {
>         // Stop the music
>     }
>     public void NextSong()
>     {
>         // Switch to the next song
>     }
>     public void PreviousSong()
>     {
>         // Switch to the previous song
>     }
> }
> // Concrete states
> public class LockedState : IState
> {
>     private readonly AudioPlayer _player;
>     public LockedState(AudioPlayer player)
>     {
>         _player = player;
>     }
>     public void ClickLock()
>     {
>         // Unlock the player and change the state to the appropriate state
>         _player.State = new ReadyState(_player);
>     }
>     public void ClickPlay()
>     {
>         // Do nothing
>     }
>     public void ClickNext()
>     {
>         // Do nothing
>     }
>     public void ClickPrevious()
>     {
>         // Do nothing
>     }
> }
> public class ReadyState : IState
> {
>     private readonly AudioPlayer _player;
>     public ReadyState(AudioPlayer player)
>     {
>         _player = player;
>     }
>     public void ClickLock()
>     {
>         _player.State = new LockedState(_player);
>     }
>     public void ClickPlay()
>     {
>         _player.StartPlayback();
>         _player.State = new PlayingState(_player);
>     }
>     public void ClickNext()
>     {
>         _player.NextSong();
>     }
>     public void ClickPrevious()
>     {
>         _player.PreviousSong();
>     }
> }
> public class PlayingState : IState
> {
>     private readonly AudioPlayer _player;
>     public PlayingState(AudioPlayer player)
>     {
>         _player = player;
>     }
>     public void ClickLock()
>     {
>         _player.State = new LockedState(_player);
>     }
>     public void ClickPlay()
>     {
>         _player.StopPlayback();
>         _player.State = new ReadyState(_player);
>     }
>     public void ClickNext()
>     {
>         // Double-click logic is not handled here for simplicity
>         _player.NextSong();
>     }
>     public void ClickPrevious()
>     {
>         // Double-click logic is not handled here for simplicity
>         _player.PreviousSong();
>     }
> }
>```

>[!example]- **Client Side**
>``` csharp
>static void Main(string[] args)
>{
>    RealExample();
>    ConceptualExample();
>}
>private static void RealExample()
>{
>    var player = new AudioPlayer();
>    Console.WriteLine("Testing the Audio Player with State Pattern");
>    // Initially in ReadyState
>    Console.WriteLine("\nInitial State: Ready");
>    player.ClickPlay(); // Starts playback and transitions to PlayingState
>    Console.WriteLine("Clicked Play: Should be playing now");
>    // Now in PlayingState
>    Console.WriteLine("\nState: Playing");
>    player.ClickLock(); // Locks the player and transitions to LockedState
>    Console.WriteLine("Clicked Lock: Should be locked now");
>    // Now in LockedState
>    Console.WriteLine("\nState: Locked");
>    player.ClickPlay(); // No effect because the player is locked
>    Console.WriteLine("Clicked Play: No effect, player is locked");
>    player.ClickLock(); // Unlocks the player and returns to ReadyState
>    Console.WriteLine("Clicked Lock Again: Should be unlocked and ready now");
>    // Player back in ReadyState
>    Console.WriteLine("\nState: Ready");
>    player.ClickNext(); // Assumes going to the next track
>    Console.WriteLine("Clicked Next: Should prepare the next track");
>    Console.WriteLine("\nTesting complete.");
>}
>```


## Summary

>[!summary]- **Cheat Sheet**
>**State Pattern Cheat Sheet**
>**Purpose**:
>- Allows an object to alter its behavior when its internal state changes, appearing as if it changed its class.
>- Encapsulates varying behavior for the same routine based on an object's state object.
>
>**Components**:
>- **Context**: Maintains an instance of a ConcreteState subclass that defines the current state.
>- **State Interface**: Defines an interface to encapsulate the behavior associated with a particular state of the Context.
>- **Concrete States**: Implement the State interface and provide the behavior associated with a state of the Context.
>
>**Usage**:
>- Use when the behavior of an object should change at runtime depending on its state.
>- Use when complex conditions tie object behavior to its state, and many operations within the object conditional statements that depend on the object's state.
>
>**Benefits**:
>- Organizes state-specific code into separate classes.
>- Introduces new states without changing existing state classes or the context.
>- Simplifies the code in the context required to switch between states.
>
>**Common Scenarios**:
>- Workflow management where objects go through different states with different transition rules.
>- UI tools where user interactions change the state of objects, affecting behavior and operations.


# References

https://refactoring.guru/design-patterns