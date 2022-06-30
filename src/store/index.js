import { createStore } from "redux";

const initialState = { counter: 0, showContent: true };

const counterReducer = function (state = initialState, action) {
  if (action.type === "INCREMENT")
    return {
      counter: state.counter + 1,
      showContent: state.showContent,
    };

  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.amount,
      showContent: state.showContent,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showContent: state.showContent,
    };
  }

  if (action.type === "HIDE") {
    return {
      showContent: !state.showContent,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
