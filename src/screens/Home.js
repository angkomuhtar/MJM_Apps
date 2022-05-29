import {View, Text} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const Home = () => {
  return (
    <View>
      <Text style={tw`text-red-500`}>Home Screen</Text>
    </View>
  );
};

export default Home;
