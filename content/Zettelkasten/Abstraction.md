---
created: 19-04-2024 19:57
status: "#Draft 📝"
aliases:
  - Abstraction Principle
  - OOP Abstraction
  - Data and Process Abstraction
  - Object-Oriented Abstraction Concepts
  - Abstraction in Programming
links: "[[Object Oriented Programming|OOP]]"
tags:
  - LearningIT
---
link: [[Object Oriented Programming|OOP]]

# Abstraction

## Overview

Abstraction is a core concept in object-oriented programming that simplifies the management of complex systems by focusing on the essential characteristics of an object, while hiding the unnecessary implementation details. This principle helps developers build interfaces that are cleaner and more intuitive, enhancing both usability and maintainability.

>[!abstract] 
>Abstraction is a general concept which you can find in the real world as well as in OOP language

## Content

Abstraction allows programmers to handle complexity by providing a simplified model that highlights an object's interactions without revealing the internal processes. It helps in reducing complexity and isolating impacts of changes, making the system easier to understand and modify.

### Real-World Examples of Abstraction

1. **Car Dashboard**: The dashboard of a car gives the driver information about the car's speed, fuel level, and warnings. It simplifies the driving process without requiring the driver to understand the complexities of the vehicle’s internal mechanics.
    
2. **Remote Control**: A remote control enables users to operate a television or other devices from a distance, using simple buttons to perform complex operations like changing channels or adjusting settings. The user interacts with the device through a simple interface, abstracted from the electronic complexities inside.

### Implementing

Abstraction can be achieved with either **abstract classes** or **Interface** ([[Abstract Class vs Interface]]).

The `abstract` keyword is used for classes and methods:

- **Abstract class:** is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class).
  
- **Abstract method:** can only be used in an abstract class, and it does not have a body. The body is provided by the derived class (inherited from).

An abstract class can have both abstract and regular methods:

> [!example]+ csharp
>
>``` csharp
>abstract class Animal 
>{
>  public abstract void animalSound();
>  public void sleep() 
>  {
>    Console.WriteLine("Zzz");
>  }
>}
>```

From the example above, it is not possible to create an object of the Animal class:

> [!danger]+ csharp
>```csharp
>Animal myObj = new Animal(); 
>// Will generate an error (Cannot create an instance of the abstract class or interface 'Animal')
>```

To access the abstract class, it must be [[Inheritance|Inherited]] from another class.

### Types of Abstraction in OOP


Abstraction in OOP can primarily be categorized into two types:

> [!important]+ Data Abstraction
> Data Abstraction focuses on hiding the internal state and requiring users to interact with data through specified methods. A typical implementation involves abstract classes or interface
>> [!example] 
>>``` csharp
>>// Abstract class representing Data Abstraction
>>public abstract class Vehicle {
>>    private string licensePlate; // Hidden data, not directly accessible
>>
>>    public Vehicle(string license) {
>>        this.licensePlate = license; // Only accessible through constructor and methods
>>    }
>>
>>    // Public method to access private data
>>    public abstract void DisplayLicensePlate();
>>}
>>
>>// Concrete implementation
>>public class Car : Vehicle {
>>    public Car(string license) : base(license) {}
>>
>>    public override void DisplayLicensePlate() {
>>        Console.WriteLine($"Car License: {GetLicense()}");
>>    }
>>
>>    private string GetLicense() {
>>        // Encapsulating data retrieval logic
>>        return $"Car-{base.licensePlate}";
>>    }
>>}
>>
>>class Program {
>>    static void Main(string[] args) {
>>        Car myCar = new Car("123ABC");
>>        myCar.DisplayLicensePlate();
>>    }
>>}
>>
>>```
>In this example, the `Vehicle` class uses data abstraction by encapsulating the `licensePlate` attribute. Users of the `Car` class interact with this data through a method (`DisplayLicensePlate`), which internally calls another method that handles data formatting. This abstracts the data handling details from the user.
 

> [!important]+ Process Abstraction
> Process Abstraction simplifies complex operations by hiding the underlying implementation details and providing a user-friendly interface to perform the operations.
>> [!example]  
>>``` csharp
>>// Abstract class defining the process abstraction for handling document processing
>>abstract class DocumentProcessor {
>>    public void ProcessDocument(string content) {
>>        ParseContent(content);
>>        AnalyzeContent();
>>        SaveResults();
>>    }
>>
>>    protected abstract void ParseContent(string content);
>>    protected abstract void AnalyzeContent();
>>    protected abstract void SaveResults();
>>}
>>
>>// Concrete class implementing the abstract DocumentProcessor's methods
>>class TextDocumentProcessor : DocumentProcessor {
>>    protected override void ParseContent(string content) {
>>        Console.WriteLine("Parsing text document...");
>>    }
>>
>>    protected override void AnalyzeContent() {
>>        Console.WriteLine("Analyzing text document...");
>>    }
>>
>>    protected override void SaveResults() {
>>        Console.WriteLine("Saving analysis results...");
>>    }
>>}
>>
>>class Program {
>>    static void Main(string[] args) {
>>        DocumentProcessor processor = new TextDocumentProcessor();
>>        processor.ProcessDocument("Example content.");
>>    }
>>}
>>
>>```
>In this example, the `DocumentProcessor` class abstracts the process of document analysis, which involves parsing, analyzing, and saving the document. The details of these operations are hidden, allowing users to simply call `ProcessDocument` to perform the entire process. This is a clear demonstration of process abstraction.

**Key Differences Highlighted**
- **Data Abstraction**: Focuses on encapsulating data within classes and exposing necessary operations to interact with this data, keeping the data manipulation details hidden.
- **Process Abstraction**: Involves hiding the steps involved in executing a complex process, allowing users to execute the process without knowing the internal steps.

### [[Abstraction vs Encapsulation]] 
![[Abstraction vs Encapsulation#Abstraction vs Encapsulation]]

## Summary

Abstraction in programming is crucial for managing complexity. It allows developers to reduce intricate and detailed coding requirements into simpler, more manageable blocks, thereby improving the modularity and potential for reuse of code. Abstraction ensures that systems are not only manageable but also scalable and robust.

>[!summary]
>The strategic use of abstraction in software development enhances efficiency and error management, and is essential for creating flexible and sustainable code architectures.


# References

[Abstraction](https://www.w3schools.com/cs/cs_abstract.php) - w3school

# Revision History
- **CreatedAt**: 19-04-2024 19:57
- **UpdatedAt**: `$= dv.current().file.mtime`
