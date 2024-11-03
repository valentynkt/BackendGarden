---
created: 2024-07-27 19:58
aliases:
  - Class vs Record
  - Struct vs Record
  - Class vs Struct
tags:
  - LearningIT
  - seed🌱
---

link: [[Data Types CSharp|Data Types]]


# Class vs Struct vs Record

## Summary

- **Class**: A construct that enables you to create custom types by grouping together variables, methods, and events.
- **Struct**: A value type typically used to [[Encapsulation|Encapsulate]] small groups of related variables.
- **Record**: A class or struct that provides special syntax and behavior for working with data models.
- **Record Struct**: Similar to Record, but specifically for structs, not classes.

| Feature             | Class                              | Struct                               | Record                              | Record Struct                      |
| ------------------- | ---------------------------------- | ------------------------------------ | ----------------------------------- | ---------------------------------- |
| **Memory Allocation** | Stored on the heap                 | Stored on the stack                  | Stored on the heap                  | Stored on the stack                |
| **Performance**     | Slightly slower                    | Faster access                        | Slightly slower                     | Faster access                      |
| **Mutability**      | Mutable                            | Immutable/Mutable                    | Typically immutable                 | Typically immutable                |
| **Inheritance**     | Supported                          | Not supported                        | Supported                           | Not supported                      |
| **Encapsulation**   | Supported (private fields)         | Limited (fields are public by default) | Supported (private fields)          | Limited (fields are public by default) |
| **Default Constructors** | Generated if not defined         | Not generated                        | Generated if not defined            | Not generated                      |

## Key Points

- **Class**: Best for complex data structures that require inheritance and encapsulation.
- **Struct**: Best for small, simple data structures that benefit from stack allocation and value semantics.
- **Record**: Ideal for immutable data models with value-based equality semantics.
- **Record Struct**: Combines the benefits of records and structs for immutable value types stored on the stack.

## [[Class Data Type CSharp|Class]]
![[Class Data Type CSharp#Key Concepts]]
## [[Struct Data Type|Struct]]
![[Struct Data Type#Key Concepts]]

## [[Record Data Type|Record]]
![[Record Data Type#Key Concepts]]


# Reference:
[Struct vs. Record vs. Class in C# | Syncfusion Blogs](https://www.syncfusion.com/blogs/post/struct-record-class-in-csharp.aspx)
[C# — Class, Struct, Record, Record Struct | by GM Fuster | Nerd For Tech | Medium](https://medium.com/nerd-for-tech/c-class-struct-record-record-struct-d3b21c57d9bb)


 