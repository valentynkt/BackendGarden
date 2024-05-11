---
created: 2024-04-15 18:38
aliases:
  - Tree Structure Pattern
  - Component Aggregation Pattern
  - Container/Containee Pattern
  - Composite
links: "[[Structural patterns]]"
tags:
  - LearningIT
  - evergreen🌳
---
link: [[Structural patterns]]

# Composite Pattern

## Overview

![[Pasted image 20240415184143.png]]
_Also known as: Object Tree_

>[!abstract] 
>**Composite** is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.

## Content

### Intent

> [!danger]  **Problem** 
> In applications where the core model follows a tree-like structure, such as containing various levels of nested elements like products and boxes, determining characteristics like total price can become convoluted.
>![[Pasted image 20240403142333.png]]
>
>For instance, consider an ordering system with products and boxes: a box may contain products or other boxes, creating a nested hierarchy. Calculating the total price of an order becomes challenging as it involves unwrapping nested boxes and summing up individual product prices, accounting for various nesting levels and object types.

> [!success]  **Solution** 
> The Composite pattern proposes working with products and boxes through a shared interface, which exposes a method for calculating total prices.
>![[Pasted image 20240403142448.png]]
>_The Composite pattern lets you run a behavior recursively over all components of an object tree._
>
>This method behaves differently for products and boxes: for a product, it returns its price directly; for a box, it recursively traverses its contents, accumulating prices along the way. If a box contains nested boxes, the calculation continues recursively until all nested elements have been processed. Additionally, a box may incorporate additional costs, such as packaging expenses, into the final price calculation.

**Benefit**

By employing the Composite pattern, developers can treat individual objects and compositions uniformly without needing to know their concrete types. This abstraction simplifies processing and eliminates the need to handle different object types separately, as requests are passed down the object hierarchy seamlessly.

### Structure

![[Pasted image 20240403150011.png]]

- **Component Interface**: Describes operations that are common to both simple and complex elements of the tree. This interface provides a unified way to interact with individual elements and compositions within the tree structure.
    
- **Leaf**: Represents a basic element of the tree that does not contain any sub-elements. Typically, leaf components perform most of the real work since they do not delegate tasks to other elements.
    
- **Container (Composite)**: Represents an element of the tree that contains sub-elements, which can be either leaves or other containers. Containers do not have knowledge of the concrete classes of their children and interact with them solely through the component interface. When a container receives a request, it delegates the task to its sub-elements, processes intermediate results, and returns the final outcome to the client.
    
- **Client**: Interacts with all elements of the tree structure through the component interface. This allows the client to work seamlessly with both simple and complex elements, without needing to distinguish between them.

### Applicability

The Composite pattern is applicable in the following scenarios:
1. **Tree-like Object Structure**: When you need to represent a hierarchical object structure, such as a tree, where elements can be composed of other elements recursively. The Composite pattern provides a way to organize objects into a tree structure, with nodes representing both individual objects and compositions of objects.
2. **Uniform Treatment of Elements**: When you want client code to interact with both individual elements and composite elements in a uniform manner. By defining a common interface for all elements (leaves and containers), the Composite pattern allows client code to operate on these elements without needing to distinguish between them based on their specific types.
   
>[!tip] 
>The Composite pattern is useful when you need to manage complex object structures and want to provide a consistent interface for working with individual elements and compositions of elements

### How to Implement

Here's how you can implement the Composite pattern:

1. **Identify Tree Structure**: Ensure that your application's core model can be represented as a tree structure. Identify elements that can be considered as leaves (simple elements) and containers (complex elements) that can contain both leaves and other containers.
2. **Declare Component Interface**: Define a component interface that includes methods common to both simple and complex elements. This interface should provide operations such as move, draw, add, and remove.
3. **Implement Leaf Class**: Create a leaf class to represent simple elements. Each leaf class should implement the component interface and provide specific functionality for simple elements.
4. **Implement Container Class**: Create a container class to represent complex elements. This class should also implement the component interface. Use an array or list to store references to child elements, allowing containers to hold both leaves and other containers. Implement methods to delegate operations to child elements.
5. **Add Child Management Methods**: Define methods in the container class to add and remove child elements. These methods should allow containers to manage their child elements dynamically.

By following these steps, you can create a Composite pattern implementation that allows you to represent and work with complex object structures in a tree-like fashion, treating both simple and complex elements uniformly.

### Pros and Cons

> [!success] **Advantages**
> 1. **Convenient Handling of Tree Structures:** The Composite pattern allows you to work with complex tree structures more conveniently by leveraging [[polymorphism]] and recursion. This simplifies the management and manipulation of hierarchical data.
>     
> 2. **[[Open Closed Principle]]:** You can introduce new types of elements into the application without modifying existing code. The code that interacts with the object tree remains unchanged, promoting the open/closed principle of software design.

> [!warning] **Disadvantages**
> **Difficulty in Providing a Common Interface:** In scenarios where classes have significantly different functionality, it might be challenging to provide a common interface for all elements. Overgeneralizing the component interface to accommodate diverse functionalities can lead to code that is harder to understand and maintain.

### Relations with Other Patterns

1. **[[Builder Pattern]]** The Builder pattern can be used effectively when creating complex Composite trees. The construction steps can be programmed to work recursively, aiding in the creation of intricate object structures.
    
2. **[[Chain Of Responsibility Pattern]]:** When used in conjunction with Composite, the Chain of Responsibility pattern allows leaf components to pass requests through the chain of parent components down to the root of the object tree.
    
3. **[[Iterator Pattern]]:** Iterators can be employed to traverse Composite trees efficiently, allowing for easy navigation through the elements of the tree.
    
4. **[[Visitor Pattern]]:** The Visitor pattern can be used to execute operations over an entire Composite tree, providing a way to perform actions on all elements within the tree.
    
5. **[[Flyweight Pattern]]:** Shared leaf nodes of the Composite tree can be implemented as Flyweights to conserve memory. This approach helps reduce memory consumption by reusing shared objects.
    
6. **[[Decorator Pattern]]:** Composite and Decorator patterns share similar structure diagrams as both rely on recursive composition to organize an open-ended number of objects. However, Decorator adds additional responsibilities to the wrapped object, while Composite aggregates the results of its children.
    
7. **[[Prototype Pattern]]:** Designs that extensively use Composite and Decorator patterns may benefit from using Prototype. By applying the Prototype pattern, complex structures can be cloned instead of reconstructed from scratch, improving performance and scalability.
   

## Examples

  
This code demonstrates the Composite pattern, which allows clients to treat individual objects and compositions of objects uniformly. It involves graphic elements like dots, circles, and compound graphics, which can be grouped together for collective manipulation.

> [!abstract]+  **Components of the Implementation**
>- **Component Interface (`IGraphic`)**: Defines common operations for graphic elements, including moving and drawing.
>- **Leaf Classes (`Dot`, `Circle`)**: Represent individual graphic elements. They implement the `IGraphic` interface and provide specific functionality for drawing dots and circles at given coordinates.
>- **Composite Class (`CompoundGraphic`)**: Acts as a container for multiple graphic elements. It implements the `IGraphic` interface and provides methods to add, remove, move, and draw child elements. It recursively delegates drawing operations to its children.
>- **Client (`ImageEditor`)**: Utilizes graphic elements to create complex compositions. It can load initial graphics, group selected components into compound graphics, and perform operations on the entire composition.


### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/Composite/Program.cs)

> [!example]- Server Side
>``` csharp
>  // Component Interface
>  interface IGraphic
>  {
>      void Move(int x, int y);
>      void Draw();
>  }
>
>  // Leaf Classes
>  class Dot : IGraphic
>  {
>      private int _x;
>      private int _y;
>
>      public Dot(int x, int y)
>      {
>          _x = x;
>          _y = y;
>      }
>
>      public void Move(int x, int y)
>      {
>          _x += x;
>          _y += y;
>      }
>
>      public void Draw()
>      {
>          Console.WriteLine($"Drawing a dot at ({_x}, {_y})");
>      }
>  }
>
>  class Circle : IGraphic
>  {
>      private int _x;
>      private int _y;
>      private readonly int _radius;
>
>      public Circle(int x, int y, int radius)
>      {
>          _x = x;
>          _y = y;
>          _radius = radius;
>      }
>
>      public void Move(int x, int y)
>      {
>          _x += x;
>          _y += y;
>      }
>
>      public void Draw()
>      {
>          Console.WriteLine($"Drawing a circle at ({_x}, {_y}) with radius {_radius}");
>      }
>  }
>
>  // Composite Class
>  class CompoundGraphic : IGraphic
>  {
>      private readonly List<IGraphic> _children = [];
>
>      public void Add(IGraphic child)
>      {
>          _children.Add(child);
>      }
>
>      public void Remove(IGraphic child)
>      {
>          _children.Remove(child);
>      }
>
>      public void Move(int x, int y)
>      {
>          foreach (var child in _children)
>          {
>              child.Move(x, y);
>          }
>      }
>
>      public void Draw()
>      {
>          Console.WriteLine("Drawing a compound graphic:");
>          foreach (var child in _children)
>          {
>              child.Draw();
>          }
>          Console.WriteLine("Drawing a dashed rectangle using the bounding coordinates");
>      }
>  }
>
>// Client
>class ImageEditor
>{
>    private readonly CompoundGraphic _all = new CompoundGraphic();
>    public void Load()
>    {
>        _all.Add(new Dot(1, 2));
>        _all.Add(new Circle(5, 3, 10));
>        // ...
>    }
>    public void GroupSelected(IGraphic[] components)
>    {
>        var group = new CompoundGraphic();
>        foreach (var component in components)
>        {
>            group.Add(component);
>            _all.Remove(component);
>        }
>        _all.Add(group);
>        // All components will be drawn.
>        _all.Draw();
>    }
>}
>
>
>```

> [!example]- Client Side
>``` csharp
>static void Main(string[] args)
>{
>    RealWorldExample();
>}
>private static void RealWorldExample()
>{
>    // Create an instance of ImageEditor
>    ImageEditor editor = new ImageEditor(
>    // Load initial graphics
>    editor.Load(
>    // Define selected components
>    IGraphic[] selectedComponents = [new Dot(3, 4), new Dot(6, 7)
>    // Group selected components
>    editor.GroupSelected(selectedComponents);
>}
>```

## Summary

>[!summary]- **Cheat Sheet**
>**Composite Pattern Cheat Sheet**
>**Purpose**:
>- Allows you to compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.
>- Simplifies client code that has to deal with complex tree structures.
>
>**Components**:
>- **Component**: Declares the interface for objects in the composition and for accessing and managing its child components.
>- **Leaf**: Represents leaf objects in the composition. A leaf has no children.
>- **Composite**: Defines behavior for components having children and stores child components.
>- **Client**: Manipulates objects in the composition through the Component interface.
>
>**Usage**:
>- Use when you want to represent part-whole hierarchies of objects.
>- Use when you want clients to ignore the difference between compositions of objects and individual objects. Clients will treat all objects in the composite structure uniformly.
>
>**Benefits**:
>- Defines class hierarchies consisting of primitive objects and composite objects. Primitive objects can be composed into more complex objects, which in turn can be composed, and so on.
>- Simplifies client code, as it can treat composite structures and individual objects uniformly.
>- Makes it easier to add new kinds of components.
>
>**Common Scenarios**:
>- Graphic drawing editors where shapes can be composed into more complex shapes.
>- User interface controls that have nested collections of other controls.

^85f341




# References

https://refactoring.guru/design-patterns