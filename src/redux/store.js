import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./slice/videoSlice.js";
import appReducer from "./slice/AppSlice.js";
export const store = configureStore({
  reducer: {
    video: videoReducer,
    app: appReducer,
  },
});
