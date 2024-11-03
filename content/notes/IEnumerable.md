---
created: 2024-07-27 20:18
aliases: 
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]]

# IEnumerable

## Overview

`IEnumerable` in C# is an interface that defines one method, `GetEnumerator`, which returns an `IEnumerator` interface. This allows read-only access to a collection, enabling it to be used with a `foreach` statement.

## Key Points

> [!important]
> 
> - **Namespace**: `System.Collections` or `System.Collections.Generic`
> - **Purpose**: Allows iteration over a collection.
> - **Methods**: Defines a single method, `GetEnumerator()`.
> - **Usage**: Supports `foreach` loops and LINQ queries.
> - **Read-Only**: Provides read-only access to the collection.

## Intro

`IEnumerable` is a fundamental interface in C# that allows the iteration over a collection. It is a generic interface that supports looping over generic or non-generic lists and integrates seamlessly with LINQ query expressions.

> [!example]- **IEnumerable Interface**
> 
> ```csharp
> public class Customer : IEnumerable
> {
>     public IEnumerator GetEnumerator()
>     {
>         throw new NotImplementedException();
>     }
> }
> ```

In the example above, after implementing the `IEnumerable` interface, the `GetEnumerator` method, which returns an `IEnumerator`, is defined to iterate through the collection.

## Custom Collection

`IEnumerable` can be implemented to create custom collections. For example, you might need a stack of playing cards for a game, represented using a custom collection:

> [!example]- **Custom Collection Example**
> 
> ```csharp
> public class Card
> {
>     // Card properties go here
> }
> 
> public class Deck : IEnumerable<Card>
> {
>     private List<Card> cards;
> 
>     public Deck(List<Card> cards)
>     {
>         this.cards = cards;
>     }
> 
>     public IEnumerator<Card> GetEnumerator()
>     {
>         foreach (var card in cards)
>         {
>             yield return card;
>         }
>     }
> 
>     IEnumerator IEnumerable.GetEnumerator()
>     {
>         return GetEnumerator();
>     }
> }
> 
> // Using the custom collection
> Deck deck = new Deck(new List<Card> { /* Card instances go here */ });
> foreach (Card card in deck)
> {
>     // Play the card
> }
> ```

In this example, the `Deck` class acts as a custom collection of `Card` instances, implementing `IEnumerable` to enable `foreach` loops to iterate through the cards.

## [[IEnumerator|GetEnumerator() Method]]

The `GetEnumerator` method can be called on an instance of `IEnumerable`, returning an `IEnumerator` that provides access to each element in the collection.

> [!example]- **GetEnumerator Method**
> 
> ```csharp
> List<string> cityList = new List<string>() {"New York", "London", "Paris", "Tokyo"};
> 
> IEnumerator cityEnum = cityList.GetEnumerator();
> 
> while(cityEnum.MoveNext())
> {
>     Console.WriteLine(cityEnum.Current);
> }
> ```

In this example, `GetEnumerator` is called on `cityList`, returning an `IEnumerator`, `cityEnum`. Using `IEnumerator`, we can iterate through every city in `cityList`.

## IEnumerable vs IEnumerator Interface

Understanding the difference between `IEnumerable` and `IEnumerator` can help clarify their usage.

> [!important]
> 
> 1. **Interfaces**: Both `IEnumerable` and `IEnumerator` are interfaces.
> 2. **Methods**: `IEnumerable` has one method, `GetEnumerator`, which returns an `IEnumerator`. `IEnumerator` has two methods (`MoveNext` and `Reset`) and a property (`Current`).
> 3. **Implementation**: To implement enumerator logic in a collection class, it needs to implement the `IEnumerable` interface.
> 4. **Usage**: `IEnumerable` is used for iteration, while `IEnumerator` is used to control the iteration process.

## [[Yield Return]]

The `yield return` statement in C# simplifies the implementation of the `IEnumerable` interface by handling the state machine required for iteration.

> [!example]- **Yield Return Example**
> 
> ```csharp
> public IEnumerable<int> GetNumbers()
> {
>     yield return 1;
>     yield return 2;
>     yield return 3;
> }
> 
> // Using the yield return method
> foreach (int number in GetNumbers())
> {
>     Console.WriteLine(number);
> }
> ```

In this example, the `yield return` statement is used to return each number in the `GetNumbers` method, allowing for simple iteration over the collection.

## Conclusion

> [!important]
> 
> - `IEnumerable` is great for read-only, forward-only access to a collection.
> - It is highly memory efficient and supports lazy-loaded data streaming.
> - `IEnumerable` offers flexibility in handling different types of collections.
> - Ideal for creating custom collections.
> - For more advanced manipulation, consider using `ICollection` or `IList`.

## Related Topics

> [!summary]
> 
> - **ICollection**: Extends `IEnumerable` with methods for adding and removing items.
> - **IList**: Extends `ICollection` with methods for accessing items by index.
> - **IQueryable**: Extends `IEnumerable` for querying data sources with LINQ.
> - **[[LINQ]]**: Provides query capabilities to collections implementing `IEnumerable`.
> - **Custom Collections**: Creating custom collections by implementing `IEnumerable`.


# Reference:

[C# IEnumerable: Benefits, Use Cases and More - ByteHide](https://www.bytehide.com/blog/ienumerable-csharp)





 