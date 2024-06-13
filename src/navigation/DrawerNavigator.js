import React, { useContext } from 'react';
import { StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthContext } from '../context/AuthContext';

import LogOut from '../view/LogOut';
import AddMenuItemView from '../view/AddMenuItemView';
import DemandView from '../view/DemandView';
import QRCodeView from '../view/QRCodeView';
import HomeStack from './HomeStack';
import PaymentView from '../view/PaymentView';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const Drawer = createDrawerNavigator();

const drawerScreensConfig = {
  student: [
    { name: "Ana Sayfa", component: HomeStack,  icon: (color, size) => <Ionicons name="restaurant" size={size} color={color} /> },
    { name: "Talepler", component: DemandView, icon: (color, size) => <FontAwesome name="list-alt" size={size} color={color} /> },
    { name: "QR Kod", component: QRCodeView, icon: (color, size) => <AntDesign name="qrcode" size={size} color={color} /> },
  ],
  philanthropist: [
    { name: "Ana Sayfa", component: HomeStack, icon: (color, size) => <Ionicons name="restaurant" size={size} color={color} /> },
    { name: "Talepler", component: DemandView, icon: (color, size) => <FontAwesome name="list-alt" size={size} color={color} /> },
    { name: "Bağış Yap", component: PaymentView, icon: (color, size) => <FontAwesome5 name="donate" size={24} color="black" /> },
  ],
  restaurant: [
    { name: "Ana Sayfa", component: HomeStack, icon: (color, size) => <Ionicons name="restaurant" size={size} color={color} /> },
    { name: "Talepler", component: DemandView, icon: (color, size) => <FontAwesome name="list-alt" size={size} color={color} /> },
    { name: "Menü Güncelle", component: AddMenuItemView, icon: (color, size) => <Entypo name="add-to-list" size={size} color={color} /> },
  ],
};


const DrawerNavigator = () => {
  const { userType } = useContext(AuthContext);
  const screens = drawerScreensConfig[userType];

  if (!screens) {
    return null; 
  }
console.log('Drawer:'+ userType)
  return (
    
    <Drawer.Navigator initialRouteName="Ana Sayfa">
      {screens.map((screen, index) => (
        <Drawer.Screen
          key={index}
          name={screen.name}
          options={{
            drawerIcon: ({ color, size }) => screen.icon(color, size),
          }}
        >
          {props => <screen.component {...props} userType={userType} />}
    </Drawer.Screen>
      ))}
      <Drawer.Screen
        name= "Çıkış Yap"
        component={LogOut}
        options={{
          drawerIcon: ({ color, size }) =><MaterialIcons name="logout" size={size} color={color} />,
        }}>
      </Drawer.Screen>
      
      
    </Drawer.Navigator>
  );
};
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