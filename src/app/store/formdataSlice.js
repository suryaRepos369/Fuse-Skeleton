import { createSlice } from "@reduxjs/toolkit";

const formdataSlice = createSlice({
  name: "formdata",
  initialState: {
    isloged: false,
    name: "vikramaditya",
    password: "asdfgasdkjfa;klsdhjfkl;ahsd",
  },
  reducers: {
    getData: (state, action) => {
      state.isloged = true;
      state.name = action.payload.name;
      state.password = action.payload.password;
    },
  },
});
export const { getData } = formdataSlice.actions;
export default formdataSlice.reducer;
