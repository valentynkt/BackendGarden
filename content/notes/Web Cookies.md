---
created: 2024-05-16 15:55
aliases:
  - Cookies
  - cookie
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Session Management]]

# Web Cookies

## Diagram

![[a52a12ae-9469-4b15-b25d-a25c41fed72c_1280x1664.webp]]


## Overview

Web cookies are small pieces of data sent from a website and stored on the user's device by the [[Web]] browser. Cookies are used to remember information about the user, such as login credentials, preferences, and session data, enabling a more personalized and seamless browsing experience.

## How Cookies Work

> [!info]- How Cookies Work
> 1. **Server Sends Cookie**: When a user visits a website, the server sends a cookie to the user's browser.
> 2. **Browser Stores Cookie**: The browser stores the cookie on the user's device.
> 3. **Subsequent Requests**: On subsequent requests to the same server, the browser sends the stored cookie along with the request.
> 4. **Server Reads Cookie**: The server reads the cookie and retrieves the stored information, such as user preferences or session data.

## Types of Cookies

> [!example]- Types
> - **Session Cookies**: Temporary cookies that are deleted when the browser is closed. Used to store session information.
> - **Persistent Cookies**: Remain on the user's device for a set period or until manually deleted. Used to remember login credentials or preferences.
> - **Secure Cookies**: Only sent over HTTPS connections. Used to enhance security.
> - **HttpOnly Cookies**: Cannot be accessed by client-side scripts. Used to protect against cross-site scripting (XSS) attacks.
> - **Third-Party Cookies**: Set by domains other than the one the user is visiting. Often used for tracking and advertising purposes.

## Uses of Cookies

> [!summary]- Uses
> - **Session Management**: Maintain user sessions, such as keeping users logged in.
> - **Personalization**: Store user preferences and settings.
> - **Tracking**: Track user behavior and interactions across websites.
> - **Analytics**: Collect data for web analytics services.

## Setting and Reading Cookies

> [!info]- Setting and Reading Cookies
> - **Setting a Cookie**: The server sends an HTTP response header `Set-Cookie` with the cookie data.
> - **Reading a Cookie**: The browser includes the cookie in the `Cookie` HTTP request header when making subsequent requests to the server.

> [!example]- JavaScript
> ```javascript
> // Setting a cookie in JavaScript
> document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2021 23:59:59 GMT; path=/";
> 
> // Reading a cookie in JavaScript
> const getCookie = (name) => {
>     const value = `; ${document.cookie}`;
>     const parts = value.split(`; ${name}=`);
>     if (parts.length === 2) return parts.pop().split(';').shift();
> }
> ```


## Pros/Cons

> [!success]- Pros
> 
> - **Convenience**: Simplifies user login and session management.
> - **Personalization**: Enhances user experience by remembering preferences.
> - **Efficiency**: Reduces server load by storing session data client-side.

> [!danger]- Cons
> 
> - **Privacy Concerns**: Can be used to track user behavior across the web.
> - **Security Risks**: Vulnerable to attacks such as cross-site scripting (XSS) and cross-site request forgery (CSRF) if not implemented correctly.
> - **Storage Limitations**: Limited storage capacity compared to other client-side storage options.

> [!warning]- Security Considerations
> 
> - **Secure Attribute**: Always set the `Secure` attribute for cookies to ensure they are only sent over [[HTTPS]].
> - **HttpOnly Attribute**: Use the `HttpOnly` attribute to prevent client-side scripts from accessing cookies.
> - **SameSite Attribute**: Use the `SameSite` attribute to prevent cross-site request forgery (CSRF) attacks.
