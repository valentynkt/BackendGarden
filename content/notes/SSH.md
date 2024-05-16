---
created: 2024-05-08 21:03
aliases: 
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Web Security]]

# # SSH (Secure Shell)

## Overview

Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network. Commonly used for remote server login and command execution, SSH provides a secure channel over an unsecured network by using a [[Client-Server Architecture Pattern]].

## Key Features of SSH

- **Encryption**: SSH uses strong encryption to protect the data transmitted over the network, ensuring that sensitive information remains confidential.
- **[[Authentication]]**: SSH supports various forms of authentication, including password-based, public key, and host-based authentication. This flexibility helps ensure that only authorized users can access the server.
- **Integrity**: SSH employs cryptographic checksums to ensure data integrity, verifying that the data sent is the same as the data received.

## SSH Flow

> [!question]- How SSH Works?
> SSH operates by connecting a client application with an SSH server. The connection process typically involves the following steps:
> 
> 1. **Connection Establishment**: The SSH client initiates a connection to the SSH server using the [[TCP|TCP/IP]] protocol, usually on port 22.
> 2. **Key Exchange**: Upon connecting, the client and server negotiate to establish a secure channel by exchanging cryptographic keys.
> 3. **Authentication**: The client must authenticate itself to the server. This can be done using one of several methods, such as a password, SSH key pair, or Kerberos tickets.
> 4. **[[Session Management|Session]]**: Once authenticated, the user can execute commands on the server, forward local ports, manage files, and more, all within the encrypted SSH [[Session Management|session]].


> [!example]- Example of an SSH Command
> Here's an example of using SSH to connect to a remote server:
> 
> ```bash
> ssh username@remotehost
> ```

## Common Uses of SSH

> [!info]- Common Uses of SSH
> 
> - **Remote Server Management**: System administrators use SSH extensively for managing servers remotely.
> - **Secure File Transfer**: SSH is often used for secure file transfers using SCP (Secure Copy Protocol) or [[SFTP]] (SSH File Transfer Protocol), which build on SSH to provide secure file transfer capabilities.
> - **Port Forwarding/Tunneling**: SSH can forward local ports to the remote host and vice versa or create a secure tunnel for other application protocols.

## Advantages of SSH

> [!success]- Advantages
> - **Security**: SSH provides robust security features, including strong encryption, which is crucial for protecting data on unsecured networks like the internet.
> - **Versatility**: SSH can be used for a variety of network services beyond shell access, such as secure file transfers and remote desktop connections.
> - **Wide Adoption**: SSH is supported by most Unix-like systems (Linux, macOS, BSD) and Windows, making it a standard tool for network administration.

## Conclusion

SSH is a fundamental security tool in the field of network administration, providing a secure way to perform potentially vulnerable activities over insecure networks. Its comprehensive security features ensure that even if network traffic is intercepted, the data remains encrypted and secure from unauthorized access.