---
created: 2024-09-03 19:18
aliases:
  - Common Language Specification (CLS)
  - CLS
tags:
  - LearningIT
  - seed🌱
---

link: [[Common Language Runtime|CLR]]

# **Common Language Specification (CLS):**

## Overview

The **Common Language Specification (CLS)** is a set of rules and guidelines defined by Microsoft that language designers and developers must follow for their code to be interoperable across different .NET languages. The CLS ensures that all languages targeting the .NET runtime can interact with one another, promoting language interoperability.

## Key Concepts

> [!info] **Language Interoperability**
> 
> - **CLS Compliance**: To be CLS-compliant, a language must adhere to the rules set by the CLS. This means that the language must use only the features and data types that are common across all .NET languages.
> - **Cross-Language Integration**: With CLS-compliant code, a library written in one language (e.g., C#) can be used seamlessly in another language (e.g., VB.NET).

> [!info] **CLS Rules and Restrictions**
> 
> - **Data Types**: Only CLS-compliant data types (e.g., `int`, `bool`, `string`) should be used in public APIs.
> - **Naming Conventions**: Identifiers (such as variable names and method names) should follow case-insensitive naming to avoid conflicts across different languages.
> - **Method Overloading**: Overloaded methods should differ by more than just return type to be CLS-compliant.

## Importance of CLS

The CLS is crucial for ensuring that components developed in different .NET languages can work together. By following the CLS rules, developers can create libraries that are accessible and usable across all .NET languages, enhancing code reuse and collaboration.

## Best Practices

- **CLSCompliant Attribute**: Use the `[CLSCompliant(true)]` attribute to indicate that your assembly or code is CLS-compliant. This ensures that your code adheres to CLS rules.
- **Avoid Language-Specific Features**: When writing libraries meant for use across different languages, avoid using features that are not common across all .NET languages.

## Summary

The Common Language Specification (CLS) is a cornerstone of the .NET framework that enables seamless interoperability between different .NET languages. By following CLS guidelines, developers can ensure that their code is accessible and usable across the entire .NET ecosystem, promoting greater code reuse and collaboration.