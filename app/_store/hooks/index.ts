'use client';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../interfaces'
import { AnyAction, Store, ThunkDispatch } from '@reduxjs/toolkit';


export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
  dispatch: AppThunkDispatch;
};

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector