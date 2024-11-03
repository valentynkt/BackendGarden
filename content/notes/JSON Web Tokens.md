---
created: 2024-05-04 19:42
aliases:
  - JWT
  - Json Web Tokens (JWT)
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[API]], [[Web Tokens|Token-Based Authentication]]

# JWT (JSON Web Token)

## Diagram
![[Pasted image 20231019204318.png]]

## Overview

JSON Web Token (JWT) is an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) for securely transmitting information between parties as a [[JSON]] object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using [[Encryption RSA|RSA]] or ECDSA.


> [!important] 
> JWTs offer a more robust solution to [[Web Tokens|Token-Based Authentication]] by carrying additional information within the token itself.


## Structure of a JWT

A JWT is compact, URL-safe, and consists of three parts separated by dots (.):

1. **Header**
2. **Payload**
3. **Signature**

``` 
xxxxx.yyyyy.zzzzz
```


> [!summary] Header
> The header typically consists of two parts: the type of the token (which is JWT) and the signing algorithm being used, such as HMAC SHA256 or RSA.
> 
>``` json
> {
>   "alg": "HS256",
>   "typ": "JWT"
> }
>```
> 
> This [[JSON]] is then Base64Url encoded to form the first part of the JWT.


> [!summary] Payload
> The payload contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.
> 
> - **Registered claims**: Predefined claims which are not mandatory but recommended, to provide a set of useful, interoperable claims. Some examples are `iss` (issuer), `exp` (expiration time), `sub` (subject), and `aud` (audience).
> - **Public claims**: These can be defined at will by those using JWTs, but to avoid collisions, they should be defined in the IANA JSON Web Token Registry or be namespaced.
> - **Private claims**: Custom claims created to share information between parties that agree on using them.
> 
> Example payload:
> 
> ``` json
> {
>   "sub": "1234567890",
>   "name": "John Doe",
>   "admin": true,
>   "iat": 1516239022
> }
> ```
> 
> This JSON is then Base64Url encoded to form the second part of the JWT.


> [!summary] Signature
> 
> To create the signature part, you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.
> 
> For example, if you want to use the HMAC SHA256 algorithm, the signature will be created in the following way:
> 
> ```  csharp
> HMACSHA256(
>   base64UrlEncode(header) + "." +
>   base64UrlEncode(payload),
>   secret)
> ```
> 
> The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn’t changed along the way.
> 
> The output is three Base64-URL strings separated by dots that can be easily passed in HTML and HTTP environments, such as in an HTTP header.

If you want to play with JWT and put these concepts into practice, you can use [jwt.io Debugger](https://jwt.io/#debugger-io) to decode, verify, and generate JWTs.
![[Pasted image 20231020162220.png]]
## How JWT Works
![[5158d9c4-4f52-4a68-8953-6c4524b749bf_1600x868.webp]]

> [!important] 
> With signed tokens, all the information contained within the token is exposed to users or other parties, even though they are unable to change it. This means you **should not put secret information** within the token.


> [!summary]- Simple
> 1. **Authentication**: When the user logs in using their credentials, a JWT is created by the server and returned to the client.
> 2. **Storage**: The client stores the JWT (typically in local storage or a cookie).
> 3. **Authorization**: Each time the client requests a protected resource, the JWT is sent along with the request (usually in the Authorization header using the Bearer schema).
> 4. **Verification**: The server verifies the token’s signature and extracts the claims.
> 5. **Access Control**: Based on the claims, the server allows or denies the requested operation.


> [!summary]- Detailed Flow
> 1. **[[Authentication]]**
>     - When the user logs in using their credentials, the server authenticates the user against a user store (like a database).
>     - Upon successful authentication, the server creates a JWT with relevant claims (e.g., user ID, roles, expiration time).
>     - The JWT is then signed using the server's private key or secret and returned to the client.
> 
> 2. **Storage**
>     - The client stores the JWT. Common storage options include:
>         - **[[Web Local Storage|Local Storage]]**: Provides persistence across sessions but is vulnerable to XSS attacks.
>         - **[[Web Session Storage|Session Storage]]**: Limited to the session and safer from XSS, but the token is lost when the browser tab is closed.
>         - **[[Web Cookies|Cookies]]**: Can be made HttpOnly and Secure to mitigate XSS and CSRF attacks.
> 
> 3. **[[Authorization]]**
>     - For each subsequent request to a protected resource, the client includes the JWT in the Authorization header using the Bearer schema:
> ``` http
>     Authorization: Bearer <token>
> ```
> 
> 4. **Verification**
>     - The server receives the request and extracts the JWT from the Authorization header.
>     - The server verifies the token’s signature using the shared secret or public key to ensure its integrity and authenticity.
>     - The server also checks the token's claims, such as expiration (`exp`), issuer (`iss`), and audience (`aud`), to validate the token.
> 
> 5. **Access Control**
>     - Based on the claims in the JWT (e.g., user roles), the server determines if the user has the necessary permissions to access the requested resource.
>     - If the JWT is valid and the user is authorized, the server processes the request and returns the appropriate response.
> 
> 6. **Logout and Token Expiry**
>     - Upon logout, the client deletes the stored JWT.
>     - Tokens are typically short-lived to mitigate risks associated with token theft. Refresh tokens or re-authentication may be required to obtain new JWTs.

## Use Cases

- **[[Authentication]]**: JWTs are widely used for authentication in modern web applications. They can replace traditional session-based authentication, especially in stateless architectures.
- **Information Exchange**: JWTs can securely transmit information between parties, ensuring that the data can be verified and trusted.
- **Access Control**: JWTs can encode user roles and permissions, helping to manage access control in applications.

## [[JWT in .NET Core]]

## Conclusion

JWTs provide a secure, compact, and self-contained way to transmit information between parties. By incorporating JWTs, developers can create scalable, interoperable, and efficient authentication mechanisms for modern web applications. Understanding the structure, workings, and security implications of JWTs is crucial for effectively utilizing this powerful technology.


# Reference:

[JSON Web Token Introduction - jwt.io](https://jwt.io/introduction)