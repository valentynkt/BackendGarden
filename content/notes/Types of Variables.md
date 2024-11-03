
Date and Time: <u> 2023-11-07 16:03 </u>
Status: #LearningIT
Tags:  [[CSharp]], [[Data Types CSharp]], [[Value-Reference Types]]

# Types of Variables
## Intro

A variable is a name given to a memory location and all the operations done on the variable effects that memory location. In [[CSharp|C#]] , all the variables must be declared before they can be used. It is the basic unit of storage in a program. The value stored in a variable can be changed during program execution. 

## Types of Variables

``` ad-important
- [[#Local variables]]
- [[#Instance variables or Non – Static Variables]]
- [[#Static Variables or Class Variables]]
- [[#Constants Variables]]
- [[#Read-Only Variables]]
```

### Local Variables

A variable defined within a block or method or constructor is called local variable.  

-   These variables are created when the block is entered or the function is called and destroyed after exiting from the block or when the call returns from the function.
-   The scope of these variables exists only within the block in which the variable is declared. i.e. we can access these variables only within that block.

#### Example : 
``` CSharp
// C# program to demonstrate
// the local variables
using System;
class StudentDetails {
	
	// Method
	public void StudentAge()
	{
		
		// local variable age
		int age = 0;
		
		age = age + 10;
		Console.WriteLine("Student age is : " + age);
	}

	// Main Method
	public static void Main(String[] args)
	{
		
		// Creating object
		StudentDetails obj = new StudentDetails();
		
		// calling the function
		obj.StudentAge();
	}
}
```

**Output:** 

```
Student age is : 10
```

>In the above program, the variable “age” is a local variable to the function StudentAge(). If we use the variable age outside StudentAge() function, the compiler will produce an error as shown in below program.

#### Error: 

``` csharp
// C# program to demonstrate the error
// due to using the local variable
// outside its scope
using System;

class StudentDetails {
	
	// Method
	public void StudentAge()
	{
		
		// local variable age
		int age = 0;
		age = age + 10;
	}

	// Main Method
	public static void Main(String[] args)
	{
		
		// using local variable age outside it's scope
		Console.WriteLine("Student age is : " + age);
	}
}
```

**Error:**
``` ad-error
prog.cs(22,43): error CS0103: The name \`age’ does not exist in the current context
```

### Instance Variables or Non – Static Variables

Instance variables are non-static variables and are declared in a class but outside any method, constructor or block. As instance variables are declared in a class, these variables are created when an object of the class is created and destroyed when the object is destroyed. Unlike local variables, we may use access specifiers for instance variables.

#### Example: 
``` csharp
// C# program to illustrate the
// Instance variables
using System;

class Marks {
	
	// These variables are instance variables.
	// These variables are in a class and
	// are not inside any function
	int engMarks;
	int mathsMarks;
	int phyMarks;

	// Main Method
	public static void Main(String[] args)
	{
		
		// first object
		Marks obj1 = new Marks();
		obj1.engMarks = 90;
		obj1.mathsMarks = 80;
		obj1.phyMarks = 93;

		// second object
		Marks obj2 = new Marks();
		obj2.engMarks = 95;
		obj2.mathsMarks = 70;
		obj2.phyMarks = 90;

		// displaying marks for first object
		Console.WriteLine("Marks for first object:");
		Console.WriteLine(obj1.engMarks);
		Console.WriteLine(obj1.mathsMarks);
		Console.WriteLine(obj1.phyMarks);

		// displaying marks for second object
		Console.WriteLine("Marks for second object:");
		Console.WriteLine(obj2.engMarks);
		Console.WriteLine(obj2.mathsMarks);
		Console.WriteLine(obj2.phyMarks);
	}
}
```

**Output :** 

```
Marks for first object:
90
80
93
Marks for second object:
95
70
90
```

**Explanation:** In the above program the variables, engMarks, mathsMarks, phyMarksare instance variables. If there are multiple objects as in the above program, each object will have its own copies of instance variables. It is clear from the above output that each object will have its own copy of the instance variable.

### Static Variables or Class Variables

Static variables are also known as Class variables. If a variable is explicitly declared with the static modifier or if a variable is declared under any static block then these variables are known as static variables. 

-   These variables are declared similarly as instance variables, the difference is that static variables are declared using the static keyword within a class outside any method constructor or block.
-   Unlike instance variables, we can only have one copy of a static variable per class irrespective of how many objects we create.
-   Static variables are created at the start of program execution and destroyed automatically when execution ends.

**Note:** To access static variables, there is no need to create any object of that class, simply access the variable as: 

```
class_name.variable_name;
```

**Example:** 
``` csharp
// C# program to illustrate
// the static variables
using System;
class Emp {

	// static variable salary
	static double salary;
	static String name = "Aks";

	// Main Method
	public static void Main(String[] args)
	{

		// accessing static variable
		// without object
		Emp.salary = 100000;
		
		Console.WriteLine(Emp.name + "'s average salary:"
										+ Emp.salary);
	}
}
```

**Output:** 

```
Aks's average salary:100000
```

``` ad-important
Initialization of non-static variables is associated with instance creation and constructor calls, so non-static variables can be initialized through the constructor also. We don’t initialize a static variable through constructor because every time constructor call, it will override the existing value with a new value.
```

### Difference between Instance variable & Static variable

-   Each object will have its own copy of instance variable whereas We can only have one copy of a static variable per class irrespective of how many objects we create.
-   Changes made in an instance variable using one object will not be reflected in other objects as each object has its own copy of instance variable. In the case of static, changes will be reflected in other objects as static variables are common to all object of a class.
-   We can access instance variables through object references and Static Variables can be accessed directly using class name.
-   In the life cycle of a class a static variable ie initialized one and only one time, whereas instance variables are initialized for 0 times if no instance is created and n times if n instances are created.
-   The Syntax for static and instance variables are :

``` csharp
 class Example
        {
            static int a; // static variable
            int b;        // instance variable
        }
```

### [[Constant Variables]]
![[Constant Variables]]


### Read-Only Variables
![[Read-Only Variables]]