---
created: 2024-07-26 18:05
aliases:
  - Nullable Reference Types
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]], [[Nullable Types]]


# Reference Nullable Types

## Overview

Nullable reference types in C# help prevent null reference exceptions by allowing developers to explicitly specify whether a [[Reference Types CSharp|Reference Type]] variable can hold a null value. Introduced in C# 8.0, this feature enhances code predictability and robustness through compiler-enforced null safety.

## Enabling Nullable Reference Types

Nullable reference types are disabled by default. To enable them, you can configure your project file or add a directive at the top of your code files.

> [!info] 
> Enabling in Project File Add the following line to your `.csproj` file:
> 
> ``` xml
> <PropertyGroup>   <Nullable>enable</Nullable> </PropertyGroup>
> ```
> 


> [!info]
>  Enabling in Code Add the following directive at the top of your C# files:
> 
>``` csharp
>#nullable enable
>```

## Syntax and Usage


When nullable reference types are enabled, distinguish between nullable and non-nullable reference types using the `?` annotation. When nullable are disabled, reference types can contain null without using `?` annotation 

### Non-Nullable Reference Type

A non-nullable reference type cannot hold a null value. The compiler enforces that it must be initialized with a non-null value.

``` csharp
string nonNullableString = "Hello, World!";
// nonNullableString = null; // Compiler warning
```

### Nullable Reference Type

A nullable reference type can hold a null value, and the compiler helps track null assignments and dereferences.

``` csharp
string? nullableString = null;
nullableString = "Hello, Nullable World!";
```

## Nullability Annotations

### Annotations

Use the `?` annotation to indicate that a variable can hold a null value. Removing the `?` enforces non-nullability.

``` csharp
string nonNullable = "Cannot be null";
string? nullable = null;
```
### Warnings and Annotations

The compiler generates warnings for potential null assignments to non-nullable reference types or dereferencing a nullable reference type without checking for null.

``` csharp
string? name = GetName();
Console.WriteLine(name.Length); // Warning: possible dereference of null

if (name != null)
{
    Console.WriteLine(name.Length); // No warning
}
```

## Null Forgiving Operator

The null forgiving operator (`!`) suppresses compiler warnings when you are sure a nullable reference type is not null.

``` csharp
string? nullableString = GetNullableString();
Console.WriteLine(nullableString!.Length); // No warning, but use with caution
```

## Summary

Nullable reference types in C# provide a robust way to manage nullability, enhancing the safety and clarity of your code. By enabling nullable reference types and using nullability annotations, developers can prevent null reference exceptions and create more maintainable codebases.