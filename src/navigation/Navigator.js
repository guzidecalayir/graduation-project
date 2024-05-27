import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";

export default function Navigator(){
    return(
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}