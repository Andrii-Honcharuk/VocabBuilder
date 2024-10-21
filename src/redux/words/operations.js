import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://vocab-builder-backend.p.goit.global/api";
//GET ALL
export const fetchAllWords = createAsyncThunk(
  "words/fetchAllWords",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("words/all");
      console.log("fetchAllWords", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
