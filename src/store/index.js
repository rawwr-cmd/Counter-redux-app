import { createStore } from "redux";

//action creator
const increment = () => {
  type: "INCREMENT";
};

const decrement = () => {
  type: "DECREMENT";
};

//reducer
const counteReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counteReducer);

export default store;
