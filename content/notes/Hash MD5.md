Date and Time: <u> 2023-10-25 20:23 </u>
Status: #LearningIT
Tags: [[Cryptography]], [[Cryptography Hashing]]

# Hash MD5

``` ad-important
The [`MD5`](https://en.wikipedia.org/wiki/MD5) algorithm is a widely used hash function producing a **128-bit hash value (16 Bytes, 32 Hexdecimal characters)**.
```


``` ad-warning
MD5 is not secure enough and have several vulnerabilities. It is not recommended to use.
Use [[Hash SHA-256]] instead
```

The [`ComputeHash`](https://msdn.microsoft.com/en-us/library/s02tk69a(v=vs.110).aspx)method of the [`System.Security.Cryptography.MD5`](https://msdn.microsoft.com/en-us/library/system.security.cryptography.md5(v=vs.110).aspx)class returns the hash as an array of 16 bytes.

``` csharp

using System;
using System.Security.Cryptography;
using System.Text;

internal class Program
{
    private static void Main()
    {
        var source = "Hello World!";

        // Creates an instance of the default implementation of the MD5 hash algorithm.
        using (var md5Hash = MD5.Create())
        {
            // Byte array representation of source string
            var sourceBytes = Encoding.UTF8.GetBytes(source);

            // Generate hash value(Byte Array) for input data
            var hashBytes = md5Hash.ComputeHash(sourceBytes);

            // Convert hash byte array to string
            var hash = BitConverter.ToString(hashBytes).Replace("-", string.Empty);

            // Output the MD5 hash
            Console.WriteLine("The MD5 hash of " + source + " is: " + hash);
        }
    }
}
```

**Output:** The MD5 hash of Hello World! is: ED076287532E86365E841E92BFC50D8C

Security Vulnerabilities: (https://en.wikipedia.org/wiki/MD5#Security)

Like most hash functions, MD5 is neither encryption nor encoding. It can be reversed by brute-force attack and suffers from extensive vulnerabilities against collision and preimage attacks.

# Reference:
https://dev.to/stratiteq/cryptography-with-practical-examples-in-net-core-1mc4


 