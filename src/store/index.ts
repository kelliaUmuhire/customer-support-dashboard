import { configureStore } from "@reduxjs/toolkit";
import inquiryReducer from "./inquirySlice";

const store = configureStore({ reducer: { inquiry: inquiryReducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
