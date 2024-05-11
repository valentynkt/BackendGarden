Date and Time: <u> 2023-10-17 21:36 </u>
Tags: [[CSharp]], [[Design Patterns]], [[Dependency Inversion Principle]], [[Depend on Abstraction]]

# Dependency Injection

![[Pasted image 20231017220802.png]]![[Pasted image 20231017220902.png]]

## Intro

``` ad-important
Dependency Injection is a design pattern that promotes the separation of concerns in an application by decoupling the components that depend on each other. In simple terms, it is a technique that allows you to provide the dependencies that a class requires from the outside, rather than creating them within the class. This approach helps to reduce the tight coupling between classes, making your code more modular and flexible.

```

The concept of Dependency Injection revolves around the idea of “dependencies.” In the context of programming, a dependency is when one object relies on another to perform its function. Traditionally, an object would create or find its dependencies internally, but this leads to a tightly-coupled design that’s hard to manage and test.

Dependency Injection addresses this by having dependencies provided to the object (or “injected”), typically through the object’s constructor, a method, or a property. This way, the object isn’t responsible for finding or creating its dependencies, leading to a more modular and flexible design.

## Types of Dependency Injection

The three primary types of Dependency Injection are:


### **Constructor Injection**:

The dependencies are provided through a class constructor. This is the most commonly used and the most recommended form of dependency injection.

``` csharp
public interface ILogger  
{  
 void Log(string message);  
}  
  
public class ConsoleLogger : ILogger  
{  
 public void Log(string message)  
 {  
 Console.WriteLine(message);  
 }  
}  
  
public class MyClass  
{  
 private ILogger _logger;  
  
 // Constructor  
 public MyClass(ILogger logger)  
 {  
 _logger = logger;  
 }  
  
public void DoSomething()  
 {  
 _logger.Log(“We did something!”);  
 }  
}
```

In this example, `MyClass` is dependent on `ILogger`. The `ILogger` dependency is injected via the constructor and can be easily replaced with any class that implements the `ILogger` interface.

### **Setter Injection**: 

The client exposes a setter method that the injector uses to inject the dependency.

``` csharp
public class MyClass  
{  
 private ILogger _logger;  
  
 // Property  
 public ILogger Logger  
 {  
 set { _logger = value; }  
 }  
  
 public void DoSomething()  
 {  
 _logger.Log(“We did something!”);  
 }  
}
```

In this example, the `ILogger` dependency is injected via the `Logger` property.

###  **Interface Injection**: 

The dependency provides an injector method that will inject the dependency.

Interface injection requires the dependent class to implement an interface that will be used to provide the dependency.

Here’s an example:

``` csharp
public interface ILogger  
{  
 void Log(string message);  
}  
  
public interface ILoggerSetter  
{  
 void SetLogger(ILogger logger);  
}  
  
public class MyClass : ILoggerSetter  
{  
 private ILogger _logger;  
  
 public void SetLogger(ILogger logger)  
 {  
 _logger = logger;  
 }  
 public void DoSomething()  
 {  
 _logger.Log(“We did something!”);  
 }  
}
```

In this example, `MyClass` implements the `ILoggerSetter` interface to allow `ILogger` dependency injection.

Each of these types has its uses, which we will explore further in the implementation section.

## Inversion of Control

Inversion of Control (IoC) is a broader design principle that Dependency Injection falls under. It involves inverting the flow of control in a system, meaning that the framework or container calls the custom, user-written code, rather than the other way around.

In the context of Dependency Injection, IoC means inverting the control of managing dependencies. Instead of each object controlling its dependencies, this responsibility is given to an external entity (an IoC container). This external entity creates and wires up dependencies where they are needed.

## Example

### Standard Practices

The implementation of Dependency Injection in C# aligns with several standard practices. The examples previously given demonstrated how dependencies are injected through constructors, setters, or interfaces. However, there are further aspects to consider:

``` ad-important
1. **High-level modules should not depend on low-level modules**: Both should depend on abstractions. This principle, one of the [[SOLID principles]] for object-oriented programming, encourages us to design systems in a way that reduces the dependencies between modules.
2. **[[Abstraction]] should not depend on details**: Details should depend on abstractions. This principle suggests that the overall strategy of a system should dictate the low-level tactics, not the other way around.
```

Suppose we have a `NotificationService` class which is a high-level module in our application. This class depends on a `EmailService` class which is a low-level module for sending notifications.

``` ad-bug
``` csharp
// Low-Level Module  
public class EmailService  
{  
public void SendEmail(string email, string message)  
{  
// Code to send email  
}  
}  
  
// High-Level Module  
public class NotificationService  
{  
private EmailService _emailService;  
  
public NotificationService()  
{  
_emailService = new EmailService();  
}  
  
public void Notify(string email, string message)  
{  
_emailService.SendEmail(email, message);  
}  
}
```
In the above code, `NotificationService` is tightly coupled with `EmailService`. This a bad practice because it violate [[Dependency Inversion Principle]]. And if we decided to add a new SMSService and decide to use it in `NotifacationService` we have to change the code of `NotifacationService`  and it will violate another [[Open Closed Principle]]

---
We can solve this by [[Depend on Abstraction]] rather than depending directly on `EmailService`. Let's define an interface `INotificationService`, and let the `EmailService` implement this interface.

``` csharp
// Abstraction  
public interface INotificationService  
{  
void Notify(string contact, string message);  
}  
  
// Low-Level Module  
public class EmailService : INotificationService  
{  
public void Notify(string email, string message)  
{  
// Code to send email  
}  
}  
  
// High-Level Module  
public class NotificationService  
{  
private INotificationService _notificationService;  
  
public NotificationService(INotificationService notificationService)  
{  
_notificationService = notificationService;  
}  
  
public void Notify(string contact, string message)  
{  
_notificationService.Notify(contact, message);  
}  
}
```

Now, `NotificationService` depends on the abstraction `INotificationService`, not on the low-level module `EmailService`. If we need to change our notification method, we just need to create a new class implementing `INotificationService`, for example, `SMSService`, and inject it into `NotificationService`. The `NotificationService` class itself doesn't need to change.

This decouples the high-level module from the low-level module and makes the system more modular and flexible.

### Simple Example

Let’s consider a common scenario: you have a `UserService` class that needs access to a `UserRepository` to perform database operations. Without Dependency Injection, you might instantiate the `UserRepository` inside the `UserService` class. With Dependency Injection, you inject the `UserRepository` into the `UserService` from the outside. Here’s how it looks in code:

``` csharp
// Without Dependency Injection  
public class UserService  
{  
  private UserRepository _userRepository = new UserRepository();  
  
  public User GetUser(int userId)  
  {  
    return _userRepository.GetUser(userId);  
  }  
}

// With Dependency Injection  
public class UserService  
{  
  private IUserRepository _userRepository;  
    
  public UserService(IUserRepository userRepository)  {  
    _userRepository = userRepository;  
  }  
  
  public User GetUser(int userId)  {  
    return _userRepository.GetUser(userId);  
  }  
}
```

In the second example, the `UserService` class’s dependency on `IUserRepository` is injected through the constructor, promoting a more flexible and testable design.

## Dependency Injection Containers

A Dependency Injection Container, also known as an IoC (Inversion of Control) Container, is a framework for implementing automatic dependency injection. It manages object creation and injects dependencies when required, making it easier to implement Dependency Injection in a consistent manner throughout an application.

.NET Core has built-in support for Dependency Injection and comes with its own lightweight IoC container. However, if you need more features, there are other more powerful containers available like Autofac, Ninject, and Unity.

``` csharp
public class Startup  
{  
public void ConfigureServices(IServiceCollection services)  
{  
services.AddTransient<ILogger, ConsoleLogger>();  
}  
}
```

In this example, the `Startup` class has a `ConfigureServices` method. This is where you configure the application's services. In the method, a `ConsoleLogger` is registered as a service that can fulfil the `ILogger` dependency whenever it's required. The `AddTransient` method specifies that a new `ConsoleLogger` instance should be created each time the `ILogger` service is requested.

## Benefits

Now that you have a basic understanding of Dependency Injection, let’s explore the benefits it offers to C# developers.

``` ad-summary
- [[#Testability]]
- [[#Reusability]]
- [[#Maintainability]]
- [[#Flexibility]]
```

### Testability

Dependency Injection simplifies unit testing by allowing you to easily substitute real implementations with mock objects or test doubles. In the absence of DI, testing can become challenging due to the tight coupling of components.


Consider you want to write a unit test for the `UserService` class in the previous example. With Dependency Injection, you can pass a mock `IUserRepository` to the constructor, allowing you to control the behavior of the repository for testing purposes. Without DI, testing might require complex workarounds or database interactions.

``` csharp
// Example of a unit test with Dependency Injection  
public void Test_GetUser()  
{  
  IUserRepository mockRepository = new Mock<IUserRepository>();  
  mockRepository.Setup(repo => repo.GetUser(1)).Returns(new User { Id = 1, Name = "John Doe" });  
    
  var userService = new UserService(mockRepository.Object);  
  var user = userService.GetUser(1);  
  
  Assert.AreEqual("John Doe", user.Name);  
}

```

### Reusability

DI promotes [[Code reuse|code reusability]] by making it easier to swap out components or extend functionality. For example, you can change the database provider or add caching to your application by creating new implementations of the interfaces and injecting them without affecting existing code.

Let’s say you decide to switch from using a SQL [[database]] to a NoSQL [[database]]. With Dependency Injection, you can create a new `NoSqlUserRepository` implementing `IUserRepository` and inject it into the `UserService` without changing the `UserService` code.

``` csharp
public class NoSqlUserRepository : IUserRepository  
{  
 // Implement methods for NoSQL data access  
}  
  
// Switch to NoSqlUserRepository without changing UserService  
var userService = new UserService(new NoSqlUserRepository());

```

### Maintainability

Dependency Injection leads to more maintainable code. When dependencies are explicitly injected, it’s easier to understand the relationships between classes and their dependencies. This clarity in the codebase simplifies maintenance, troubleshooting, and debugging.

### Flexibility

DI enhances the flexibility of your application by making it easier to configure and adapt to different environments. You can configure the dependency injection container to provide different implementations based on configuration settings or other factors.

## Conclusion

By understanding Dependency Injection and implementing it in your C# applications, you can create more modular, maintainable, and testable code while gaining the flexibility to adapt to changing requirements. It’s a powerful design pattern that every C# developer should have in their toolbox. When used correctly, Dependency Injection can lead to more reliable, scalable, and maintainable software. So, consider making it a core part of your development practices.

# Reference:

https://artemasemenov.medium.com/mastering-dependency-injection-in-c-best-practices-pitfalls-and-future-trends-61189ad97f25
https://lewisjohnbaxter.medium.com/understanding-dependency-injection-in-c-567e65701a34


 