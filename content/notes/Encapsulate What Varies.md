---
created: 2024-04-19 02:10
aliases:
  - Encapsulation in Software Design
  - Isolating Change in Code
links: "[[Design Principles]]"
tags:
  - LearningIT
  - bud🌿
---
link: [[Design Principles]]

# Encapsulate What Varies

## Overview

![[06a41f81-0b16-4a99-afa7-e69ba8b14e02.webp]]

**Encapsulate What Varies** is a fundamental software design principle aimed at managing change by isolating it. This approach advises developers to separate the parts of their application that are likely to change from those that remain constant. This segregation enhances flexibility, reduces the impact of modifications, and simplifies maintenance.

> [!abstract]
>  Implementing this principle correctly ensures that changes to the business requirements or technology affect minimal parts of the system, maintaining overall stability and promoting code reuse.

## Content

### Key Concepts

Encapsulation can be applied at various levels within a software system, primarily focusing on method and class levels:

> [!important]
> 
> - **Method Level**: Encapsulate the changing aspects within a method to prevent changes to its implementation from affecting its callers. This makes the public interface of methods stable despite internal changes.
> - **Class Level**: Use interfaces or abstract classes to create a flexible and stable foundation, allowing implementations to vary without impacting dependent classes.


> [!example]- Method Level
> Method level encapsulation focuses on keeping the variability within a method, so that changes to how something is done don't affect those who rely on the method. This means the method's interface (signature) stays constant even if the implementation changes.
>``` csharp
>public class PaymentProcessor
>{
>    // The method signature remains the same while the implementation can vary.
>    public void ProcessPayment(double amount, PaymentMethod method)
>    {
>        switch (method)
>        {
>            case PaymentMethod.CreditCard:
>                ProcessCreditCardPayment(amount);
>                break;
>            case PaymentMethod.PayPal:
>                ProcessPayPalPayment(amount);
>                break;
>            default:
>                throw new NotImplementedException("Payment method not supported.");
>        }
>    }
>
>    private void ProcessCreditCardPayment(double amount)
>    {
>        // Implementation details for credit card payment processing
>        Console.WriteLine($"Processing credit card payment of {amount}");
>    }
>
>    private void ProcessPayPalPayment(double amount)
>    {
>        // Implementation details for PayPal payment processing
>        Console.WriteLine($"Processing PayPal payment of {amount}");
>    }
>}
>
>public enum PaymentMethod
>{
>    CreditCard,
>    PayPal
>}
>```
>
>In this example, the `ProcessPayment` method encapsulates the variations in payment processing methods. This isolation prevents the need to modify calling code if new payment methods are added or existing methods are changed.

> [!example]- Class Level
> Class level encapsulation involves isolating changes to a class so that alterations within the class do not impact its clients. This is often achieved using abstraction (interfaces or abstract classes) to interact with the class.
>``` csharp
>public interface ILogger
>{
>    void Log(string message);
>}
>
>// Concrete implementation of ILogger, which can be changed without affecting client code.
>public class FileLogger : ILogger
>{
>    public void Log(string message)
>    {
>        // Log message to a file
>        Console.WriteLine($"Log to file: {message}");
>    }
>}
>
>public class ConsoleLogger : ILogger
>{
>    public void Log(string message)
>    {
>        // Log message to console
>        Console.WriteLine($"Log to console: {message}");
>    }
>}
>
>public class Application
>{
>    private ILogger logger;
>
>    public Application(ILogger logger)
>    {
>        this.logger = logger;
>    }
>
>    public void DoSomethingImportant()
>    {
>        logger.Log("Starting an important operation");
>        // Important stuff
>        logger.Log("Ending an important operation");
>    }
>}
>
>```
>
>In this scenario, the `Application` class is designed to use an `ILogger` to log messages. The specific type of logger (`FileLogger` or `ConsoleLogger`) can vary, but as long as they implement the `ILogger` interface, the `Application` class does not need to change. This encapsulation allows the logger to be swapped without affecting the `Application`'s operation.

### Benefits of Encapsulation

Encapsulating variability not only reduces the complexity and increases the modularity of code but also allows for:

- **Enhanced Flexibility**: Adjustments or improvements can be made with minimal system-wide repercussions.
- **Easier Maintenance and Testing**: Isolated changes make the system easier to debug and test.
- **Increased Code Reuse**: Stable interfaces promote reusability across different parts of the application or in future projects.
