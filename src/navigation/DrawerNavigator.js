import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import ProfileViewPhilanthropist from '../view/ProfileViewPhilanthropist';
import { NavigationContainer } from '@react-navigation/native';
import DemandView from '../view/DemandView';
import QRCodeView from '../view/QRCodeView';

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Ana Sayfa"
        onPress={() => navigation.navigate('Home')}
      />
      <DrawerItem
        label="Profilim"
        onPress={() => navigation.navigate('Profile')}
      />
      <DrawerItem
        label="Talepler"
        onPress={() => navigation.navigate('Demands')}
      />
      <DrawerItem
        label="QR Kod"
        onPress={() => navigation.navigate('QRCode')}
      />
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Ana Sayfa"
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Ana Sayfa" component={HomeStack} />
        <Drawer.Screen name="Profile" component={ProfileViewPhilanthropist} />
        <Drawer.Screen name="Demands" component={DemandView} />
        <Drawer.Screen name="QRCode" component={QRCodeView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    marginVertical: 10,
    marginHorizontal: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DrawerNavigator;
