import { createSlice } from "@reduxjs/toolkit";

const RouteSlice = createSlice({
  name: "page",
  initialState: { value: "Home" },
  reducers: {
    setPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPage } = RouteSlice.actions;

export default RouteSlice.reducer;
