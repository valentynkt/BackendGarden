Date and Time: <u> 2024-01-02 15:07 </u>
Status: #LearningIT 
Tags: [[API]]

# CQRS
## Intro
CQRS splits data access into Commands and Queries. Every Write or Read operation has a dedicated Command or Query, compared to more traditional patterns where larger ‘Service’ or ‘Business’ classes with lots of different methods are used.

- **Commands**: Write data — Create/Update/Delete
- **Queries**: Read data

The following shows how a Weather Forecast can be Created and Read using CQRS compared to Service-Based implementations.

![[Pasted image 20240102153014.png]]
## Architecture
**CQRS can have the same database or different databases for READ/WRITE**
![[Pasted image 20240102152604.png]]


## Why Use?

Splitting our code into granular Commands/Queries/Handlers ensures that the **Single Responsibility Principle** (SRP) is adhered to, which makes our solutions flexible for change and easy to test. When using Service-Based patterns our classes can quickly become large and unwieldy. For this reason even if you are not using different Read/Write models, following CQRS can make your code much cleaner and easier to maintain.

Another benefit to using CQRS is that the only dependency your code now needs is the Mediator instance. The Mediator is responsible for dispatching your Commands and Queries to their corresponding Handler.

let’s look at the difference between the 2 approaches when accessing data via an API Controller.

![[Pasted image 20240102153641.png]]
For the Service-Based approach the same `WeatherForecastsService` class is reused for each endpoint, whereas for CQRS each endpoint uses a dedicated Command or Query. MediatR’s `ISender` interface is used to dispatch the Commands and Queries to their retrospective Handlers. In the next section we will take a look under the hood and see how everything is implemented.
## Implementation
Different Read/Write Models, Single Database

### Commands

Commands are used to Create/Update/Delete data using our Write models. In this example **Domain-Driven Design** is being followed so that we can encapsulate as much Business and Validation logic as possible within our Aggregates/Entities. When I refer to Write models here, I am talking about our Entities that are stored in the database via Entity Framework.

All **Commands** implement the `Command` base class and their **Handlers** implement the `CommandHandler` base class. These base classes inherit from MediatR `IRequest` and `IRequestHandler` interfaces, which allows them to be dispatched via an `ISender`.

``` csharp
namespace AspNetCore.Cqrs.Application.Abstractions.Commands
{
    public abstract record Command : IRequest<Unit>;
    
    public abstract class CommandHandler<TCommand> : IRequestHandler<TCommand, Unit> where TCommand : Command
    {
        public async Task<Unit> Handle(TCommand request, CancellationToken cancellationToken)
        {
            await HandleAsync(request);
            return Unit.Value;
        }

        protected abstract Task HandleAsync(TCommand request);
    }
}
```

Using **records** to create the Commands works well because they should be simple immutable data structures. The Command Handlers _don’t return anything at all_ — this should generally be the case when following CQRS