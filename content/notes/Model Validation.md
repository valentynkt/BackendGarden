Date and Time: <u> 2023-12-29 20:59 </u>
Status: #LearningIT
Tags: [[CSharp]]

# Model Validation
Lets take a look  how we can validate object that we receive in our Controllers (also possible with MVC)

There are two ways of validation

``` ad-important
1. [[#Custom Attributes]]
2. [[#FluentValidation]]
```

## Custom Attributes

## FluentValidation
The primary classes you’d interact with while using Fluent Validation are:

- **AbstractValidator**: This is where your juicy validation rules will live. You will create a concrete validator class for each data model necessitating validation, and this class inherits from `AbstractValidator`.
- **RuleFor**: This is where the fun part begins. `RuleFor` methods, chained with a selection of powerful rule declarations, give you a super flexible validation process.
---

 **Advantages of Fluent Validation**
``` ad-success
- High Level of Flexibility: Fluent Validation enables you to create any validation rule conceivable. It’s overflowing with power and flexibility.
- Testability: Fluent Validation ensures that your code remains test-friendly. No more wrestling [unit tests](https://www.bytehide.com/blog/unit-testing-csharp)!
- Cleaner Code: Say goodbye to cluttered data models. With Fluent Validation, your validation logic shifts to a separate class, hence clean code (and a happy developer!)
- Easy Maintenance: Fluent Validation’s pattern of separating validation rules from business objects makes maintenance a lot easier. If rules need to change, you know exactly where to look. Plus, it’s easier to reuse validation logic across projects.
- Better User Experience: Fluent Validation allows for easily customizable and detailed error messages that assist users in correcting their data. Helping users nail the scenario right off the bat rather than stumbling in the dark? Now that’s a win!
```

### C# Code

**Registration**
``` ad-example
``` csharp
public void ConfigureServices(IServiceCollection services) 
{
services.AddControllers() 
.AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<Startup>()); // Some Other Services 
}
```

**Validator**
``` ad-example
``` csharp
public class CustomerValidator: AbstractValidator<Customer> 
{ 
	public CustomerValidator() 
	{
	RuleFor(c => c.Name) 
	.NotEmpty().WithMessage("Please enter a name")
	.Length(0, 10).WithMessage("Name length should 
	be between 0 and 10 characters"); 
	} 
}
```
# Reference:
MediatR + FluentValidation
https://www.youtube.com/watch?v=OhQA4PDdp0Q&t=320s - best
https://www.youtube.com/watch?v=85dxwd8HzEk - hard
https://www.youtube.com/watch?v=FXP3PQ03fa0&t=1055s - simple 
 

 