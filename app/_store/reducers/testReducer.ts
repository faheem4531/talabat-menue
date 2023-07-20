import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TestState } from '../interfaces';

const initialState: TestState = {
  test: {
    name: '',
    id: '',
  },
  loading: false,
  error: null,
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.test.name = action.payload
    },
  }
});

export const {
  setName
} = testSlice.actions;

export default testSlice.reducer;
