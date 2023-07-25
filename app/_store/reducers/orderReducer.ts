import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderState } from '../interfaces';
import { order } from '../thunk/order';

const initialState: OrderState = {
  order: null,
  loading: false
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(order.fulfilled, (state, { payload }: PayloadAction<any>) => {
      state.order = payload;
      state.loading = false;
    });
    builder.addCase(order.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(order.pending, (state) => {
      state.loading = true;
    });
  },
});

export const {
} = orderSlice.actions;

export default orderSlice.reducer;
