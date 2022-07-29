# CLASS 36 Application State with Redux

*All notes taken from reading material*

# Fundamentals of Redux Course from Dan Abramov

1. What is the first principle of Redux?

Single source of truth

The global state of your application is stored in an object tree within a single store.

State is read-only

The only way to change the state is to emit an action, an object describing what happened.

Changes are made with pure functions

To specify how the state tree is transformed by actions, you write pure reducers.

Redux provides a solid, stable, and mature solution to managing state in your React application. Through a handful of small, useful patterns, Redux can transform your application from a total mess of confusing and scattered state, into a delightfully organized, easy to understand modern JavaScript powerhouse.

The principles of Redux aren't new, but they are packaged and presented for you in an easy to use a library that not only elevates your applications but also improves your general understanding of building JavaScript UIs.

2. What is a store and what do we use our reducers for within that store?

Store binds together the three principles of Redux. 

A store is an object that holds the application's state tree. There should only be a single store in a Redux app, as the composition happens on the reducer level.

A reducer (also called a reducing function) is a function that accepts an accumulation and a value and returns a new accumulation. They are used to reduce a collection of values down to a single value.

3. Name three Redux store methods given to us by createStore and describe their use.

  a.  getState()

    i. Returns the current state tree of your application. It is equal to the last value returned by the store's reducer.

  b. dispatch(action)

    ii. Dispatches an action. This is the only way to trigger a state change.

  c. subscribe(listener)

    iii. Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call getState() to read the current state tree inside the callback.

  d. replaceReducer(nextReducer)

    iv. Replaces the reducer currently used by the store to calculate the state.

4. Explain to a non-technical recruiter what combineReducers() does and why it is useful.

Is a simple reducer that calls many reducers to manage parts of its tree by using the combineReducers utility function.