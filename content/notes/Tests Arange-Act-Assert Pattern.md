---
created: 2024-06-03 19:30
aliases:
  - AAA Pattern
  - Arange-Act-Assert Pattern
  - Unit Tests AAA
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Unit Testing]]

# Arange-Act-Assert Pattern

## Overview

The Arrange-Act-Assert (AAA) pattern is a structured approach to writing unit tests. It divides the test into three distinct sections:

- **Arrange**: Set up the test environment, including any necessary objects, data, or configurations.
- **Act**: Perform the action that you want to test.
- **Assert**: Verify that the action produced the expected results.

This pattern promotes clarity and maintainability by clearly separating the different phases of the test, making it easier to understand and manage.

## C# Examples of Unit Tests with AAA Pattern

> [!example]- Testing a Calculator Add Method
> ``` csharp
> using NUnit.Framework;
> 
> namespace CalculatorTests
> {
>     public class Calculator
>     {
>         public int Add(int a, int b) => a + b;
>     }
> 
>     [TestFixture]
>     public class CalculatorTests
>     {
>         [Test]
>         public void Add_ShouldReturnSumOfTwoNumbers()
>         {
>             // Arrange
>             var calculator = new Calculator();
>             int number1 = 5;
>             int number2 = 10;
> 
>             // Act
>             int result = calculator.Add(number1, number2);
> 
>             // Assert
>             Assert.AreEqual(15, result);
>         }
>     }
> }
> 
> ```