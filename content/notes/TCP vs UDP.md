Date and Time: <u> 2023-10-29 13:46 </u>
Status: #LearningIT
Tags: [[OSI model]]

# [[TCP]] vs [[UDP]]
Whether your data is transferred quickly and in full depends on which network protocols you use, UDP or TCP. They both do the same job but in different ways. One is more reliable and the other one is faster. Find out which one you need below.

The main difference between TCP (transmission control protocol) and UDP (user datagram protocol) is that TCP is a connection-based protocol and UDP is connectionless. While TCP is more reliable, it transfers data more slowly. UDP is less reliable but works more quickly. This makes each protocol suited to different types of data transfers.

Protocols are rules that govern how data is formatted and sent over a network. TCP and UDP are two different methods for doing the same job: transferring data via the internet. They enable servers and devices to communicate so you can send emails, watch Netflix, play games, and browse web pages.
## Main Difference 
Here are the main differences between TCP and UDP:

|Factor|TCP|UDP|
|---|---|---|
|Connection type|Requires an established connection before transmitting data|No connection is needed to start and end a data transfer|
|Data sequence|Can sequence data (send in a specific order)|Cannot sequence or arrange data|
|Data retransmission|Can retransmit data if packets fail to arrive|No data retransmitting. Lost data can’t be retrieved|
|Delivery|Delivery is guaranteed|Delivery is not guaranteed|
|Check for errors|Thorough error-checking guarantees data arrives in its intended state|Minimal error-checking covers the basics but may not prevent all errors|
|Broadcasting|Not supported|Supported|
|Speed|Slow, but complete data delivery|Fast, but at risk of incomplete data delivery|

## Use cases
It depends on what you’re doing online and the type of data being transferred. UDP is better if you’re gaming online, because its speedy data transfer allows for mostly lag-free gaming. TCP is better if you’re transferring files, like family photos, because it ensures the data arrives exactly as it was sent.

Overall, TCP and UDP are both useful protocols, so to think in terms of TCP vs UDP is a bit misleading. But depending on the type of data transfer, TCP or UDP might be better for the job. Here are some examples:

``` ad-important
**TCP is best for**:
- Email or texting
- File transfers
- Web browsing

**UDP is best for**:
- Live streaming
- Online gaming
- Video chat
```
## Real World 
Here’s an analogy to help you understand how TCP and UDP work:

Imagine you’re having lunch at the office and a friend in a different cubicle asks you for half of your sandwich. You have two options: You can walk through the maze of office desks and hand it to her, guaranteeing a secure delivery. Or, you can throw the sandwich into her cubicle from across the room, leaving the quality of the delivery up to her speed and reflexes.

The first method (TCP) is reliable, but slow. The second method (UDP) is fast, but the sandwich might not arrive in its original state — or at all.

## [[TCP]]
![[TCP#TCP]]
## [[UDP]]
![[UDP#UDP]]
# Reference:
https://nordvpn.com/blog/tcp-or-udp-which-is-better/
https://www.avast.com/c-tcp-vs-udp-difference#:~:text=The%20main%20difference%20between%20TCP,reliable%20but%20works%20more%20quickly.


 