import {
  Image,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import logo from '../assets/logo-blue.png';

const Login = () => {
  return (
    <SafeAreaView
      style={tw`h-full bg-white flex justify-center items-center p-4`}>
      <Image source={logo} style={tw`h-32 mb-7`} resizeMode="contain" />
      <View style={tw`px-10 w-full py-1`}>
        <Text style={{fontFamily: 'raleway', fontWeight: '600', fontSize: 14}}>
          Username
        </Text>
        <TextInput
          placeholder="Username"
          style={tw`w-full border border-blue-400 rounded-lg my-2 p-2`}
        />
      </View>
      <View style={tw`px-10 w-full py-1`}>
        <Text style={{fontFamily: 'raleway', fontWeight: '600', fontSize: 14}}>
          Password
        </Text>
        <TextInput
          placeholder="Password"
          style={tw`w-full border border-blue-400 rounded-lg my-2 p-2`}
        />
        <TouchableOpacity>
          <Text style={tw`text-blue-400 text-right mb-3 mr-2`}>
            Lupa Password
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`px-10 w-full py-2`}>
        <TouchableOpacity
          style={tw`bg-blue-400 w-full px-4 py-3 rounded-md flex justify-center items-center shadow-lg`}>
          <Text style={tw`text-white font-semibold text-lg uppercase`}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
