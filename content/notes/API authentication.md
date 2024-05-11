Date and Time: <u> 2023-10-19 20:22 </u>
Status: #LearningIT
Tags: [[API]], [[Authentication and Authorization]]

# API authentication
## Intro

API authentication is the process of verifying the identity of a user who is making an API request, and it is a crucial pillar of [[API Security]]. There are many types of API authentication, such as HTTP basic authentication, API key authentication, [[Json Web Tokens|JWT]], and OAuth, and each one has its own benefits, trade-offs, and ideal use cases. Nevertheless, all API authentication mechanisms share the goal of protecting sensitive data and ensuring the API is not misused.

## Types of API authentication
There are many API authentication mechanisms, and each one operates differently. These four methods are among the most common:

### HTTP basic authentication
![[Pasted image 20231019204132.png]]
HTTP basic authentication is the most rudimentary way to implement API authentication. It involves sending credentials as user/password pairs in an `Authorization` header field, where the credentials are encoded using Base64. However, these credentials are not hashed or encrypted, which makes this authentication mechanism insecure unless it is used in conjunction with HTTPS.

### API key authentication
![[Pasted image 20231019204219.png]]
An [API key](https://www.postman.com/api-glossary/#api-key) is a unique identifier that an API provider issues to registered users in order to control usage and monitor access. The API key must be sent with every request—either in the query string, as a request header, or as a cookie. Like HTTP basic authentication, API key authentication must be used with HTTPS to ensure the API key remains secure.
### [[Json Web Tokens]]
![[Pasted image 20231019204318.png]]
[[Json Web Tokens|JWT]], which stands for JSON Web Token, is a compact, stateless mechanism for API authentication. When a user logs into an application, the API server creates a digitally signed and encrypted [[Json Web Tokens|JWT]] that includes the user's identity. The client then includes the [[Json Web Tokens|JWT]] in every subsequent request, which the server deserializes and validates. The user's data is therefore not stored on the server's side, which improves scalability.

### [[OAuth 2.0]]
![[Pasted image 20231019204643.png]]
OAuth is a token-based authentication mechanism that enables a user to grant third-party access to their account without having to share their login credentials. OAuth 2.0, which provides greater flexibility and scalability than OAuth 1.0, has become the gold standard for API authentication, and it supports extensive [API integration](https://www.postman.com/api-platform/api-integration/) without putting user data at risk.
# Reference:
https://www.postman.com/api-platform/api-authentication/


 