---
created: 2024-04-29 14:55
aliases: 
links: 
tags:
  - LearningIT
  - evergreen🌳
---
link: [[SQL Operations]]
# SQL JOINS

![[../Files/Images/Pasted image 20240429145649.png]]


> [!example] Example Data
>``` sql
>select * from TableA;
> id
>----
>  1
>  2
>  3
>  4
>  5
>  6
>  7
>  8
>(8 rows)
> 
>select * from TableB;
> id
>----
>  1
>  2
>  3
>  4
>  5
>  9
>  10
>  11
>(8 rows)
> 
>```

> [!important]- Inner Join
> Returns rows that have matching values in both tables.
> 
> ![[../Files/Images/sql_inner_join.svg]]
> 
>``` sql
>select * from TableA inner join TableB on TableA.id = TableB.id;
> id | id
>----+----
>  1 |  1
>  2 |  2
>  3 |  3
>  4 |  4
>  5 |  5
>(5 rows)
> 
>```


> [!important]-  Left Outer Join
> Includes all rows from the left table and matched rows from the right table. Unmatched rows from the right table are filled with NULL.
> 
> ![[../Files/Images/sql_left_outer_join.svg]]
> 
>``` sql
>select * from TableA left outer join TableB on TableA.id = TableB.id;
> id | id
>----+----
>  1 |  1
>  2 |  2
>  3 |  3
>  4 |  4
>  5 |  5
>  6 |
>  7 |
>  8 |
>(8 rows)
> 
>```


> [!important]-  Left Outer Exclusive Join
> Returns rows from the left table that have no matches in the right table
> 
> ![[../Files/Images/sql_left_outer_exclusive_join.svg]]
> 
>``` sql
>select * from TableA left outer join TableB on TableA.id = TableB.id where TableB.id is null;
> id | id
>----+----
>  6 |
>  7 |
>  8 |
>(3 rows)
> 
>```


> [!important]-  Full Outer Join
> Includes all rows from both tables, filling in NULLs where matches are not found.
> 
> ![[../Files/Images/sql_full_outer_join.svg]]
> 
>``` sql
>select * from TableA full outer join TableB on TableA.id = TableB.id;
> id | id
>----+----
>  1 |  1
>  2 |  2
>  3 |  3
>  4 |  4
>  5 |  5
>  6 |
>  7 |
>  8 |
>    |  9
>    | 10
>    | 11
>(11 rows)
> 
>```


> [!important]-  Full Outer Exclusive Join
> Returns rows from both tables that do not match each other.
> 
> ![[../Files/Images/sql_full_outer_exclusive_join.svg]]
> 
>``` sql
>select * from TableA full outer join TableB on TableA.id = TableB.id where TableA.id is null or TableB.id is null;
> id | id
>----+----
>  6 |
>  7 |
>  8 |
>    |  9
>    | 10
>    | 11
>(6 rows)
> ``` 


> [!important]- Union
> Merges the results of two queries, removes duplicates, and sorts the rows.
>``` sql
>select * from TableA union select * from TableB;
> id
>----
> 10
>  2
>  5
>  4
>  6
>  9
>  1
> 11
>  3
>  8
>  7
>(11 rows)
>```


> [!important]- Union All
> Combines all rows from multiple queries, including duplicates, without sorting
>``` sql
>select * from TableA union all select * from TableB;
> id
>----
>  1
>  2
>  3
>  4
>  5
>  6
>  7
>  8
>  1
>  2
>  3
>  4
>  5
>  9
> 10
> 11
>(16 rows)
>```