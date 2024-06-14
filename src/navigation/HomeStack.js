import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import RestaurantView from '../view/RestaurantView';
import RestaurantInfoView from '../view/RestaurantInfoView';

const HomeStack = createStackNavigator();

function HomeStackScreen({ userType }) {
  console.log('HomeStack:'+ userType);
  return (
    <HomeStack.Navigator initialRouteName="Geri">
      <HomeStack.Screen name="Geri" options={{ headerShown: false }}>
        {(props) => <BottomTabNavigator {...props} userType={userType} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Restoranlar" component={RestaurantView} options={{ headerShown: true }} />
      <HomeStack.Screen name="Restoran Detay" component={RestaurantInfoView} options={{ headerShown: true }} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;