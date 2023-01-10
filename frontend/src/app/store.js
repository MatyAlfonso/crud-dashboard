import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import giveawaysReducer from '../features/giveaways/giveawaysSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    giveaways: giveawaysReducer
  },
});
