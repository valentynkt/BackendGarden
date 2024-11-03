Date and Time: <u> 2023-10-16 03:00 </u>
Status: #LearningIT
Tags: [[CSharp]], [[MVC]]

# CSharp Routing

For all MVC Architecture, a controller is responsible for handling data a user interacts throughout an application. In C#, a controller is a class that has the unique functionality of being a listener for when a user executes an HTTP request. Now it’s time to go more in depth as to how we define a controller’s routing architecture.

When you initially create a ASP.NET MVC application, a route table gets created in your app’s `Global.asax` file. Within this route object configuration are the following: **_route name_**, **_url_**, and **_parameter defaults_**. Parameter defaults maps how segments of a route will get distributed throughout the controller class.

The code snippet below demonstrates how a controller class contains other classes representing code to be executed based on a user’s route input.

//controller name is Home  
//action name is Index  
//dynamic idnew { controller = "Home", action = "Index", id = "" }

Since your route table gets created by default, your MVC application should already have a `HomeController.cs` file. This file is where your parent Home controller class stores other class objects that listens for other routing definitions triggered by the user. In the case of our example, there will be a child class called `ActionResult` which will execute blocks of code in it’s scope when a user defines the route with an id parameter like so:`/Home/Index/2`.

Here’s what your Home controller should look like based on your default routing table:

``` csharp
using System.Web.Mvc;    
namespace ExampleMVCApp.Controllers   
{       
   [HandleError]  
   //controller name class = Home       
   public class HomeController : Controller       
   {              //action class that runs when provided an id parameter  
     public ActionResult Index(int id)     
     {               
        return View();           
     }       
   }   
}
```

## CUSTOM ROUTES

Following this controller architecture pattern, you can create as many routing controllers as you see fit based on how you want your routes and views separated or organized throughout your MVC application.

In your `Global.asax` file, you define another route table like so

``` csharp
routes.MapRoute(                   
  "Gaming",                            
  "Console/{consoleName}",         
  new { controller = "Console", action = "Query" }           
);
```

The snippet above defines a route to be executed within the parent Console controller class when a user includes a gaming console name within the route parameter.

This route table generates a `ConsoleController.cs` file. This controller class executes a query action class with the gaming console name parameter in your route: The code snippet below returns a View when a user provides a `/Console/PlayStation` route.

``` csharp
using System;   
using System.Web.Mvc;   
namespace ExampleMVCApp.Controllers   
{       
   public class ConsoleController : Controller       
   {           
      public string Query(string consoleName)           
      {               
         return View();           
      }       
   }   
}
```

In conclusion, ASP.NET MVC architecture provides a very useful way to manage routing throughout your application through route tables and controllers.

# Reference:
https://medium.com/@RayRay504/c-routing-with-controllers-e28f9af72ba4


 