import {View, Text, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import logo from '../assets/logo.png';

const Splash = () => {
  return (
    <View style={tw`h-full bg-blue-400 flex items-center justify-center`}>
      <Image source={logo} style={tw`w-40`} resizeMode="contain" />
    </View>
  );
};

export default Splash;
