import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import HomeStack from './src/navigation/HomeStack';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  
  return (

  <DrawerNavigator />
  );
}

const styles = StyleSheet.create({});
