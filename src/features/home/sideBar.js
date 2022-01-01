import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { value: false },
  reducers: {
    openSidebar: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { openSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
