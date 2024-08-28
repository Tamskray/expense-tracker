import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

export interface UserInitialState {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

// initial values were added for dev
const initialState: UserInitialState = {
  name: "Test Name",
  email: "test@example.com",
  isLoggedIn: true,
};

interface LoginPayload {
  name: string;
  email: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.name = "";
      state.email = "";
      state.isLoggedIn = false;
    },
  },
});

// export const selectUser = (state: RootState) => ({
//   name: state.user.name,
//   email: state.user.email,
//   isLoggedIn: state.user.isLoggedIn,
// });

export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
