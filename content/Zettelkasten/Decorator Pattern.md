---
created: 15-04-2024 18:56
status: ReadyForPublication 🚀
aliases:
  - Wrapper Pattern
  - Smart Proxy Pattern
  - Dynamic Extension Pattern
links: "[[Structural patterns]]"
tags:
  - LearningIT
---
link: [[Structural patterns]]
# Decorator Pattern

## Overview


![[Pasted image 20240403191749.png]]
_Also known as: Wrapper_

>[!abstract] 
>**Decorator** is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

## Content

### Intent

> [!danger]+ **Problem** 
> ![[Pasted image 20240403195207.png]]
>_A program could use the notifier class to send notifications about important events to a predefined set of emails._
>
> In a scenario where you're developing a notification library for various applications to notify users about critical events, you initially design a `Notifier` class with a single `send` method that sends messages to a list of email addresses. However, as the library gains traction, users express a desire for more diverse notification methods, including SMS, Facebook, and Slack.
>![[Pasted image 20240403195246.png]]
>_Each notification type is implemented as a notifier’s subclass._
>
>Extending the `Notifier` class with subclasses for each notification type seems like a straightforward solution. Yet, this approach quickly becomes unwieldy when users request the ability to receive notifications through multiple channels simultaneously. Combining multiple notification methods within subclasses proves to be inefficient and leads to bloated code.
>![[Pasted image 20240403195321.png]]
_Combinatorial explosion of subclasses._

> [!success]+ **Solution** 
> Instead of relying solely on inheritance, which has limitations such as static behavior and single-parent restriction, consider employing Aggregation or Composition. These alternatives enable objects to delegate work to other objects dynamically, providing more flexibility.
>![[Pasted image 20240403195405.png]]
>_Inheritance vs. Aggregation_
>
>The Decorator pattern, also known as the "Wrapper," embodies this concept effectively. A decorator is an object that wraps around a target object, containing the same methods and delegating requests to it. However, decorators can alter the result by performing actions before or after passing the request to the target.
>
>To implement this in the notification library, maintain the basic email notification functionality in the `Notifier` class and convert additional notification methods into decorators. Clients can then wrap a basic notifier object with decorators based on their preferences. These decorators form a stack, with the topmost decorator being the one the client interacts with. Since all decorators adhere to the same interface as the base notifier, client code remains agnostic to whether it works with the pure notifier object or a decorated one.
>![[Pasted image 20240403195519.png]]
>_Various notification methods become decorators_

This approach promotes flexibility and scalability. Clients can combine various decorators to customize notification behavior, such as message formatting or recipient list composition, as long as they conform to the same interface as other decorators.

![[Pasted image 20240403195611.png]]

### Structure

![[Pasted image 20240403195749.png]]

1. **Component:** Declares the common interface for both decorators and wrapped objects. This interface defines the operations that can be performed by both decorators and concrete components.
    
2. **Concrete Component:** Represents the class of objects being wrapped. It provides the basic behavior that can be extended or modified by decorators.
    
3. **Base Decorator:** Serves as the base class for all decorators. It contains a reference field pointing to the wrapped object, declared with the component interface type. The base decorator delegates all operations to the wrapped object.
    
4. **Concrete Decorators:** Define additional behaviors that can be dynamically added to components. These decorators override methods of the base decorator and execute their behavior either before or after calling the parent method.
    
5. **Client:** Can wrap components in multiple layers of decorators, treating all objects uniformly through the component interface. This allows clients to compose complex behaviors by combining different decorators.
   
### Applicability

1. **Assigning Extra Behaviors Dynamically:** Use the Decorator pattern when you need to add additional behaviors to objects at runtime without modifying the code that uses these objects. Decorators allow you to attach new functionalities to objects in a flexible and dynamic manner.
2. **Layered Business Logic:** When your business logic can be structured into layers, each providing a specific functionality, the Decorator pattern is beneficial. You can create a decorator for each layer and compose objects with various combinations of these layers at runtime. This allows for a modular and scalable approach to adding features to objects.
3. **Uniform Treatment of Objects:** If you want the client code to interact with objects uniformly, regardless of the additional functionalities they possess, the Decorator pattern is suitable. Since all decorators and concrete components adhere to a common interface, the client code can treat them interchangeably.
4. **Avoiding Inheritance Limitations:** In situations where extending an object's behavior through inheritance is impractical or restricted (e.g., due to final classes in programming languages), the Decorator pattern provides an alternative solution. By wrapping the object with decorators, you can add new behaviors without subclassing, overcoming the limitations imposed by language constraints.

>[!summary] 
>The **Decorator** pattern is applicable when you need to dynamically enhance the behavior of objects at runtime, structure business logic into layers, ensure uniform treatment of objects, and overcome limitations posed by inheritance restrictions

### How to Implement

1. **Analyze Business Domain:** Ensure that your business domain can be structured as a primary component with optional layers of functionalities that can be dynamically added to it.
2. **Identify Common Methods:** Determine the methods that are common to both the primary component and the optional layers. Create a component interface and declare these common methods there. This interface will define the contract that all components and decorators must adhere to.
3. **Create Concrete Component:** Implement a concrete component class that represents the base behavior of the primary component. Define the fundamental functionality within this class.
4. **Define Base Decorator:** Develop a base decorator class that serves as the foundation for all decorators. This class should contain a field to store a reference to a wrapped object, declared with the component interface type. The base decorator is responsible for delegating all work to the wrapped object.
5. **Implement Component Interface:** Ensure that all classes, including concrete components and decorators, implement the component interface. This ensures consistency and allows decorators to be seamlessly integrated with concrete components.
6. **Develop Concrete Decorators:** Extend the base decorator to create concrete decorator classes. Each concrete decorator must augment the behavior of the wrapped object by executing its own functionality before or after delegating to the wrapped object.
7. **Client Responsibility:** The client code is responsible for creating decorators and composing them in the desired manner. Clients can choose which decorators to apply and in what order to achieve the desired functionality combination.

By following these steps, you can successfully implement the Decorator pattern, allowing for dynamic addition of functionalities to objects while adhering to a common interface and maintaining flexibility in behavior composition.

### Pros and Cons
> [!success] **Advantages**
> 1. **Dynamic Behavior Extension:** You can extend an object's behavior without the need to create a new subclass. Decorators provide a flexible way to add functionalities to objects at runtime.    
> 2. **Runtime Flexibility:** Decorators allow for the addition or removal of responsibilities from an object dynamically during the program's execution. This enhances the flexibility of the system.  
> 3. **Behavior Combination:** Multiple decorators can be applied to an object, allowing for the combination of several behaviors. This enables the creation of complex behavior combinations by wrapping the object with multiple decorators.
> 4. **Single Responsibility Principle (SRP):** The Decorator pattern promotes the SRP by enabling the division of a monolithic class into smaller, more specialized classes. Each decorator is responsible for a single aspect of the object's behavior, improving code maintainability.

> [!warning] **Disadvantages**
> 1. **Removal Complexity:** Removing a specific decorator from the decorators stack can be challenging. As decorators are stacked upon each other, removing one may require changes in multiple places.
> 2. **Order Dependency:** The behavior of a decorator may depend on its position in the decorators stack. Ensuring that decorators behave correctly regardless of their order can be difficult, especially in complex scenarios.
> 3. **Initial Configuration Complexity:** Configuring the initial layers of decorators may result in code that appears convoluted or verbose. The process of setting up the decorators stack can be cumbersome, particularly when dealing with multiple layers of decorators.

### Relations with Other Patterns

- **[[Adapter Pattern]]:** Adapter changes the interface of an existing object to match that of a different interface, while Decorator enhances an object's behavior without changing its interface. Decorator supports recursive composition, which Adapter does not.
    
- **[[Proxy Pattern]]:** Proxy and Decorator both provide an enhanced interface to the wrapped object. However, Proxy manages the lifecycle of its service object independently, while the composition of Decorators is controlled by the client.
    
- **[[Chain of Responsibility Pattern]]:** Both Chain of Responsibility and Decorator rely on recursive composition to process requests through a series of objects. However, they serve different purposes. In Chain of Responsibility, handlers can execute operations independently and may stop processing the request at any point. In Decorator, decorators extend an object's behavior while ensuring consistency with the base interface.
    
- **[[Composite Pattern]]:** Decorator and Composite share similar structure diagrams due to their reliance on recursive composition. However, they have different intents. Decorator enhances the behavior of a single object, while Composite aggregates multiple objects into a single object, "summing up" their results.
    
- **[[Prototype Pattern]]:** Designs that utilize both Composite and Decorator patterns can benefit from Prototype. Prototype allows for the cloning of complex structures, reducing the need to reconstruct them from scratch.
    
- **[[Strategy Pattern]]:** Decorator changes the behavior of an object by adding additional responsibilities, essentially changing its "skin." On the other hand, Strategy changes the behavior by altering the object's internal logic, affecting its "guts."
  
## Examples
This code exemplifies the Decorator pattern, which dynamically adds new functionality to objects without altering their structure. It involves a base interface for data sources, concrete components representing file data sources, and decorator classes for encrypting and compressing data.

> [!abstract]+  **Components of the Implementation**
>- **Component Interface (`IDataSource`)**:
>    - Defines operations for reading and writing data.
>- **Concrete Component (`FileDataSource`)**:
>    - Represents the base data source, providing basic read and write operations for file data.
>- **Base Decorator Class (`DataSourceDecorator`)**:
>    - Acts as a base class for concrete decorators, maintaining a reference to the wrapped component.
>    - Implements the same interface as the component to maintain uniformity.
>- **Concrete Decorators (`EncryptionDecorator`, `CompressionDecorator`)**:
    - Add additional behavior to the wrapped data source by intercepting read and write operations.
    - Encrypt and compress data before writing, and decrypt and decompress data after reading.
>**Usage:**
>
>1. Create an instance of the base data source (`FileDataSource`).
>2. Optionally wrap the base data source with decorators to add encryption or compression functionality.
>3. Utilize the decorated data source for reading and writing data.

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/Decorator/Program.cs)

> [!example]- Server Side
>``` csharp
>    // Component Interface
>    interface IDataSource
>    {
>        void WriteData(string data);
>        string ReadData();
>    }
>
>    // Concrete Component: FileDataSource
>    class FileDataSource : IDataSource
>    {
>        private readonly string _filename;
>
>        public FileDataSource(string filename)
>        {
>            _filename = filename;
>        }
>
>        public void WriteData(string data)
>        {
>            Console.WriteLine($"Writing data to {_filename}: {data}");
>        }
>
>        public string ReadData()
>        {
>            Console.WriteLine($"Reading data from {_filename}");
>            return "Mock data from file";
>        }
>    }
>
>    // Base Decorator Class
>    class DataSourceDecorator : IDataSource
>    {
>        protected IDataSource _wrappee;
>
>        public DataSourceDecorator(IDataSource wrappee)
>        {
>            _wrappee = wrappee;
>        }
>
>        public virtual void WriteData(string data)
>        {
>            _wrappee.WriteData(data);
>        }
>
>        public virtual string ReadData()
>        {
>            return _wrappee.ReadData();
>        }
>    }
>
>    // Concrete Decorator: EncryptionDecorator
>    class EncryptionDecorator : DataSourceDecorator
>    {
>        public EncryptionDecorator(IDataSource wrappee) : base(wrappee) { }
>
>        public override void WriteData(string data)
>        {
>            string encryptedData = Encrypt(data);
>            base.WriteData(encryptedData);
>        }
>
>        public override string ReadData()
>        {
>            string data = base.ReadData();
>            return Decrypt(data);
>        }
>
>        private string Encrypt(string data)
>        {
>            Console.WriteLine("Encrypting data...");
>            return $"Encrypted({data})";
>        }
>
>        private string Decrypt(string data)
>        {
>            Console.WriteLine("Decrypting data...");
>            return data.Replace("Encrypted(", "").Replace(")", "");
>        }
>    }
>
>    // Concrete Decorator: CompressionDecorator
>    class CompressionDecorator : DataSourceDecorator
>    {
>        public CompressionDecorator(IDataSource wrappee) : base(wrappee) { }
>
>        public override void WriteData(string data)
>        {
>            string compressedData = Compress(data);
>            base.WriteData(compressedData);
>        }
>
>        public override string ReadData()
>        {
>            string data = base.ReadData();
>            return Decompress(data);
>        }
>
>        private string Compress(string data)
>        {
>            Console.WriteLine("Compressing data...");
>            return $"Compressed({data})";
>        }
>
>        private string Decompress(string data)
>        {
>            Console.WriteLine("Decompressing data...");
>            return data.Replace("Compressed(", "").Replace(")", "");
>        }
>    }
>```

> [!example]- Client Side
>``` csharp
> static void Main(string[] args)
>{
>    RealExample();
>}
>private static void RealExample()
>{
>    // Example usage
>    var app = new Application();
>    app.DumbUsageExample();
>    var configurator = new ApplicationConfigurator();
>    var dataSource = configurator.ConfigurationExample(enabledEncryption: true, enabledCompression: true);
>    var salaryManager = new SalaryManager(dataSource);
>    var salary = salaryManager.Load();
>    Console.WriteLine($"Loaded salary data: {salary}");
>}
> 
> // Client
> class Application
> {
>     public void DumbUsageExample()
>     {
>         IDataSource source = new FileDataSource("somefile.dat");
>         source.WriteData("Salary records");
>
>         source = new CompressionDecorator(source);
>         source.WriteData("Salary records");
>
>         source = new EncryptionDecorator(source);
>         source.WriteData("Salary records");
>     }
> }
>
> // Client
> class SalaryManager
> {
>     private readonly IDataSource _source;
>
>     public SalaryManager(IDataSource source)
>     {
>         _source = source;
>     }
>
>     public string Load()
>     {
>         return _source.ReadData();
>     }
>
>     public void Save(string salaryRecords)
>     {
>         _source.WriteData(salaryRecords);
>     }
> }
>
> // Application Configurator
> class ApplicationConfigurator
> {
>     public IDataSource ConfigurationExample(bool enabledEncryption, bool enabledCompression)
>     {
>         IDataSource source = new FileDataSource("salary.dat");
>
>         if (enabledEncryption)
>             source = new EncryptionDecorator(source);
>
>         if (enabledCompression)
>             source = new CompressionDecorator(source);
>
>         return source;
>     }
> }
>```

## Summary

>[!summary]- **Cheat Sheet**
>**Decorator Pattern Cheat Sheet**
>**Purpose**:
>- Allows for the dynamic addition of behaviors to individual objects without affecting the behavior of other objects from the same class.
>- Provides a flexible alternative to subclassing for extending functionality.
>
>**Components**:
>- **Component**: Defines the interface for objects that can have responsibilities added to them dynamically.
>- **ConcreteComponent**: Defines an object to which additional responsibilities can be attached.
>- **Decorator**: Maintains a reference to a Component object and defines an interface that conforms to Component's interface.
>- **ConcreteDecorator**: Adds responsibilities to the component.
>
>**Usage**:
>- Use when you need to add functionalities to objects dynamically, and when subclassing would result in an exponential rise of new classes.
>- Use to add or remove responsibilities from an object at runtime.
>
>**Benefits**:
>- More flexibility than static inheritance.
>- Simplifies code maintenance because changes in behavior can be made by writing new code rather than altering existing code.
>- Functions can be combined and extended independently.
>
>**Common Scenarios**:
>- UI components that must be decorated with additional graphical elements dynamically.
>- Adding new operations to objects without altering their structure.



## References
[[design-patterns-en.pdf]]

## Revision History
- **CreatedAt**: 15-04-2024 18:56
- **UpdatedAt**: `$= dv.current().file.mtime`
