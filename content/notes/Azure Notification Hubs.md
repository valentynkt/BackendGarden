---
created: 2024-06-13 20:27
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Azure]]

# Azure Notification Hubs

## Overview

Azure Notification Hubs is a cross-platform push notification service that allows you to send push notifications to any platform (iOS, Android, Windows, etc.) from any backend (cloud or on-premises). It provides a scalable and easy-to-use infrastructure for sending notifications to millions of devices.

## Key Features

> [!summary]
> 
> - **Cross-Platform Support**: Send notifications to iOS, Android, Windows, and more from a single backend.
> - **Scalability**: Capable of handling millions of devices with low latency.
> - **Tagging**: Target specific user groups by tagging devices.
> - **Templates**: Personalize notifications using templates.

## Registrations and Installations

### Registrations

Registrations are used to manage devices and their associated push notification handles. Each device can have one or more registrations.

### Installations

Installations are an alternative to registrations that provide a more robust way to manage device information. They include additional metadata such as device platform, tags, and templates for notifications.

## Conclusion

Azure Notification Hubs provides a powerful and scalable platform for sending push notifications across multiple devices. However, managing installations can be challenging due to missing fields in retrieved data and limited methods for accessing installations. Developers may need to implement additional logic or access the underlying storage directly to overcome these limitations.

## Problems with Installations

> [!warning] **Missing PlatformType and InstallationId**
> 
> When retrieving registrations by tag, the returned data includes installations but lacks the `PlatformType` and `InstallationId` fields. This omission limits the ability to identify and manage installations effectively.

> [!danger] **Limited Retrieval Methods**
> 
> Azure Notification Hubs does not provide built-in methods to retrieve all installations or filter them by criteria other than `InstallationId`. This limitation requires more complex solutions, such as directly accessing the underlying storage.

> [!example] **Example Issues**
> 
> - **Registrations by Tag**: When fetching registrations by tag, installations are included but critical fields like `PlatformType` and `InstallationId` are missing.
> - **No Direct Methods for All Installations**: The SDK does not offer methods to retrieve all installations or filter them, except by `InstallationId`, making it difficult to manage installations comprehensively.

> [!info] **Workarounds**
> 
> To address these issues, you might need to:
> 
> - Directly access the storage where notification data is stored.
> - Implement custom logic to manage installations.

## References

- [How to get all installations when using Azure Notification Hubs Installation Mode](https://stackoverflow.com/questions/38108730/how-to-get-all-installations-when-using-azure-notification-hubs-installation-mod)
- [GitHub Issue: Azure Notification Hubs .NET SDK missing methods for managing installations](https://github.com/Azure/azure-notificationhubs-dotnet/issues/143)
