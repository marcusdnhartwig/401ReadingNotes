# Class 02

*All notes taken from reading material*

## An Introduction to NodeJS and Express

1. Explain middleware, answer as though I were a non-technical recruiter.

    - You can use Express middleware to add support for cookies, sessions, and users, getting POST/GET parameters, etc. You can use any database mechanism supported by Node 
    - Middleware is used extensively in Express apps, for tasks from serving static files to error handling, to compressing HTTP responses.
    - middleware functions typically perform some operation on the request or response and then call the next function in the "stack",
    - The order in which middleware is called is up to the app developer.
    - To use third party middleware you first need to install it into your app using NPM. 
    -The middleware can perform any operation, execute any code, make changes to the request and response object, and it can also end the request-response cycle.

2. Express the most popular __ __ ____.
    
    - NODE WEB FRAMEWORK

3. Express is “unopinionated.” What does that mean?

    - the way you pull these parts together and the libraries that you use are largely up to you!
    - have far fewer restrictions on the best way to glue components together to achieve a goal, or even what components should be used. They make it easier for developers to use the most suitable tools to complete a particular task, albeit at the cost that you need to find those components yourself.
    You can insert almost any compatible middleware you like into the request handling chain, in almost any order you like. You can structure the app in one file or multiple files, and using any directory structure. You may sometimes feel that you have too many choices!

4. What is a module and why is modularity useful to us as developers?

    - A module is a JavaScript library/file that you can import into other code using Node's require() function. 
    - Express itself is a module, as are the middleware and database libraries that we use in our Express applications.
    - You will want to create your own modules, because this allows you to organize your code into manageable parts — a monolithic single-file application is hard to understand and maintain. Using modules also helps you manage your namespace, because only the variables you explicitly export are imported when you use a module.

## What is NPM?

1. What version of npm are you running on your machine?

![image](/assets/preworkAssets/npmversion.png)

2. What command would you type to install a library/package called ‘jshint’ into your node project?
    
    - npm i jshint

## What is TDD?

1. Explain why tests are important. Please explain as though I were your non technical elder.

    - “Test-driven development” refers to a style of programming in which three activities are tightly interwoven:
        - Coding
        - Testing
        - Design

    - write a “single” unit test describing an aspect of the program.

    - run the test, which should fail because the program lacks that feature.

    - write “just enough” code, the simplest possible, to make the test pass

    - “refactor” the code until it conforms to the simplicity criteria

    - repeat, “accumulating” unit tests over time



2. What are three expected benefits of testing

    a. Many teams report significant reductions in defect rates, at the cost of a moderate increase in initial development effort.

    b. The same teams tend to report that these overheads are more than offset by a reduction in effort in projects’ final phases.

    c. Although empirical research has so far failed to confirm this, veteran practitioners report that TDD leads to improved design qualities in the code, and more generally a higher degree of “internal” or technical quality, for instance improving the metrics of cohesion and coupling.


3. Name at lest 2 individual pitfalls and at least 2 team pitfalls commonly encountered while writing tests.

**Individual Pitfalls**

- Forgetting to run tests frequently.

- Writing too many tests at once.

- Writing tests that are too large or coarse-grained.

**Team Pitfalls**

- Partial adoption – only a few developers on the team use TDD.

- Poor maintenance of the test suite – most commonly leading to a test suite with a prohibitively long running time.

- Abandoned test suite (i.e. seldom or never run) – sometimes as a result of poor maintenance, sometimes as a result of team turnover


## CI/CD

1. What are three benefits of Continuous Integration?

        - Ensures everyone's changes integrate
        - Reduces merge conflicts
        - CATCH BUGS

2. What is the difference between Continuos Delivery and Continuous Deployment?

*Continuous Delivery* = Develop to release at any time.

*Continuous Deployment* = Permits deployment of new features immediately. 

3. Explain how GitHub fits into this process assuming the listener comes from a non-technical background

- GitHub is the clearing house for code.
- **webhooks** sed messages to external systems about actibity in the projects.
- GitHub coppies, builds, and notifies the user so that you do not need to. 
