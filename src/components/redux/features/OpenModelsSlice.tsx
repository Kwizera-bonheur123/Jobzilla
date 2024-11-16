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
      state.loginModel = false;
    },
    manipulateLoginModel: (state) => {
      state.loginModel = !state.loginModel;
      state.signUpModel = false;
    },
    closeModels: (state) => {
      state.loginModel = false;
      state.signUpModel = false;
    },
  },
});

export const openModelReducer = openModelSlice.reducer;
export const { manipulateLoginModel, manipulateSignupModel, closeModels } =
  openModelSlice.actions;
