import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/home/videoSlice";
import sidebarReducer from "../features/home/sideBar";
import pageReducer from "../features/home/Route";
import domainReducer from "../features/home/domain";

export const store = configureStore({
  reducer: {
    video: videoReducer,
    sidebar: sidebarReducer,
    page: pageReducer,
    domain: domainReducer,
  },
});
