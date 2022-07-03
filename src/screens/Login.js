import React from 'react';
import tw from 'twrnc';
import logo from '../assets/logo-blue.png';
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {login} from '~reducer/auth';
import InputForm from '~components/InputForm';
import {useForm, Controller} from 'react-hook-form';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const {isLoggedIn, user} = useSelector(state => state.auth);

  const handleLogin = async form => {
    dispatch(login(form));
  };
  return (
    <View
      style={tw.style(
        'flex h-full bg-white justify-center items-center px-10',
      )}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Image source={logo} style={tw`h-32 mb-7`} resizeMode="contain" />
        <Text
          style={tw.style('text-xl', {
            fontFamily: 'Raleway',
            fontWeight: '800',
          })}>
          Login
        </Text>
        <InputForm
          control={control}
          name="username"
          field="Username"
          placeholder="Username"
          rules={{required: 'Tidak Boleh Kosong'}}
        />
        <InputForm
          control={control}
          secureTextEntry={true}
          name="password"
          field="Password"
          placeholder="Password"
          rules={{required: 'Tidak Boleh Kosong'}}
        />
        <TouchableOpacity
          style={tw`bg-blue-500 p-3 rounded-md mt-8 flex flex-row justify-center items-center`}
          onPress={handleSubmit(handleLogin)}>
          <Text style={tw`text-white mr-2 text-lg`}>Masuk</Text>
          <Ionicons name="log-in-outline" size={24} color="#ffffff" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
