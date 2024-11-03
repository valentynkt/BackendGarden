---
created: 2024-07-27 20:10
aliases: 
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]]

# IEnumerable vs ICollection vs IList vs IQueryable

## Overview

In C#, `IEnumerable`, `ICollection`, `IList`, and `IQueryable` are all interfaces that define various types of collections and ways to manipulate or query them. Each has specific characteristics and is suitable for different scenarios.

## Key Comparisons
![[Pasted image 20231108194824.png]]

| Feature               | IEnumerable                             | ICollection                            | IList                                  | IQueryable                             |
|-----------------------|-----------------------------------------|----------------------------------------|----------------------------------------|----------------------------------------|
| **Namespace**         | System.Collections                      | System.Collections                     | System.Collections                     | System.Linq                            |
| **Add/Remove Items**  | No                                      | Yes                                    | Yes                                    | No                                     |
| **Access by Index**   | No                                      | No                                     | Yes                                    | No                                     |
| **Count Property**    | No                                      | Yes                                    | Yes                                    | No                                     |
| **LINQ Support**      | Yes                                     | Yes                                    | Yes                                    | Yes                                    |
| **Deferred Execution**| Yes (for LINQ)                          | Yes (for LINQ)                         | Yes (for LINQ)                         | Yes                                    |
| **SQL Translation**   | No                                      | No                                     | No                                     | Yes                                    |

## [[IEnumerable]]
![[Pasted image 20231108200256.png]]

Namespace: **System.Collections**

`IEnumerable` is a basic interface for collections that can be enumerated. It provides an enumerator to iterate through the items in the collection but does not support adding or removing items, nor does it provide a count of the items.

> [!example]- **IEnumerable Example**
> 
> ```csharp
> IEnumerable<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
> foreach (int number in numbers)
> {
>     Console.WriteLine(number);
> }
> ```

### Characteristics

- **Read-Only**: Cannot modify the collection (add, remove, update items).
- **Basic Iteration**: Provides a simple way to iterate through the collection.
- **No Count Property**: Does not store the count of items; requires iteration to count items.

## ICollection

Namespace: **System.Collections**

`ICollection` extends `IEnumerable` and adds methods for modifying the collection, such as adding, removing, and checking the number of items.

> [!example]- **ICollection Example**
> 
> ```csharp
> ICollection<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
> numbers.Add(6);
> numbers.Remove(1);
> Console.WriteLine(numbers.Count); // Output: 5
> ```

### Characteristics

- **Modifiable**: Supports adding, removing, and updating items.
- **Count Property**: Stores the count of items for quick access.
- **Supports Enumeration**: Can iterate through the collection.

## IList

Namespace: **System.Collections**

`IList` extends `ICollection` and adds features for accessing items by index, allowing for more flexible manipulation of the collection.

> [!example]- **IList Example**
> 
> ```csharp
> IList<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
> numbers[0] = 6;
> numbers.Insert(2, 8);
> numbers.RemoveAt(4);
> Console.WriteLine(numbers[1]); // Output: 2
> ```

### Characteristics

- **Index Access**: Supports accessing and modifying items by index.
- **More Methods**: Additional methods for inserting and removing items at specific positions.
- **Enhanced Flexibility**: Combines the benefits of `IEnumerable` and `ICollection`.

## IQueryable

![[Pasted image 20231108200417.png]]

Namespace: **System.Linq**

`IQueryable` extends `IEnumerable` and allows for querying data from a remote data source, such as a database. It translates queries into SQL and executes them on the server side, providing efficient data retrieval.

> [!example]- **IQueryable Example**
> 
> ```csharp
> IQueryable<Employee> employees = dbContext.Employees;
> var highSalaryEmployees = employees.Where(e => e.Salary > 50000);
> foreach (var employee in highSalaryEmployees)
> {
>     Console.WriteLine(employee.Name);
> }
> ```

### Characteristics

- **SQL Translation**: Translates LINQ queries into SQL for server-side execution.
- **Deferred Execution**: Queries are not executed until iterated over.
- **Efficient Data Retrieval**: Only retrieves necessary data from the data source.


## Related Topics

> [!summary]
> 
> - **[[LINQ]]**: LINQ provides a consistent model for working with data across various sources, including collections that implement `IEnumerable`, `ICollection`, `IList`, and `IQueryable`.



## References

[IEnumerable vs ICollection vs IList vs IQueryable in C# | Medium](https://medium.com/developers-arena/ienumerable-vs-icollection-vs-ilist-vs-iqueryable-in-c-2101351453db#:~:text=An%20IEnumerable%20supports%20filtering%20elements%20using%20where%20clause.&text=ICollection%20is%20another%20type%20of,update%20element%20in%20the%20list)


 