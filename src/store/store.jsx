import { configureStore } from '@reduxjs/toolkit';
import onThiReducer from './onThiSlice';

export const store = configureStore({
  reducer: {
    onThi: onThiReducer
  }
});