Date and Time: <u> 2023-10-19 20:18 </u>
Status: #LearningIT
Tags: [[API]]

# Webhooks API

## Webhook vs API

``` ad-important
- [[API]] communication between software applications via requests—App A requests information from App B, and App B decides whether to send the information. 
- A [webhook](https://zapier.com/blog/what-are-webhooks/) is a type of event-driven API. Rather than sending information in response to another app's request, a webhook sends information or performs a specific function in response to a trigger—like the time of day, clicking a button, or receiving a form submission. Since the application sending the data initiates the transfer, webhooks are often referred to as "reverse [[API]]."
```

![[Pasted image 20231029200421.png]]
![[Pasted image 20231029200531.png]]
To put it simply, an API does stuff when you ask it to, while a [Webhook](https://hackernoon.com/tagged/webhook) does stuff on it’s own when certain criteria is met or scenarios takes place. Let’s dig a little deeper.

An [[API]] can used from a server to communicate with example.com. Through that communication, the API can List, Create, Edit or Delete items. The API needs to be given instructions, though.

Webhooks on the other hand are automated calls from example.com to a server. Those calls are triggered when a specific event happens on example.com. For example, if a new user signs up on example.com, the automated call may be configured to ask the server to send out a welcome email.

Webhooks and APIs differ in how they make requests. For instance, APIs will place calls for data whether there’s been a data update response, or not. While webhooks receive calls through HTTP POSTs only when the external system you’re hooked to has a data update.

``` ad-important
To summarize, webhooks enable lightweight data sharing between software when a specific action takes place, whereas APIs require user input on one end to request or modify data on the other end.
```
## Webhook Use Cases
Webhooks are commonly used to perform smaller requests and tasks, however there are situations where a webhook is more appropriate than an entire API.

Your app or platform demands real-time updates, but you don’t want to waste your resources. In this instance a webhook would be beneficial.
# Reference:
https://www.mparticle.com/blog/apis-vs-webhooks/


 