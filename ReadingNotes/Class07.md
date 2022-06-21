# CLASS 07 Bearer Authorization

*All notes taken from reading material*

## Introduction to JSON Web Tokens

1. What is a JSON Web Token (JWT)?

    JSON Web Token (JWT) is a compact, URL-safe means of representing
   claims to be transferred between two parties.  The claims in a JWT
   are encoded as a JSON object that is used as the payload of a JSON
   Web Signature (JWS) structure or as the plaintext of a JSON Web
   Encryption (JWE) structure, enabling the claims to be digitally
   signed or integrity protected with a Message Authentication Code
   (MAC) and/or encrypted.

   an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

2. When should we use JSON Web Tokens?

![img](/assets/401-imgs/JWT.png)

3. Claims are expected in which structural component of a JWT?

The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.

![img](/assets/401-imgs/claims.png)

## If you can decode JWT, how are they secure?

1. If I get a JWT and I can decode the payload, how can we call that secure?

* The short answer is that JWT doesn't concern itself with encryption. It cares about validation. That is to say, it can always get the answer for "Have the contents of this token been manipulated"? This means user manipulation of the JWT token is futile because the server will know and disregard the token. The server adds a signature based on the payload when issuing a token to the client. Later on it verifies the payload and matching signature.

2. If sending a JWT, what must sender and receiver both know? Hint, it’s appended in the signature.

* **the secret**

![img](/assets/401-imgs/secretjwt.png)

3. Explain how concatenated content and secret can be sent and received securely to a non-technical recruiter.

The token is created using a secret string that is stored on a server. Next, the server then sends that JWT back to the client which will store it either in a cookie or in local storage.

The user is authenticated and basically logged into our application without leaving any state on the server.

![img](/assets/401-imgs/secretstring.png)

## What is JWT ? JSON Web Token Explained - Video

1. Why use JWT?

* It is an Open Standard (RFC 7519) - It means that it's open source and anyone can use it.
* Securely transfer information between any two bodies.
* Digitally Signed - information is verified & trusted.

2. JWT is Compact and self-contained. Describe how this is useful to a non-technical friend.

* You can send it via URL, POST request, HTTP Header = *FAST Transmition*
* The JWT contains information about the user = *Avoids queriing the database more than once*

3. What are the three components (the structure) of a JWT signature?

    a. Header
        i. JSON Object
            * "alg" & "typ"
    b. Payload
        ii. JSON Object
            * Claims: User Details, additional metadata
    c. Signature
        iii. Secret
            * combo of the first two header & payload