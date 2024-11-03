---
created: 2024-07-25 18:22
aliases:
  - Value Types
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Data Types CSharp|Data Types]]

# Value Types

**Value types variables directly contain their data**. [[NET|.NET]] comes with several built-in value types:

Apart from the built-in value types, custom value types can be defined using the `struct` keyword. They can have both value types or reference types as fields or properties ([[Struct Data Type]]).

> [!example]- Struct Example
> ```csharp
> public struct ValueTypeRectangle
> {
>     public int Length { get; set; }
>     public int Width { get; set; }
>     public Shape MyShape { get; set; }
> 
>     public int Area()
>     {
>         int area = Length * Width;
>         Console.WriteLine($"length = {Length}");
>         Console.WriteLine($"width = {Width}");
>         Console.WriteLine($"shape = {MyShape.Name}");
>         Console.WriteLine($"area = {area}");
>         return area;
>     }
> }
> 
> public class Shape
> {
>     public string Name { get; set; }
> }
> ```

> [!important]
> - Value types are usually stored on the [[Memory Management CSharp#Stack| Stack]], which allows for fast access and allocation.
> - When a value type is assigned to another variable, **the values of its members are copied**. Changing one will not affect the other.

## Built-in Value Types

> [!info] **Numeric Types**
> 
> | Alias  | Type Name     | Type              | Size(bits) | Range           | Default Value |
> | ------ | ------------- | ----------------- | ---------- | --------------- | ------------- |
> | sbyte  | System.SByte  | signed integer    | 8          | -128 to 127     | 0             |
> | short  | System.Int16  | signed integer    | 16         | -32768 to 32767 | 0             |
> | int    | System.Int32  | signed integer    | 32         | -2^31 to 2^31-1 | 0             |
> | long   | System.Int64  | signed integer    | 64         | -2^63 to 2^63-1 | 0L            |
> | byte   | System.Byte   | unsigned integer  | 8          | 0 to 255        | 0             |
> | ushort | System.UInt16 | unsigned integer  | 16         | 0 to 65535      | 0             |
> | uint   | System.UInt32 | unsigned integer  | 32         | 0 to 2^32       | 0             |
> | ulong  | System.UInt64 | unsigned integer  | 64         | 0 to 2^63       | 0             |

> [!info] **Floating Point Types**
> 
> | Alias  | Type Name     | Size(bits) | Default Value |
> | ------ | ------------- | ---------- | ------------- |
> | float  | System.Single | 32         | 0.0f          |
> | double | System.Double | 64         | 0.0d          |

> [!info] **Decimal Types**
> 
> | Alias   | Type Name      | Size(bits) | Default Value |
> | ------- | -------------- | ---------- | ------------- |
> | decimal | System.Decimal | 128        | 0.0m          |

> [!info] **Character Types**
> 
> | Alias   | Type Name      | Size(bits) | Default Value |
> | ------- | -------------- | ---------- | ------------- |
> | char    | System.Char    | 16         | '\0'          |

> [!info] **Boolean Types**
> 
> | Alias | Type Name      | Values       |
> | ----- | -------------- | ------------ |
> | bool  | System.Boolean | True / False |

## Example

> [!example]-
> ```csharp
> // Example demonstrating various value types
> using System;
> namespace ValueTypeTest {
>     class GeeksforGeeks {
>         static void Main() {
>             char a = 'G';
>             int i = 89;
>             short s = 56;
>             long l = 4564;
>             uint ui = 95;
>             ushort us = 76;
>             ulong ul = 3624573;
>             double d = 8.358674532;
>             float f = 3.7330645f;
>             decimal dec = 389.5m;
> 
>             Console.WriteLine("char: " + a);
>             Console.WriteLine("integer: " + i);
>             Console.WriteLine("short: " + s);
>             Console.WriteLine("long: " + l);
>             Console.WriteLine("float: " + f);
>             Console.WriteLine("double: " + d);
>             Console.WriteLine("decimal: " + dec);
>             Console.WriteLine("Unsigned integer: " + ui);
>             Console.WriteLine("Unsigned short: " + us);
>             Console.WriteLine("Unsigned long: " + ul);
>         }
>     }
> }
> ```
> - **Output:**
> ```
> char: G
> integer: 89
> short: 56
> long: 4564
> float: 3.7330645
> double: 8.358674532
> decimal: 389.5
> Unsigned integer: 95
> Unsigned short: 76
> Unsigned long: 3624573
> ```

> [!info]
> Value types can’t be `null` unless they are declared as [[Nullable Types]]. Use the `default` operator to set the default value of each type.

