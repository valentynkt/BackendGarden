---
created: 2024-04-15 20:31
aliases:
  - Action Pattern
  - Transaction Pattern
  - Command Object Pattern
links: "[[Behavioral patterns]]"
tags:
  - LearningIT
  - evergreen🌳
---
link: [[Behavioral patterns]]

# Command Pattern

## Overview

![[Pasted image 20240408232148.png]]
_Also known as: Action, Transaction_

>[!abstract] 
>**Command** is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.

## Content

### Intent

> [!danger]  **Problem** 
> Imagine developing a new text-editor application that includes a toolbar with various buttons for different operations, such as a button class used for both toolbar buttons and generic buttons in dialogs. While these buttons look similar, they are intended to perform diverse actions. The simplest initial approach might be to create multiple subclasses for each button type, embedding the specific action (like click handling) within these subclasses.
>
>![[Pasted image 20240408233721.png]]
>_All buttons of the app are derived from the same class_
>
>However, this strategy quickly proves flawed:
>
>- **Scalability Issues:** The number of subclasses becomes unmanageable, especially when modifications to the base Button class risk breaking the functionality in subclasses.
>![[Pasted image 20240408233747.png]]
>- **Code Duplication:** Operations such as "Copy" and "Paste" might be triggered from multiple interfaces—toolbar buttons, context menus, or keyboard shortcuts—leading to redundant code across multiple classes or awkward dependencies among GUI components.
>![[Pasted image 20240408233810.png]]
>_Several classes implement the same functionality._

> [!success]  **Solution** 
> A robust software design often adheres to the principle of separation of concerns—dividing an application into distinct layers, such as the graphical user interface (GUI) and the business logic. The GUI layer handles input and display, while the business logic layer manages core functionalities like data processing or complex calculations.
> 
>![[Pasted image 20240408234146.png]]
>_Accessing the business logic layer via a command._
> 
>The Command pattern enhances this separation by encapsulating all details of a request a method call on a business logic object, including the method name and parameters into a separate command class. This encapsulation allows GUI objects to interact with business logic without knowing the specifics of operations:
> 
> - **Command Abstraction:** Each command wraps a business logic request and is executed by the GUI. This abstraction means the GUI doesn't need to know about the receiver or how the request is processed.
> - **Uniform Interface:** Commands implement a common interface, typically with a single execution method, facilitating their interchangeability without coupling senders to specific command classes.
> - **Dynamic Configuration:** Commands can be pre-configured with necessary parameters or designed to fetch them independently, thus maintaining flexibility in how requests are handled.

By applying the Command pattern, each button in your text editor simply holds a reference to a command object and triggers this command upon being clicked. This approach eliminates the need for multiple button subclasses, reduces redundancy, and decouples GUI operations from business logic. The same command objects can be used across different GUI elements (like menus and shortcuts) linked to the same operations, streamlining the codebase and enhancing maintainability.

![[Pasted image 20240408234416.png]]
_The GUI objects delegate the work to commands_

This design not only simplifies the GUI layer but also introduces a flexible middle layer that facilitates easier modifications and extensions to the application's functionality, showcasing the wide-ranging benefits of the Command pattern.

### Structure

![[Pasted image 20240408234638.png]]

1. **Invoker (Sender):** The Sender, also known as the Invoker, is tasked with initiating requests. It holds a reference to a command object and activates that command, rather than communicating directly with the Receiver. The Sender isn't responsible for creating commands; it typically receives an already instantiated command from the Client.
    
2. **Command Interface:** This interface generally declares a single method for executing the command. It's the common interface for all Concrete Commands, enabling consistent execution.
    
3. **Concrete Commands:** Concrete Commands encapsulate various requests. A command delegates the execution to a Receiver — the business logic object — instead of carrying out the task itself. To simplify the code structure, command parameters are defined as fields within the Concrete Command, and immutability is achieved by initializing these fields exclusively via the constructor.
    
4. **Receiver:** The Receiver class incorporates the business logic. It can be any object capable of performing the required action. Commands primarily manage how requests are conveyed to the Receiver, which then performs the necessary work.
    
5. **Client:** The Client constructs and configures Concrete Command objects. It supplies all necessary request parameters, including the Receiver instance, to the command's constructor. Subsequently, the command can be linked to one or several Invokers.
    

By maintaining this structure, the Command Pattern effectively separates the concerns of request initiation and execution, ensuring a clean division between the system's interface and business logic.

### Applicability

1. **Parametrizing Objects with Operations:**
    - Useful for turning method calls into objects, allowing them to be passed as arguments, stored, or manipulated independently. This is especially beneficial in graphical user interfaces (GUIs), where user actions can trigger different operations dynamically.
2. **Queueing and Scheduling Operations:**
    - Commands can be serialized and stored for later execution, making them perfect for applications that need to delay actions, schedule tasks, or log operations for future review.
3. **Implementing Reversible Operations:**
    - Ideal for adding undo/redo functionality to applications. Each command can either carry its own undo mechanism or work with the Memento pattern to manage state snapshots for easy reversal. While powerful, this can increase memory usage, unless commands are designed to reverse their actions without needing to save the entire state.

### How to Implement

1. **Command Interface:** Start by defining a command interface with an `Execute` method. This will be the common interface for all commands, ensuring they can be used interchangeably by the sender.
   
2. **Concrete Commands:** Create concrete command classes that implement the command interface. Each command class should have:
    - Fields to store command arguments.
    - A reference to the receiver object, which will actually perform the work. Initialize these fields via the command's constructor to bind the command with its receiver and any necessary arguments.

3. **Senders (Invokers):** Identify the sender classes in your application. These could be menu items, buttons, or any other objects that should trigger commands. Add fields to these sender classes to hold references to command objects, and ensure senders interact with commands solely through the command interface. Senders typically receive their commands from the client, not creating them directly.
4. **Sender Execution:** Modify sender classes to invoke the command's `Execute` method instead of sending requests directly to the receiver. This decouples the sender's role as an initiator of actions from the receiver's role as the executor of actions.

5. **Client Initialization:** Set up the system by following these steps in the client code:
    - Instantiate receiver objects—these are the objects that know how to perform various actions.
    - Create concrete command objects and associate them with the appropriate receivers.
    - Initialize senders with the specific commands they should execute.
      
By following these steps, the command pattern encapsulates each request as an object, thereby allowing for parameterization of objects with operations, queuing of actions, and implementing undo/redo mechanisms.

### Pros and Cons

> [!success] **Advantages**
> - **[[Single Responsibility Principle]]:** The Command pattern adheres to the Single Responsibility Principle by separating the classes that issue commands from those that execute them, enhancing modularity and simplifying maintenance.
> - **[[Open Closed Principle]]:** Introducing new commands without altering existing code aligns with the Open/Closed Principle, allowing the application to be extended without being modified.
> - **Undo/Redo Functionality:** The pattern provides a clear structure for implementing undo and redo capabilities in applications.
> - **Deferred Execution:** Commands can be scheduled or delayed, enabling deferred execution of operations.
> - **Composite Commands:** Individual commands can be composed into more complex ones, adding versatility to the handling of operation

> [!warning] **Disadvantages**
> - **Increased Complexity:** Introducing the Command pattern adds a new layer of abstraction between senders and receivers, which can complicate the code structure and potentially increase the learning curve for new developers on the projec

### Relations with Other Patterns

- **[[Chain Of Responsibility Pattern]] , [[Command Pattern]], [[Mediator Pattern]], and [[Observer Pattern]]:** These patterns offer diverse mechanisms for setting up communication between senders and receivers of requests:
    
    - **Chain of Responsibility:** Passes a request along a chain of potential handlers until one of them deals with it.
    - **Command:** Forms a unidirectional link between senders and receivers, encapsulating the request as an object.
    - **Mediator:** Removes direct connections by making senders and receivers communicate through a mediator.
    - **Observer:** Allows receivers to subscribe and unsubscribe from notifications dynamically, receiving requests when events occur.
- **[[Chain Of Responsibility Pattern]] with Commands:** Handlers in the Chain of Responsibility can be realized as Commands to operate on the same context object, facilitating a variety of operations within a chain. Alternatively, treating the request itself as a Command object enables the same operation to be applied across different contexts sequentially.
    
- **Command and [[Memento Pattern]]:** When implementing undo functionality, Command handles the execution of operations, while Memento preserves the state of the object prior to the execution of a command. This synergy allows for changes to be reverted cleanly.
    
- **Command and [[Strategy Pattern]]:** Both patterns allow an object to be configured with an action, but their purposes differ:
    
    - **Command:** Converts operations into objects with parameters as object fields, enabling operations to be deferred, queued, or logged.
    - **Strategy:** Defines a family of interchangeable algorithms that can be swapped to alter the behavior of a context class.
- **[[Prototype Pattern]] in Command:** Prototype is useful for storing copies of Commands in a history to replay them later.
    
- **[[Visitor Pattern]] as an Extension of Command:** Visitor can be seen as a more complex implementation of Command, where an operation can be executed across a variety of objects from different classes, akin to multiple specialized Command objects.

## Examples

![[Pasted image 20240409003243.png]]

This C# code demonstrates the **Command** design pattern, which encapsulates a request as an object, thereby allowing users to parameterize clients with different requests, queue or log requests, and support undoable operations. The code includes a simple text editing application with commands like Copy, Cut, Paste, and Undo, and it uses a command history to manage undo operations.

> [!abstract]+  **Components of the Implementation**
>1. **`Command` Abstract Class**:
>    
>    - Serves as the base class for all commands in the application. It holds references to the `Application` and `Editor` classes, which are needed to execute commands.
>    - Includes a `SaveBackup` method to save the current state before executing a command, enabling undo functionality.
>    - Defines an abstract `Execute` method that all concrete command classes must implement.
>2. **Concrete Command Classes (`CopyCommand`, `CutCommand`, `PasteCommand`, `UndoCommand`)**:
>    
>    - These classes extend the `Command` class and implement the `Execute` method to perform specific actions:
>        - `CopyCommand` copies the selected text to the clipboard.
>        - `CutCommand` copies the selected text to the clipboard and deletes it from the editor.
>        - `PasteCommand` replaces the selected text in the editor with the clipboard's contents.
>        - `UndoCommand` executes an undo action in the application.
>3. **`CommandHistory` Class**:
>    
>    - Manages the history of commands that have been executed, allowing for undo operations. It uses a stack to keep track of commands.
>4. **`Editor` Class**:
>    
>    - Represents the text editor component. It includes methods to get the selected text, delete the selected text, and replace the selected text.
>5. **`Application` Class**:
>    
>    - Manages the overall operations of the application. It holds the command history and a list of editors, and it has methods to execute commands and perform undo operations.

This code example effectively illustrates how the Command pattern can be used to handle operations in software applications that require actions to be reversible. It also showcases the encapsulation of all details of an operation in a command object.

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/Command/Program.cs)

> [!example]- Server Side
>``` csharp
>public abstract class Command
>{
>    protected Application app;
>    protected Editor editor;
>    protected string backup;
>    public Command(Application app, Editor editor)
>    {
>        this.app = app;
>        this.editor = editor;
>    }
>    protected void SaveBackup()
>    {
>        backup = editor.Text;
>    }
>    public void Undo()
>    {
>        editor.Text = backup;
>    }
>    public abstract bool Execute();
>}
>public class CopyCommand : Command
>{
>    public CopyCommand(Application app, Editor editor) : base(app, editor) { }
>    public override bool Execute()
>    {
>        app.Clipboard = editor.GetSelection();
>        return false;
>    }
>}
>public class CutCommand : Command
>{
>    public CutCommand(Application app, Editor editor) : base(app, editor) { }
>    public override bool Execute()
>    {
>        SaveBackup();
>        app.Clipboard = editor.GetSelection();
>        editor.DeleteSelection();
>        return true;
>    }
>}
>public class PasteCommand : Command
>{
>    public PasteCommand(Application app, Editor editor) : base(app, editor) { }
>    public override bool Execute()
>    {
>        SaveBackup();
>        editor.ReplaceSelection(app.Clipboard);
>        return true;
>    }
>}
>public class UndoCommand : Command
>{
>    public UndoCommand(Application app, Editor editor) : base(app, editor) { }
>    public override bool Execute()
>    {
>        app.Undo();
>        return false;
>    }
>}
>public class CommandHistory
>{
>    private readonly Stack<Command> history = new Stack<Command>();
>    public void Push(Command command)
>    {
>        history.Push(command);
>    }
>    public Command Pop()
>    {
>        return history.Count > 0 ? history.Pop() : null;
>    }
>}
>public class Editor
>{
>    public string Text { get; set; }
>    // For simplicity, this example assumes the entire text is always selected.
>    // In a real application, you would need to manage the selection range.
>    public string GetSelection()
>    {
>        return Text;
>    }
>    public void DeleteSelection()
>    {
>        Text = string.Empty; // Clears the text as if the entire text is selected.
>    }
>    public void ReplaceSelection(string text)
>    {
>        // This replaces the entire text, assuming the whole text is selected.
>        Text = text;
>    }
>}
>public class Application
>{
>    public string Clipboard { get; set; }
>    public Editor[] Editors { get; set; }
>    public Editor ActiveEditor { get; set; }
>    public CommandHistory History { get; set; }
>    public Application()
>    {
>        History = new CommandHistory();
>        // Initialization of editors and active editor is required.
>    }
>    public void ExecuteCommand(Command command)
>    {
>        if (command.Execute())
>        {
>            History.Push(command);
>        }
>    }
>    public void Undo()
>    {
>        Command command = History.Pop();
>        command?.Undo();
>    }
>}
>```

> [!example]- Client Side
>``` csharp
>static void Main(string[] args)
>{
>    RealExample();
>    //  ConceptualExample();
>
>private static void RealExample()
>{
>    // Setup application and edito
>    var app = new Application();
>    var editor = new Editor();
>    app.ActiveEditor = editor
>    // Simulate user interaction
>    // User types some text
>    editor.Text = "Hello, World!";
>    Console.WriteLine($"Editor text: {editor.Text}")
>    // User selects "Hello, " and copies it
>    editor.Text = "Hello, World!";
>    app.ExecuteCommand(new CopyCommand(app, editor));
>    Console.WriteLine($"Clipboard after copy: {app.Clipboard}")
>    // User selects the entire text and cuts it
>    app.ExecuteCommand(new CutCommand(app, editor));
>    Console.WriteLine($"Editor text after cut: {editor.Text}");
>    Console.WriteLine($"Clipboard after cut: {app.Clipboard}")
>    // User pastes the clipboard content
>    app.ExecuteCommand(new PasteCommand(app, editor));
>    Console.WriteLine($"Editor text after paste: {editor.Text}")
>    // User realizes a mistake and decides to undo the last action
>    app.Undo();
>    Console.WriteLine($"Editor text after undo: {editor.Text}")
>    // Wait for user input to prevent the console from closing immediately
>    Console.ReadLine();
>}
>```

## Summary

>[!summary]- **Cheat Sheet**
>**Command Pattern Cheat Sheet**
>**Purpose**:
>- Encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.
>
>**Components**:
>- **Command Interface**: Declares an interface for executing operations.
>- **Concrete Command**: Implements the Command interface and defines a binding between a Receiver object and an action.
>- **Invoker**: Asks the command to carry out the request.
>- **Receiver**: Knows how to perform the operations associated with carrying out a request.
>- **Client**: Creates a Concrete Command object and sets its receiver.
>
>**Usage**:
>- Use when you need to issue requests to objects without knowing anything about the operation being requested or the receiver of the request.
>- Use to implement reversible operations.
>
>**Benefits**:
>- Decouples the class that invokes the operation from the one that knows how to perform it.
>- Commands can be extended and replaced.
>- You can assemble sets of commands into composite commands.
>
>**Common Scenarios**:
>- GUI buttons and menu items in software development frameworks.
>- Operations in database transaction systems that support rollback.
>- Macro recording and management.



# References

https://refactoring.guru/design-patterns

