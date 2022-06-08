# Class 01

*All notes are taken from reading material*

## An Introduction to Node.js - JavaScript - What Is Node and When Should I Use It?

### What Is Node.js?

> Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine. -Node.js

> Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google’s V8 JavaScript engine and libuv library. -Stack Overflow ... ¿huh lol?

> Node Is Built on Google Chrome’s V8 JavaScript Engine
    - The V8 engine is the open-source JavaScript engine that runs in Google Chrome and other Chromium-based web browsers, including Brave, Opera, and Vivaldi. It was designed with performance in mind and is responsible for compiling JavaScript directly to native machine code that your computer can execute.

    - This means that Node.js is a program we can use to execute JavaScript on our computers. In other words, it’s a JavaScript runtime.

### How Do I Install Node.js?

*Node Binaries vs Version Manager*
>  I would suggest that you use a version manager instead. This is a program that allows you to install multiple versions of Node and switch between them at will. There are various advantages to using a version manager. For example, it negates potential permission issues when using Node with npm and lets you set a Node version on a per-project basis.

**“Hello, World!” the Node.js Way**
![hello, world via Node.js in terminal](/assets/helloWorld-NodeJS.png)

**Node.js Has Excellent Support for Modern JavaScript**
> You can write your JavaScript using the latest and most modern syntax. It also means that you don’t generally have to worry about compatibility issues — as you would if you were writing JavaScript that would run in different browsers.
![inputing a function into terminal via node](/assets/BrendanEich.png)

*Fun Fact: In addition to being the package manager for JavaScript, npm is also the world’s largest software registry. There are over 1,000,000 packages of JavaScript code available to download, with billions of downloads per week.*

![test.js](/assets/test123.png)

### What Is Node.js Used For?

> They can be used for anything from bundling your JavaScript files and dependencies into static assets, to running tests, or automatic code linting and style checking.

>> Here's a fun list- 
    - [A beginners guide to webpack](https://www.sitepoint.com/webpack-beginner-guide/)
    - [Up and Running with ESLint -  the Pluggable JavaScript Linter](https://www.sitepoint.com/up-and-running-with-eslint-the-pluggable-javascript-linter/)
    - [An Intro to Gulp.js](https://www.sitepoint.com/introduction-gulp-js/)
    - [Unit Test Your JavaScript Using Mocha and Chai](https://www.sitepoint.com/unit-test-javascript-mocha-chai/)

> *And if you want to start developing apps with any modern JavaScript framework (for example, React or Angular), you’ll be expected to have a working knowledge of Node and npm (or maybe Yarn). This isn’t because you need a Node back end to run these frameworks. You don’t. Rather, it’s because these frameworks (and many, many related packages) are all available via npm and rely on Node to create a sensible development environment in which they can run.*

### Node.js Lets Us Run JavaScript on the Server

> One of the biggest use cases for Node.js — running JavaScript on the server.

**The Node.js Execution Model**

> In very simplistic terms, when you connect to a traditional server, such as Apache, it will spawn a new thread to handle the request. In a language such as PHP or Ruby, any subsequent I/O operations (for example, interacting with a database) block the execution of your code until the operation has completed. That is, the server has to wait for the database lookup to complete before it can move on to processing the result. If new requests come in while this is happening, the server will spawn new threads to deal with them. This is potentially inefficient, as a large number of threads can cause a system to become sluggish — and, in the worst case, for the site to go down. The most common way to support more connections is to add more servers.

- Node.js, however, is single-threaded. It’s also **event-driven**, which means that everything that happens in Node is in reaction to an event. 

    - For example, when a new request comes in (one kind of event) the server will start processing it. If it then encounters a blocking I/O operation, instead of waiting for this to complete, it will register a callback before continuing to process the next event. When the I/O operation has finished (another kind of event), the server will execute the callback and continue working on the original request. Under the hood, Node uses the libuv library to implement this asynchronous (that is, non-blocking) behavior.

*The following image depict Node's execution model:
![The following image depicts Node’s execution model:](/assets/nodeExecutionModel.png)

*The fact that Node runs in a single thread does impose some limitations. For example, blocking I/O calls should be avoided, CPU-intensive operations should be handed off to a worker thread, and errors should always be handled correctly for fear of crashing the entire process.*

![localhost:3000](/assets/localhost%3A3000.png)
> We start by requiring Node’s native HTTP module. We then use its createServer method to create a new web server object, to which we pass an anonymous function. This function will be invoked for every new connection that’s made to the server.

> The anonymous function is called with two arguments (request and response). These contain the request from the user and the response, which we use to send back a 200 HTTP status code, along with our “Hello World!” message.

> Finally, we tell the server to listen for incoming requests on port 3000, and output a message to the terminal to let us know it’s running.

### What Kind of Apps Is Node.js Suited To?

- Node is particularly suited to building applications that require some form of real-time interaction or collaboration — for example, chat sites, or apps such as CodeShare, where you can watch a document being edited live by someone else. It’s also a good fit for building APIs where you’re handling lots of requests that are I/O driven (such as those needing to perform operations on a database), or for sites involving data streaming, as Node makes it possible to process files while they’re still being uploaded. If this real-time aspect of Node is something you’d like to look into more, check out our tutorial on Building a Real-time Chat App.

> there’s no reason that you can’t use Node to build a simple CRUD app. However, if you follow this route, you’ll soon find out that Node is pretty bare-bones 

### What Are the Advantages of Node.js?

> Aside from speed and scalability, an often-touted advantage of using JavaScript on a web server — as well as in the browser — is that your brain no longer needs to switch modes. You can do everything in the same language, which, as a developer, makes you more productive (and hopefully, happier). For example, you can easily share code between the server and the client.

> Another of Node’s big pluses is that it speaks JSON. JSON is probably the most important data exchange format on the Web, and the lingua franca for interacting with object databases (such as MongoDB). JSON is ideally suited for consumption by a JavaScript program, meaning that when you’re working with Node, data can flow neatly between layers without the need for reformatting. You can have one syntax from browser to server to database.

> Finally, JavaScript is ubiquitous: most of us are familiar with JavaScript, or have used it at some point. This means that transitioning to Node development is potentially easier than to other server-side languages. 

### Other Uses of Node

> It can be used as a scripting language to automate repetitive or error prone tasks on your PC.

> It can also be used to write your own command line tool, such as this Yeoman-Style generator to scaffold out new projects.

> Node.js can also can be used to build cross-platform desktop apps.

> Even create your own robots. 

1. How would you describe Node to a non-technical friend?
    - This means that Node.js is a program we can use to execute JavaScript on our computers. In other words, it’s a JavaScript runtime.

2. What does it mean that Node is a JavaScript runtime?
    - Node.js is an event-based, non-blocking, asynchronous I/O

3. What is Node used for?
    - A ton of stuff, from automation, to bundling your JavaScript files and dependencies, to running tests, and style checking. 

