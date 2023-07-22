import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import manuCatageoryReducer from './reducers/menuCatageory';
import cartReducer from './reducers/cartReducer';
import favoritesReducer from './reducers/favoritesReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  menuCatageory: manuCatageoryReducer,
  cart: cartReducer,
  favorites: favoritesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
