import { createSlice } from "@reduxjs/toolkit";
import { FilterState } from "../../types/state.types";

const initialState: FilterState = {
  genre: null,
  author: null,
  sort: 'rating',
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    setGenreFilter: (state, action) => {
      state.genre = action.payload;
    },
    toggleGenreFilter: (state, action) => {
      const genre = action.payload;
      if (state.genre === genre) {
        state.genre = null;
      } else {
        state.genre = genre;
      }
    },
    toggleAuthorFilter: (state, action) => {
      const author = action.payload;
      if (state.author === author) {
        state.author = null;
      } else {
        state.author = author;
      }
    },
    changeSort: (state, action) => {
      state.sort = action.payload;
    },
    clearFilters: () => {
      return {...initialState};
    },
  },
});

export default filterSlice.reducer;
export const { setAuthorFilter, setGenreFilter, toggleGenreFilter, toggleAuthorFilter, changeSort, clearFilters } = filterSlice.actions;