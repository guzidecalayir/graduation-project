import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';

import SignUpViewStudent from './src/view/SignUpViewStudent';
import SignUpViewPhilanthropist from './src/view/SignUpViewPhilanthropist';
import SignUpViewRestaurant from './src/view/SignUpViewRestaurant';
import SignInViewStudent from './src/view/SignInViewStudent';
import SignInViewPhilanthropist from './src/view/SignInViewPhilanthropist';
import SignInViewRestaurant from './src/view/SignInViewRestaurant';
import SignInView from './src/view/SignInView';
import SignUpView from './src/view/SignUpView';
import JointPage from './src/view/JointPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Sign Up Page" component={SignUpTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Sign In Page" component={SignInTabNavigator} options={{ headerShown: false }} /> */}
          <Stack.Screen name="Joint Page" component={JointPage} options={{ headerShown: false }}  />
          <Stack.Screen name="Sign In" component={SignInView} options={{ headerShown: false }}  />
          <Stack.Screen name="Sign Up" component={SignUpView} options={{ headerShown: false }}  />
          <Stack.Screen name="Sign Up Student" component={SignUpViewStudent} options={{ headerShown: false }}  />
          <Stack.Screen name="Sign In Student" component={SignInViewStudent} options={{ headerShown: false }}  />
          <Stack.Screen name="Sign Up Philanthropist" component={SignUpViewPhilanthropist} options={{ headerShown: false }}  />
          <Stack.Screen name="Sign In Philanthropist" component={SignInViewPhilanthropist} options={{ headerShown: false }}  />
          <Stack.Screen name="Sign Up Restaurant" component={SignUpViewRestaurant} options={{ headerShown: false }}  />
          <Stack.Screen name="Sign In Restaurant" component={SignInViewRestaurant} options={{ headerShown: false }}  />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

// const Tab = createMaterialTopTabNavigator();

// function SignInTabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarActiveTintColor: 'blue',
//         tabBarInactiveTintColor: 'gray',
//         tabBarLabelStyle: styles.label,
//         tabBarStyle: styles.tabBar,
//       }}
//     >
//       <Tab.Screen
//         name="Giriş Yap Öğrenci"
//         component={SignInViewStudent}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="person" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Giriş Yap Yardımsever"
//         component={SignInViewPhilanthropist}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="heart" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Giriş Yap Restoran"
//         component={SignInViewRestaurant}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="restaurant" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function SignUpTabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarActiveTintColor: 'blue',
//         tabBarInactiveTintColor: 'gray',
//         tabBarLabelStyle: styles.label,
//         tabBarStyle: styles.tabBar,
//       }}
//     >
//       <Tab.Screen
//         name="Kayıt Ol Öğrenci"
//         component={SignUpViewStudent}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="person" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Kayıt Ol Yardımsever"
//         component={SignUpViewPhilanthropist}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="heart" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Kayıt Ol Restoran"
//         component={SignUpViewRestaurant}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="restaurant" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }



const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#F8F8F8',
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 11,
    fontWeight: 'bold',
  },
});
