---
created: 2024-05-01 15:17
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Non-Relational Databases]]

# Wide-Column Databases

![[../Files/Images/Pasted image 20240501151748.png]]

## Content

Each piece of data is stored in a table-like structure. Wide column databases are most similar to [[Relational Databases]]. The data can be unstructured though, and doesn’t need to have a rigid schema. Wide-column databases are almost like a hybrid of a key-value database and a relational database. Each piece of data is stored with a unique key that points to a series of column types that can vary from row to row. 

This type of database is commonly used when there is a large number of data points with different column types. For example, records from an IoT device will have frequent entries but potentially different data types. Cassandra and HBase are popular options for wide column databases.


> [!example]-
> - **Apache Cassandra**: Offers scalability and high availability, ideal for large datasets across distributed systems.
> - **Google Bigtable**: Designed for large-scale storage across many servers, it manages data in a tabular format for efficient processing.
> - **ScyllaDB**: A faster, open-source alternative to Cassandra, focused on performance and reduced latencies.
> - **HBase**: Part of the Hadoop ecosystem, it's tailored for sparse data sets and integrates well with HDFS for big data applications.