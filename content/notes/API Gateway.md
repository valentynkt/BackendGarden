---
created: 2024-04-26 17:59
aliases: 
- Microservice Gateway 
- Unified Service Entry Point - Service Facade
links: "[[Microservices Architecture Pattern|Microservice Architecture]]"
tags:
  - LearningIT
  - seed🌱
---
link: [[Microservices Architecture Pattern|Microservice Architecture]]

# API Gateway

## Diagram

![[../Files/Images/Pasted image 20240426180211.png]]

## Overview

In a [[Microservices Architecture Pattern|Microservices]] architecture, an API Gateway serves as a central entry point for clients to access various [[Microservices Architecture Pattern|Microservices]]. It acts as a [[Facade Pattern|Facade]], providing a unified interface for clients to interact with the system. The API Gateway handles client requests, routing them to the appropriate [[Microservices Architecture Pattern|Microservices]], and may also perform additional functionalities such as authentication, authorization, rate limiting, and request/response transformation.

> [!abstract] 
> An API Gateway acts as a central entry point for clients to access [[Microservices Architecture Pattern|Microservices]], providing a unified interface and performing additional functionalities such as authentication and routing.

## Content

### Key Concepts

- **Routing**: The API Gateway routes incoming requests from clients to the appropriate [[Microservices Architecture Pattern|Microservices]] based on predefined rules or configurations.
- **Authentication and Authorization**: It authenticates clients and authorizes their access to specific [[Microservices Architecture Pattern|Microservices]] or resources, ensuring security and access control.
- **Rate Limiting**: The API Gateway may enforce rate limits on incoming requests to prevent abuse or overload of [[Microservices Architecture Pattern|Microservices]].
- **Request/Response Transformation**: It can transform requests or responses to/from [[Microservices Architecture Pattern|Microservices]] to adapt them to client requirements or to maintain compatibility between [[Microservices Architecture Pattern|Microservices]] versions.


### Implementation Overview

Implementing an API Gateway involves integrating it into the [[Microservices Architecture Pattern|Microservices]] architecture and configuring it to handle client requests effectively. It requires defining routing rules, configuring security policies for authentication and authorization, setting up rate limiting mechanisms, and implementing request/response transformation logic. There are ready API Gateway solution that have implemented features.


> [!important] API Gateway Solutions
> - Azure:  [[Azure API Management]], [[Azure Front Door]], [[Azure Application Gateway]]
> - Aws: [[AWS API Gateway]]
> - Kong
> - Netflix Zuul





