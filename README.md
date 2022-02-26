# Some hook of React

## USE STATE HOOK

- Using when we need to change the value of the variable.
- Syntax: const [var, setVar] = useState(initialState);
  In this syntax:
  - var: Variable
  - setVar: operation to get the value onChange of var
  - initialState: first value we set for var

## USE EFFECT HOOK

- Using when we want to do side effects (Ex: Update DOM, Call API, Listen DOM events, Clean up)
- Syntax: useEffect(callback, [deps])
  In this syntax:
  - callback is required
  - deps is optional
- Some cases:
  Common point: Callback always call after when the component mounted.

1. useEffect(callback)

- Always call when the component re-render.
- Call callback after the component add element to DOM.

2. useEffect(callback, [])

- Call only one time after the component mounted.
- Cleanup function always called before component unmounted
- Cleanup function allways called before callback called

3. useEffect(callback, [deps])
