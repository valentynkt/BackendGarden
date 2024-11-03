Date and Time: <u> 2023-10-25 20:46 </u>
Status: #LearningIT
Tags: [[Cryptography]], [[Cryptography Hashing]]

# Hash PBKDF2
**PBKDF2** ("Password-Based Key Derivation Function 2") is one of the recommended hash-functions for password-hashing.

PBKDF2 is a **Password-Based Key Derivation Function** in which a key is generated from the Password. The generated key can be used as an **encryption key** or as a **hash value that needs to be stored in the database.** Here, we are going to look at how PBKDF2 is being used as a hashing algorithm to hash passwords.

PBKDF2 is a modern hashing algorithm that is being used nowadays since it has a considerable computational cost which reduces the vulnerabilities of brute force attacks.

## Key Derivation Process

The PBKDF2 key derivation function has 5 input parameters.

`DK = PBKDF2(Password, Salt, PRF, c, dkLen)`

The output of the PBKDF2 function is the Derived Key. (In our case DK is the hashed value)

``` ad-important
1. **Password** - The master password from which the derived key is generated. (In our case, this is the password that needs to be hashed)
2. [[Cryptography Salt]] - Sequence of bits known as cryptographic salt.
3. **PRF** - Pseudo-Random Function is the basic building block of PBKDF2 in constructing the key derivation function.
> PBKDF2 applies the PRF many times to the password. This means that an attacker who tries to crack the password needs to apply the function many times.
4. **c:-** The number of iterations that need to be performed.
The choice of no.of iterations can be varied according to the environmental conditions. Iteration count can be increased to increase the security.
> Increasing the iteration count will not be a significant burden for legitimate parties, but it would be a significant burden for opponent parties.
5. **dkLen:-** Generated derived key bit length.
> The derived key (hashed value) length can be specified according to the requirements.
```

## Pseudo-Random Function (PRF)

- Informally, a pseudo-random function “looks like a random function”. But as it is calculated from the computer, then it cannot be truly random. But can be nearly random.
- HMAC-SHA-1 is the default pseudo-random function used in PBKDF2.
- But, Pseudo-Random Functions can be decided according to the requirements.
- Few examples of Pseudo-Random Function were HMAC-SHA-256, HMAC-SHA-512, etc.

## HMAC (Hash-based Message Authentication Code)
**Hash-based Message Authentication Code acts as the Pseudo-Random Function in PBKDF2.** HMAC is also a kind of hashing algorithm that has slight modifications. For example, HMAC-SHA1 is a kind of hashing algorithm that has SHA1 as the main hashing algorithm with slight modifications.

Similarly, HMAC-SHA256 and HMAC-SHA512 are also having SHA256 and SHA512 as the main hashing algorithm functioning respectively.

Most importantly, HMAC has a great resistance towards crypto attacks since it is using the hashing concept twice. So that, it is more secure than any other authentication code.

``` ad-note
Even though SHA1 is prone to length extension attacks, HMAC-SHA1 seems still secure because of the modifications it went through.
```
## C# Example

.NET's `Rfc2898DeriveBytes`-Class is based upon HMACSHA1
### Simple Example
``` csharp
 using System.Security.Cryptography;

    ...

    public const int SALT_SIZE = 24; // size in bytes
    public const int HASH_SIZE = 24; // size in bytes
    public const int ITERATIONS = 100000; // number of pbkdf2 iterations

    public static byte[] CreateHash(string input)
    {
        // Generate a salt
        RNGCryptoServiceProvider provider = new RNGCryptoServiceProvider();
        byte[] salt = new byte[SALT_SIZE];
        salt = provider.GetBytes(salt);

        // Generate the hash
        Rfc2898DeriveBytes pbkdf2 = new Rfc2898DeriveBytes(input, salt, ITERATIONS);
        return pbkdf2.GetBytes(HASH_SIZE);
    }
```
### Detailed Example
**Salted Password Hashing Solution using Pbkdf2**

``` csharp
using System;
using System.Linq;
using System.Security.Cryptography;

namespace YourCryptoNamespace
{

  public static class PasswordHashProvider
  {

    private const int SaltByteSize = 64;
    private const int HashByteSize = 64;
    private const int Pbkdf2Iterations = 10000;

    public static PasswordHashContainer CreateHash(string password)
    {
      // Generate a random salt
      using (var csprng = new RNGCryptoServiceProvider())
      {
        // create a unique salt for every password hash to prevent rainbow and dictionary based attacks
        var salt = new byte[SaltByteSize];
        csprng.GetBytes(salt);

        // Hash the password and encode the parameters
        var hash = Pbkdf2(password, salt, Pbkdf2Iterations, HashByteSize);

        return new PasswordHashContainer(hash, salt);
      }
    }
    /// <summary>
    /// Recreates a password hash based on the incoming password string and the stored salt
    /// </summary>
    public static byte[] CreateHash(string password, byte[] salt)
    {
      // Extract the parameters from the hash
      return Pbkdf2(password, salt, Pbkdf2Iterations, HashByteSize);
    }

    /// <summary>
    /// Validates a password given a hash of the correct one.
    /// </summary>
    public static bool ValidatePassword(string password, byte[] salt, byte[] correctHash)
    {
      // Extract the parameters from the hash
      byte[] testHash = Pbkdf2(password, salt, Pbkdf2Iterations, HashByteSize);
      return CompareHashes(correctHash, testHash);
    }
    /// <summary>
    /// Compares two byte arrays (hashes)
    /// </summary>
    public static bool CompareHashes(byte[] array1, byte[] array2)
    {
      if (array1.Length != array2.Length) return false;
      return !array1.Where((t, i) => t != array2[i]).Any();
    }
  
    /// <summary>
    /// Computes the PBKDF2-SHA1 hash of a password.
    /// </summary>
    private static byte[] Pbkdf2(string password, byte[] salt, int iterations, int outputBytes)
    {
      using (var pbkdf2 = new Rfc2898DeriveBytes(password, salt))
      {
        pbkdf2.IterationCount = iterations;
        return pbkdf2.GetBytes(outputBytes);
      }
    }
  }

  /// <summary>
  /// Container for password hash and salt and iterations.
  /// </summary>
  public sealed class PasswordHashContainer
  {
    public byte[] HashedPassword { get; private set; }

    public byte[] Salt { get; private set; }

    public PasswordHashContainer(byte[] hashedPassword, byte[] salt)
    {
      this.HashedPassword = hashedPassword;
      this.Salt = salt;
    }
  }

  /// <summary>
  /// Convenience methods for converting between hex strings and byte array.
  /// </summary>
  public static class ByteConverter
  {
    /// <summary>
    /// Converts the hex representation string to an array of bytes
    /// </summary>
    /// <param name="hexedString">The hexed string.</param>
    /// <returns></returns>
    public static byte[] GetHexBytes(string hexedString)
    {
      var bytes = new byte[hexedString.Length / 2];
      for (var i = 0; i < bytes.Length; i++)
      {
        var strPos = i * 2;
        var chars = hexedString.Substring(strPos, 2);
        bytes[i] = Convert.ToByte(chars, 16);
      }
      return bytes;
    }
    /// <summary>
    /// Gets a hex string representation of the byte array passed in.
    /// </summary>
    /// <param name="bytes">The bytes.</param>
    public static string GetHexString(byte[] bytes)
    {
      return BitConverter.ToString(bytes).Replace("-", "").ToUpper();
    }
  }
}
```

# Reference:
https://nishothan-17.medium.com/pbkdf2-hashing-algorithm-841d5cc9178d