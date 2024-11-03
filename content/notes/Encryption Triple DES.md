Date and Time: <u> 2023-10-27 19:12 </u>
Status: #LearningIT
Tags: [[Cryptography]], [[Cryptography Encryption]], [[Encryption Block Cipher]], [[Feistel Cipher]], [[Encryption DES]]


# Encryption Triple DES
Triple DES is a encryption technique which uses three instance of [[Encryption DES|DES]] on same plain text. It uses there different types of key choosing technique in first all used keys are different and in second two keys are same and one is different and in third all keys are same.


Triple DES is also vulnerable to meet-in-the middle attack because of which it give total security level of 2^112 instead of using 168 bit of key. The block collision attack can also be done because of short block size and using same key to encrypt large size of text. It is also vulnerable to sweet32 attack.

The encryption-decryption process is as follows −

- Encrypt the plaintext blocks using single DES with key K1.
- Now decrypt the output of step 1 using single DES with key K2.
- Finally, encrypt the output of step 2 using single DES with key K3.
- The output of step 3 is the ciphertext.
- Decryption of a ciphertext is a reverse process. User first decrypt using K3, then encrypt with K2, and finally decrypt with K1.
## Image Flow
![[Pasted image 20231027191741.png]]
![[Pasted image 20231027191540.png]]

![[Pasted image 20231027191315.png]]

## C# Example
Triple DES functionality using C#

``` csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace TripleDES
{
   public class ClsTripleDES
   {

      private const string mysecurityKey = "MyTestSampleKey";

      public static string Encrypt(string TextToEncrypt)
      {
         byte[] MyEncryptedArray = UTF8Encoding.UTF8
            .GetBytes(TextToEncrypt);

         MD5CryptoServiceProvider MyMD5CryptoService = new
            MD5CryptoServiceProvider();

         byte[] MysecurityKeyArray = MyMD5CryptoService.ComputeHash
            (UTF8Encoding.UTF8.GetBytes(mysecurityKey));

         MyMD5CryptoService.Clear();

         var MyTripleDESCryptoService = new
            TripleDESCryptoServiceProvider();

         MyTripleDESCryptoService.Key = MysecurityKeyArray;

         MyTripleDESCryptoService.Mode = CipherMode.ECB;

         MyTripleDESCryptoService.Padding = PaddingMode.PKCS7;

         var MyCrytpoTransform = MyTripleDESCryptoService
            .CreateEncryptor();

         byte[] MyresultArray = MyCrytpoTransform
            .TransformFinalBlock(MyEncryptedArray, 0,
            MyEncryptedArray.Length);

         MyTripleDESCryptoService.Clear();

         return Convert.ToBase64String(MyresultArray, 0,
            MyresultArray.Length);
      }



      public static string Decrypt(string TextToDecrypt)
      {
         byte[] MyDecryptArray = Convert.FromBase64String
            (TextToDecrypt);

         MD5CryptoServiceProvider MyMD5CryptoService = new
            MD5CryptoServiceProvider();

         byte[] MysecurityKeyArray = MyMD5CryptoService.ComputeHash
            (UTF8Encoding.UTF8.GetBytes(mysecurityKey));

         MyMD5CryptoService.Clear();

         var MyTripleDESCryptoService = new
            TripleDESCryptoServiceProvider();

         MyTripleDESCryptoService.Key = MysecurityKeyArray;

         MyTripleDESCryptoService.Mode = CipherMode.ECB;

         MyTripleDESCryptoService.Padding = PaddingMode.PKCS7;

         var MyCrytpoTransform = MyTripleDESCryptoService
            .CreateDecryptor();

         byte[] MyresultArray = MyCrytpoTransform
            .TransformFinalBlock(MyDecryptArray, 0,
            MyDecryptArray.Length);

         MyTripleDESCryptoService.Clear();

         return UTF8Encoding.UTF8.GetString(MyresultArray);
      }
   }
}
```

In the Main() method we will have the following code:
``` csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TripleDES
{
   class Program
   {
      static void Main(string[] args)
      {
         var text = "My Sample Text to Test DES from C#";
         var encryptedText = ClsTripleDES.Encrypt(text);
         var decryptedText = ClsTripleDES.Decrypt(encryptedText);
         Console.WriteLine("Before Encryption Text = " + text);
         Console.WriteLine("After Encryption Text = " +
            encryptedText);
         Console.WriteLine("After Decryption Text = " +
            decryptedText);
         Console.ReadLine();
      }
   }
}
```
# Reference:
https://www.geeksforgeeks.org/double-des-and-triple-des/

C# code example - https://www.codeguru.com/csharp/triple-des-encryption-and-decryption-in-c/


 