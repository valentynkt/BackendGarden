---
created: 2024-05-08 15:49
aliases: 
tags:
  - LearningIT
  - evergreen🌳
links:
---

link: [[Web]], [[TCP]], [[UDP]]

# [[TCP]] vs [[UDP]]

Below is a table that contrasts the characteristics and typical use cases of [[TCP]] (Transmission Control Protocol) and UDP (User Datagram Protocol):

## Comparison

| Feature | TCP | UDP |
|---------|-----|-----|
| **Connection Type** | Connection-oriented; establishes a connection before data transfer. | Connectionless; data is sent without establishing a connection. |
| **Reliability** | Reliable; ensures data is delivered exactly as sent. | Unreliable; does not guarantee delivery or order. |
| **Speed** | Slower due to acknowledgments and retransmissions. | Faster as it lacks connection setup and error handling mechanisms. |
| **Data Integrity** | High; uses error checking and recovery. | Moderate; has optional error checking but no recovery. |
| **Ordering** | Maintains order of data packets. | Does not ensure order; packets may arrive out of sequence. |
| **Overhead** | Higher due to connection management and control information. | Lower due to minimal header size and lack of connection management. |
| **Use Cases** | Web browsing, email, file transfers, and any application requiring reliability and data integrity. | Real-time applications like video streaming, online gaming, and VoIP where speed and efficiency are crucial. |

## Use Cases 

> [!summary]- Use Cases
> The choice between TCP and UDP depends on the application requirements:
> 
> - **TCP Use Cases**:
>   - **Web Browsing ([[HTTP]]/[[HTTPS]])**: Ensures that all web page content is loaded correctly.
>   - **Email ([[SMTP]]/POP3/IMAP)**: Guarantees that all messages are sent and received without errors.
>   - **File Transfers ([[File Transfer Protocol]])**: Ensures complete and correct file transfer without data corruption.
> 
> - **UDP Use Cases**:
>   - **Video Streaming**: Allows for continuous streaming without interruptions for buffering, which is crucial for live broadcasts.
>   - **Online Gaming**: Minimizes latency and lag, providing a smoother gaming experience.
>   - **Voice over [[Internet Protocol|IP]] (VoIP)**: Reduces call setup time and delays, improving call quality.
> 
> This table and the outlined use cases help illustrate when to use TCP or UDP based on the specific needs of network communication.


> [!example]- Real World Analogy
> 
> Here’s an analogy to help you understand how TCP and UDP work: 
> Imagine you’re having lunch at the office and a friend in a different cubicle asks you for half of your sandwich. You have two options: You can walk through the maze of office desks and hand it to her, guaranteeing a secure delivery. Or, you can throw the sandwich into her cubicle from across the room, leaving the quality of the delivery up to her speed and reflexes. 
> The first method (TCP) is reliable, but slow. The second method (UDP) is fast, but the sandwich might not arrive in its original state — or at all. 
> This analogy illustrates the fundamental trade-offs between TCP and UDP: reliability and order versus speed and efficiency.

# References

[TCP vs UDP: What’s the main difference? | NordVPN](https://nordvpn.com/blog/tcp-or-udp-which-is-better/)

[TCP vs UDP: Differences Between TCP & UDP Protocols | Avast](https://www.avast.com/c-tcp-vs-udp-difference#:~:text=The%20main%20difference%20between%20TCP,reliable%20but%20works%20more%20quickly.)