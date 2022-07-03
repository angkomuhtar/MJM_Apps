import {configureStore} from '@reduxjs/toolkit';
import authReducer from './reducer/auth';

import {composeWithDevTools} from 'redux-devtools-extension';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});
