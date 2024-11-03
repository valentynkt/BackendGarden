---
created: 2024-07-26 19:15
aliases:
  - Attributes
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]]

# Attributes CSharp
## Overview

Attributes in C# provide a way to add declarative information to code elements like classes, methods, properties, and more. These metadata annotations can be used by the runtime or other tools to inspect, manipulate, or enforce certain behaviors in your application.

## Defining Custom Attributes

To define a custom attribute, create a class that inherits from `System.Attribute`.

> [!example] Custom Attribute Example
>``` csharp
>[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true)]
>public class MyCustomAttribute : Attribute
>{
>    public string Description { get; }
>    
>    public MyCustomAttribute(string description)
>    {
>        Description = description;
>    }
>}
>
>```

## Applying Attributes

Attributes can be applied to various code elements.

> [!example] Applying Attributes Example
>``` csharp
>[MyCustomAttribute("This is a custom attribute applied to a class.")]
>public class MyClass
>{
>    [MyCustomAttribute("This is a custom attribute applied to a method.")]
>    public void MyMethod()
>    {
>        // Method implementation
>    }
>}
>```

## Built-in Attributes

C# provides several built-in attributes:

> [!info] Common Built-in Attributes
> 
> - **[Obsolete]**: Marks a program element as obsolete.
> - **[Serializable]**: Indicates that a class can be serialized.
> - **[Conditional]**: Specifies that a method call or attribute should be included or omitted depending on a compilation symbol.

> [!example] Built-in Attribute Example
>``` csharp
>[Obsolete("This method is obsolete. Use NewMethod instead.")]
>public void OldMethod()
>{
>    // Method implementation
>}
>```

## Attribute Properties

Attributes can have properties to store additional data.

> [!example] Attribute with Properties Example
>
>``` csharp
>[AttributeUsage(AttributeTargets.Class)]
>public class InfoAttribute : Attribute
>{
>    public string Author { get; set; }
>    public double Version { get; set; }
>}
>
>[Info(Author = "John Doe", Version = 1.1)]
>public class SampleClass
>{
>    // Class implementation
>}
>```

For Additional Information have to get and read properties: [[Reflection CSharp|Reflection]]