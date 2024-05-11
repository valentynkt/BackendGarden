---
created: 2024-05-09 17:21
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Web Data Handling and Formats]]

# UTF-8 (8-bit Unicode Transformation Format)

## Overview

UTF-8 is a variable-width character encoding used for electronic communication. Formulated to encode all 1,112,064 valid character code points in Unicode using one to four one-byte (8-bit) code units, UTF-8 has become the dominant character encoding for the World Wide Web, accounting for more than 90% of all web pages.


> [!important]- Key Features of UTF-8
> - **Compatibility with [[ASCII]]**: UTF-8 is backward compatible with ASCII. ASCII characters only require one byte in UTF-8, which simplifies handling ASCII texts.
> - **Self-synchronization**: The design of UTF-8 allows the start of any character in the byte sequence to be recognized without requiring backward scanning. This makes it easier to recover from partial or incorrect transmissions.
> - **Byte order independence**: Unlike UTF-16 and UTF-32, UTF-8 does not require byte order marking (BOM), thus avoiding the complications of endianess.
> - **Efficient use of space**: UTF-8 uses only as much space as needed per character, ranging from 1 to 4 bytes, making it space-efficient for texts containing primarily ASCII characters.


> [!important]- UTF-8 Encoding Mechanism
> UTF-8 encodes characters using a series of bytes where each byte contains a group of bits that represent the character. Here’s how characters are represented:
> - **1-byte characters**: Standard ASCII, 0-127 (0x00-0x7F), occupy a single byte, preserving the full ASCII table.
> - **2-byte characters**: Needed for characters from Latin-derived alphabets, Greek, Cyrillic, Coptic, Armenian, Hebrew, and Arabic scripts.
> - **3-byte characters**: Basic Multilingual Plane (BMP), including most common characters and symbols.
> - **4-byte characters**: Rarely used characters from the Supplementary Planes, which include historic scripts, musical notation, mathematical symbols, etc.


> [!example]- Example of Encoding
> 
> The character `€` (Euro sign) is encoded in UTF-8 as three bytes:
> ```plaintext
> 0xE2 0x82 0xAC
> ```


> [!info]- Common Uses of UTF-8
> - **Web development**: As the default encoding for HTML5 and other web standards.
> - **File encoding**: Preferred encoding for text files in open-source and modern applications.
> - **Databases**: Often used for storing text to support a diverse set of languages and characters.


> [!success]- Advantages of UTF-8
> - **Universal support**: UTF-8 can represent any character in the Unicode standard, making it suitable for globalized environments.
> - **Optimized performance**: Generally requires less space than UTF-16 for texts primarily in ASCII, which is common for most programming languages and protocols.
> - **Widely adopted**: Supported across most platforms, programming languages, and applications, enhancing interoperability.
