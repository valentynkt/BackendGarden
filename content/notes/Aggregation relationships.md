---
created: 2024-04-18 20:11
aliases:
  - Aggregation in OOP
  - UML Aggregation Relationships
tags:
  - LearningIT
  - bud🌿
links: "[[Relations Between Objects]]"
---

link: [[Object Oriented Programming]] , [[Relations Between Objects]]

# Aggregation relationships

## Content

![[Pasted image 20240328021707.png]]
Aggregation allows one object to contain a group of objects but without exclusive ownership, meaning the contained objects can exist independently of the container, which is different from composition where the lifecycle of contained objects is managed by the container.

>[!important]+ 
>Aggregation is used to represent relationships where the "part" (component) can exist separately from the "whole" (aggregate). This relationship is particularly useful in models where components need to be shared or reused across different parts of a system

## Example

Here is a practical example to illustrate the concept of aggregation in C#:

``` csharp
using System;
using System.Collections.Generic;

public class Employee
{
    public int EmployeeId { get; set; }
    public string Name { get; set; }

    public Employee(int employeeId, string name)
    {
        EmployeeId = employeeId;
        Name = name;
    }

    public void DisplayEmployeeDetails()
    {
        Console.WriteLine($"Employee ID: {EmployeeId}, Name: {Name}");
    }
}

public class Department
{
    public string DepartmentName { get; set; }
    public List<Employee> Employees { get; set; }

    public Department(string departmentName)
    {
        DepartmentName = departmentName;
        Employees = new List<Employee>();
    }

    public void AddEmployee(Employee employee)
    {
        Employees.Add(employee);
    }

    public void DisplayDepartmentDetails()
    {
        Console.WriteLine($"Department: {DepartmentName}");
        foreach (var employee in Employees)
        {
            employee.DisplayEmployeeDetails();
        }
    }
}

class Program
{
    static void Main()
    {
        Employee emp1 = new Employee(1, "John Doe");
        Employee emp2 = new Employee(2, "Jane Smith");

        Department department = new Department("Engineering");
        department.AddEmployee(emp1);
        department.AddEmployee(emp2);

        department.DisplayDepartmentDetails();
    }
}

```

In this C# example:

- The `Department` class aggregates `Employee` objects, representing a relationship where the department (whole) consists of employees (parts).
- The `Employee` objects can exist independently of the `Department`, indicating an aggregation, not composition.

# References

https://refactoring.guru/design-patterns

