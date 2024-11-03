Date and Time: <u> 2023-11-02 01:15 </u>
Status: #LearningIT
Tags: [[CSharp]], [[Boxing And Unboxing]], [[Value-Reference Types]]

# Is and As Operators

## Is Operator
The `is` operator will check if the result of the expression is compatible with a given type by simply testing an expression against a pattern. It is sometimes called the operator of type testing, and it will check whether the runtime type of an expression's result is compatible with a given type. The test against patterns came to C# as a feature with version 7.0.

``` csharp

using System;

namespace asitis
{
    public class Student
    { }
    public class Teacher
    { }
    class itisas
    {
        static void testClass(object o)
        {
            if(o is Student)
                { Console.WriteLine($"The instance: {nameof(o)} we recieved as argument is from Student class!"); }
            else if(o is Teacher)
                { Console.WriteLine($"The instance: {nameof(o)} we recieved as argument is from Teacher class!"); }
            else
                { Console.WriteLine($"The instance: {nameof(o)} we recieved as argument is from neither Teacher nor Student class!"); }
        }
        static void Main(string[] args)
        {
            Student s = new Student();
            Teacher t = new Teacher();
            int i = 0;
            testClass(s);
            testClass(t);
            testClass(i);
            Console.ReadKey(); ;
        }
    }
}
```

We basically have two skeleton classes that allow us the create different instances. In our main class we have the function `testClass`, which takes an arbitrary object and prints out to the console whether it's a `Student`, a `Teacher`, or neither.

## As Operator
The `as` operator is used to perform conversions between compatible types. It has a very similar role to the `is` operator, however, it works differently under the hood.

Let's reuse our previous code to demonstrate the functionality.

``` csharp
using System;

namespace asitis
{
    public class Student
   {
   }
   public class Teacher
   {

    }
    class itisas
    {
        static void Main(string[] args)
        {
            object[] MyObjects = new object[4];
            MyObjects[0] = new Student();
            MyObjects[1] = new Teacher();
            MyObjects[2] = "Student";
            MyObjects[3] = "Teacher";
            for(int i = 0; i < 4; i++)
            {
                string s = MyObjects[i] as string;
                Console.Write($"Inspecting element: {MyObjects[i]}");
                if (s == null)
                    { Console.Write(" ->> Incompatible type"); }
                else
                    { Console.Write(" ->> Compatible type"); }
                Console.WriteLine(", with string!");
            }
            Console.ReadKey(); ;
        }
    }
}
```

We have our two classes from before, and we create a list of objects. This is important because the `object` type allows you to create a list that can hold different types of objects. Then we fill it up with a teacher, a student, and two strings. Then we iterate over the array, checking which one of them is compatible with the `string` type with the help of the `as` operator. 

It does not throw an exception when we have an incompatible type, we just simply don't have any value associated with the `s` variable, which evaluates to `null`.

**Output:**
``` bash
Inspecting element: asitis.Student ->> Incompatible type, with string!
Inspecting element: asitis.Teacher ->> Incompatible type, with string!
Inspecting element: Student ->> Compatible type, with string!
Inspecting element: Teacher ->> Compatible type, with string!
```

## Main Difference

``` ad-important
- The `is` operator is used to check if the run-time type of an object is compatible with the given type or not, whereas the `as` operator is used to perform conversion between compatible reference types or nullable types.
- The `is` operator is of Boolean type, whereas the `as` operator is not.
- The `is` operator returns `true` if the given object is of the same type, whereas the `as` operator returns the object when they are compatible with the given type.
- The `is` operator returns false if the given object is not of the same type, whereas the `as` operator returns null if the conversion is not possible.
- The `is` operator is used for only reference, boxing, and unboxing conversions, whereas the `as` operator is used only for nullable, reference, and boxing conversions.
```
# Reference:
https://www.pluralsight.com/guides/csharp-is-as-operators-is-expressions

 