import { configureStore } from "@reduxjs/toolkit";
import { logotypeAPi } from "./logotypeApi";

export const store = configureStore({
  reducer: {
    [logotypeAPi.reducerPath]: logotypeAPi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logotypeAPi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
