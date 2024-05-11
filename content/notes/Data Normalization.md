---
created: 2024-04-29 20:21
aliases:
  - Normalization
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Database]]

# Data Normalization

## Overview

![[../Files/Images/Pasted image 20240430135351.png]]

Data normalization is a crucial methodology in [[database design]] aimed at reducing redundancy and optimizing the organization of data. This process involves arranging data into tables according to specific rules, known as normal forms. These guidelines help ensure [[Data Integrity and Transactions|data integrity]] and facilitate database maintenance. By applying normalization, each piece of data is stored uniquely, which simplifies data management and decreases the storage space required.

## Content

### Anomalies Addressed by Normalization

Normalization enhances database organization by enforcing logical data dependencies, which helps eliminate various types of anomalies that can lead to data inconsistencies:


![[../Files/Images/01_Data_Normalization_Anomalies_In_Databases_1ec143f4e1.webp]]

> [!important]- Anomalies
> 
> - **Update Anomaly**: Occurs when multiple instances of the same data across the database need to be updated, leading to potential errors and inconsistencies if not all instances are updated.
> - **Insertion Anomaly**: Prevents the addition of data to the database due to the absence of other necessary data, causing incomplete data entries.
> - **Deletion Anomaly**: Results in unintended loss of data when a record is deleted, as other valuable data interconnected within the same record may also be lost.

Normalization typically involves splitting a database into multiple tables and establishing relationships between them. This structure allows changes made to data in one table to be automatically reflected across other related tables, ensuring data consistency and integrity.

### Benefits of Normalization

Normalization offers several advantages that contribute to more efficient and manageable databases:

> [!success]- Benefits
> 
> - **[[Data Integrity and Transactions|Data Integrity]]:** Reduces data redundancy, which minimizes the likelihood of data inconsistencies and errors.
> - **Efficient Storage:** By eliminating duplicate data, normalized databases use storage space more effectively, potentially lowering storage costs.
> - **Query Optimization:** Queries can run faster on normalized databases because they interact with smaller, more focused tables rather than large, complex ones.
> - **Flexibility:** A normalized structure adapts more easily to changes in data requirements or business rules, enhancing the database's longevity and usability.

### Levels of Normalization

![[../Files/Images/Pasted image 20240430135729.png]]


> [!example]- **First Normal Form (1NF)**
>
> **Rules for 1NF:**
> - **Atomicity**: Each field must hold only a single value, ensuring that entries are indivisible.
> - **Uniqueness**: There must be a primary key that uniquely identifies each record in the table.
> - **No Duplicate Rows**: Each row must be unique, with no repetition of records.
> - **Single Value per Column**: Each column must contain only one value per row.
>
> Original unnormalized table:
>
> | OrderID | Customer | Products                |
> |---------|----------|-------------------------|
> | 1       | John     | Apples, Bananas, Oranges|
> | 2       | Alice    | Grapes, Strawberries    |
> | 3       | Bob      | Lemons, Limes           |
>
> This table violates 1NF because the 'Products' column contains multiple values. To adhere to 1NF, each value must be atomic.
>
> Normalized to 1NF (split products into separate rows):
>
> | OrderID | Customer | Product   |
> |---------|----------|-----------|
> | 1       | John     | Apples    |
> | 1       | John     | Bananas   |
> | 1       | John     | Oranges   |
> | 2       | Alice    | Grapes    |
> | 2       | Alice    | Strawberries |
> | 3       | Bob      | Lemons    |
> | 3       | Bob      | Limes     |


> [!example]- **Second Normal Form (2NF)**
>
> **Rules for 2NF:**
> - **Be in in 1NF**
> - **No Partial Dependency**: All non-key attributes must be fully dependent on the primary key.
>
> Original table violating 2NF:
>
> | StudentID | CourseID | CourseName | Instructor   |
> |-----------|----------|------------|--------------|
> | 1         | 101      | Math       | Prof. Smith  |
> | 1         | 102      | Physics    | Prof. Johnson|
> | 2         | 101      | Math       | Prof. Smith  |
> | 3         | 103      | History    | Prof. Davis  |
>
> This table violates 2NF due to partial dependency; the Instructor is dependent on composite key but should be only on CourseID.
>
> Normalized to 2NF:
>
> **Students Table**:
>
> | StudentID | StudentName |
> |-----------|-------------|
> | 1         | John        |
> | 2         | Alice       |
> | 3         | Bob         |
>
> **Courses Table**:
>
> | CourseID | CourseName | Instructor   |
> |----------|------------|--------------|
> | 101      | Math       | Prof. Smith  |
> | 102      | Physics    | Prof. Johnson|
> | 103      | History    | Prof. Davis  |


> [!example]- **Third Normal Form (3NF)**
>
> **Rules for 3NF:**
> - **Be in 2NF**
> - **No Transitive Dependency**: There should be no dependency where a non-prime attribute depends on another non-prime attribute.
>
> Original table violating 3NF:
>
> | EmployeeID | ProjectID | ProjectName | Manager |
> |------------|-----------|-------------|---------|
> | 1          | 101       | ProjectA    | John    |
> | 1          | 102       | ProjectB    | Alice   |
> | 2          | 101       | ProjectA    | John    |
> | 3          | 103       | ProjectC    | Bob     |
>
> This table violates 3NF because the Manager attribute is transitively dependent on the EmployeeID through ProjectID.
>
> Normalized to 3NF:
>
> **Employees Table**:
>
> | EmployeeID | EmployeeName |
> |------------|--------------|
> | 1          | John         |
> | 2          | Alice        |
> | 3          | Bob          |
>
> **Projects Table**:
>
> | ProjectID | ProjectName |
> |-----------|-------------|
> | 101       | ProjectA    |
> | 102       | ProjectB    |
> | 103       | ProjectC    |
>
>**EmployeeProjects Table:**
>
>|EmployeeID|ProjectID|
>|---|---|
>|1|101|
>|1|102|
>|2|101|
>|3|103|


> [!example]- **Boyce-Codd Normal Form (BCNF)**
>
> **Rules for BCNF:**
> - **Be in 3NF**: First, meet all the requirements of 3NF.
> - **Every Determinant is a Candidate Key**: Every column that is a determinant (a column on which other columns depend) must be a candidate key.
>
> Original table violating BCNF:
>
> | ProfessorID | ResearchArea               | OfficeNumber |
> |-------------|----------------------------|--------------|
> | 1           | Artificial Intelligence    | 101          |
> | 2           | Machine Learning           | 102          |
> | 3           | Artificial Intelligence    | 103          |
>
> This table violates BCNF due to a non-trivial functional dependency between `ResearchArea` and `OfficeNumber`.
>
> Normalized to BCNF:
>
> Professors Table:
>
> | ProfessorID | ProfessorName |
> |-------------|---------------|
> | 1           | Prof. Smith   |
> | 2           | Prof. Johnson |
> | 3           | Prof. Davis   |
>
> Research Areas Table:
>
> | ResearchArea               | OfficeNumber |
> |----------------------------|--------------|
> | Artificial Intelligence    | 101          |
> | Machine Learning           | 102          |
>
> Professors Research Table:
>
> | ProfessorID | ResearchArea               |
> |-------------|----------------------------|
> | 1           | Artificial Intelligence    |
> | 2           | Machine Learning           |
> | 3           | Artificial Intelligence    |
>
> Now, the tables are in BCNF because there are no non-trivial functional dependencies between non-candidate keys.


> [!example]- **Fourth Normal Form (4NF)**
> **Rules for 4NF:**
> - **Be in BCNF**: The table must first meet all criteria of BCNF.
> - **No Multi-Valued Dependencies**: There should be no non-trivial multivalued dependencies other than a candidate key.
> 
> **Example Violating 4NF:**
> - **Table**: Books and Authors
> - **Problem**: Multi-valued dependencies between `BookID` and `Authors`.
> 
>
> | BookID | Title | Authors        |
> |--------|-------|----------------|
> | 1      | BookA | AuthorX, AuthorY |
> | 2      | BookB | AuthorY, AuthorZ |
> | 3      | BookC | AuthorX           |
> 
> To resolve the 4NF violation, we separate the data into three tables to eliminate multi-valued dependencies:
> 
> **Books Table:**
> 
> | BookID | Title |
> |--------|-------|
> | 1      | BookA |
> | 2      | BookB |
> | 3      | BookC |
> 
> **Authors Table:**
> 
> | AuthorID | AuthorName |
> |----------|------------|
> | 1        | AuthorX    |
> | 2        | AuthorY    |
> | 3        | AuthorZ    |
> 
> **BookAuthors Table:**
> 
> | BookID | AuthorID |
> |--------|----------|
> | 1      | 1        |
> | 1      | 2        |
> | 2      | 2        |
> | 2      | 3        |
> | 3      | 1        |
> 
> Now, each table conforms to 4NF, where all multi-valued dependencies are addressed.


> [!example]- Fifth Normal Form (5NF) or Project-Join Normal Form (PJNF)
> 
> **Rules for 5NF:**
> - **Be in 4NF**: It must first satisfy all the requirements of 4NF.
> - **Join Dependency**: All join dependencies in the table should be implied by the candidate keys, meaning the table cannot be decomposed into smaller tables without loss of data.
> 
> **Example Demonstrating 5NF Need:**
> - **Table**: Course Assignments
> - **Problem**: Complex join dependencies that are not covered by candidate keys.
> 
> | ProfessorID | CourseID | RoomID |
> |-------------|----------|--------|
> | 1           | 101      | A      |
> | 1           | 102      | B      |
> | 2           | 101      | A      |
> | 2           | 103      | C      |
> 
> To ensure 5NF, we must ensure that all join dependencies are implied by candidate keys. If we decompose the table without causing loss of information and each decomposition is justified by candidate keys, then the table is in 5NF.
> 
> Decomposed Tables:
> 
> **Professors Table:**
> 
> | ProfessorID | CourseID |
> |-------------|----------|
> | 1           | 101      |
> | 1           | 102      |
> | 2           | 101      |
> | 2           | 103      |
> 
> **Rooms Table:**
> 
> | CourseID | RoomID |
> |----------|--------|
> | 101      | A      |
> | 102      | B      |
> | 103      | C      |
> 
> In this decomposition, each part of the table is justified by candidate keys, ensuring no loss of data and maintaining all necessary join dependencies. Thus, achieving 5NF involves careful consideration of join dependencies and the roles of candidate keys.


# References

https://guides.visual-paradigm.com/a-comprehensive-guide-to-database-normalization-with-examples/#Why_Normalize_a_Database

https://www.freecodecamp.org/news/database-normalization-1nf-2nf-3nf-table-examples/