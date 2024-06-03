---
created: 2024-05-29 17:42
aliases: 
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Redis]]

# Redis Data Structures

Redis supports a variety of data structures, each suited for different use cases. Here are the main data structures supported by Redis, along with examples for each.

## Overview

> [!summary] **Data Structures**
> 
> - **Strings**: The simplest type of value, can hold any type of data including binary.
> - **Hashes**: Ideal for storing objects and user profiles.
> - **Lists**: Ordered collections of strings, useful for queues.
> - **Sets**: Unordered collections of unique strings, ideal for relationships and tags.
> - **Sorted Sets**: Like sets but with an associated score, useful for leaderboards.
> - **Bitmaps**: For bit-level operations.
> - **HyperLogLogs**: For approximate counting of unique items.

## Details

> [!summary] **Strings**
> 
> Strings are the simplest Redis data type, holding any kind of data, such as text or binary.
> 
> **Example**:
>``` redis
> SET key "value"
> GET key
>```


> [!summary] **Hashes**
> 
> Hashes are maps between string fields and string values, ideal for storing objects.
> 
> **Example**:
> ``` redis
> HSET user:1000 name "John" age 30
> HGETALL user:1000
> ```


> [!summary] **Lists**
> 
> Lists are ordered collections of strings. They are useful for implementing queues.
> 
> **Example**:
> ``` redis
> LPUSH mylist "value1"
> LPUSH mylist "value2"
> LRANGE mylist 0 -1
> 
> ```


> [!summary] **Sets**
> 
> Sets are unordered collections of unique strings, useful for managing relationships.
> 
> **Example**:
> ``` redis
> SADD myset "value1"
> SADD myset "value2"
> SMEMBERS myset
> ```


> [!summary] **Sorted Sets**
> 
> Sorted sets are similar to sets but with an associated score for each member, used for ranking.
> 
> **Example**:
> ``` redis
> ZADD leaderboard 100 "player1"
> ZADD leaderboard 200 "player2"
> ZRANGE leaderboard 0 -1 WITHSCORES
> 
> ```


> [!summary] **Bitmaps**
> 
> Bitmaps are used for bit-level operations.
> 
> **Example**:
> ```
> SETBIT mybitmap 10 1
> GETBIT mybitmap 10
> ```


> [!summary] **HyperLogLogs**
> 
> HyperLogLogs are used for approximating the cardinality of a set, or counting unique items.
> 
> **Example**:
> ``` redis
> PFADD myhll "value1"
> PFADD myhll "value2"
> PFCOUNT myhll
> 
> ```
