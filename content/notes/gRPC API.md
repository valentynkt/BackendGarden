---
created: 2024-05-13 12:25
aliases:
  - gRPC
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[API Architectures]]

# gRPC (gRPC Remote Procedure Call)

![[Pasted image 20240513123450.png]]

## Overview

gRPC is a modern, high-performance framework that enables efficient communication between services in a distributed system. Developed by Google, it is built on the foundation of traditional [[Remote Procedure Call]] (RPC) technology but enhanced with advanced features from [[HTTP 2.0|HTTP/2.0]].

**gRpc is [[API]]-Oriented**

## Key Features of gRPC

gRPC is designed for low latency and high throughput communication, making it an excellent choice for lightweight [[Microservices Architecture Pattern|Microservices]] and scalable applications.

> [!info]-
> - **[[HTTP 2.0|HTTP/2.0]] Based**: Utilizes HTTP/2 for transport, which supports multiplexing multiple requests over a single connection.
> - **Interface Definition Language (IDL)**: Uses [[Protocol Buffers]] (often abbreviated as ProtoBuf), Google’s language-neutral, platform-neutral, extensible mechanism for serializing structured data.
> - **Streaming Support**: Provides support for streaming requests and responses, allowing bidirectional and [[Asynchronous]] communication.
> - **Language Agnostic**: Offers [[API]] stubs in various programming languages, enabling easy implementation across different systems.

## How gRPC Works

gRPC allows developers to define service methods that can be called remotely with specified input and output parameters. This is done using [[Protocol Buffers]], which also serve as the primary [[Data Serialization]] format for these communications.


> [!important] [[Remote Procedure Call|RPC]] Mechanism
> Remote Procedure Call (RPC) technology underpins gRPC, allowing a client application to directly call methods on a server application on a different machine as if it were a local object.


> [!example]- [[Protocol Buffers]]
> - **Efficiency**: Protocol Buffers provide a more efficient and compact [[Data Serialization|Serialization]] format than traditional [[JSON]] or [[XML]], greatly reducing bandwidth usage.
> - **Compatibility**: Ensures forward and backward compatibility of the API interfaces.


> [!info]- Utilization Of [[HTTP 2.0|HTTP/2]]
> - **Single [[TCP]] Connection**: Unlike [[HTTP 1.1|HTTP/1.1]], [[HTTP 2.0|HTTP/2]] can transmit multiple streams of data bidirectionally over a single [[TCP]] connection without closing it.
> - **Stream Multiplexing**: Each [[Remote Procedure Call|RPC]] call corresponds to a distinct stream in [[HTTP 2.0|HTTP/2]], allowing simultaneous data exchanges across multiple calls without interference.
> - **Frame Management**: Data is divided into frames, each tagged with a unique stream ID, facilitating concurrent message handling and reducing latency.
> - **Efficient Resource Management**: By managing multiple requests and responses concurrently, [[HTTP 2.0|HTTP/2]] minimizes the need for multiple connections, conserves resources, and enhances communication speed.
> 
> ![[Pasted image 20231030182830.png]]
>


### Components of gRPC

![[Pasted image 20231030183337.png]]

gRPC's architecture is built around three core components that facilitate the development of robust, scalable, and efficient applications. Here’s a breakdown of each component:


> [!info]- **Service Definition**
> The foundation of a gRPC service is its service definition. This is typically expressed in a `.proto` file where you define the service interface. The interface includes the methods that can be invoked remotely, along with their input parameters and return types.
>
> - **[[Protocol Buffers]]**: Service definitions are written using Protocol Buffers (proto files), which serve as the [[API]] contract between client and server.
> - **Code Generation**: These `.proto` files are essential for generating the server and client code, allowing for seamless and consistent communication across different programming environments.


> [!example]- **gRPC Server**
> Once the service definition is in place, the source code is generated using the Protocol Buffers compiler (`protoc`), which supports various programming languages. Additionally, using the gRPC plugin for Protocol Buffers, you can generate server-side code that handles the actual implementation of the services defined in the proto files.
>
> - **Implementation**: The server implements the services defined in the `.proto` file.
> - **Running the Server**: It hosts a gRPC server that listens for requests from clients, processing them as defined by the service interfaces.


> [!example]- **gRPC Client**
> The client-side of gRPC involves generating client stubs from the service definitions. These stubs provide methods that correspond to the server-side implementations but are used to initiate remote procedure calls (RPCs) to the server.
>
> - **Stub Generation**: Stubs are generated from the `.proto` files and can be created in any language supported by gRPC, thanks to its language-agnostic service definitions.
> - **Remote Invocation**: These stubs handle the network communication, sending requests to and receiving responses from the gRPC server.



## [[gRPC Patterns]]
![[gRPC Patterns#gRPC Communication Patterns]]

## gRPC in [[Microservices Architecture Pattern|Microservices]]

gRPC is highly beneficial in [[Microservices Architecture Pattern|microservices]] environments due to its support for polyglot programming—allowing services in different languages to communicate seamlessly. This is facilitated by [[Protocol Buffers]], which provide a language-agnostic method to define interface contracts.

In a typical microservices setup, as shown in the diagram below, an API Gateway routes requests to services like a Shopping Aggregator, which acts as a gRPC Client. This aggregator then communicates with other microservices (acting as gRPC Servers), processes the data, and returns the aggregated result to the client.

![[Pasted image 20231030184125.png]]

> [!important]-
> Both the aggregator and other services may act as gRPC clients or servers depending on the interaction context. This dynamic **role swapping** enhances flexibility within the microservices ecosystem. 

## Pros/Cons of gRPC API

> [!success]- Pros
> - **High Performance**: Uses [[HTTP 2.0|HTTP/2]] for faster, more efficient communication.
> - **Efficient Data Transfer**: Binary [[Data Serialization|Serialization]] reduces latency and bandwidth usage.
> - **Real-time Communication**: Supports bidirectional streaming for immediate data exchange.
> - **Strong Typing**: [[Protocol Buffers]] enhance reliability and robustness.
> - **Multi-language Support**: Offers broad compatibility across different programming environments.

> [!danger]- Cons
> - **Complex Setup**: Involves a steeper learning curve due to its advanced features.
> - **Limited Readability**: Binary format complicates debugging compared to text-based formats like [[JSON]].
> - **Developing Ecosystem**: Fewer tools and community resources compared to more established APIs like [[REST API|REST]].
> - **Browser Compatibility**: Inconsistent support in [[Web|web]] browsers, potentially complicating client-side implementation.
> - **Network Configuration**: May encounter issues with traditional network setups like firewalls and proxies.

## Conclusion

gRPC offers a sophisticated, modern approach to building distributed applications and services, particularly where performance and efficiency are paramount. By leveraging the power of [[HTTP 2.0|HTTP/2]] and [[Protocol Buffers]], it provides a robust framework for high-speed service-to-service communication.

# References

[An Introduction to gRPC: Building Distributed Systems | Medium](https://semaphoreci.medium.com/an-introduction-to-grpc-building-distributed-systems-with-efficiency-and-scalability-in-mind-c13024e4b0d3) 

[Microservices communication using gRPC Protocol | Medium](https://medium.com/javarevisited/microservices-communication-using-grpc-protocol-dc3a2f8b648d)
