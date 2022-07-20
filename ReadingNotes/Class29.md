# Class 29: Advanced State with Reducers

*All notes taken from reading material*

## useReducer hook

1. Name an alternative to the useState Hook.

useReducer:
> const [state, dispatch] = useReducer(reducer, initialArg, init);

useCallback:
> const memoizedCallback = useCallback(() => {doSomething(a, b);},[a, b],);

useMemo:
> const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

useRef:
> const refContainer = useRef(initialValue);

useImperativeHandle
> useImperativeHandle(ref, createHandle, [ deps])

useLayoutEffect

useDebugValue:
> useDebugValue(value)

useDeferredValue:
> const deferredValue = useDeferredValue(value);

useTransition:
> const [isPending, startTransition] = useTransition();

useId:
> const id = useId();

2. Why might the useReducer Hook be preferable to the useState Hook?

* useReducer⁄useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

3. What are two ways to set the initial state?

1. The simplest way is to pass the initial state as a second argument:
> const [state, dispatch] = useReducer(
    reducer,
    {count: initialCount}
  );

2. You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

    - It lets you extract the logic for calculating the initial state outside the reducer. This is also handy for resetting the state later in response to an action:

![img](/assets/401-imgs/funcinit.png)

## React useReducer Hook ultimate guide

1. In terms of state, what does useReducer expect to receive as a parameter?

- reducer function & the initial state

2. What does useReducer return?

- useReducer returns an array that hold the current state value and a dispatch function to which you can pass an action and later invoke it.

3. Explain dispatch to a non-technical recruiter.

- The dispatch function accepts an object that represents the type of action we want to execute when it is called. Basically, it sends the type of action to the reducer function to perform its job, which, of course, is updating the state.

- The action to be executed is specified in our reducer function, which in turn, is passed to the useReducer. The reducer function will then return the updated state.