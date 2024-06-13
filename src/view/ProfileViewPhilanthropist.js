import React, { useEffect, useState, useContext, useRef } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import apiPhilanthropist from '../service/apiPhilanthropist';
import Philanthropist from '../model/Philanthropist';

const ProfileViewStudent = () => {
  const { userToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const myUserRef = useRef(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await apiPhilanthropist.getProfile(userToken)
        console.log(user);
        const philanthropist = new Philanthropist(
          user.firstName,
          user.lastName,
          user.email,
          user.password,
          user.phoneNumber,
          user.totalDonation
        );
        console.log(philanthropist)
        myUserRef.current = philanthropist;
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

  console.log(myUserRef);
  const profileArray = [
    { label: 'Ad', value: myUserRef.current ? myUserRef.current.firstName : '' },
    { label: 'Soyad', value: myUserRef.current ? myUserRef.current.lastName : '' },
    { label: 'Email', value: myUserRef.current ? myUserRef.current.email : '' },
    { label: 'Telefon Numarası', value: myUserRef.current ? myUserRef.current.phoneNumber : '' },
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
