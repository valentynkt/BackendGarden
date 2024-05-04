---
created: 2024-05-04 19:42
aliases:
  - JWT
  - Json Web Tokens (JWT)
tags:
  - LearningIT
  - seed🌱
links:
---

link: [[API]]

# Json Web Tokens

## 
JSON Web Token (JWT) is an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the **HMAC** algorithm) or a public/private key pair using **RSA** or **ECDSA**.
## JWT Components

JWTs have three main components: signature, payload, and header. Each is distinguished from the other via dot (.), and will adopt the following format.  

**JWT Header**

The information featured in the header outlines the algorithm utilized to create the signature. The decoded form of the header should look like:  

``` json
{
 “alg”: “HS256”,
 “typ”: “JWT”
}
```

Please note that HS256 is the hashing algorithm HMAC SHA-256 employed to produce the signature in the example above.

---
**JWT Payload**

All JWT authentication claims are retained here. Claims are employed to authenticate the party that receives the token. For instance, a server may set a claim that says `isAdmin: true` and give it to an administrator once they manage to log into the application. The administrative user is now able to use this token in all consequent requests they send to a server to verify their identity. 

The decoded form of the payload see in the JWT example is as follows:  

``` json
{
 “sub”: “1234567890”,
 “name”: “Jill Smith”,
 “iat”: 1516239022
}
```

The “name” field is employed to identify the individual to whom the token was given to. The “sub” and “iat” are instances of registered claims and are shortened forms of “subject” and “issued at”.

## JWT Components

In its compact form, JSON Web Tokens consist of three parts separated by dots (`.`), which are:

- Header
- Payload
- Signature

Therefore, a JWT typically looks like the following.

`xxxxx.yyyyy.zzzzz`
### Header

The header _typically_ consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.

For example:

```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

Then, this JSON is **Base64Url** encoded to form the first part of the JWT.
### Payload
The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: _registered_, _public_, and _private_ claims.

- [**Registered claims**](https://tools.ietf.org/html/rfc7519#section-4.1): These are a set of predefined claims which are not mandatory but recommended, to provide a set of useful, interoperable claims. Some of them are: **iss** (issuer), **exp** (expiration time), **sub** (subject), **aud** (audience), and [others](https://tools.ietf.org/html/rfc7519#section-4.1). 
- [**Public claims**](https://tools.ietf.org/html/rfc7519#section-4.2): These can be defined at will by those using JWTs. But to avoid collisions they should be defined in the [IANA JSON Web Token Registry](https://www.iana.org/assignments/jwt/jwt.xhtml) or be defined as a URI that contains a collision resistant namespace.
- [**Private claims**](https://tools.ietf.org/html/rfc7519#section-4.3): These are the custom claims created to share information between parties that agree on using them and are neither _registered_ or _public_ claims.

An example payload could be:

``` json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

The payload is then **Base64Url** encoded to form the second part of the JSON Web Token.

> Do note that for signed tokens this information, though protected against tampering, is readable by anyone. Do not put secret information in the payload or header elements of a JWT unless it is encrypted.

### Signature

To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

For example if you want to use the HMAC SHA256 algorithm, the signature will be created in the following way:

``` csharp
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.
### Components together
The output is three Base64-URL strings separated by dots that can be easily passed in HTML and HTTP environments, while being more compact when compared to [[XML]]-based standards such as SAML.

The following shows a JWT that has the previous header and payload encoded, and it is signed with a secret.
![[Pasted image 20231020162209.png]]
If you want to play with JWT and put these concepts into practice, you can use [jwt.io Debugger](https://jwt.io/#debugger-io) to decode, verify, and generate JWTs.
![[Pasted image 20231020162220.png]]
## How JWT works

In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.

You also [should not store sensitive session data in browser storage due to lack of security](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#local-storage).

Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the **Authorization** header using the **Bearer** schema. The content of the header should look like the following:

`Authorization: Bearer <token>`

This can be, in certain cases, a stateless authorization mechanism. The server's protected routes will check for a valid JWT in the `Authorization` header, and if it's present, the user will be allowed to access protected resources. If the JWT contains the necessary data, the need to query the database for certain operations may be reduced, though this may not always be the case.

If the token is sent in the `Authorization` header, Cross-Origin Resource Sharing (CORS) won't be an issue as it doesn't use cookies.

``` ad-important
The following diagram shows how a JWT is obtained and used to access APIs or resources:
![[Pasted image 20231020170252.png]]

1. The application or client requests authorization to the authorization server. This is performed through one of the different authorization flows. For example, a typical [[OpenID Connect]] compliant web application will go through the `/oauth/authorize` endpoint using the [[OpenID Connect#Authorization Code Flow Steps]] .
2.  When the authorization is granted, the authorization server returns an access token to the application.
3. The application uses the access token to access a protected resource (like an API).
```
 
> With signed tokens, all the information contained within the token is exposed to users or other parties, even though they are unable to change it. This means you should not put secret information within the token.


## [[JWT in .NET Core]]

# Reference:
https://jwt.io/introduction