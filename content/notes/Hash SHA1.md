Date and Time: <u> 2023-10-25 20:21 </u>
Status: #LearningIT
Tags: [[Cryptography]], [[Cryptography Hashing]]

# SHA1


``` ad-important
[**SHA-1**](https://en.wikipedia.org/wiki/SHA-1) (**Secure Hash Algorithm 1**) is a hash function which takes an input and produces a **160-bit (20-byte)** hash value known as a message digest – typically rendered as 40 hexadecimal digits
```

SHA-1 forms part of several widely used security applications and protocols, including [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security "Transport Layer Security") and [SSL](https://en.wikipedia.org/wiki/Secure_Sockets_Layer "Secure Sockets Layer"), [PGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy "Pretty Good Privacy"), [SSH](https://en.wikipedia.org/wiki/Secure_Shell "Secure Shell"), [S/MIME](https://en.wikipedia.org/wiki/S/MIME "S/MIME"), and [IPsec](https://en.wikipedia.org/wiki/IPsec "IPsec").  Both MD5 and SHA-1 are descended from [MD4](https://en.wikipedia.org/wiki/MD4 "MD4").

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
            using (SHA1 sha1Hash = SHA1.Create())
            {
                //From String to byte array
                byte[] sourceBytes = Encoding.UTF8.GetBytes(source);
                byte[] hashBytes = sha1Hash.ComputeHash(sourceBytes);
                string hash = BitConverter.ToString(hashBytes).Replace("-",String.Empty);

                Console.WriteLine("The SHA1 hash of " + source + " is: " + hash);     
            }
        } 
    }
```

**Output:**
The SHA1 hash of Hello Word! is: 2EF7BDE608CE5404E97D5F042F95F89F1C232871
# Reference:
https://dev.to/stratiteq/cryptography-with-practical-examples-in-net-core-1mc4



 