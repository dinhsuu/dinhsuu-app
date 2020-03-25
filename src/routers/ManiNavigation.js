import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../screen/Login';
import Main from '../screen/Main';
import SignUp from '../screen/SignUp';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Loadding" component={Loadding} /> */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default function ManiNavigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
