---
created: 19-04-2024 17:28
aliases:
  - ISP
  - ISP in OOP
links: "[[SOLID Principles]]"
tags:
  - LearningIT
  - bud🌿
---
link: [[SOLID Principles|SOLID]]

# Interface Segregation Principle

## Overview

![[Pasted image 20240419180129.png]]
> [!important] **Clients should not be forced to depend on interfaces they do not use.**

The Interface Segregation Principle (ISP) suggests creating interfaces that are specific and focused, avoiding what's called "interface pollution." Instead of one big interface, it's better to have several smaller ones that suit different needs. When you follow ISP, your software design becomes tidier and easier to work with. It means you can maintain and add new features more smoothly.

> [!abstract]
>  ISP emphasizes the importance of making interfaces to client needs, thereby avoiding the compulsion for clients to implement irrelevant interface methods. This leads to a codebase that's easier to navigate and update, with minimal side effects from changes.

## Content

### Principle Explained

ISP directs us to craft interfaces that are:

> [!important]
> 
> - **Narrow and Focused**: Interfaces should be specific to client requirements, ensuring that classes only implement what they need.
> - **Client-Centric**: Design interfaces with the client's use in mind, providing them with the functionality they require without the burden of unused methods.
> - **Granular and Decoupled**: Segregate large, "fat" interfaces into smaller, more coherent ones to reduce the impact of changes and improve adaptability.

### Practical Example

To illustrate the Interface Segregation Principle (ISP), let's examine a library intended to facilitate integration with various cloud services. We’ll see how applying ISP can refine our approach to designing interfaces for these services.

> [!danger]- BEFORE
> BEFORE : A single interface may contain methods not universally applicable to all cloud providers.
> ![[Pasted image 20231008194531.png]]
>``` csharp
>public interface ICloudProvider
>{
>   void StoreFile(string name);
>   void GetFile(string name);
>   void CreateServer(string region);
>   void ListServers(string region);
>   void GetCDNAddress();
>}
>
>public class Amazon : ICloudProvider
>{
>   public void StoreFile(string name) { /* Implementation for Amazon */ }
>   public void GetFile(string name) { /* Implementation for Amazon */ }
>   public void CreateServer(string region) { /* Implementation for Amazon */ }
>   public void ListServers(string region) { /* Implementation for Amazon */ }
>   public void GetCDNAddress() { /* Implementation for Amazon */ }
>}
>
>public class Dropbox : ICloudProvider
>{
>   public void StoreFile(string name) { /* Implementation for Dropbox */ }
>   public void GetFile(string name) { /* Implementation for Dropbox */ }
>   // Dropbox does not support the following methods, thus no implementation is provided
>   public void CreateServer(string region) { throw new NotImplementedException(); }
>   public void ListServers(string region) { throw new NotImplementedException(); }
>   public void GetCDNAddress() { throw new NotImplementedException(); }
>}
>```
> In this scenario, `Dropbox` is forced to implement methods that are not relevant to its services, leading to unnecessary and potentially error-prone code.

> [!success]-  AFTER
> AFTER: After refactoring, we separate the single "fat" interface into multiple, more focused interfaces, allowing each service provider to implement only the interfaces relevant to their capabilities.
> ![[Pasted image 20231008194813.png]]
>``` csharp
>public interface ICloudStorageProvider
>{
>   void StoreFile(string name);
>   void GetFile(string name);
>}
>
>public interface ICloudHostingProvider
>{
>   void CreateServer(string region);
>   void ListServers(string region);
>}
>
>public interface ICDNProvider
>{
>   void GetCDNAddress();
>}
>
>public class Amazon : ICloudStorageProvider, ICloudHostingProvider, ICDNProvider
>{
>   public void StoreFile(string name) { /* Implementation for Amazon */ }
>   public void GetFile(string name) { /* Implementation for Amazon */ }
>   public void CreateServer(string region) { /* Implementation for Amazon */ }
>   public void ListServers(string region) { /* Implementation for Amazon */ }
>   public void GetCDNAddress() { /* Implementation for Amazon */ }
>}
>
>public class Dropbox : ICloudStorageProvider
>{
>   public void StoreFile(string name) { /* Implementation for Dropbox */ }
>   public void GetFile(string name) { /* Implementation for Dropbox */ }
>}
>
>```
> Now, `Amazon` can continue providing a full spectrum of services by implementing all the relevant interfaces, while `Dropbox` implements only the `ICloudStorageProvider` interface, leading to a clean and maintainable code structure that adheres to ISP.


> [!warning] 
> As with the other principles, you can go too far with this one. Don’t further divide an interface which is already quite specific. Remember that the more interfaces you create, the more complex your code becomes. Keep the balance

## Summary

> [!summary] 
>The Interface Segregation Principle plays a vital role in building software architectures that are flexible, easy to maintain, and capable of scaling up. When interfaces are designed to be specific and focused on what clients need, developers can build systems that can handle changes well and meet the requirements of different clients. This principle is at the core of object-oriented design, delivering on its promise of creating software that's adaptable and user-centered.


