Date and Time: <u> 2023-11-08 21:10 </u>
Status: #LearningIT
Tags: [[CSharp]], [[Value-Reference Types]], [[Memory Management CSharp]]

# Ref, In, Out parameters

``` ad-important
 - [[#Ref]]
 - [[#In]]
 - [[#Out]]
```

## Ref
``` CSharp
int x = 10;
int y = 20;

Console.WriteLine($"Before Add() | x = { x }, y = { y }");
Console.WriteLine($"Sum = { Add(ref x, ref y) }");
Console.WriteLine($"After Add() | x = { x }, y = { y }");

static int Add(ref int x, ref int y)
{
    int sum = x + y;

    x++;
    y++;

    return sum;
}
```

**Output:**
``` 
Before Add() | x = 10, y = 20
Sum = 30
CAfter Add() | x = 11, y = 21
```

Since we’re now passing the two values by reference, the changes we make to the arguments inside the function will affect the caller’s scope.

## In
What if we want to pass data by reference but make it read-only? We can make use of the [_in_](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/in-parameter-modifier) modifier.

``` csharp
``` CSharp
int x = 10;
int y = 20;

Console.WriteLine($"Before Add() | x = { x }, y = { y }");
Console.WriteLine($"Sum = { Add(ref x, ref y) }");
Console.WriteLine($"After Add() | x = { x }, y = { y }");

static int Add(in int x, in int y)
{
    int sum = x + y;

    //x++; Error
    //y++;

    return sum;
}
```

_When to use_ `in` _modifier?_

When you want to NOT allow the called method to modify the argument value.

## Out
This keyword allows us to pass an argument as a reference type and could be useful when a function returns multiple values.

``` ad-error
A function that takes an out parameter is under the obligation to assign a proper value before exiting, otherwise we’ll get a compiler error.
```

``` csharp
int x = 10;
int y = 20;

Add(x, y, out int sum);
Console.WriteLine($"Sum = { sum }");

static void Add(int x, int y, out int sum)
{
    sum = x + y;
}
```

In the latest C# version, we don’t need to declare an out parameter before using it. We can just declare it inside the function call.
# Reference:
https://medium.com/codex/c-parameter-modifiers-ref-in-out-params-99742e89dca

 