import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/home/videoSlice";
import sidebarReducer from "../features/home/sideBar";
import pageReducer from "../features/home/Route";
export const store = configureStore({
  reducer: {
    video: videoReducer,
    sidebar: sidebarReducer,
    page: pageReducer,
  },
});
