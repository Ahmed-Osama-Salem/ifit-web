/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './slice/counterSlice';
import popupSlice from './slice/popupSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    popup: popupSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
