import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import DemandView from '../view/DemandView';
import QRCodeView from '../view/QRCodeView';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import AddMenuItemView from '../view/AddMenuItemView';
import PaymentView from '../view/PaymentView';
import { FontAwesome5 } from '@expo/vector-icons';
import SignStack from './SignStack';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const handleLogout = () => {
    // Çıkış yapma işlemini burada gerçekleştirin
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: () => (
          <Ionicons
            name="restaurant" 
            size={32}
            color="black"
          />)
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Anasayfa" component={HomeStack} options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="restaurant" size={size} color={color} />
        )}}
      />
      <Drawer.Screen name="Talepler" component={DemandView} options={{
        drawerIcon: ({ color, size }) => (
          <FontAwesome name="list-alt" size={size} color={color} />
        )}}
      />
      <Drawer.Screen name="QR Kod" component={QRCodeView} options={{
        drawerIcon: ({ color, size }) => (
          <AntDesign name="qrcode" size={size} color={color} />
        )}}
      />
      <Drawer.Screen name="Menü Güncelle" component={AddMenuItemView} options={{
        drawerIcon: ({ color, size }) => (
          <Entypo name="add-to-list" size={size} color={color} />
        )}}
      />
      <Drawer.Screen name="Bağış Yap" component={PaymentView} options={{
        drawerIcon: ({ color, size }) => (
          <FontAwesome5 name="donate" size={24} color="black" />
        )}}
      />
      <Drawer.Screen name="GirişKayıt" component={SignStack} options={{
        drawerIcon: ({ color, size }) => (
          <AntDesign name="enter" size={24} color="black" />
        )}}
      />
    </Drawer.Navigator>
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