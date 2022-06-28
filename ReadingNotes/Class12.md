# Read: Class 12

## 

1. What is a Web Socket?

WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. 

2. Describe the Web Socket request/response handshake and what happens once the connection is established.

The handshake starts with an HTTP request/response, allowing servers to handle HTTP connections as well as WebSocket connections on the same port. Once the connection is established, communication switches to a bidirectional binary protocol which does not conform to the HTTP protocol.

3. Web Sockets provide a standardized way for the server to send content to a client without first receiving a -- **First Request** -- from that client.



## Socket.IO Tutorial

[LINK TO ASSET](https://www.tutorialspoint.com/socket.io/socket.io_event_handling.htm)

1. What does the event handler io.on() do?

![img](/assets/401-imgs/ioon.png)

2. Describe some possible proof of life or proof that the code works as expected

3. What does socket.emit() do?

## WebSocket vs Socket.io


1. What is the difference between WebSocket and Socket.IO? (think Git and GitHub, or OAuth and Auth0).

**WebSocket** is the communication Protocol that provides bidirectional communication between the Client and the Server over a TCP connection; WebSocket remains open all the time, so they allow real-time data transfer. When clients trigger the request to the server, it does not close the connection on receiving the response; it rather persists and waits for the Client or server to terminate the request.

*VS.*

**Socket.IO** is a library that enables real-time and full-duplex communication between the Client and the Web servers. It uses the WebSocket protocol to provide the interface. Generally, it is divided into two parts; both WebSocket vs Socket.io are event-driven libraries.

    - Client-Side: it is the library that runs inside the browser
    - Server Side: It is the library for Node.js

![img](/assets/401-imgs/socketcomp.png)

2. When would you use Socket.IO?

- To handle all the degradation of your technical alternatives to get full-duplex communication in real-time.

- It also handles the various support level and the inconsistencies from the browser.

- It also gives the additional feature room support for basic publish infrastructure and thinks like automatic reconnect.

- Currently, AFAIK is the most used one and easier to help with vanilla web sockets.

3. When would you use WebSockets?

- It provides full-duplex communication, which helps in persisting the connection established between the Client and the Web Server.

- It also lives up to the standards and provides the accuracy and efficiency stream events to and from with negligible latency.

- WebSocket removes the overhead and reduce complexity.

- It makes real-time communication effortless and efficient.

## OSI Model Explained | OSI Animation | Open System Interconnection Model | OSI 7 layers | TechTerms

1. What are a couple of key takeaways from this video?

    - OSI Model = Open System Interconnection Model
    - **THE MUSIC IS ROCKING**

![img](/assets/401-imgs/OSIMODEL.png)

*I'm linking this video to ref in the future*
[THIS IS THE LINK](https://www.youtube.com/watch?v=vv4y_uOneC0)

## TCP - Three-way handshake in details

1. Translate the gist of this video to a non-technical friend

    - Transmition Control Protocol
    - TCP is a reliable and connection- oriented transport protocol.
    - With TCP, data can be delivered successfully and accurateely.
    - Before TCP transmits data, it will use three-way handshake to establish a connection.
    - SYN/connect--> SYN ACK (sync aknowlagement) --> ACK 

![img](/assets/401-imgs/syn-ack.png)