---
created: 2024-05-09 20:27
aliases:
  - Representational State Transfer
  - REST
  - RESTful
  - RESTful APIs
tags:
  - LearningIT
  - evergreen🌳
links:
---

link: [[API Architectures]]

# REST API

## Diagram

![[f870b253-d5f5-43bf-a6ab-667ee8ed6f8b_1280x1664.webp]]

## Overview

REST, or Representational State Transfer, is an architectural style that defines a set of constraints for creating web services. It is one of the most popular approaches to developing [[API]] (Application Programming Interfaces) that facilitate communication between client and server applications over the internet. RESTful APIs are designed to be stateless, leveraging standard [[HTTP]] methods and adhering to [[Client-Server Architecture Pattern|Client-Server]] architecture.

## Principles of REST

REST is built on six foundational principles which ensure that APIs are scalable, reliable, and fast:

> [!info]-
> - **Uniform Interface**: The interface between client and server remains consistent across different parts of an application, simplifying and decoupling the architecture.
> - **Stateless**: Each request from the client to the server must contain all the information the server needs to understand the request. The server does not store any state about the client [[Session Management|session]].
> - **Cacheable**: Responses must define themselves as cacheable or not, to prevent clients from reusing stale or inappropriate data.
> - **Client-Server Architecture**: Separating the user interface concerns from the data storage concerns improves the portability of the user interface across multiple platforms and scalability by simplifying the server components.
> - **Layered System**: The client cannot ordinarily tell whether it is connected directly to the end server or to an intermediary along the way.
> - **Code on Demand (optional)**: Servers can temporarily extend or customize the functionality of a client by transferring executable code.

## Pros/Cons 


> [!success]- Pros
> - **Simplicity and Ease of Use**: REST uses standard [[HTTP Methods]], making it easy to implement and understand.
> - **Flexibility**: REST allows data to be transmitted in multiple formats such as [[JSON]], [[XML]], or plain text, providing flexibility in how data is consumed and displayed.
> - **Scalability**: The stateless nature of REST facilitates easier scaling of applications as no server-side information is stored between requests.
> - **Performance**: Efficient [[HTTP Methods]] and stateless communication result in faster interactions suitable for the Internet.
> - **Cacheability**: Responses can be cached to improve performance, reducing the need to repeatedly send requests for the same resources.


> [!danger]- Cons
> - **Statelessness**: While it increases scalability, statelessness means that REST cannot use server memory to store anything about the client’s [[Session Management|session]]. This can be a limitation for applications requiring complex transactions.
> - **Over-fetching and Under-fetching**: REST might require multiple round trips to the server to gather complete data or may fetch more data than needed, impacting performance and efficiency.
> - **Security**: RESTful APIs must carefully implement security measures, as the stateless nature requires that each call be authenticated and authorized independently.
> - **Limited Methods**: The standard methods in REST (GET, POST, PUT, DELETE) might limit the actions that can be performed via the API, potentially complicating implementations that require actions outside these norms.

## Common Use Cases

REST APIs are extensively used in many applications and services:

> [!example]-
> - **Web Services Integration**: Allowing different systems to communicate and exchange data seamlessly.
> - **Mobile Applications**: Serving data to mobile apps, which can consume APIs to display and interact with data dynamically.
> - **Social Networking Services**: Many social networks expose their functionalities through RESTful APIs to enable third-party apps and services to integrate smoothly.
> - **Cloud Services**: REST is widely used by cloud service providers to allow clients to interact with their services programmatically.

## Warnings and Advice 

> [!warning]- 
> - **Over-fetching and Under-fetching**: Traditional REST APIs can lead to over-fetching where unnecessary data is returned, or under-fetching which requires multiple requests for complete data. Consider using techniques like field selection to mitigate these issues. 
> - **Versioning**: Always version your APIs to avoid breaking changes and maintain backward compatibility. This helps in evolving the [[API]] without affecting existing consumers. 
> - **Error Handling**: Implement consistent and informative error handling. Use standard [[HTTP Status Codes]] and provide clear error messages to help clients understand what went wrong.
> - Managing Long Running REST Processes:
>	- **[[HTTP Polling]]**: Client periodically checks server for status.
>	- **Message Queues**: Decouple processing from response.
>	- [[WebSockets]]: Real-time, bidirectional communication.

## Conclusion

REST APIs are a cornerstone of modern [[Web]] development, enabling flexible, scalable, and efficient communication between distributed systems. Their adherence to key architectural principles facilitates the development of a wide range of applications, from simple web apps to complex distributed systems.


# Reference:

- [REST Architectural Constraints](https://restfulapi.net/rest-architectural-constraints/)
- [REST APIs must be hypertext-driven » Untangled](https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven)
- [REST Arch Style]( https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.html)

