import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {useSelector} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import {extendTheme, NativeBaseProvider} from 'native-base';

const Stack = () => {
  const theme = extendTheme({
    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: 'Raleway',
      body: 'Raleway',
      mono: 'Raleway',
    },
  });
  const login = useSelector(state => state.auth.login);
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <NativeBaseProvider>
        {login ? <AppStack /> : <AuthStack />}
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default Stack;
