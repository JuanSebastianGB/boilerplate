import { sliceTypes, User, userInitialState } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: sliceTypes.USER,
  initialState: userInitialState,
  reducers: {
    createUser: (state, action): User => action.payload,
    modifyUser: (state, action): User => ({ ...state, ...action.payload }),
    resetUser: (state, action): User => userInitialState,
  },
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
