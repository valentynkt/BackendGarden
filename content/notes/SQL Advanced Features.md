---
created: 2024-04-29 15:45
aliases:
  - SQL Functions
  - SQL Procedures
  - SQL Views
links: 
tags:
  - LearningIT
  - bud🌿
---
link: [[SQL Operations]]

# SQL Advanced Features

## Overview

SQL provides several advanced features that facilitate more efficient and modular code for database operations. Scalar functions, inline table-valued functions, stored procedures, and views each offer unique advantages and are used to handle specific types of tasks within SQL.

## Content
### Key Concepts

> [!important]
> 
> - **Scalar Function**: Returns a single value and operates on a single row. Used for calculations that return a single value per row.
> - **Inline Table-Valued Function**: Returns a table and can be treated as a single inline SQL statement that produces a table. These functions are useful for returning complex data structures.
> - **Stored Procedures**: Procedures are SQL code blocks that [[Encapsulation|encapsulate]] logic, which can be reused. They can handle multiple operations like insert, update, delete, or complex business logic.
> - **Views**:  These are virtual tables represented by queries. They do not store any data themselves but provide a real-time view of data according to the SQL query that defines the view. When you query a view, the database runs the underlying query against the actual data in the base tables.
> - **Materialized Views**: Unlike regular views, materialized views actually store the result of the query in a physical table. This means that the data is persistent and can be refreshed periodically to reflect changes in the base data. They are used to improve performance by caching expensive query results and providing quick access to precomputed data based on the underlying tables.

### Paramaters

Understanding the use of input and output parameters is essential for effectively leveraging SQL features such as scalar functions, inline table-valued functions, stored procedures, and views. Here’s a breakdown of how parameters are utilized across these features:

> [!important]- Parameters
> 
> - **Scalar Functions**:
>     - **Input Parameters**: Used to pass values into the function, typically for calculations. Each input affects the function's return value.
>     - **Output Parameters**: Not applicable, as scalar functions return a single value directly.
> - **Inline Table-Valued Functions**:
>     - **Input Parameters**: Similar to scalar functions, these parameters are used to pass values that influence the rows returned by the function.
>     - **Output Parameters**: Not applicable, as the function itself outputs a table structure.
> - **Stored Procedures**:
>     - **Input Parameters**: Provide values at the start of execution, used to influence the procedure's operations within the database.
>     - **Output Parameters**: Store values that the procedure outputs after execution, useful for returning data to the calling program or for providing status information.
> - **Views**:
>     - **Input Parameters**: Not directly applicable as views do not accept parameters like functions or procedures.
>     - **Output Parameters**: Not applicable, as views are essentially saved SQL queries that do not involve parameterized execution.


### Differences

The table below outlines the differences and appropriate use cases for each SQL feature:


| Feature                     | Scalar Function                                       | Inline Table-Valued Function                      | Stored Procedures                                  | Views                                               | Materialized Views                                                     |
| --------------------------- | ----------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------- |
| Return Type                 | Returns a single value per row.                       | Returns a set of rows (table).                    | Can return zero or more values.                    | Does not return values directly; used as a table.   | Physical storage of results; used as a table.                          |
| Use in SQL Statements       | Can be used wherever an expression is valid.          | Used as a table within SELECT statements.         | Called with EXECUTE; not embeddable in statements. | Used like tables in SELECT, INSERT, UPDATE, DELETE. | Used like tables, but data is static until refreshed.                  |
| Complexity                  | Used for simple data transformations or calculations. | Suitable for returning complex queries as tables. | Handles complex business logic with transactions.  | Simplifies complex queries; doesn't store data.     | Stores complex query results for quick access.                         |
| Performance                 | Fast for simple calculations.                         | Performance varies based on query complexity.     | Can be optimized for complex operations.           | Can improve read performance if indexed.            | Improves read performance significantly; requires refresh for updates. |
| Database State Modification | Cannot modify database state.                         | Cannot modify database state.                     | Can modify the database state.                     | No direct modification; affects underlying tables.  | Does not modify state; caches data for performance.                    |
| Example Use Cases           | Data formatting, calculations within queries.         | Retrieving data based on parameters for reports.  | Data manipulation, batch processing, automation.   | Data abstraction, user-specific data access.        | Reporting, dashboards, reducing load on operational DB.                |


### Implementation Overview

Implementing these [[Relational Databases|SQL]] features involves:

- **Defining**: Use `CREATE FUNCTION` for scalar and inline table-valued functions, `CREATE PROCEDURE` for stored procedures, and `CREATE VIEW` for views.
- **Usage**: Scalar functions are used within SELECT clauses, inline table-valued functions can be joined like any other table, stored procedures are executed with specific parameters, and views are queried as regular tables.
- **Management**: Maintain and update these features as per changing business logic and data requirements.


## Examples: Demonstrating SQL Features

Let's delve into the practical applications of scalar functions, inline table-valued functions, stored procedures, and views, showcasing their unique characteristics and appropriate use cases with examples.

> [!example]- **Scalar Function Example** 
> This example illustrates a scalar function that calculates a bonus based on sales:
>
>``` sql
>CREATE FUNCTION CalculateBonusScalar
>    (@SalesAmount MONEY)
>RETURNS MONEY
>AS
>BEGIN
>    RETURN CASE 
>              WHEN @SalesAmount > 50000 THEN @SalesAmount * 0.10
>              ELSE @SalesAmount * 0.05
>           END
>END;
>
>-- Usage:
>SELECT dbo.CalculateBonusScalar(60000) AS BonusAmount;
>
>```
> 
> **Description**: The scalar function `CalculateBonusScalar` takes a single input parameter (`@SalesAmount`) and returns the calculated bonus. It's perfect for simple calculations that are reused across multiple queries.


> [!example]- **Inline Table-Valued Function Example** 
> This example showcases an inline table-valued function that retrieves employee sales and calculated bonuses:
>
>``` sql
>CREATE FUNCTION GetEmployeeSalesBonus
>    (@EmployeeID INT)
>RETURNS TABLE
>AS
>RETURN (
>    SELECT EmployeeID, SalesAmount, 
>           CASE 
>             WHEN SalesAmount > 50000 THEN SalesAmount * 0.10
>             ELSE SalesAmount * 0.05
>           END AS Bonus
>    FROM Sales
>    WHERE EmployeeID = @EmployeeID
>);
>
>-- Usage:
>SELECT * FROM dbo.GetEmployeeSalesBonus(1);
>
>```
> 
> **Description**: `GetEmployeeSalesBonus` is an inline table-valued function that not only calculates the bonus for each sale but also returns a table with sales and bonuses for a given employee. It's useful for scenarios where you need to output multiple fields in a row format for further analysis or reporting.


> [!example]- **Stored Procedure Example** 
> The stored procedure example with input and output parameters:
>
>``` sql
>CREATE PROCEDURE CalculateBonusProcedure
>    @EmployeeID INT,
>    @SalesAmount MONEY,
>    @Bonus MONEY OUTPUT
>AS
>BEGIN
>    SET @Bonus = CASE 
>                    WHEN @SalesAmount > 50000 THEN @SalesAmount * 0.10
>                    ELSE @SalesAmount * 0.05
>                 END
>END;
>
>-- Usage:
>DECLARE @BonusMoney MONEY;
>EXEC CalculateBonusProcedure 
>    @EmployeeID = 1,
>    @SalesAmount = 60000,
>    @Bonus = @BonusMoney OUTPUT;
>
>SELECT @BonusMoney AS BonusAmount;
>
>```
> 
> **Description**: This stored procedure, `CalculateBonusProcedure`, utilizes both input (`@EmployeeID`, `@SalesAmount`) and output (`@Bonus`) parameters to calculate a sales bonus. Stored procedures like this are ideal for complex business logic that requires multiple steps and the use of intermediate data manipulation.


> [!example]- **View Example** 
> A view to display employees and their bonuses:
> 
>``` sql
>CREATE VIEW EmployeeBonuses AS
>SELECT EmployeeID, 
>       SalesAmount, 
>       CASE 
>         WHEN SalesAmount > 50000 THEN SalesAmount * 0.10
>         ELSE SalesAmount * 0.05
>       END AS Bonus
>FROM Sales;
>
>-- Usage:
>SELECT * FROM EmployeeBonuses;
>
>```
> 
> **Description**: The view `EmployeeBonuses` simplifies access to employee sales data and their calculated bonuses by storing the [[Relational Databases|SQL]] query. Views are great for encapsulating complex queries and providing a simpler interface to access data, acting like a virtual table.


> [!example]- **Materialized View Example**
> A materialized view to cache the result set of employee bonuses for quick access:
> 
>```sql
>CREATE MATERIALIZED VIEW EmployeeBonusCache AS
>SELECT EmployeeID, 
>       SalesAmount, 
>       CASE 
>         WHEN SalesAmount > 50000 THEN SalesAmount * 0.10
>         ELSE SalesAmount * 0.05
>       END AS Bonus
>FROM Sales;
>
>-- Usage:
>SELECT * FROM EmployeeBonusCache;
>
>```
> 
> **Description**: The materialized view `EmployeeBonusCache` stores the results of a complex calculation of employee bonuses based on sales data. Unlike regular views, this materialized view stores the result set physically, which speeds up access but requires updates or refreshes to stay current. This feature is especially useful for reports and dashboards where data changes infrequently and high performance is critical.


> [!warning] Refreshing Materialized View
> Remember to refresh it using a correct syntax. 
> For example in [[Relational Databases|SQL]] Server you should use next syntax:
> `UPDATE STATISTICS your_view_name;`


These examples underscore the distinct functionalities and suitable scenarios for using scalar functions, inline table-valued functions, stored procedures, and views in [[Relational Databases|SQL]] database operations. Each has its strengths and specific use cases, making them indispensable tools in the [[Relational Databases|SQL]] developer's toolkit.
## Summary

> [!summary] 
> Scalar functions, inline table-valued functions, stored procedures, and views are essential [[Relational Databases|SQL]] features that enhance database functionality and efficiency. Each serves different purposes from simple calculations and data retrieval to complex business logic execution and data presentation, enabling developers to choose the right tool for their specific needs. Understanding these features and their appropriate applications can significantly streamline database operations and data management.

# References

https://www.youtube.com/watch?v=HR2DJYE0Kss - SQL Stored Procedures, Functions, and Views
https://www.youtube.com/watch?v=NrBJmtD0kEw - SQL Stored Procedures