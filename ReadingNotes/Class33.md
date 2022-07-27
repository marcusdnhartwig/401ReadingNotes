# CLASS 33 Context API - Behaviors

## What is Role-Based Access Control (RBAC)? Examples, Benefits, and More

1. What is Role Based Access Control (RBAC)?

Role-based access control (RBAC) restricts network access based on a person's role within an organization and has become one of the main methods for advanced access control. The roles in RBAC refer to the levels of access that employees have to the network.

2. Share some an example of RBAC including all possible CRUD operations and correlating roles.

Through RBAC, you can control what end-users can do at both broad and granular levels. You can designate whether the user is an administrator, a specialist user, or an end-user, and align roles and access permissions with your employees’ positions in the organization. Permissions are allocated only with enough access as needed for employees to do their jobs.

  I. Management role scope – it limits what objects the role group is allowed to manage.

  II. Management role group – you can add and remove members.

  III. Management role – these are the types of tasks that can be performed by a specific role group.

  IV. Management role assignment – this links a role to a role group.

3. What are the Benefits of RBAC?

Managing and auditing network access is essential to information security. Access can and should be granted on a need-to-know basis. With hundreds or thousands of employees, security is more easily maintained by limiting unnecessary access to sensitive information based on each user’s established role within the organization.

 a. Reducing administrative work and IT support. 

 b. Maximizing operational efficiency.

 c. Improving compliance.

**Compare and Contrast the following two Libraries and the following questions. Yes, they are similarly named.**

[React-Cookie](https://www.npmjs.com/package/react-cookie)

[React-Cookies-Component](https://www.npmjs.com/package/react-cookies)

1. Describe some react-cookie features.

*npm install react-cookie*

Access and modify cookies using React hooks.

    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
////////////

////////////

    setCookie(name, value, [options])

  Set a cookie value

    removeCookie(name, [options])
  
  Remove a cookie

    get(name, [options])
  
  Get a cookie value

    getAll([options])

  Get all cookies

    set(name, value, [options])

  Set a cookie value

2. Describe some react-cookies-component features.

*$ npm install react-cookies --save*

**Isomorphic cookies!**

To be able to access user cookies while doing server-rendering, you can use plugToRequest or setRawCookie.

    .load(name, [doNotParse])

  Load the cookie value.
  
  Returns undefined if the cookie does not exist.

    .loadAll()

  Load all available cookies.

  Returns an object containing all cookies.

    .select([regex])

  Find all the cookies with a name that match the regex.
  
  Returns an object with the cookie name as the key.


3. Which library would you prefer would you prefer? Why?

I think I'd choose to go with the React-Cookies(Plural) since there is more that is avalable to the dev.