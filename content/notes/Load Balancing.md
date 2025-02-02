---
created: 2024-05-30 17:37
aliases:
  - Traffic Distribution
  - Load Distribution
  - Request Balancing
  - Traffic Management
  - Load Balancer
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Cloud Architecture]], [[Distributed Systems]]

# Load Balancing

## Diagram

![[Pasted image 20240602170339.png]]
## Overview

Load balancing is a technique used to distribute network or application traffic across multiple servers to ensure no single server becomes overwhelmed. It improves the availability and reliability of applications by distributing workloads more evenly, enhancing performance and preventing server overload.
## Key Concepts

> [!summary]
> 
> - **Distribution**: Evenly distributes incoming traffic among multiple servers.
> - **[[High Availability]]**: Ensures continuous operation by redirecting traffic to healthy servers if one fails.
> - **[[Scalability|Scalability]]**: Facilitates horizontal scaling by adding more servers to handle increased load.
> - **Health Monitoring**: Continuously checks the health of servers to route traffic only to those that are operational.

## Types of Load Balancers

> [!summary]
> 
> - **Hardware Load Balancers**: Physical devices that distribute traffic.
> - **Software Load Balancers**: Software applications that manage traffic distribution.
> - **Cloud Load Balancers**: Load balancing services provided by cloud providers, such as [[AWS Elastic Load Balancing]] (ELB) and [[Azure Load Balancer]].

## [[Load Balancing Algorithms]]

![[Load Balancing Algorithms#Diagram]]

![[Load Balancing Algorithms#Summary of Load Balancing Algorithms]]

## Related topics

Load balancing is integral to various architectural patterns and systems:

> [!summary]
> 
> - **[[Microservices Architecture Pattern]]**: Ensures efficient distribution of requests across multiple microservices instances.
> - **[[Distributed Systems]]**: Enhances the performance and reliability of distributed systems by balancing the load across multiple nodes.
> - **[[Event-driven Architecture Pattern]]**: Balances the load of event processing systems, ensuring timely handling of events.
> - **[[Fault Tolerance]]**: Supports fault tolerance by rerouting traffic away from failed servers to maintain service availability.
> - **Scalability**: Facilitates [[Horizontal Scaling]], allowing systems to handle increased traffic by adding more servers.

