import React, { useEffect, useState } from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import PhilanthropistViewModel from  "../viewmodel/PhilanthropistViewModel";

const PhilanthropistView = () => {
  const [philanthropists, setPhilanthropists] = useState([]);

  useEffect(() => {
    async function fetchPhilanthropists() {
      try {
        const fetchedPhilanthropists = await PhilanthropistViewModel.getPhilanthropists();
        setPhilanthropists(fetchedPhilanthropists);
      } catch (error) {
        console.error('Error fetching philanthropists:', error);
      }
    }

    fetchPhilanthropists();
  }, []);

  return (
      <View style={styles.container}>
        <Text style={styles.heading}>List of Philanthropists</Text>
        <FlatList
            data={philanthropists}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text>{item.firstName} {item.lastName}</Text>
                  <Text>Email: {item.e_mail}</Text>
                  <Text>Phone Number: {item.phoneNumber}</Text>
                </View>
            )}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});

export default PhilanthropistView;