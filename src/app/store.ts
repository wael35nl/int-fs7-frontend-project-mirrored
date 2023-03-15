import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import countriesReducer from '../features/countries/countriesSlice';

export const store = configureStore({
  reducer: {
    counterR: counterReducer,
    countriesR: countriesReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>