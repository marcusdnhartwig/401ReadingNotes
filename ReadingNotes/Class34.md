# CLASS 34 API Integration

*All notes taken from reading material*

## (Review API Server Build)[https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/api-server/]

1. Explain the different between a query string parameter and a path parameter.

**The path parameter defines the resource location, while the query parameter defines sort, pagination, or filter operations.** The user's input (the query) is passed as a variable in the query parameter, while each path parameter must be substituted with an actual value when the client makes an API call. *(Google)*

2. What would our API URL with a path id parameter be given the following information:

  * Domain: http://our-site.com **––>** Support all REST/HTTP methods

  * v3 **––>** where # is the version number of our API

  * model name: stuff **––>** /model where ‘model’ is the name of the data model to operate on

  * id: things **––>** where ‘id’ is the id number of a specific entity in the data model

3. We have created a dynamic API with an “interface”. Describe how that interface works to a non-technical friend.

*provides category and product information to our front end app.*

## (Review Auth Server Build)[https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/auth-server/]

1. Describe how you would use middleware to implement basic and bearer auth.

**Basic** Basic (username + password) to be used on the /signin route only

  * i.e. app.post('/signin', basicAuthentication, (req, res) => { ... })

**OAuth** OAuth (3rd Party) to be used on the /oauth route only

  * *i.e. app.get('/oauth', OAuth, (req, res) => { ... })*

  * Handles the handshake process from a 3rd party OAuth system

**Bear** Bearer (token) to be used on any other route in the server that requires a logged in user

  * i.e. app.get('/secretstuff', tokenAuthentication, (req, res) => { ... })


2. Describe the handshake necessary to implement OAuth.

**SEE ABOVE**

3. Describe how Role Based Access Control works to a non-technical friend.

Role-based access control (RBAC) is a method of restricting network access based on the roles of individual users within an enterprise. RBAC ensures employees access only information they need to do their jobs and prevents them from accessing information that doesn't pertain to them. *(Google)*

