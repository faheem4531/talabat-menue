import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomerState, RestaurantState } from '../interfaces';
import { getRestaurants } from '../thunk/restaurant.thunk';
import { getCustomerData } from '../thunk/customer.thunk';

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
    builder.addCase(getCustomerData.fulfilled, (state, { payload }: PayloadAction<any>) => {
      state.data = payload;
      state.loading = false;
    });
    builder.addCase(getCustomerData.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getCustomerData.pending, (state) => {
      state.loading = true;
    });
  },

});

export const {
} = customerSlice.actions;

export default customerSlice.reducer;
