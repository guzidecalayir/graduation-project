import { AuthContext } from '../context/AuthContext';
import React from 'react';
import { useContext } from 'react';

const LogOut = ({ navigation }) => {
    
 const { logout } = useContext(AuthContext);
    logout();
      

};

export default LogOut;