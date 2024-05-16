---
created: 2024-05-15 20:49
aliases:
  - SSE
  - Server-Sent Event
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Real-Time Notification Architectures]]

# Server-Sent Events

## Diagram

![[q2Xm1c5T9h.png]]

## Overview

Server-Sent Events (SSE) is a web technology that enables servers to push real-time updates to clients over a single, long-lived HTTP connection. SSE is part of the HTML5 specification and provides a simple, efficient way to send continuous data streams from the server to the browser.

## How SSE Works

SSE works by establishing a persistent [[HTTP]] connection from the client to the server. The server can then send updates to the client whenever new data is available. Here’s a typical flow:

1. **Client Request**: The client initiates an HTTP request to the server to start receiving events.
2. **Server Response**: The server keeps the connection open and sends updates as they become available, using a specific format for event data.
3. **Client Handling**: The client processes the incoming events and updates the UI or performs other actions accordingly.

## Pros/Cons

> [!success] Pros
> - **Simplicity**: Easy to implement using standard HTTP and JavaScript.
> - **Efficiency**: Maintains a single connection for multiple updates, reducing overhead.
> - **Compatibility**: Well-supported by modern browsers without the need for additional libraries or plugins.

> [!danger] Cons
> - **Limited Bidirectionality**: Only allows server-to-client communication; client-to-server interactions require additional mechanisms like AJAX.
> - **Connection Limits**: Browsers typically limit the number of open SSE connections per domain.
> - **Less Control Over Reconnection**: Automatic reconnection is handled by the browser, offering less control over reconnection logic compared to WebSockets.

## Use Cases

SSE is ideal for applications that require continuous updates from the server to the client without the complexity of [[WebSockets]]. Examples include:

- **Live Feeds**: Streaming news updates, social media feeds, or stock market tickers.
- **Notifications**: Sending real-time alerts or notifications to users.
- **Monitoring Dashboards**: Displaying live updates in monitoring or analytics dashboards.

## Summary

Server-Sent Events provide a straightforward method for pushing real-time updates from the server to the client. While they offer simplicity and efficiency for server-to-client communication, they are best suited for scenarios where unidirectional data flow is sufficient. For bidirectional communication needs, alternatives like [[WebSockets]] might be more appropriate.