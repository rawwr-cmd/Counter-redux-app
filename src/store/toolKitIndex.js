import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

//reducer
const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: counter,
  initialState,
  reducer: {
    INCREMENT(state) {
      state.counter++;
    },

    DECREMENT(state) {
      state.counter--;
    },

    INCREASE(state, action) {
      state.counter += action.amount;
    },

    TOGGLE_COUNTER(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = createStore(counterSlice.reducer);

export default store;
