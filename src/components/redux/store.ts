import { configureStore } from "@reduxjs/toolkit";
import { openModelReducer } from "./features/OpenModelsSlice";
import RegisterSlice from "./features/RegisterSlice";

export const store = configureStore({
  reducer: {
    toggleModels: openModelReducer,
    register: RegisterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
