export const selectWords = (state) => state.words.words;

export const selectStateWords = (state) => {
  console.log("selectStateWords", state);
  return state.words;
};
