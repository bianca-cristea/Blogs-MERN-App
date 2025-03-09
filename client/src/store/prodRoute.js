import { createSlice } from "@reduxjs/toolkit";

const prodSlice = createSlice({
  name: "prod",
  initialState: {
    link: "http://localhost:5000",
  },
});

export const { setLink } = prodSlice.actions;
export default prodSlice.reducer;
