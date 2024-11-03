---
created: 2024-07-27 21:33
aliases: 
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]]

# Shallow Copy and Deep Copy

When copying objects in C#, understanding the difference between shallow and deep copies is crucial. Using the assignment operator (`=`) typically results in copying the reference, not the object itself, except for value type fields. This means both objects will share the same memory address for reference types.

## Shallow Copy

A shallow copy creates a new object and copies the value type fields of the current object to the new object. For reference type fields, only the reference is copied, not the referred object itself. As a result, both the original and the clone refer to the same object for [[Reference Types CSharp|Reference Types]].

![[Pasted image 20231013014537.png]]

In the diagram above, `Global Rank` is a value type field, so a copy is created and stored in a different location. The `Name (Desc)` is a reference type field, so it points to the same memory location as the original object.

> [!example]- **Shallow Copy Example**
> 
> ```csharp
> public class Person
> {
>     public int GlobalRank;
>     public string Name;
> }
> 
> public Person ShallowCopy()
> {
>     return (Person)this.MemberwiseClone();
> }
> 
> Person person1 = new Person() { GlobalRank = 1, Name = "John" };
> Person person2 = person1.ShallowCopy();
> person2.GlobalRank = 2;
> person2.Name = "Doe";
> 
> // Output
> Console.WriteLine(person1.GlobalRank); // 1
> Console.WriteLine(person1.Name); // "Doe"
> ```

In this example, changing the value type (`GlobalRank`) in `person2` does not affect `person1`. However, changing the reference type (`Name`) affects both `person1` and `person2`.

## Deep Copy

A deep copy creates a new object and copies all fields of the current object to the newly created object, including both value and [[Reference Types CSharp|Reference Types]]. This results in a completely independent clone.

![[Pasted image 20231013014900.png]]

In the diagram above, both value type (`Global Rank`) and reference type (`Name (Desc)`) fields are copied to new memory locations.

> [!example]- **Deep Copy Example**
> 
> ```csharp
> public class Person
> {
>     public int GlobalRank;
>     public string Name;
> 
>     public Person DeepCopy()
>     {
>         Person clone = (Person)this.MemberwiseClone();
>         clone.Name = string.Copy(Name); // Assuming Name is mutable for demonstration
>         return clone;
>     }
> }
> 
> Person person1 = new Person() { GlobalRank = 1, Name = "John" };
> Person person2 = person1.DeepCopy();
> person2.GlobalRank = 2;
> person2.Name = "Doe";
> 
> // Output
> Console.WriteLine(person1.GlobalRank); // 1
> Console.WriteLine(person1.Name); // "John"
> ```

In this example, changes to both value and reference types in `person2` do not affect `person1`.

## Summary

> [!important]
> 
> - **Shallow Copy**: Copies value type fields to new memory locations but keeps reference type fields pointing to the same location.
> - **Deep Copy**: Copies both value and reference type fields to new memory locations, creating a completely independent clone.
> - **Strings**: Although strings are reference types, they are immutable, so shallow copying them does not lead to shared modifications.

> [!info] **References**
> 
> - See notes on [[Value-Reference Types]] and [[Memory Management CSharp|Memory Management]] for more details.

By understanding the differences between shallow and deep copies, you can make informed decisions about how to copy objects in your C# applications.
