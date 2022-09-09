import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/userSlice';
import productsReducer from './products/products';

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
});

export default store;
