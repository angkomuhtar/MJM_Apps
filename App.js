import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {store} from './src/store';
import Home from './src/screens/Home';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={tw`bg-white h-full`}>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
