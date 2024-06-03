---
created: 2024-05-20 18:53
aliases:
  - Push Notification Auth
  - Notification Authentication
  - Push Auth
  - Push Authentication
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Passwordless Authentication]]

# Push Notification Authentication

## Overview

Push Notification Authentication is a [[Passwordless Authentication]] method that uses push notifications sent to a user's registered mobile device to verify their identity. This method enhances security by leveraging the user's smartphone for authentication, ensuring that only the device owner can approve login requests.

## How Push Notification Authentication Works

1. **User Initiates Login**: The user attempts to log in to an application or service.
2. **Push Notification Sent**: The authentication server sends a push notification to the user's registered mobile device.
3. **User Approves Request**: The user receives the notification and approves or denies the login request.
4. **Authentication Verified**: If the user approves the request, the authentication server verifies the approval and grants access.

## Pros/Cons

> [!success] **Pros**
> 
> - **High Security**: Requires possession of the registered mobile device, reducing the risk of unauthorized access.
> - **User-Friendly**: Simplifies the login process by eliminating the need for passwords.
> - **Real-Time Verification**: Provides immediate authentication, enhancing user experience.

> [!danger] **Cons**
> 
> - **Dependency on Mobile Device**: Requires users to have their registered mobile device available.
> - **Internet Connection Required**: Both the server and the mobile device need an active internet connection for the push notification to be received.
> - **Potential for Notification Overload**: Users may become desensitized to push notifications if they receive too many, increasing the risk of ignoring important authentication requests.
