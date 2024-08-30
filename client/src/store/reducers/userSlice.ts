import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "@utils/auth/loginUser";

import type { RootState } from "../store";

export interface UserInitialState {
  userId: number | null;
  name: string;
  email: string;
  isLoggedIn: boolean;
  access_token: string;
}

const initialState: UserInitialState = {
  userId: null,
  name: "",
  email: "",
  isLoggedIn: false,
  access_token: "",
};

interface LoginPayload {
  userId: number;
  name: string;
  email: string;
  access_token: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (
    user: { name: string; email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await loginUser(user.name, user.email, user.password);
      return {
        userId: response.userId,
        name: response.username,
        email: response.email,
        access_token: response.access_token,
      };
    } catch (error) {
      return rejectWithValue({ message: "login failed", err: error });
    }
  },
);

// export const fetchUserProfile = createAsyncThunk()

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userId = null;
      state.name = "";
      state.email = "";
      state.isLoggedIn = false;
      state.access_token = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<LoginPayload>) => {
          state.userId = action.payload.userId;
          state.name = action.payload.name;
          state.email = action.payload.email;
          state.isLoggedIn = true;
          state.access_token = action.payload.access_token;
        },
      )
      .addCase(login.rejected, (state) => {
        state.isLoggedIn = false;
      });
  },
});

// export const selectUser = (state: RootState) => ({
//   name: state.user.name,
//   email: state.user.email,
//   isLoggedIn: state.user.isLoggedIn,
// });

export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectAccessToken = (state: RootState) => state.user.access_token;
export const selectUserId = (state: RootState) => state.user.userId;

export const { logout } = userSlice.actions;
export default userSlice.reducer;
