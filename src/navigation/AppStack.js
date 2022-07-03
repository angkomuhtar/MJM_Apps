import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Stock from '../screens/Stock';
import Approval from '../screens/Approval';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'stock') {
            iconName = focused ? 'server' : 'server-outline';
          } else if (route.name === 'approval') {
            iconName = focused ? 'receipt' : 'receipt-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2bbbee',
        tabBarInactiveTintColor: '#2f2f2f',
      })}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{headerShown: false, tabBarLabel: 'HOME'}}
      />
      <Tab.Screen
        name="stock"
        component={Stock}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="approval"
        component={Approval}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
