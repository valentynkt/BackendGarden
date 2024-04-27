---
created: 2024-04-15 19:37
aliases:
  - Cache Pattern
  - Conservation Pattern
  - Shared Object Pattern
  - Flyweight
links: "[[Structural patterns]]"
tags:
  - LearningIT
  - evergreen🌳
---
link: [[Structural patterns]]

# Flyweight Pattern

## Overview


![[Pasted image 20240404203347.png]]
_Also known as: Cache_

>[!abstract] 
>**Flyweight** is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

## Content

### Intent

> [!danger]  **Problem** 
> After developing a video game with a realistic particle system featuring bullets, missiles, and shrapnel, you encountered a critical issue when testing it on a friend's computer. While the game ran smoothly on your machine, it crashed after a few minutes of gameplay on your friend's less powerful computer. Upon investigation, it was revealed that the crashes were caused by insufficient RAM due to the excessive memory consumption of the particle system. Each particle, such as bullets and missiles, was represented by a separate object containing significant amounts of data. As the intensity of the gameplay increased, the creation of new particles led to a rapid depletion of available RAM, resulting in system crashes.
>![[Pasted image 20240404204040.png]]

> [!success]  **Solution** 
> Upon examining the `Particle` class, it's apparent that certain fields like `color` and `sprite` consume excessive memory and store redundant data across all particles. For example, every bullet in the game shares the same color and sprite.
>![[Pasted image 20240404205051.png]]
>
>However, attributes like coordinates, movement vector, and speed are unique to each particle and change dynamically during gameplay, representing the particle's context.
>
>The Flyweight pattern offers a solution by separating extrinsic state (varying data) from intrinsic state (constant data) within objects. Extrinsic state is moved out of the object and passed to methods as needed, while intrinsic state remains within the object.
>![[Pasted image 20240404205125.png]]
>
>Implementing this pattern significantly reduces the number of objects required, as they only differ in intrinsic state, which typically has fewer variations than extrinsic state.
>
>For instance, in our game, segregating extrinsic state from the `Particle` class would result in only three distinct flyweight objects needed to represent all particles: bullets, missiles, and shrapnel.
>
>To store extrinsic state, a container object like the main `Game` object can be used, managing arrays for coordinates, vectors, speeds, and references to specific flyweight objects representing particles. Alternatively, a separate context class can be created for a more elegant solution with reduced memory overhead.
>![[Pasted image 20240404205212.png]]

Ensuring immutability of flyweight objects is crucial, as they are shared across multiple contexts. Flyweight objects should initialize their state via constructor parameters and avoid exposing setters or public fields.

Additionally, a flyweight factory method can be employed for easy access to flyweight objects, managing a pool of existing objects and creating new ones as needed. This method can be placed within a flyweight container, a separate factory class, or even inside the flyweight class itself, depending on design preferences.

### Structure

![[Pasted image 20240404205324.png]]

1. **Problem Identification:**
    
    - Before implementing the Flyweight pattern, ensure that your program encounters memory consumption issues due to a large number of similar objects in memory simultaneously. Confirm that this problem cannot be effectively addressed through other means.
2. **Flyweight Class:**
    
    - The Flyweight class stores the portion of an object's state that can be shared among multiple instances. It encapsulates intrinsic state, which remains constant across different contexts. Extrinsic state, specific to each context, is passed to the flyweight's methods.
3. **Context Class:**
    
    - The Context class holds the extrinsic state, which varies across all original objects. When paired with a flyweight object, the context represents the complete state of the original object.
4. **Behavior Handling:**
    
    - Typically, the behavior of the original object is retained in the flyweight class. When invoking a flyweight's method, appropriate extrinsic state bits must be passed as method parameters. Alternatively, behavior can be delegated to the context class, treating the linked flyweight as a data object.
5. **Client:**
    
    - The Client calculates or maintains the extrinsic state of flyweights. From the client's viewpoint, a flyweight acts as a template object that can be configured at runtime by providing contextual data to its methods.
6. **Flyweight Factory:**
    
    - The Flyweight Factory manages a pool of existing flyweights. Clients interact with the factory to obtain flyweight instances, passing intrinsic state details. The factory searches for existing flyweights matching the specified criteria and returns them if found, or creates new instances if necessary.

### Applicability

Use the Flyweight pattern in scenarios where your program must accommodate an extensive array of objects that strain available memory resources. The effectiveness of this pattern hinges on its careful application, particularly in situations where:

- **High Volume of Similar Objects:**
    - Your application necessitates the creation of a vast quantity of objects, each sharing common characteristics or states.
- **Memory Exhaustion on Target Device:**
    - The proliferation of these objects consumes the entirety of available Random Access Memory (RAM) on the target computing device.
- **Duplicate State Extraction:**
    - Objects contain redundant or duplicate states that can be abstracted and shared across multiple instances, thereby alleviating the burden on memory resources.

### How to Implement

1. **Divide State:**
    - Segregate the fields of the class intended to be a flyweight into two categories:
        - **Intrinsic State:** Fields containing immutable data that remains consistent across multiple objects.
        - **Extrinsic State:** Fields containing contextual data unique to individual objects.
2. **Immutable Intrinsic State:**
    - Ensure that fields representing the intrinsic state remain immutable. Initialize them exclusively within the class constructor.
3. **Method Refactoring:**
    - Review methods utilizing fields of the extrinsic state. Introduce new parameters for each extrinsic state field within the method and utilize these parameters instead of direct field access.
4. **Factory Class (Optional):**
    - Consider creating a factory class to oversee the management of flyweight objects. This factory should verify the existence of an equivalent flyweight before instantiating a new one. Clients should interact exclusively with this factory to obtain flyweight instances, specifying the desired intrinsic state as parameters.
5. **Extrinsic State Management:**
    - Clients must maintain or compute values corresponding to the extrinsic state (context) to effectively invoke methods of flyweight objects. To enhance convenience, consider relocating the extrinsic state, along with the field referencing the flyweight, to a separate context class.

### Pros and Cons

> [!success] **Advantages**
> **RAM Efficiency:** Significant reduction in memory usage, particularly beneficial when dealing with a vast number of similar objects.

> [!warning] **Disadvantages**
> 1. **CPU Overhead:** There might be a trade-off between memory and CPU cycles, especially when recalculating contextual data for flyweight methods.
>     
> 2. **Increased Complexity:** Implementation complexity increases due to the separation of entity state into intrinsic and extrinsic components. This complexity can potentially confuse new team members.

### Relations with Other Patterns

- **[[Composite Pattern]]:** Shared leaf nodes in a Composite tree can be implemented as Flyweights to conserve memory by avoiding duplicate storage of intrinsic state.
    
- **[[Facade Pattern]]:** While Flyweight focuses on minimizing memory usage by sharing common state across multiple objects, Facade simplifies interaction with a complex subsystem by providing a unified interface. They address different concerns but can be used together to improve system design.
    
- **[[Singleton Pattern]]:** Flyweight and Singleton share similarities in terms of reducing memory usage, but they have fundamental differences. While Singleton restricts instantiation of a class to a single instance, Flyweight allows multiple instances with different intrinsic states. Additionally, Singleton instances can be mutable, whereas Flyweight objects are immutable.

## Examples

This code exemplifies the Flyweight pattern, which is used to minimize memory usage and improve performance by sharing as much data as possible between similar objects. Here's a breakdown of the components:

> [!abstract]+  **Components of the Implementation**
>- **TreeType**: Represents a portion of the state shared among multiple tree objects. It stores data such as name, color, and texture. The `Draw` method is responsible for rendering the tree type at specified coordinates.
>    
>- **TreeFactory**: Decides whether to reuse existing flyweight instances or create new ones. It maintains a dictionary of tree types to avoid duplication.
>    
>- **Tree**: Represents a tree object with intrinsic attributes (position) and an extrinsic attribute (reference to a tree type). The `Draw` method utilizes the tree type's attributes to render the tree.
>    
>- **Forest**: Manages a collection of trees, handling their creation and drawing. It utilizes the `TreeFactory` to obtain tree types and creates tree objects accordingly.
>    
>
>The `Main` method demonstrates the real-world usage of the `Forest` class by planting trees of different types and drawing the entire forest. Additionally, a conceptual example (`ConceptualExample`) is mentioned but not implemented in the provided code.

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/Flyweight/Program.cs)

> [!example]- Server Side
>``` csharp
>    // Represents a portion of the state shared among multiple tree objects.
>    // Stores data like color and texture to avoid duplication in individual tree objects.
>    class TreeType
>    {
>        private readonly string name;
>        private readonly string color;
>        private readonly string texture;
>
>        public TreeType(string name, string color, string texture)
>        {
>            this.name = name;
>            this.color = color;
>            this.texture = texture;
>        }
>
>        // Draws the tree type at specified coordinates.
>        public void Draw(int x, int y)
>        {
>            Console.WriteLine($"Drawing tree type: {name}, Color: {color}, Texture: {texture} at ({x}, {y})");
>        }
>    }
>
>    // Decides whether to reuse existing flyweight or create a new one.
>    class TreeFactory
>    {
>        private static readonly Dictionary<string, TreeType> treeTypes = [];
>
>        public static TreeType GetTreeType(string name, string color, string texture)
>        {
>            string key = $"{name}_{color}_{texture}";
>            if (!treeTypes.ContainsKey(key))
>            {
>                treeTypes[key] = new TreeType(name, color, texture);
>            }
>            return treeTypes[key];
>        }
>    }
>
>    // Contains the extrinsic part of the tree state.
>    class Tree
>    {
>        private readonly int x, y;
>        private readonly TreeType type;
>
>        public Tree(int x, int y, TreeType type)
>        {
>            this.x = x;
>            this.y = y;
>            this.type = type;
>        }
>
>        // Draws the tree using its type's attributes at its position.
>        public void Draw()
>        {
>            type.Draw(x, y);
>        }
>    }
>
>    // Represents a collection of trees, managing their creation and drawing.
>    class Forest
>    {
>        private readonly List<Tree> trees = [];
>
>        // Plants a tree at the specified position with the given attributes.
>        public void PlantTree(int x, int y, string name, string color, string texture)
>        {
>            TreeType type = TreeFactory.GetTreeType(name, color, texture);
>            Tree tree = new Tree(x, y, type);
>            trees.Add(tree);
>        }
>
>        // Draws all trees in the forest.
>        public void Draw()
>        {
>            foreach (var tree in trees)
>            {
>                tree.Draw();
>            }
>        }
>    }
>```

> [!example]- Client Side
>``` csharp
>static void Main(string[] args)
>{
>    RealWorldExample();
>    ConceptualExample();
>}
>private static void RealWorldExample()
>{
>    Forest forest = new Forest();
>    forest.PlantTree(1, 2, "Pine", "Green", "Needle");
>    forest.PlantTree(5, 3, "Oak", "Brown", "Leaf");
>    // Draw the forest
>    forest.Draw();
>}
>```

## Summary

>[!summary]- **Cheat Sheet**
>**Flyweight Pattern Cheat Sheet**
>**Purpose**:
>- Reduces the cost of creating and manipulating a large number of similar objects.
>- Saves memory by sharing as much data as possible with other similar objects (intrinsic state).
>
>**Components**:
>- **Flyweight**: Interface through which flyweights can receive and act on extrinsic states.
>- **ConcreteFlyweight**: Implements the Flyweight interface and stores intrinsic state. These objects must be sharable.
>- **FlyweightFactory**: Creates and manages flyweight objects and ensures that flyweights are shared properly. When a client requests a flyweight, the factory either uses an existing instance or creates a new one.
>- **Client**: Maintains the extrinsic state and passes it to the flyweight objects for processing.
>
>**Usage**:
>- Use when there are many instances of objects that are similar in structure but vary in state.
>- Use when reducing memory footprint is a priority.
>
>**Benefits**:
>- Greatly reduces the number of objects that need to be created, reducing memory usage and increasing application performance.
>- Centralizes state management in shared objects, simplifying data management across the system.
>
>**Common Scenarios**:
>- Character objects in word processors.
>- Tree and forest simulations where many trees share the same data (species, textures).

^3d2ef7


# References

https://refactoring.guru/design-patterns

