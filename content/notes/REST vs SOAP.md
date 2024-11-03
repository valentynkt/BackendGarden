Date and Time: <u> 2023-10-19 18:37 </u>
Status: #LearningIT
Tags: [[API]], [[REST API]], [[SOAP API]], [[HTTP]], [[XML]]

# REST vs SOAP

## Intro
![[Pasted image 20231019182915.png]]

A RESTful approach is the better option for applications that require CRUD operations (create, read, update, and delete). A good example is a content management system (CMS), which uses standard [HTTP methods](https://blog.postman.com/what-are-http-methods/)—[POST](https://www.postman.com/api-glossary/#post), [GET](https://www.postman.com/api-glossary/#get), [PUT](https://www.postman.com/api-glossary/#put), and [DELETE](https://www.postman.com/api-glossary/#delete)—to create and maintain entities. Additionally, REST’s ability to cache responses makes it a good fit for high-demand applications where certain requests are made frequently. Finally, REST is very popular, and companies that use a RESTful design for public APIs are able to cater to a wider range of developers who have dealt with REST before.

--- 
On the other hand, systems that have strict [API security](https://www.postman.com/api-platform/api-security/) requirements and regulations may benefit from a SOAP-based approach because of its built-in security measures. For instance, its support for WS-Security and strongly-typed contracts make SOAP a better fit for systems that send and receive highly sensitive data, such as financial and healthcare information.

## Benefits of [[REST API]]
APIs that are designed according to REST principles are referred to as “RESTful APIs,” and they have the following features in common:

``` ad-important
- **Statelessness**: The server shouldnot need to store any information about the client’s state. Rather than storing [[Session Management|session]] information, a client should provide all the necessary details in its request.
- **Separation of concerns**: The client and server should be properly decoupled from each other, which allows each one to evolve independently.
- **Layered architecture**: Software architecture should be split into layers with their own distinct purpose, which helps keep the system modular and maintainable.
- **Cache support**: Responses can be cached on the client to improve an application’s performance and remove the need to re-process repeated requests.
- **Consistent interface**: [HTTP](https://www.postman.com/api-glossary/#http) methods like GET, POST, and DELETE help make interactions between clients and servers simple and consistent.
- **Emphasis on resources**: RESTful APIs are resource-based, rather than method-based or function-based. A resource can be an object, entity, or data within a system. Resources are uniquely identified using a Uniform Resource Identifier (URI), and HTTP methods are used to perform [CRUD](https://www.postman.com/api-glossary/#crud) operations (create, read, update, delete) on them.
- **Support for standard media types**: Resources are represented using standard media types, such as [JSON](https://www.postman.com/api-glossary/#json), [[XML]] , or plain text. Clients can request that servers deliver a response in their preferred media type.
```

![[Pasted image 20231019191135.png]]

**PROS**
``` ad-success

REST provides a straightforward approach to seamless communication between clients and servers. Following the basic principles of this architectural style can lead to a variety of benefits, including:

- **Scalability**: The stateless nature of REST APIs means that the session state does not need to be shared or synchronized across various instances, which makes horizontal scaling easier. As a result, you can add additional servers during peak traffic without any disruption to functionality or risk of losing any important session state.
- **Universal conventions**: Applications that follow standardized, universal conventions provide a much better developer experience and improve the system’s maintainability. Having a consistent interface also improves interoperability and makes it easier for various systems to communicate with one another.
- **Interoperability**: Any client that supports HTTP can use a RESTful API, regardless of its platform or programming language.
- **Improved performance**: Latency and server load can be drastically reduced by caching server responses. This leads to better performance and user experience, as well as cost savings from minimized computational overhead.

```

**CONS**
``` ad-bug

- **Incompatibility with real-time functionality**: RESTful APIs are not the right fit for applications that require live data because of their request-response-based approach. In a request-response model, the client must send a request to the server and wait for the server’s response, which is inherently inefficient for real-time applications.
- **Significant overhead with binary data transfer**: When large binary files, like images or video, are sent via a RESTful API, they must be encoded and decoded. This overhead can cause an increase in bandwidth consumption and slower transfers, which introduces a risk of timeouts. An alternative protocol and design would be better suited for this use case.
- **Reliance on HTTP**: REST was designed with HTTP in mind, which is why it is typically implemented using HTTP. Its natural alignment with HTTP may restrict the range of devices to which a RESTful API can cater.
```

## Benefits of [[SOAP API]]
Simple Object Access Protocol (SOAP) is a protocol for exchanging information between systems over the Internet, using [[XML]] as its message format. Unlike REST, SOAP follows a very strict structure. It uses standardized contracts such as Web Service Definition Language (WSDL) to specify the functionalities of an API.
![[Pasted image 20231019191531.png]]

**PROS**
``` ad-success
- **Extensibility**: Developers can extend and add functionality as needed by using [[XML]] namespaces and custom header elements.
- **Support for many protocols**: Unlike REST, which is more commonly used with the HTTP protocol, SOAP can be used with a wide range of protocols such as [[HTTP]], [[SMPT]], and even specialized protocols like Microsoft Message Queuing ([[MSMQ]]).
- **Strong typing**: The [[XML]] schema is used to define the structure of messages and their data types. This helps improve data validation, detect errors, and reduce the potential for communication errors.
- **Standardized error handling**: SOAP uses a fault element to communicate errors that occur during message processing. A standardized approach to error handling allows different systems to parse and handle errors in a consistent manner.
- **Heightened security**: SOAP has built-in security standards, such as WS-Security, that ensure messages can be sent and received securely. It also supports security measures such as digital signatures, tokens, and encryption to ensure the integrity and confidentiality of messages.
```

**CONS**
``` ad-bug
- **Less performant**: SOAP messages can be quite large due to their verbose [[XML]]-based structure, which can lead to greater bandwidth usage and slower performance.
- **Complex**: SOAP can introduce complexity into a system due to its strongly typed and extensible nature. REST offers a far simpler approach.
- **Less intuitive**: SOAP is centered around actions and methods, which many find less intuitive than REST’s resource-based approach.
- Does not support caching API calls
```

### [[SOAP API]] Use Cases

- **Transfers at banks:** Bank transfers require communication between different banks or bank branches, which may involve multiple calls to different web services. Security is also extremely important for this use case.
- **Booking flights:** Much like with bank transfers, different web services must be called to check availability and flight pricing information.
- **Billing services:** People who work in fields like telecommunication operations need to connect with numerous systems to generate billing information, which often includes sensitive data.
- **Navigation companies:** Shipping and transport companies need to combine information from lots of different sources to calculate the best routes possible.
- **City management:** SOAP APIs connect many city management processes to ensure the city is run properly. All of these processes— from traffic light management to sewage system operations—need to work in a predictable way.
## Summary

``` ad-important
The **SOAP** protocol provides a much more solid foundation for APIs than the looser **REST** approach, but it can come with a cost. SOAP can make it slower to evolve and iterate APIs, and it can take longer to onboard new developers who aren’t familiar with SOAP’s older methods. Still, it’s a cost that is worthwhile for backbone applications and integrations that the enterprise depends upon. Remember that national postal service comparison? With its envelope, encoding, request, and response structure (as well as versatility with protocols like **[[HTTP]]**, **[[TCP]]**, **[[UPD]]**, and **[[SMTP]]**), SOAP remains a dependable way to define and operate APIs across the enterprise at scale.
```
# Reference:
https://blog.postman.com/soap-vs-rest/


 