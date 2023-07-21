import { NEXT_APP_BASE_URL } from '@/app/_lib/constants';
import api from '@/app/_services/api';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearCatagories } from '../reducers/menuCatageory';

export const getMenuCatageorys = createAsyncThunk("menu/getCatageorys", async (_, { dispatch }) => {
  try {
    const res = await api.get(`${NEXT_APP_BASE_URL}/menu-category?pagination=false&fetchCategoriesHavingItems=true&sortBy=order&sortDirection=1`);
    dispatch(clearCatagories())
    res?.data?.data?.docs.map((category: any) =>
      dispatch(getCatageorysWithItems(category))
    );
    return res?.data?.data;
  } catch (error) {
    console.error(error);
  }
});

export const getCatageorysWithItems = createAsyncThunk("menu/getCatageorysWithItems", async (category: any) => {
  try {
    const res = await api.get(`${NEXT_APP_BASE_URL}/menu-item?categoryId=${category._id}&pagination=false&sortBy=order&sortDirection=1&active=true`);
    return { ...res?.data?.data, ...category };
  } catch (error) {
    console.error(error);
  }
});
