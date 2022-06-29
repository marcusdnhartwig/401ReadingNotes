# CLASS 13 Read: Message Queues

*All notes taken from reading material*

## Socket.io Chat Example [link](https://socket.io/get-started/chat/)

1. Explain to a non-technical recruiter what the Chat Example (above) does.

- Sockets have traditionally been the solution around which most real-time chat systems are architected, providing a bi-directional communication channel between a client and a server.

    - This means that the server can push messages to clients. Whenever you write a chat message, the idea is that the server will get it and push it to all other connected clients.

2. What proof of life are we getting on the backend from the above app?

- If you run node index.js you should see the following: 'listening on *:3000' in your terminal

3. Socket.IO gives us the i0.emit() method to send an event to everyone. What flag would you use if you want to send a message to everyone except for a certain emitting socket?

- If you want to send a message to everyone except for a certain emitting socket, we have the broadcast flag for emitting from that socket:

> io.on('connection', (socket) => {

>  socket.broadcast.emit('hi');

> });

## Socket.io Rooms [link](https://socket.io/docs/v4/rooms)

1. What is a room and how might a room be useful?

- A room is an arbitrary channel that sockets can join and leave. It can be used to broadcast events to a subset of clients.

2. How do you join a room?

- You can call join to subscribe the socket to a given channel:

> io.on("connection", (socket) => {

> socket.join("some room");

> });

- And then simply use to or in (they are the same) when broadcasting or emitting:

> io.to("some room").emit("some event");

- You can emit to several rooms at the same time:

> io.to("room1").to("room2").to("room3").emit("some event");


3. how do you leave a room?

- To leave a channel you call leave in the same fashion as join.


## Socket.io Namespaces [link](https://socket.io/docs/v4/namespaces/)

1. What is a Namespace and what does it allow you to do?

- A Namespace is a communication channel that allows you to split the logic of your application over a single shared connection (also called "multiplexing").


2. Each namespace potentially has its own what? (hint: 3 things)

    - event handlers
    - rooms
    - middlewares

3. Discuss a possible use case for separate namespaces

- you want to create a special namespace that only authorized users have access to, so the logic related to those users is separated from the rest of the application.

- your application has multiple tenants so you want to dynamically create one namespace per tenant
