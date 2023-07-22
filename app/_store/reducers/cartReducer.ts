import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from '../interfaces';
import { addToCart, getCartItems } from '../thunk/cart.thunk';

const initialState: CartState = {
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
    builder.addCase(getCartItems.fulfilled, (state, { payload }: PayloadAction<any>) => {
      state.data = payload;
      state.loading = false;
    });
    builder.addCase(getCartItems.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getCartItems.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addToCart.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addToCart.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(addToCart.pending, (state) => {
      state.loading = true;
    });
  },

});

export const {
  clearCart
} = menuCatageorySlice.actions;

export default menuCatageorySlice.reducer;
