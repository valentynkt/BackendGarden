---
created: 2024-05-06 16:16
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Web]]

# HTTP (Hypertext Transfer Protocol)

![[Pasted image 20240506220938.png]]

## Overview

HTTP, or Hypertext Transfer Protocol, is an application protocol widely used for distributed, collaborative, hypermedia information systems. It serves as the foundation for communication on the World Wide Web, enabling the exchange of data between clients (such as web browsers) and servers.

HTTP operates within the [[Client-Server Architecture Pattern|Client-Server Model]], where clients initiate requests for resources and servers respond with the requested data. It is designed as a stateless protocol, meaning that each request-response cycle is independent and does not rely on past interactions.

## Key Features and Functions

- **Request-Response Model**: Clients send requests to servers, specifying the desired action (e.g., GET to retrieve data, POST to submit data).
- **URI (Uniform Resource Identifier)**: Resources on the web are identified by unique URIs, allowing clients to locate and access specific resources.
- **[[HTTP Methods]]**: HTTP defines various methods (e.g., GET, POST, PUT, DELETE) to specify the desired action to be performed on a resource.
- **[[HTTP Status Codes]]**: Servers respond to requests with status codes, indicating the outcome of the request (e.g., 200 for success, 404 for not found, 500 for server error).
- **Header Fields**: Requests and responses contain header fields, providing additional information about the request or response (e.g., content type, content length, caching directives).
- **Statelessness**: Each request-response cycle is independent, with no inherent memory of past interactions. This simplifies implementation and improves scalability.

## How HTTP Works

> [!question]- How HTTP Works?
> 1. **Client Sends Request**: The client (e.g., web browser) initiates a request to a server by sending an HTTP request message. This message includes the desired action (HTTP method), URI of the resource, and additional metadata in the form of header fields.
>     
> 2. **Server Processes Request**: Upon receiving the request, the server processes the request message, interprets the requested action, and retrieves the specified resource. This may involve querying databases, executing scripts, or accessing files.
>     
> 3. **Server Sends Response**: Once the server has processed the request, it constructs an HTTP response message containing the requested resource and additional metadata. This message is then sent back to the client.
>     
> 4. **Client Receives Response**: The client receives the HTTP response message from the server. It parses the message to extract the requested resource and any accompanying metadata.
>     
> 5. **Completion of Request-Response Cycle**: With the client receiving the response, the request-response cycle is completed. The client can then render the received resource (e.g., display a web page) or perform further actions based on the response data.

## [[HTTP Versions]]
![[HTTP Versions#HTTP Versions]]
## Conclusion

HTTP is a fundamental protocol that underpins communication on the World Wide Web. Its request-response model, along with its various methods, status codes, and header fields, enables the exchange of data between clients and servers in a structured and efficient manner. Understanding how HTTP works is essential for anyone involved in web development or network communication.
