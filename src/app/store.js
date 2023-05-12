import { configureStore } from '@reduxjs/toolkit';
import { campSiteReducer } from '../features/campsites/campsitesSlice';

export const store = configureStore({
  reducer: {
    campsites: campSiteReducer,
  },
});
