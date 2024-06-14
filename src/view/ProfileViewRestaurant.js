import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, FlatList } from 'react-native';

import apiRestaurant from '../service/apiRestaurant';
import apiMaps from '../service/apiMaps';
import { AuthContext } from '../context/AuthContext';

const ProfileViewRestaurant = ({ navigation }) => {
  const { userToken } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [neighbourhood, setNeighbourhood] = useState('');
  const [street, setStreet] = useState('');
  const [building, setBuilding] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await apiRestaurant.getProfile(userToken);
        console.log('Profil', response)
        const { name, latitude, longitude, email} = response;
        setName(name);
        const { city, district, neighbourhood, street, building } = await apiMaps.getAddress(latitude, longitude);
        setCity(city);
        setDistrict(district);
        setNeighbourhood(neighbourhood);
        setStreet(street);
        setBuilding(building);
        setEmail(email);
        console.log(city)
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userToken]);

  const profileArray = [
    { label: 'Restoran Adı', value: name },
    { label: 'İl', value: city },
    { label: 'İlçe', value: district },
    { label: 'Mahalle', value: neighbourhood },
    { label: 'Sokak', value: street },
    { label: 'Bina', value: building },
    { label: 'Email', value: email },
  ];

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profilim</Text>
      {loading? (
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

export default ProfileViewRestaurant;