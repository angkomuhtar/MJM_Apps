import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  login: false,
  type: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    doLogin: (state, action) => {
      const {username, pass} = action.payload;
      state.login = true;
      state.type = username;
    },
    setLogout: state => {
      state.login = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {doLogin, setLogout} = authSlice.actions;

export const authState = state => {
  state.auth.login;
};

export default authSlice.reducer;
