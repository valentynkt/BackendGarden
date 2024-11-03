---
created: 2023-10-27 16:50
aliases:
  - DES
  - Data Encryption Standard
tags:
  - LearningIT
  - seed🌱
---

link: [[Encryption Block Cipher]]

# Encryption DES
Data Encryption Standard (DES) is a symmetric-key block cipher which encrypts data in blocks of size of 64 bit each. This simply means that 64-bit size plain text goes into the encryption function as an input and it will generate a 64-bit cipher text as an output. The key length in DES is 56 bits. This encryption standard will use the same key for encryption and decryption(symmetric-key). Inside the encryption process, there are 16 different identical encryption stages that use 16 different identical sub-keys generated using the main key.

``` ad-important
There are 3 main stages in DES,

1. [[#Initial permutation]]
2. Encryption round 01–16
3. Final Permutation
![[Pasted image 20231027180818.png]]
```
## Intro

``` ad-important
- [[Encryption Block Cipher|Block Cipher]]: DES is a block cipher encryption algorithm that operates on 64-bit blocks of plaintext at a time.
- **[[Cryptography Encryption#Symmetric Encryption|Symmetric Key Encryption]]:** DES uses a symmetric key encryption system, meaning that the same key is used for both encryption and decryption.
- **Fixed Key Size:** DES uses a fixed key size of 56 bits, which limits its security compared to modern encryption algorithms that use longer key sizes.
- [[Feistel Cipher]]: DES uses the Feistel Cipher structure, which splits the plaintext into two halves and then iteratively encrypts each half using a series of mathematical operations.
```

The various parameters which were considered before designing it are- _Block size(64 bits), Key size(56 bits), number of rounds a specific function to be applied(16), Subkey generation, and Round function._

Just like Feistel Cipher, the data block is divided into two parts, left and right and all the encryption algorithm is mostly the same except the subkeys used in the function here. For a brief, the 64-bit plaintext is divided into 32-bits each and both parts go through 16 rounds of function with subkeys generated (different for each round).

![[Pasted image 20231027180435.png]]
## DES Subkey Generation:
![[Pasted image 20231027180130.png]]

In the above figure, we can observe that initially, we got a key(64-bit) which is permuted into two parts and this permutation is named as **PC1**(it converts 64-bit key to 56-bit key) and then it is divided into parts of 28-bits each. Now the parts go through shifts as shown and after each shift, there is one more permutation named **PC2**(it converts 56-bit key to 48-bit key). And these 48-bits key are used as subkeys in each round of function of **DES**.

- In rounds i = 1,2,9,16, the two halves are rotated left by one bit. In the other rounds where i !=1,2,9,16, the two halves are rotated left by two bits.
## Initial permutation
- Input block Size: 64 bits
- Output block Size: 64 bits

In the stage of initial permutation, it will only perform a bit rearrangement for bit positions. There won’t be any encryption in this stage.

![[Pasted image 20231027181528.png]]
## Encryption round 1–16
The process of Encryption Rounds are the same as in [[Feistel Cipher]]
- Input block Size: 64 bits
- Input key Size: 56 bits
- Output block Size: 64 bits

![[Pasted image 20231027181616.png]]
The left 32 bit block will go through a XOR with the out put of the function f which is a 32 bit block.the output of this XOR function will be the next right 32 bit block for the 2nd encryption round.

The right 32 bits will go straight as the next left 32 bits for the 2nd encryption round while also being an input to the “function f”.

### Function f

- Input Ri(Right Input) block size: 32 bits
- Input Key size: 48 bits
- Output block size: 32 bits

![[Pasted image 20231027182049.png]]
There are 4 main steps in Function f,

**_01. Expansion_**
- Input block size: 32 bits
- Output block size: 48 bits
![[Pasted image 20231027182106.png]]
**_02. XOR_**
- Input block size: 48 bits
- Input Key size: 48 bits
- Output block size: 48 bits

**_03. S Boxes (Substitution boxes)_**
- Input block size: 48 bits
- Output block size: 32 bits
- No of S boxes: 08

**_04. Permutation_**
- Input block size: 32 bits
- Output block size: 32 bits
![[Pasted image 20231027182325.png]]
## Final Permutation
- Input block Size: 64 bits
- Output block Size: 64 bits

In the stage of final permutation, it will again perform a bit rearrangement for bit positions. This will be the inverse of the initial permutation. There won’t be any encryption in this stage.
## Decryption
![[Pasted image 20231027182646.png]]

**However, DES can relatively easily be broken with an exhaustive key-search attack. The problem of DES is with the key length of the algorithm which is only 56 bits. Therefore DES is not suited for most applications any more.**

As we know the Data encryption standard (DES) uses 56 bit key to encrypt any plain text which can be easily be cracked by using modern technologies. To prevent this from happening double DES and triple DES were introduced which are much more secured than the original DES because it uses 112 and 168 bit keys respectively. They offer much more security than DES.
## [[Encryption Double DES]]
## [[Encryption Triple DES]]
# Reference:
https://medium.com/dreamochievers/the-insertion-of-data-encryption-standard-des-af0f7da44808


 