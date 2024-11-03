Date and Time: <u> 2023-10-27 16:54 </u>
Status: #LearningIT
Tags: [[Cryptography]], [[Cryptography Encryption]]

# Feistel Cipher
Feistel Cipher model is a structure or a design used to develop many block ciphers such as DES. Feistel cipher may have invertible, non-invertible and self invertible components in its design. Same encryption as well as decryption algorithm is used. A separate key is used for each round. However same round keys are used for encryption as well as decryption.

![[Pasted image 20231027174619.png]]
## Feistel cipher algorithm

- Create a list of all the Plain Text characters.  
- Convert the Plain Text to Ascii and then 8-bit binary format.
- Divide the binary Plain Text string into two halves: left half (L1)and right half (R1)
- Generate a random binary key (K1) of length equal to the half the length of the Plain Text for the two rounds.

``` ad-important
- The input block to each round is divided into two halves that can be denoted as L and R for the left half and the right half.
    
- In each round, the right half of the block, R, goes through unchanged. But the left half, L, goes through an operation that depends on R and the encryption key. First, we apply an encrypting function ‘f’ that takes two input − the key K and R. The function produces the output f(R,K). Then, we XOR the output of the mathematical function with L.
- In real implementation of the Feistel Cipher, such as [[Encryption DES|DES]], instead of using the whole encryption key during each round, a round-dependent key (a subkey) is derived from the encryption key. This means that each round uses a different key, although all these subkeys are related to the original key.
- The permutation step at the end of each round swaps the modified L and unmodified R. Therefore, the L for the next round would be R of the current round. And R for the next round be the output L of the current round.
- Above substitution and permutation steps form a ‘round’. The number of rounds are specified by the algorithm design.
- Once the last round is completed then the two sub blocks, ‘R’ and ‘L’ are concatenated in this order to form the ciphertext block.
```

### Code Steps
**1 Round**
- **a.** Generate function f1 using R1 and K1 as follows:
``` python
f1= xor(R1, K1)
```

- **b.** Now the new left half(L2) and right half(R2) after round 1 are as follows:
``` python
R2= xor(f1, L1)
L2=R1
```

**2 Round**
- **a.** Generate function f2 using R2 and K2 as follows:
``` python
f2= xor(R2, K2)
```

- **b.** Now the new left half(L3) and right half(R3) after round 2 are as follows:
``` python
R3= xor(f2, L2)
L3=R2
```

- Concatenation of R3 to L3 is the Cipher Text
- Same algorithm is used for decryption to retrieve the Plain Text from the Cipher Text.
## Decryption Process

The process of decryption in Feistel cipher is almost similar. Instead of starting with a block of plaintext, the ciphertext block is fed into the start of the Feistel structure and then the process thereafter is exactly the same as described in the given illustration.

The process is said to be almost similar and not exactly same. In the case of decryption, the only difference is that the subkeys used in encryption are used in the reverse order.

The final swapping of ‘L’ and ‘R’ in last step of the Feistel Cipher is essential. If these are not swapped then the resulting ciphertext could not be decrypted using the same algorithm.

![[Pasted image 20231027174715.png]]
# Reference:
https://www.tokenex.com/blog/vh-what-is-a-feistel-cipher/
https://www.geeksforgeeks.org/feistel-cipher/


 