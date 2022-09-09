/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getProducts, { createProducts as createProduct } from '../../services/product.service';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: null,
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.status = 'success';
      state.isProduct = true;
    },
    [getProducts.pending]: (state) => {
      state.status = 'loading';
      state.isProduct = false;
    },
    [getProducts.rejected]: (state) => {
      state.status = 'failed';
      state.products = [];
      state.isProduct = false;
    },
    [createProduct.fulfilled]: (state, { payload }) => {
      state.products = { ...state.products, ...payload };
      state.status = 'loading';
    },
  },
});

export default productSlice.reducer;
