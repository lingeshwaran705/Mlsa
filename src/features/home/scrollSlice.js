import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    value: { screenHeight: window.innerHeight, scrollY: window.scrollY },
  },
  reducers: {
    setScroll: (state, action) => {
      state.value.scrollY = action.payload;
    },
  },
});

export const { setScroll } = scrollSlice.actions;

export default scrollSlice.reducer;
