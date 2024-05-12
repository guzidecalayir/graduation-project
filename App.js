import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import philanthropistView from "./src/view/philanthropistView";
import homeScreenView from './src/view/homeScreenView';
import signInViewStudent from './src/view/signInViewStudent';
import signUpViewStudent from './src/view/signUpViewStudent';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Sign Up Screen" component={signUpViewStudent} />
        <Stack.Screen name = "Home Screen" component={homeScreenView} />
        <Stack.Screen name = "Profile Philianthropist" component ={philanthropistView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
