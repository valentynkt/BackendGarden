---
created: 2024-04-28 17:18
aliases: 
tags:
  - LearningIT
  - evergreen🌳
links:
---

link: [[Database]]

# Data Models

![[../Files/Images/Pasted image 20240428172053.png]]

## Overview

Data models are pivotal in shaping how data is stored, manipulated, and maintained within a database system. Choosing the right data model impacts the database's design and its operational effectiveness, tailored to meet specific needs.

> [!important]
> 
> - **Hierarchical Model**: Structures data in a tree-like format using parent-child relationships, making it efficient for one-to-many relationship management.
> - **Network Model**: Extends beyond the hierarchical model by allowing complex many-to-many relationships through a flexible, graph-like structure, linking data nodes.
> - **Relational Model**: The most prevalent model, it organizes data into tables (or relations) interconnected by foreign keys. It supports a robust theoretical framework and is predominantly managed through SQL.
> - **Object-oriented Model**: Merges object-oriented programming principles by storing data as objects, seamlessly integrating with [[Object Oriented Programming|OOP]] language-developed applications.
> - **Graph Model**: Utilizes nodes, edges, and properties within a graph structure to represent and store data, excelling in scenarios that require analysis of complex interconnections.

### Logical and Physical Models

Understanding both logical and physical models is key in [[database design]]:

> [!important]
> 
> - **Logical Data Models**: Define the structure of the data elements and set the relationships between them without any concern for how they will be physically implemented. Logical models include entities, attributes, and relationships and provide a conceptual framework that guides the detailed planning of the physical [[database]].
> - **Physical Data Models**: Describe how the database is structured physically on the storage medium. This includes detailed schematics of how data is stored, pathways for data retrieval, indexing strategies, and the physical connections between data elements. Physical models are optimized for performance and storage efficiency and are crucial for implementing databases on specific hardware and software configurations.
