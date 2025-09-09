import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    searchTerm: "",
    sideMenuExpanded: true,

    searchSuggestions: [],
    showSearchSuggestions: false,
    searchSuggestionsCache: {},
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    toggleSideMenu: (state) => {
      state.sideMenuExpanded = !state.sideMenuExpanded;
    },
    closeSideMenu: (state) => {
      state.sideMenuExpanded = false;
    },
    setSearchSuggestions: (state, action) => {
      state.searchSuggestions = action.payload;
    },
    setShowSearchSuggestions: (state, action) => {
      state.showSearchSuggestions = action.payload;
    },
    setSearchSuggestionsCache: (state, action) => {
      state.searchSuggestionsCache = {
        ...state.searchSuggestionsCache,
        [action.payload.key]: action.payload.value,
      };
    },
  },
});

export default appSlice.reducer;
export const appSliceActions = appSlice.actions;
