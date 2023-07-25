import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomerState } from '../interfaces';
import {  } from '../thunk/customer.thunk';
import { confirmOtp } from '../thunk/user';

const initialState: CustomerState = {
  data: null,
  loading: false,
  error: null,
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(confirmOtp.fulfilled, (state, { payload }: PayloadAction<any>) => {
      state.data = payload;
      state.loading = false;
    });
    builder.addCase(confirmOtp.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(confirmOtp.pending, (state) => {
      state.loading = true;
    });
  },

});

export const {
} = customerSlice.actions;

export default customerSlice.reducer;
