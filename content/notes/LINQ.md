---
created: 2024-07-25 20:22
aliases:
  - Language Integrated Query
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]], [[Events And Delegates]]

# LINQ (Language Integrated Query)

## Overview

LINQ (Language Integrated Query) is a powerful feature in C# that provides a consistent query experience across different data sources. It allows querying of collections using a syntax reminiscent of SQL, integrated into the language itself.

## Key Concepts

> [!important]
> 
> - **Query Syntax**: A declarative syntax similar to SQL, used for querying collections.
> - **Method Syntax**: Uses method calls and lambda expressions to query collections.
> - **Deferred Execution**: Queries are not executed until the results are enumerated.
> - **Extension Methods**: LINQ methods are implemented as extension methods, enhancing existing types.
> - **Standard Query Operators**: LINQ provides a set of query operators like `Where`, `Select`, `OrderBy`, `GroupBy`, and `Join`.

## LINQ Syntax

### Query Syntax

Query syntax provides a SQL-like syntax for querying collections. It is concise and readable.

> [!example]- **Query Syntax Example**
> 
> ```csharp
> int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
> 
> var evenNumbers = from num in numbers
>                   where num % 2 == 0
>                   select num;
> 
> foreach (var num in evenNumbers)
> {
>     Console.WriteLine(num); // Outputs: 2, 4, 6, 8, 10
> }
> ```

### Method Syntax

Method syntax uses extension methods and lambda expressions to achieve the same results as query syntax.

> [!example]- **Method Syntax Example**
> 
> ```csharp
> int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
> 
> var evenNumbers = numbers.Where(num => num % 2 == 0);
> 
> foreach (var num in evenNumbers)
> {
>     Console.WriteLine(num); // Outputs: 2, 4, 6, 8, 10
> }
> ```

## Deferred Execution

LINQ queries are not executed until the query variable is iterated over, providing performance benefits by delaying execution until necessary.

> [!example]- **Deferred Execution Example**
> 
> ```csharp
> var query = numbers.Where(num => num % 2 == 0); // Query is not executed here
> 
> foreach (var num in query)
> {
>     Console.WriteLine(num); // Query is executed here
> }
> ```

## LINQ to Objects

LINQ to Objects refers to the use of LINQ queries with in-memory collections like arrays, lists, and dictionaries.

> [!example]- **LINQ to Objects Example**
> 
> ```csharp
> List<string> names = new List<string> { "Alice", "Bob", "Charlie", "David" };
> 
> var filteredNames = from name in names
>                     where name.StartsWith("A")
>                     select name;
> 
> foreach (var name in filteredNames)
> {
>     Console.WriteLine(name); // Outputs: Alice
> }
> ```

## LINQ to XML

LINQ to XML provides an API to manipulate XML documents using LINQ queries.

> [!example]- **LINQ to XML Example**
> 
> ```csharp
> XDocument doc = XDocument.Load("books.xml");
> 
> var titles = from book in doc.Descendants("book")
>              select book.Element("title").Value;
> 
> foreach (var title in titles)
> {
>     Console.WriteLine(title);
> }
> ```

## LINQ to SQL

LINQ to SQL allows querying of databases using LINQ syntax. It translates LINQ queries into SQL queries and executes them against the database.

> [!example]- **LINQ to SQL Example**
> 
> ```csharp
> DataContext db = new DataContext(connectionString);
> 
> var customers = from cust in db.GetTable<Customer>()
>                 where cust.City == "London"
>                 select cust;
> 
> foreach (var customer in customers)
> {
>     Console.WriteLine(customer.Name);
> }
> ```

## Standard Query Operators

LINQ provides a set of standard query operators that can be used for filtering, projection, aggregation, sorting, and more.

- **Where**: Filters a sequence based on a predicate.
- **Select**: Projects each element of a sequence into a new form.
- **OrderBy**: Sorts the elements of a sequence in ascending order.
- **GroupBy**: Groups the elements of a sequence.
- **Join**: Joins two sequences based on a key.

> [!example]- **Standard Query Operators Example**
> 
> ```csharp
> var query = numbers.Where(num => num % 2 == 0)
>                    .Select(num => new { Number = num, Square = num * num })
>                    .OrderBy(item => item.Number);
> 
> foreach (var item in query)
> {
>     Console.WriteLine($"Number: {item.Number}, Square: {item.Square}");
> }
> ```

## Related Topics

> [!summary]
> 
> - **[[IEnumerable]]**: LINQ queries operate on collections implementing `IEnumerable`.
> - **IQueryable**: Provides functionality for querying data sources that implement `IQueryable`.
> - **[[CSharp]]**: LINQ uses extension methods to add query capabilities to collections.
> - **[[Extension Methods CSharp|Extension Methods]]**: Lambda expressions are commonly used in LINQ method syntax.

## PLINQ (Parallel LINQ)

For further reading on PLINQ, which extends LINQ by providing parallel execution of queries, refer to the [[Asynchronous and Parallel (PLINQ)]] note.

## Conclusion

LINQ is a versatile and powerful feature in C# that enables querying and manipulating data using a consistent syntax across different data sources. By understanding LINQ and its various components, developers can write more efficient and readable code.

# Reference:

[Mastering C# LINQ Guide: From Beginner and Expert](https://www.bytehide.com/blog/linq-csharp)


 