import { combineReducers, configureStore } from '@reduxjs/toolkit';
import coursesSlice from './courses-slice';

const rootReducer = combineReducers({
  [coursesSlice.name]: coursesSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
});


export type AppStore = typeof store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
