
import { createAsyncThunk } from "@reduxjs/toolkit";

import { NEXT_APP_BASE_URL } from '@/app/_lib/constants';
import api from '@/app/_services/api';

export const getCustomerData = createAsyncThunk("customer/getCustomerData", async (data: any, { dispatch }) => {
  try {
    const res = await api.get(`${NEXT_APP_BASE_URL}/customer`, data);
    return res?.data?.data;
  } catch (error) {
    console.error(error);
  }
});