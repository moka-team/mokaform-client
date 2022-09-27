import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // user: "Gachon",
  // isClick: false,
  logined: false,
};

const userSlice = createSlice({
  // name: "userInfo",
  name: "isLogined",
  initialState,
  reducers: {
    // inputUser: (state, action) => {
    //   state.user = action.payload;
    //   console.log(state.user);
    // },
    // okClick: (state) => {
    //   state.isClick = true;
    // },
    // resetUser: (state) => {
    //   state.isClick = false;
    // },
    signInClick: (state) => {
      state.logined = true;
      alert(`login state: ${state.logined}`);
    },
    logoutClick: (state) => {
      state.logined = false;
      alert(`login state: ${state.logined}`);
    },
  },
});

export const { signInClick, logoutClick } = userSlice.actions;

export default userSlice.reducer;
