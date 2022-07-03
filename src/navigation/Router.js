import React, {useEffect} from 'react';
import AppStack from './AppStack';
import {useSelector} from 'react-redux';
import {extendTheme, NativeBaseProvider} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screen
import {Login} from '~screens';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Router = () => {
  const navigation = useNavigation();
  const theme = extendTheme({
    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: 'Raleway',
      body: 'Raleway',
      mono: 'Raleway',
    },
  });
  const {isLoggedIn, user} = useSelector(state => state.auth);

  return (
    <NativeBaseProvider>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="mainApp"
            component={AppStack}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};
// const Router = () => {
//   const theme = extendTheme({
//     // Make sure values below matches any of the keys in `fontConfig`
//     fonts: {
//       heading: 'Raleway',
//       body: 'Raleway',
//       mono: 'Raleway',
//     },
//   });
//   const login = useSelector(state => state.auth.login);
//   return (
//     <Stack.Navigator>
//       {/* <NavigationContainer onReady={() => RNBootSplash.hide()}> */}
//       <NativeBaseProvider>
//         <Stack.Screen name="Auth" component={Login} />
//         <Stack.Screen name="MainApp" />
//       </NativeBaseProvider>
//     </Stack.Navigator>
//     // </NavigationContainer>
//   );
// };

export default Router;
