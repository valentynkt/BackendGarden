---
created: 2024-04-29 20:14
aliases:
  - ACID
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Data Integrity and Transactions]]

# ACID Properties

ACID properties ensure that database transactions are processed reliably, maintaining [[Data Integrity and Transactions|Data Integrity]] and consistency. These properties are crucial for systems that handle critical data operations, particularly in environments with multiple concurrent users.

ACID is an acronym for Atomicity, Consistency, Isolation, and Durability, each supporting secure and reliable transaction processing:

> [!important]
> 
> - **Atomicity**: Guarantees that each transaction is all-or-nothing. If any part of the transaction fails, the entire transaction is rolled back, and the database state is unchanged.
> - **Consistency**: Ensures every transaction leads the database from one valid state to another, maintaining all predefined rules.
> - **Isolation**: Prevents transactions from interfering with each other by hiding ongoing transaction effects until they are completed.
> - **Durability**: Makes sure that once a transaction is committed, it remains so, even in the event of a system failure, thus preserving transaction results permanently.

