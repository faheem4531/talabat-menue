import { createAsyncThunk } from "@reduxjs/toolkit";
import { NEXT_APP_BASE_URL } from '@/app/_lib/constants';
import api from '@/app/_services/api';

interface ConfirmOtpParams {
    phoneNumber: string
    verificationId: number
    otp: number
}

export const phoneNumberExists = createAsyncThunk("customer/phoneNumber", async (phone: string) => {
    try {
      const res = await api.get(`${NEXT_APP_BASE_URL}/customer?phoneNumber=${phone}`);
      return res?.data?.data;
    } catch (error) {
      console.error(error);
    }
  });

export const requestOtp = createAsyncThunk("auth/request-otp", async (phone: string) => {
    try {
      const res = await api.post(`${NEXT_APP_BASE_URL}/auth/request-otp`, { phoneNumber: phone });
      return res?.data?.data;
    } catch (error) {
      console.error(error);
    }
  });

export const confirmOtp = createAsyncThunk("auth/confirm-otp", async ({ phoneNumber, verificationId, otp }: ConfirmOtpParams) => {
    try {
      const res = await api.post(`${NEXT_APP_BASE_URL}/auth/verify-customer-otp`, {
        code : "FMJLAL2ZOC", phoneNumber,
        supplierId : "63d325e7070c6883f8d3b808",
        verificationCode: Number(otp), 
        verificationId
      });
      return res?.data?.data;
    } catch (error) {
      console.error(error);
    }
  });