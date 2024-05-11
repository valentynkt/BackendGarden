Date and Time: <u> 2023-10-19 20:17 </u>
Status: #LearningIT
Tags: [[API]], [[Microservices]]

# gRPC API

**gRpc is [[API]]-Oriented**
Google Remote Procedure Calls(gRPC), an open-source framework, facilitates the development of high-performance, scalable, and efficient distributed systems. Developed by Google in 2015, gRPC efficiently connects systems, written in different languages, using a pluggable architecture that supports load balancing, tracing, health checking, and authentication.

## Intro
gRPC is widely used for communication between internal [[Microservices Architecture Pattern|Microservices]] majorly due to its high performance and its polyglot nature.

gRPC uses [[HTTP 2.0|HTTP/2]] as its transfer protocol and hence it inherits the benefits like binary framing from [[HTTP 2.0|HTTP/2]]. [[HTTP 2.0|HTTP/2]] lightweight to transport, and safer to decode compared to other text-based protocols. Due to its binary nature, HTTP/2 forms a good combination with the [[Protocol Buffers|Protobuf]] format.

To understand gRPC, we must first understand [[#RPC]]

## RPC
RPC follows the [[Client-Server Architecture Pattern|Client-Server Model]], where the requesting program acts as the client and the service-providing program operates as the server.

The process flow of a remote procedure call request consists of the following steps:
``` ad-important
- First, the client stub is invoked by the client.
- Next, the client stub performs a system call to send a message to the server and includes the necessary parameters in the message.
- Afterward, the message is transmitted from the client to the server using the client’s operating system.
- Upon receipt, the server’s operating system delivers the message to the server stub.
- The server stub then extracts the parameters from the message.
- Finally, the server stub invokes the server procedure to process the request.
```
![[Pasted image 20231030181709.png]]
## gRPC flow
The protocol buffer serves as a conduit for structured data exchange between systems.

When a client makes a request to a server using a stub, which acts as a client-side representation of the server-side service, the request is transmitted as a serialized protocol buffer message, containing the necessary data for the request.

On the server side, the message is then deserialized, and the relevant service method is invoked to process the request. The server subsequently sends the response back to the client as another serialized protocol buffer message.
![[Pasted image 20231030183337.png]]


gRPC also uses [[HTTP 2.0|HTTP/2]] as its transport protocol. [[HTTP 2.0|HTTP/2]] provides a way for a client and server to communicate through a single [[TCP]] connection. This connection can contain multiple streams of bytes flowing bidirectionally. In the context of gRPC, a stream in HTTP/2 maps to one RPC call. When data is passed between the client and server, it is divided into multiple frames, with each frame assigned a stream ID. This allows multiple messages to be transmitted over a single connection and enables message multiplexing.
![[Pasted image 20231030182830.png]]


## Components of gRPC

There are 3 components as follows

``` ad-important
1. Service Definition
2. gRPC Server
3. gRPC Client
```
![[Pasted image 20231030183337.png]]
### Service Definition
The first step of building a gRPC service is to create the service interface definition with the methods that are exposed by that service along with input parameters and return types.

The service definition is specified in the _ProductInfo.proto_ file, which is used by both the server and client sides to generate the code and this serves as the [[API]] contract between them.

These proto files are generated on the gRPC server and used in the client code irrespective of the language.

### gRPC Server
With the service definition file, the source code can be generated using the [[Protocol Buffers]] compiler protoc. Protoc is supported in many languages.

With the gRPC plug-in for protocol buffers, you can generate gRPC server-side as well as the regular protocol buffer code for populating, serializing, and retrieving your message types.

On the server side, the server implements that service definition and runs a gRPC server to handle client calls.

### gRPC Client
On the client side, we generate the client-side stub using the service definition. The client stub provides the same methods as the server and it converts them to remote function invocation network calls that go to the server side. Since gRPC service definitions are language-agnostic, client stubs can be created in any language.
## gRPC [[Microservices]]

One of the biggest advantages of [[Microservices Architecture Pattern|Microservices]] is the ability to use different technologies for each independent service i.e polyglot. Each [[Microservices Architecture Pattern|Microservices]] agrees on [[API]] to exchange data, data format, error patterns, load balancing, etc. Since gRPC allows for describing a contract in a binary format, it can be used efficiently for [[Microservices Architecture Pattern|Microservices]] communication independent of the languages.
![[Pasted image 20231030184125.png]]

In the above diagram, a [[Microservices Architecture Pattern|Microservices]] architecture is shown. The request from the client (web or mobile) reaches the [[API]] Gateway and then goes to the aggregator service (gRPC Client)

The Shopping Aggregator microservice calls the other [[Microservices Architecture Pattern|Microservices]] internally and aggregates the data to send to the front end. As you can see, the communication between aggregators and other services happens through the gRPC protocol.

In a real-world scenario, [[Microservices Architecture Pattern|Microservices]] will talk to each other a lot to aggregate the data and send it to the client. If we use a normal [[REST API]] it will tend to be slower and the client will experience more latency. If we use gRPC between [[Microservices Architecture Pattern|Microservices]], it will be much faster and have low latency for the client.
 
``` ad-important
gRPC Client is the aggretor which call other [[Microservices Architecture Pattern|microservices]] which will be gRPC Server. Because of using [[Protocol Buffers]] we can have microservices using different languages which will support proto. The data between gRPC Client and Server will be send in language agnostic format proto. We can also have another pattern when not only Aggregator will be the gRPC Client but all Microservices can make call to another microservice and according to context be a gRPC Client
```

## gRPC Patterns 

``` ad-important
gRPC supports four communication patterns:
- **simple RPC**
- **server-streaming RPC** 
- **client-streaming RPC**
- **bidirectional RPC** 
```
Each communication pattern addresses unique practical problems.

### Simple RPC
This is the simplest communication pattern by gRPC. The client sends a single message to the server and receives a single message. As shown in the diagram below, only one binary message is going in the stream on both request and response.
![[Pasted image 20231031151232.png]]
### Server-Streaming RPC
In server-streaming RPC, once the client sends a message to the server, the server sends back a sequence of responses. This sequence of response messages is sent inside the same HTTP stream initiated by the client.

As shown in the diagram below, the server waits until it receives the message from the client and sends multiple response messages as framed messages. The server concludes the stream by sending the trailing metadata with the call status details.
![[Pasted image 20231031151353.png]]
### Client-Streaming RPC
In this pattern, the client sends multiple messages to the server and the server sends only one message in return. The diagram below shows how multiple messages flow through the stream. This stream can last until the end of RPC.

![[Pasted image 20231031151603.png]]
### Bidirectional Streaming RPC
In bi-directional streaming RPC, both the client and server send a stream of messages to each other. The client sets up the HTTP stream by sending header frames. Once the connection is established, both the client and server can send messages simultaneously without waiting for the other to finish.
![[Pasted image 20231031151741.png]]

## gRPC Use Cases

gRPC can be used for the following use cases:
``` ad-important

- **Microservices**: gRPC is designed for low latency and high throughput communication. As discussed above, it works very well for microservices where efficiency and latency are critical.
- **Point-to-point real-time communication**: gRPC has excellent support for bi-directional streaming. gRPC services can push messages in real-time without polling.
- **Polyglot environments**: gRPC tooling supports all popular development languages, making gRPC a good choice for multi-language environments.
- **Low-power low-bandwidth networks**: gRPC messages are serialized with Protobuf, a lightweight message format. A gRPC message is always smaller than an equivalent JSON message.
- **Inter-process communication (IPC)**: IPC transports such as Unix domain sockets and named pipes can be used with gRPC to communicate between apps on the same machine.
```

## Pros/Cons
**Pros:**
``` ad-success
- Lightweight messages
- High performance
- Built-in code generation
- Multiple language support
- Different Communication Patterns
```

**Cons:**
``` ad-error
- Limited Browser Support
- Non-human Readable Format
- No Edge Caching
- Steeper Learning Curve
```
## gRPC vs [[REST API]]

As gRPC heavily uses [[HTTP 2.0|HTTP/2]], it is impossible to call a gRPC service from a web browser directly. Modern browsers do not provide the control needed over web requests to support a gRPC client. Hence, a proxy layer and gRPC-web are required to perform conversions between [[HTTP 1.1|HTTP/1.1]] and [[HTTP 2.0|HTTP/2]].

So [[REST API|REST]] APIs are still well suited for client-server communication and gRPC is now mainly used for server-to-server communication between [[Microservices Architecture Pattern|Microservices]]

![[Pasted image 20231031153409.png]]
# Reference:
https://semaphoreci.medium.com/an-introduction-to-grpc-building-distributed-systems-with-efficiency-and-scalability-in-mind-c13024e4b0d3
https://medium.com/javarevisited/microservices-communication-using-grpc-protocol-dc3a2f8b648d


 