import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from '../interfaces';
import { addToCart, getCartItems } from '../thunk/cart.thunk';

const initialState: CartState = {
  cart: null,
  items: [],
  discount: '',
  userMustAuth: false,

  loading: false,
};

const menuCatageorySlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = null;
      state.items = [];
      state.discount = '';
      state.userMustAuth = false
    },

    addItem: (state, { payload }) => {

      const { quantity, menuItem } = payload;
      const { menuItemId } = menuItem;

      if (!menuItemId) {
        return
      }

      const itemExists = state.items.findIndex(item => item?.menuItem?.menuItemId === menuItemId)
      if (itemExists !== -1) {
        state.items[itemExists].quantity += quantity;
      }
      if (itemExists === -1 && quantity > 0) {
        state.items = [...state.items, payload];
      }

    },

    addNewItem: (state, { payload }) => {
      const { quantity } = payload;
      if (quantity > 0) {
        state.items = [...state.items, payload];
      }
    },

    removeItem: (state, { payload }) => {
      const { id } = payload;
      if (!id) {
        return
      }
      const itemExists = state.items.findIndex(item => item?.menuItem?.menuItemId == id)

      if (itemExists !== -1) {
        if (state.items[itemExists].quantity <= 1) {
          state.items.splice(itemExists, 1)
        } else {
          state.items[itemExists].quantity -= 1;
        }
      }

    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.fulfilled, (state, { payload }: PayloadAction<any>) => {
      state.cart = payload;
      state.loading = false;
    });
    builder.addCase(getCartItems.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getCartItems.pending, (state) => {
      state.loading = true;
    });

  },

});

export const {
  clearCart,
  addItem,
  removeItem,
  addNewItem
} = menuCatageorySlice.actions;

export default menuCatageorySlice.reducer;
