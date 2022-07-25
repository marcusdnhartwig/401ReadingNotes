# CLASS 32 Context API - Behaviors

*All notes taken from reading material*

## Snackbars in React: An Exercise in Hooks and Context

1. With regard to the React Context API, what does a “provider” do?

Provider is responsible for both displaying the local state of the snackbars (we call them alerts), and for exposing an API for globally managing them.

2. With regard to the React Context API, how would we implement a “consumer” role?

![img](../assets/401-imgs/Screen%20Shot%202022-07-25%20at%202.07.52%20PM.png)

3. Specifically with Context, how are we “wrapping” components to achieve our goals?

It turns out that our custom hook from before is nothing more than a small wrapper around the useContext internal React hook, which consumes our new context.


## Awesome React Context links

*Consume content from (at least) two more of the Awesome React Context links. After some familiarity with React Context, once again share your takeaways from each:*

### Replacing Redux with core React APIs

[Link](https://medium.com/@DidierFranc/replacing-redux-with-the-new-react-context-api-8f5d01a00e8c)

  - Redux Devtools has been integrated by default in the version 4.0.0, you’ve nothing to do, it just works.

**PROS**

1. Easier to implement

2. Weight and performance

3. Cleaner action return with state chunk (as in setState)

**CONS**

1. *It only works with React ^16.3*

### ThemeContext

[Link](https://codesandbox.io/s/n4r0qq898j)

Whoo!! It's a theme toggler!