Date and Time: <u> 2023-10-26 02:20 </u>
Status: #LearningIT
Tags: [[Cryptography]], [[Cryptography Encryption]]

# Encryption Stream Cipher
**Stream Cipher** is **symmetrical encryption** algorithm type

A stream cipher encrypts a continuous string of binary digits by applying time-varying transformations on plaintext data. Therefore, this type of encryption works bit-by-bit, using **keystreams** to generate ciphertext for arbitrary lengths of plain text messages. The cipher combines a key (128/256 bits) and a nonce digit (64-128 bits) to produce the keystream — a pseudorandom number XORed with the plaintext to produce ciphertext. While the key and the nonce can be reused, the keystream has to be unique for each encryption iteration to ensure security. Stream encryption ciphers achieve this using feedback shift registers to generate a **unique** **nonce (number used only once)** to create the keystream.

Encryption schemes that use stream ciphers are less likely to propagate system-wide errors since an error in the translation of one bit does not typically affect the entire plaintext block. Stream encryption also occurs in a **linear, continuous manner**, making it simpler and faster to implement. On the other hand, stream ciphers lack diffusion since each plaintext digit is mapped to one ciphertext output. Additionally, they do not validate authenticity, making them vulnerable to insertions. If hackers break the encryption algorithm, they can insert or modify the encrypted message without detection. Stream ciphers are mainly used to encrypt data in applications where the amount of plain text cannot be determined and in low latency use-cases.

## Types of Stream Ciphers
Stream ciphers fall into two categories:

``` ad-important
**Synchronous stream ciphers**
The keystream block is generated independently of the previous ciphertext and plaintext messages in a synchronous stream cipher. The most common stream cipher modes use pseudorandom number generators to create a string of bits and combine it with the key to form the keystream, which is XORed with the plaintext to generate the ciphertext.

**Self-synchronizing/asynchronous stream ciphers**
A self-synchronizing stream cipher, also known as **ciphertext autokey**, generates the keystream block as a function of the symmetric key and fixed size (N-bits) of the previous ciphertext block. Altering the ciphertext alters the content of the next keystream so that asynchronous stream ciphers can detect active attacks. These ciphers also offer limited error propagation since a single-digit error can affect N bits at most.
```

## Examples of Stream Cipher
``` ad-important
- **Rivest Cipher (RC4)**
- **Salsa20**
- **Software-optimized Encryption Algorithm (SEAL)**
- **HC-256**
```
# Reference:
https://crashtest-security.com/block-cipher-vs-stream-cipher/


 