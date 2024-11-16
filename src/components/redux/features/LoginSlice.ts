import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType } from "../../../validations/Login.validation";
import { DynamicData } from "../../types/DynamicData";

export const login = createAsyncThunk(
  "login",
  async (loginData: LoginSchemaType, { rejectWithValue }) => {
    try {
        const 
    } catch (error) {
      return rejectWithValue((error as DynamicData).response);
    }
  }
);
