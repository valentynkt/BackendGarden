---
created: 2024-04-30 18:24
aliases:
  - NoSQL
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Database]]

# Non-Relational Databases

## Overview

![[../Files/Images/Pasted image 20240501144041.jpg]]

Non-relational databases, known as NoSQL databases, cater to diverse and large-scale data management needs that traditional relational databases (RDBMS) struggle with. These databases excel in scenarios requiring scalability, flexibility, and rapid iteration, making them ideal for big data applications and real-time web applications.

> [!abstract]
>  NoSQL databases utilize dynamic schemas for unstructured data, enable horizontal scalability through data distribution across clusters, and are specialized to handle various [[data models]] like document, key-value, graph, and wide-column stores.

## Content

> [!note]
> Non-relational databases are really helpful when there are a lot of unknowns about exactly what data you need to store, or when there is a large volume of data that might hold different attributes but that you still need to compare side-by-side.

### Types of Non-Relational Databases

![[../Files/Images/Pasted image 20240501145306.png]]

>[!important]
>
>- **[[Document-Oriented Databases]]**: Store data in JSON, BSON, or [[XML]] documents, exemplified by MongoDB and CouchDB. They are schema-agnostic, enhancing flexibility for applications like content management and e-commerce.
>- **[[Key-Value Databases]]**: Such as Redis and DynamoDB, manage data as key-value pairs, optimized for high-speed retrieval necessary for scenarios like caching and session management.
>- **[[Wide-Column Databases]]**: Like Cassandra and HBase, these databases use a columnar data structure that allows for efficient data aggregation and scalability.
>- **[[Graph Databases]]**: Employ nodes, edges, and properties to manage and analyze connected data, useful in applications like social networks and recommendation engines.

### Core Features and Architecture

**Scalability**: Designed to scale out, NoSQL databases distribute data across multiple servers as opposed to scaling up on a single server like in traditional relational databases.

**Performance**: These databases handle large data volumes more efficiently, providing high performance for diverse data types and structures.

**Data Model Flexibility**: The lack of a fixed schema allows for easy modifications and adaptations to data structures on-the-fly, supporting agile development practice

### Dive Deeper

**[[CAP Theorem]]**: Details the trade-offs involved between consistency, availability, and partition tolerance in distributed systems.

**[[Transactions in NoSQL]]**: Reviews different approaches to transaction management that diverge from traditional ACID models, suitable for distributed database environments

> [!NOTE]- [[Relation vs Non-Relational Databases]]
> ![[Relation vs Non-Relational Databases#Content]]
> 

# References

https://builtin.com/data-science/non-relational-database
