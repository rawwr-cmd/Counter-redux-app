import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

//(const pop = counterSlice.actions.DECREMENT(); we can call it to create the actions)

export default store;
