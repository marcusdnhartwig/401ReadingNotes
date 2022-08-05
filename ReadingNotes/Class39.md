# CLASS 39 Redux - Additional Topics

*All notes taken from reading material*

## Getting Started with Redux Toolkit

1. What concerns are addressed by Redux Toolkit?

  * "Configuring a Redux store is too complicated"

  * "I have to add a lot of packages to get Redux to do anything useful"

  * "Redux requires too much boilerplate code"

2. What does configureStore() do?

  * 

**configureStore():** wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

3. How would I use createSlice()?

**createSlice():** accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.

## MobX

1. What is Mobx?

MobX is a simple, scalable and battle tested state management solution. This tutorial will teach you all the important concepts of MobX in ten minutes. MobX is a standalone library, but most people are using it with React and this tutorial focuses on that combination.

2. How does MobX make it “impossible” to produce an inconsistent state?

The strategy to achieve that is simple: Make sure that everything that can be derived from the application state, will be derived. Automatically.

Conceptually MobX treats your application like a spreadsheet.

![img](../assets/401-imgs/Screen%20Shot%202022-08-03%20at%209.05.41%20PM.png)

3. How would we build a reactive user interface?

The observer HoC wrapper from the mobx-react-lite package fixes that by basically wrapping the React component in autorun. This keeps the component in sync with the state.

## [Tutorials Overview](https://redux-toolkit.js.org/tutorials/overview)

1. What take-away(s) did this tutorial provide?

* The Redux Essentials tutorial teaches you "how to use Redux the right way", using Redux Toolkit as the standard approach for writing Redux logic.

* It shows how to build a "real world"-style example application, and teaches Redux concepts along the way.

* The RTK Usage Guide docs page explains the standard usage patterns for each of RTK's APIs. The API Reference section describes each API function and has additional usage examples.

* We previously had a set of "Basic/Intermediate/Advanced" tutorials directly in the Redux Toolkit docs. They were helpful, but we've removed them in favor of pointing to the "Essentials" and "Fundamentals" tutorials in the Redux core docs.

