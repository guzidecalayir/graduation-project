
import React, { useEffect, useState, useContext, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import apiStudent from '../service/apiStudent';
import Student from '../model/Student';

const ProfileViewStudent = () => {
  const { userToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  
  const myUserRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user= await apiStudent.getProfile(userToken);
        console.log('user',user)
        
        const studentInstance = new Student(
          user.firstName,
          user.lastName,
          user.school,
          user.phoneNumber,
          user.birthDate,
          user.email,
          user.password
          
        );
        myUserRef.current = studentInstance;
        
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userToken]);

  const renderItem = ({ item }) => (
    <View style={styles.fieldContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{item.label}</Text>
      </View>
      <View style={styles.fieldBorder}>
        <Text style={styles.field}>{item.value}</Text>
      </View>
    </View>
  );

  const profileArray = [
    { label: 'Ad', value: myUserRef.current ? myUserRef.current.firstName : '' },
    { label: 'Soyad', value: myUserRef.current ? myUserRef.current.lastName : '' },
    { label: 'Üniversite', value: myUserRef.current ? myUserRef.current.school : '' },
    { label: 'Telefon Numarası', value: myUserRef.current ? myUserRef.current.phoneNumber: '' },
    { label: 'Doğum Günü', value: myUserRef.current ? myUserRef.current.birthDate: '' },
    { label: 'Email', value: myUserRef.current ? myUserRef.current.email : ''},
    
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profilim</Text>
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={profileArray}
          renderItem={renderItem}
          keyExtractor={(item) => item.label}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fieldContainer: {
    width: '100%',
    marginBottom: 15,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  labelContainer: {
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    color: '#332',
  },
  fieldBorder: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  field: {
    fontSize: 16,
    color: '#000',
  },
  loadingText: {
    fontSize: 18,
    color: '#666',
  },
  flatListContainer: {
    width: '100%',
  },
});

export default ProfileViewStudent;
