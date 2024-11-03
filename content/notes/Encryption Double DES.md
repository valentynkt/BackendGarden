Date and Time: <u> 2023-10-27 19:06 </u>
Status: #LearningIT
Tags: [[Cryptography]], [[Cryptography Encryption]], [[Encryption Block Cipher]], [[Feistel Cipher]], [[Encryption DES]]

# Encryption Double DES
Double DES needed a key search of (2^2x56), 2^112 keys. It introduce the terms of the meet-in-the-middle attack. This attack contains encryption from one end, decryption from the other and connecting the results in the middle.
## Intro
The algorithm is the same as the [[Encryption DES]] , it’s just that now we are using two different keys(K1, K2) in the following manner,

**_ciphertext=Enc(K2,Enc(K1,plaintext))_**
**_plaintext=Dec(K1, Dec(K2, ciphertext))_**

Double DES is a encryption technique which uses two instance of DES on same plain text. In both instances it uses different keys to encrypt the plain text. Both keys are required at the time of decryption. The 64 bit plain text goes into first DES instance which then converted into a 64 bit middle text using the first key and then it goes to second DES instance which gives 64 bit cipher text by using second key.

``` ad-warning
However double DES uses 112 bit key but gives security level of 2^56 not 2^112 and this is because of meet-in-the middle attack which can be used to break through double DES.
```
### Image flow
**Encryption**

![[Pasted image 20231027190841.png]]
![[Pasted image 20231027190856.png]]
**Decryption**
![[Pasted image 20231027190953.png]]
# Reference:
https://www.geeksforgeeks.org/double-des-and-triple-des/


 