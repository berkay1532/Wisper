import { configureStore } from "@reduxjs/toolkit";

import zkAppReducer from "./slices/zkApp/slice";
import chatReducer from "./slices/chat/slice";
import overlayReducer from "./slices/overlaySlice";
import sessionReducer from "./slices/session/slice";
import modalReducer from "./slices/modal/slice";

export const store = configureStore({
  reducer: {
    zkApp: zkAppReducer,
    session: sessionReducer,
    chat: chatReducer,
    overlay: overlayReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;