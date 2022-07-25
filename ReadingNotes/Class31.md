# CLASS 31 Context

*All notes taken from reading material*

## Context API:

1. What can React Context provide your app?

- Context provides a way to pass data through the component tree without having to pass props down manually at every level.

- In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

2. Why might we use Context?

- Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

- Using context, we can avoid passing props through intermediate elements:

3. Why should we use it sparingly?

Context is primarily used when some data needs to be accessible by many components at different nesting levels. **Apply it sparingly because it makes component reuse more difficult.**

*If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.*

## React v16.3.0: New lifecycles and context API:

**Takeaway 1:**

- Generally, React components are declarative, but sometimes imperative access to the component instances and the underlying DOM nodes is necessary. This is common for use cases like managing focus, selection, or animations. React provides refs as a way to solve this problem. However, component encapsulation poses some challenges with refs.

## What’s new in React 16.3(.0-alpha)

**Takeaway 2:**

- The “Provider” is a special component which aims to provide data to all components in its sub-tree.

- the consumer must have access to the same Context component — if you were to create a new context, with the same parameter as input, a new Context would be created and the data would not be passed. For this reason please consider Context a component — it should be created once and then exported + imported whenever needed

- The new syntax uses the function as child (sometime called render prop) pattern — if you’re not familiar with this pattern I recommend reading some articles on it

- It is no longer required to use prop-types to specify contextProps if you want to make use of the new Context API