import React from 'react';
import 'react-native-gesture-handler';
import {Provider, useSelector} from 'react-redux';
import {store} from '~store';
import Router from '~navigation/Router';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
