---
created: 2024-05-16 13:07
aliases:
  - Polling
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Real-Time Notification Architectures]]

# HTTP Polling

## Diagram

![[UdYG88sAEv.png]]

## Overview

HTTP polling is a technique used to repeatedly request data from a server at regular intervals. It is often used in scenarios where real-time data updates are required, but other methods like WebSockets are not feasible. HTTP polling helps maintain updated information on the client side without requiring continuous open connections.

## Polling Techniques

> [!summary] **Polling Techniques**
> 
> - **[[Short Polling]]**: The client makes requests to the server at fixed, frequent intervals. Each request is independent, and the server responds immediately with the available data.
> - **[[Long Polling]]**: The client makes a request to the server and the server holds the request open until new data is available or a timeout occurs. This reduces the number of requests compared to short polling.


> [!summary]- [[Short Polling]]
> ![[Short Polling#How Short Polling Works]]


> [!summary]- [[Long Polling]]
> ![[Long Polling#How Long Polling Works]]


## Why Use Polling?

Polling is used in scenarios where real-time data updates are required, but the server or infrastructure does not support more advanced techniques like [[WebSockets]] or [[Server-Sent Events]] (SSE). It is also useful in situations where firewall restrictions or security policies prevent the use of persistent connections.

## Pros/Cons

> [!success] **Pros**
> 
> - **Simplicity**: Easy to implement with standard HTTP requests and responses.
> - **Compatibility**: Works with most web servers and client libraries without requiring special configurations.
> - **Firewall Friendly**: Uses standard HTTP methods that are typically allowed through firewalls and proxies.
> - **Predictable Load**: Generates predictable server load due to fixed interval requests in short polling.

> [!danger] **Cons**
> 
> - **Inefficiency**: Can generate a high number of unnecessary requests, especially with short polling, leading to increased bandwidth usage.
> - **Latency**: May introduce latency in data updates, especially with longer polling intervals.
> - **Resource Intensive**: Can strain server resources due to the high frequency of requests, particularly in large-scale applications.
> - **Scalability Issues**: Not ideal for applications with a large number of clients, as it can lead to server overload.

HTTP polling is a viable technique for achieving real-time data updates when more efficient methods are not available, but it comes with trade-offs in terms of efficiency and scalability. Choosing between short polling and long polling depends on the specific requirements and constraints of the application.