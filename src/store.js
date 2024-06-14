import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./features/weatherSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    // Add other reducers here as needed
  },
});

export default store;
