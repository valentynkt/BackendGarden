---
created: 2024-07-27 17:41
aliases:
  - IDisposable
  - Disposable
  - dispose pattern
tags:
  - LearningIT
  - seed🌱
---

link: [[CSharp]]

# IDisposable Interface 

## Overview

The `IDisposable` interface in C# provides a standardized way to release unmanaged resources such as file handles, database connections, and memory allocated outside the .NET runtime. Implementing `IDisposable` ensures that these resources are properly cleaned up when they are no longer needed.

## Key Concepts

> [!important]
> 
> - **Dispose Method**: The core method of the `IDisposable` interface, intended to perform cleanup operations.
> - **Unmanaged Resources**: Resources that the .NET garbage collector does not manage, such as file handles and database connections.
> - **Deterministic Finalization**: Ensures that resources are released as soon as they are no longer needed, rather than waiting for garbage collection.
## How It Works

> [!info] Dispose Pattern
> The dispose pattern ensures that resources are released in a consistent manner:
> 
> 1. **Dispose(bool disposing)**: A protected method that handles the actual resource cleanup.
> 2. **Dispose()**: A public method that calls `Dispose(true)` and suppresses finalization.
> 3. **Destructor (~ClassName)**: Calls `Dispose(false)` to clean up unmanaged resources if the object is garbage collected without being explicitly disposed.

> [!info] Using with the `using` Statement
> The `using` statement simplifies the use of `IDisposable` by automatically calling the `Dispose` method at the end of the block.
> 
> ``` csharp
> using (ResourceType resource = new ResourceType())
> {
>     // Use the resource
> }
> // Dispose is automatically called here
> ```

## Syntax and Implementation

### IDisposable Interface

The `IDisposable` interface defines a single method, `Dispose`, that must be implemented by the class.

```csharp
public interface IDisposable
{
    void Dispose();
}
```

### Implementing IDisposable

When implementing the `IDisposable` interface, follow the dispose pattern to ensure both managed and unmanaged resources are properly released.

``` csharp
public class ResourceType : IDisposable
{
    // Flag to indicate whether resources have already been disposed
    private bool disposed = false;

    // Public implementation of Dispose pattern callable by consumers
    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    // Protected implementation of Dispose pattern
    protected virtual void Dispose(bool disposing)
    {
        if (!disposed)
        {
            if (disposing)
            {
                // Free managed resources
            }

            // Free unmanaged resources
            disposed = true;
        }
    }

    // Destructor
    ~ResourceType()
    {
        Dispose(false);
    }
}
```
## Best Practices

> [!important]
> 
> - **Implement IDisposable Correctly**: Always follow the dispose pattern to ensure proper cleanup of resources.
> - **Use `using` Statements**: Utilize the `using` statement for objects that implement `IDisposable` to ensure deterministic disposal.
> - **Suppress Finalization**: Use `GC.SuppressFinalize(this)` to prevent the garbage collector from calling the finalizer if the object has already been disposed.
> - **Release Unmanaged Resources**: Ensure that unmanaged resources are released even if the object is not explicitly disposed by the user.

## Related Topics

> [!summary]
> 
> - **[[Using Declarations|Using Keyword]]**: The `using` keyword works closely with `IDisposable` to manage the scope and lifetime of resources.
> - **[[Garbage Collector|Garbage Collection]]**: Understand how the .NET garbage collector works with `IDisposable` to manage memory and resources.
> - **Finalizers**: Destructors (`~ClassName`) are used to clean up resources if the object is not disposed of properly.
> - **[[Memory Management CSharp|Memory Management]]**: Effective memory management practices in C# involve proper implementation of `IDisposable` to handle unmanaged resources.

## Example

> [!example]-
> Here's a practical example demonstrating the implementation and usage of `IDisposable`.
> 
> ``` csharp
> public class FileManager : IDisposable
> {
>     private FileStream fileStream;
>     private bool disposed = false;
> 
>     public FileManager(string filePath)
>     {
>         fileStream = new FileStream(filePath, FileMode.OpenOrCreate);
>     }
> 
>     public void WriteData(string data)
>     {
>         if (fileStream != null)
>         {
>             byte[] bytes = Encoding.UTF8.GetBytes(data);
>             fileStream.Write(bytes, 0, bytes.Length);
>         }
>     }
> 
>     public void Dispose()
>     {
>         Dispose(true);
>         GC.SuppressFinalize(this);
>     }
> 
>     protected virtual void Dispose(bool disposing)
>     {
>         if (!disposed)
>         {
>             if (disposing)
>             {
>                 // Dispose managed resources
>                 if (fileStream != null)
>                 {
>                     fileStream.Close();
>                     fileStream = null;
>                 }
>             }
> 
>             // Dispose unmanaged resources here if any
> 
>             disposed = true;
>         }
>     }
> 
>     ~FileManager()
>     {
>         Dispose(false);
>     }
> }
> 
> // Usage
> using (FileManager manager = new FileManager("example.txt"))
> {
>     manager.WriteData("Hello, World!");
> }
> // Dispose is automatically called here
> 
> ```