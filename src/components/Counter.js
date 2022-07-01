import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/toolKitIndex";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  //accessing the store(state.counter.counter)
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  // console.log(show);

  //dispatching actions
  const incrementHandler = () => {
    // dispatch({ type: "INCREMENT" });
    dispatch(counterActions.increment());
  };

  // ampount is the payload
  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); //{type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Decrease By 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/* A 'useSelector' hook to access the redux store's state.
  This hook takes a selector function as an argument. The selector is called with the store state. */
