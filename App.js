import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {store} from './src/store';
import Stack from './src/navigation/Stack';

const App = () => {
  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
};

export default App;
