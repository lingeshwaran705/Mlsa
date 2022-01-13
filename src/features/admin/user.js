import { createSlice } from "@reduxjs/toolkit";

const userSilce = createSlice({
  name: "adminUser",
  initialState: { value: { name: "", email: "" } },
  reducers: {
    setAdminUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAdminUser } = userSilce.actions;

export default userSilce.reducer;
