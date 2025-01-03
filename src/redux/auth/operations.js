import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://vocab-builder-backend.p.goit.global/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

// POST Register signup

export const registerNewUser = createAsyncThunk(
  "auth/registerNewUser",
  async (user, thunkAPI) => {
    try {
      //   const { name, email, password } = user.data;
      const response = await axios.post("users/signup", user);
      console.log("user REGISTER", user);
      console.log("response REGISTER", response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST Login signIn

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("users/signin", user);
      console.log("user LOGIN", user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//POST LogOut signOut

export const logOutUser = createAsyncThunk("auth/logout", 
  async (_, thunkAPI) => {
  try {
    const response = await axios.post("/users/signout");

    clearAuthHeader();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//GET Refresh

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const {
        auth: { token },
      } = thunkAPI.getState();
      setAuthHeader(token);
      const response = await axios.get("users/current");
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },{
    condition: (_, { getState }) => {
      const reduxState = getState();
      const savedToken = reduxState.auth.token;
      return savedToken !== null;
    },
  }
);
