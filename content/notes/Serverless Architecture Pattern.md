---
created: 2024-05-09 19:33
aliases:
  - Serverless
  - Serverless Architecture
  - Function-as-a-Service
  - FaaS
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Architectural Patterns]]

# Serverless Architecture Pattern

## Diagram

![[Pasted image 20240513195606.jpg]]

## Overview
_Pay As You Go_
Serverless architecture, also known as Function-as-a-Service (FaaS), is a cloud computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers. The developers write and deploy code in the form of functions, and the infrastructure concerns are handled by the cloud provider, enabling developers to focus solely on individual functions in their applications.

## Key Features of Serverless Architecture

- **[[Event-driven Architecture Pattern|Event-Driven Pattern]]**: Typically, applications are built around events, with the serverless provider executing the function code in response to requests or events.
- **Scalability**: Automatic scaling is a cornerstone of serverless architecture. The function can scale automatically depending on the number of requests, from a few to several thousand without intervention.
- **Micro-billing**: Users are charged based on the actual amount of resources consumed by an application, rather than pre-purchased capacity.

## How Serverless Works

In serverless architectures, developers deploy small snippets of code (functions), which are executed in response to events such as [[HTTP]] requests, database events, queue operations, or file uploads. The serverless platform automatically handles the deployment, scaling, and management of the infrastructure required to execute the code.


> [!example]- Examples of FaaS
> Serverless computing is offered by various cloud providers, each with unique features:
>
>- **[[AWS Lambda]]**: Allows running code in response to events, managing neither servers nor infrastructure.
>- **[[Azure Functions]]**: Supports complex orchestrations through integration with Azure services.
>- **Google Cloud Functions**: Triggers code execution based on Google Cloud events in a managed environment.
>- **IBM Cloud Functions**: Utilizes Apache OpenWhisk to execute functions based on events.
>- **Cloudflare Workers**: Runs code at the edge, closer to users, supporting multiple programming languages.
>
>These platforms provide tools and integration options suited to various development needs.


## Pros/Cons

> [!success]- Pros
> 
> - **Cost-Effectiveness**: Pay only for the compute time you consume, reducing the cost of maintaining idle server resources.
> - **Developer Productivity**: Increases developers' productivity by allowing them to focus on writing application logic rather than managing infrastructure.
> - **Scalability**: The architecture scales automatically with the application's demand, making it easier to handle peaks in usage without provisioning extra resources.


> [!danger]- Cons
> 
> - **Cold Start**: Initiating a function may take longer when the function hasn't been used recently, which could lead to higher latency in some requests.
> - **Vendor Lock-in**: Moving to another provider can be difficult because applications are often tightly integrated with the provider’s APIs and services.
> - **Complexity in Testing**: Testing and debugging can become more challenging due to the distributed nature of applications.
> - **Limited Custom Configuration**: Serverless platforms often offer predefined configurations with limited flexibility, which can be restrictive if custom setups (e.g., specific OS configurations) are needed.

## Conclusion

Serverless architecture offers a compelling model for certain types of applications, particularly those with variable workloads and those that require rapid development. It can lead to significant cost savings and productivity gains but requires careful consideration of potential drawbacks such as vendor lock-in and testing complexity.