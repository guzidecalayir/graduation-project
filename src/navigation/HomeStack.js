import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import RestaurantView from '../view/RestaurantView';





const homeStack = createStackNavigator();

function HomeStack() {
  return (
   
      <homeStack.Navigator initialRouteName='Bottom'>
        <homeStack.Screen name="Geri" component={BottomTabNavigator} options={{ headerShown: false, headerTitle: null }} />
        <homeStack.Screen name="Restaurant" component={RestaurantView} options={{ headerShown: true}} />
      </homeStack.Navigator>
    
  );
}

export default HomeStack;