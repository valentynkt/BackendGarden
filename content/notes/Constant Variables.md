Date and Time: <u> 2023-11-07 16:18 </u>
Status: #LearningIT
Tags: [[CSharp]], [[Data Types CSharp]], [[Types of Variables]]

# Constant Variables
If a variable is declared by using the keyword “**const**” then it as a constant variable and these constant variables can’t be modified once after their declaration, so it’s must initialize at the time of declaration only.

**Example 1:** Below program will show the error because no value is provided at the time of constant variable declaration. 
``` csharp
// C# program to illustrate the
// constant variables
using System;
class Program {

	// constant variable max
	// but no value is provided
	const float max;

	// Main Method
	public static void Main()
	{
		
		// creating object
		Program obj = new Program();
		
		// it will give error
		Console.WriteLine("The value of b is = " + Program.b);
	}
}
```
**Error:**
``` ad-error
 prog.cs(8,17): error CS0145: A const field requires a value to be provided 
```


**Example 2:** Program to show the use of constant variables  
``` csharp
// C# program to illustrate the
// constant variable
using System;
class Program {

	// instance variable
	int a = 10;
	
	// static variable
	static int b = 20;

	// constant variable
	const float max = 50;

	// Main Method
	public static void Main()
	{
		
		// creating object
		Program obj = new Program();
		
		// displaying result
		Console.WriteLine("The value of a is = " + obj.a);
		Console.WriteLine("The value of b is = " + Program.b);
		Console.WriteLine("The value of max is = " + Program.max);
	}
}
```

**Output:** 
```
The value of a is = 10
The value of b is = 20
The value of max is = 50
```

**Important Points about Constant Variables:**  

-   The **behavior of constant variables will be similar to the behavior of static variables** i.e. initialized one and only one time in the life cycle of a class and doesn’t require the instance of the class for accessing or initializing.
-   The **difference between a static and constant variable** is, static variables can be modified whereas constant variables can’t be modified once it declared.