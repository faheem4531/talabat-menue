import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuCatageoryState } from '../interfaces';
import { getCatageorysWithItems, getMenuCatageorys } from '../thunk/menuCatageory.thunk';

const initialState: MenuCatageoryState = {
  data: {},
  catagories: [],
  loading: false,
  error: null,
};

const menuCatageorySlice = createSlice({
  name: 'menuCatageory',
  initialState,
  reducers: {
    clearCatagories: (state) => {
      state.catagories = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMenuCatageorys.fulfilled, (state, { payload }: PayloadAction<any>) => {
      state.data = payload;
      state.loading = false;
    });
    builder.addCase(getMenuCatageorys.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getMenuCatageorys.pending, (state) => {
      state.loading = false;
    });

    builder.addCase(getCatageorysWithItems.fulfilled, (state, { payload }: PayloadAction<any>) => {
      const newArray = [...state.catagories, payload]
      state.catagories = newArray;
      state.loading = false;
    });
    builder.addCase(getCatageorysWithItems.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getCatageorysWithItems.pending, (state) => {
      state.loading = false;
    });
  },

});

export const {
  clearCatagories
} = menuCatageorySlice.actions;

export default menuCatageorySlice.reducer;
