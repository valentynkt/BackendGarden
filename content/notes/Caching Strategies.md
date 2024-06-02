---
created: 2024-06-01 15:58
aliases:
  - Cache Write Strategies
  - Cache Read Strategies
  - Caching Methods
  - Data Caching Techniques
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Caching]]

# Caching Strategies

## Diagram
![[3d4f861a-82b2-4b8f-b9c7-d926f079a108_2163x3153.webp]]

## Overview

Caching strategies define how and when data is written to and read from the cache. Choosing the right caching strategy can greatly enhance the performance and efficiency of an application by minimizing latency and reducing load on the primary data source.

## Summary of Caching Strategies

> [!summary]
> 
> - **Write-Through**: Writes data to both the cache and primary storage simultaneously.
> - **Write-Back**: Writes data only to the cache initially and to the primary storage later.
> - **Write-Around**: Writes data directly to the primary storage, bypassing the cache.
> - **Read-Through**: Reads data from the cache first; if not available, fetches from the primary storage and then caches it.
> - **Cache-Aside**: The application is responsible for managing reads and writes to the cache and primary storage.

## Details of Caching Strategies

### Write-Through

Write-through caching writes data to both the cache and the primary storage simultaneously.

> [!success] Pros
> 
> - **Data Consistency**: Ensures data in the cache and primary storage is always consistent.
> - **Simple Implementation**: Easy to implement and manage.

> [!danger] Cons
> 
> - **Write Latency**: Slower write operations due to simultaneous writes to both cache and storage.
> - **Resource Intensive**: Requires more resources since every write operation involves both cache and primary storage.

### Write-Back

Write-back caching writes data only to the cache initially and to the primary storage at a later time.

> [!success] Pros
> 
> - **Fast Write Operations**: Write operations are faster since they only involve the cache.
> - **Reduced Load on Storage**: Primary storage experiences less load, improving overall system performance.

> [!danger] Cons
> 
> - **Data Loss Risk**: Risk of data loss if the cache fails before data is written to the primary storage.
> - **Complex Implementation**: More complex to implement due to the need for mechanisms to write data back to primary storage.

### Write-Around

Write-around caching writes data directly to the primary storage, bypassing the cache. Data is read from the cache only if it exists there.

> [!success] Pros
> 
> - **Reduced Cache Eviction**: Prevents frequent eviction of cache data that is not often read.
> - **Efficient for Read-Heavy Workloads**: Ideal for systems with infrequent writes and frequent reads.

> [!danger] Cons
> 
> - **Cache Miss Penalty**: Higher read latency for data not in the cache since it bypasses the cache on write.
> - **Data Staleness**: Potential for stale data if the cache is not frequently updated.

### Read-Through

Read-through caching places the cache between the client and the primary storage. Data is read from the cache if available; otherwise, it is fetched from the primary storage and then cached.

> [!success] Pros
> 
> - **Transparent to Client**: Simplifies client-side implementation as caching is managed transparently.
> - **Improved Read Performance**: Frequent read requests are served faster from the cache.

> [!danger] Cons
> 
> - **Write Complexity**: Requires careful management of cache updates on writes.
> - **Cache Management Overhead**: Additional overhead to keep the cache updated with fresh data.

### Cache-Aside

In cache-aside (lazy loading), the application is responsible for reading from and writing to the cache and the primary storage.

> [!success] Pros
> 
> - **Fine-Grained Control**: Application has full control over caching logic and strategies.
> - **Efficiency**: Reduces unnecessary data caching, improving cache efficiency.

> [!danger] Cons
> 
> - **Complex Implementation**: More complex for developers to implement and maintain.
> - **Potential for Stale Data**: Risk of stale data if the application does not properly manage cache invalidation.


