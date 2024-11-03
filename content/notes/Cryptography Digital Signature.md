Date and Time: <u> 2023-10-26 16:22 </u>
Status: #LearningIT
Tags: [[Cryptography]], [[Cryptography Encryption]], [[Encryption RSA]]

# Cryptography Digital Signature
## Intro

A digital signature is a mathematical technique used to validate the authenticity and integrity of a message, software or digital document. It is the digital equivalent of a handwritten signature or stamped seal.

Based on asymmetric cryptography, [digital signatures can provide](https://www.techtarget.com/searchsecurity/answer/Which-private-keys-and-public-keys-can-create-a-digital-signature) assurances of evidence to the origin, identity and status of an electronic document, transaction or message, as well as acknowledge informed consent by the signer.

With a digital signature, we can prove the integrity of a message, and also the identity of the sender. In this, Bob will take a hash of the message, and then create a signature with his private key. He then sends this signature with the message, and Alice will check the signature with his public key. It is important that we can trust Bob’s public key, so we typically sign it with the private key of Trent, of which Alice will check the signature of Trent for the validity of Bob’s public key.

![[Pasted image 20231028014527.png]]

The hashing method must be the same for Bob and Alice, and will typically be [[Hash MD5|MD5]] (128-bit) [[Hash SHA1|SHA-1]] (160-bit), [[Hash SHA-256|SHA-256]] (256-bit) or SHA3_256 (256-bit). These days, MD5 and SHA-1 are seen as being insecure, so we would typically use [[Hash SHA-256|SHA-256]](or another hash with 256 bits or more).

For the keys, in [[Encryption RSA|RSA]], we start with Bob generating two prime numbers (p and q), and then computing a modulus (N). The difficulty of RSA is that it is extremely difficult to factorize N back into its factors. Next, we pick the public exponent (e — typically we use the value of 65,537) and then compute PHI which is (p-1)(q-1). Finally, we compute the private exponent (d) with the inverse of e (mod PHI):
![[Pasted image 20231028014809.png]]
Normally, in RSA public key encryption, we would encrypt with e and decrypt with d, but in signing, we sign with d and verify with e. The public key is (e,N), and the private key is (d,N). To perform a signature, we need:
![[Pasted image 20231028014903.png]]
and to check:
![[Pasted image 20231028014913.png]]
if check is equal to H(M), we have a valid signature.

![[Pasted image 20231028015325.png]]
# Reference:
https://medium.com/asecuritysite-when-bob-met-alice/everything-you-ever-wanted-to-know-about-rsa-signatures-but-were-afraid-to-ask-8b04cdd2d038


 