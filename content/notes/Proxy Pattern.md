---
created: 2024-04-15 20:01
aliases:
  - Surrogate Pattern
  - Placeholder Pattern
  - Control Object Pattern
links: "[[Structural patterns]]"
tags:
  - LearningIT
  - evergreen🌳
---
link: [[Structural patterns]]

# Proxy Pattern

## Overview


![[Pasted image 20240404214727.png]]

>[!abstract] 
>**Proxy** is a [[Structural patterns|Structural]] design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

## Content

### Intent

> [!danger]  **Problem** 
> In scenarios where an object consumes significant system resources and is only needed intermittently, lazy initialization could be employed. However, implementing lazy initialization directly in the object's class may not always be feasible, especially if the class is part of a closed 3rd-party library. This approach could lead to code duplication and maintenance challenges.
>![[Pasted image 20240404214918.png]]
> _Database queries can be really slow._

> [!success]  **Solution** 
> The Proxy pattern proposes the creation of a proxy class that mirrors the interface of the original object. Clients interact with the proxy object instead of the original one. Upon receiving a request from a client, the proxy class instantiates the real service object and delegates the work to it. This enables the execution of additional tasks before or after the primary logic of the original class without modifying it. Since the proxy implements the same interface as the original class, it seamlessly integrates with any client expecting a real service object.
>![[Pasted image 20240404215002.png]]
>_The proxy disguises itself as a database object. It can handle lazy initialization and result caching without the client or the real database object even knowing._

### Structure

![[Pasted image 20240404215029.png]]

1. **Service Interface**: Declares the interface of the Service. The proxy must adhere to this interface to effectively disguise itself as a service object.
2. **Service**: A class implementing the Service Interface that provides useful business logic or functionality.
3. **Proxy**: Contains a reference field pointing to a service object. The Proxy class intercepts requests from clients and may perform additional processing such as lazy initialization, logging, access control, caching, etc., before delegating the request to the actual service object. Proxies often manage the full lifecycle of their service objects.
4. **Client**: Utilizes both services and proxies through the same interface. This design enables seamless interchangeability between services and proxies, allowing a proxy to be passed into any code expecting a service object.

### Applicability

The Proxy pattern finds numerous applications across various scenarios. Here are some of the most common uses:

1. **Lazy Initialization (Virtual Proxy)**:
    - Useful when you have a resource-intensive object that doesn't need to be initialized immediately.
    - Delay the creation of the object until it's actually needed, thus conserving system resources.
2. **Access Control (Protection Proxy)**:
    - Ideal for restricting access to specific clients for security reasons.
    - The proxy can enforce access control policies and only pass requests to the service object if the client meets certain criteria or has the necessary credentials.
3. **Local Execution of Remote Service (Remote Proxy)**:
    - When the service object is located on a remote server, but clients interact with it locally.
    - The proxy handles communication over the network, abstracting away the complexities of remote procedure calls.
4. **Logging Requests (Logging Proxy)**:
    - Suitable for keeping a history of requests made to the service object.
    - The proxy logs each request before forwarding it to the service, allowing for auditing, debugging, or monitoring purposes.
5. **Caching Request Results (Caching Proxy)**:
    - Effective for improving performance by caching the results of recurring requests.
    - The proxy stores previously computed results and serves them directly to clients without involving the actual service object, thereby reducing redundant computation.
6. **Smart Reference**:
    - Helpful when managing the lifecycle of heavyweight objects based on client usage.
    - The proxy keeps track of active clients and may dismiss the service object if there are no longer any clients using it, freeing up system resources.
    - Additionally, the proxy can detect modifications made by clients and decide whether to reuse unchanged objects for efficiency.

By employing the Proxy pattern, you can introduce additional functionality such as access control, logging, caching, and resource management while maintaining a transparent interface to the clients, thus enhancing the flexibility, security, and performance of your application.

### How to Implement

To implement the Proxy pattern effectively, follow these steps:

1. **Define Service Interface**:
    - If there isn't already an existing service interface, create one to ensure interchangeability between proxy and service objects.
    - Extracting the interface directly from the service class might not always be feasible, as it would require modifying all clients of the service. Alternatively, consider making the proxy a subclass of the service class to inherit its interface.
2. **Create Proxy Class**:
    - Develop the proxy class with a field to store a reference to the service object.
    - Proxies typically manage the entire lifecycle of their service objects. Occasionally, the service may be passed to the proxy via a constructor by the client.
3. **Implement Proxy Methods**:
    - Define the proxy methods according to their intended purposes.
    - After performing any necessary pre-processing, delegate the actual work to the service object in most cases.
4. **Consider Creation Method**:
    - Evaluate the need for a creation method that determines whether the client receives a proxy or a real service object.
    - This method can be a simple static method in the proxy class or a more complex [[Factory Method Pattern|Factory Method]].
5. **Implement Lazy Initialization**:
    - Optionally, implement lazy initialization for the service object within the proxy.
    - Delay the creation of the service object until it's actually needed, optimizing resource utilization.

By following these steps, you can effectively implement the Proxy pattern to introduce additional functionality, such as access control, logging, or caching, while maintaining a consistent interface for clients to interact with both proxy and service objects.

### Pros and Cons

> [!success] **Advantages**
> 1. **Control and Management**: Proxies allow you to control and manage access to the service object without clients being aware of it. This enables you to add additional functionality such as access control, logging, or caching transparently.  
> 2. **Lifecycle Management**: Proxies enable you to manage the lifecycle of the service object, handling its creation, initialization, and destruction, if necessary, without impacting clients.
> 3. **Fault Tolerance**: Proxies can handle scenarios where the service object is not ready or available, providing fault tolerance and graceful degradation of service.
> 4. **[[Open Closed Principle]]**: Introducing new proxies can be done without modifying the existing service or clients, adhering to the Open/Closed Principle of software design.

> [!warning] **Disadvantages**
> 1. **Increased Complexity**: Implementing proxies can introduce additional classes and logic, potentially increasing the complexity of the codebase. 
> 2. **Potential Delay**: Depending on the implementation, there might be a delay in the response from the service, especially in scenarios involving lazy initialization or remote service access through the proxy. This delay could impact the overall performance of the system.

### Relations with Other Patterns

- **[[Adapter Pattern]]**: Adapter and Proxy patterns both involve wrapping objects, but they serve different purposes. Adapter provides a different interface to the wrapped object to make it compatible with the client's interface, while Proxy provides the same interface as the wrapped object but controls access to it.
- **[[Facade Pattern]]**: Facade and Proxy both involve buffering a complex entity, but they differ in their approach and intent. Facade simplifies the interface of a complex system, providing a higher-level interface to it, while Proxy provides a surrogate or placeholder for another object to control access to it. 
- **[[Decorator Pattern]]**: Decorator and Proxy have similar structures based on composition but serve different purposes. Both patterns involve composing objects to add functionality, but Proxy usually manages the lifecycle of its service object, while Decorator dynamically enhances the behavior of an object at runtime.

## Examples

This code exemplifies the **Proxy** pattern, which is used to control access to an object, either to defer the cost of its full creation and initialization until it is actually needed, or to add additional capabilities such as access control, caching, or logging. This example specifically implements a caching proxy to manage interactions with a third-party YouTube service.

> [!abstract]+  **Components of the Implementation**
>- **Service Interface (`IThirdPartyYouTubeLib`)**:
>    - Defines the operations that can be performed on the YouTube service, such as listing videos, getting video information, and downloading videos.
>- **Concrete Service (`ThirdPartyYouTubeClass`)**:
>    - Implements the service interface to interact directly with YouTube's [[API]]. This class handles API requests and returns video data.
>- **Proxy Class (`CachedYouTubeClass`)**:
>    - Implements the service interface and acts as a proxy to the real YouTube service (`ThirdPartyYouTubeClass`). It adds caching functionality to store results of expensive API calls like video listing and metadata retrieval, thus improving performance by avoiding repeated API requests.
>    - Manages caching logic to check whether data needs to be refreshed or can be served from cache.
>- **Client Class (`YouTubeManager`)**:
>    - Uses the proxy service to display video data and interact with the user. It encapsulates the logic needed to render video pages and lists, depending on user actions, without depending directly on the YouTube API for every operation.
>
>**Usage:**
>
>1. An instance of the real YouTube service is created (`ThirdPartyYouTubeClass`).
>2. This service instance is wrapped by the caching proxy (`CachedYouTubeClass`), which manages data caching.
>3. The client (`YouTubeManager`) uses the proxy to render video data and handle user interactions, benefiting from the caching to reduce API calls and enhance performance.

This setup demonstrates how the Proxy pattern can be utilized to add caching functionality to a service without altering the service's interface, making it transparent to the client which uses the service. It also showcases how proxies can be used to enhance performance and manage complex dependencies in a system.

### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/Proxy/Program.cs)

> [!example]- Server Side
>``` csharp
>// Video class representing a video on YouTube
>using System.Collections.Generic;
>
>public class Video
>{
>    public string Id { get; set; }
>    public string Title { get; set; }
>    public string Description { get; set; }
>    // Other properties such as duration, author, etc.
>}
>
>// The interface of a remote service.
>public interface IThirdPartyYouTubeLib
>{
>    List<Video> ListVideos();
>    Video GetVideoInfo(string id);
>    void DownloadVideo(string id);
>}
>
>// The concrete implementation of a service connector.
>public class ThirdPartyYouTubeClass : IThirdPartyYouTubeLib
>{
>    public List<Video> ListVideos()
>    {
>        // Send an API request to YouTube and return list of videos.
>        return [];
>    }
>
>    public Video GetVideoInfo(string id)
>    {
>        // Get metadata about the video with the provided id.
>        return new Video();
>    }
>
>    public void DownloadVideo(string id)
>    {
>        // Download a video file from YouTube.
>    }
>}
>
>// Proxy class for caching requests.
>public class CachedYouTubeClass : IThirdPartyYouTubeLib
>{
>    private readonly IThirdPartyYouTubeLib _service;
>    private static List<Video> _listCache;
>    private static Dictionary<string, Video> _videoCache;
>    private static readonly bool _needReset;
>
>    public CachedYouTubeClass(IThirdPartyYouTubeLib service)
>    {
>        _service = service;
>    }
>
>    public List<Video> ListVideos()
>    {
>        if (_listCache == null || _needReset)
>        {
>            _listCache = _service.ListVideos();
>        }
>        return _listCache;
>    }
>
>    public Video GetVideoInfo(string id)
>    {
>        if (_videoCache == null || _needReset)
>        {
>            if (_videoCache == null)
>                _videoCache = [];
>
>            if (!_videoCache.ContainsKey(id))
>                _videoCache[id] = _service.GetVideoInfo(id);
>        }
>        return _videoCache[id];
>    }
>
>    public void DownloadVideo(string id)
>    {
>        if (!_downloadExists(id) || _needReset)
>        {
>            _service.DownloadVideo(id);
>        }
>    }
>
>    private bool _downloadExists(string id)
>    {
>        // Check if the video is already downloaded.
>        return false;
>    }
>}
>```

> [!example]- Client Side
>``` csharp
>static void Main(string[] args)
>{
>    RealWorldExample();
>   
>}
>private static void RealWorldExample()
>{
>    var youTubeService = new ThirdPartyYouTubeClass();
>    var youTubeProxy = new CachedYouTubeClass(youTubeService);
>    var manager = new YouTubeManager(youTubeProxy);
>    manager.ReactOnUserInput();
>}
>
>public class YouTubeManager
>{
>    private readonly IThirdPartyYouTubeLib _service;
>
>    public YouTubeManager(IThirdPartyYouTubeLib service)
>    {
>        _service = service;
>    }
>
>    public void RenderVideoPage(string id)
>    {
>        var video = _service.GetVideoInfo(id);
>        // Render the video page.
>    }
>
>    public void RenderListPanel()
>    {
>        var videos = _service.ListVideos();
>        // Render the list of video thumbnails.
>    }
>
>    public void ReactOnUserInput()
>    {
>        RenderVideoPage("videoId");
>        RenderListPanel();
>    }
>}
>```

## Summary

>[!summary]- **Cheat Sheet**
>**Proxy Pattern Cheat Sheet**
>**Purpose**:
>- Provides a surrogate or placeholder for another object to control access to it.
>- Useful for managing costly operations, adding security measures, or providing a simpler interface to complex systems.
>
>**Components**:
>- **Subject Interface**: Defines the common interface for the real object and the proxy, ensuring that a proxy can be used in place of the real object.
>- **Real Subject**: The actual object that performs the real operations the proxy represents.
>- **Proxy**: Acts as an intermediary for the real subject, implementing the same interface, and controls access to it.
>- **Client**: Interacts with the Proxy instead of the direct real subject.
>
>**Usage**:
>- Use when you need to control the creation and access to an object without clients knowing the implementation details.
>- Use for lazy initialization, logging, access control, or to add other administrative functions transparently.
>
>**Benefits**:
>- Provides a layer of security by serving as a gatekeeper to the real subject.
>- Can manage the lifecycle of the real subject without the client’s knowledge.
>- Reduces system complexity by controlling operations like creating and deleting objects or managing resource-intensive operations.
>
>**Common Scenarios**:
>- Virtual Proxies that delay object creation until necessary.
>- Protection Proxies that control access to sensitive objects.
>- Remote Proxies that encapsulate access to remote objects as if they were local.

^3ece26


# References

[Design Patterns](https://refactoring.guru/design-patterns)





