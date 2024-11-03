---
created: 2024-07-27 21:41
aliases:
  - Extension Methods
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]]

# Extension Methods

## Overview

Extension methods allow adding new methods to existing types without modifying their source code. They are defined in static classes and use the `this` keyword before the first parameter.

## Key Concepts

> [!important]
> 
> - **Static Class**: Extension methods must be in a static class.
> - **`this` Keyword**: Specifies the type being extended.
> - **Usability**: Called as if they are instance methods on the extended type.

## Basic Usage

Define a static method in a static class, with the first parameter indicating the type to extend.

> [!example]- **Basic Extension Method Example**
> 
> ```csharp
> public static class StringExtensions
> {
>     public static bool IsNullOrEmpty(this string str)
>     {
>         return string.IsNullOrEmpty(str);
>     }
> }
> 
> // Using the extension method
> string text = null;
> bool result = text.IsNullOrEmpty(); // Outputs: true
> ```

## How It Works

### Static Class and Method

Extension methods must reside in a static class. The first parameter uses the `this` keyword to specify the type being extended.

> [!example]- **Static Class and Method Example**
> 
> ```csharp
> public static class IntExtensions
> {
>     public static bool IsEven(this int number)
>     {
>         return number % 2 == 0;
>     }
> }
> 
> // Using the extension method
> int number = 4;
> bool isEven = number.IsEven(); // Outputs: true
> ```

### IntelliSense and Usability

Extension methods appear in IntelliSense as if they are instance methods on the type.

> [!example]- **IntelliSense Example**
> 
> ```csharp
> public static class DateTimeExtensions
> {
>     public static int GetWeekOfYear(this DateTime date)
>     {
>         var culture = System.Globalization.CultureInfo.CurrentCulture;
>         return culture.Calendar.GetWeekOfYear(date, System.Globalization.CalendarWeekRule.FirstDay, DayOfWeek.Monday);
>     }
> }
> 
> // Using the extension method
> DateTime date = DateTime.Now;
> int weekOfYear = date.GetWeekOfYear(); // Outputs the current week of the year
> ```

## Advantages and Limitations

> [!success] **Advantages**
> 
> - **Encapsulation**: Adds functionality without modifying source code.
> - **Readability**: Methods are called on objects directly.
> - **Reusability**: Extends existing types easily.

> [!danger] **Limitations**
> 
> - **Not Overridable**: Cannot override existing methods.
> - **Discovery**: Can lead to confusion if overused.

## Related Topics

> [!summary]
> 
> - **[IEnumerable](IEnumerable)**: LINQ extension methods operate on `IEnumerable`.
> - **[[LINQ]]**: LINQ heavily relies on extension methods.
> - **[[Static Keyword CSharp|Static Keyword]]**: Extension methods must be defined in static classes.
> - **[[Events And Delegates]]**: Often used in conjunction with extension methods.

## Conclusion

Extension methods enhance existing types without modifying their source code, making code more readable and reusable.
