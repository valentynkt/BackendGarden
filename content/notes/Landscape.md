---
created: 2024-04-22 21:21
aliases:
  - List of Content
  - List of MoC
  - General Overview
  - List of Topics
tags:
  - LearningIT
  - moc
  - bud🌿
links: "[[Digital Garden]]"
---

link: [[Digital Garden]]

# Landscape

![[../Files/Images/852af132-420e-4269-8c1c-0f021ecf5a09.webp]]

The "Landscape" serves as a comprehensive guide and overarching map for exploring various topics within software development, system design, programming principles, and database management. This central hub categorizes knowledge into structured sections, each dedicated to a specific domain. It is designed to provide a high-level overview and easy navigation across related topics, making it an essential starting point for deep dives into each subject area.

---

## 1. **Fundamentals of Software Development**

- **Programming Principles and Paradigms**
    - [[Object Oriented Programming|OOP]]
        - [[Abstraction]]
        - [[Encapsulation]]
        - [[Inheritance]]
        - [[Polymorphism]]
    - [[Functional Programming]]
- **[[Design Principles]]**
    - [[SOLID Principles]]
        - [[Single Responsibility Principle]]
        - [[Open Closed Principle]]
        - [[Liskov Substitution Principle]]
        - [[Interface Segregation Principle]]
        - [[Dependency Inversion Principle]]
    - [[Don't Repeat Yourself|DRY]]
    - [[Keep It Short and Simple|KISS]]
    - [[You Ain't Gonna Need It|YAGNI]]
    - [[Law of Demeter]]
    - [[Encapsulate What Varies]]
    - [[Favor Composition Over Inheritance]]
    - [[Depend on Abstraction]]
    - [[Refactoring]]
    - [[Test-Driven Development]] (TDD)
    - [[Dependency Injection]]
- **[[Design Patterns]]**
    - **[[Creational patterns]]**
        - [[Singleton Pattern]]
        - [[Factory Method Pattern]]
        - [[Abstract Factory Pattern]]
        - [[Builder Pattern]]
        - [[Prototype Pattern]]
    - **[[Structural patterns]]**
        - [[Adapter Pattern]]
        - [[Bridge Pattern]]
        - [[Composite Pattern]]
        - [[Decorator Pattern]]
        - [[Facade Pattern]]
        - [[Flyweight Pattern]]
        - [[Proxy Pattern]]
    - **[[Behavioral patterns]]**
        - [[Chain Of Responsibility Pattern]]
        - [[Command Pattern]]
        - [[Iterator Pattern]]
        - [[Mediator Pattern]]
        - [[Memento Pattern]]
        - [[Observer Pattern]]
        - [[State Pattern]]
        - [[Strategy Pattern]]
        - [[Template Method Pattern]]
        - [[Visitor Pattern]]
    - **Concurrency Patterns**
        - [[Thread Producer-Consumer]]
        - [[Reactor Pattern]]
        - [[Thread Pool Pattern]]
        - [[Future Pattern]]
    - **Anti-Patterns**
        - [[God Object]]
        - [[Spaghetti Code]]
        - [[Golden Hammer]]

---

## 2. **Software Architecture and System Design**

- **Architectural Patterns**
    - [[Monolithic Architecture Pattern]]
    - [[Layered Architecture Pattern]]
    - [[Client-Server Architecture Pattern]]
    - [[Model-View-Controller Pattern]]
    - [[Service-Oriented Architecture]] (SOA)
    - [[Microservices Architecture Pattern]]
    - [[Serverless Architecture Pattern]]
    - [[Event-driven Architecture Pattern]]
    - [[Message-driven Architecture Pattern]]
    - [[Event Sourcing Architecture Pattern]]
    - [[Domain Driven Design]]
    - [[Onion Architecture Pattern]]
    - [[Hexagonal Architecture Pattern]]
    - [[Clean Architecture]]
    - [[Reactive Architecture]]
    - [[Actor Architecture Pattern]]
    - [[Master-Slave Architecture Pattern]]
    - [[Broker Architecture Pattern]]
    - [[Pipe-Filter Architecture Pattern]]
    - [[Peer-to-Peer Architecture Pattern]]
    - [[Space-Based Architecture Pattern]]
    - [[Microkernel Architecture Pattern]]
- **Design Considerations**
    - [[Scalability]]
        - [[Horizontal Scaling]]
        - [[Vertical Scaling]]
    - [[Fault Tolerance]]
    - [[High Availability]]
    - [[Load Balancing]]
        - [[Load Balancing Algorithms]]
    - [[Data Partitioning and Sharding]]
    - [[Data Replication]]
    - [[Caching Strategies]]
    - [[CAP Theorem]]
    - [[Consensus Algorithms]]
    - [[Orchestration and Choreography]]
    - [[Resilience Patterns]]
        - [[Circuit Breaker Pattern]]
        - [[Bulkhead Pattern]]
        - [[Retry Pattern]]
    - [[Service Registry Pattern|Service Discovery]]
    - [[Configuration Management]]
	    - [[Externalized Configuration|Externalized Config]]
    - [[System Observability]]
        - [[Monitoring and Logging]]
        - [[Tracing]]
        - [[Performance Metrics]]
    - [[Deployment Strategies]]
        - [[Blue-Green Deployment]]
        - [[Canary Deployment]]
        - [[Strangler Fig Pattern]]

---

## 3. **Distributed Systems**

- **Concepts and Theories**
    - [[Distributed Systems]]
    - [[Distributed Transactions]]
    - [[Distributed Caching]]
    - [[Distributed Tracing]]
    - [[CAP Theorem]]
    - [[Consensus Algorithms]] (e.g., Paxos, Raft)
    - [[Data Replication]]
    - [[Fault Tolerance]]
    - [[Leader Election Algorithms]]
- **Technologies**
    - [[Message brokers]]
        - [[Apache Kafka]]
        - [[RabbitMQ]]
    - [[Distributed Databases]]
    - [[Service Mesh]]
    - [[Sidecar Pattern]]

---

## 4. **Web Technologies**

- **Networking Fundamentals**
    - [[OSI Model]]
    - [[TCP]]
    - [[UDP]]
    - [[Internet Protocol|IP]]
        - [[IPv4]]
        - [[IPv6]]
    - [[Domain Name System|DNS]]
    - [[Network Address Translation]] (NAT)
    - [[Address Resolution Protocol]] (ARP)
- **Web Protocols**
    - [[HTTP]]
        - [[HTTP 1.1]]
        - [[HTTP 2.0]]
        - [[HTTP 3.0]]
        - [[HTTP Methods]]
        - [[HTTP Status Codes]]
    - [[HTTPS]]
    - [[SSL and TLS Protocols]]
    - [[QUIC Protocol]]
    - [[WebSockets]]
    - [[Server-Sent Events]]
    - [[File Transfer Protocol|FTP]]
    - [[SMTP]]
    - [[SSH]]
- **Data Formats and Encodings**
    - [[JSON]]
    - [[XML]]
    - [[Protocol Buffers|Protobuf]]
    - [[Multipurpose Internet Mail Extensions|MIME Types]]
    - [[UTF-8]]
    - [[ASCII]]
- **[[Web Security]]**
    - [[Cross-Origin Resource Sharing]] (CORS)
    - [[Cross-Site Scripting]] (XSS)
    - [[Cross-Site Request Forgery]] (CSRF)
    - [[SQL Injection]]
    - [[Clickjacking]]
    - [[Input Validation]]
    - [[Web Application Firewalls]]
    - [[Zero Trust Security]]
- **Session and State Management**
    - [[Session Management]]
    - [[Web Cookies|Cookies]]
    - Web Storage
        - [[Web Local Storage|LocalStorage]]
        - [[Web Session Storage|SessionStorage]]
- **[[Caching]] and Performance**
    - [[HTTP Caching]]
    - [[Caching Strategies]]
    - [[Content Delivery Networks|CDNs]]
    - [[Lazy Loading]]
- **[[Web Servers]] and Clients**
    - [[Web Servers]]
        - [[Apache]]
        - [[Nginx]]
        - [[IIS]]


---

## 5. **APIs and Integration**

- **API Design Principles**
    - [[API-First]]
    - [[API Gateway]]
    - [[API Versioning]]
    - [[API Documentation]]
    - [[API Monitoring]]
- **[[API Architectures]]**
    - [[REST API]]
        - [[HATEOAS]]
    - [[SOAP API]]
    - [[GraphQL API]]
        - [[GraphQL Subscriptions]]
    - [[gRPC API]]
        - [[Remote Procedure Call]]
        - [[Protocol Buffers|Protobuf]]
    - [[WebHooks API]]
    - [[WebSockets]]
- **API Security**
    - **[[Authentication and Authorization]]**
        - [[Authentication]]
        - [[Authorization]]
        - [[Access Control Lists]]
        - [[JSON Web Tokens]]
        - [[OAuth 2.0]]
        - [[OpenID Connect]]
        - [[Security Assertion Markup Language|SAML]]
    - **Security Protocols and Policies**
        - [[Security Policies]]
        - [[Cross-Origin Resource Sharing]] (CORS)
        - [[Security Policies]]
    - **Threat Management**
        - [[Intrusion Detection Systems]] (IDS)
        - [[Rate Limiting]]
        - [[OWASP API Security]]
        - [[Input Validation]]
    - **Security Practices**
        - [[Security Testing]]
        - [[API Throttling]]
    - **Data Protection**
        - [[Cryptography]]
        - [[Data Masking]]
        - [[GDPR Complience]]
- **Integration Patterns**
    - [[Service-Oriented Architecture]] (SOA)
    - [[Batch Integration]]

---

## 6. **Databases and Data Storage**

- **[[Relational Databases]]**
    - [[Relational Databases]]
    - [[SQL Operations]]
    - [[Advanced Querying Techniques]]
    - [[Data Integrity and Transactions]]
    - [[Database Indexing]]
    - [[Data Normalization]]
    - [[SQL Advanced Features|SQL Procedures]]
    - [[SQL Advanced Features|SQL Views]]
- **[[Non-Relational Databases]] (NoSQL)**
    - [[Document-Oriented Databases]]
    - [[Key-Value Databases]]
    - [[Wide-Column Databases]]
    - [[Graph Databases]]
    - [[Time Series Databases]]
    - [[Transactions in NoSQL]]
- **Database Concepts**
    - [[CAP Theorem]]
    - [[ACID Properties]]
    - [[BASE Properties]]
    - [[Database Design]]
        - [[Data Models]]
        - [[Database per Service]]
    - [[Sharding and Partitioning]]
    - [[Database Consistency|Consistency]]
    - [[Object-Relational Mapping]] (ORM)
        - [[Entity Framework]]
        - [[Hibernate]]
- **[[Distributed Databases]]**
    - [[Distributed Transactions]]
    - [[Data Replication|Replication Strategies]]
    - [[Consistency Models]]
    - [[Database Scaling]]
- **Data Warehousing and Big Data**
    - [[Data Warehousing]]
    - [[Data Lakes]]
    - [[Big Data Technologies]]
    - [[ETL Processes]]
- **Data Governance and Compliance**
    - [[Data Privacy Regulations]]
    - [[GDPR Complience|GDPR]]

---

## 7. **Cloud Computing**

- **Cloud Providers**
    - [[Azure]]
    - [[AWS]]

- **Cloud Concepts**
    - [[Cloud Architecture]]
    - [[Infrastructure as a Service|IaaS]]
    - [[Platform as a Service|PaaS]]
    - [[Software as a Service|SaaS]]
    - [[Cloud Security]]
    - [[DevOps Practices]]
- **[[Cloud Network|Cloud Services]]**
    - [[Serverless Architecture Pattern|Serverless Computing]]
        - [[Azure Functions]]
        - [[AWS Lambda]]
    - **Containers and Orchestration**
        - [[Docker]]
        - [[Kubernetes]]
    - [[Auto Scaling]]
    - [[Load Balancing]]
    - [[Identity Management|Identity and Access Management (IAM)]] 
    - **[[Infrastructure as Code]]**
        - [[Azure Resource Manager]] (ARM)
    - [[Continuous Integration and Continuous Deployment]] (CI/CD)

---

## 8. **DevOps and CI/CD**

- **DevOps Principles**
    - [[DevOps Practices]]
    - [[Continuous Integration and Continuous Deployment]] (CI/CD)
    - [[Infrastructure as Code]] (IaC)
    - [[Configuration Management]]
    - [[Monitoring and Logging]]
- **Tools and Technologies**
    - [[Azure DevOps]]
    - [[Docker]]
    - [[Kubernetes]]
- **[[Deployment Strategies]]**
    - [[Blue-Green Deployment]]
    - [[Canary Deployment]]
    - [[Rolling Deployment]]
- **[[Version Control Systems]]**
    - [[Git Basics]]
    - [[Branching and Merging]]
    - [[Collaboration Workflows]]

---

## 9. **Security**

- **Application Security**
    - [[Input Validation]]
    - [[Authentication and Authorization]]
    - [[Session Management]]
    - [[Cryptography]]
        - [[Cryptography Encryption|Encryption]]
        - [[Cryptography Hashing|Hashing]]
    - [[Vulnerabilities and Threats]]
        - [[SQL Injection]]
        - [[Cross-Site Scripting]] (XSS)
        - [[Cross-Site Request Forgery]] (CSRF)
- **Network Security**
    - [[Network Firewall|Firewalls]]
    - [[Intrusion Detection Systems]] (IDS)
    - [[VPN]] (Virtual Private Network)
    - [[IPSec]]
    - [[SSL and TLS Protocols]]
- **Security Protocols**
    - [[OAuth 2.0]]
    - [[OpenID Connect]]
    - [[Security Assertion Markup Language|SAML]]
- **Security Standards and Compliance**
	- [[Public Key Infrastructure]]
    - [[GDPR Complience]]
    - [[Security Policies]]
- **Identity and Access Management**
    - [[Identity Management]]
    - [[Role-Based Access Control]]
    - [[Multi-Factor Authentication]]
    - [[Single Sign-On]]
- **DevSecOps**
    - [[Security Testing]]


---

## 10. **Testing and Quality Assurance**

- **[[Software Testing]] Fundamentals**
    - Testing Types
        - [[Unit Testing]]
        - [[Integration Testing]]
        - [[Functional Testing]]
        - [[Regression Testing]]
        - [[Stress Testing]]
        - Performance Testing
        - [[Security Testing]]
    - [[Test-Driven Development]] (TDD)
    - [[Behavior-Driven Development]] (BDD)
- **Testing Tools**
    - JUnit
    - NUnit
    - xUnit.net
    - Selenium
    - Postman
- **Continuous Testing**
    - [[Automated Testing]]
    - [[Testing in CI/CD Pipelines]]
    - [[Mocking and Stubbing]]
    - [[Test Automation Frameworks]]

---

## 11. **Networking**

- **Network Fundamentals**
    - [[OSI Model]]
    - [[TCP]]
    - [[UDP]]
    - [[Internet Protocol|IP]]
        - [[IPv4]]
        - [[IPv6]]
    - [[Domain Name System|DNS]]
    - [[Dynamic Host Configuration Protocol]]
    - [[Network Address Translation|NAT]]
    - [[Address Resolution Protocol|ARP]]
- **Network Protocols**
    - [[HTTP]]
    - [[HTTPS]]
    - [[FTP]]
    - [[SMTP]]
    - [[SSH]]
- **Network Security**
    - [[Network Firewall|Firewalls]]
    - [[VPN]]
    - [[IPSec]]
    - [[SSL and TLS Protocols]]
- **Load Balancing and Proxying**
    - [[Load Balancing]]
    - [[Reverse Proxy]]
    - [[Content Delivery Networks]] (CDNs)
- **Advanced Networking**
    - [[Software-Defined Networking]] (SDN)
    - [[Network Virtualization]]
    - [[Quality of Service]] (QoS)

---

## 12. **Additional Topics**

- **Digital Garden Philosophy**
    - [[../index|Welcome]]
    - [[Digital Garden]]

- **Ethics in Software Development**
- **[[Software Development Life Cycle (SDLC)]]**
    - [[Requirements Gathering]]
    - [[Design Phase]]
    - [[Implementation]]
    - [[Testing Phase]]
    - [[Deployment]]
    - [[Maintenance]]
    - [[Agile Methodologies]]
        - [[Scrum]]
        - [[Kanban]]
    - [[Waterfall Model]]
    - [[Spiral Model]]
- **Project Management**
    - [[Project Planning]]
    - [[Risk Management]]
    - [[Stakeholder Communication]]
    - [[Team Collaboration Tools]]
- **[[Data Structures and Algorithms]]**
    - [[Data Structures]]
        - [[Arrays]]
        - [[Linked Lists]]
        - [[Stacks]]
        - [[Queues]]
        - [[Trees]]
        - [[Graphs]]
        - [[Hash Tables]]
    - [[Algorithms]]
        - [[Sorting Algorithms]]
        - [[Searching Algorithms]]
        - [[Graph Algorithms]]
        - [[Dynamic Programming]]
        - [[Greedy Algorithms]]
    - [[Complexity Analysis]]
        - [[Big O Notation]]
        - [[Time Complexity]]
        - [[Space Complexity]]