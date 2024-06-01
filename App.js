import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './src/navigation/Navigator';
import { AuthProvider } from './src/context/AuthContext';




export default function App() {
  
  return (
  <AuthProvider>
  <Navigator />
  </AuthProvider>
  );
}

const styles = StyleSheet.create({});
