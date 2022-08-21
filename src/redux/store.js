import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});