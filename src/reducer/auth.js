import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import ApiCall from '~commons/apiCall';

export const login = createAsyncThunk(
  'auth/login',
  async ({username, password}) => {
    try {
      const resp = await ApiCall.post(`signin`, {
        username,
        password,
      });
      return resp.data;
    } catch (error) {}
  },
);

export const logout = createAsyncThunk(
  'auth/login',
  async ({username, password}) => {
    try {
      const resp = await ApiCall.post(`signin`, {
        username,
        password,
      });
      return resp.data;
    } catch (error) {}
  },
);

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
  },
});

const {reducer} = authSlice;

export default reducer;
