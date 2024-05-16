---
created: 2024-05-16 16:22
aliases:
  - Local Storage
  - Local-Storage
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Session Management]]

# Web Local Storage

## Overview

Web local storage, also known as browser local storage, is a feature of HTML5 that allows [[Web]] applications to store data locally within the user's browser. Unlike [[Web Cookies|Cookies]], which are sent with every [[HTTP]] request, local storage data is only accessible within the browser and is not transmitted to the server. This makes local storage a suitable option for storing data that needs to persist across sessions but doesn't require server-side interaction.

## How Web Local Storage Works

> [!info]- How Web Local Storage Works
> 1. **Data Storage**: Data is stored as key-value pairs in the browser's storage space.
> 2. **Access**: JavaScript is used to read from and write to local storage.
> 3. **Persistence**: Data in local storage persists even after the browser is closed and reopened, until explicitly deleted.

## Pros/Cons

> [!success]- Pros
> - **Persistence**: Data remains available even after the browser is closed, providing a persistent storage solution.
> - **Size Limit**: Offers a larger storage capacity compared to [[Web Cookies|Cookies]] (typically up to 5MB per domain).
> - **Performance**: Local storage operations are fast and do not affect network performance since data is not transmitted with [[HTTP]] requests.


> [!danger]- Cons
> - **[[Security]]**: Data stored in local storage can be accessed by any script running on the same domain, making it vulnerable to cross-site scripting (XSS) attacks.
> - **Limited Storage**: Although larger than cookies, local storage still has storage limits that might not be sufficient for some applications.
> - **No Expiration**: Unlike [[Web Cookies|Cookies]], local storage data does not expire automatically and must be managed by the application.

## Common Use Cases

> [!example]- Use Cases
> - **Storing User Preferences**: Saving user settings and preferences that persist across sessions.
> - **Offline Applications**: Storing data locally for offline access and synchronization when the user is back online.
> - **Shopping Carts**: Keeping track of items in a shopping cart across multiple sessions without requiring server interaction.

## Implementation Example

Here's a basic example of using web local storage with JavaScript:

> [!example]- Javascript
> ```javascript
> // Store data
> localStorage.setItem('username', 'JohnDoe');
> 
> // Retrieve data
> const username = localStorage.getItem('username');
> console.log(username); // Output: JohnDoe
> 
> // Remove data
> localStorage.removeItem('username');
> 
> // Clear all data
> localStorage.clear();
> ```
