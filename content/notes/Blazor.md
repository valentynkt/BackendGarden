---
created: 2024-09-03 19:28
aliases: 
tags:
  - LearningIT
  - seed🌱
---

link: [[ASP.NET]]

# Blazor

## Introduction

**Blazor** is a web framework within the ASP.NET ecosystem that allows developers to build interactive and dynamic web applications using C#. Blazor enables the use of C# for both client-side and server-side development, providing an alternative to JavaScript for building modern web applications. It leverages WebAssembly (WASM) to run C# code directly in the browser, offering a seamless and powerful development experience.

---

## Key Features of Blazor

> [!info] **Main Features**
> 
> - **C# in the Browser**: Allows developers to write client-side code in C# instead of JavaScript.
> - **Component-Based Architecture**: Encourages building reusable UI components.
> - **Server-Side and Client-Side Options**: Blazor can run on both the server and the client, offering flexibility in deployment.
> - **Two-Way Data Binding**: Simplifies interaction between the UI and application logic.
> - **Dependency Injection**: Built-in support for dependency injection, consistent with the ASP.NET Core model.
> - **Cross-Platform**: Runs on multiple platforms, including Windows, macOS, and Linux.

---

## Blazor Hosting Models

Blazor offers two main hosting models, each suited for different types of applications:

### Blazor WebAssembly (WASM)

Blazor WebAssembly runs C# code directly in the browser using WebAssembly, providing a true client-side experience. This model allows for building fully interactive web applications that run entirely in the browser without the need for a server connection after the initial load.

> [!info] **Key Points**
> 
> - **Offline Capabilities**: Since the application runs entirely in the browser, it can continue to function offline.
> - **Reduced Server Load**: The server is not required for processing after the initial load, reducing server load and improving scalability.
> - **Full Control Over UI**: The UI is rendered entirely on the client, giving developers full control over the user experience.

### Blazor Server

Blazor Server runs on the server, with UI updates sent to the client over a SignalR connection. This model is ideal for scenarios where you want the benefits of Blazor but prefer to keep the execution on the server.

> [!info] **Key Points**
> 
> - **Real-Time UI Updates**: UI changes are sent to the client in real-time, ensuring that the user interface is always up-to-date.
> - **Thin Client**: Since most of the processing occurs on the server, the client requirements are minimal.
> - **Reduced Initial Load Time**: As the application logic runs on the server, the initial load time is faster compared to Blazor WebAssembly.

---

## Building Components in Blazor

Blazor applications are built using components. A component is a self-contained piece of UI that can include HTML markup, C# code, and other components. Components can be reused and nested, promoting modular and maintainable code.

> [!example]- Simple Blazor Component
> 
> ```csharp
> @code {
>     private int currentCount = 0;
> 
>     private void IncrementCount()
>     {
>         currentCount++;
>     }
> }
> 
> <button class="btn btn-primary" @onclick="IncrementCount">Click me</button>
> <p>Current count: @currentCount</p>
> ```
> 
> In this example, the button click event increments a counter that is displayed on the page. The component is written in Razor syntax, combining HTML and C# in a seamless manner.
> 

---

## Blazor and Dependency Injection

Blazor has built-in support for dependency injection (DI), allowing you to inject services into your components. This makes it easier to manage application state, interact with APIs, and implement business logic in a modular and testable way.

> [!example]- Dependency Injection in Blazor
> ```csharp
> @inject HttpClient Http
> 
> @code {
>     private string data;
> 
>     protected override async Task OnInitializedAsync()
>     {
>         data = await Http.GetStringAsync("https://api.example.com/data");
>     }
> }
> 
> <p>Data: @data</p>
> ```
> 
> In this example, an `HttpClient` service is injected into the component, allowing it to fetch data from an API.

---

## Advantages of Using Blazor

> [!success] **Pros**
> 
> - **Unified Development**: Use C# for both client and server-side development, reducing the need to switch between languages.
> - **Component-Based Architecture**: Promotes reusability and maintainability of code.
> - **Rich Ecosystem**: Leverages the extensive .NET ecosystem, including libraries, tools, and community support.
> - **Cross-Platform**: Blazor applications can run on any platform that supports WebAssembly or a compatible web browser.

---

## Summary

Blazor represents a significant shift in web development by enabling developers to use C# for building interactive web applications. Whether running on the client with WebAssembly or on the server with SignalR, Blazor offers a modern, component-based approach to web development that aligns with the best practices and capabilities of the .NET ecosystem. Its flexibility and power make it an excellent choice for developers looking to build rich, responsive, and maintainable web applications.

---
