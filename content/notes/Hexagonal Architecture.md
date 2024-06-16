---
created: 2024-06-16 10:07
aliases:
  - Ports and Adapters Architecture
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Architectural Patterns]]

# Hexagonal Architecture

## Diagram

![[Pasted image 20240616100837.png]]

## Overview

Hexagonal Architecture, also known as Ports and Adapters Architecture, is a design pattern that aims to decouple the core business logic from external systems, making the application more maintainable and adaptable. It achieves this by placing the inputs and outputs at the edges of the system, allowing the core logic to remain independent of how data is fetched or exposed.

## Key Concepts

> [!summary] **Core Concepts**
> 
> - **Core Logic Isolation**: The core business logic is isolated from external concerns such as databases, APIs, and user interfaces.
> - **Ports**: Define interfaces that the core logic requires or provides, abstracting away the details of how these operations are carried out.
> - **Adapters**: Implement the ports, handling the specifics of interacting with external systems like databases, REST APIs, or other services.
> - **[[Dependency Inversion Principle]]**: Core logic depends on abstractions (ports) rather than concrete implementations (adapters), enhancing flexibility and reducing coupling.

## Example


> [!example]- **Example: Fetching Data from an API**
> 
> Imagine building an API that fetches data from a REST API. In Hexagonal Architecture:
> 
> - **Port**: Create a port that defines the interface for fetching data.
> - **Adapter**: Implement the port in an adapter that handles the interaction with the REST API.
> 
> If the data source changes (e.g., to a database or GraphQL API), only the adapter needs to change, not the core business logic.


> [!example]- C# Example
> 1. **Define a Port**: An interface for data fetching.
>``` csharp
> public interface IDataFetcher
>{
>    Data FetchData(string id);
>}
>
>```
>
> 2. **Implement an Adapter**: A class that interacts with the REST API.
> ``` csharp
> public class RestApiDataFetcher : IDataFetcher
> {
>     private readonly HttpClient _httpClient;
> 
>     public RestApiDataFetcher(HttpClient httpClient)
>     {
>         _httpClient = httpClient;
>     }
> 
>     public Data FetchData(string id)
>     {
>         // Code to fetch data from REST API
>     }
> }
> 
> ```
> 
> 3. **Use the Port in the Core Logic**: The core business logic depends on the port, not the adapter.
>``` csharp
>public class DataService
>{
>    private readonly IDataFetcher _dataFetcher;
>
>    public DataService(IDataFetcher dataFetcher)
>    {
>        _dataFetcher = dataFetcher;
>    }
>
>    public Data GetData(string id)
>    {
>        return _dataFetcher.FetchData(id);
>    }
>}
>
>```

## Related Topics

> [!summary] **Related Topics**
> 
> - **[[Clean Architecture]]**: Shares the same objective of separating concerns and was inspired by Hexagonal Architecture.
> - **[[Onion Architecture Pattern]]**: Similar in its goal of isolating the core logic but uses concentric layers.
> - **[[Microservices Architecture Pattern]]**: Can benefit from the decoupling principles of Hexagonal Architecture.
> - **[[Domain Driven Design]]**: Often used in conjunction with Hexagonal Architecture to model complex business domains.
> - **[[Event-Driven Architecture Pattern]]**: Can complement Hexagonal Architecture by handling asynchronous communication between decoupled components.

Hexagonal Architecture, by focusing on decoupling and clear interfaces, provides a robust framework for building adaptable and maintainable software systems. By leveraging the Dependency Inversion Principle, it ensures that core logic remains unaffected by changes in external dependencies, thus promoting flexibility and resilience.

## Summary

> [!summary]
> The idea of Hexagonal Architecture is to put inputs and outputs at the edges of our design. Business logic should not depend on whether we expose a REST or a GraphQL API, and it should not depend on where we get data from — a database, a microservice API exposed via gRPC or REST, or just a simple CSV file.
> 
> “The pattern allows us to isolate the core logic of our application from outside concerns. Having our core logic isolated means we can easily change data source details without a significant impact or major code rewrites to the codebase.”

# References

[Hexagonal Architecture and Clean Architecture (with examples) - DEV Community](https://dev.to/dyarleniber/hexagonal-architecture-and-clean-architecture-with-examples-48oi)