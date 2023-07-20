'use client';

import { combineReducers, createStore } from '@reduxjs/toolkit';
import testReducer from './reducers/testReducer';

const rootReducer = combineReducers({
  test: testReducer,
});

let store = createStore(rootReducer)

export default store;
export type AppDispatch = typeof store.dispatch

