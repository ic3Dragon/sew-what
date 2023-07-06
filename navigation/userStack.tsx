import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import MyGallery from '../screens/MyGallery';
import NewPattern from '../screens/NewPattern';
import Explore from '../screens/Explore';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="My Gallery" component={ MyGallery } />
        <Stack.Screen name="New Pattern" component={ NewPattern } />
        <Stack.Screen name="Explore" component={ Explore } />
      </Stack.Navigator>
    
    </NavigationContainer>
  )
}