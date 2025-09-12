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
      // console.log("setVideos");
      const existingIds = new Set(
        state.videos.map((v) =>
          typeof v.id === "object" ? v.id.videoId : v.id
        )
      );

      const newVideos = action.payload.filter((v) => {
        const videoId = typeof v.id === "object" ? v.id.videoId : v.id;
        return !existingIds.has(videoId);
      });

      state.videos = [...state.videos, ...newVideos];
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
