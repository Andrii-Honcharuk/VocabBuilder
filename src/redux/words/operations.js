import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://vocab-builder-backend.p.goit.global/api";
//GET ALL
export const fetchAllWords = createAsyncThunk(
  "words/fetchAllWords",
  async ({ page, limit, keyword, category }, thunkAPI) => {
    try {
      const response = await axios.get("words/all", {
        params: { page, limit, keyword, category },
      });
      console.log("fetchAllWords", response.data);
      // console.log("params", params);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
