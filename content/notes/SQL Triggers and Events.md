---
created: 2024-04-29 17:32
aliases:
  - Triggers and Events
links: 
tags:
  - LearningIT
  - seed🌱
---
link: [[SQL Operations]]
# SQL Triggers and Events
![[../Files/Images/Pasted image 20240429183003.png]]
## Overview

SQL triggers and events are powerful tools used in database systems to automate and enforce business rules automatically. Triggers are procedures that are automatically executed in response to specific events on a particular table or view in a database, while events are scheduled tasks that execute SQL commands at predefined times.

## Content

### Key Concepts

> [!important]
> 
> - **SQL Triggers**: A trigger is a SQL code that automatically executes in response to certain events on a particular table or view. These events include INSERT, UPDATE, or DELETE actions performed on the table. Triggers help maintain [[Data Integrity and Transactions|data integrity]] and enforce business rules silently and automatically.
> - **SQL Events**: An event in SQL is a task scheduled to run at specific times, much like a cron job in UNIX/Linux systems. It is used to perform any number of SQL actions at scheduled intervals, such as cleanup tasks, updates to summary tables, or periodic checks and notifications.

### Types of SQL Triggers and Their Events

SQL triggers can be configured to respond to various data manipulation events within a database. These triggers are typically defined for INSERT, UPDATE, or DELETE operations on a table or view. Understanding the specific use and behavior of each trigger type is crucial for implementing effective database logic and maintaining data integrity.

> [!important] Trigger Events
> 
> - **INSERT Triggers**: These triggers are activated when a new record is added to a table. They are useful for auditing, enforcing business rules, or automatically populating other tables based on the inserted data.
> - **UPDATE Triggers**: Activated when a record in a table is modified. These triggers can be used to log changes, enforce constraints, or update related data within the database.
> - **DELETE Triggers**: These are triggered when a record is removed from a table. They are often used for archiving deleted data, maintaining referential integrity, or updating summary tables.

> [!important] Special Keywords: OLD and NEW
> SQL triggers often use special keywords to access data associated with the trigger event:
> - **OLD Keyword**: Refers to the state of a data row before an UPDATE or DELETE operation. This keyword allows the trigger to access column values that were present before the operation was executed.
> - **NEW Keyword**: Used to refer to the state of data after an INSERT or UPDATE operation. It allows the trigger to access the new values that are being inserted or the updated values in the case of an UPDATE.

### SQL Trigger Example with OLD and NEW

> [!example]- **SQL Trigger Example Using OLD and NEW** 
> This example demonstrates an UPDATE trigger that logs changes to employee salaries:
> 
>``` sql
>CREATE TRIGGER LogSalaryChanges
>BEFORE UPDATE ON Employees
>FOR EACH ROW
>WHEN (OLD.Salary <> NEW.Salary)
>BEGIN
> INSERT INTO SalaryChanges (EmployeeID, OldSalary, NewSalary, ChangeDate)
> VALUES (OLD.EmployeeID, OLD.Salary, NEW.Salary, NOW());
>END;
>
>```
> 
> **Description**: The trigger `LogSalaryChanges` is set to fire before an update to the `Employees` table, specifically when the `Salary` field changes. It compares the old and new salary values using the `OLD` and `NEW` keywords. If the salary has been updated, it logs this change in the `SalaryChanges` table along with the employee ID and the date of the change.

### Differences between SQL Triggers and Events

Here is a table highlighting the primary distinctions between SQL triggers and events:

|Feature|SQL Triggers|SQL Events|
|---|---|---|
|**Activation**|Automatically invoked by data modification actions on a table/view.|Scheduled to run at specific times.|
|**Purpose**|Used to enforce business rules or data integrity automatically.|Used for scheduled tasks like backups or maintenance.|
|**Complexity**|Can become complex and difficult to manage if overused.|Generally simpler and managed by DBMS scheduler.|
|**Performance**|Can impact performance due to execution on DML events.|Impact depends on the task and its execution time.|
|**Use Cases**|Data validation, automatic updates, cascading deletes.|Data archiving, report generation, periodic updates.|

## Examples

> [!example]- **SQL Trigger Example**
> This example shows how to create a trigger that automatically updates an audit table after a record is inserted into the Employees table:
> 
> ```sql
> CREATE TRIGGER AuditLogAfterInsert
> AFTER INSERT ON Employees
> FOR EACH ROW
> BEGIN
>   INSERT INTO AuditLogs (EmployeeID, Action, ActionTime)
>   VALUES (NEW.EmployeeID, 'Insert', NOW());
> END;
> ```
> **Description**: The trigger `AuditLogAfterInsert` is activated after a new record is inserted into the `Employees` table. It adds a new entry to the `AuditLogs` table, recording the action and the time it occurred.

> [!example]- **SQL Event Example**
> This example demonstrates how to create an event that purges records older than a year from a log table every month:
> 
> ```sql
> CREATE EVENT PurgeOldLogs
> ON SCHEDULE EVERY 1 MONTH
> DO
>   DELETE FROM Logs WHERE LogDate < DATE_SUB(NOW(), INTERVAL 1 YEAR);
> ```
> **Description**: The event `PurgeOldLogs` is scheduled to run monthly, deleting records from the `Logs` table that are older than one year. This ensures that the table only contains recent data.


## Summary

> [!summary]
>  SQL triggers and events are essential for automating processes within databases, enhancing the efficiency and integrity of data handling. Triggers are best for reactive tasks that need immediate execution after changes to data, while events are ideal for regular maintenance tasks that can be scheduled. Understanding how to utilize both can significantly streamline database management and enforce business logic seamlessly.

# References

https://www.youtube.com/watch?v=QMUZ5HfWMRc