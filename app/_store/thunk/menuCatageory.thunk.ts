import { NEXT_APP_BASE_URL } from '@/app/_lib/constants';
import api from '@/app/_services/api';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMenuCatageorys = createAsyncThunk("menu/getCatageorys", async () => {
  try {
    const res = await api.get(`${NEXT_APP_BASE_URL}/menu-category?pagination=false&fetchCategoriesHavingItems=true&sortBy=order&sortDirection=1`);
    return res?.data?.data;
  } catch (error) {
    console.error(error);
  }
});