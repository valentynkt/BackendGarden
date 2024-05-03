Date and Time: <u> 2023-10-28 21:41 </u>
Status: #LearningIT
Tags: 

# OSI model

``` ad-warning
It is depricated model and not exact flow how internet works. In modern applications we can skip some levels or even combine/mix them
```

OSI provides a standard for different computer systems to be able to communicate with each other.
## Intro
The OSI Model can be seen as a universal language for computer networking. It is based on the concept of splitting up a communication system into seven abstract layers, each one stacked upon the last.

![[Pasted image 20231028214734.png]]

Each layer of the OSI Model handles a specific job and communicates with the layers above and below itself. [DDoS attacks](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/) target specific layers of a network connection; application layer attacks target [[#Layer 7]] and protocol layer attacks target layers 3 and 4

## Layers Details
### Layer 7
**The application layer**
![[Pasted image 20231028215345.png]]

This is the only layer that directly interacts with data from the user. Software applications like web browsers and email clients rely on the application layer to initiate communications. But it should be made clear that client software applications are not part of the application layer; rather the application layer is responsible for the protocols and data manipulation that the software relies on to present meaningful data to the user.

[[API]] calls and responses belong to this layer, and some of the main protocols used are [[HTTP]] and [[SMTP]] (Simple Mail Transfer Protocol, which applications use).

### Layer 6
**The presentation layer**
![[Pasted image 20231028220528.png]]
This layer is primarily responsible for preparing data so that it can be used by the application layer; in other words, layer 6 makes the data presentable for applications to consume. The presentation layer is responsible for translation, [[Cryptography Encryption]], and compression of data.

Two communicating devices communicating may be using different encoding methods, so layer 6 is responsible for translating incoming data into a syntax that the application layer of the receiving device can understand.

Finally the presentation layer is also responsible for compressing data it receives from the application layer before delivering it to layer 5. This helps improve the speed and efficiency of communication by minimizing the amount of data that will be transferred.

### Layer 5
**The session layer**
![[Pasted image 20231028221203.png]]

This is the layer responsible for opening and closing communication between the two devices. The time between when the communication is opened and closed is known as the session. The session layer ensures that the session stays open long enough to transfer all the data being exchanged, and then promptly closes the session in order to avoid wasting resources.

The session layer also synchronizes data transfer with checkpoints. For example, if a 100 megabyte file is being transferred, the session layer could set a checkpoint every 5 megabytes. In the case of a disconnect or a crash after 52 megabytes have been transferred, the session could be resumed from the last checkpoint, meaning only 50 more megabytes of data need to be transferred. Without the checkpoints, the entire transfer would have to begin again from scratch.

### Layer 4
**The transport layer**
![[Pasted image 20231028221313.png]]
Layer 4 is responsible for end-to-end communication between the two devices. This includes taking data from the session layer and breaking it up into chunks called segments before sending it to layer 3. The transport layer on the receiving device is responsible for reassembling the segments into data the session layer can consume.

The transport layer is also responsible for flow control and error control. Flow control determines an optimal speed of transmission to ensure that a sender with a fast connection does not overwhelm a receiver with a slow connection. The transport layer performs error control on the receiving end by ensuring that the data received is complete, and requesting a retransmission if it isn’t.

Transport layer protocols include the [[TCP]] and the [[UDP]].

### Layer 3
**The network layer**
![[Pasted image 20231028221932.png]]
The network layer is responsible for facilitating data transfer between two different networks. If the two devices communicating are on the same network, then the network layer is unnecessary. The network layer breaks up segments from the transport layer into smaller units, called packets, on the sender’s device, and reassembling these packets on the receiving device. The network layer also finds the best physical path for the data to reach its destination; this is known as [[CSharp Routing|routing]] .

Network layer protocols include IP, the [Internet Control Message Protocol (ICMP)](https://www.cloudflare.com/learning/ddos/glossary/internet-control-message-protocol-icmp/), the [Internet Group Message Protocol (IGMP)](https://www.cloudflare.com/learning/network-layer/what-is-igmp/), and the [IPsec](https://www.cloudflare.com/learning/network-layer/what-is-ipsec/) suite.

### Layer 2
**The data link layer**
![[Pasted image 20231028222152.png]]

The data link layer is very similar to the network layer, except the data link layer facilitates data transfer between two devices on the _same_ network. The data link layer takes packets from the network layer and breaks them into smaller pieces called frames. Like the network layer, the data link layer is also responsible for flow control and error control in intra-network communication (The transport layer only does flow control and error control for inter-network communications).

### Layer 1
**The physical layer**
![[Pasted image 20231028222301.png]]
This layer includes the physical equipment involved in the data transfer, such as the cables and [switches](https://www.cloudflare.com/learning/network-layer/what-is-a-network-switch/). This is also the layer where the data gets converted into a bit stream, which is a string of 1s and 0s. The physical layer of both devices must also agree on a signal convention so that the 1s can be distinguished from the 0s on both devices.

## OSI Model Flow
In order for human-readable information to be transferred over a network from one device to another, the data must travel down the seven layers of the OSI Model on the sending device and then travel up the seven layers on the receiving end.

``` ad-example
For example: Mr. Cooper wants to send Ms. Palmer an email. Mr. Cooper composes his message in an email application on his laptop and then hits ‘send’. His email application will pass his email message over to the application layer, which will pick a protocol (SMTP) and pass the data along to the presentation layer. The presentation layer will then compress the data and then it will hit the session layer, which will initialize the communication session.

The data will then hit the sender’s transportation layer where it will be segmented, then those segments will be broken up into packets at the network layer, which will be broken down even further into frames at the data link layer. The data link layer will then deliver those frames to the physical layer, which will convert the data into a bitstream of 1s and 0s and send it through a physical medium, such as a cable.

Once Ms. Palmer’s computer receives the bit stream through a physical medium (such as her wifi), the data will flow through the same series of layers on her device, but in the opposite order. First the physical layer will convert the bitstream from 1s and 0s into frames that get passed to the data link layer. The data link layer will then reassemble the frames into packets for the network layer. The network layer will then make segments out of the packets for the transport layer, which will reassemble the segments into one piece of data.

The data will then flow into the receiver's session layer, which will pass the data along to the presentation layer and then end the communication session. The presentation layer will then remove the compression and pass the raw data up to the application layer. The application layer will then feed the human-readable data along to Ms. Palmer’s email software, which will allow her to read Mr. Cooper’s email on her laptop screen.
```
# Reference:
https://www.cloudflare.com/en-gb/learning/ddos/glossary/open-systems-interconnection-model-osi/


 