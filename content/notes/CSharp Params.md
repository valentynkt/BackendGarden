Date and Time: <u> 2023-11-07 16:34 </u>
Status: #LearningIT
Tags: [[CSharp]]

# CSharp Params
## Intro

Params is an important keyword in [[CSharp|C#]] . It is used as a parameter which can take the **variable number of arguments**.

``` ad-important
-   It is useful when programmer don’t have any prior knowledge about the number of parameters to be used.
-   Only one Params keyword is allowed and no additional Params will be allowed in function declaration after a params keyword.
-   The length of params will be zero if no arguments will be passed.
```

**Examples:** To illustrate the use of **params keyword**
-   Simple program to show the params keyword usage
 ``` C#
 // use of params keyword
 using System;
 namespace Examples {
 	
 class Geeks {
 	
 	// function containing params parameters
 	public static int Add(params int[] ListNumbers)
 	{
 		int total = 0;
 		
 		// foreach loop
 		foreach(int i in ListNumbers)
 		{
 			total += i;
 		}
 		return total;
 	}
 		
 // Driver Code	
 static void Main(string[] args)
 {
 	
 	// Calling function by passing 5 
 	// arguments as follows
 	int y = Add(12,13,10,15,56);
 	
 	// Displaying result
 	Console.WriteLine(y);
 } 
 }
 }
 ```
 **Output :**
 ```
 106
```
**Explanation :** There is no need to define the size of the array because using params keyword in above program, the Integer data will be in the form: 
ListNumbers 
[0] 12 
[1] 13 
[2] 10 
[3] 15 
[4] 56

- Object type Params will allow any type of arguments and any number of arguments as follows :
 ```C#
 // use of object type params
 using System;
 
 namespace Example2 {
 class Geeks {
  		// function using object type params
 		public void result(params object[] array)
 		{
 			for (int i = 0; i < array.Length; i++)
 			{
 				
 				// Display result
 				Console.WriteLine(array[i]);
 			}	
 		}
 
 	// Driver Code
 	static void Main(string[] args)
 	{
 		Geeks gfg = new Geeks();
 		
 		// Variable length arguments
 		gfg.result("Geeks", "GFG",
 				"ProGeek Cup 2.0",
 						"G4G", "100");
 	}
 
 } 
 }

  ```
**Output :**

```
Geeks
GFG
ProGeek Cup 2.0
G4G
100
```

**Explanation :** In above program the object type params parameter can accept any type of data and any number of arguments.