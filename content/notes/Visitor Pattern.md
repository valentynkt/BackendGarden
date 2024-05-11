---
created: 2024-04-15 20:33
aliases:
  - Dispatcher Pattern
  - Double Dispatch Pattern
  - Operation Separation Pattern
  - Visitor
links: "[[Behavioral patterns]]"
tags:
  - LearningIT
  - evergreen🌳
---

links: [[Behavioral patterns]]

# Visitor Pattern

## Overview

![[Pasted image 20240411172432.png]]
>[!abstract] 
>**Visitor** is a [[Behavioral patterns|Behavioral]] design pattern that lets you separate algorithms from the objects on which they operate.

## Content

### Intent

> [!danger]  **Problem** 
> ![[Pasted image 20240411172526.png]]
> _Exporting the graph into XML._
> 
>In a geographic information app, you're tasked with implementing features like exporting data into various formats without modifying existing node classes. These classes represent different geographic entities and are structured as a complex graph. Initially, you considered adding export methods directly to these classes. However, this approach was rejected because it risked breaking the production code and would make each node class responsible for additional tasks beyond their primary function of managing geodata. This coupling of unrelated functionalities could lead to code that is hard to maintain and extend, especially as more features like different export formats are requested.
>
>![[Pasted image 20240411172547.png]]
>_The XML export method had to be added into all node classes, which bore the risk of breaking the whole application if any bugs slipped through along with the chang_

> [!success]  **Solution** 
>
>1. **Visitor Interface**: Define a visitor interface with methods tailored to each element type in the application. For instance, methods might include `VisitCity(City city)`, `VisitIndustry(Industry industry)`, etc.
>    
>2. **Concrete Visitor**: Implement the visitor interface in classes that specify how each element should be handled. For example, an `ExportVisitor` would handle how city and industry data are converted into XML.
>    
>3. **Element Interface**: Modify each element class (such as `City` or `Industry`) to include an `Accept` method that receives a visitor. This method is crucial for employing the Visitor pattern as it allows the visitor to interact with the element.
>    
>4. **Double Dispatch**: In each `Accept` method implemented in the element classes, invoke the appropriate visitor method corresponding to the element type. This technique, known as double dispatch, helps in selecting the correct visitor method to execute without using cumbersome conditionals.
>
>5. **Usage**: In the application, create a visitor object and pass it through the graph. Each node in the graph will accept the visitor, which in turn will execute the appropriate method based on the node type.


> [!example]- Code Example
>``` csharp
>public interface IVisitor
>{
>    void VisitCity(City city);
>    void VisitIndustry(Industry industry);
>    // other visit methods
>}
>
>public class ExportVisitor : IVisitor
>{
>    public void VisitCity(City city)
>    {
>        // Logic to export city data to XML
>    }
>
>    public void VisitIndustry(Industry industry)
>    {
>        // Logic to export industry data to XML
>    }
>}
>
>public class City
>{
>    public void Accept(IVisitor visitor)
>    {
>        visitor.VisitCity(this);
>    }
>}
>
>public class Industry
>{
>    public void Accept(IVisitor visitor)
>    {
>        visitor.VisitIndustry(this);
>    }
>}
>
>// Usage:
>List<Node> graph = new List<Node>(); // Assume this is populated
>IVisitor visitor = new ExportVisitor();
>foreach (var node in graph)
>{
>    node.Accept(visitor);
>}
>
>```


### Structure

![[Pasted image 20240411173327.png]]

1. **Visitor Interface**:
    - Defines a set of methods for visiting elements. These methods should have different signatures to handle various types of elements. In languages that support method overloading (like C#), these methods can have the same name but must accept different parameter types.
2. **Concrete Visitor**: 
    - Implements the visitor interface, providing specific implementations of the visiting methods for different types of element classes. Each method in the visitor is tailored to interact with a particular class of elements.
3. **Element Interface**:  
    - Declares an `Accept` method that takes a visitor as an argument. This method is crucial as it enables an element to call one of the visitor's methods that correspond to the element's class.
4. **Concrete Element**:
    - Each element class must implement the `Accept` method. This method is responsible for identifying which visitor method to call, which is achieved by passing `this` as an argument to the visitor's method corresponding to the element's class. It's important that this method is overridden in each subclass to ensure the correct visitor method is invoked.
5. **Client**: 
    - Manages the collection of elements and often executes the visitor. Clients interact with elements via their interfaces without needing to know the concrete implementations of these elements. This abstraction allows the client to operate across various types of elements using the visitor interface.
    - 

### Applicability

1. **Complex Object Structures:**
    - Use the Visitor pattern when you need to execute an operation across all elements within a complex structure, such as an object tree. This pattern allows operations to be executed without modifying the objects themselves, making it ideal for applying the same action to different types of elements structured hierarchically.
2. **Separation of Concerns:**
    - It's advantageous for keeping core business logic clean and focused on primary responsibilities. By moving auxiliary operations to visitor classes, the main classes don't get cluttered with secondary behaviors, enhancing maintainability.
3. **Selective Implementation:**
    - When only certain classes in a hierarchy need to support a particular behavior, the Visitor pattern provides a clean solution. You can implement specific operations in visitor classes that target only these relevant classes, avoiding unnecessary implementation in others where the behavior isn't applicable.

This pattern facilitates adding new operations without altering the objects on which they operate, thereby supporting good software [[design principles]] by separating concerns and simplifying maintenance.


### How to Implement

1. **Visitor Interface Creation:**
    - Define a visitor interface with methods for "visiting" each type of concrete element in your program. Each method should correspond to one specific class in the element hierarchy.
2. **Element Interface Setup:**
    - If your elements are part of an existing class hierarchy, introduce an "accept" method in the base class. This method should take a visitor as its argument, enabling interaction with the visitor.
3. **Implementing Accept Methods:**
    - In every concrete element class, implement the "accept" method. This method should direct the visitor to the appropriate method for its class by invoking the corresponding visitor's method.
4. **Visitor and Element Interaction:**
    - Ensure that elements interact with visitors strictly through the visitor interface. Conversely, visitors need to recognize all concrete element classes they will interact with, which are typically specified as parameters in their methods.
5. **Creating Concrete Visitors:**
    - For each distinct operation that doesn't fit naturally within the element classes, develop a separate concrete visitor class. Implement all necessary visiting methods in each class. If a visitor needs access to private data in an element class, consider the following:
        - Alter access levels of these members (fields or methods) to public, though this could compromise encapsulation.
        - If possible (depending on your programming language), define the visitor class inside the element class to allow it privileged access without public exposure.
6. **Using Visitors in Client Code:**
    - In your application logic, instantiate visitor objects and pass them to element objects using the "accept" methods. This setup decouples the operations performed on elements from the elements themselves, enhancing flexibility and scalability.
     
 By following these steps, you can effectively implement the Visitor pattern, enabling operations to be added to complex class hierarchies without modifying the classes themselves. This approach is especially useful in maintaining clean and adaptable codebases.

### Pros and Cons

> [!success] **Advantages**
> 1. **[[Open Closed Principle]]:**
>     - You can introduce new operations on elements without modifying the elements themselves. This makes the Visitor pattern a strong choice for systems where element classes are stable but operations on them continue to evolve.
> 2. **[[Single Responsibility Principle]]:**
>     
>     - The Visitor pattern separates algorithmic behavior from the objects on which it operates, centralizing related behaviors within a single visitor class. This separation helps manage different behaviors more effectively.
> 3. **Accumulation of State:**
>     
>     - Visitors can collect and accumulate state as they traverse through a set of elements. This is particularly beneficial in scenarios involving complex data structures like trees, where operations might need to share state across a range of elements

> [!warning] **Disadvantages**
> 1. **Maintenance Overhead:**
>     - When new element types are added to the system, every visitor might need to be updated to handle the new type. This can lead to significant maintenance efforts if the element hierarchy changes frequently.
> 2. **Access to Element Internals:** 
>     - Visitors often need to interact closely with an element's internals. If elements encapsulate their state tightly (i.e., using private fields), visitors may struggle to perform their intended functions without violating encapsulation principles. This could necessitate changes in the access levels of the elements' internal states, potentially leading to less secure code.

### Relations with Other Patterns

1. **[[Command Pattern]] Comparison:**
    - The Visitor pattern can be seen as an extension of the Command pattern. While both patterns involve encapsulating operations in objects, Visitor specifically allows operations to be performed on elements of various classes. This capability makes Visitor more flexible and powerful in scenarios where operations need to be applied across a diverse set of objects.
2. **Integration with [[Composite Pattern]]:**
    - Visitor is particularly useful in conjunction with the [[Composite pattern]]. It provides a way to apply operations uniformly across complex object structures, such as those arranged in a Composite tree. This is valuable for operations that need to be executed consistently across all components of the composite, from leaves to nodes.
3. **Combination with [[Iterator Pattern]]:**
    - Combining Visitor with [[Iterator Pattern|Iterator]] is effective for traversing and applying operations to complex data structures, such as graphs or trees, where elements vary in type. The [[Iterator Pattern|Iterator]] handles the traversal, ensuring each element is visited, and the Visitor applies a specific operation to each element, regardless of its class. This combination allows for clear separation of traversal and operational logic, enhancing modularity and reusability.


## Examples

![[Pasted image 20240411193605.png]]

**Visitor pattern with [[Composite pattern]]**
The provided C# code demonstrates a combination of the **Composite** and **Visitor** design patterns, which is utilized to manage and operate on a hierarchical structure of geometric shapes.

> [!example]- Components
> **Composite Pattern Components**
>
>1. **IShape Interface** (Component):
>    - This interface defines common operations (`Move`, `Draw`, `Accept`) for both simple and complex shape objects. It allows the client to treat individual shapes and compositions of shapes uniformly.
>2. **Dot, Circle, Rectangle** (Leaf):
>    - These classes represent simple elements without any children. They implement the `IShape` interface, providing specific implementations for `Move`, `Draw`, and `Accept` methods, which are the basic operations defined by the interface.
>3. **CompoundShape** (Composite): 
>    - This class also implements the `IShape` interface but unlike the Leaf components, it can contain other shapes, including other `CompoundShape` objects, allowing it to represent complex structures. The `Add`, `Remove`, `Move`, `Draw`, and `Accept` methods manage the composite's children and delegate operations to them.
>
> **Visitor Pattern Components**
>
>1. **IVisitor Interface** (Visitor):
>    - It defines a set of visiting methods (`VisitDot`, `VisitCircle`, `VisitRectangle`, `VisitCompoundShape`) that correspond to each type of element that can be "visited". These methods allow the visitor to perform specific actions based on the element type.
>2. **XMLExportVisitor and ConsoleDisplayVisitor** (Concrete Visitors):
>    - These classes implement the `IVisitor` interface, providing specific logic to handle various shape types. `XMLExportVisitor` might be used for exporting shape data into an XML format, whereas `ConsoleDisplayVisitor` displays the shape information in the console, demonstrating how different operations can be applied to the shape objects without changing the objects themselves.

> [!example]- Implementation and Interaction
 >Implementation
>- **Composite Use**: The `CompoundShape` acts as a composite container that can hold any objects that conform to the `IShape` interface. This setup allows for constructing nested structures of shapes that can be manipulated as a single object.
>- **Visitor Use**: Each shape, including the `CompoundShape`, implements the `Accept` method in such a way that it passes itself to the visitor's method designed to handle that specific type of shape. This implementation of the `Accept` method is crucial for utilizing the Visitor pattern's ability to extend functionality without modifying the objects.
>- **Double Dispatch Mechanism**: The `Accept` method in each concrete shape ensures that the correct visitor method is called for the object, leveraging the double dispatch mechanism. This is key to applying the correct operation to each object based on its type, as determined at runtime.
>    
>Client Interaction
>- The `Application` class demonstrates how a client might use these patterns by creating various shapes, adding them to a composite structure, and then applying different visitors to this structure. This arrangement showcases the flexibility provided by the Composite and Visitor patterns, particularly in handling operations over complex structured data without exposing internal details to the operations being performed.
>
>The combination of these patterns is particularly powerful in scenarios requiring operations over heterogeneous objects structured in a composite manner, as it cleanly separates concerns and enhances maintainability and scalability of the code.

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/Visitor/Program.cs)

> [!example]- **Server Side**
>``` csharp
>    // IShape acts as the Component interface for the Composite pattern.
>    // It also serves as the Element interface for the Visitor pattern.
>    public interface IShape
>    {
>        void Move(int x, int y);
>        void Draw();
>        void Accept(IVisitor visitor); // Accepts visitors, part of the Visitor pattern.
>    }
>
>    // Concrete shape classes, acting as Leaf in the Composite pattern.
>    public class Dot : IShape
>    {
>        public int X { get; private set; }
>        public int Y { get; private set; }
>
>        public void Move(int x, int y)
>        {
>            X = x;
>            Y = y;
>            Console.WriteLine($"Dot moved to ({X}, {Y}).");
>        }
>
>        public void Draw()
>        {
>            Console.WriteLine($"Drawing a dot at position ({X}, {Y}).");
>        }
>
>        public void Accept(IVisitor visitor)
>        {
>            visitor.VisitDot(this); // Specific visit method for Dot.
>        }
>    }
>
>    public class Circle : IShape
>    {
>        public int X { get; private set; }
>        public int Y { get; private set; }
>        public int Radius { get; set; } = 5;
>
>        public void Move(int x, int y)
>        {
>            X = x;
>            Y = y;
>            Console.WriteLine($"Circle moved to ({X}, {Y}) with radius {Radius}.");
>        }
>
>        public void Draw()
>        {
>            Console.WriteLine($"Drawing a circle at ({X}, {Y}) with radius {Radius}.");
>        }
>
>        public void Accept(IVisitor visitor)
>        {
>            visitor.VisitCircle(this); // Specific visit method for Circle.
>        }
>    }
>
>    public class Rectangle : IShape
>    {
>        public int X { get; private set; }
>        public int Y { get; private set; }
>        public int Width { get; set; } = 10;
>        public int Height { get; set; } = 5;
>
>        public void Move(int x, int y)
>        {
>            X = x;
>            Y = y;
>            Console.WriteLine($"Rectangle moved to ({X}, {Y}) with width {Width} and height {Height}.");
>        }
>
>        public void Draw()
>        {
>            Console.WriteLine($"Drawing a rectangle at ({X}, {Y}) with width {Width} and height {Height}.");
>        }
>
>        public void Accept(IVisitor visitor)
>        {
>            visitor.VisitRectangle(this); // Specific visit method for Rectangle.
>        }
>    }
>
>    // CompoundShape acts as the Composite in the Composite pattern.
>    // The composite class that can contain other shapes (both simple and composite).
>    public class CompoundShape : IShape
>    {
>        private readonly List<IShape> children = [];
>
>        public void Add(IShape shape)
>        {
>            children.Add(shape);
>        }
>
>        public void Remove(IShape shape)
>        {
>            children.Remove(shape);
>        }
>
>        public void Move(int x, int y)
>        {
>            foreach (var child in children)
>            {
>                child.Move(x, y); // Propagating the Move operation to all children.
>            }
>        }
>
>        public void Draw()
>        {
>            foreach (var child in children)
>            {
>                child.Draw(); // Drawing each child in the composite.
>            }
>        }
>
>        public void Accept(IVisitor visitor)
>        {
>            foreach (var child in children)
>            {
>                child.Accept(visitor); // Delegating the accept to all children.
>            }
>            visitor.VisitCompoundShape(this); // Visiting the compound shape itself.
>        }
>    }
>
>    // The Visitor interface
>    public interface IVisitor
>    {
>        void VisitDot(Dot dot);
>        void VisitCircle(Circle circle);
>        void VisitRectangle(Rectangle rectangle);
>        void VisitCompoundShape(CompoundShape compoundShape);
>    }
>
>    // Concrete visitors implement different operations that can be performed on shape objects.
>    public class XMLExportVisitor : IVisitor
>    {
>        public void VisitDot(Dot dot)
>        {
>            Console.WriteLine("Exporting Dot to XML.");
>        }
>
>        public void VisitCircle(Circle circle)
>        {
>            Console.WriteLine("Exporting Circle to XML.");
>        }
>
>        public void VisitRectangle(Rectangle rectangle)
>        {
>            Console.WriteLine("Exporting Rectangle to XML.");
>        }
>
>        public void VisitCompoundShape(CompoundShape compoundShape)
>        {
>            Console.WriteLine("Exporting Compound Shape to XML.");
>        }
>    }
>
>    // Concrete visitor for displaying shapes in the console.
>    public class ConsoleDisplayVisitor : IVisitor
>    {
>        public void VisitDot(Dot dot)
>        {
>            Console.WriteLine("Displaying Dot in console.");
>            dot.Draw(); // Further actions can be added here, like logging info to the console.
>        }
>
>        public void VisitCircle(Circle circle)
>        {
>            Console.WriteLine("Displaying Circle in console.");
>            circle.Draw(); // Drawing action shows up in the console.
>        }
>
>        public void VisitRectangle(Rectangle rectangle)
>        {
>            Console.WriteLine("Displaying Rectangle in console.");
>            rectangle.Draw(); // Display rectangle details in the console.
>        }
>
>        public void VisitCompoundShape(CompoundShape compoundShape)
>        {
>            Console.WriteLine("Displaying Compound Shape in console.");
>            compoundShape.Draw(); // Recursively draws all children in the console.
>        }
>    }
>```

> [!example]- **Client Side**
>``` csharp
> // Client class using the shapes and visitors.
>public static class Application
>{
>    public static void Run()
>    {
>        // Create simple shapes
>        Dot dot = new Dot();
>        Circle circle = new Circle();
>        Rectangle rectangle = new Rectangle();
>
>        // Create composite shapes
>        CompoundShape compoundShape1 = new CompoundShape();
>        compoundShape1.Add(dot);
>        compoundShape1.Add(circle);
>
>        CompoundShape compoundShape2 = new CompoundShape();
>        compoundShape2.Add(rectangle);
>        compoundShape2.Add(compoundShape1);  // Adding another composite shape to demonstrate nesting
>
>        // Create visitors
>        XMLExportVisitor xmlExporter = new XMLExportVisitor();
>        ConsoleDisplayVisitor consoleDisplayer = new ConsoleDisplayVisitor();
>
>        // Export the shapes to XML
>        Console.WriteLine("Exporting shapes to XML:");
>        compoundShape2.Accept(xmlExporter);
>
>        // Display the shapes in the console
>        Console.WriteLine("\nDisplaying shapes in console:");
>        compoundShape2.Accept(consoleDisplayer);
>    }
>}
>```

## Summary

>[!summary]- **Cheat Sheet**
>**Visitor Pattern Cheat Sheet**
>**Purpose**:
>- Lets you define a new operation without changing the classes of the elements on which it operates.
>- Useful for operations over complex object structures, like walking a tree structure and performing operations on each node.
>
>**Components**:
>- **Visitor Interface**: Declares a visit operation for each class of Concrete Element in the object structure. The operation's name and signature identifies the class that sends the visit request to the visitor.
>- **Concrete Visitor**: Implements each operation declared by Visitor, which forms the algorithm that is applied to all elements.
>- **Element Interface**: Defines an `accept` method that takes a visitor as an argument.
>- **Concrete Element**: Implements the `accept` method defined by Element, which typically calls the visit method on the Visitor, allowing the Visitor to define the operation executed on the element.
>- **Object Structure**: A collection of Elements able to enumerate its elements and provide a high-level interface for allowing the visitor to visit its elements.
>
>**Usage**:
>- Use when you need to perform operations across a complex object structure and need to avoid "polluting" their classes with operation-specific code.
>- Use when you anticipate many distinct and unrelated operations on objects in an object structure that don't warrant changing object classes.
>
>**Benefits**:
>- Adds new operations easily by adding new visitor classes.
>- Keeps related operations together, making them easier to extend and maintain.
>- Separates unrelated operations, keeping the classes that define the object structure clean and unchanged.
>
>**Common Scenarios**:
>- Document object models where operations like rendering, syntax checking, and type checking must be performed.
>- GUI frameworks where actions can be applied to various elements without changing the element classes themselves.

^0117ba


# References

https://refactoring.guru/design-patterns