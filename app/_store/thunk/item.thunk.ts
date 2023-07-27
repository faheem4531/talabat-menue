import { createAsyncThunk } from "@reduxjs/toolkit";

import { NEXT_APP_BASE_URL } from '@/app/_lib/constants';
import api from '@/app/_services/api';

export const getItem = createAsyncThunk("item/getItem", async (id: string, { dispatch }) => {
  try {
    const res = await api.get(`${NEXT_APP_BASE_URL}/menu-item/${id}`);
    return res?.data?.data;
  } catch (error) {
    console.error(error);
  }
});