# CLASS 37 Redux - Combined Reducers

*All notes taken from reading material*

## Multiple Reducers with Redux Reducers - Redux React Tutorial #4

1. Why create multiple reducers?

You create multiple reducers so that you can navigate multiple sets of data across multiple pages.

2. How would you combine multiple reducers?

combineReducers from redux

combinereducers()

3. How will you manage state as an immutable object? why?

Redux has a single state that can only be modified via “actions” (plain JavaScript objects), which are dispatched to the Redux store. Most other data stores have the state contained in React components themselves, allow you to have multiple stores and/or use mutable state.

This in turn causes the store’s reducer, a pure function that operates on immutable data, to execute and potentially update the state. 

[LINK](https://www.toptal.com/javascript/immutability-in-javascript-using-redux)

## Using combineReducers

1. combineReducers is a utility function to simplify the most common use case when writing ___ _____ .

 **Redux reducers.** You are not required to use it in your own application, and it does not handle every possible scenario. It is entirely possible to write reducer logic without using it, and it is quite common to need to write custom reducer logic for cases that combineReducer does not handle. 

2. Explain how combineReducers assembles the new state tree.

combineReducers will call each slice reducer with its current slice of state and the current action, giving the slice reducer a chance to respond and update its slice of state if needed. So, in that sense, using combineReducers does "call all reducers", or at least all of the slice reducers it is wrapping.

3. How would you define initial state in an app using combineReducers?

*There are two ways to define the initial shape and contents of your store's state.*

  a. First, the createStore function can take preloadedState as its second argument. This is primarily intended for initializing the store with state that was previously persisted elsewhere, such as the browser's localStorage. 

  b. Secondly, the other way is for the root reducer to return the initial state value when the state argument is undefined. These two approaches are described in more detail in Initializing State, but there are some additional concerns to be aware of when using combineReducers.

## combineReducers(reducers)

1. Why will you want to split your reducing functions as your app becomes more complex?

Each manages independent parts of the state

2. The _____ helper function turns an object whose values are different reducing functions into a single reducing function you can pass to ____.

The state produced by **combineReducers()** namespaces the states of each reducer under their keys as passed to combineReducers()

3. What is a popular convention when naming reducers?

A popular convention is to name reducers after the state slices they manage, *so you can use ES6 property shorthand notation:* combineReducers({ counter, todos }). This is equivalent to writing combineReducers({ counter: counter, todos: todos }).