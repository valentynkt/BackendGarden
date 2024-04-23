---
created: 15-04-2024 18:13
aliases:
  - Body Pattern
  - Decoupler Pattern
  - Implementation Pattern
links: "[[Structural patterns]]"
tags:
  - seed🌱
  - LearningIT
---
link: [[Structural patterns]]

# Bridge Pattern

## Overview

![[Pasted image 20240402212033.png]]

>[!abstract] 
>Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

## Content

### Intent

> [!danger]+ **Problem** 
> Consider a class hierarchy for geometric shapes consisting of a base `Shape` class with two subclasses, `Circle` and `Square`. Now, let's say we want to introduce colors to these shapes, leading us to consider creating subclasses such as `BlueCircle` and `RedSquare`. However, with each new shape type or color, the number of necessary subclasses grows exponentially. For instance, adding a new shape like a triangle would require introducing two new subclasses, one for each color. This growth quickly becomes unmanageable as we expand the hierarchy.
![[Pasted image 20240402212345.png]]

> [!success]+ **Solution** 
> The Bridge pattern addresses this problem by advocating for a shift from class inheritance to object composition. Instead of trying to extend the shape classes along both the dimensions of form and color, we separate these concerns into distinct class hierarchies. Specifically, we extract the color-related code into its own hierarchy with subclasses representing individual colors like `Red` and `Blue`.
> 
> In this approach, the `Shape` class now holds a reference to an object from the color hierarchy, enabling it to delegate any color-related operations to the referenced color object. This reference acts as a bridge between the `Shape` and `Color` classes. Importantly, this design decouples the shape hierarchy from the color hierarchy, making it easier to add new shapes or colors without altering the entire class hierarchy.
![[Pasted image 20240402212426.png]]


### Structure

![[Pasted image 20240402212504.png]]

1. **Abstraction:** This component provides high-level control logic and relies on an implementation object to perform low-level work. It communicates with the implementation object through methods declared in the Implementation interface. While the abstraction may define the same methods as the implementation, it often encapsulates complex behaviors that rely on a variety of primitive operations declared by the implementation.
    
2. **Implementation:** The Implementation interface declares the common interface for all concrete implementations. Abstraction objects can only interact with implementation objects through methods declared in this interface. Concrete implementations contain platform-specific code.
    
3. **Concrete Implementations:** These classes contain platform-specific code and provide concrete implementations for the methods declared in the Implementation interface.
    
4. **Refined Abstractions:** Refined abstractions extend the functionality of the base abstraction by providing variants of control logic. They interact with different implementations through the general implementation interface, similar to their parent abstraction.
    
5. **Client:** Typically, the client is only concerned with working with the abstraction. However, it's responsible for associating the abstraction object with one of the implementation objects, thereby linking the abstraction to a specific implementation.

### Applicability

The Bridge pattern is applicable in several scenarios:

1. **Organizing Monolithic Classes:** When dealing with a monolithic class that has multiple variants of functionality, such as working with different database servers, the Bridge pattern helps divide and organize the class. By separating the variations into different class hierarchies, changes can be made independently within each hierarchy, simplifying maintenance and reducing the risk of errors.
2. **Extending Classes in Orthogonal Dimensions:** If you need to extend a class in multiple independent dimensions, the Bridge pattern provides a solution. By creating separate class hierarchies for each dimension, the original class delegates related work to objects within those hierarchies instead of handling everything internally.
3. **Switching Implementations at Runtime:** The Bridge pattern allows for the flexibility of switching implementations at runtime. While not mandatory, it's possible to replace the implementation object inside the abstraction, making it easy to adapt to changing requirements or environments.

Remember, while the Bridge pattern may seem similar to the Strategy pattern due to their ability to switch implementations, each pattern addresses different problems and communicates distinct intents.

### How to Implement

1. Identify the orthogonal dimensions in your classes. These could be independent concepts such as abstraction/platform, domain/infrastructure, front-end/back-end, or interface/implementation.
2. Define the operations needed by the client in the base abstraction class.
3. Declare the operations available on all platforms in a general implementation interface.
4. Create concrete implementation classes for all platforms in your domain, ensuring they adhere to the implementation interface.
5. Inside the abstraction class, add a reference field for the implementation type. Delegate most of the work to the implementation object referenced in that field.
6. If you have several variants of high-level logic, create refined abstractions for each variant by extending the base abstraction class.
7. In the client code, pass an implementation object to the abstraction's constructor to associate the two. Afterward, the client can interact solely with the abstraction object, forgetting about the implementation details.

### Pros and Cons

> [!success] **Advantages**
> 1. **Platform Independence**: The Bridge pattern allows you to create platform-independent classes and applications, as the client code interacts with **high-level abstractions** rather than platform-specific details.
>     
> 2. **Decoupling**: Client code is shielded from the implementation details of the platform, promoting **loose coupling** and easier maintenance.
>     
> 3. **Extensibility**: The pattern adheres to the **Open/Closed Principle**, enabling the introduction of new abstractions and implementations independently without modifying existing code.
>     
> 4. **Single Responsibility Principle**: The Bridge pattern facilitates adherence to the **Single Responsibility Principle** by separating **high-level logic** (abstraction) from platform-specific details (implementation), thus promoting cleaner and more maintainable code.

> [!warning] **Disadvantages**
> **Increased Complexity**: Applying the Bridge pattern to highly cohesive classes may lead to increased complexity, especially if the class doesn't inherently require separation of concerns. Overuse of the pattern can potentially overcomplicate the design.

### Relations with Other Patterns

- [[Adapter Pattern]]: While Bridge is designed up-front to develop parts of an application independently, Adapter is commonly used to make otherwise-incompatible classes work together after an application is already developed.
    
- [[State Pattern]], [[Strategy Pattern]] and to some extent [[Adapter Pattern]] have similar structures based on composition. Although they share similarities, each pattern addresses different problems. Patterns not only provide a way to structure code but also communicate the specific problem they solve.
    
- [[Abstract Factory Pattern]]: Abstract Factory can be used in conjunction with Bridge, particularly when abstractions defined by Bridge can only work with specific implementations. Abstract Factory helps encapsulate these relations, hiding complexity from client code.
    
- [[Builder Pattern]]: Combining Builder with Bridge is possible, where the director class acts as the abstraction and different builders serve as implementations. This allows for flexible construction of complex objects while maintaining separation between high-level logic and implementation details.

## Examples

This code illustrates the Bridge pattern, which decouples abstraction (Shape) from its implementation (Color and RenderingPlatform), allowing them to vary independently. It involves shapes (Circle, Square) and color implementations (Red, Blue) rendered using different platforms (OpenGL, DirectX).

> [!abstract]+  **Components of the Implementation**
>- **Abstraction: Shape**: Abstract class defining shapes with a color.
>    
>- **Concrete Abstraction: Circle, Square**: Concrete implementations of shapes, utilizing the color interface to specify their color.
>    
>- **Implementor: Color**: Interface defining the color fill method.
>    
>- **Concrete Implementors: Red, Blue**: Concrete implementations of colors, providing specific color fill behavior.
>    
>- **Implementor: RenderingPlatform**: Interface defining the rendering method for shapes.
>    
>- **Concrete Implementors: OpenGL, DirectX**: Concrete implementations of rendering platforms, rendering shapes using their respective technologies.
    

**Client Example:**

The `ThreeDimensionsExample` method demonstrates the usage of the Bridge pattern. It draws a red circle using OpenGL and a blue square using DirectX, showcasing how different shapes and colors can be rendered using different rendering platforms

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/Bridge/Program.cs)

> [!example]- Server Side
>``` csharp
>    // Abstraction: Shape
>    abstract class Shape
>    {
>        protected IColor color;
>
>        public Shape(IColor color)
>        {
>            this.color = color;
>        }
>
>        public abstract void Draw();
>    }
>
>    // Concrete Abstraction: Circle
>    class Circle : Shape
>    {
>        public Circle(IColor color) : base(color) { }
>
>        public override void Draw()
>        {
>            Console.WriteLine($"Drawing Circle in {color.Fill()} color.");
>        }
>    }
>
>    // Concrete Abstraction: Square
>    class Square : Shape
>    {
>        public Square(IColor color) : base(color) { }
>
>        public override void Draw()
>        {
>            Console.WriteLine($"Drawing Square in {color.Fill()} color.");
>        }
>    }
>
>    // Implementor: Color
>    interface IColor
>    {
>        string Fill();
>    }
>
>    // Concrete Implementor: Red
>    class Red : IColor
>    {
>        public string Fill()
>        {
>            return "Red";
>        }
>    }
>
>    // Concrete Implementor: Blue
>    class Blue : IColor
>    {
>        public string Fill()
>        {
>            return "Blue";
>        }
>    }
>
>    // Implementor: RenderingPlatform
>    interface IRenderingPlatform
>    {
>        void RenderShape(Shape shape);
>    }
>
>    // Concrete Implementor: OpenGL
>    class OpenGL : IRenderingPlatform
>    {
>        public void RenderShape(Shape shape)
>        {
>            Console.Write("Rendering using OpenGL: ");
>            shape.Draw();
>        }
>    }
>
>    // Concrete Implementor: DirectX
>    class DirectX : IRenderingPlatform
>    {
>        public void RenderShape(Shape shape)
>        {
>            Console.Write("Rendering using DirectX: ");
>            shape.Draw();
>        }
>    }
>```

> [!example]- Client Side
> ``` csharp
> static void Main(string[] args)
> {
>    
>     ThreeDimensionsExample();
> }
> static void ThreeDimensionsExample()
> {
>     // Drawing a red circle using OpenGL
>     Shape circle = new Circle(new Red());
>     IRenderingPlatform opengl = new OpenGL();
>     opengl.RenderShape(circle);
>     // Drawing a blue square using DirectX
>     Shape square = new Square(new Blue());
>     IRenderingPlatform directx = new DirectX();
>     directx.RenderShape(square);
> }
> ```

## Summary

>[!summary]- **Cheat Sheet**
>**Bridge Pattern Cheat Sheet**
>**Purpose**:
>- Separates an object’s interface from its implementation so that the two can vary independently.
>- Promotes platform independence and extensibility.
>
>**Components**:
>- **Abstraction**: Defines the abstraction's interface and maintains a reference to an object of the Implementor type.
>- **Refined Abstraction**: Extends the interface defined by Abstraction.
>- **Implementor**: Defines the interface for implementation classes. This interface doesn't have to correspond exactly to Abstraction's interface; typically it provides primitive operations that the Abstraction defines in terms of.
>- **Concrete Implementor**: Implements the Implementor interface and defines its concrete implementation.
>
>**Usage**:
>- Use when you want to avoid a permanent binding between an abstraction and its implementation. This might be the case, for example, when the implementation must be selected or switched at run-time.
>- Use when both the abstractions and their implementations should be extensible by subclassing.
>
>**Benefits**:
>- Decouples an abstraction from its implementation so that the two can vary independently.
>- Hides the implementation from the client completely.
>- Increases the possibility to extend both the abstraction and the implementation independently.
>
>**Common Scenarios**:
>- Supporting multiple types of database servers.
>- Creating a cross-platform GUI toolkit.



# References

https://refactoring.guru/design-patterns