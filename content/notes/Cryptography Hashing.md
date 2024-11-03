---
created: 2024-05-20 14:48
aliases:
  - Hashing
  - Hash
tags:
  - LearningIT
  - seed🌱
  - ToBeImplemented
links:
---

link: [[Cryptography]]

# Cryptography Hashing
## Intro
Hashing (also known as hash functions) in cryptography is a process of mapping a binary string of an arbitrary length to a small binary string of a fixed length, known as a hash value, a hash code, or a hash.

``` ad-important
Hashing is a one-way conversion. You cannot un-hash hashed data.
```

**Hashing** can be simply explained as translation from input text into resulting text of fixed size by use of the algorithm.
![[Pasted image 20231024164218.png]]
As you can see in above examples with just a slight change of input text, result will be completely different.
## Real World Hash

For example:- the infro-numric hash is the one of the basic hash version in which the sum of digits is subtracted from the number to get the hash.

This is one of the basic hash and is known for less security.

This works as follows:-
``` ad-important
1. The machine asks for the number from user. For example :- 2245
2. Then the sum of digits calculated. like here 2 + 2 + 4 + 5 = 13
3. Now the sum of digits is subtracted. Here 2245 - 13 = 2232.

Now, the hash obtained can be written as follows:-

HASH INFRO-NUMERIC(2245) = 2232
```
## Example
Let's take a look at an example in .Net Core with use of [[Hash SHA-256]] algorithm. For following examples we'll have to use `System.Security.Cryptography` namespace.
``` csharp
using System.Security.Cryptography;
```

In following function we are hashing texts to demonstrate how hashing works, and how results change if we just make a slight change to the text.
``` csharp
internal static void CryptographicHashFunctionDemo()
        {
            Console.WriteLine("***** Cryptographic hash demo *****");

            foreach (var message in new[] {
                "Fox",
                "The red fox jumps over the blue dog",
                "The red fox jumps ouer the blue dog",
                "The red fox jumps oevr the blue dog",
                "The red fox jumps oer the blue dog"})
            {
                Console.WriteLine($"{ message } => { CryptographicHash.ComputeHash(message) }");
            }

            Console.Write(Environment.NewLine);
        }
```

If we take a closer look at the `ComputeHash` we can see texts are encrypted with SHA-256 algorithm.

``` csharp
internal static string ComputeHash(string message)
        {
            using var sha256 = SHA256.Create();
            var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(message));
            return hashedBytes.ToHex();
        }
```
By running the code, you'll get following results.
![[Pasted image 20231024164602.png]]


## Hash Functions

### [[Hash MD5]]
![[Hash MD5#Hash MD5]]

### [[Hash SHA1]]
![[Hash SHA1#SHA1]]
### [[Hash SHA-256]]
![[Hash SHA-256#SHA-256]]


## [[Hash PBKDF2]]
![[Hash PBKDF2#Hash PBKDF2]]
# Reference:
https://dev.to/stratiteq/cryptography-with-practical-examples-in-net-core-1mc4


 