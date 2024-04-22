---
created: 19-04-2024 15:01
status: Finalized ✅
aliases:
  - OCP
  - OCP in OOP
links: "[[SOLID Principles]]"
tags:
  - LearningIT

---
link: [[SOLID Principles|SOLID]]


# Open Closed Principle

## Overview
![[Pasted image 20240419180012.png]]
> [!important] **Classes should be open for extension but closed for modification.**

  
The Open/Closed Principle (OCP) is a fundamental rule in object-oriented programming. It encourages classes and other software parts to be extendable without needing to change the existing code. This principle is all about making a system strong and easy to maintain. It means you can add new features without causing problems in what's already there.

> [!abstract] 
>Following the OCP prevents problems in existing features when you add new ones. It makes updating and expanding the software simpler. Essentially, you can add new features by creating new classes that build upon the existing ones, without having to touch the existing code.


## Content

### Principle Explained

The OCP promotes designing classes that are both open to extension and closed to modifications:

> [!important]
> 
> - **Extendable**: You can extend the functionalities of a class through subclasses.
> - **Non-modifiable**: Once completed, the original class should not need to be modified to add new features.

### Practical Application
  
When you follow the Open Closed Principle (OCP), you usually use interfaces or abstract classes. This helps create a codebase that can easily grow without having to change what's already there. By doing this, you keep your system intact and ready to adjust to new needs or changes.

### Practical Example

Consider a banking application with various account types each having different rules and interest calculations.

**Initial Implementation**: The initial class design directly incorporates multiple account types, leading to a rigid and difficult-to-modify structure.

> [!danger]- csharp
>``` csharp
>public class Account
>{
> public decimal Interest { get; set; }
> public decimal Balance { get; set; }
> public decimal CalcInterest(string accType)
> {
> if (accType == "Regular") {
> Interest = (Balance * 4) / 100;
> if (Balance < 1000) Interest -= (Balance * 2) / 100;
> if (Balance < 50000) Interest += (Balance * 4) / 100;
> }
> else if (accType == "Salary") {
> Interest = (Balance * 5) / 100;
> }
> else if (accType == "Corporate") {
> Interest = (Balance * 3) / 100;
> }
> return Interest;
> }
>}
>```

**Refactored Implementation**: By abstracting common functionalities into an interface and implementing specific behaviors in separate classes, we adhere to OCP.

> [!success]- csharp
>``` csharp
>interface IAccount
>{
> decimal Balance { get; set; }
> decimal CalcInterest();
>}
>
>public class RegularSavingAccount : IAccount
>{
> public decimal Balance { get; set; } = 0;
> public decimal CalcInterest()
> {
> decimal Interest = (Balance * 4) / 100;
> if (Balance < 1000) Interest -= (Balance * 2) / 100;
> if (Balance < 50000) Interest += (Balance * 4) / 100;
> return Interest;
> }
>}
>
>public class SalarySavingAccount : IAccount
>{
> public decimal Balance { get; set; } = 0;
> public decimal CalcInterest()
> {
> decimal Interest = (Balance * 5) / 100;
> return Interest;
> }
>}
>
>public class CorporateAccount : IAccount
>{
> public decimal Balance { get; set; } = 0;
> public decimal CalcInterest()
> {
> decimal Interest = (Balance * 3) / 100;
> return Interest;
> }
>}

This approach allows each account type to maintain its unique implementation while adhering to a common interface, facilitating easy expansions or modifications without altering the existing codebase.

Above code is implementing both OCP and [[Single Responsibility Principle|SRP]] principle, as each class is doing a single task and we are not modifying class and only doing an extension.

## Summary

>[!summary] 
>The Open/Closed Principle is instrumental in developing software that is capable of growing and changing with minimal disturbance to existing functionality. By designing software systems that are open for extension but closed for modification, developers can add new features with ease while maintaining stability in the existing code.


# Revision History
- **CreatedAt**: 19-04-2024 15:01
- **UpdatedAt**: `$= dv.current().file.mtime`
