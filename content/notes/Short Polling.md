---
created: 2024-05-16 13:13
aliases:
  - HTTP Short Polling
  - Basic Polling
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[HTTP Polling]]

# Short Polling


## Overview

Short polling is a technique used in web applications to check for updates from a server at regular intervals. Unlike [[Long Polling]], which keeps the connection open until new data is available, short polling closes the connection after each request and opens a new one for the next check.

## How Short Polling Works

1. **Client Request**: The client sends a request to the server at fixed intervals.
2. **Server Response**: The server processes the request and responds immediately with the current state of the data.
3. **Repeat**: The client waits for a predefined period before sending another request.

## Pros/Cons

> [!success] Pros
> - **Simplicity**: Easy to implement with standard HTTP requests.
> - **Compatibility**: Works with any web server without requiring special configurations.
> - **Control**: Client has control over the frequency of requests.

> [!danger] Cons
> - **Inefficiency**: Frequent requests can lead to high server load and increased network traffic.
> - **Latency**: Not suitable for real-time applications due to the delay between requests.
> - **Resource Intensive**: Can consume more bandwidth and server resources compared to other polling techniques.

## Use Cases

Short polling is best suited for applications where real-time updates are not critical but periodic data retrieval is required. Examples include:

- **Email Checking**: Applications checking for new emails at regular intervals.
- **Weather Updates**: Weather apps polling for updated information periodically.
- **Stock Prices**: Financial apps retrieving stock prices at regular intervals.

## Example Implementation

Here's a basic example of short polling using JavaScript and a RESTful API:

```javascript
function shortPoll() {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            console.log('Data:', data);
            // Process the data
        })
        .catch(error => console.error('Error:', error));

    // Poll every 5 seconds
    setTimeout(shortPoll, 5000);
}

// Start short polling
shortPoll();
