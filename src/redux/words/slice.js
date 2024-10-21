import { createSlice } from "@reduxjs/toolkit";
import { fetchAllWords } from "./operations";

const wordSlice = createSlice({
  name: "words",
  initialState: {
    items: [],
    loading: false,
    error: null,
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
        state.items = action.payload;
        // console.dir("etchAllWords.fulfilled", state);
      })
      .addCase(fetchAllWords.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});

export default wordSlice.reducer;
