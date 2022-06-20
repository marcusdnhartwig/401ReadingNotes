# CLASS 06 Authentication

*All notes taken from reading material*

## Securing Passwords with Bcrypt Hashing Function

1. Explain to a non-technical friend how you would safely hash and store a password.

Cryptographic hash algorithms MD5, SHA1, SHA256, SHA512, SHA-3 are general purpose hash functions, designed to calculate a digest of huge amounts of data in as short a time as possible.

The benefit of hashing is that if someone steals the database with hashed passwords, they only make off with the hashes and not the actual plaintext passwords.

2. What is Bcrypt?

Bcrypt is an **adaptive hash function** based on the Blowfish symmetric block cipher cryptographic algorithm and introduces a work factor (also known as security factor), which allows you to determine how expensive the hash function will be.

3. Why might you use something like Bcrypt?

This work factor value determines how slow the hash function will be, means different work factor will generate different hash values in different time span, which makes it extremely resistant to brute force attacks. 

When computers become faster next year we can increase the work factor to balance it out i.e. to make the attack slower.

This method of hashing passwords is solid enough for most web applications that stores users' passwords and other sensitive data.

## Basic access authentication - WHOO WIKIPEDIA

1. What is Basic Authentication?

*Basic access authentication* is a method for an HTTP user agent (e.g. a web browser) to provide a user name and password when making a request. 

2. What properties are necessary in the header of a Basic Auth request?

The Authorization header field is constructed as follows:

    a. The username and password are combined with a single colon (:). This means that the username itself cannot contain a colon.
    b. The resulting string is encoded into an octet sequence. The character set to use for this encoding is by default unspecified, as long as it is compatible with US-ASCII, but the server may suggest use of UTF-8 by sending the charset parameter.
    c. The resulting string is encoded using a variant of Base64 (+/ and with padding).
    d. The authorization method and a space (e.g. "Basic ") is then prepended to the encoded string.

ALSO

The WWW-Authenticate header field for basic authentication is constructed as following:

*WWW-Authenticate: Basic realm="User Visible Realm"*

The server may choose to include the charset parameter from RFC 7617:

*WWW-Authenticate: Basic realm="User Visible Realm", charset="UTF-8"*


3. How are username:password in Basic Auth encoded?

 if the browser uses Aladdin as the username and open sesame as the password, then the field's value is the Base64 encoding of Aladdin:open sesame, or QWxhZGRpbjpvcGVuIHNlc2FtZQ==. Then the Authorization header field will appear as:

Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==

## Authentication Cheat Sheet¶

1. Define the authentication process to a non-technical recruiter.

Authentication is the process of verifying that an individual, entity or website is whom it claims to be. Authentication in the context of web applications is commonly performed by submitting a username or ID and one or more items of private information that only a given user should know.

2. How should your error messaging respond (both HTTP and HTML)? Why?

Incorrectly implemented error messages in the case of authentication functionality can be used for the purposes of user ID and password enumeration. 

An application should respond (both HTTP and HTML) in a **generic manner.**

The application may return a different HTTP Error code depending on the authentication attempt response. It may respond with a 200 for a positive result and a 403 for a negative result. Even though a generic error page is shown to a user, the HTTP response code may differ 

*The objective is to prevent the creation of a discrepancy factor, allowing an attacker to mount a user enumeration action against the application.*

3. Bookmark this link also and consider OWASP fundamentals any time you interact with authentication. Applications developed with security in mind from inception have fewer vulnerabilities throughout their lifecycle.

[BookmarkingLink](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)