import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import philanthropist from '../service/api_philanthropist'; 

const ProfilePhilanthropist = () => {
  const [philanthropists, setPhilanthropists] = useState([]);

  useEffect(() => {
    async function fetchPhilanthropistData() {
      try {
        const data = await philanthropist.fetchPhilanthropistData();
        setPhilanthropists(data);
      } catch (error) {
        console.error('Error fetching philanthropist data:', error);
      }
    }

    fetchPhilanthropistData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Philanthropist Profiles</Text>
      {philanthropists.map((philanthropist) => (
        <View key={philanthropist.id} style={styles.profileContainer}>
          <Text>ID: {philanthropist.id}</Text>
          <Text>Name: {philanthropist.firstName} {philanthropist.lastName}</Text>
          <Text>Email: {philanthropist.e_mail}</Text>
          <Text>Phone Number: {philanthropist.phoneNumber}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
  },
});

export default ProfilePhilanthropist;
