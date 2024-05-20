---
created: 2024-05-20 14:48
aliases:
  - Salt
  - Salting
tags:
  - LearningIT
  - seed🌱
links:
---

link:

# Cryptography Salt



Date and Time: <u> 2023-10-25 20:31 </u>
Status: #LearningIT
Tags: [[Cryptography]], [[Cryptography Hashing]]

# Salt
A **salt** is random data fed as an additional input to a one-way function that hashes data, a password or passphrase. Salting helps defend against attacks that use precomputed tables (e.g. [rainbow tables](https://en.wikipedia.org/wiki/Rainbow_tables "Rainbow tables")), by vastly growing the size of table needed for a successful attack. It also helps protect passwords that occur multiple times in a database, as a new salt is used for each password instance.

Without a salt, identical passwords will map to identical hash values, which could make it easier for a hacker to guess the passwords from their hash value.

|Username|String to be hashed|Hashed value = [[#SHA256]] |
|---|---|---|
|`user1`|`**password123**`|`57DB1253B68B6802B59A969F750FA32B60CB5CC8A3CB19B87DAC28F541DC4E2A`|
|`user2`|`**password123**`|`57DB1253B68B6802B59A969F750FA32B60CB5CC8A3CB19B87DAC28F541DC4E2A`|

Instead, a salt is generated and appended to each password, which causes the resultant hash to output different values for the same original password.

|Username|Salt value|String to be hashed|Hashed value = [[#SHA256]] (Password + Salt value)|
|---|---|---|---|
|`user1`|`D;%yL9TS:5PalS/d`|`**password123**D;%yL9TS:5PalS/d`|`9C9B913EB1B6254F4737CE947EFD16F16E916F9D6EE5C1102A2002E48D4C88BD`|
|`user2`|`)<,-<U(jLezy4j>*`|`**password123**)<,-<U(jLezy4j>*`|`6058B4EB46BD6487298B59440EC8E70EAE482239FF2B4E7CA69950DFBD5532F2`|

The salt and hash are then stored in the database. To later test if a password a user enters is correct, the same process can be performed on it (appending that user's salt to the password and calculating the resultant hash): if the result doesn't match the stored hash, it could not have been the correct password that was entered.

In practice, a salt is usually generated using existing data such as a user's ID. If a completely random salt is created instead, it is stored in the hash (such as by prepending it, appending it, replacing every nth character with it, or so on) so the system can later recover it.

 