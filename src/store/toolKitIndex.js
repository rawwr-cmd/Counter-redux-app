import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
