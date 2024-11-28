/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginSchemaType } from "../../../validations/Login.validation";
import { DynamicData } from "../../types/DynamicData";
import API from "../../../utils/api";

export const login = createAsyncThunk(
  "Login",
  async (loginData: LoginSchemaType, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", loginData);
      return data;
    } catch (error) {
      return rejectWithValue((error as DynamicData).response);
    }
  }
);

const initialState: DynamicData = {
  isLoading: false,
  isAuthenticated: false,
  error: null,
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      console.log(action.payload.data.token);
      if (action.payload.data.token) {
        state.isAuthenticated = true;
      }
    });
    builder.addCase(login.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload?.data?.message;
    });
  },
});

export default LoginSlice.reducer;
