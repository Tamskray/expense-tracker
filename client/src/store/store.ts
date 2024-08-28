import { configureStore } from "@reduxjs/toolkit";

import expenseReducer from "./reducers/expenseSlice";
import userReducer from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    expense: expenseReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
