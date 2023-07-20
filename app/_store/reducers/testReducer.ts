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
  }
});

export const {
} = testSlice.actions;

export default testSlice.reducer;
