import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
    selectedVideo: null,
    channelDetails: null,
    searchedVideos: [],
  },
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    },

    setSelectedVideo: (state, action) => {
      state.selectedVideo = action.payload;
    },
    setChannelDetails: (state, action) => {
      state.channelDetails = action.payload;
    },
    setSearchVideos: (state, action) => {
      state.searchedVideos = action.payload;
    },
  },
});

export const videoSliceActions = videoSlice.actions;
export default videoSlice.reducer;
