---
created: 19-04-2024 14:21
status: Finalized ✅
aliases:
  - SRP
  - SRP in OOP
links: "[[SOLID Principles]]"
tags:
  - LearningIT

---
link: [[SOLID Principles|SOLID]]

# Single Responsibility Principle

## Overview
![[Pasted image 20240419175958.png]]
>[!important] **A class should have just one reason to change.**

The Single Responsibility Principle (SRP) is a basic rule in object-oriented programming that ensures each class in a program handles just one part of the software's functionality. According to SRP, a class should only have one reason to change, which means it should only have one job.

> [!abstract] 
>Applying SRP makes classes simpler to manage, test, and maintain. It focuses on giving each class one task to perform well, which reduces coding mistakes and improves the quality of the software. This principle helps keep the program organized and makes it easier to update as needs change.

## Content

### Principle Explained

The SRP encourages developers to design classes that are dedicated to one functionality:

> [!important]
> 
>- **Focused Classes**: Each class should handle a single functionality, avoiding the mixture of multiple tasks that complicate both the class's purpose and its future modifications.
>- **Minimized Impact of Changes**: Isolating responsibilities ensures that changes made to address one concern have minimal effects on other aspects of the program, fostering a more robust and less error-prone development environment.


> [!warning] 
> if a class does too many things, you have to change it every time one of these things changes. While doing that, you’re risking breaking other parts of the class which you didn’t even intend to change.


### Practical Example

Refactoring a class to adhere to SRP involves:

- **Identifying Multiple Behaviors**: Recognize when a class is handling more than one responsibility.
- **Separating Concerns**: Create new classes to handle each responsibility separately.

> [!danger] BEFORE
> BEFORE: A class with mixed responsibilities is harder to maintain.
>![[Pasted image 20231008182419.png]]


> [!success] AFTER
>AFTER: Each responsibility is handled by a dedicated class, leading to a cleaner design.
>![[Pasted image 20231008182537.png]]

# Revision History
- **CreatedAt**: 19-04-2024 14:21
- **UpdatedAt**: `$= dv.current().file.mtime`
