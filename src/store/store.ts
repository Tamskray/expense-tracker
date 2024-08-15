import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/userSlice";
import expenseReducer from "./reducers/expenseSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    expense: expenseReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
