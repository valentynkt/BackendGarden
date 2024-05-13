---
created: 2024-05-13 16:32
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Protocol Buffers]]

# Protobuf Syntax

Protocol Buffers (Protobuf) provide a flexible, efficient, and automated mechanism for serializing structured data. They are used extensively in communications protocols and data storage solutions.

## Basic Components

> [!summary] Data Types
> Protobuf supports several primitive data types and allows for custom defined structures:
> 
> - **Basic Types**: Includes `int`, `float`, `double`, `boolean`, and `string`.
> - **Enums**: Defines a set of possible values for a field.
> - **Messages**: Custom complex types that are made up of multiple fields and can be nested.


> [!summary] Field Rules
> Fields in a Protobuf message can be categorized based on their required presence:
> 
> - `optional`: Fields can be omitted. All fields in proto3 are optional by default.
> - `repeated`: Indicates an array of values. There is no limit on the number of values.
> - `oneof`: Allows only one of the fields within a set to be set at any time.


> [!summary] Unique Identifiers
> 
> Each field in a Protobuf message definition must be tagged with a unique number. These numbers are crucial as they are used in the message's binary format:
> 
> ``` protobuf
> message Student {
>   string id = 1;
>   string name = 2;
> }
> ```
> 


> [!example]- Syntax Example
> 
> Here's how you define a simple message in a `.proto` file:
> 
> ``` protobuf
> syntax = "proto3";
> 
> package demo;
> 
> message Student {
>   string id = 1;
>   string name = 2;
> }
> ```


> [!summary] Serialization
> 
> Data structured by [[Protocol Buffers]] is serialized into a compact binary format. For instance, a student record like `{ "id": "S101", "name": "test" }` would be serialized into a byte stream that may look abstracted as `124S101224test`. This includes:
> 
> - Field numbers and type information.
> - Data length and actual data.
> 
> 
> > [!important] 
> > - In the above message, 1 is Field Identifier, 2 is for data type- which is string, 4 is for the length of the data and next is the field value (4 characters)
> >- Again for field 2, the type is 2 (String) and 4 characters (test)
> >- We can clearly see that [[JSON]] is highly readable but the Protobuf takes less space when compared to [[JSON]]
> 
