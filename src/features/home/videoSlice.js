import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
  name: "video",
  initialState: { value: "" },
  reducers: {
    setVideo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setVideo } = VideoSlice.actions;

export default VideoSlice.reducer;
