---
created: 2024-05-30 16:59
aliases:
  - Distributed Computing
  - Decentralized Systems
  - Networked Systems
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Architectural Patterns]]

# Distributed Systems

## Overview

A distributed system is a collection of independent computers that appear to users as a single coherent system. These systems work together to achieve a common goal and are connected by a network. Distributed systems are designed to share resources, data, and tasks across multiple nodes, enhancing scalability, reliability, and performance.

## Key Concepts

Distributed systems encompass several fundamental concepts that enable their functionality and efficiency:

> [!important]
> 
> - **Transparency**: The system should hide the complexity of distribution from users and applications, making it appear as a single system.
> - **[[Scalability|Scalability]]**: The ability to handle increased load by adding more nodes to the system.
> - **[[Fault Tolerance]]**: The system's ability to continue functioning even if some components fail.
> - **Concurrency**: Multiple components can process tasks simultaneously, improving performance.
> - **Consistency**: Ensuring data consistency across distributed components, often achieved through consensus algorithms and data replication.

## Components

Distributed systems consist of several key components that interact to provide a unified service:

> [!summary]
> 
> - **Nodes**: Independent computers that work together as part of the distributed system.
> - **Network**: The communication infrastructure connecting the nodes.
> - **Middleware**: Software that provides common services and capabilities, such as messaging, data storage, and security.
> - **Services**: Applications or functionalities provided by the distributed system.

## Types of Distributed Systems

Distributed systems can be categorized based on their architecture and the way they manage tasks and data:

> [!summary]
> 
> - **[[Client-Server Architecture Pattern|Client-Server]] Systems**: Clients request services from servers, which process the requests and return responses.
> - **[[Peer-to-Peer Architecture Pattern|Peer-to-Peer]] Systems**: Each node can act as both a client and a server, sharing resources and tasks without a central coordinator.
> - **[[Cloud Network]] Computing**: Provides on-demand access to computing resources over the internet, often involving distributed data centers.
> - **Cluster Computing**: A group of tightly-coupled computers working together, often used for high-performance computing tasks.

## Key Principles

Several principles guide the design and implementation of distributed systems:

> [!summary]
> 
> - **Transparency**: The system should hide the complexity of distribution from users and applications, making it appear as a single system.
> - **Scalability**: The system should efficiently handle growth in the number of nodes or workload.
> - **Fault Tolerance**: The system should continue to operate correctly even in the presence of faults.
> - **Consistency**: The system should ensure that all nodes see the same data at the same time.
> - **Security**: The system should protect data and resources from unauthorized access and tampering.

## Use Cases

Distributed systems are used in various applications where scalability, reliability, and performance are crucial:

> [!summary]
> 
> - **Data Centers**: Large-scale data centers for cloud providers like AWS, Google Cloud, and Azure.
> - **Big Data Processing**: Systems like Hadoop and Spark for processing large datasets.
> - **[[Content Delivery Networks|Content Delivery Networks (CDNs)]]**: Distributing content to users globally for faster access.
> - **[[Internet Of Things|IoT Systems]]**: Managing and processing data from numerous interconnected devices.
> - **Financial Services**: Ensuring high availability and consistency for transactions and data.

## Pros/Cons

> [!success] Pros
> 
> - **Scalability**: Easily handle increased workloads by adding more nodes.
> - **Reliability**: Continue operating correctly even if some components fail.
> - **Performance**: Improved performance through parallel processing and resource sharing.
> - **Flexibility**: Ability to adapt to changing workloads and requirements.

> [!danger] Cons
> 
> - **Complexity**: Designing and managing a distributed system can be complex.
> - **Consistency**: Ensuring data consistency across distributed components is challenging.
> - **Security**: Protecting distributed data and resources from unauthorized access.
> - **Latency**: Communication delays between nodes can affect performance.

## Related Topics

> [!summary]
> 
> - **[[Microservices Architecture Pattern]]**: Distributed systems often use microservices to decompose applications into smaller, independent services. 
> - **[[Actor Architecture Pattern|Actor Model]]**: The Actor Model is well-suited for distributed systems as it encapsulates state and behavior within actors, which communicate asynchronously. This model naturally supports distribution across nodes, enabling scalability and fault tolerance.
> - **[[Event-driven Architecture Pattern]]**: Events can be used to trigger actions and state changes across distributed systems, enabling real-time processing and responsiveness.
> - **[[Message-driven Architecture Pattern]]**: Messaging systems facilitate asynchronous communication between components in a distributed system, enhancing decoupling and scalability.
> - **[[CAP Theorem]]**: A principle that highlights the trade-offs between Consistency, Availability, and Partition Tolerance in distributed data stores.
> - **[[Consensus Algorithms]]**: Protocols like Paxos or Raft are essential for achieving agreement on a single data value among distributed processes, ensuring consistency.
> - **[[Load Balancing]]**: Distributes network traffic across multiple servers to ensure no single server becomes overwhelmed, crucial for maintaining performance in distributed systems.
> - **[[Fault Tolerance]]**: Techniques to ensure a system continues to operate properly in the event of the failure of some of its components, critical for reliability.
> - **[[Data Replication]]**: Storing copies of data on multiple machines to ensure availability and reliability, a common practice in distributed databases.

## Summary

> [!summary]
> 
> Distributed systems enable multiple independent computers to work together seamlessly, sharing resources and tasks to provide a unified and efficient system. They offer significant benefits in terms of scalability, reliability, and performance but also present challenges in terms of complexity, consistency, and security. Understanding the key concepts, components, principles, and use cases of distributed systems is essential for designing and managing effective distributed architectures.
