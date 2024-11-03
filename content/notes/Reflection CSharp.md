---
created: 2024-07-26 19:29
aliases:
  - Reflection
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]]

# Reflection CSharp

## Overview

Reflection in C# is a powerful feature that allows for the inspection of metadata, discovery of types, and dynamic invocation of methods at runtime. This capability enables developers to write more flexible and dynamic applications.

## Key Concepts

> [!summary] **Key Concepts**
> 
> - **Assembly**: A compiled code library used for deployment, versioning, and security. Assemblies contain metadata about the types defined in the assembly.
> - **Type**: Represents type declarations: classes, interfaces, arrays, and value types.
> - **MemberInfo**: An abstract base class for accessing information about members of a class, such as methods, properties, fields, and events.

## Using Reflection

> [!info]- Loading an Assembly
> Assemblies can be loaded at runtime using the `Assembly.Load` method.
> 
> >[!example] Loading an Assembly Example
> >``` csharp
> >using System;
> >using System.Reflection;
> >
> >Assembly assembly = Assembly.Load("MyAssembly");
> >Console.WriteLine("Assembly Loaded: " + assembly.FullName);
> >```

> [!info]- Getting Types
> Once an assembly is loaded, you can retrieve the types defined within it.
> 
> > [!example] 
> > 
> > ``` csharp
> > Type[] types = assembly.GetTypes();
> > foreach (Type type in types)
> > {
> >     Console.WriteLine("Type: " + type.FullName);
> > }
> > ```

> [!info]- Creating Instances
> Reflection allows for the creation of instances of types dynamically.
> 
> > [!example] Creating Instances Example
> >``` csharp
> >Type myType = assembly.GetType("MyNamespace.MyClass");
> >object instance = Activator.CreateInstance(myType);
> >```

> [!info]- Accessing Members
> You can access members of a type such as methods, properties, and fields.
> 
> > [!example] Accessing Members Example
> >``` csharp
> >MethodInfo methodInfo = myType.GetMethod("MyMethod");
> >PropertyInfo propertyInfo = myType.GetProperty("MyProperty");
> >FieldInfo fieldInfo = myType.GetField("MyField");
> >```

> [!info]- Invoking Methods
> Methods can be invoked dynamically using reflection.
> 
> > [!example] Invoking Methods Example
> > ``` csharp
> > object result = methodInfo.Invoke(instance, new object[] { "parameter1", 123 });
> > Console.WriteLine("Result: " + result);
> > ```

> [!info]- Accessing Properties
> Properties can be accessed and modified dynamically.
> 
> > [!example] Accessing Properties Example
> >``` csharp
> >object propertyValue = propertyInfo.GetValue(instance);
> >propertyInfo.SetValue(instance, "newValue");
> >```

> [!info]- Reflection and Attributes
> Reflection is commonly used to read custom attributes applied to code elements.
> 
> > [!example] Reading Attributes Example
> >``` csharp
> >Attribute[] attrs = Attribute.GetCustomAttributes(myType);
> >foreach (Attribute attr in attrs)
> >{
> >    Console.WriteLine("Attribute: " + attr);
> >}
> >```

## Performance Considerations

Reflection can be slower than direct code invocation due to the overhead of metadata inspection and dynamic invocation. Use reflection sparingly, and prefer direct access whenever possible.

## Security Considerations

Reflection can potentially be used to bypass access restrictions and expose private members. Ensure that reflection usage adheres to security best practices and avoids exposing sensitive data or operations.

## Best Practices

> [!info] **Best Practices**
> 
> - **Limit Reflection Usage**: Use reflection only when necessary to avoid performance overhead.
> - **Cache Reflection Results**: Cache metadata information to improve performance for repetitive reflection operations.
> - **Security Awareness**: Be mindful of security implications and avoid exposing private or sensitive data.

## Summary

Reflection in C# provides a powerful mechanism for inspecting and interacting with types at runtime. By leveraging reflection, developers can create more dynamic and flexible applications, though it is important to consider performance and security implications. For further reading on related topics, explore [[Attributes CSharp]].