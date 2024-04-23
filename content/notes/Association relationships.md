---
created: 18-04-2024 20:05
aliases:
  - Association relationships
  - UML Association Relationships
tags:
  - seed🌱
  - LearningIT
links: "[[Relations Between Objects]]"
---

link: [[Object Oriented Programming]] , [[Relations Between Objects]]

# Association relationships

## Content

![[Pasted image 20240328022132.png]]

Association in object-oriented design signifies a broader and more permanent relationship compared to simple dependencies:

> [!important]+ 
> Association often represents links like fields in a class that refer to other objects. These links enable one object to use or interact with another object continuously, unlike a simple dependency which might only represent temporary use.

## Example

Here's a practical example to illustrate association and its contrast with dependency:

> [!example]+ csharp
>``` csharp
> class Professor
>{
>    public Student Student { get; set; }
>
>    public void Teach(Course c)
>    {
>        this.Student.remember(c.GetKnowledge());
>    }
>}
>
>```

In this C# example, the `Professor` class has a property `Student` which exemplifies an association because it represents a permanent link to a `Student` object that any method of the `Professor` can use.

Meanwhile, the `Teach` method's use of the `Course` object to call `GetKnowledge` shows a [[Dependency relationships]]. Changes in `Course`'s method could disrupt the `Professor`'s functionality, highlighting how dependencies are based on method use.

The presence of both association and dependency in this example helps delineate the nuances between these two types of relationships.

# References

[[design-patterns-en.pdf]]

