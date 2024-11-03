---
created: 2024-07-27 21:39
aliases:
  - PLINQ
tags:
  - LearningIT
  - seed🌱
---

link: [[LINQ]]

# Asynchronous and Parallel (PLINQ)

## LINQ with async/await

Starting with .NET Framework 4.5 and C# 5.0, you can take advantage of async/[await](https://www.bytehide.com/blog/await-csharp) to execute asynchronous LinQ queries. You can turn any Entity Framework query into an asynchronous query using methods like `ToListAsync`, `FirstOrDefaultAsync`, `AnyAsync`, and more.

Here’s an example using an async query with Entity Framework:

``` csharp
// Async query with Entity Framework
using (var context = new SchoolContext())
{
    var result = await context.Students
        .Where(student => student.Age > 18)
        .ToListAsync(); // Asynchronous execution
}
```

Keep in mind that not all LinQ providers support async queries out of the box, but strategies like `[Task.Run](https://www.bytehide.com/blog/task-run-csharp)` can help perform queries asynchronously as well:

``` csharp
// Making a non-async query asynchronous with Task.Run
var result = await Task.Run(() => students.Where(student => student.Age > 18).ToList());
```

Let’s look at an async query example on an external data source using an HttpClient:

``` csharp
// Async query on an external data source
public async Task<IEnumerable<Student>> GetStudentsAsync()
{
    using (var httpClient = new HttpClient())
    {
        var json = await httpClient.GetStringAsync("https://api.example.com/students");
        var jsonData = JArray.Parse(json);

        var students = jsonData
            .Select(obj => new Student
            {
                Id = (int)obj["Id"],
                Name = (string)obj["Name"],
                Age = (int)obj["Age"]
            });

        return students;
    }
}
```

## Parallel LinQ (PLINQ) 

To boost your LinQ queries’ performance, consider using Parallel LinQ (PLINQ), which can distribute your query across multiple CPU cores to process the data more quickly. PLINQ is built on top of the Task Parallel Library (TPL) and offers great optimizations for LINQ-to-Objects operations. Converting a query to a parallel query is simple – just add `.AsParallel()` before your query, like in this example:

``` csharp
// Parallel LinQ (PLINQ) example
var sortedNames = students.AsParallel()
    .Where(student => student.Age > 18)
    .OrderBy(s => s.Name)
    .Select(s => s.Name);
```

However, be cautious when using PLINQ, as some operations may consume more resources or cause unexpected results. Prioritize measuring and evaluating your queries’ performance before and after implementing PLINQ to ensure optimal use cases.

In some cases, using the `.AsOrdered()` extension method can help maintain the order of the elements, especially in situations that require it.

``` csharp
// Parallel LinQ (PLINQ) with order preservation
var sortedNames = students.AsParallel().AsOrdered()
    .Where(student => student.Age > 18)
    .OrderBy(s => s.Name)
    .Select(s => s.Name);
```

## LinQ Threading and Task-based 

While async and PLINQ queries can provide significant performance improvements in certain scenarios, you should be aware of the potential for additional complexity and issues in multithreaded environments. Make sure to carefully manage shared data, take advantage of synchronization mechanisms, and properly handle [exceptions](https://www.bytehide.com/blog/5-good-practices-for-error-handling-in-c) in an asynchronous or parallel context.

As a best practice, reserve async and PLINQ for queries that significantly benefit from these approaches, like resource-intensive calculations, background processing, or data sources with long response times. Always balance the advantages of improved performance with the complexity and potential pitfalls that come with multithreaded execution. For instance, consider the following example where a shared data structure is used:

``` csharp
var students = new List<Student>()
{
    new Student { Id = 1, Name = "John", Age = 20 },
    new Student { Id = 2, Name = "Alice", Age = 19 },
    new Student { Id = 3, Name = "Bob", Age = 21 }
};

var studentsList = new List<Student>();

students.AsParallel().ForAll(student =>
{
    lock (studentsList) // We need to lock the shared data to prevent race conditions
    {
        studentsList.Add(student);
    }
});
```

In the example above, we handle potential threading issues by using a lock to synchronize access to the shared `studentsList` object while adding elements. This prevents any race conditions that might occur due to concurrent access to the data structure


# Reference:
[Mastering C# LINQ Guide: From Beginner and Expert](https://www.bytehide.com/blog/linq-csharp)


 