---
created: 2024-05-06 18:39
aliases:
  - SSL/TLS
  - TLS
  - SSL
  - SSL/TLS protocols
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[Web]]

# SSL and TLS Protocols

SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are foundational cryptographic protocols that secure communications over computer networks. They establish encrypted connections between clients and servers, ensuring confidentiality and integrity of the transmitted data.

## Overview

Developed by Netscape in the mid-1990s, SSL was the first protocol designed to secure the internet, primarily for web browsing. TLS emerged later as an enhanced, more secure variant of SSL. Today, both protocols are crucial for securing various online applications, including web browsing, emails, instant messaging, and VPNs.

## Key Features of SSL/TLS Protocols

> [!important] **Key Features Overview**:
> 
> - **Encryption**: Uses cryptographic algorithms to secure data, ensuring confidentiality.
> - **Authentication**: Provides mechanisms to verify the identities of the communicating parties, safeguarding against impersonation.
> - **Integrity**: Employs hash functions to maintain data integrity, protecting against alterations.
> - **Forward Secrecy**: Ensures that session keys are not compromised even if the long-term keys are breached in the future.
> - **Compatibility**: Supports a wide range of applications and services due to its broad acceptance in the industry.
## SSL/TLS Handshake Process

The SSL/TLS handshake process is the cornerstone of setting up a secure session. This multi-step protocol involves:

1. **Acknowledgment and Verification**: Exchange of messages to establish each other's presence and verify identities.
2. **Algorithm Negotiation**: Agreement on the cryptographic algorithms to ensure compatibility and security.
3. **Session Key Agreement**: Establishment of session keys for data encryption and decryption.

![[Pasted image 20231028205803.png]]

This process uses asymmetric cryptography to verify server identity and symmetric cryptography for secure data transfer, ensuring a seamless and secure communication experience.

> [!example] **RSA and EC Handshakes**:
> 
> - **RSA Handshake** (Now considered less secure): Involves encryption of a premaster secret with the server's public key.
> - **EC Handshake** (More secure and recommended): Utilizes Elliptic Curve Cryptography for key agreement, enhancing security and efficiency.
The exact steps of the TLS handshake may vary based on the chosen key exchange algorithm and cipher suites supported by both parties.

> [!summary]- [[Encryption RSA|RSA]] Handshake
> [[Encryption RSA]] exchange algorithm, while now considered not secure, was used in versions of TLS before 1.3. It goes roughly as follows:
> The RSA handshake process involves the following steps:
> 
> 1. **Client Hello**: The client sends a "hello" message to the server, indicating the supported TLS version and cipher suites.
>     
> 2. **Server Hello**: In response, the server sends its SSL certificate, selected cipher suite, and a server-generated random string.
>     
> 3. **Authentication**: The client verifies the server's SSL certificate with the certificate authority, ensuring the server's identity.
>     
> 4. **Premaster Secret Exchange**: The client generates a premaster secret, encrypts it with the server's public key, and sends it to the server.
>     
> 5. **Key Derivation**: The server decrypts the premaster secret using its private key and generates session keys.
>     
> 6. **Session Keys**: Both client and server independently calculate session keys using the client and server random strings and the premaster secret.
>     
> 7. **Finished Messages**: The client and server exchange "finished" messages, confirming that the handshake is complete and encrypted communication can begin.

> [!summary]- [[Encryption EC|EC]] Handshake
> [[Encryption EC]] exchange algorithm handshake process which is more secured and better for use than [[Encryption RSA]](previous handshake process)
> The EC handshake process, considered more secure, involves the following steps:
> 
> 1. **Client Hello**: The client sends a message containing the TLS version, cipher suites, and a client-generated random string.
>     
> 2. **Server Hello**: The server responds with its SSL certificate, selected cipher suite, server-generated random string, and a digital signature of previous messages.
>     
> 3. **Digital Signature Verification**: The client verifies the server's digital signature, confirming its identity.
>     
> 4. **Client DH Parameter**: The client sends its Diffie-Hellman (DH) parameter to the server.
>     
> 5. **Premaster Secret Calculation**: Both client and server independently calculate the premaster secret using their DH parameters.
>     
> 6. **Session Keys**: Session keys are derived from the premaster secret and client and server random strings.
>     
> 7. **Finished Messages**: The client and server exchange "finished" messages, indicating the completion of the handshake and the start of encrypted communication.

## Versions

SSL and TLS have evolved through several versions, each improving on its predecessors in terms of security and performance:

- **SSL 2.0 and 3.0**: Now deprecated due to significant vulnerabilities.
- **TLS 1.0 to 1.2**: Gradual enhancements, introducing stronger encryption methods and forward secrecy.
- **TLS 1.3**: The latest version, reducing latency and removing outdated features for optimal security.

> [!summary] **Encryption Across Versions**:
> 
> - Early SSL versions used basic encryption algorithms like RC4 and DES.
> - TLS versions introduced more advanced algorithms such as AES and ChaCha20 for robust encryption

## Real-World Example of SSL/TLS Handshake

This example outlines the steps involved in the SSL/TLS handshake process, using clear descriptions and relevant visuals.

> [!example]- **SSL/TLS Handshake in Action**:
>
>1. **Client Hello**: The SSL Client initiates the handshake by sending a "Client Hello" message. This message includes the client's random value, preferred SSL version, supported cipher suites (comprising signature and encryption algorithms), and supported compression methods. This step establishes the client's preferences for securing the communication.
>   ![[Pasted image 20231028201707.png]]
>
>2. **Server Hello**: In response, the SSL Server sends a "Server Hello" message. It includes the server's random value, the SSL version it has selected, the cipher suite it has chosen from the client's list (defining the signature and encryption algorithm), and the compression method it intends to use. This message confirms the server's participation and its security preferences.
>   ![[Pasted image 20231028201800.png]]
>
>3. **Certificate and Key Exchange**: Next, the server sends its SSL/TLS certificate to the client. This certificate contains the server's public key and a digital signature to verify its authenticity. The server also sends a "Server Hello Done" message, signaling the end of its part of the negotiation.
>   ![[Pasted image 20231028202127.png]]
>
>4. **Pre-master Secret Generation**: The SSL Client now creates a pre-master secret using the random numbers exchanged earlier. This secret is encrypted with the server's public key to ensure that only the server can decrypt it, safeguarding the secrecy of subsequent communications.
>
>5. **Client Key Exchange**: The client sends the encrypted pre-master secret to the server. Along with this, it sends a "Change Cipher Spec" message, indicating that subsequent records will be encrypted using the newly agreed specifications and keys. An "Encrypted Handshake Message" is also sent to verify the integrity and authenticity of the handshake thus far.
>   ![[Pasted image 20231028203500.png]]
>
>6. **Server Finalization**: The server responds with a "New Session Ticket" for session resumption purposes, followed by its own "Change Cipher Spec" and "Encrypted Handshake Message". This confirms that the server has successfully decrypted the pre-master secret and is ready to begin secure communications.
>   ![[Pasted image 20231028203522.png]]
>
>7. **Encrypted Communication**: With the handshake complete, both the SSL Client and SSL Server start exchanging encrypted application data. This encryption uses symmetric keys derived from the pre-master secret, ensuring that all subsequent data exchanged during the session is secure.
>   ![[Pasted image 20231028203542.png]]


## End-to-End Encryption

> [!danger]- **The SSL/TLS Problem**:
> SSL/TLS protocols secure data in transit but introduce several challenges:
> 
> - **Legacy Cryptography**: Supports outdated cryptographic methods like Diffie-Hellman and SHA-1, which are vulnerable to attacks.
> - **Single-Sided Authentication**: Typically, only servers are authenticated, leaving client authentication as a potential weak spot.
> - **Vulnerability to Proxies**: Proxies can intercept SSL/TLS encrypted traffic, compromising data privacy.
> - **Potential for Traffic Inspection**: Encrypted channels can be inspected by entities like Web Application Firewalls, raising privacy concerns.
> 
> These challenges underscore the need for stronger encryption solutions, such as end-to-end encryption (E2EE).

> [!important]- **[[End-to-End Encryption]] vs. TLS**:
> - **End-to-End Encryption**: Encrypts data from the sender to the recipient without decryption possibilities for intermediaries. Used in apps like WhatsApp to secure messages fully.
> - **TLS Encryption**: Secures data between the client and server but allows server access to plaintext. Effective for protecting data in transit, not at rest.
> 
> E2EE offers superior privacy by limiting data access to the communicating endpoints only, whereas TLS secures data transmission across the internet.

## Conclusion

SSL and TLS protocols are indispensable for securing online communications. By encrypting data and verifying participant identities, they prevent unauthorized access and data breaches, thus maintaining the confidentiality and integrity of internet communications.

# References

https://medium.com/@karan99/system-design-ssl-tls-mtls-ed126cf58287
SSL/TLS HandShake
https://www.cloudflare.com/en-gb/learning/ssl/what-happens-in-a-tls-handshake/
MLS
https://medium.com/asecuritysite-when-bob-met-alice/ssl-tls-the-dinosaur-protocols-97584c953580