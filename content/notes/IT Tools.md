---
created: 2024-09-26 15:13
aliases: 
tags:
  - LearningIT
  - seed🌱
---

link:

# IT Tools

YAML replacement : NUKE

## Nuke
C# instead of yaml for build steps(CI/CD). Can be executed locally and is just a C# project that can be executed

![[Pasted image 20240926151450.png]]

nuke --plan : show a graph for dependencies and flow

For parameters we can use:
``` csharp
[Parameter] 
readonly string Parameter;
```
and call it like this:
![[Pasted image 20240926151704.png]]