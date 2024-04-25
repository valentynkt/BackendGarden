---
created: 2024-04-15 17:50
aliases:
  - Wrapper Pattern
  - Translator Pattern
  - Interface Adapter Pattern
links: "[[Structural patterns]]"
tags:
  - LearningIT
  - evergreen🌳
---
link: [[Structural patterns]]

# Adapter Pattern

## Overview

![[Pasted image 20240402185336.png]]
_Also known as: Wrapper_

>[!abstract] 
>Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

## Content

### Intent

> [!danger]  **Problem** 
> Imagine you're developing a stock market monitoring app. It fetches stock data from various sources in XML format and presents it to users in visually appealing charts and diagrams. Later on, you decide to enhance the app by integrating a sophisticated third-party analytics library. But here's the challenge: the analytics library exclusively processes data in JSON format. This presents an incompatibility issue since your app's data is in XML format.
>
>**Challenges:**
>- Integrating a smart 3rd-party analytics library that only works with JSON data into an app that fetches data in XML format.
>- Changing the library to support XML could potentially disrupt existing code and may not be feasible if the library's source code is inaccessible.
>![[Pasted image 20240402192929.png]]

> [!success]  **Solution** 
> Enter the Adapter pattern! It's like a language translator for objects. The Adapter allows objects with incompatible interfaces to work together seamlessly. Here's how it tackles the problem:
>
>1. **Creating an Adapter:** You develop special adapters that convert XML data into JSON format for each class of the analytics library your app interacts with directly.  
>2. **Hiding Complexity:** The adapter wraps around the analytics library, shielding your app's code from the conversion process complexity. 
>3. **Seamless Integration:** Your app communicates exclusively through these adapters, ensuring smooth interaction with the analytics library.
>4. **Bi-Directional Conversion:** In some cases, you can even create two-way adapters that facilitate conversion in both XML-to-JSON and JSON-to-XML directions.
>
>**Application in Stock Market App:** To resolve the XML-JSON compatibility issue in your stock market app:
>
>- Develop XML-to-JSON adapters for each analytics library class your app interacts with.
>- Modify your app's code to communicate solely through these adapters.
>- When a call is made, the adapter translates XML data into JSON format and forwards it to the appropriate analytics library methods.

**Summary:** By employing the Adapter pattern, you bridge the gap between incompatible interfaces, ensuring smooth integration of third-party components into your application without compromising existing functionality.

![[Pasted image 20240402193201.png]]

### Structure

![[Pasted image 20240402193358.png]]

1. **Client:**  
    - The Client class encapsulates the existing business logic of the program.
    - It interacts with other classes through a specified interface.
2. **Client Interface:**
    - Describes a protocol that other classes must adhere to in order to collaborate with the client code.
    - Ensures that different implementations can be seamlessly integrated with the client.
3. **Service:**
    - Represents a useful class, often a 3rd-party or legacy component.
    - However, the client cannot directly utilize this class due to an incompatible interface.
4. **Adapter:**
    - The Adapter class acts as a bridge between the client and the service.
    - Implements the client interface while wrapping the service object.
    - Receives calls from the client via the adapter interface and translates them into a format compatible with the service object.
    - Utilizes object composition principle to achieve compatibility.
5. **Benefits:**
    - The client code remains decoupled from the concrete adapter class as long as it interacts with the adapter through the client interface.
    - This decoupling enables the introduction of new adapter types without disrupting existing client code.
    - Particularly useful when the interface of the service class undergoes changes or replacements, as new adapter classes can be created without modifying the client code.

### Applicability

1. **Incompatible Interfaces:** When you need to use an existing class, but its interface doesn't match the rest of your code.
    
    - The Adapter pattern facilitates the creation of a middle-layer class, acting as a translator between your code and the incompatible class. This could be a legacy class, a 3rd-party class, or any other class with a non-standard interface.
2. **Reusing Subclasses without Common Functionality:** When you want to reuse multiple existing subclasses that lack common functionality, which cannot be added to the superclass.
    
    - Extending each subclass to add the missing functionality leads to code duplication across all subclasses, which is undesirable.

**Solution:**

- **Adapter as a Dynamic Feature Enhancer:**
    - Instead of extending each subclass and duplicating code, employ an adapter class.
    - The adapter encapsulates the missing functionality and dynamically adds it to objects lacking these features.
    - For this approach to work, the target classes must share a common interface, and the adapter's field should adhere to that interface.
    - This approach bears resemblance to the Decorator pattern but focuses on bridging interface disparities rather than dynamically adding responsibilities.

### How to Implement

1. **Identify Incompatible Interfaces:**
    
    - Ensure you have at least two classes with incompatible interfaces:
        - A useful service class (e.g., 3rd-party, legacy, or with many existing dependencies).
        - One or more client classes that could benefit from using the service class.
2. **Declare Client Interface:**
    
    - Define the client interface that describes how clients communicate with the service.
    - This interface should provide the methods that the client classes need to interact with the service.
3. **Create Adapter Class:**
    
    - Develop an adapter class that adheres to the client interface.
    - Initially, leave all methods empty.
4. **Add Service Object Reference:**
    
    - Include a field in the adapter class to hold a reference to the service object.
    - Typically, initialize this field through the constructor, but you can also pass it to the adapter when calling its methods.
5. **Implement Methods:**
    
    - One by one, implement all methods of the client interface in the adapter class.
    - Delegate most of the actual work to the service object, focusing on interface or data format conversion within the adapter.
6. **Utilize Adapter via Client Interface:**
    
    - Ensure that clients use the adapter through the client interface.
    - This allows for easy adaptation and extension of adapters without impacting existing client code.

### Pros and Cons

> [!success] **Advantages**
> - **[[Single Responsibility Principle]]:**
 >   - Enables separation of interface or data conversion logic from the primary business logic of the program.
  >  - Each adapter class focuses on a specific task, promoting cleaner and more maintainable code.
> - **[[Open Closed Principle]]:**
  >  - Facilitates the introduction of new types of adapters without disrupting existing client code.
   > - Clients interact with adapters through a common interface, allowing for seamless integration of new adapters without modifying client implementations

> [!warning] **Disadvantages**
> -  **Increased Code Complexity:**
 >   - Introducing a set of new interfaces and classes for adapters can increase the overall complexity of the codebase.
 >   - Requires additional effort to manage and maintain the adapter classes alongside the existing code.
> - **Simplicity vs. Adaptation:**
 >   - Sometimes, it may be simpler and more straightforward to modify the service class to align with the rest of the codebase rather than implementing adapters.
 >  - Deciding whether to use adapters involves weighing the benefits of adaptation against the added complexity introduced by adapter classes and interfaces.

### Relations with Other Patterns

1. **[[Bridge Pattern]]:**
    - Bridge is typically designed upfront, allowing parts of an application to be developed independently of each other.
    - Adapter, on the other hand, is often used in existing applications to make otherwise incompatible classes work together smoothly.
2. **[[Decorator Pattern]]:**
    - Adapter changes the interface of an existing object, while Decorator enhances an object without altering its interface.
    - Decorator supports recursive composition, which is not possible with Adapter.
3. **[[Proxy Pattern]]:**
    - Adapter provides a different interface to the wrapped object, whereas Proxy provides it with the same interface.
    - Additionally, Decorator enhances the interface of the object.
4. **[[Facade Pattern]]:**
    - Facade defines a new interface for existing objects, whereas Adapter strives to make the existing interface usable.
    - Adapter typically wraps a single object, while Facade works with an entire subsystem of objects.
5. **[[Bridge Pattern]], [[State Pattern]], [[Strategy Pattern]]:**
    - These patterns, along with Adapter, share similar structures based on composition.
    - However, they address different problems, each communicating a distinct solution.
    - While Bridge focuses on decoupling abstraction from implementation, State manages object state transitions, and Strategy encapsulates interchangeable algorithms.
    - Adapter, in contrast, adapts the interface of one object to another.

## Examples

This code exemplifies the Adapter pattern, facilitating interaction between components with incompatible interfaces. It involves an analytics library, an adapter for converting XML to JSON, and a stock market application utilizing the adapter to process market data.

> [!abstract]+  **Components of the Implementation**
>- **`IAnalyticsLibrary` (Target Interface):** Defines the interface for analytics libraries, including a method `AnalyzeData` to analyze JSON data.
>    
>- **`AnalyticsLibrary` (Adaptee):** Implements the `IAnalyticsLibrary` interface, analyzing JSON data directly.
>    
>- **`XmlToJsonAdapter` (Adapter):** Converts XML data to JSON format and forwards it to the analytics library. It implements `IAnalyticsLibrary`, accepting an analytics library instance in its constructor.
>    
>- **`StockMarketApp`:** Represents a stock market application utilizing the analytics library to process market data. It receives XML market data, converts it to JSON using the adapter, and then analyzes the data using the analytics library.

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/Adapter/Program.cs)

> [!example]- Server Side
>``` csharp
> public interface IAnalyticsLibrary
> {
>     void AnalyzeData(string jsonData);
> }
>
> // Concrete implementation of the analytics library
> public class AnalyticsLibrary : IAnalyticsLibrary
> {
>     public void AnalyzeData(string jsonData)
>     {
>         Console.WriteLine("Analyzing JSON data: " + jsonData);
>         // Actual analytics logic would be implemented here
>     }
> }
>
> // Adapter for converting XML data to JSON and interacting with the analytics library
> public class XmlToJsonAdapter : IAnalyticsLibrary
> {
>     private readonly IAnalyticsLibrary _analyticsLibrary;
>
>     public XmlToJsonAdapter(IAnalyticsLibrary analyticsLibrary)
>     {
>         _analyticsLibrary = analyticsLibrary;
>     }
>
>     public void AnalyzeData(string xmlData)
>     {
>         // Convert XML to JSON (simplified for demonstration)
>         string jsonData = ConvertXmlToJson(xmlData);
>         // Forward the JSON data to the analytics library
>         _analyticsLibrary.AnalyzeData(jsonData);
>     }
>
>     private string ConvertXmlToJson(string xmlData)
>     {
>         // Simplified conversion logic for demonstration purposes
>         Console.WriteLine("Converting XML to JSON: " + xmlData);
>         // Actual conversion logic would be implemented here
>         return "{\"data\": \"converted from XML\"}";
>     }
> }
>
> // Stock market app
> public class StockMarketApp
> {
>     private readonly IAnalyticsLibrary _analyticsLibrary;
>
>     public StockMarketApp(IAnalyticsLibrary analyticsLibrary)
>     {
>         _analyticsLibrary = analyticsLibrary;
>     }
>
>     public void ProcessMarketData(string marketData)
>     {
>         // Simulate receiving market data in XML format
>         Console.WriteLine("Received XML market data: " + marketData);
>         // Analyze the market data using the analytics library
>         _analyticsLibrary.AnalyzeData(marketData);
>     }
> }
>```

> [!example]- Client Side
>``` csharp
> static void Main(string[] args)
> {
>     StockAppExample();
> }
> static void StockAppExample()
> {
>     // Create an instance of the analytics library
>     AnalyticsLibrary analyticsLibrary = new AnalyticsLibrary();
>
>     // Create an XML-to-JSON adapter for the analytics library
>     IAnalyticsLibrary adapter = new XmlToJsonAdapter(analyticsLibrary);
>
>     // Create a stock market app instance using the adapter
>     StockMarketApp stockMarketApp = new StockMarketApp(adapter);
>
>     // Simulate receiving market data in XML format
>     string xmlMarketData = "<marketData><symbol>ABC</symbol><price>100</price></marketData>";
>     // Process the market data using the stock market app
>     stockMarketApp.ProcessMarketData(xmlMarketData);
> }
>```

## Summary

>[!summary]- **Cheat Sheet**
>**Adapter Pattern Cheat Sheet**
>**Purpose**:
>- Allows objects with incompatible interfaces to collaborate.
>- Often used to make existing classes work with others without modifying their source code.
>
>**Components**:
>- **Target**: The domain-specific interface that the client uses.
>- **Adapter**: Adapts the interface of the Adaptee to the Target interface.
>- **Adaptee**: The existing class that needs adapting.
>- **Client**: Collaborates with objects conforming to the Target interface.
>
>**Usage**:
>- Use when you want to use an existing class, and its interface does not match the one you need.
>- Use when you want to create a reusable class that cooperates with unrelated or unforeseen classes, that is, classes that don't necessarily share interfaces.
>
>**Benefits**:
>- Introduces only one object, and the adapter's interface can be customized to work with the client.
>- Increases transparency of operation.
>- Provides a flexible solution to interface compatibility issues.
>
>**Common Scenarios**:
>- Integrating new components into existing systems where interfaces do not match.
>- Converting data into various formats depending on user requirements.



# References

https://refactoring.guru/design-patterns