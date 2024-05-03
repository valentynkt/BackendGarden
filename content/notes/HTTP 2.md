Date and Time: <u> 2023-10-30 17:05 </u>
Status: #LearningIT
Tags: [[API]], [[OSI model]], [[TCP]], [[HTTP]]

# HTTP 2
[[HTTP]]/2 is the new version of the HTTP protocol which was launched in 2015 to make applications faster and more robust by addressing the drawbacks of the HTTP/1.1 protocol. HTTP/2 has been picking up fast and most browsers support HTTP/2 nowadays.
## HTTP/2 Features

``` ad-important
Some key features of HTTP/2 are as follows

- **Multiplexing**: Enable request and response multiplexing which permits multiple requests and responses to be sent at the same time in a single [[TCP]] connection
- **Header Compression**: It compresses headers that have been requested previously to make things more efficient
- **Stream prioritization**: This allows for the exchange of successive streams at one time
- **Server push**: The server can send additional information to the client without the client having to request each one explicitly.
- **Increased security**: HTTP/2 is supported through encrypted connections
- **Server-side backward compatibility:** To make sure that servers can still support clients that use HTTP/1.1 without any changes.
- **Compatibility** with the methods, status codes, URIs, and header fields defined by the HTTP/1.1 standard
```

## HTTP/2 Deep Dive

HTTP/2 supports binary format and header compression and provides superior performance with low latency. It maintains a single [[TCP]] connection between the client and server and avoids the overhead of setting up multiple [[TCP]] connections. It supports full request and response multiplexing and hence we can achieve higher throughput with low latency with better network utilization. HTTP/2 also compresses the headers using HPACK to reduce the overhead cost and improve the performance.

## HTTP/2 Deep Dive

HTTP/2 supports binary format and header compression and provides superior performance with low latency. It maintains a single [TCP connection](https://medium.com/javarevisited/5-best-books-and-courses-to-learn-computer-networking-tcp-ip-and-udp-protocols-5a0e4dce75fa) between the client and server and avoids the overhead of setting up multiple [TCP connections.](https://javarevisited.blogspot.com/2014/07/9-difference-between-tcp-and-udp-protocol.html) It supports full request and response multiplexing and hence we can achieve higher throughput with low latency with better network utilization. HTTP/2 also compresses the headers using HPACK to reduce the overhead cost and improve the performance.
![[Pasted image 20231030165812.png]]

The new **binary framing** mechanism changes how the data is exchanged between the client and server. Lets us look at the terminologies used in HTTP/2

- **_Frame_**: The smallest unit of communication in HTTP/2. It contains a frame header that identifies the stream to which frame it belongs, which at a minimum identifies the stream to which the frame belongs. It carries different types of data like **HEADERS, SETTINGS, PRIORITY, DATA, etc.**
- **_Stream_**: It is the bidirectional flow of bytes within an established connection that carries multiple bidirectional messages. Each stream has a unique identifier.
- **_Message_**: A complete sequence of frames that map to a logical request or response message. Each message, which can be a request or response, is broken down into multiple binary frames.

---
A single [[TCP]] connection that carries multiple bidirectional streams.
![[Pasted image 20231030170027.png]]
As seen above, the streams do not actually flow separately. Streams consist of multiple requests or response messages which in turn contain multiple frames. These frames will be reassembled when reaching the other side. Thanks to the binary framing layer, stream multiplexing is possible in HTTP/2. This new binary framing layer in HTTP/2 allows the client and server to break down an HTTP message into independent frames, interleave them, and then reassemble them on the other end.

![[Pasted image 20231030170232.png]]

The above diagram shows that there are multiple streams in flight within the same connection. The client is sending a DATA frame (stream 5) to the server, while the server is transmitting an interleaved sequence of frames to the client for streams 1 and 3. Overall there are 3 streams in a single TCP connection.

## Benefits HTTP/2
The concept of breaking down an HTTP message into independent frames, interleaving then reassembling them on the other end is the most important feature of HTTP/2 that brings numerous performance benefits across the entire stack of all web technologies, enabling us to

``` ad-important
- Use a single connection to deliver multiple requests and responses in parallel.
- Interleave multiple requests in parallel without blocking the requests.
- Interleave multiple responses in parallel without blocking the requests.
- Remove unnecessary HTTP/1.x workarounds (Like Domain Sharding and Content concatenation)
- Faster page loading by eliminating unnecessary latency and improving utilization of available network capacity.
```
## HTTP/2 vs HTTP/1.1
![[Pasted image 20231030170639.png]]

# Reference:
https://medium.com/javarevisited/everything-you-need-to-know-about-http-2-protocol-e64bfffafe47


 

