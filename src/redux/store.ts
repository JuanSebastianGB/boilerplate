import { AppStore } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './states';

export default configureStore<AppStore>({
  reducer: {
    user: userSlice,
  },
});
