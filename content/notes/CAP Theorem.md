---
created: 2024-05-01 16:40
aliases: 
links: 
tags:
  - LearningIT
  - evergreen🌳
---
link: [[Database]]

# CAP Theorem

## Diagram

![[../Files/Images/Pasted image 20240501164239.png]]


## Overview

The CAP theorem, also known as Brewer's theorem, states that a distributed system can only provide two out of the following three properties simultaneously: **Consistency**, **Availability**, and **Partition Tolerance**. This theorem highlights the trade-offs involved in designing distributed systems and underscores the importance of understanding the limitations and capabilities of such systems.

## Key Concepts

> [!important] **Key Concepts**
> 
> - **Consistency**: Ensures that all nodes in a distributed system reflect the same data simultaneously. After a write operation, all subsequent reads should return the most recent write across all nodes.
>     
> - **Availability**: Ensures that every request receives a response, regardless of the state of any individual node in the system. The system remains operational and accessible even during node failures.
>     
> - **Partition Tolerance**: Ensures that the system continues to operate despite network partitions, which are breaks or delays in communication between nodes. The system can sustain operations even if some nodes cannot communicate with others.
>     

## Proof of the CAP Theorem

![[../Files/Images/ZahaXXdXzS.png]]

Consider a distributed system with two nodes and a network partition separating them. Suppose an end-user performs a write request, followed by a read request, with each request being processed by a different node. The system faces two choices:

- **Sacrifice Availability**: One of the requests fails, breaking the system's availability.
- **Sacrifice Consistency**: Both requests succeed, but the read request returns stale data, breaking the system's consistency.

Given the network partition, the system cannot process both requests successfully while ensuring that the read returns the latest written value, thus demonstrating the CAP theorem.

## CAP Theorem in NoSQL Databases

NoSQL databases are well-suited for distributed networks due to their ability to scale horizontally across multiple nodes. Understanding the CAP theorem helps in choosing the right NoSQL database based on the trade-offs between consistency, availability, and partition tolerance. NoSQL databases can be classified based on the two CAP properties they support:

> [!summary] **CAP Properties in NoSQL Databases**
> 
> - **CA (Consistency and Availability)**: CA databases provide consistency and availability but cannot tolerate partitions. They are less practical for distributed systems where partitions are inevitable.
> - **CP (Consistency and Partition Tolerance)**: CP databases ensure consistency and partition tolerance but may sacrifice availability during partitions. An example is MongoDB, which turns off inconsistent nodes until the partition is resolved.
> - **AP (Availability and Partition Tolerance)**: AP databases ensure availability and partition tolerance but may not provide immediate consistency. An example is Apache Cassandra, which allows eventual consistency after partitions are resolved.

## ## Examples of Databases

> [!note] **CA Databases**
> 
> **CA** databases support consistency and availability but lack partition tolerance. An example is PostgreSQL with replication enabled, suitable for systems where partitions are rare or can be managed. 
> **Examples**: PostgreSQL, MySQL (with replication).

> [!note] **CP Databases**
> 
> **CP** databases support consistency and partition tolerance at the cost of availability. MongoDB, a NoSQL DBMS, is a prominent example, ideal for applications requiring strong consistency across distributed nodes. 
> **Examples**: MongoDB, HBase.

> [!note] **AP Databases**
> 
> **AP** databases support availability and partition tolerance at the expense of immediate consistency. Apache Cassandra exemplifies this category, ensuring that all nodes remain available and eventually consistent after partitions. 
> **Examples**: Apache Cassandra, Couchbase.
## Summary

The CAP theorem highlights the inherent trade-offs in distributed system design, emphasizing the need to balance consistency, availability, and partition tolerance. Understanding these trade-offs is crucial for selecting the appropriate database architecture and ensuring that the system meets its specific requirements.
# References

[System design fundamentals: What is the CAP theorem?](https://www.educative.io/blog/what-is-cap-theorem)


