import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'twrnc';
import logo from '../assets/logo-blue.png';
import {
  Input,
  KeyboardAvoidingView,
  Button,
  VStack,
  Heading,
  Center,
  NativeBaseProvider,
  FormControl,
  Stack,
  WarningOutlineIcon,
} from 'native-base';
import {Platform} from 'react-native';
import {Image, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {doLogin} from '../reducer/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: '',
    pass: '',
  });
  console.log(form);
  return (
    <NativeBaseProvider>
      <Center flex={1} px={2}>
        <KeyboardAvoidingView
          h={{
            base: '500px',
            lg: 'auto',
          }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Center>
            <VStack flex="1" justifyContent="flex-end" w="100%">
              <Image source={logo} style={tw`h-32 mb-7`} resizeMode="contain" />
              <Heading mb="3">Login</Heading>
              <FormControl isRequired mt={5}>
                <Stack>
                  <FormControl.Label>Username</FormControl.Label>
                  <Input
                    type="text"
                    defaultValue="admin@email.com"
                    placeholder="username"
                    onChangeText={text => {
                      setForm({
                        ...form,
                        username: text,
                      });
                    }}
                  />
                  <FormControl.HelperText>
                    Must be atleast 6 characters.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    Atleast 6 characters are required.
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
              <FormControl isRequired mt={3}>
                <Stack>
                  <FormControl.Label>Password</FormControl.Label>
                  <Input
                    type="password"
                    defaultValue="12345"
                    placeholder="password"
                  />
                  <FormControl.HelperText>
                    Must be atleast 6 characters.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    Atleast 6 characters are required.
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
              <TouchableOpacity
                style={tw`bg-blue-500 p-3 rounded-md mt-3 flex flex-row justify-center items-center`}
                onPress={() => dispatch(doLogin(form))}>
                <Text style={tw`text-white mr-2 text-lg`}>Masuk</Text>
                <Ionicons name="log-in-outline" size={24} color="#ffffff" />
              </TouchableOpacity>
            </VStack>
          </Center>
        </KeyboardAvoidingView>
      </Center>
    </NativeBaseProvider>
  );
};

export default Login;
