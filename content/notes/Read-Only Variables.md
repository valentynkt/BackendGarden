Date and Time: <u> 2023-11-07 16:21 </u>
Status: #LearningIT
Tags: [[CSharp]], [[Data Types CSharp]], [[Types of Variables]]

# Read-Only Variables

If a variable is declared by using the **readonly keyword** then it will be read-only variables and these variables can’t be modified like constants but after initialization. 

-   It’s not compulsory to initialize a read-only variable at the time of the declaration, they can also be initialized under the constructor.
-   The behavior of read-only variables will be similar to the behavior of non-static variables, i.e. initialized only after creating the instance of the class and once for each instance of the class created.

## Example 1:
In below program, read-only variables k is not initialized with any value but when we print the value of the variable the default value of int i.e 0 will display as follows :

``` csharp
// C# program to show the use
// of readonly variables
// without initializing it
using System;
class Program {

	// instance variable
	int a = 80;
	
	// static variable
	static int b = 40;

	// Constant variables
	const float max = 50;
	
	// readonly variables
	readonly int k;

	// Main Method
	public static void Main()
	{
		
		// Creating object
		Program obj = new Program();
		
		Console.WriteLine("The value of a is = " + obj.a);
		Console.WriteLine("The value of b is = " + Program.b);
		Console.WriteLine("The value of max is = " + Program.max);
		Console.WriteLine("The value of k is = " + obj.k);
	}
}
```

**Output:** 
```
The value of a is = 80
The value of b is = 40
The value of max is = 50
The value of k is = 0
```

## Example 2:
To show the initialization of readonly variable in the constructor.
``` csharp
// C# program to illustrate the
// initialization of readonly
// variables in the constructor
using System;
class Geeks {

	// instance variable
	int a = 80;
	
	// static variable
	static int b = 40;

	// Constant variables
	const float max = 50;
	
	// readonly variables
	readonly int k;

	// constructor
	public Geeks()
	{

		// initializing readonly
		// variable k
		this.k = 90;
	}

	// Main Method
	public static void Main()
	{
		
		// Creating object
		Geeks obj = new Geeks();

		Console.WriteLine("The value of a is = " + obj.a);
		Console.WriteLine("The value of b is = " + Geeks.b);
		Console.WriteLine("The value of max is = " + Geeks.max);
		Console.WriteLine("The value of k is = " + obj.k);
	}
}
```

**Output :** 
```
The value of a is = 80
The value of b is = 40
The value of max is = 50
The value of k is = 90
```

## Example 3: 
Program to demonstrate when the readonly variable is initialized after its declaration and outside constructor 

``` csharp
// C# program to illustrate the
// initialization of readonly
// variables twice
using System;
class Geeks {

	// instance variable
	int a = 80;
	
	// static variable
	static int b = 40;

	// Constant variables
	const float max = 50;
	
	// readonly variables
	readonly int k;

	// constructor
	public Geeks()
	{

		// first time initializing
		// readonly variable k
		this.k = 90;
	}

	// Main Method
	public static void Main()
	{
		
		// Creating object
		Geeks obj = new Geeks();

		Console.WriteLine("The value of a is = " + obj.a);
		Console.WriteLine("The value of b is = " + Geeks.b);
		Console.WriteLine("The value of max is = " + Geeks.max);

		// initializing readonly variable again
		// will compile time error
		obj.k = 55;

		Console.WriteLine("The value of k is = " + obj.k);
	}
}
```

**Error:**
``` ad-error
 prog.cs(41,13): error CS0191: A readonly field \`Geeks.k’ cannot be assigned to (except in a constructor or a variable initializer)
```

**Important Points about Read-Only Variables:** 
``` csharp
-   The only **difference between read-only and instance variables** is that the instance variables can be modified but read-only variable can’t be modified.
-   Constant variable is a fixed value for the whole class whereas read-only variables is a fixed value specific to an instance of class.
```
