import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Gallery from '../screens/Gallery';
import NewPattern from '../screens/NewPattern';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Gallery" component={ Gallery } />
        <Stack.Screen name="New Pattern" component={ NewPattern } />
      </Stack.Navigator>
    
    </NavigationContainer>
  )
}