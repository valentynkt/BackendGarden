---
created: 2023-10-27 19:33
aliases:
  - AES
tags:
  - LearningIT
  - seed🌱
---

link: [[Encryption Block Cipher]]


# Encryption AES
**AES is the successor to [[Encryption DES|DES]].**
![[Pasted image 20231027201006.png]]
## Intro
While many cryptographic algorithms have become deprecated over the years, AES has maintained a strong standard that is commonly used in industry as well as government security.
AES is used in a wide array of applications that include the encryption of data at rest, and secure file transfer protocols like HTTPS.

AES is a symmetric algorithm, meaning that you can both encrypt and decrypt information. AES is comprised from 128-bit chunks of data to be used as block ciphers.

The 128 bits are then grouped to 16 bytes (8 bits in every byte). The 16 bytes are then represented as a two-dimensional array, a.k.a the matrix representation. For AES, this is referenced as the current ‘state’.

![[Pasted image 20231027193832.png]]
AES allows a key to be 128, 192 or 256 bits in length. The key is simply a randomly generated value.

### History
Back in the day, DES used to be the de facto encryption algorithm. However, it used a 56-bit key, and as technology progressed attacks against it started to become more plausible. Eventually, DES was deemed too insecure for continued use. The community transitioned to [[Encryption Triple DES|triple DES]] (which is still around today). In essence, triple DES is DES performed 3 times consecutively. As one might expect, triple DES is 3 times more secure than just plain DES. However, it’s also 3 times slower.

The US government held a competition to come up with an alternative to triple DES. In the end, **Rijndael,** written by the two Belgian cryptologists Vincent Rijmen and Joan Daemen, was chosen for its performance and its ease of implementation on both hardware and software, as well as its level of security. **Rijndael** became the **Advanced Encryption Standard** for the US, and ultimately for the rest of the world as well.

## AES Algorithm 

Suppose Bob wanted to send a message to Alice. Bob’s unencrypted message is first broken down into 128-bit chunks. The bytes (16 in all) in a given chunk are then organized as a 4x4 matrix.

![[Pasted image 20231027194644.png]]

``` ad-important
The block is passed through the following sequence of steps a total of x times, where x depends on the size of the cypher key.

1. Substitute Bytes
2. Shift Rows
3. Mix Columns
4. Add Round Key
```

### Substitute Bytes
In this step, each element in the matrix is mapped to the corresponding byte in the **Rijndael S-box**.
![[Pasted image 20231027194927.png]]
### Shift Rows
In the second step, we rotate each element x elements (bytes) to the left, where x is the index of the row.

- Row 0 — Shift left 0 bytes (i.e. don’t shift)
![[Pasted image 20231027195245.png]]

- Row 1 — Shift left 1 byte
![[Pasted image 20231027195311.png]]

- Row 2 — Shift left 2 bytes
![[Pasted image 20231027195337.png]]
- Row 3 — Shift left 3 bytes
![[Pasted image 20231027195405.png]]

**We finish with the following matrix:**
![[Pasted image 20231027195423.png]]
### Mix Columns
We multiply every column by a predefined matrix.
![[Pasted image 20231027195629.png]]
![[Pasted image 20231027195638.png]]


![[Pasted image 20231027195811.png]]
It’s important to note that this is not regular matrix multiplication. If any term is greater than 2 to the power of 8, we divide the polynomial by the Galois irreducible polynomial:
![[Pasted image 20231027195732.png]]

**We repeat the process for every element, and obtain the following matrix:**
![[Pasted image 20231027195841.png]]
### Add Round Key
In this step, we perform a bitwise XOR operation between the columns of the matrix we obtained in the preceding step and the **Round Key**. In the first iteration, the **Round Key** is the first 128 bits of the cypher key.
We have this key in bits
![[Pasted image 20231027195959.png]]
[[XOR Operation]] between the columns of our previous matrix and Round Key
![[Pasted image 20231027200056.png]]
![[Pasted image 20231027200113.png]]

--- 

### Repeat
The preceding matrix is used as the input to the next round, and the process itself is repeated for another x rounds.

The final round excludes the **Mix Columns** step.
## AES Key Schedule
The process of computing a new key for the following rounds is known as the **Key Schedule**. As we mentioned previously, the number of rounds depends on the length of the initial cypher key.

- 128 bit key = 10 rounds
- 192 bit key = 12 rounds
- 256 bit key = 14 rounds

In the same manner as the 128-bit input block is arranged in the form of a state array, the algorithm arranges the first 16 bytes of the encryption key in the form of a 4 × 4 matrix of bytes. The following figure shows the four words of the original 128-bit key being expanded into a key schedule consisting of 4 x 11 = 44 words. The first four bytes of the encryption key constitute the word w0, the next four bytes the word w1, and so on up to w3.

## C# Example
``` csharp
using System;
using System.IO;
using System.Security.Cryptography;

namespace RijndaelManaged_Example
{
    class RijndaelExample
    {
        public static void Main()
        {
            try
            {

                string original = "Here is some data to encrypt!";

                // Create a new instance of the RijndaelManaged
                // class.  This generates a new key and initialization
                // vector (IV).
                using (RijndaelManaged myRijndael = new RijndaelManaged())
                {

                    myRijndael.GenerateKey();
                    myRijndael.GenerateIV();
                    // Encrypt the string to an array of bytes.
                    byte[] encrypted = EncryptStringToBytes(original, myRijndael.Key, myRijndael.IV);

                    // Decrypt the bytes to a string.
                    string roundtrip = DecryptStringFromBytes(encrypted, myRijndael.Key, myRijndael.IV);

                    //Display the original data and the decrypted data.
                    Console.WriteLine("Original:   {0}", original);
                    Console.WriteLine("Round Trip: {0}", roundtrip);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Error: {0}", e.Message);
            }
        }
        static byte[] EncryptStringToBytes(string plainText, byte[] Key, byte[] IV)
        {
            // Check arguments.
            if (plainText == null || plainText.Length <= 0)
                throw new ArgumentNullException("plainText");
            if (Key == null || Key.Length <= 0)
                throw new ArgumentNullException("Key");
            if (IV == null || IV.Length <= 0)
                throw new ArgumentNullException("IV");
            byte[] encrypted;
            // Create an RijndaelManaged object
            // with the specified key and IV.
            using (RijndaelManaged rijAlg = new RijndaelManaged())
            {
                rijAlg.Key = Key;
                rijAlg.IV = IV;

                // Create an encryptor to perform the stream transform.
                ICryptoTransform encryptor = rijAlg.CreateEncryptor(rijAlg.Key, rijAlg.IV);

                // Create the streams used for encryption.
                using (MemoryStream msEncrypt = new MemoryStream())
                {
                    using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
                    {
                        using (StreamWriter swEncrypt = new StreamWriter(csEncrypt))
                        {

                            //Write all data to the stream.
                            swEncrypt.Write(plainText);
                        }
                        encrypted = msEncrypt.ToArray();
                    }
                }
            }

            // Return the encrypted bytes from the memory stream.
            return encrypted;
        }

        static string DecryptStringFromBytes(byte[] cipherText, byte[] Key, byte[] IV)
        {
            // Check arguments.
            if (cipherText == null || cipherText.Length <= 0)
                throw new ArgumentNullException("cipherText");
            if (Key == null || Key.Length <= 0)
                throw new ArgumentNullException("Key");
            if (IV == null || IV.Length <= 0)
                throw new ArgumentNullException("IV");

            // Declare the string used to hold
            // the decrypted text.
            string plaintext = null;

            // Create an RijndaelManaged object
            // with the specified key and IV.
            using (RijndaelManaged rijAlg = new RijndaelManaged())
            {
                rijAlg.Key = Key;
                rijAlg.IV = IV;

                // Create a decryptor to perform the stream transform.
                ICryptoTransform decryptor = rijAlg.CreateDecryptor(rijAlg.Key, rijAlg.IV);

                // Create the streams used for decryption.
                using (MemoryStream msDecrypt = new MemoryStream(cipherText))
                {
                    using (CryptoStream csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
                    {
                        using (StreamReader srDecrypt = new StreamReader(csDecrypt))
                        {
                            // Read the decrypted bytes from the decrypting stream
                            // and place them in a string.
                            plaintext = srDecrypt.ReadToEnd();
                        }
                    }
                }
            }

            return plaintext;
        }
    }
}
```
# Reference:
https://towardsdatascience.com/aes-encryption-256-bit-a9ae49cde0b6
https://levelup.gitconnected.com/an-in-depth-guide-to-aes-encryption-with-angular-service-implementation-ebfeec3d6c63

C# code example
https://learn.microsoft.com/en-us/dotnet/api/system.security.cryptography.rijndaelmanaged?view=net-7.0&redirectedfrom=MSDN

 