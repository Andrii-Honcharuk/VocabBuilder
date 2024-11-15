import { createSlice } from "@reduxjs/toolkit";
import { fetchAllWords } from "./operations";

const wordSlice = createSlice({
  name: "words",
  initialState: {
    words: [],
    currentPage: 1,
    totalPages: 1,
    limit: 10,
    keyword: "",
    category: "",
    loading: false,
    error: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllWords.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchAllWords.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.words = action.payload;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.page;
        state.limit = action.payload.limit;
        state.keyword = action.payload.keyword;
        state.category = action.payload.category;
        // console.dir("etchAllWords.fulfilled", state);
      })
      .addCase(fetchAllWords.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});

export const { setPage } = wordSlice.actions;

export default wordSlice.reducer;
