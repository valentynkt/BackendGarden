---
created: 2024-05-20 15:13
aliases:
  - Session-Cookie Auth
  - Session Authentication
  - Cookie Authentication
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Password-Based Authentication]]

# Session-Cookie Authentication



## Overview

Session-Cookie Authentication is a method used to maintain user sessions across multiple requests. This approach involves creating a session on the server side after a user logs in. The server stores session information and sends a session identifier (session cookie) to the client, which is included in subsequent requests to maintain the session.

## How It Works

![[9b3002be-d4f2-489c-99cd-f789012d76dc_1600x1173.webp]]

> [!example]- How It Works
> 1. **Client Request to Access a Protected Resource**: 
>    - The client sends a request to access a protected resource on the server.
>    - If the client has not yet authenticated, the server responds with a login prompt.
> 
> 2. **Client Submits Credentials**:
>    - The client submits their username and password to the server.
> ```http
>     POST /login HTTP/1.1
>     Host: example.com
>     Content-Type: application/json
> 
>     {
>       "username": "user",
>       "password": "password"
>     }
> ```
> 
> 3. **Server Verifies Credentials**:
>    - The server verifies the provided credentials against its user database or authentication service.
>    - If the credentials match, the server generates a unique session ID and creates a corresponding session in the server-side storage (e.g., server memory, database, or session server).
> 
> 4. **Server Sends Session ID**:
>    - The server sends the session ID to the client as a cookie, typically with a Set-Cookie header.
> ```http
>     HTTP/1.1 200 OK
>     Set-Cookie: sessionId=abc123; HttpOnly; Secure
> ```
> 
> 5. **Client Stores the Session Cookie**:
>    - The client stores the session cookie.
> 
> 6. **Subsequent Requests with Session Cookie**:
>    - For subsequent requests, the client sends the cookie along with the request headers.
> ```http
>     GET /protected-resource HTTP/1.1
>     Host: example.com
>     Cookie: sessionId=abc123
> ```
> 
> 7. **Server Validates Session ID**:
>    - The server checks the session ID in the cookie against the stored session data to authenticate the user.
> 
> 8. **Access Granted**:
>    - If validated, the server grants access to the requested resource.
> 
> 9. **Session Invalidation**:
>    - When the user logs out or after a predetermined expiration time, the server invalidates the session, and the client deletes the session cookie.


## ## Pros/Cons

> [!success]- **Pros**
> 
> - **Simplicity**: Easy to implement and use, with minimal configuration required on both client and server sides.
> - **Stateless**: The server does not need to maintain session state, making it scalable and suitable for distributed systems.
> - **Flexibility**: Can be used with various types of clients, including web browsers, mobile apps, and server-to-server communications.
> - **Speed**: API key validation is fast, enabling quick authentication of requests.

> [!danger]- **Cons**
> 
> - **Security**: API keys are less secure than other authentication methods, such as [[OAuth 2.0|OAuth]] or [[JSON Web Tokens|JWT]], because they can be easily intercepted if not properly protected.
> - **Management**: Requires careful management of API keys, including issuing, rotating, and revoking keys as needed.
> - **Lack of User Identity**: API keys do not inherently provide information about the user making the request, limiting their usefulness in applications requiring detailed user tracking and auditing.
> - **Exposure**: If an API key is compromised, it can grant unauthorized access to the API until the key is revoked.

## Best Practices

> [!info] Recommendations
> - **HttpOnly Cookies**: Use HttpOnly cookies to prevent access to the cookie via JavaScript, mitigating the risk of XSS attacks.
> - **Secure Cookies**: Ensure cookies are marked as Secure to guarantee they are only sent over HTTPS connections.
> - **Session Expiry**: Implement session expiration and idle timeout mechanisms to enhance security.
> - **Regenerate Session IDs**: Regularly regenerate session IDs to prevent session fixation attacks.

