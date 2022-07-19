# Class 27: Component Lifecycle / useEffect Hook

*All notes taken from reading material*

## Using the Effect Hook

1. What purpose does useEffect serve in a function component compared to its counterpart(s) in class components?

  -  In React class components, the render method itself shouldn’t cause side effects. It would be too early — we typically want to perform our effects after React has updated the DOM.

  - This is why in React classes, we put side effects into componentDidMount and componentDidUpdate.

2. When using the useEffect Hook:

    i. What does useEffect do?

      - You tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

    ii. Why is useEffect called inside a component?

      - Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

3. Explain the importance of properly implementing effects with Cleanup

  - Sometimes, we want to run some additional code after React has updated the DOM. Network requests, manual DOM mutations, and logging are common examples of effects that don’t require a cleanup. We say that because we can run them and immediately forget about them. Let’s compare how classes and Hooks let us express such side effects.
