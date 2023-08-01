import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LanguageState } from '../interfaces';

const initialState: LanguageState = {
  name: "ar",
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
       updateLanguage: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
  },


});

export const {
    updateLanguage
} = languageSlice.actions;

export default languageSlice.reducer;
