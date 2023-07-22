import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { itemState } from '../interfaces';
import { addToCart, getCartItems } from '../thunk/cart.thunk';
import { getItem } from '../thunk/item.thunk';

const initialState: itemState = {
  data: {},
  loading: false,
  error: null,
};

const menuCatageorySlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getItem.fulfilled, (state, { payload }: PayloadAction<any>) => {
      state.data = payload;
      state.loading = false;
    });
    builder.addCase(getItem.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getItem.pending, (state) => {
      state.loading = true;
    });
  },

});

export const {
  clearCart
} = menuCatageorySlice.actions;

export default menuCatageorySlice.reducer;
