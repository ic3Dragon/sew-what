import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import MyGallery from '../screens/MyGallery';
import NewPattern from '../screens/NewPattern';
import Explore from '../screens/Explore';
import Header from '../components/Header';
import { COLORS } from '../utils/constants';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.darkblue,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
        <Stack.Screen name="Explore" component={ Explore } options={{ title: 'Explore Patterns' }}/>
        <Stack.Screen name="My Gallery" component={ MyGallery } options={{ title: 'My Gallery' }}/>
        <Stack.Screen name="New Pattern" component={ NewPattern } options={{ title: 'Add New Pattern' }}/>
      </Stack.Navigator>
    
    </NavigationContainer>
  )
}