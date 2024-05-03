Date and Time: <u> 2023-10-29 13:55 </u>
Status: #LearningIT
Tags: [[TCP vs UDP]], [[OSI model]]

# UDP

UDP does not establish a connection when sending data. It sends data without confirming receipt or checking for errors. That means some or all of the data may be lost during transmission.

## Flow
The UDP protocol works by immediately firing data at the receiver who made a data transmission request, until the transmission is complete or terminated. Sometimes called a “fire-and-forget” protocol, UDP fires data at a recipient in no particular sequence, without confirming delivery or checking if packets arrived as intended. UDP has almost no error correction, nor does it care about lost packets. It’s more error prone, but it sends data much faster than TCP.

While TCP establishes a formal connection via its “handshake” agreement before sending data. UDP doesn’t have time for that. It speeds up data transfer by sending packets without making any agreement with a receiver. Then, it’s up to the recipient to make sense of the data.

![[Pasted image 20231029151107.png]]
_UDP works by rapid-firing data from sender to receiver until the transfer is completed or terminated._
# Reference:
https://nordvpn.com/blog/tcp-or-udp-which-is-better/
https://www.avast.com/c-tcp-vs-udp-difference#:~:text=The%20main%20difference%20between%20TCP,reliable%20but%20works%20more%20quickly.


 