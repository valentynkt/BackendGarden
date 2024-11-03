---
created: 2024-10-28 18:53
aliases:
  - Encryption
tags:
  - LearningIT
  - seed🌱
---

link: [[Cryptography]]

# Cryptography Encryption

![[Pasted image 20240515192119.png]]
## Intro
``` ad-important
**Encryption** is two-way conversion
```

**Encryption** is the process of sending information to a recipient that can't be interpreted unless having access to a key. Encryption always consist of two parts, an algorithm and a key.

``` ad-important
Encryption can be **symmetric** and **asymmetric**. In symmetric encryption same key is used for encryption and decryption, while in asymmetric different keys are in use: public key and private key.
Encryption can be symmetric and asymmetric. In symmetric encryption same key is used for encryption and decryption, while in asymmetric different keys are in use: public key and private key.
```

![[Pasted image 20231025014250.png]]

## Symmetric vs Asymmetric
Another difference between asymmetric and symmetric encryption is the length of the keys. In symmetric cryptography, the length of the keys, which is randomly selected, are typically set at 128 bits or 256 bits, depending on the level of security needed.

In asymmetric encryption, there must be a mathematical relationship between the public and private keys. Since malicious actors can potentially exploit this pattern to [crack the encryption](https://www.techtarget.com/searchsecurity/answer/Is-it-possible-to-crack-the-public-key-encryption-algorithm), asymmetric keys need to be longer to offer the same level of security. The difference in the length of the keys is so pronounced that a 2048-bit asymmetric key and a 128-bit symmetric key provide about an equivalent level of security.

Asymmetric encryption is notably slower than symmetric encryption, which has a faster execution speed.
## Symmetric Encryption
Symmetric encryption can be seen in the following example. We create a key, encrypt message using the key and decrypt message using the same key.

In this algorithm, a single key is used for both Encryption and Decryption. It’s comparatively faster than its equivalent Asymmetric Encryption.

Symmetric Encryption is a kind of computerized algorithm that uses a specific key to secure an electronic message. Its conversion technique follows certain mathematical steps along with a private key, which makes it difficult for a hacker to decrypt. It’s a two-way algorithm where we can decrypt the [[Cryptography CipherText|cipher]] text using the same key.

In this type of encryption, both sender and receiver need to know the secret key which may have some security problems.

``` ad-important
Example of Symmetric Encryption

- Blowfish
- [[Encryption AES|AES (Advanced Encryption Standard)]]
- RC4 (Rivest Cipher 4)
- [[Encryption DES|DES (Data Encryption Standard)]]
- [[Encryption Double DES|Double DES]]
- [[Encryption Triple DES|Triple DES]]
- RC5 (Rivest Cipher 5)
- RC6 (Rivest Cipher 6)
```

### Block Cipher and Stream Cipher
Symmetric encryption algorithms are categorized into two: [[Encryption Block Cipher|Block Cipher]] and [[Encryption Stream Cipher|Stream Ciphers]].

Block ciphers encrypt data in blocks of set lengths, while stream ciphers do not and instead encrypt plaintext one byte at a time. The two encryption approaches, therefore, vary widely in implementation and use cases.

**Bit conversion**
Block ciphers transform plaintext 1 block (64/128/256 bits) at a time, while stream ciphers convert plaintext to ciphertext 1 byte at a time. This makes block ciphers slower since an entire block has to be accumulated before the data is encrypted/decrypted. In contrast, stream ciphers encrypt bits of data into individual symbols one at a time.

**Translation principle**
Stream ciphers utilize only the confusion principle to transform data, ensuring data confidentiality. On the other hand, block ciphers use data diffusion and confusion to encrypt plaintext. Block ciphers can, therefore, be used to implement authenticated encryption for enhanced security.

**Reversibility**
Stream ciphers use an [[XOR Operation]] on the plaintext to create ciphertext. Stream-based encryption is easily reversed by XORing the ciphertext outputs. Block ciphers encrypt more bits at a time, making the decryption comparatively complex.
## Asymmetric Encryption

We have studied that Symmetric Encryption has a security concern. Here comes Asymmetric Encryption which will help to solve security concern as two different key is used for both Encryption and Decryption. One is the Public key which is used for Encryption and another is the Private key which is used for Decryption

Asymmetric encryption is slower than symmetric encryption due to the longer key lengths and the complexity of the encryption algorithms used. In order to maintain security, asymmetric encryption must make it too difficult for a hacker to crack the public key and discover the private key.

``` ad-important
Example of Asymmetric Encryption

- [[Encryption RSA|RSA]] (Ron **R**ivest, Adi **S**hamir, and Leonard **A**dleman)
- [[Encryption EC|EC]] (**E**lliptic **C**urve)
- [[Cryptography Digital Signature|DSA]] (**D**igital **S**ignature **A**lgorithm)
```

### How it works
Sensitive messages move through a process of encryption and decryption with public and private keys.

An algorithm starts the process. A mathematical function generates a key pair. Each key is different, but they are related to one another mathematically.

Key generation protocols differ, and the keys they create are different too. In the Microsoft environment, for example, you need [about four lines of code](https://docs.microsoft.com/en-us/dotnet/standard/security/generating-keys-for-encryption-and-decryption) to start the development of a pair of asymmetric keys. Other programs work in a similar manner.

``` ad-important
Imagine that someone wants to send an encrypted message to another person. The process looks like this:

- **Registration:** The user and the sender have connected with an official entity that generated both public and private keys. 
- **Lookup:** The sender scours a [public-key directory](https://www.thekumachan.com/public-key-directory/) for the recipient's public key information. 
- **Encrypt:** The sender creates a message, encrypts it with the recipient's public key, and sends it. 
- **Decode:** The recipient uses the private key to unscramble the message. 
- **Reply:** If the recipient wants to respond, the process moves in reverse.
```
### Use Cases:
- Asymmetric cryptography is typically used to authenticate data using [[Cryptography Digital Signature]]. 
- **Encrypted email**. A public key can be used to encrypt a message and a private key can be used to decrypt it.
- **[[SSL and TLS Protocols]].** Establishing encrypted links between websites and browsers also makes use of asymmetric encryption.
- [[CryptoCurrency]] - [[Bitcoin]] and other cryptocurrencies [rely on asymmetric cryptography](https://www.techtarget.com/searchsecurity/answer/Is-Bitcoin-safe-The-truth-about-Bitcoin-security-and-crypto-currency). Users have public keys that everyone can see and private keys that are kept secret. Bitcoin uses a cryptographic algorithm to ensure only legitimate owners can spend the funds. A transaction is associated with a public key, but a private key is required for a person to move that transaction from one account to another.

### Pros/Cons
**Pros**
``` ad-success
- **Security:** Without both keys, a hacker can only access useless data. 
- **Transparency:** Public keys can be openly distributed, as losing them will not devolve into a security risk. 
- The use of digital signatures is enabled so that a recipient can verify that a message comes from a particular sender.
```

**Cos**
``` ad-error
- **Speed:** Systems need time for decryption. Users sending plenty of bulk files will have a long wait. 
- **Vulnerabilities:** Lose a private key, and anyone who finds it can read all messages, even if they're private. A lost key can result in a man-in-the-middle attack too. 
- **Loss:** If you lose your private key, you won't be able to decrypt messages sent to you.
- **Long-term sustainability**: In the future, [quantum computing](https://www.ibm.com/quantum-computing/learn/what-is-quantum-computing/) will break most asymmetric and symmetric approaches.
```
# Reference:
https://sankhadip.medium.com/encryption-and-decryption-in-c-f2de3d802e1d


 