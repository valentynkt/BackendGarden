Date and Time: <u> 2023-10-29 13:50 </u>
Status: #LearningIT
Tags: [[TCP vs UDP]], [[OSI model]]

# TCP
TCP creates a secure communication line to ensure the reliable transmission of all data. Once a message is sent, the receipt is verified to make sure all the data was transferred.

## Flow
TCP works by using a “three-way handshake” — a three-step process that forms a connection between a device and a server.
The completion of the three-step process establishes the non-stop connection, starts the transfer of data packets across the internet, delivers them intact, and acknowledges delivery.
Here’s how it looks in practice:

``` ad-important
1. The client device initiating the data transfer sends a sequence number (SYN) to the server. It tells the server the number that the data packet transfer should begin with.
2. The server acknowledges the client SYN and sends its own SYN number. This step is often referred to as SYN-ACK (SYN acknowledgement)
3. The client then acknowledges (ACK) the server’s SYN-ACK, which forms a direct connection and begins the data transfer.
```

The connection between the sender and receiver is maintained until the transfer is successful. Every time a data packet is sent, it requires an acknowledgment from the receiver. So, if no acknowledgment is received, the data is resent.

If an error is acknowledged, the faulty packet is discarded and the sender delivers a new one. Heavy traffic or other issues may also prevent data from being sent. In that case, the transmission is delayed (without breaking the connection).Thanks to these controls, successful data delivery is guaranteed with TCP.
![[Pasted image 20231029150852.png]]
![[Pasted image 20231029135417.png]]

# Reference:
https://nordvpn.com/blog/tcp-or-udp-which-is-better/
https://www.avast.com/c-tcp-vs-udp-difference#:~:text=The%20main%20difference%20between%20TCP,reliable%20but%20works%20more%20quickly.


 