import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreenView from '../view/HomeScreenView';


const Stack = createStackNavigator();

function HomeStack() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreenView} options={{ headerShown: false }} />
      </Stack.Navigator>
    
  );
}

export default HomeStack;