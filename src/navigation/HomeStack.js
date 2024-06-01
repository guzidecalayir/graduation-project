import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import RestaurantView from '../view/RestaurantView';

const HomeStack = createStackNavigator();

function HomeStackScreen({ userType }) {
  console.log('HomeStack:'+ userType);
  return (
    <HomeStack.Navigator initialRouteName="BottomTab">
      <HomeStack.Screen name="BottomTab" options={{ headerShown: false }}>
        {(props) => <BottomTabNavigator {...props} userType={userType} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Restaurant" component={RestaurantView} options={{ headerShown: true }} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;