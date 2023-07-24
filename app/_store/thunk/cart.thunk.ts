import { NEXT_APP_BASE_URL } from '@/app/_lib/constants';
import api from '@/app/_services/api';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCartItems = createAsyncThunk("cart/getCartItems", async (data: any, { dispatch }) => {
  try {
    const res = await api.post(`${NEXT_APP_BASE_URL}/order/preview`, data);
    return res?.data?.data;
  } catch (error) {
    console.error(error);
  }
});

export const addToCart = createAsyncThunk("cart/addToCart", async (data: any, { dispatch }) => {
  try {
    const res = await api.post(`${NEXT_APP_BASE_URL}/menu-category?pagination=false&fetchCategoriesHavingItems=true&sortBy=order&sortDirection=1`);
    dispatch(getCartItems);
    return res?.data?.data;
  } catch (error) {
    console.error(error);
  }
});