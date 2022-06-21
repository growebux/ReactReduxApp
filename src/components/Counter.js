import { useSelector, useDispatch } from "react-redux";

const CounterComponent = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementCounter = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrementCounter = () => {
    dispatch({ type: "DECREMENT" });
  };

  const increaseCounter = () => {
    dispatch({ type: "INCREASE", amount: 5 });
  };

  const toggleCounterHandler = () => {};
  return (
    <div className="counter">
      <h1>Redux</h1>
      <div className="value">{counter}</div>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>_</button>
      <button onClick={increaseCounter}>incrementByFive</button>
      <button onClick={toggleCounterHandler}>Togger Counter</button>
    </div>
  );
};

export default CounterComponent;
