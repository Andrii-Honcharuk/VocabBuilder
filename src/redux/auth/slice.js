import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerNewUser } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(registerNewUser.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(registerNewUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        console.log("register-action-payload", action.payload);
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        console.log("login action-payload", action.payload);
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
});

export default authSlice.reducer;