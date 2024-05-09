---
created: 2024-05-03 19:18
aliases:
  - Application Programming Interface
tags:
  - LearningIT
  - seed🌱
  - "#moc"
links:
---

link:

# API (Application Programming Interface)

## Overview

APIs, or Application Programming Interfaces, establish guidelines for how software programs interact, crucial for exchanging data and functions across different systems. These interfaces are vital for creating interconnected experiences on web, mobile, and cloud platforms, forming a fundamental part of modern software development.

> [!important]
> The approach known as [[API-First]] emphasizes designing APIs at the beginning of a project. This strategy prioritizes API development to enhance integration and scalability of systems, facilitating a streamlined and efficient development process.

## Introduction

APIs simplify complex software interactions by defining accessible methods and data formats for applications. This abstraction allows developers to use predefined functionalities to enhance application interoperability across various platforms and devices, fostering a more integrated digital environment.

> [!question]- **How Do APIs Work?**
> 
> Similar to a restaurant's service workflow, where the waiter (API) communicates your order (request) to the kitchen (system) to prepare your meal (data/response), APIs operate on a request-response model. They help streamline processes by ensuring that applications can request and receive data efficiently and securely.

![[Pasted image 20240504195640.png]]

## Types and Architectures of APIs

APIs can be broadly categorized by accessibility or by their architectural design, each suited to different use cases.

> [!summary] **API Accessibility**
> 
> - **Private APIs**: These are internally used by organizations to enhance their technological frameworks and streamline internal functionalities.
> - **Public APIs**: Open to external developers, these APIs widen an application's reach and foster external innovation.
> - **Partner APIs**: Shared exclusively with business allies, these APIs facilitate specific integrative functions between allied entities.
>
> ![[Pasted image 20231019201249.png]]



API architectural styles vary, each with its specifications and best use cases:

> [!summary] **[[API Architectures]]**
> 
> - [[REST API]]: Known for its simplicity and statelessness, REST uses standard HTTP methods and is ideal for web services.
> - [[SOAP API]]: This protocol uses XML for sending structured data and is preferred for its high security in enterprise applications.
> - [[GraphQL API]]: Enables precise data fetching in one go, reducing the need for multiple queries and is excellent for dynamic web applications.
> - [[Webhooks API]]: Facilitates real-time communication via event-based triggers, automatically pushing data as events occur.
> - [[gRPC API]]: Developed by Google, gRPC supports inter-process communication, making it a robust choice for microservices architectures.

Understanding the diversity of API types and their architectures not only helps in selecting the most appropriate ones for your projects but also optimizes the interaction and functionality of applications across different platforms.


> [!summary]- Real-Time Communication
> - [[Webhooks API]] and [[WebSockets]]: Understand mechanisms for real-time data exchange between clients and servers, crucial for applications requiring live updates.
> - [[Real-Time Notification Architectures]]: Explore various techniques for implementing instant notifications in web applications.


> [!summary]- [[API Security]]
> - [[Authentication and Authorization]]: Essential concepts that help in verifying user identities and ensuring they have the correct permissions to access the APIs.
> - [[API authentication]]
> - [[Json Web Tokens|JSON Web Tokens (JWT)]]: A compact, URL-safe means of representing claims to be transferred between two parties, helping secure data transmissions.
> - [[OAuth 2.0]], [[OAuth 2.0 Flows]], [[OAuth PKCE]], and [[OpenID Connect]]: Dive into security protocols that protect APIs and manage user authentication and authorization effectively.


# References

https://www.postman.com/what-is-an-api/
https://blog.bytebytego.com/p/api-design?utm_source=publication-search