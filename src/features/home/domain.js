import { createSlice } from "@reduxjs/toolkit";
import { technical, nonTechnical } from "../../data/Domain";

const domainSlice = createSlice({
  name: "domain",
  initialState: {
    value: { open: false, data: [...technical, ...nonTechnical] },
  },
  reducers: {
    setOpen: (state, action) => {
      state.value.open = action.payload;
    },
    setDomain: (state, action) => {
      state.value.data =
        action.payload === "technical" ? technical : nonTechnical;
    },
  },
});

export const { setDomain, setOpen } = domainSlice.actions;

export default domainSlice.reducer;
