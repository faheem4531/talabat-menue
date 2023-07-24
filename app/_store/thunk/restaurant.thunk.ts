import { NEXT_APP_BASE_URL } from '@/app/_lib/constants';
import api from '@/app/_services/api';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurants = createAsyncThunk("restaurant/getRestaurant", async () => {
    try {
      const res = await api.get(`${NEXT_APP_BASE_URL}/restaurant`);
      return res?.data?.data;
    } catch (error) {
      console.error(error);
    }
  });