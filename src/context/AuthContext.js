import React, { createContext, useState } from 'react';
import PhilanthropistViewModel from '../viewmodel/PhilanthropistViewModel';
import { Alert } from 'react-native';
import StudentViewModel from '../viewmodel/StudentViewModel';
import RestaurantViewModel from '../viewmodel/RestaurantViewModel';
import apiPhilanthropist from '../service/apiPhilanthropist';
import apiRestaurant from '../service/apiRestaurant';
import apiStudent from '../service/apiStudent';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userType, setUserType] = useState(null);
    const [userProfile, setUserProfile] = useState(null);

    const login = async (email, password, userType) => {
        setIsLoading(true);
        if(userType==='philanthropist'){
            try {
                const data = { email, password };
                const token = await PhilanthropistViewModel.mapPhilanthropistSignInData(data);
                setUserToken(token);
                setUserType(userType);
                const user = await apiPhilanthropist.getProfile(token);
                setUserProfile(user);

            } catch (error) {
                console.error('Error while logging in:', error);
                Alert.alert('Error', 'Failed to log in.');
            } finally {
                setIsLoading(false);
            }
        }else if(userType==='student'){
            try {
                const data = { email, password };
                const token = await StudentViewModel.mapStudentSignInData(data);
                setUserToken(token);
                setUserType(userType);
                const user = await apiStudent.getProfile(token);
                setUserProfile(user);
            } catch (error) {
                console.error('Error while logging in:', error);
                Alert.alert('Error', 'Failed to log in.');
            } finally {
                setIsLoading(false);
            }
        }else if(userType==='restaurant'){
            try {
                const data = { email, password };
                const token = await RestaurantViewModel.mapRestaurantSignInData(data);
                setUserToken(token);
                setUserType(userType);
                const user = await apiRestaurant.getProfile(token);
                setUserProfile(user);
            } catch (error) {
                console.error('Error while logging in:', error);
                Alert.alert('Error', 'Failed to log in.');
            } finally {
                setIsLoading(false);
            }
        }
       
    };

    const logout = () => {
        setUserToken(null);
        setUserType(null);
        setIsLoading(false);
    };

    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userToken, userType, userProfile }}>
            {children}
        </AuthContext.Provider>
    );
};