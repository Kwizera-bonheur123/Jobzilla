import { createSlice } from "@reduxjs/toolkit";

interface openModel {
  signUpModel: boolean;
  loginModel: boolean;
}

const initialState: openModel = {
  signUpModel: false,
  loginModel: false,
};
const openModelSlice = createSlice({
  name: "toggleModels",
  initialState,
  reducers: {
    manipulateSignupModel: (state) => {
      state.signUpModel = !state.signUpModel;
    },
    manipulateLoginModel: (state) => {
      state.loginModel = !state.loginModel;
    },
  },
});

export const openModelReducer = openModelSlice.reducer;
export const {manipulateLoginModel, manipulateSignupModel} = openModelSlice.actions;
