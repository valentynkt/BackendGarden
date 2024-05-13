---
created: 2024-05-09 00:12
aliases:
  - JavaScript Object Notation
  - JavaScript Object Notation(JSON)
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Web Data Handling and Formats]]

# JSON (JavaScript Object Notation)

![[Pasted image 20240509001233.png]]
## Overview

JSON (JavaScript Object Notation) is a lightweight, text-based, language-independent data interchange format, derived from JavaScript but used by many programming languages. JSON is easy for humans to read and write, and easy for machines to parse and generate.

## Key Features of JSON

> [!important]- Key Features
> - **Text-based**: JSON is purely text, which can be read and parsed by a wide variety of programming languages.
> - **Human-readable**: The format is self-describing and easy to understand.
> - **Lightweight**: JSON structures are compact, which makes them ideal for network transmissions.
> - **Language-Independent**: Though derived from JavaScript, JSON is supported natively or through libraries in most major programming languages.
> 

## JSON Syntax

> [!info]- JSON Syntax
> JSON is built on two structures:
> 
> 1. **Objects**: A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
> 2. **Arrays**: An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.
> 
> Here is a basic example of JSON:
> 
> ```json
> {
>   "name": "John Doe",
>   "age": 30,
>   "isEmployed": true,
>   "address": {
>     "street": "1234 Elm St",
>     "city": "Somewhere",
>     "state": "CA"
>   },
>   "phoneNumbers": [
>     {"type": "home", "number": "212 555-1234"},
>     {"type": "fax", "number": "646 555-4567"}
>   ]
> }
> ```
> 
> **Data Types Supported:**
> - **Strings**: Must be written in double quotes.
> - **Numbers**: Integer or floating-point.
> - **Objects**: An unordered set of name/value pairs.
> - **Arrays**: An ordered collection of values.
> - **Booleans**: `true` or `false`.
> - **Null**: An empty value, written as `null`

## [[JSON vs XML]]
![[JSON vs XML#Comparison]]