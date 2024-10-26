import { configureStore } from "@reduxjs/toolkit";
import { openModelReducer } from "./features/OpenModelsSlice";

export const store = configureStore({
  reducer: {
    toggleModels: openModelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
