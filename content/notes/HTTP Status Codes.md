---
created: 2024-05-06 22:08
aliases:
  - HTTP Status Code
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[HTTP]]

# HTTP Status Codes

HTTP status codes are three-digit numbers issued by servers to indicate the result of a client's request. These codes are organized into categories reflecting the type of response provided.

## 1xx - Informational Responses
These codes indicate that the request initiated by the client was received and is being processed.

> [!info] 
> - **100 Continue** 🛈
>   The server has received the initial part of the request and is indicating that the client should continue.

## 2xx - Success
These codes signify that the client's request was successfully received, understood, and accepted.

> [!success] 
> - **200 OK** ✅
>   The standard response for successful HTTP requests.
> - **201 Created** ✅
>   A new resource has been created as a result of the request.
> - **204 No Content** ✅
>   The request was successful but there is no content to return.

## 3xx - Redirection
This group of status codes indicates that further action needs to be taken by the client in order to complete the request.

> [!warning] Redirection
> - **301 Moved Permanently** 🔃
>   The resource is permanently moved to a new URL provided in the response.
> - **302 Found** 🔃
>   Directs the client to a temporarily moved resource.
> - **304 Not Modified** 🔃
>   Indicates that the resource has not been modified and can be retrieved from the client's cache.

## 4xx - Client Errors
These codes are used when the request contains incorrect syntax or cannot be fulfilled.

> [!error] Client Errors
> - **400 Bad Request** 🚫
>   The request cannot be processed due to bad syntax.
> - **401 Unauthorized** 🚫
>   Authentication is required and has failed or has not been provided.
> - **403 Forbidden** 🚫
>   The request is understood but the server refuses to authorize it.
> - **404 Not Found** 🚫
>   The server can't find the requested resource.

## 5xx - Server Errors
These indicate errors with the server's ability to process the request.

> [!danger] Server Errors
> - **500 Internal Server Error** 🛠️
>   A generic error message when the server fails unexpectedly.
> - **502 Bad Gateway** 🛠️
>   The server received an invalid response from an upstream server while acting as a gateway or proxy.
> - **503 Service Unavailable** 🛠️
>   The server is currently unable to handle the request due to temporary overload or scheduled maintenance.
> - **504 Gateway Timeout** 🛠️
>   The server did not receive a timely response from an upstream server.

Understanding these status codes is crucial for diagnosing issues in HTTP communications and ensuring effective web and application development.
