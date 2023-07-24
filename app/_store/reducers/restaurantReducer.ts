import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RestaurantState } from '../interfaces';
import { getRestaurants } from './../thunk/restaurant.thunk';

const initialState: RestaurantState = {
    data: [],
    loading: false,
    error: null,
    selectedId: ""
  };
  
  const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
      setSelectedRestaurant: (state, action: PayloadAction<string>) => {
        state.selectedId = action.payload  
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getRestaurants.fulfilled, (state, { payload }: PayloadAction<any>) => {
        state.data = payload;
        state.loading = false;
      });
      builder.addCase(getRestaurants.rejected, (state) => {
        state.loading = false;
      });
      builder.addCase(getRestaurants.pending, (state) => {
        state.loading = true;
      });
    },
  
  });
  
  export const {
    setSelectedRestaurant
  } = restaurantSlice.actions;
  
  export default restaurantSlice.reducer;
  