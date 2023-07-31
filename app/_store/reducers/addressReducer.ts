import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddressState } from '../interfaces';

const initialState: AddressState = {
    lng: 127.7669,
    lat: 35.9078,
    description:""
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    updateAddress: (state, action: PayloadAction<any>) => {
        state.lat=action.payload.lat
        state.lng=action.payload.lng
        state.description=action.payload.description
   
      },
    },
  }


);

export const {
    updateAddress
} = addressSlice.actions;

export default addressSlice.reducer;
