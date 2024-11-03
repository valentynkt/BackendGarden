---
created: 2024-05-13 18:08
aliases:
  - CORS
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Web Security]]

# Cross-Origin Resource Sharing

## Overview

Cross-Origin Resource Sharing (CORS) is a security feature that allows or restricts resources on a web server to be requested from another domain. CORS is essential for web applications that load resources from multiple sources, controlling which external domains can access the server’s resources.

## Key Concepts

> [!important]
> 
> - **Same-Origin Policy**: Default web browser behavior that blocks requests from different origins, protecting against unauthorized access.
> - **CORS Headers**: HTTP headers like `Access-Control-Allow-Origin` define which external origins can access server resources.
> - **Preflight Request**: A preliminary request sent by the browser to check if the server allows the actual request, used for requests that may alter server data (e.g., `PUT`, `DELETE`).

## How CORS Works

1. **Request Initiation**: A web client requests a resource from a different origin.
2. **Header Evaluation**: The server responds with CORS headers, indicating if the origin is allowed.
3. **Access Control**: Based on the headers, the client browser either permits or blocks the request.

## Benefits

> [!success] 
> **Controlled Access**: Enables safe data sharing between different origins.
> **Enhanced Security**: Prevents unauthorized cross-origin requests, reducing the risk of data theft.

## Best Practices

> [!important]
> 
> - **Specify Allowed Origins**: Limit access to trusted domains only.
> - **Use Preflight Requests**: Enable for requests that modify server data, ensuring compliance with CORS policies.
> - **Avoid `*` for `Access-Control-Allow-Origin`**: Using `*` is less secure, as it allows any origin to access the resource.

## Related Topics

> [!summary]
> 
> - **[[Web Application Firewalls]] (WAF)**: Works with CORS to filter requests and block unauthorized traffic.
> - **API Security**: CORS is commonly used to control cross-origin access for APIs.

