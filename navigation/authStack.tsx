import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/Welcome';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={ WelcomeScreen } />
        <Stack.Screen name="Sign In" component={ SignInScreen } />
        <Stack.Screen name="Sign Up" component={ SignUpScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}