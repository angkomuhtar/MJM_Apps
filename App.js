import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Splash from './src/screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
