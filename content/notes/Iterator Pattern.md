---
created: 2024-04-15 20:31
aliases:
  - Cursor Pattern
  - Traversal Pattern
  - Iterator Object Pattern
links: "[[Behavioral patterns]]"
tags:
  - LearningIT
  - evergreen🌳
---
link: [[Behavioral patterns]]

# Iterator Pattern

## Overview

![[Pasted image 20240409005856.png]]

>[!abstract]
>**Iterator** is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

## Content

### Intent

> [!danger]  **Problem** 
> ![[Pasted image 20240409010113.png]]
>Collections are fundamental in programming, serving as containers for objects. While most collections use simple list structures, others might utilize stacks, trees, or graphs. Regardless of the complexity, each collection needs to offer a method to access its elements, allowing other parts of the code to utilize these objects. Simple list-based collections are straightforward to traverse, but what about complex structures like trees which might require depth-first or breadth-first traversals, or even random access?
>
>![[Pasted image 20240409010131.png]]
>
>As collections evolve to support multiple traversal methods, their primary role—efficient data storage—becomes muddled with additional responsibilities. Moreover, incorporating specific traversal algorithms that are only relevant to certain applications can clutter the collection class. Consequently, client code that interacts with these collections is often tightly coupled to their specific implementations, limiting flexibility.

> [!success]  **Solution** 
> The **Iterator** pattern addresses these challenges by decoupling the traversal mechanism from the collection itself. This separation is achieved by encapsulating the traversal logic within a distinct iterator object. Each iterator holds the details necessary for the traversal, such as the current position and the count of remaining elements, allowing for multiple iterators to independently traverse the same collection simultaneously.
>
>![[Pasted image 20240409010401.png]]
>_Iterators implement various traversal algorithms. Several iterator objects can traverse the same collection at the same time._
>
>Iterators typically offer a primary method to retrieve collection elements, which the client continues to call until all items have been accessed. To ensure compatibility across different collection types and traversal strategies, all iterators conform to a common interface. This uniformity allows client code to remain agnostic of the specific collection or traversal method used. If a new traversal approach is needed, a new iterator class can be developed without modifying the existing collection or client code, thereby adhering to the Open/Closed Principle.

This design not only simplifies client interactions with collections but also enhances flexibility by facilitating various traversal methods without overcomplicating the collection classes.

### Structure

![[Pasted image 20240409010034.png]]

1. **Iterator Interface:** This interface outlines the essential operations for traversing a collection, including fetching the next element, checking the current position, and restarting the iteration process. It standardizes how iterators should interact with collections, ensuring consistency across different implementations.
    
2. **Concrete Iterators:** These are implementations of the Iterator interface tailored to specific traversal algorithms. Each iterator is responsible for maintaining its own progress through the collection. This autonomy allows multiple iterators to independently traverse the same collection without interfering with each other.
    
3. **Collection Interface:** The Collection interface defines methods for obtaining iterators that are compatible with the collection. The return type of these methods is the Iterator interface, which allows for the flexibility to return different types of iterators that conform to this interface, catering to various traversal needs.
    
4. **Concrete Collections:** Concrete collections implement the Collection interface and provide new instances of a specific iterator class upon request. The remainder of the collection’s functionality (such as storage and management of elements) resides within the same class but is separate from the iterator functionality to maintain clarity and adhere to the Iterator pattern.
    
5. **Client Interaction:** Clients interact with collections and iterators through their interfaces, which decouples the client code from specific implementations of collections and iterators. This abstraction allows the same client code to operate with various collections and iterators seamlessly. While clients typically receive iterators from the collections they work with, they may also instantiate specific iterators directly if a custom traversal is required.
    

This structure ensures that the Iterator pattern provides a clear and flexible framework for accessing elements in a collection without needing to understand or manage the underlying collection's structure.

### Applicability

1. **Complex Structures:** Use the Iterator pattern to manage collections with complex data structures like trees or graphs. It provides a simple interface for accessing elements, hiding the intricacies of navigating these structures.

2. **Reducing Code Duplication:** The pattern centralizes iteration logic, separating it from the core business logic of your application. This separation helps in organizing and maintaining code by eliminating repetitive iteration code throughout the application.

3. **Uniform Data Access:** The Iterator pattern facilitates consistent access to various data structures using a single iterative interface. This uniformity promotes code reusability and reduces coupling between components.
   
4. **Flexible Collection Management:** It’s beneficial in environments with diverse or evolving collection types. Implementing this pattern ensures that your application can adapt to new data structures with minimal code changes, as long as these structures support a standard iterator interface.
  

> [!tip] 
>By adopting the Iterator pattern, developers can enhance the robustness, maintainability, and scalability of their software, making it easier to incorporate changes and new features with reduced effort.


### How to Implement

1. **Define the Iterator Interface:**
    - **Essentials:** Establish an interface for iterators that includes necessary methods for traversal:
        - `Next()`: Advances the iterator to the next element in the collection.
        - `Previous()`: Optional method for bidirectional traversal, allowing movement to the previous element.
        - `Current()`: Retrieves the current element without moving the iterator.
        - `IsDone()`: Checks whether all elements have been visited, useful for ending iterations.
2. **Define the Collection Interface:** 
    - **Iterator Retrieval:** This interface should specify methods to obtain iterators tailored to the collection. This setup allows the provision of different types of iterators, such as forward-only or bidirectional, based on the collection's structure and the user's needs.
3. **Implement Concrete Iterator Classes:**
    - **Link to Collection:** Each iterator class must be linked to a specific collection, typically done by passing the collection instance to the iterator’s constructor. This connection ensures that the iterator can access the collection’s elements while maintaining its own state of traversal. This allows multiple iterators to independently traverse the same collection without interfering with each other.
4. **Implement the Collection Interface:**
    - **Shortcut for Iterator Creation:** Implement the collection interface in such a way that it includes methods to create new iterators. These methods should instantiate iterators by passing themselves (`this` reference) to the constructors of the iterators. This mechanism links the iterators directly to their respective collections, facilitating precise and controlled traversal.
5. **Update Client Code:**
    - **Using Iterators for Traversal:** Adapt client code that iterates over collections to utilize the new iterator infrastructure. Instead of directly iterating through the collection's elements, the client should retrieve an iterator from the collection and use the iterator's methods to access elements. This adjustment not only decouples the client code from the collection's internal structure but also enhances flexibility and maintainability by centralizing the iteration logic within the iterator classes.

### Pros and Cons

> [!success] **Advantages**
> 1. **[[Single Responsibility Principle]]:**
>     
>     - **Clearer Code Structure:** By moving traversal logic into separate iterator classes, both client code and collection classes are simplified. This extraction means that each class focuses on a single responsibility; collections manage data storage and iterators handle navigation, making the system easier to understand and maintain.
> 2. **[[Open Closed Principle]]:**
>     
>     - **Flexibility in Extension:** New types of iterators and collections can be introduced and integrated without modifying the existing code. This capability ensures that the system is open for extension but closed for modification, facilitating easier updates and enhancements with minimal risk of introducing errors.
> 3. **Parallel Iteration:**
>     
>     - **Independent State:** Each iterator maintains its own state, allowing multiple iterators to traverse the same collection concurrently without interfering with each other. This feature is particularly useful in multithreaded scenarios where different threads need to process elements of the same collection simultaneously.
> 4. **Interruptible Iteration:**
>     
>     - **Resumable Processing:** Since each iterator tracks its own position independently, iterations can be paused and resumed. This flexibility is useful in applications where the iteration process might need to be halted (for example, waiting for new data or user input) and then continued from the same poin

> [!warning] **Disadvantages**
> 1. **Potential Overuse:**
>     
>     - **Complexity for Simple Needs:** For applications that only manage simple collections, implementing the Iterator pattern might introduce unnecessary complexity. In such cases, the standard iteration provided by the collection's native data structure might be more straightforward and efficient.
> 2. **Performance Concerns:**
>     
>     - **Efficiency Issues:** Using iterators can sometimes be less efficient than directly accessing elements of a collection, especially with specialized data structures optimized for certain access patterns. The overhead of iterator objects and method calls can add unnecessary performance costs compared to simple loop constructs.

### Relations with Other Patterns

The Iterator pattern interacts synergistically with several other design patterns, enhancing its functionality and broadening its applicability. Here’s how it relates to other common design patterns:

**1. [[Composite Pattern]]:**

- **Traversal of Hierarchies:** Iterators are particularly useful for navigating Composite trees. In scenarios where a collection includes individual objects and compositions of these objects (trees), an iterator can simplify the traversal of these structures without exposing their internal representation to the client code. This allows clients to uniformly process all elements in the composite structure, regardless of their specific types or the complexity of the composite layout.

**2. [[Factory Method Pattern]]:**

- **Custom Iterator Creation:** Combining the Factory Method with the Iterator pattern enables a collection to produce iterators that are specifically tailored to the needs of that collection. This approach is beneficial when collections vary significantly in terms of their structure and the optimal iteration strategy. The Factory Method pattern can be used to encapsulate the creation logic of these iterators, allowing subclasses of the collection to define which iterators to produce, thereby ensuring compatibility and optimizing performance.

**3. [[Memento Pattern]]:**

- **State Capture and Restoration:** When used alongside the Memento pattern, the Iterator can save its current state (such as the current traversal position) and restore it later. This is particularly useful in applications requiring complex traversal operations that may need to be undone or replayed. For example, in a user interface where a user can navigate back and forth within a collection, capturing the state of an iterator allows the application to easily revert to a previous state.

**4. [[Visitor Pattern]]:**

- **Operation Execution Across Classes:** The Iterator pattern can be effectively paired with the Visitor pattern to perform operations across elements of a collection that may have different types. By separating the operations performed on elements from the classes of the elements themselves, the Visitor pattern allows adding new operations without changing the classes on which it operates. The Iterator provides the mechanism to traverse the elements, and the Visitor defines what happens during this traversal.

## Examples

  
This C# code demonstrates the **Iterator** design pattern within the context of a social network application. The Iterator pattern is used to traverse a collection without exposing its underlying representation. This implementation specifically deals with iterating over user profiles on a social network like Facebook.

> [!abstract]+  **Components of the Implementation**
>1. **`Profile` Class**:
>    
>    - Represents a user profile in the social network, encapsulating properties such as the user's ID and email.
>2. **`SocialNetwork` Interface**:
>    
>    - Declares a factory method for producing iterators for different types of profile lists, such as friends and coworkers.
>3. **`Facebook` Class**:
>    
>    - A concrete implementation of the `SocialNetwork` interface that simulates fetching profile data from a social graph. It provides methods to create iterators for friends and coworkers lists based on a profile ID.
>4. **`ProfileIterator` Interface**:
>    
>    - Common interface for all iterators, providing methods to access the next profile in the collection (`GetNext`) and to check if more profiles are available (`HasMore`).
>5. **`FacebookIterator` Class**:
>    
>    - A concrete iterator that handles the traversal of profiles fetched from Facebook. It manages internal state such as the current position in the list and a cache of profiles, ensuring that the collection is fetched lazily upon first access.
>6. **`SocialSpammer` Class**:
>    
>    - Acts as a client that utilizes the iterators to send messages to various profiles. It iterates over profiles using the provided iterator and could hypothetically send emails to each.
>7. **`Application` Class**:
>    
>    - Configures and utilizes the components of the iterator pattern to perform specific operations, such as sending spam messages to friends or coworkers of a given profile.

This setup illustrates how the Iterator pattern can be effectively used to abstract the complexity of traversing collections while still allowing for flexible operations on the elements of the collection. The pattern is particularly useful in scenarios where the collection's implementation may change, but the way it is traversed does not.


> [!important] More Examples
> There are other C# example of Iterator pattern in my github.
> Another example demonstrates how Iterator pattern can be simplified using [[IEnumurator]], [[IEnumerable]]

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/Iterator/Program.cs)

> [!example]- Server Side
> ``` csharp
>  // Represents a user profile in the social network.
>  public class Profile
>  {
>      public string Id { get; }
>      public string Email { get; }
> 
>      public Profile(string id, string email)
>      {
>          Id = id;
>          Email = email;
>      }
> 
>      // ... Additional profile properties and methods ...
>  }
> 
>  // The collection interface declares a factory method for producing iterators.
>  public interface SocialNetwork
>  {
>      ProfileIterator CreateFriendsIterator(string profileId);
>      ProfileIterator CreateCoworkersIterator(string profileId);
>  }
> 
>  // The Facebook class is a concrete collection that implements the SocialNetwork interface.
>  public class Facebook : SocialNetwork
>  {
>      // ... The bulk of the collection's code should go here ...
> 
>      // Methods for iterator creation.
>      public ProfileIterator CreateFriendsIterator(string profileId)
>      {
>          return new FacebookIterator(this, profileId, "friends");
>      }
> 
>      public ProfileIterator CreateCoworkersIterator(string profileId)
>      {
>          return new FacebookIterator(this, profileId, "coworkers");
>      }
> 
>      // Method that simulates a social graph request to Facebook's backend system.
>      public List<Profile> SocialGraphRequest(string profileId, string type)
>      {
>          // In a real app, you'd make an API request to Facebook here.
>          // We'll just simulate the result.
>          List<Profile> profiles = [];
>          // Dummy data for illustration purposes
>          if (type == "friends")
>          {
>              profiles.Add(new Profile("friend1", "friend1@example.com"));
>              profiles.Add(new Profile("friend2", "friend2@example.com"));
>          }
>          else if (type == "coworkers")
>          {
>              profiles.Add(new Profile("coworker1", "coworker1@example.com"));
>              profiles.Add(new Profile("coworker2", "coworker2@example.com"));
>          }
>          return profiles;
>      }
>  }
> 
>  // The common interface for all iterators.
>  public interface ProfileIterator
>  {
>      Profile GetNext();
>      bool HasMore();
>  }
> 
>  // The concrete iterator class.
>  public class FacebookIterator : ProfileIterator
>  {
>      private readonly Facebook facebook;
>      private readonly string profileId;
>      private readonly string type;
>      private int currentPosition = 0;
>      private List<Profile> cache;
> 
>      public FacebookIterator(Facebook facebook, string profileId, string type)
>      {
>          this.facebook = facebook;
>          this.profileId = profileId;
>          this.type = type;
>      }
> 
>      private void LazyInit()
>      {
>          if (cache == null)
>          {
>              cache = facebook.SocialGraphRequest(profileId, type);
>          }
>      }
> 
>      public Profile GetNext()
>      {
>          if (HasMore())
>          {
>              return cache[currentPosition++];
>          }
>          else
>          {
>              return null;
>          }
>      }
> 
>      public bool HasMore()
>      {
>          LazyInit();
>          return currentPosition < cache.Count;
>      }
>  }
> 
>  // SocialSpammer is the client class that sends messages via email to various profiles.
>  public class SocialSpammer
>  {
>      public void Send(ProfileIterator iterator, string message)
>      {
>          while (iterator.HasMore())
>          {
>              Profile profile = iterator.GetNext();
>              System.Console.WriteLine("Sending email to: " + profile.Email);
>              // System.SendEmail(profile.GetEmail(), message);
>          }
>      }
>  }
> 
>  // Application class configures collections and iterators and then passes them to the client code.
>  public class Application
>  {
>      private SocialNetwork network;
>      private SocialSpammer spammer;
> 
>      public void Config()
>      {
>          // This would be determined by external configuration, such as a settings file or user input.
>          this.network = new Facebook();
>          // if working with LinkedIn, network would be set to a new LinkedIn instance.
> 
>          this.spammer = new SocialSpammer();
>      }
> 
>      public void SendSpamToFriends(Profile profile)
>      {
>          ProfileIterator iterator = network.CreateFriendsIterator(profile.Id);
>          spammer.Send(iterator, "Very important message");
>      }
> 
>      public void SendSpamToCoworkers(Profile profile)
>      {
>          ProfileIterator iterator = network.CreateCoworkersIterator(profile.Id);
>          spammer.Send(iterator, "Very important message");
>      }
>  }
> ```

> [!example]- Client Side
>``` csharp
>static void Main(string[] args)
>{
>    RealExampleCustom();
>}
>// Example Iterator pattern using IEnumerable
>private static void RealExampleCustom()
>{
>    // Initialize the social network implementation.
>    CustomIEnumerable.SocialNetwork facebook = new CustomIEnumerable.Facebook();
>    // Create the application that will use this network.
>    CustomIEnumerable.Application app = new CustomIEnumerable.Application(facebook);
>    // Profile ID for the user whose friends and coworkers will receive messages.
>    string profileId = "user123";
>    // Send spam to friends.
>    Console.WriteLine("Sending messages to friends:");
>    app.SendSpamToFriends(profileId, "Hello, friend! Check out our new promotion.");
>    // Send spam to coworkers.
>    Console.WriteLine("\nSending messages to coworkers:");
>    app.SendSpamToCoworkers(profileId, "Hello, coworker! Don't forget our meeting at 3 PM.");
>    Console.WriteLine("\nPress any key to exit...");
>    Console.ReadKey();
>}
>```

### [[IEnumerator]] and [[IEnumerable]]

The example provided in the previous description demonstrates the Iterator pattern within a specific application context but does not fully leverage the capabilities of C# and its .NET framework, particularly the `IEnumerable<T>` and `IEnumerator<T>` interfaces. These interfaces are integral to C# and provide a standardized way to iterate over collections that is more idiomatic and efficient. Here are key points on how the code could be upgraded using these interfaces, and why such an upgrade is generally recommended:

 **Key Upgrades Using `IEnumerable<T>` and `IEnumerator<T>`**


> [!tip]- Upgrades
>**1. Use of Standard .NET Interfaces:**
>
>- **Current Implementation:** The custom `ProfileIterator` interface replicates functionality that is already provided by `IEnumerator<T>`. This redundancy could be eliminated by directly implementing `IEnumerator<T>` or returning `IEnumerator<T>` from methods.
>- **Improved Approach:** Implement `IEnumerable<Profile>` and `IEnumerator<Profile>` in the `Facebook` class and related iterators. This would not only streamline the code by reducing the need for custom interfaces but also integrate better with other .NET components and libraries, which expect these standard interfaces.
>
>**2. Simplification of Client Code:**
>
>- **Current Implementation:** The `SocialSpammer` and `Application` classes use the custom iterator interface, which requires explicit management of the iteration process (`GetNext`, `HasMore`).
>- **Improved Approach:** By implementing `IEnumerable<Profile>`, you can use `foreach` loops directly in the `SocialSpammer` class to iterate over profiles. This eliminates the need for manual checking of `HasMore` and calling `GetNext`, reducing error potential and improving readability.
>
>**3. Enhancing Concurrency and Reusability:**
>
>- **Current Implementation:** Each iterator maintains its state, which is good for concurrent use, but the custom implementation limits the reusability of iterators with other .NET features like LINQ.
>- **Improved Approach:** Standard `IEnumerator<Profile>` automatically supports concurrent iterations over the same collection and can be seamlessly used with LINQ for filtering, sorting, and other operations. This enhances the reusability and functionality of the collections.
>
>**4. Lazy Loading and Efficiency:**
>
>- **Current Implementation:** Lazy loading is manually implemented in the `FacebookIterator`.
>- **Improved Approach:** Use `yield return` in the implementation of `IEnumerable<Profile>.GetEnumerator()` to simplify the lazy loading of items. This C# feature handles state machine creation behind the scenes, making code cleaner and avoiding the explicit caching and state tracking in iterators.
>
>**5. Error Handling and Robustness:**
>
>- **Current Implementation:** Manual implementation of iterators may not correctly handle all edge cases, such as collection modification during iteration.
>- **Improved Approach:** Using `IEnumerable<T>` and `IEnumerator<T>` interfaces with `yield return` inherently supports robust error handling by the .NET runtime, which includes throwing `InvalidOperationException` when the collection is modified during iteration.


> [!summary]- 
> While the custom iterator approach is perfectly valid and demonstrates the Iterator pattern's principles, adopting C#'s built-in `IEnumerable<T>` and `IEnumerator<T>` interfaces would make the code more idiomatic, robust, and compatible with the wider .NET ecosystem. This adjustment would not only simplify the implementation but also enhance its integration with other .NET functionalities, improving the overall quality and maintainability of the code.

## Summary

>[!summary]- **Cheat Sheet**
>**Iterator Pattern Cheat Sheet**
>**Purpose**:
>- Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
>- Facilitates the traversal of a collection of objects without the complexities of understanding and interacting with its internal structure.
>
>**Components**:
>- **Iterator Interface**: Defines an interface for accessing and traversing elements.
>- **Concrete Iterator**: Implements the Iterator interface and keeps track of the current position in the traversal of the aggregate.
>- **Aggregate Interface**: Defines an interface for creating an Iterator object.
>- **Concrete Aggregate**: Implements the Aggregate interface and returns an instance of the corresponding Concrete Iterator.
>
>**Usage**:
>- Use when you want to hide the complexities of the internal structure of an aggregate object from its clients.
>- Use to support multiple simultaneous traversals of aggregate objects.
>- Use to provide a uniform interface for traversing different aggregate structures (e.g., trees, graphs, and lists).
>
>**Benefits**:
>- Supports variations in the traversal of an aggregate.
>- Minimizes the duplication of traversal code.
>- Decouples the collection from its traversal process.
>
>**Common Scenarios**:
>- Navigating through a complex data structure like a linked list or a binary tree.
>- Implementing polymorphic collections and iterators that allow handling of different data structures through a uniform interface.



# References

https://refactoring.guru/design-patterns


