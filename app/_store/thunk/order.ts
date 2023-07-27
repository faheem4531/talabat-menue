import { createAsyncThunk } from "@reduxjs/toolkit";

import { NEXT_APP_BASE_URL } from '@/app/_lib/constants';
import api from '@/app/_services/api';

export const order = createAsyncThunk("/order", async (data: any) => {
    const paylaod = {
      ...data,
      couponCode : "",
      deliveryAddress : {},
      orderType : "Pickup",
      source : "Website"
    }
    try {
      const res = await api.post(`${NEXT_APP_BASE_URL}/order`, paylaod);
      return res?.data?.data;
    } catch (error) {
      console.error(error);
    }
  });

export const takePayment = createAsyncThunk("/takePayment", async (data: any) => {
    try {
      const res = await api.post(`${NEXT_APP_BASE_URL}/payments/take-payment`, data);
      return res?.data?.data;
    } catch (error) {
      console.error(error);
    }
  });