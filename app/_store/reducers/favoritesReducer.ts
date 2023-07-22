import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteState } from '../interfaces';

const initialState: FavoriteState = {
  data: [],
};

const favoriteSlice = createSlice({
  name: 'favoriteItem',
  initialState,
  reducers: {
       updateFavorites: (state, action: PayloadAction<string>) => {
      const item = state.data.find((item)=> item===action.payload)

      if(item === undefined)
      { state.data = [...state.data, action.payload]}
      else   
      {state.data = state.data.filter((item)=> item !== action.payload)}
 
    },
  },


});

export const {
  updateFavorites
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
