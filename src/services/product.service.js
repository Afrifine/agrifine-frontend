import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const getProductsData = await axios.get(`${process.env.REACT_APP_SERVER}/api/v1/products`);
    const res = await getProductsData.data;
    return res;
  },
);

export const createProducts = createAsyncThunk(
  'products/createProducts',
  async (product) => {
    const createProduct = await axios.post(`${process.env.REACT_APP_SERVER}/api/v1/products`, product);
    const res = await createProduct.data;
    return res;
  },
);

export default getProducts;
