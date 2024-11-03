Date and Time: <u> 2023-10-28 02:14 </u>
Status: #LearningIT
Tags: [[Cryptography]], [[Cryptography Encryption]]


# Encryption EC (ECDHE)
``` ad-important
Second Name (ECDHE)
```
Unfortunately, unlike factoring — something we all had to do for the first time in middle school — most people aren't as familiar with the math around elliptic curves. The math isn't as simple, nor is explaining it, but I'm going to give it a go over the next few sections. (If your eyes start to glaze over, you can skip way down to the section: What does it all mean.)

An elliptic curve is the set of points that satisfy a specific mathematical equation. The equation for an elliptic curve looks something like this:

`y2 = x3 + ax + b`
![[Pasted image 20231028021609.png]]
Better Explaining with a lot of Math here - [this](https://blog.cloudflare.com/a-relatively-easy-to-understand-primer-on-elliptic-curve-cryptography/)
## Elliptic curves in action

After a slow start, elliptic curve based algorithms are gaining popularity and the pace of adoption is accelerating. Elliptic curve cryptography is now used in a wide variety of applications: the [U.S. government](http://www.certicom.com/index.php/news/6-press-rreleases/314-certicom-sells-licensing-rights-to-nsa) uses it to protect internal communications, the Tor project uses it to help [assure anonymity](https://gitweb.torproject.org/tor.git/blob_plain/release-0.2.4:/ReleaseNotes), it is the mechanism used to [prove ownership of bitcoins](https://en.bitcoin.it/wiki/Elliptic_Curve_Digital_Signature_Algorithm), it provides signatures in Apple's [iMessage service](http://blog.quarkslab.com/imessage-privacy.html), it is used to encrypt DNS information with [DNSCurve](https://en.wikipedia.org/wiki/DNSCurve), and it is the preferred method for authentication for secure web browsing over SSL/TLS. CloudFlare uses elliptic curve cryptography to provide [perfect forward secrecy](https://blog.cloudflare.com/staying-on-top-of-tls-attacks) which is essential for online privacy. First generation cryptographic algorithms like RSA and Diffie-Hellman are still the norm in most arenas, but elliptic curve cryptography is quickly becoming the go-to solution for privacy and security online.
# Reference:
https://blog.cloudflare.com/a-relatively-easy-to-understand-primer-on-elliptic-curve-cryptography/


 