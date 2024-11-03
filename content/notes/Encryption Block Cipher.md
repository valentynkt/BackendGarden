---
created: 2023-10-26 02:20
aliases: 
tags:
  - LearningIT
  - seed🌱
---

link: [[Cryptography Encryption]]


# Block Cipher

**Block Cipher** is **symmetrical encryption** algorithm type

Block ciphers convert data in plaintext into [[Cryptography CipherText|cipher text]] in fixed-size blocks. The block size generally depends on the encryption scheme and is usually in octaves (64-bit or 128-bit blocks). If the plaintext length is not a multiple of 8, the encryption scheme uses **padding** to ensure complete blocks. For instance, to perform 128-bit encryption on a 150-bit plaintext, the encryption scheme provides two blocks, 1 with 128 bits and one with the 22 bits left. 106 Redundant bits are added to the last block to make the entire block equal to the encryption scheme’s ciphertext block size. 

While Block ciphers use symmetric keys and algorithms to perform data encryption and decryption, they also require an **initialization vector (IV)**(IV is the same as [[Cryptography Salt]] ) to function. An initialization vector is a pseudorandom or random sequence of characters used to encrypt the first block of characters in the plaintext block. The resultant ciphertext for the first block of characters acts as the initialization vector for the subsequent blocks. Therefore, the symmetric cipher produces a unique ciphertext block for each iteration while the IV is transmitted along with the symmetric key and does not require encryption.

Block encryption algorithms offer **high diffusion;** that is, if a single plaintext block were subjected to multiple encryption iterations, it resulted in a unique ciphertext block for each iteration. This makes the encryption scheme relatively tamper-proof since it is difficult for malicious actors to insert symbols into a data block without detection. On the other hand, block ciphers have a **high error propagation rate** since a bit of change in the original plaintext results in entirely different ciphertext blocks

## Block Cipher Operation Modes

Several block [[Cryptography CipherText|cipher]] modes of operation have been developed to enable the encryption of multiple blocks of long data. These modes fall into two categories: 
**Confidentiality-only** and **Authenticated encryption with additional data** modes.

### **Confidentiality-only Modes**
The Confidentiality-only cipher mode of operation focuses on keeping communication between two parties private. These modes include:

``` ad-important
- [[Encryption ECB|Electronic codebook (ECB)]] 
![[Encryption ECB]]
- [[Encryption CBC|Cipher block chaining mode (CBC)]]
![[Encryption CBC]]
- [[Encryption PCBC]]
![[Encryption PCBC]]
```


### Authenticated encryption with additional data
This mode of operation for block ciphers ensures data authenticity and confidentiality. This mode can be further sub-divided into:

``` ad-important
- [[Encryption GCM|Galois/counter mode (GCM)]]
![[Encryption GCM]]
- **Synthetic initialization vector (SIV)** – This type of block cipher uses an encryption key, plaintext input, and a header (authenticated variable-length octet strings) to enable authenticated encryption. SIV produces a deterministic ciphertext that keeps the plaintext private while ensuring the authenticity of both the header and ciphertext.
```

## Examples of Block Ciphers
Block ciphers form the basis of most modern cipher suites. Some commonly used block cipher encryption standards include:
``` ad-important
- [[Encryption DES|Data Encryption Standard (DES)]]
- [[Encryption AES|Advanced Encryption Standard (AES)]]
- Triple DES
- Blowfish
- Twofish
```
# Reference:
https://crashtest-security.com/block-cipher-vs-stream-cipher/


 