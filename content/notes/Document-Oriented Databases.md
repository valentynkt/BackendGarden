---
created: 2024-05-01 15:08
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Non-Relational Databases]]

# Document-Oriented Databases

![[../Files/Images/Pasted image 20240501150845.png]]

## Content
Document databases are arguably the most multi-purpose databases of these four. Each piece of data is stored as a document, commonly in [[JSON]](BSON, or XML), where the keys are exposed for querying. The shape of each document could be different. Each document can be of a different structure, but there is also an option to create groupings of documents called collections. These collections can be organized hierarchically, which creates ways to query the data relationally without losing flexibility.

> [!example]-
> 
> - **MongoDB**: One of the most popular document databases, it uses JSON-like documents with dynamic schemas (BSON), making the integration of data in certain types of applications easier and faster.
> - **CouchDB**: Uses JSON to store data, JavaScript as its query language, and HTTP for an API. CouchDB is designed to provide high availability and partition tolerance.
> - **RavenDB**: A document database designed to operate efficiently in high data volume scenarios while being easy to use.
> - **ArangoDB**: A multi-model database that supports documents, graphs, and key-values in one database and with one query language.
> 

These databases each offer unique features that may be more suitable for specific use cases, such as mobile apps needing offline data synchronization or real-time applications requiring immediate data availability.

