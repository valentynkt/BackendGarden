Date and Time: <u> 2023-10-30 17:10 </u>
Status: #LearningIT
Tags: [[API]]

# Protocol Buffers
Protocol buffers are a method of serializing data like [[XML]] and JSON and are very efficient and super fast over the network. Shortly **Protobuf**

![[Pasted image 20231030171218.png]]
## What is Protobuf
To make remote procedure calls, we need a way to transform objects (payload) in memory into bytes such that they can be transmitted to the other systems as shown below. There are many names for it: [[Serialization]], marshaling, encoding, etc

![[Pasted image 20231030174353.png]]

A lot of programming languages support these mechanisms by default and they often use JSON format. It is a human-readable format and is widely used. ==But JSON tends to be slower and get bigger in size when we use it with big data or when a number of microservices communicate with each other.== JSON also has forward and backward compatibility issues.

To address these issues, google introduced Protobuf in 2008. Protobuf is an Interface Definition Language that is language-neutral and platform-neutral. It is a way of serializing structured data and transmitting it over the network Using Protobuf, binary is transmitted which improves the speed of transmission compared to JSON’s string format. It is one of the important pillars of [[gRPC API]] protocol along with [[HTTP 2.0|HTTP/2]].

## Protobuf Data Serialization
With protobuf, we define the message format in a .proto file. Then we use the protobuf compilers to generate the client and service side code to encode and parse the data as shown below
![[Pasted image 20231030174749.png]]
## Protobuf steps
![[Pasted image 20231030175233.png]]
``` ad-important
1. **Create a .proto text file**
In a _.proto_ text file, we define a schema for the object which can also embed documentation inside.
2. **Compile the .proto file to a language-specific source file**
Using a _protoc compiler_, the .proto file is automatically compiled into source code in any of the supported languages like C#,Java,Python, Objective-C, Ruby, and more.
**3. Generate executable package**
The executable package is generated and deployed along with the source files generated from the Protobuf code. At runtime, messages are compressed and serialized in binary format.
**4. Deserialize the data by the recipient**
The recipient uses the same package structure to deserialize the transmitted data back to the original form
```

## Protobuf syntax

When defining `.proto` files, we can specify that a field is either `optional` or `repeated` (in both proto2 and proto3). proto3 has a new type called singular.

Protocol buffers support the usual primitive data types, such as integers, booleans, and floats.
A field can also be of:

- A `message` type, which nests parts of the definition. This is like a class
- An `enum` type, so you can specify a set of values to choose from.
- A `oneof` type, which you can use when a message has many optional fields and at most one field will be set at the same time.
- A `map` type, to add key-value pairs to your definition.

Field numbers cannot be repurposed or reused. If we delete a field, we should reserve its field number to prevent someone from accidentally reusing the number.

The following code samples show you an example of this flow in Java.

eg: file name **student.proto**

``` java
syntax = "proto3";
  
package demo;
  
message Student{
optional string id = 1;
optional string name = 2;
}
```

In the above code, we have mentioned the version of proto to be proto3. We also assigned a package under which the source files are generated. Then we defined the message field with the name Student which has 2 attributes.

``` json
{ id: “S101”, name: “test” }
```
If we provide the values above, then the data transmitted will look like below


Serialized data
**124S101**224test

``` ad-important
- In the above message, 1 is Field Identifier. 2 is for data type- which is string 4 is for the length of the data and next is the field value (4 characters)
- Again for field 2, the type is 2 (String) and 4 characters (test)
- We can clearly see that JSON is highly readable but the Protobuf takes less space when compared to [JSON data](https://javarevisited.blogspot.com/2016/09/top-5-json-library-in-java-JEE.html)
```
## Advantages
``` ad-success
- **Optimization**: When using Protocol Buffers for sending messages over the network, the payloads are serialized in binary. So they are much smaller when compared to [[XML]] or JSON. This will save you bandwidth and improve network performance, especially in a microservice architecture where there are a lot of network calls.
- **Efficient parsing:** Parsing with Protocol Buffers is less CPU-intensive because data is represented in a binary format which minimizes the size of encoded messages. This means that message exchange happens faster, even in devices with a slower CPU like IoT or mobile devices.
- **Schema and Validation:** By forcing programmers to use schema, we can ensure that the message doesn’t get lost between applications and that the structure of the data stays intact on another service as well. Protocol Buffer validates the value type of the given data during encoding and decoding, ensuring data integrity during data transmission.
- **Language Support**: Availability in many programming languages
- **Backward Compatability**: By using the unique field number, Protocol Buffer offers excellent backward compatibility. Users can easily add or delete a field on the sender/recipient side without worrying about compatibility issues.
```
# Reference:
https://medium.com/javarevisited/what-are-protocol-buffers-and-why-they-are-widely-used-cbcb04d378b6


 