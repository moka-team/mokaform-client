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
    signInClick: (state) => {
      state.logined = true;
      alert(`login state: ${state.logined}`);
    },
    logoutClick: (state) => {
      state.logined = false;
      alert(`login state: ${state.logined}`);
    },
    changeLoginStatus: (state) => {
      state.logined = !state.logined;
    },
  },
});

export const { signInClick, logoutClick, changeLoginStatus } =
  userSlice.actions;

export default userSlice.reducer;
