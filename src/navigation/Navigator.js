import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import React, {useContext} from 'react';
import { AuthContext } from "../context/AuthContext";
import { ActivityIndicator, View } from "react-native";
import SignStack from "./SignStack";

export default function Navigator(){
    const {isLoading, userToken, userType} = useContext(AuthContext);
    if(isLoading){
        return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'}/>
        </View>
        );
    }
    return( 
            <NavigationContainer>
            { userToken !== null ? <DrawerNavigator userType={userType} /> : <SignStack /> }
            </NavigationContainer>
        
    )
}