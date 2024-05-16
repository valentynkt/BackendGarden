---
created: 2024-05-16 16:22
aliases:
  - Session Storage
  - Session-Storage
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Session Management]]

# Web Session Storage

## Overview

Web session storage, also known as browser session storage, is a feature of HTML5 that provides a way to store data on the client side for the duration of the page session. This means that data stored in session storage is available only for the current session and is cleared when the page is closed. Unlike [[Web Cookies|Cookies]], session storage is not sent to the server with every [[HTTP]] request.

## How Web Session Storage Works

> [!info]- How Web Session Storage Works
> 1. **Data Storage**: Data is stored as key-value pairs within the browser's session storage.
> 2. **Access**: JavaScript is used to read from and write to session storage.
> 3. **Scope**: Data is available only within the same session, typically the same browser tab or window.

## Pros/Cons

> [!success]- Pros
> - **Session-Specific Storage**: Data is only available for the duration of the page session, making it suitable for temporary data storage.
> - **Size Limit**: Offers a larger storage capacity compared to cookies (typically up to 5MB per domain).
> - **Performance**: Session storage operations are fast and do not affect network performance since data is not transmitted with HTTP requests.


> [!danger]- Cons
> - **Limited Persistence**: Data is lost when the browser tab or window is closed, which may not be suitable for data that needs to persist across sessions.
> - **Security**: Data stored in session storage can be accessed by any script running on the same domain, making it vulnerable to cross-site scripting (XSS) attacks.
> - **No Expiration Management**: Unlike cookies, session storage does not support expiration management, requiring manual data handling by the application.

## Common Use Cases

> [!example]- Use Cases
> - **Form Data Preservation**: Keeping form data while the user navigates through different parts of a web application.
> - **Temporary Session Data**: Storing data that is relevant only for the current browsing session, such as temporary selections or user inputs.
> - **Page-Specific State**: Maintaining the state of a single-page application (SPA) during the session.

## Implementation Example

Here's a basic example of using web session storage with JavaScript:

> [!example]- Javascript
> 
> ```javascript
> // Store data
> sessionStorage.setItem('sessionKey', 'sessionValue');
> 
> // Retrieve data
> const sessionValue = sessionStorage.getItem('sessionKey');
> console.log(sessionValue); // Output: sessionValue
> 
> // Remove data
> sessionStorage.removeItem('sessionKey');
> 
> // Clear all data
> sessionStorage.clear();
> ```


