---
created: 15-04-2024 19:16
aliases:
  - Interface Pattern
  - Simplification Pattern
  - Abstraction Layer Pattern
links: "[[Structural patterns]]"
tags:
  - LearningIT
  - evergreen🌳
---
link: [[Structural patterns]]

# Facade Pattern

## Overview

![[Pasted image 20240404183708.png]]

>[!abstract] 
>**Facade** is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.

## Content

### Intent

> [!danger]  **Problem** 
> When working with a comprehensive library or framework, integrating numerous objects requires intricate initialization, managing dependencies, and ensuring correct method execution order. This tight coupling between business logic and 3rd-party implementation details complicates comprehension and maintenance.

> [!success]  **Solution** 
> A **Facade** acts as an interface simplifying interaction with a complex subsystem containing multiple components. It offers a streamlined functionality subset compared to direct subsystem access, focusing only on essential client requirements.
> 
> A Facade proves beneficial when integrating an application with an extensive library boasting numerous features, of which only a fraction is necessary. For example, an application uploading short cat videos to social media platforms might leverage a professional video conversion library. However, it merely necessitates a class with a single method, `Encode(filename, format)`. By creating such a class and linking it with the video conversion library, the initial Facade is established, catering to specific application needs.

### Structure

![[Pasted image 20240404183849.png]]

1. **Facade**: Provides a simplified interface to access specific functionality within the subsystem. It orchestrates the interaction between the client and the subsystem, directing requests and managing the complexities of multiple components.
    
2. **Additional Facade**: Optionally, multiple facade classes can be created to segregate unrelated features and prevent the primary facade from becoming overly complex. These additional facades serve both clients and other facades, enhancing modularity and maintainability.
    
3. **Complex Subsystem**: Comprises numerous objects with intricate interactions. To achieve meaningful outcomes, understanding the subsystem's implementation details is necessary, including proper object initialization and data formatting. Subsystem classes operate independently of the facade, interacting directly with each other within the system.
    
4. **Client**: Utilizes the facade to access subsystem functionality without directly interacting with its objects. By abstracting away the complexities of the subsystem, the facade simplifies the client's interaction, promoting cleaner and more manageable code.
   

### Applicability

This pattern is applicable in the following scenarios:

1. **Limited Interface to Complex Subsystem**: When dealing with a complex subsystem with numerous classes and operations, the Facade pattern provides a simplified and straightforward interface to access the most commonly used features. This simplifies client interaction and shields them from the complexity of the subsystem.
2. **Managing Subsystem Complexity**: Over time, subsystems tend to become more intricate as additional features and classes are added. The Facade pattern helps manage this complexity by offering a concise interface that encapsulates the most essential functionality of the subsystem. This prevents clients from being overwhelmed by the inner workings of the subsystem.
3. **Structuring Subsystem Layers**: If the subsystem can be divided into multiple layers, each responsible for different aspects of functionality, the Facade pattern can be used to define entry points (facades) to each layer. This helps in organizing the subsystem into manageable layers and reduces coupling between them, as communication between layers is facilitated through the facades.

For instance, in the context of a video conversion framework, separate facades can be created for video-related operations and audio-related operations, allowing each layer to communicate with the other through these facades. This approach resembles the Mediator pattern, where communication between components is centralized through a mediator object, thus promoting loose coupling.

### How to Implement

To implement the Facade pattern, follow these steps:

1. **Identify Simplification Opportunities**: Evaluate the existing subsystem and determine if there are areas where the interface could be simplified for clients. Aim to create a new interface that abstracts away complex details and dependencies of the subsystem.
2. **Create Facade Class**: Declare and implement a new facade class that encapsulates the simplified interface. This facade class should serve as a single entry point for clients to interact with the subsystem. It should delegate calls from clients to appropriate objects within the subsystem and manage their initialization and lifecycle if necessary.
3. **Promote Facade Usage**: Ensure that all client code communicates with the subsystem exclusively through the facade. This promotes loose coupling and protects client code from changes in the subsystem's implementation. By enforcing this communication pattern, any modifications or upgrades to the subsystem can be easily accommodated by updating the facade.
4. **Refactor as Needed**: If the facade becomes overly complex or starts to grow too large, consider refactoring it by extracting subsets of its behavior into separate, more specialized facade classes. This helps maintain a clean and manageable codebase while still providing a simplified interface to clients.

By following these steps, you can effectively implement the Facade pattern to provide a simplified interface to a complex subsystem, promoting ease of use and maintainability in your software design.

### Pros and Cons

> [!success] **Advantages**
> You can isolate your code from the complexity of a subsystem.

> [!warning] **Disadvantages**
> A facade can become a god object coupled to all classes of an app.

### Relations with Other Patterns

**[[Adapter Pattern]]**: **Facade** simplifies access to a complex subsystem by providing a single interface, whereas **Adapter** converts the interface of an existing object to match that of a different interface. **Facade** typically works with an entire subsystem, while **Adapter** usually wraps a single object.

**[[Abstract Factory Pattern]]**: **Facade** hides the complexity of a subsystem by providing a simplified interface, while **Abstract Factory** hides the details of object creation. **Facade** focuses on simplifying access to existing functionality, while **Abstract Factory** focuses on creating families of related objects.

**[[Flyweight Pattern]]**: **Facade** simplifies access to a large system by providing a unified interface, while **Flyweight** reduces memory usage by sharing common state among multiple objects. **Facade** deals with simplifying access to a complex subsystem, whereas **Flyweight** deals with optimizing memory usage for a large number of small objects.

**[[Mediator Pattern]]**: **Facade** simplifies interaction with a subsystem by providing a unified interface, while **Mediator** centralizes communication between components. **Facade** focuses on simplifying access to subsystems, whereas **Mediator** focuses on managing communication between objects.

**[[Singleton Pattern]]**: A **Facade** class can sometimes be implemented as a **Singleton** if only one instance is needed to simplify access to a subsystem. While a **Singleton** ensures that only one instance of a class exists, a **Facade** provides a simplified interface to a complex subsystem.

**[[Proxy Pattern]]**: **Facade** provides a simplified interface to a subsystem, while **Proxy** controls access to an object by acting as its surrogate or placeholder. **Facade** buffers a complex subsystem behind a simplified interface, whereas **Proxy** may add additional functionality or control access to the underlying object.

## Examples

This code implements a Video Converter application using the Facade design pattern. Here's a breakdown of its components:

> [!abstract]+  **Components of the Implementation**
>- **VideoFile**: Represents a video file and contains methods for saving the file. It can be initialized with a filename and optional data.
>- **Codec**: An interface defining compression codec classes.
>- **OggCompressionCodec** and **MPEG4CompressionCodec**: Concrete classes implementing the Codec interface for Ogg and MPEG4 compression, respectively.
>- **CodecFactory**: A factory class responsible for extracting the appropriate codec for a given video file.
>- **BitrateReader**: Provides methods for reading and converting video data using specified codecs.
>- **AudioMixer**: Responsible for fixing audio-related issues in the converted video data.
>- **VideoConverter**: A Facade class that simplifies the process of converting video files. It provides a single method, `Convert`, which takes a filename and desired format (e.g., "mp4") as input and returns a converted VideoFile object.
>
>**Usage**:
>
>- The `Main` method demonstrates a real-world example by creating an instance of the VideoConverter and converting an Ogg video file to the MPEG4 format using the `Convert` method.
>- After conversion, the converted video file (mp4) is saved using the `Save` method.

> [!summary] 
> The Video Converter application encapsulates the complexity of codec selection, data conversion, and audio fixing behind a simple interface provided by the VideoConverter class, showcasing the Facade design pattern's usage.


### C# Example - [GitHub](https://github.com/valentynkt/PatternsExample/blob/master/Facade/Program.cs)

> [!example]- Server Side
>``` csharp
>    // Video File class
>    class VideoFile
>    {
>        private readonly string _filename;
>        private readonly byte[] _data;
>        public VideoFile(string filename)
>        {
>            _filename = filename;
>        }
>
>        public VideoFile(string filename, byte[] data)
>        {
>            _filename = filename;
>            _data = data;
>        }
>
>        public void Save()
>        {
>            // Implementation details...
>        }
>    }
>
>    // Ogg Compression Codec class
>    interface Codec
>    {
>        // Implementation details...
>    }
>    class OggCompressionCodec : Codec
>    {
>        // Implementation details...
>    }
>
>    // MPEG4 Compression Codec class
>    class MPEG4CompressionCodec : Codec
>    {
>        // Implementation details...
>    }
>
>    // Codec Factory class
>    class CodecFactory
>    {
>        public Codec Extract(VideoFile file)
>        {
>            // Implementation details...
>            return null; // Placeholder return value
>        }
>    }
>
>    // Bitrate Reader class
>    class BitrateReader
>    {
>        public static byte[] Read(string filename, Codec sourceCodec)
>        {
>            // Implementation details...
>            return new byte[0]; // Placeholder return value
>        }
>
>        public static byte[] Convert(byte[] buffer, Codec destinationCodec)
>        {
>            // Implementation details...
>            return new byte[0]; // Placeholder return value
>        }
>    }
>
>    // Audio Mixer class
>    class AudioMixer
>    {
>        public byte[] Fix(byte[] result)
>        {
>            // Implementation details...
>            return new byte[0]; // Placeholder return value
>        }
>    }
>
>    // Facade class: Video Converter
>    class VideoConverter
>    {
>        public VideoFile Convert(string filename, string format)
>        {
>            VideoFile file = new VideoFile(filename);
>            CodecFactory codecFactory = new CodecFactory();
>            var sourceCodec = codecFactory.Extract(file);
>
>            if (format == "mp4")
>            {
>                var destinationCodec = new MPEG4CompressionCodec();
>                var buffer = BitrateReader.Read(filename, sourceCodec);
>                var result = BitrateReader.Convert(buffer, destinationCodec);
>                result = new AudioMixer().Fix(result);
>                return new VideoFile(filename, result);
>            }
>            else
>            {
>                var destinationCodec = new OggCompressionCodec();
>                var buffer = BitrateReader.Read(filename, sourceCodec);
>                var result = BitrateReader.Convert(buffer, destinationCodec);
>                result = new AudioMixer().Fix(result);
>                return new VideoFile(filename, result);
>            }
>        }
>    }
>```

> [!example]- Client Side
>``` csharp
>static void Main(string[] args)
>{
>    ConceptualExample();
>}
>private static void RealWorldExample()
>{
>    VideoConverter converter = new VideoConverter();
>    VideoFile mp4 = converter.Convert("funny-cats-video.ogg", "mp4");
>    mp4.Save(); // Assuming VideoFile has a Save method
>}
>```

## Summary

>[!summary]- **Cheat Sheet**
>**Facade Pattern Cheat Sheet**
>**Purpose**:
>- Provides a simplified interface to a complex subsystem.
>- Reduces the complexity of accessing a subsystem by providing a unified interface, making the subsystem easier to use.
>
>**Components**:
>- **Facade**: Provides a simple interface to the complex logic of one or more subsystems, while keeping the subsystems separate and managing their dependencies.
>- **Subsystems**: Implements the subsystem functionality, which can be complex in nature. These operations are made available to the facade but hidden from the outside world.
>
>**Usage**:
>- Use when you want to provide a simple or reduced interface to a complex subsystem.
>- Use to divide a system into subsystems and reduce dependencies between clients and subsystems.
>
>**Benefits**:
>- Isolates clients from subsystem components, reducing the number of objects that clients deal with and making the subsystem easier to use and maintain.
>- Promotes weak coupling between the subsystem and its clients.
>- Often used in layered architectures to bring all complex dependencies into one place.
>
>**Common Scenarios**:
>- Libraries and frameworks that require a complex set of configurations can provide a simplified API to improve user experience.
>- Systems where the division into layers provides a clear distinction between components.


# References

https://refactoring.guru/design-patterns

