# Class 26: Reading: Component Based UI 

*All notes taken from reading material*

# REACT Hello World

1. What are the building blocks of a React app?

**elements and components.**

2. What is the difference between an element and a React component?

Components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

3. What are some advantages of React’s component based architecture?

In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.



## Introducing JSX

1. What is JSX and why do we use it?

> const element = < h1>Hello, world!</h1 >;

It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS.

2. Describe the process of embedding JavaScript expressions in JSX.

> const name = 'Josh Perez';

> const element = <h1 >Hello, {name}</h1 >;

You can put any valid JavaScript expression inside the curly braces in JSX. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.

In the example below, we embed the result of calling a JavaScript function, formatName(user), into an < h1> element.

>function formatName(user) {

  > return user.firstName + ' ' + user.lastName;

> }

> const user = {

  > firstName: 'Harper',

  > lastName: 'Perez'

> };

  > const element = (

  > < h1>

    > Hello, {formatName(user)}!

  > < /h1>

> );

We split JSX over multiple lines for readability. While it isn’t required, when doing this, we also recommend wrapping it in parentheses to avoid the pitfalls of automatic semicolon insertion.



3. Is it safe to embed user input in JSX? Explain.

**YES**

> const title = response.potentiallyMaliciousInput;

> // This is safe:

> const element = < h1 >{title}< /h1 >;


## Rendering Elements

1. Explain what a React Component is to a non-technical friend.

Elements are what components are “made of”.

2. Describe mutability and React Components, specifically, how is the UI updated?

React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

The only way to update the UI is to create a new element, and pass it to root.render().

3. If changes are made to the UI, what does React update?

Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM.

In our experience, thinking about how the UI should look at any given moment, rather than how to change it over time, eliminates a whole class of bugs.