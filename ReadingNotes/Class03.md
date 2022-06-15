# Class 03 

*All notes taken from reading material*

## Review: ES6 Classes

1. Classes are a template for creating ____.

    > **OBJECTS**

2. Can a class declaration be hoisted?

    > while the class is hoisted its values are not initialized... So Short answer is 'no'.

An important difference between function declarations and class declarations is that while functions can be called in code that appears before they are defined, classes must be defined before they can be constructed.

3. How would you describe a constructor and contextual “this” to a non-technical friend?

- The constructor method is a special method for creating and initializing an object created with a class.
![img](/assets/401/Screen%20Shot%202022-06-14%20at%207.59.40%20PM.png)

## Using Express Routing

1. Within Express, what does routing refer to?

> Routing refers to how an application’s endpoints (URIs) respond to client requests.

2. What is the difference between a route path and a route method?

- A **route method** is derived from one of the HTTP methods, and is attached to an instance of the express class.

![img](/assets/401/routemethod.png)

- **Route paths,** in combination with a request method, define the endpoints at which requests can be made. Route paths can be strings, string patterns, or regular expressions.

![img](/assets/401/constructor.png)

3. When is it appropriate to add next as a parameter to a route handler and what must you do if next has been passed to your middleware as a parameter?

- You can provide multiple callback functions that behave like middleware to handle a request. 
    * The only exception is that these callbacks might invoke **next('route')** to bypass the remaining route callbacks.
        - You can use this mechanism to impose pre-conditions on a route, then pass control to subsequent routes if there’s no reason to proceed with the current route.

![img](/assets/401/next().png)

## Express Routing

1. What is an Express Router?

- Router is like a mini-Express application. It doesn’t bring in views or settings but provides us with the routing APIs like .use, .get, .param, and route.

2. By what mean do we initialize express.Router() in an express server?

* We will call an instance of the express.Router(), apply routes to it, and then tell our application to use those routes.

3. What do we use route middleware for?

> Route middleware in Express is a way to do something before a request is processed. This could be things like checking if a user is authenticated, logging data for analytics, or anything else we’d like to do before we actually spit out information to our user.