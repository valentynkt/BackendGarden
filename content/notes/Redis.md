---
created: 2024-05-26 14:43
aliases:
  - Redis Database
  - Redis In-Memory Data Store
  - Redis Cache
tags:
  - LearningIT
  - seed🌱
links:
---
link: [[Message brokers]], [[Key-Value Databases]]

# Redis

## Overview

Redis (Remote Dictionary Server) is an open-source, in-memory data structure store that can be used as a database, cache, and message broker. Known for its high performance and low latency. It is widely used for building real-time applications due to its ability to handle millions of requests per second with sub-millisecond latency.

## Key Features


![[Redis Data Structures#Overview]]


> [!summary] **Persistence**
> 
> Redis offers two persistence options to balance durability and performance:
> 
> - **RDB (Redis Database)**: Snapshots the dataset at specified intervals.
> - **AOF (Append Only File)**: Logs every write operation for more durable persistence.


> [!summary] **High Availability and Scalability**
> 
> Redis ensures high availability and scalability through:
> 
> - **Replication**: [[Master-Slave Architecture Pattern|Master-Slave]] replication with automated failover.
> - **Sentinel**: Monitors master and slave instances, providing automatic failover.
> - **Cluster**: Distributes data across multiple nodes, ensuring horizontal scalability and fault tolerance.
> - ![[1_gszoEBW0lupbMDDGGgYOPA.webp]]


> [!summary] **Performance**
> 
> Redis provides extremely fast data access through:
> 
> - **In-Memory Storage**: Fast access and manipulation.
> - **Lua Scripting**: Atomic execution of complex operations.
> - **Pipelining**: Reduces latency by batching commands.


> [!summary] **Security**
> 
> Redis offers robust security features:
> 
> - **Authentication**: Requires clients to authenticate with a password.
> - **Encryption**: Supports TLS for encrypted connections.
> - **[[Access Control Lists]] (ACLs)**: Fine-grained access control to commands and data.

## ## Use Cases

> [!example] **Use Cases**
> 
> - **[[Caching]]**: Caching frequently accessed data to reduce load on primary databases and improve application performance.
> - **[[Session Management]]**: Storing user session data for web applications, providing fast and efficient session retrieval and updates.
> - **Real-Time Analytics**: Processing and analyzing real-time data streams, such as user activity tracking and financial transactions.
> - **[[Message brokers]]**: Implementing [[Redis-Backed Queue|message brokers using Redis]] lists or streams for reliable and scalable message passing.
> - **Leaderboards**: Managing real-time leaderboards using sorted sets to rank users or items by score.
![[0205d074-5f42-402b-b150-99027cb4fc38_800x1114.webp]]
## How It Works

### Basic Operations

1. **Connecting to Redis**: Clients connect to the Redis server using TCP/IP.
2. **Executing Commands**: Clients send commands to perform operations like `SET`, `GET`, `HSET`, `LPUSH`, `ZADD`, etc.
3. **Data Storage**: Data is stored in memory and can be persisted to disk using RDB or AOF.
4. **Replication and Clustering**: Redis can replicate data to slave nodes and distribute data across a cluster for high availability and scalability.

### Example Workflow

Consider a web application that uses Redis for session management:

1. **User Logs In**: The application stores the user's session data in Redis.
2. **Session Retrieval**: For each user request, the application retrieves the session data from Redis.
3. **Session Update**: Any updates to the session are written back to Redis.
4. **Session Expiry**: Sessions have a TTL (Time To Live) and are automatically removed when expired.

## Related Topics

> [!summary] **Related Topics**
> 
> - **[[Message Queues]]**: Redis can be used to implement message queues using its list data structure.
> - **[[Message Topics]]**: Redis Pub/Sub feature for real-time messaging.
> - **[[Caching]]**: Redis is widely used as a caching solution to improve application performance.
> - **[[Session Management]]**: Using Redis to store and manage user sessions for web applications.
> - **[[Distributed Systems]]**: Redis provides features like replication and clustering for building distributed systems.
> - **[[Redis Data Structures]]**: Detailed usage and examples of Redis data structures like strings, hashes, lists, sets, and sorted sets.


Redis is a powerful tool for building fast, scalable, and resilient applications. Its rich set of features and support for various data structures make it a versatile choice for a wide range of use cases. By leveraging Redis, developers can significantly enhance the performance and reliability of their applications.
## [[Redis-Backed Queue]]
![[Redis-Backed Queue#Diagram]]


# Refences

[Redis Sentinel — High Availability | Medium](https://medium.com/@amila922/redis-sentinel-high-availability-everything-you-need-to-know-from-dev-to-prod-complete-guide-deb198e70ea6)

[The 6 Most Impactful Ways Redis is Used in Production Systems](https://blog.bytebytego.com/p/the-6-most-impactful-ways-redis-is?utm_source=publication-search)