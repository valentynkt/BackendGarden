---
created: 2024-07-27 21:21
aliases:
  - GetEnumerator
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]], [[Iterator Pattern]]

# IEnumerator
## Overview

`IEnumerator` is an interface in C# that provides the mechanics for iterating over a collection. It includes methods and properties to navigate through the collection and access its elements.

## Key Members

> [!important]
> 
> - **Current**: Gets the current item in the collection.
> - **MoveNext()**: Advances to the next item. Returns `false` if the end of the collection is reached.
> - **Reset()**: Resets the enumerator to its initial position.

## Interface Definition

> [!example]- **IEnumerator Interface**
> 
> ```csharp
> public interface IEnumerator
> {
>     object Current { get; }
>     bool MoveNext();
>     void Reset();
> }
> 
> public interface IEnumerator<out T> : IEnumerator, IDisposable
> {
>     new T Current { get; }
> }
> ```

## How It Works

![[Pasted image 20231108192421.png]]

### MoveNext()

- Moves the cursor to the next position in the collection.
- Returns `true` if the cursor points to a valid position after moving; returns `false` if it has passed the end of the collection.

### Current

- Returns the value at the current cursor position.

### Reset()

- Resets the cursor to its initial position, before the first element in the collection.

## Example Usage

> [!example]- **Using IEnumerator**
> 
> ```csharp
> List<string> cities = new List<string>() { "New York", "London", "Paris", "Tokyo" };
> IEnumerator<string> enumerator = cities.GetEnumerator();
> 
> while (enumerator.MoveNext())
> {
>     Console.WriteLine(enumerator.Current); // Outputs: New York, London, Paris, Tokyo
> }
> enumerator.Reset();
> ```



## Related Topics

> [!summary]
> 
> - **[[IEnumerable]]**: `IEnumerable` uses `IEnumerator` to provide iteration over a collection.
> - **[[Yield Return]]**: Simplifies the implementation of `IEnumerator` in custom collections.
