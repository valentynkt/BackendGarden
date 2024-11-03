---
created: 2024-07-26 18:36
aliases:
  - Indexers
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]]

# Indexers CSharp

## Overview

Indexers in C# allow instances of a class or struct to be indexed just like arrays. They enable objects to be indexed in a similar manner to arrays, providing a more intuitive way to access data contained within the object.

## Syntax

An indexer is defined using the `this` keyword, followed by a parameter list in square brackets. The parameter list specifies the type and number of parameters that are used to index into the collection.

``` csharp
public class SampleCollection<T>
{
    private T[] arr = new T[100];
    
    public T this[int i]
    {
        get { return arr[i]; }
        set { arr[i] = value; }
    }
}
```

## Usage

Indexers allow objects to be accessed using array-like syntax.

> [!example]- Indexer Usage Example
>``` csharp
>public class Program
>{
>    public static void Main()
>    {
>        SampleCollection<string> stringCollection = new SampleCollection<string>();
>        stringCollection[0] = "Hello, World!";
>        Console.WriteLine(stringCollection[0]); // Output: Hello, World!
>    }
>}
>
>```


## Key Features

> [!info] **Key Features**
> 
> - **Convenience**: Indexers provide a convenient way to access elements within a collection or array-like structure.
> - **Read/Write**: Indexers can be used to get and set values.
> - **Multiple Parameters**: Indexers can have multiple parameters, allowing for more complex indexing schemes.

## Read-Only and Write-Only Indexers


> [!info] Read-Only Indexers
> A read-only indexer only has a `get` accessor.
> 
> ``` csharp
> public class ReadOnlyCollection<T>
> {
>     private T[] arr = new T[100];
>     
>     public T this[int i]
>     {
>         get { return arr[i]; }
>     }
> }
> ```


> [!info] Write-Only Indexers
> A write-only indexer only has a `set` accessor.
> 
> ``` csharp
> public class WriteOnlyCollection<T>
> {
>     private T[] arr = new T[100];
>     
>     public T this[int i]
>     {
>         set { arr[i] = value; }
>     }
> }
> ```



## Example with Multiple Parameters

Indexers can use multiple parameters for indexing.

> [!example]- Multiple Parameters Example
>
>``` csharp
>public class Matrix
>{
>    private int[,] matrix = new int[10, 10];
>    
>    public int this[int row, int col]
>    {
>        get { return matrix[row, col]; }
>        set { matrix[row, col] = value; }
>    }
>}
>
>public class Program
>{
>    public static void Main()
>    {
>        Matrix m = new Matrix();
>        m[0, 0] = 1;
>        Console.WriteLine(m[0, 0]); // Output: 1
>    }
>}
>
>```


## Summary

Indexers in C# provide a way to access elements within an object using array-like syntax. They are useful for creating intuitive and convenient access patterns for collections and other data structures. Indexers can be read-only, write-only, or read-write, and they can accept multiple parameters for more complex indexing scenarios.