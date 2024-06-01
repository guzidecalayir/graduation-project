
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreenView from "../view/HomeScreenView";
import ProfileViewPhilanthropist from "../view/ProfileViewPhilanthropist";
import ProfileViewRestaurant from "../view/ProfileViewRestaurant";
import ProfileViewStudent from "../view/ProfileViewStudent";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function BottomTabNavigator({ userType }) {
    console.log('Bottom:'+ userType)
    let ProfileComponent;
    console.log(userType)
    if (userType === 'philanthropist') {
      ProfileComponent = ProfileViewPhilanthropist;
    } else if (userType === 'restaurant') {
      ProfileComponent = ProfileViewRestaurant;
    } else if (userType === 'student') {
      ProfileComponent = ProfileViewStudent;
    } else {
      ProfileComponent = ProfileViewStudent; // or any default component
    }
  
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused, size }) => {
            let iconName;
            if (route.name === "Ana Sayfa") {
              iconName = focused ? "home" : "home-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === "Profil") {
              iconName = focused ? "user-circle" : "user-circle-o";
              return <FontAwesome name={iconName} size={size} color={color} />;
            }
          },
        })}
      >
        <Tab.Screen name="Ana Sayfa" component={HomeScreenView} options={{ headerShown: false }} />
        <Tab.Screen name="Profil" component={ProfileComponent} options={{ headerShown: false }} />
      </Tab.Navigator>
    );
  }
  

export default BottomTabNavigator;