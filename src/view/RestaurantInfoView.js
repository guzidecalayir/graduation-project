import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import apiMaps from '../service/apiMaps';

const RestaurantInfoView = ({ navigation, route }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [address, setAddress] = useState({});
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { restaurantName, id } = route.params;

  const data = { inti: id };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  useEffect(() => {
    fetchRestaurants();
    fetchMenuItems();
  }, [restaurantName, id]);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('https://studentdesk.azurewebsites.net/api/Restaurant/get/restaurants');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setRestaurants(data);
      const foundRestaurant = data.find((restaurant) => restaurant.name === restaurantName);
      setSelectedRestaurant(foundRestaurant);

      if (foundRestaurant) {
        const { city, district, neighbourhood, street, building } = await apiMaps.getAddress(foundRestaurant.latitude, foundRestaurant.longitude);
        setAddress({ city, district, neighbourhood, street, building });
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('https://studentdesk.azurewebsites.net/api/Restaurant/get/menu/items', requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setMenuItems(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching menu items:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {error ? (
        <Text style={styles.errorText}>Error: {error}</Text>
      ) : (
        selectedRestaurant ? (
          <View style={styles.card}>
            <Text style={styles.title}>{selectedRestaurant.name}</Text>
            <Text style={styles.address}>Address: {address.neighbourhood}, {address.street}, {address.building}, {address.district}, {address.city}</Text>
            <Text style={styles.titles}>Kalan Bedava Yemek Kapasitesi:{selectedRestaurant.currentFreeMeal}</Text>
            <Text style={styles.title}>Menü</Text>
            {menuItems.length > 0 ? (
              menuItems.map((menuItem, index) => (
                <View key={index} style={styles.menuItemContainer}>
                  <Text style={styles.menuItem}>{menuItem.name}</Text>
                  <Text style={styles.menuItemPrice}>{menuItem.price}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.noMenuItems}>Menü içeriği bulunamadı.</Text>
            )}
          </View>
        ) : (
          <Text style={styles.noRestaurant}>No restaurant found with name {restaurantName}</Text>
        )
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  titles: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  
  address: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  menuItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  menuItem: {
    fontSize: 18,
    color: '#333',
    flex: 1,
  },
  menuItemPrice: {
    fontSize: 18,
    color: '#333',
    textAlign: 'right',
  },
  noMenuItems: {
    fontSize: 18,
    textAlign: 'center',
    color: '#888',
  },
  noRestaurant: {
    fontSize: 18,
    textAlign: 'center',
    color: '#888',
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
  },
});

export default RestaurantInfoView;
