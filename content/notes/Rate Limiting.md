---
created: 2024-05-13 18:10
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Web Security]]

# Rate Limiting

## Overview

Rate Limiting controls the number of requests a user or system can make to a server over a specified period. It protects against abuse, ensures fair resource use, and helps mitigate attacks like [[Denial of Service]] (DoS).

## Key Concepts

> [!important]
> 
> - **Requests per Minute (RPM)**: Limits the number of allowed requests in a minute.
> - **Burst Limiting**: Allows brief surges of requests above the standard limit, but caps them to prevent overload.
> - **Quota-Based Limiting**: Restricts usage by setting a limit over a broader time (e.g., daily or monthly quotas).

## How Rate Limiting Works

1. **Tracking**: Monitors the number of requests per user or IP.
2. **Enforcement**: Rejects requests once the defined limit is reached.
3. **Resetting**: Resets limits after a specified period, allowing future requests.

## Benefits

> [!success] 
> **Prevents Abuse**: Protects resources by restricting excessive use.
> **Enhances Availability**: Reduces server load and improves performance.

## Best Practices

> [!important]
> 
> - **Set Realistic Limits**: Balance between user needs and resource capacity.
> - **Use Adaptive Limits**: Apply dynamic limits for high-traffic periods.
> - **Log and Analyze Traffic**: Identify patterns to refine limits over time.

