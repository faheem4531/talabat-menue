import { createAsyncThunk } from "@reduxjs/toolkit";

import { NEXT_APP_BASE_URL } from '@/app/_lib/constants';
import api from '@/app/_services/api';

export const getRestaurants = createAsyncThunk("restaurant/getRestaurant", async () => {
    try {
      const res = await api.get(`${NEXT_APP_BASE_URL}/restaurant`);   
      return res?.data?.data;
    } catch (error) {
      console.error(error);
    }
  });

export const getDefaultRestaurant = createAsyncThunk("restaurant/getDefaultRestaurant", async () => {
    try {
      const res = await api.get(`${NEXT_APP_BASE_URL}/restaurant`);
      console.log(res?.data?.data?.docs?.[0], "response: ");
      return res?.data?.data?.docs?.[0];
    } catch (error) {
      console.error(error);
    }
  });