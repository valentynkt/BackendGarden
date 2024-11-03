Date and Time: <u> 2023-11-08 20:09 </u>
Status: #LearningIT
Tags: [[CSharp]], [[Object Type]]

# Equality Interfaces

## Intro
``` ad-important
- [[#IEquatable]]
- [[#IEqualityComparer]]
- [[#IComparable]]
- [[#IComparer]]
```
What is the difference between these confusing words? They are very similar to each other. In this article, we will learn everything about them. But first, you need to learn two important prerequisites: **Equals** and **GetHashCode.**
So our topics are:
``` 
- `Equals`
- `GetHashCode`
- `IEquatable<T>`
- `IEqualityComparer<T>`
- `IComparable<T>`
- `IComparer<T>`
```

## [[Object Type#Equals|Equals]]
![[Object Type#Equals]]

## [[Object Type#GetHashCode|GetHashCode]]
![[Object Type#GetHashCode]]

## `IEquatable<T>`

As you can see, in the Equals we have cast and it isn’t type-safe. with this IEquatable interface, we will have a type-safe Equals function. You will have better performance if you don’t use casting.

First, let’s look at the `IEquatable<T>` interface:

``` csharp
public interface IEquatable<T>  
{  
    bool Equals(T other);  
}
```

It has only single function. The Equals function of the base object takes object type, but this new Equals function takes T type.

``` csharp
class Student : IEquatable<Student>  
{  
    public string Name { get; set; }  
    public int Number { get; set; }  
    public int SerialNo { get; set; }  
    public int Grade { get; set; }  
  
    public bool Equals(Student other)  
    {  
        if (other.SerialNo == SerialNo)  
            return true;  
        else  
            return false;  
    }  
}
```

Body of the Equals is like previous overridden base object’s Equals but here we don’t have casting. After implementing the `IEquatable<T>` you can see the second Equals function which accepts the Student type.
![[Pasted image 20231108204019.png]]

> The `IEquatable<T>` interface is used by generic collection objects such as `Dictionary<TKey,TValue>`, `List<T>`, and `LinkedList<T>` when testing for equality in such methods as Contains, IndexOf, LastIndexOf, and Remove. It should be implemented for any object that might be stored in a generic collection.

## `IEqualityComparer<T>`
Suppose our Student class in different conditions, has different equality concepts. For example in one case, Serial No determines the equality concept, and in another, the Number. How we should implement that? with Creating Equals1 and Equals2? It’s impossible because the base object and `IEquality<T>` have one Equals function.

That is what `IEqualityComparer<T>` are for. But notice the Student class won’t implement that. We should create other classes to hold Student’s different equality concepts and give them to every function that needs to know the equality of our class.

``` csharp
public interface IEqualityComparer<in T>  
{  
    bool Equals(T x, T y);  
    int GetHashCode(T obj);  
}
```

Let’s create two classes that hold Student’s equality concepts:
 
``` csharp
class SerialNoEqualityComparer : IEqualityComparer<Student>  
  {  
      public bool Equals(Student s1, Student s2)  
      {  
          if (s1 == null && s2 == null)  
              return true;  
          else if (s1 == null || s2 == null)  
              return false;  
          else if (s1.SerialNo == s2.SerialNo)  
              return true;  
          else  
              return false;  
      }  
  
      public int GetHashCode(Student student)  
      {  
          return student.SerialNo.GetHashCode();  
      }  
  }
```

**and**

``` csharp
class NumberEqualityComparer : IEqualityComparer<Student>  
  {  
      public bool Equals(Student s1, Student s2)  
      {  
          if (s1 == null && s2 == null)  
              return true;  
          else if (s1 == null || s2 == null)  
              return false;  
          else if (s1.Number == s2.Number)  
              return true;  
          else  
              return false;  
      }  
  
      public int GetHashCode(Student student)  
      {  
          return student.Number.GetHashCode();  
      }  
  }
```

And we can use these classes in Contains (import `System.Linq` to access this function for List)
  
``` csharp
List<Student> students = new List<Student>();  
// Add some students to this List
var specificStudent = new Student()  
{ SerialNo = 12, Number = 34, Grade = 3, Name = "Joe" };

bool exist1 = students  
    .Contains(specificStudent, new NumberEqualityComparer());  
bool exist2 = students  
    .Contains(specificStudent, new SerialNoEqualityComparer());
```

exist1 will be true if in students list there is at least one student with Number=34 and exist2 will be true if in students list there is at least one student with SerialNo=12.

It would be great if you use nested class and write the SerialNoEqualityComparer and NumberEqualityComparer inside the student class. because no other class uses the.

`IEqualityComparer<T>` is also useful when a class is closed to us. For example, that class exist in a third-party library and we can’t implement it with `IEquatable<T>`

## `IComparable<T>`

Do you want to order your objects? To do that, It’s needed to know which is bigger than other. Getting this cold is done with the help of `IComparable<T>` with its function.

``` csharp
public interface IComparable<in T>  
{  
    int CompareTo(T other);  
}
```

As you can see, the output of the CompareTo method is int. the output number should be only these three numbers: 1, 0, -1. The role of choosing the number for return is:

If the given object is **smaller** than the current object, return 1
If the given object is **equal to** the current object, return 0
If the given object is **bigger** than the current object, return -1

We decide the SerialNo determines which class is bigger. So we implement an IComparable interface like this:

``` csharp
class Student : IComparable<Student>  
{  
    public string Name { get; set; }  
    public int Number { get; set; }  
    public int SerialNo { get; set; }  
    public int Grade { get; set; }  
  
    public int CompareTo(Student other)  
    {  
        if (other.SerialNo < SerialNo)  
            return 1;  
        else if (other.SerialNo == SerialNo)  
            return 0;  
        else  
            return -1;  
    }  
}
```

Simple value type variables have implemented the IComparable interface. so for simplicity, we can write CompareTo like this:

``` csharp
public int CompareTo(Student other)  
{  
    return SerialNo.CompareTo(other.SerialNo);  
}
```

Now we can use the Sort function of the List class (The Sort function calls the CompareTo function inside itself):

``` csharp
List<Student> students = new List<Student>();  
// add some students  
students.Sort();
```

## `IComparer<T>`

Like to the IEqualityComparer, which help us inject the equality concept into functions, IComparer does same work. So we should create another classe that holds greetness logic on our class. first look at the IComparer interface:

``` csharp
public interface IComparer<in T>  
{  
    int Compare(T x, T y);  
}
```

Now with this interface, we can create a SerialNoComparer class like this:

``` csharp
class SerialNoComparer : IComparer<Student>  
{  
    public int Compare(Student s1, Student s2)  
    {  
        return s1.SerialNo.CompareTo(s2.SerialNo);  
    }  
}
```

And it’s usage is here:

``` csharp
students.Sort(new SerialNoComparer());
```

don’t forget to act like `IEqualityComparer<T>` and use nested class to have beautiful design.
# Reference:
https://sasan-salem.medium.com/mystery-of-equality-in-c-iequatable-t-iequalitycomparer-t-icomparable-t-icomparer-t-ab98bd2fe541


 