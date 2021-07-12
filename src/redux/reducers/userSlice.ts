import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../models/UserModel';

export interface UserState {
  isAuth: boolean;
  profile: UserType | {}
}

const initialState: UserState = {
  isAuth: false,
  profile: {}
};

// export const loginAsync = createAsyncThunk(
//   'user/loginAsync',
//   async (amount: number) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    updateProfile: ((state, action: PayloadAction<UserType>) => {
      state.profile = action.payload;
    })
  },
  //  extraReducers: {
  //   [loginAsync.fulfilled.toString()]: (state, action)=> {
  //     state.isAuth = action.payload;
  //   }
  // }
});

export const { login, updateProfile } = userSlice.actions;


export default userSlice.reducer;





