// // import { createStore } from "redux";

// //reducer
// const initialState = { counter: 0, showCounter: true };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };

//     case "INCREASE":
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };

//     case "DECREMENT":
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };

//     case "TOGGLE_COUNTER":
//       return {
//         showCounter: !state.showCounter,
//         counter: state.counter,
//       };

//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

// export default store;
