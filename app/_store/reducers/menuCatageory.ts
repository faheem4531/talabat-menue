import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuCatageoryState } from '../interfaces';
import { getMenuCatageorys } from '../thunk/menuCatageory.thunk';

const initialState: MenuCatageoryState = {
  data: {},
  loading: false,
  error: null,
};

const menuCatageorySlice = createSlice({
  name: 'menuCatageory',
  initialState,
  reducers: {
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
  },
});

export const {
} = menuCatageorySlice.actions;

export default menuCatageorySlice.reducer;
