import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import JointPage from '../view/JointPage';
import SignInView from '../view/SignInView';
import SignUpView from '../view/SignUpView';
import SignUpViewStudent from '../view/SignUpViewStudent';
import SignUpViewPhilanthropist from '../view/SignUpViewPhilanthropist';
import SignUpViewRestaurant from '../view/SignUpViewRestaurant';
import SignInViewStudent from '../view/SignInViewStudent';
import SignInViewRestaurant from '../view/SignInViewRestaurant';
import SignInViewPhilanthropist  from '../view/SignInViewPhilanthropist';
import ForgotMyPasswordView from '../view/ForgotMyPasswordView';



const Stack = createStackNavigator();

function SignStack() {
  return (
   
      <Stack.Navigator initialRouteName={JointPage} options={{ headerShown: false }}>
        <Stack.Screen name="Joint Page" component={JointPage} options={{ headerShown: false }} />
        <Stack.Screen name="Sign In" component={SignInView} options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up" component={SignUpView} options={{ headerShown: false }} />
        <Stack.Screen name="Sign In Student" component={SignInViewStudent} options={{ headerShown: false }} />
        <Stack.Screen name="Sign In Restaurant" component={SignInViewRestaurant} options={{ headerShown: false }} />
        <Stack.Screen name="Sign In Philanthropist" component={SignInViewPhilanthropist} options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up Student" component={SignUpViewStudent} options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up Restaurant" component={SignUpViewRestaurant} options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up Philanthropist" component={SignUpViewPhilanthropist} options={{ headerShown: false }} /> 
        <Stack.Screen name="Forgot My Password" component={ForgotMyPasswordView} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    
  );
}

export default SignStack;