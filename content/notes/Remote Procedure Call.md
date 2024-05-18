---
created: 2024-05-13 12:37
aliases:
  - RPC
tags:
  - LearningIT
  - evergreen🌳
links:
---

link: [[gRPC API]]

# Remote Procedure Call (RPC)

## Overview

Remote Procedure Call (RPC) is a protocol that allows a program to request a service from another program located on a different computer within a network. It abstracts the complexities of the network details, providing a mechanism for making function calls between programs as if they were local to the same system.

_RPC follows the [[Client-Server Architecture Pattern|Client-Server Model]]_

## How It Works

![[Pasted image 20231030181709.png]]

RPC operates by providing a communication layer capable of transmitting procedure calls and data between processes on different computers. Here's a simplified flow:

1. **Client Stubs**: When the client application calls a function, the call is directed to a local stub procedure instead of the remote function. This stub is responsible for packing the function parameters into a message and sending it to the server.

2. **Communication**: The client's message is transmitted over the network to the server. The network details are abstracted away, so the developer doesn't need to handle the underlying network communication specifics.

3. **Server Stubs**: Upon receiving the message, the server stub unpacks the parameters and calls the local server procedure. The server then executes the function as if it was triggered locally.

4. **Response Handling**: After the server function completes execution, the results are packed into a message by the server stub and sent back to the client stub.

5. **Completion**: The client stub receives the response message, unpacks the results of the procedure call, and returns them to the calling procedure in the client program.

> [!info]-
> **Transparency and Simplicity**: RPC abstracts the complexities involved in the network communication, allowing developers to perform remote procedure calls as easily as local calls. This transparency simplifies the development of applications that operate over a network.

> [!example]-
> **Synchronous and Asynchronous Calls**: RPC can be designed to operate synchronously, where the client blocks until the server completes the procedure and sends a response, or asynchronously, where the client proceeds without waiting for the server's response.


