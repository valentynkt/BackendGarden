---
created: 2024-05-08 23:11
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Web Data Handling and Formats]]


# XML (eXtensible Markup Language)

## Overview

XML is a flexible, structured markup language used in web development and for storing and transporting data. Developed in the late 1990s, it was designed to be both human-readable and machine-readable. XML is a W3C-recommended standard and is a fundamental technology in a wide range of data applications.

## Key Features of XML

> [!important]- **Key Features of XML**
> - **Self-descriptive**: XML allows the definition of custom tags and the creation of all kinds of data structures, such as lists, trees, and records. This makes it both versatile and adaptable to many different types of applications.
> - **Platform-agnostic**: Being text-based, XML files are platform-independent. They can be used across different operating systems and environments without compatibility issues.
> - **Extensible**: Users can create their own custom tags according to the needs of their application. There are no predefined tags as in HTML, giving XML the flexibility to serve in diverse applications.
> - **Strong Support for Unicode**: XML inherently supports Unicode, allowing almost any character from any human language to be used, which is crucial for internationalized applications.

## How XML Works

> [!example]- **How XML Works**
> 1. **Structure**: An XML document is structured as a tree of elements, each with tags and content. An element starts with a start-tag and ends with an end-tag, with content in between.
> 2. **Syntax Rules**: XML has strict syntax rules. It must begin with a declaration that defines the XML version and character encoding used in the document.
> 3. **Tags and Elements**: Tags in XML are user-defined and provide a way to label the data, which can then be easily interpreted by software.
> 4. **Attributes**: Elements can have attributes, which provide additional information about elements. Attributes are always located in the start-tag of an element.
> 5. **Parsing**: XML data needs to be parsed with an XML parser. This parser converts data into a structure that can be easily read by the application logic.

## [[XML Syntax]]
![[XML Syntax#XML Syntax]]

## [[JSON vs XML]]
![[JSON vs XML#Comparison]]

# References

https://blog.postman.com/what-is-xml/