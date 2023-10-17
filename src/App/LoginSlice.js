import { createSlice } from "@reduxjs/toolkit";
const initialState = { isLogin: false };
export const isLoginSlice = createSlice({
  initialState,
  name: "global",
  reducers: {
    setIslogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});
export const { setIslogin } = isLoginSlice.actions;
export const isLoginSelector = (state) => state.isLogin.isLogin;
const betSlipInitialState = { data: null };
export const betModuleDataSlice = createSlice({
  initialState: betSlipInitialState,
  name: "betSlipModuleData",
  reducers: {
    setBetSlipData: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setBetSlipData } = betModuleDataSlice.actions;
export const betSlipSelector = (state) => {
  // console.log(state);
  return state.betSlip;
};











