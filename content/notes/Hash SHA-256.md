Date and Time: <u> 2023-10-25 19:46 </u>
Status: #LearningIT
Tags: [[Cryptography]], [[Cryptography Hashing]]

# SHA-256


``` ad-important
SHA-256 generates an almost-unique 256-bit (32-byte)
```

**SHA-256** is one of the successor hash functions to SHA-1 (collectively referred to as SHA-2), and is one of the strongest hash functions available. SHA-256 is not much more complex to code than SHA-1, and has not yet been compromised in any way.
## Round 
A round is a sequence of operations performed multiple times to thoroughly mix up the data until it’s unrecognizable. This process is repeated 64 times within the SHA-256.
## Shift amount
The concept of a shift amount is used as a consistent technique for rearranging bits. The data blocks are partitioned into eight portions, each consisting of 32 bits. These eight segments are subsequently shifted in a specific manner, effectively shuffling and randomizing the data.
## Example
``` csharp
using System;
using System.Security.Cryptography;
using System.Text;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            string source = "Hello World!";
            using (SHA256 sha256Hash = SHA256.Create())
            {
                //From String to byte array
                byte[] sourceBytes = Encoding.UTF8.GetBytes(source);
                byte[] hashBytes = sha256Hash.ComputeHash(sourceBytes);
                string hash = BitConverter.ToString(hashBytes).Replace("-", String.Empty);

                Console.WriteLine("The SHA256 hash of " + source + " is: " + hash);
            }
        }
    }
}
```

**Output:**
The SHA256 hash of Hello World! is: 7F83B1657FF1FC53B92DC18148A1D65DFC2D4B1FA3D677284ADDD200126D9069

### Pros/Cons
**Pros**
``` ad-success
- SHA-256 is versatile and easy to implement in a variety of settings. It’s also really hard to break. For example, hashing algorithms should be irreversible, but aren’t always. SHA-256 is strong enough to prevent hackers from deriving the original message from the hash value.
- Hashing can also help you fight off a cybersecurity attack. For example, if you had to defend against a [DDoS attack](https://nordvpn.com/blog/what-is-a-ddos-attack/), you could use SHA-256 to authenticate and verify the integrity of incoming network traffic.
```

Cons
``` ad-error
When it comes to disadvantages, SHA-256 is slower and more resource intensive than the previous versions. Some researchers also claim that in the future, SHA-256 may be vulnerable to [brute-force attacks](https://nordvpn.com/blog/brute-force-attack/).
```
# Reference:
https://nordvpn.com/blog/sha-256/


 