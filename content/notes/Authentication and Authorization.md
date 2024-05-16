Date and Time: <u> 2023-10-16 02:55 </u>
Status: #LearningIT
Tags: 

# Authentication and Authorization
![[Pasted image 20231016025630.png]]

Let us see the difference between authentication and authorization:

|Authentication|Authorization|
|---|---|
|In the [authentication](https://www.geeksforgeeks.org/authentication-in-computer-network/) process, the identity of users are checked for providing the access to the system.|While in [authorization](https://www.geeksforgeeks.org/what-is-aaa-authentication-authorization-and-accounting/) process, a the person’s or user’s authorities are checked for accessing the resources.|
|In the authentication process, users or persons are verified.|While in this process, users or persons are validated.|
|It is done before the authorization process.|While this process is done after the authentication process.|
|It needs usually the user’s login details.|While it needs the user’s privilege or security levels.|
|Authentication determines whether the person is user or not.|While it determines **What permission does the user have?**|
|Generally, transmit information through an ID Token.|Generally, transmit information through an Access Token.|
|The OpenID Connect (OIDC) protocol is an authentication protocol that is generally in charge of user authentication process.|The OAuth 2.0 protocol governs the overall system of user authorization process.|
|Popular Authentication Techniques-<br><br>- Password-Based Authentication<br>- Passwordless Authentication<br>- 2FA/MFA (Two-Factor Authentication / Multi-Factor Authentication)<br>- [Single sign-on (SSO)](https://www.geeksforgeeks.org/introduction-of-single-sign-on-sso/)<br>- Social authentication|Popular  Authorization Techniques-<br><br>- Role-Based Access Controls (RBAC)<br>- [[JSON Web Tokens]] <br>- SAML Authorization<br>- OpenID Authorization<br>- [[OAuth 2.0]] 2.0|
|The authentication credentials can be changed in part as and when required by the user.|The authorization permissions cannot be changed by user as these are granted by the owner of the system and only he/she has the access to change it.|
|The user authentication is visible at user end.|The user authorization is not visible at the user end.|
|The user authentication is identified with username, password, face recognition, retina scan, fingerprints, etc.|The user authorization is carried out through the access rights to resources by using roles that have been pre-defined.|
|**Example**: Employees in a company are required to authenticate through the network before accessing their company email.|**Example:** After an employee successfully authenticates, the system determines what information the employees are allowed to access.|

# Reference:
https://www.geeksforgeeks.org/difference-between-authentication-and-authorization/