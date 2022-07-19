# Class 27: Reading: useState() Hook

*All notes taken from reading material*

## Introducing Hooks

1. What was the motivation for introducing Hooks?

You can extract stateful logic from a component so it can be tested independently and reused. **Hooks allow you to reuse stateful logic without changing your component hierarchy.** This makes it easy to share Hooks among many components or with the community.

2. What changes are important regarding implementing Hooks versus Component Classes?

To solve these problems, **Hooks let you use more of React’s features without classes.** Conceptually, React components have always been closer to functions. Hooks embrace functions, but without sacrificing the practical spirit of React. Hooks provide access to imperative escape hatches and don’t require you to learn complex functional or reactive programming techniques.

3. Hooks allow you to reuse stateful logic without changing ___ _______.

*Component Hierarchy*

## Hooks at a Glance

1. Name two rules imposed by React Hook usage.

    i. Always use Hooks at the top level of the React function

    ii. Only Call Hooks from React Functions


2. How would you identify a custom Hook and why might you create one?

  * Unlike a React component, a custom Hook doesn’t need to have a specific signature. We can decide what it takes as arguments, and what, if anything, it should return. In other words, it’s just like a normal function. Its name should always start with use so that you can tell at a glance that the rules of Hooks apply to it.

  * The purpose of our useFriendStatus Hook is to subscribe us to a friend’s status. This is why it takes friendID as an argument, and returns whether this friend is online.

    * Custom Hooks offer the flexibility of sharing logic that wasn’t possible in React components before. You can write custom Hooks that cover a wide range of use cases like form handling, animation, declarative subscriptions, timers, and probably many more we haven’t considered. What’s more, you can build Hooks that are just as easy to use as React’s built-in features.

## Using the State Hook

1. What is a Hook?

*Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.*

*A Hook is a special function that lets you “hook into” React features.*

2. When would I use the useState Hook?

  * If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.

3. If you were to add React state to a function component by declaring a state variable:

  a. What does calling useState do?
  
    - useState is a Hook that lets you add React state to function components.

    - **It declares a “state variable”.**
  
  b. What do we pass to useState as an argument?
  
    - The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need.
  
  c. What does useState return?

    - It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair. 


