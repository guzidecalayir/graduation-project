import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import RestaurantInfoView from './RestaurantInfoView';

const RestaurantView = () => {
  const navigation = useNavigation(); 

  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('https://studentdesk.azurewebsites.net/api/Restaurant/get/restaurants');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
  
      
      const simplifiedRestaurants = data.map((restaurant, index) => ({
        id: restaurant.id || index.toString(), 
        name: restaurant.name,
      }));
  
      setRestaurants(simplifiedRestaurants);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      setLoading(false);
    }
  };

  const handleRestaurantPress = (restaurant) => {
    // Navigate to another screen with restaurant details, passing restaurantName if needed
    navigation.navigate('Restoran Detay', { restaurantName: restaurant.name, id:restaurant.id });
  };

  const renderRestaurantItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleRestaurantPress(item)} style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={renderRestaurantItem}
        keyExtractor={(item) => item.id.toString()} // Use 'id' as key, assuming it's unique
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#ADD8E6',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RestaurantView;