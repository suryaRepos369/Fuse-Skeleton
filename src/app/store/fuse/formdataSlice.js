import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloggedIn: false,
  username: "surya",
  password: "sfaloksdhfkjahsdlkfjh",
  imageArray: [],
  videoArray: [],
  friends: [
    { id: 3, name: "shraavani" },
    { id: 4, name: "shraavanthi" },
    { id: 9, name: "vaishnavidevi" },
  ],
  message: "share what you want to do with us and shedule your post time ",
  scheduledate: null,
  scheduletime: null,
};

const formdataSlice = createSlice({
  name: "formdata",
  initialState,

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
//console.log("formSlice:", formSlice);
