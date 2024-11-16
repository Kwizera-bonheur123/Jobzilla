/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RegisterSchemaType } from "../../../validations/auth/Register.validation";
import API from "../../../utils/api";
import { DynamicData } from "../../types/DynamicData";

export const registra = createAsyncThunk(
  "register",
  async (registerData: RegisterSchemaType, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/signup", registerData);
      return data;
    } catch (error) {
      return rejectWithValue((error as DynamicData).response);
    }
  }
);

const initialState: DynamicData = {
  isLoading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registra.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registra.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(registra.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload?.data?.message;
    });
  },
});

export default registerSlice.reducer;
