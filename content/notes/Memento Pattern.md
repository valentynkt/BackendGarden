---
created: 2024-04-15 20:32
aliases:
  - Snapshot Pattern
  - Undo Pattern
  - State Save/Restore Pattern
  - Memento
links: "[[Behavioral patterns]]"
tags:
  - LearningIT
  - bud🌿
---
link: [[Behavioral patterns]]

# Memento Pattern

## Overview

![[Pasted image 20240409143650.png]]
_Also known as: Snapshot_

>[!abstract] 
>**Memento** is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.

## Content

### Intent

> [!danger]  **Problem** 
> In modern software applications like text editors, which involve complex operations such as formatting text and inserting images, a common user expectation is the ability to undo actions. A straightforward approach to implementing this feature might involve saving the state of the application's objects before any operation is performed, allowing these states to be restored later if needed.
> 
>![[Pasted image 20240409145723.png]]
>_Before executing an operation, the app saves a snapshot of the objects’ state, which can later be used to restore objects to their previous state_
> 
>However, creating such state snapshots presents challenges, particularly when objects encapsulate their state with private fields, making external access difficult. Assuming you could overcome privacy restrictions and all objects had publicly accessible states, this would still pose significant issues:
> 
> - Any change to the object's structure would necessitate changes in the snapshot-handling logic.
> - Storing these states would require creating container classes with potentially public fields to hold the state data, leading to high coupling and fragility in the design.
> 
>![[Pasted image 20240409145740.png]]
>_How to make a copy of the object’s private state?_

> [!success]  **Solution** 
> The Memento pattern provides a solution by maintaining strong encapsulation boundaries. It involves three key participants:
> 
> - **Originator**: The object whose state needs to be saved and restored. It creates a snapshot of its state as a memento when required.
> - **Memento**: A lightweight object that holds the state of an originator at a particular time. This memento is opaque to other objects, meaning they cannot alter its contents directly but can store and retrieve it.
> - **Caretaker**: The object that keeps track of multiple mementos, often implementing mechanisms to store them efficiently without knowing their contents. In the context of a text editor, this could be a history manager that maintains a stack of states representing different stages of document editing.
>![[Pasted image 20240409145800.png]]
>_The originator has full access to the memento, whereas the caretaker can only access the metadata._
> 
>By delegating the responsibility of creating state snapshots to the originator itself, the Memento pattern allows the originator to produce a memento of its state without exposing its internals. The caretaker, interacting with mementos via a defined interface, can request state rollbacks without needing direct access to the state's contents.
> 
>In practice, when a user performs an operation in the text editor, the editor (originator) generates a memento of its current state and passes it to the history manager (caretaker). This history is visualizable in the UI, showing a stack of all past operations. On an undo request, the most recent memento is retrieved from the stack and used to restore the editor's state.


### Structure

The **Memento** pattern is typically implemented to enable undo functionality by capturing and restoring an object's state. Here are detailed descriptions of its structure, considering different implementation strategies depending on language features and encapsulation levels:

#### 1. **Implementation Using Nested Classes (Common in C++, C#, Java):**
![[Pasted image 20240409150556.png]]


> [!info]+
> - **Originator:**
 >   - The class whose state needs to be saved and later restored. It creates snapshots of its own state and can restore its state from these snapshots as needed.
>- **Memento:**
>   - Acts as a snapshot of the Originator’s state. Typically implemented as an immutable object; it receives the state data only once via the constructor when being created by the Originator. This immutability prevents any further changes to the state once it has been captured.
>- **Caretaker:**
 >   - Manages when and why to capture and restore the Originator's state. It maintains a history of states as a stack of Mementos. Upon request, it can restore the Originator's state by fetching the most recent Memento from the stack and invoking the Originator's method to revert to the saved state.
>- **Nested Memento Class:**
 >   - The Memento class is nested within the Originator class, allowing the Originator full access to the Memento’s private fields and methods for creating or restoring states, while the Caretaker has very limited access, sufficient only to handle the storage and retrieval of these Mementos.

#### 2. **Implementation with an Intermediate Interface (For languages without nested classes, e.g., PHP):**
  ![[Pasted image 20240409150612.png]]


> [!info]+
>- **Intermediate Interface:**
>    - Used to restrict access to the Memento’s fields, typically exposing only the metadata of the Memento to the Caretaker. This setup helps maintain encapsulation while allowing the Caretaker to manage Mementos without modifying them.
>- **Public Memento Members:**
>    - Without nested classes, fields and methods in the Memento may need to be declared public to allow the Originator to access them directly, potentially compromising encapsulation.

#### **Implementation Promoting Stricter Encapsulation:**

   ![[Pasted image 20240409150623.png]]


> [!info]+
> - **Enhanced Encapsulation:** 
 >   - Each type of Originator is paired with a corresponding Memento class. Both classes are tightly linked, but they do not expose any state details externally. This design maximizes encapsulation and ensures that the state cannot be accessed or modified by any class other than the Originator and its Memento.
>- **Restoration via Memento:**  
>    - Instead of the Originator invoking its own restoration method, this task can be delegated to the Memento. The Memento receives the Originator instance and its state values at creation and is responsible for restoring the Originator’s state, enhancing the separation of concerns and encapsulation.
>- **Caretaker's Limited Role:**  
>    - The Caretaker is further restricted from altering the state in Mementos. It handles only the storage and retrieval of these objects, maintaining a strict boundary between state management and state usage.


### Applicability

1. **Snapshot Capability:**
    - Apply the Memento pattern when you need to capture and store the current state of an object in a way that it can be restored later on. This is particularly useful for implementing features like 'undo' or 'rollback' operations.
2. **Transaction-Based Operations:**
    - It's valuable in transactional systems where if an operation fails, you need to revert to a previous state. By saving states as mementos, you can easily return to a stable state if something goes wrong.
3. **Encapsulation Preservation:**
    - Use this pattern when you want to keep an object's state history without exposing its internal structure. The Memento allows the object to save and restore its state without revealing how that state is managed internally.

By encapsulating saved states in mementos, objects do not need to expose their internal state to the outside world, maintaining object privacy and system robustness.

### How to Implement

1. **Choose the Originator:**
    - Identify the class that has the internal state you wish to preserve and restore. This class is known as the originator.
2. **Design the Memento Class:**
    - Create the memento class with fields that correspond to the originator's state. The memento effectively acts as a snapshot of the originator's state.
3. **Ensure Immutability:**
    - Construct the memento in such a way that its state is set only once, typically at creation, and cannot be changed thereafter. This usually means having a constructor that initializes all fields, with no subsequent setters.
4. **Nesting or Interface:**
    - If your language supports nested classes and privacy is a concern, consider nesting the memento inside the originator. Otherwise, define a public interface that exposes only the necessary aspects of the memento without revealing its state.
5. **Implement State Capture:**
    - In the originator, implement a method to create mementos. This method should instantiate a new memento with the current state of the originator passed to the memento's constructor.
6. **Implement State Restoration:**
    - Also in the originator, implement a method that accepts a memento and restores the originator's state based on the memento's stored state.
7. **Caretaker's Role:**
    - Develop the caretaker class, which will manage the timing and storage of mementos. This could involve keeping a stack or list of mementos and knowing the logic for when to create new mementos or restore previous ones.
8. **Integration with Originator:**
    - In some implementations, you might link the memento back to its originator, particularly if the memento class is nested within the originator. This approach could lead to moving the restoration logic into the memento class, provided that the originator has methods to reset its state based on the memento's data.

By following these steps, you can successfully implement the Memento pattern, which is especially handy when you need to provide undo capabilities or manage state history within an application. The pattern allows the originator to remain in control of how its state is captured and restored, promoting encapsulation and simplifying state management.

### Pros and Cons

> [!success] **Advantages**
> 1. **Encapsulation Integrity:**
>     - The Memento pattern allows for the safe capture of an object's state without revealing its internal structure. The object itself manages how the state is stored, ensuring that its encapsulation remains intact.
> 2. **Clean Originator Implementation:** 
>     - It streamlines the originator's responsibilities by offloading the management of state history to the caretaker, allowing the originator to focus on its primary role without being cluttered with the state management code.

> [!warning] **Disadvantages**
> 1. **Memory Overhead:**
>     - If mementos are generated too frequently, the application can end up using a significant amount of memory, especially if the states being saved are large.
> 2. **Lifecycle Management Complexity:**
>     - Caretakers need to be aware of the originator's lifecycle to discard old mementos and free up resources, which can add complexity to the system.
> 3. **Language Limitations:**
>     - In dynamic programming languages like PHP, Python, and JavaScript, it can be challenging to ensure that the memento’s state isn’t altered after creation due to the languages' more flexible nature with respect to data encapsulation.

The **Memento** pattern, while offering a robust solution for state preservation and undo functionalities, requires careful consideration of the application’s memory footprint and lifecycle management. Additionally, the pattern's effectiveness may be influenced by the choice of programming language, with some languages necessitating extra measures to protect the immutability of mementos.

### Relations with Other Patterns

1. **[[Command Pattern]] and Memento:**

- When integrating the Command and Memento patterns, you can leverage their strengths to implement the "undo" functionality. Commands perform actions over an object, while Mementos keep a snapshot of that object's state just before the command executes. If the action needs to be undone, the system can use the Memento to revert the object to its previous state.

2. **Memento and [[Iterator Pattern]]:**

- Combining Memento with Iterator can be very effective, especially when you need to take a snapshot of the current state of an iteration process. If necessary, you can use the Memento to revert to a particular point in the iteration, which is helpful in complex traversals or when the iteration process can be interrupted and potentially rolled back.

3. **[[Prototype Pattern]] as an Alternative:**

- In scenarios where the target object is simple and does not involve complex external resources, the Prototype pattern can sometimes serve as a simpler substitute for Memento. Prototype allows cloning an object's state and may be more straightforward if the state includes easily replicable references or none at all. This approach can be practical when you need a history of states but don't require the additional structure provided by Memento.
  

## Examples

![[Pasted image 20240409162401.png]]

This C# code demonstrates the **Memento** design pattern, which is used to capture and externalize an object's internal state so that the object can be returned to this state later. It encapsulates a snapshot of the state of an object and allows changes to be undone without exposing the details of the implementation.

 > [!abstract]+  **Components of the Implementation**
 >1. **`Editor` Class (Originator)**:
 >    
 >    - Manages the current state of the editor, which includes the text, cursor position (`_curX` and `_curY`), and selection width (`_selectionWidth`).
 >    - Provides methods to modify its state (`SetText`, `SetCursor`, `SetSelectionWidth`) and create a snapshot of its current state (`CreateSnapshot`).
 >2. **`Snapshot` Class (Memento)**:
 >    
 >    - Holds a snapshot of the editor's state at a specific time, including text, cursor position, and selection width.
 >    - Contains a method `Restore` that applies the saved state back to the editor, effectively reverting its state to the moment the snapshot was taken.
 >3. **`Command` Class (Caretaker)**:
 >    
 >    - Acts as the caretaker that manages operations on the `Editor` object while keeping track of the state before changes are made. This allows for the state to be restored if needed.
 >    - It uses the `CreateSnapshot` method to save the state before a change (`MakeBackup`) and `Restore` method of the `Snapshot` to undo changes (`Undo`).

This implementation of the Memento pattern provides a clear example of how to encapsulate and manage the state of an object without exposing the details of the object's internal structure or requiring the object to manage its own history and undo functionality.

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/Memento/Program.cs)

> [!example]- Server Side
>``` csharp
>// Originator class
>public class Editor
>{
>    private string _text;
>    private int _curX, _curY, _selectionWidth;
>    public void SetText(string text)
>    {
>        _text = text;
>    }
>    public void SetCursor(int x, int y)
>    {
>        _curX = x;
>        _curY = y;
>    }
>    public void SetSelectionWidth(int width)
>    {
>        _selectionWidth = width;
>    }
>    public Snapshot CreateSnapshot()
>    {
>        return new Snapshot(this, _text, _curX, _curY, _selectionWidth);
>    }
>}
>// Memento class
>public class Snapshot
>{
>    private readonly Editor _editor;
>    private readonly string _text;
>    private readonly int _curX, _curY, _selectionWidth;
>    public Snapshot(Editor editor, string text, int curX, int curY, int selectionWidth)
>    {
>        _editor = editor;
>        _text = text;
>        _curX = curX;
>        _curY = curY;
>        _selectionWidth = selectionWidth;
>    }
>    public void Restore()
>    {
>        _editor.SetText(_text);
>        _editor.SetCursor(_curX, _curY);
>        _editor.SetSelectionWidth(_selectionWidth);
>    }
>}
>// Command class that acts as Caretaker
>public class Command
>{
>    private Snapshot _backup;
>    private readonly Editor _editor;
>    public Command(Editor editor)
>    {
>        _editor = editor;
>    }
>    public void MakeBackup()
>    {
>        _backup = _editor.CreateSnapshot();
>    }
>    public void Undo()
>    {
>        _backup?.Restore();
>    }
>}
>    ```

> [!example]- Client Side
>``` csharp
>static void Main(string[] args)
>{
>    EditorExample();
>}
>private static void EditorExample()
>{
>    Editor editor = new Editor();
>    Command command = new Command(editor);
>    // Simulate user actions
>    editor.SetText("First version of text");
>    command.MakeBackup(); // Saving the state before changes
>    editor.SetText("Second version of text");
>    // Undo the changes
>    command.Undo(); // The text reverts back to "First version of text"
>}
>```

## Summary

>[!summary]- **Cheat Sheet**
>**Memento Pattern Cheat Sheet**
>**Purpose**:
>- Allows an object to save its internal state without exposing its internal structure, so that it can be restored to this state later.
>- Useful for implementing undo mechanisms in applications.
>
>**Components**:
>- **Originator**: The object that knows how to save itself. It creates a memento containing a snapshot of its current internal state.
>- **Memento**: A small object used by the Originator to store its internal state. Memento restricts other objects from accessing this state, enforcing encapsulation.
>- **Caretaker**: Holds onto the Memento. It can request a Memento from the Originator to capture the current state and pass it back at a later date for undo functionality. The caretaker is responsible for keeping the memento.
>
>**Usage**:
>- Use when you need to restore an object back to its previous state (undo via rollback).
>- Use when a direct interface to obtain the state would expose implementation details and break the object's encapsulation.
>
>**Benefits**:
>- Provides a clean way to recover state for an object or an application.
>- Does not violate the encapsulation of the Originator.
>- Decouples the Originator's state management from the main functionality, focusing on doing one thing well.
>
>**Common Scenarios**:
>- Implementing undo in software, allowing users to revert to a previous state.
>- Saving snapshots of an object's state for recovery processes.

^2cc1ce


# References

https://refactoring.guru/design-patterns