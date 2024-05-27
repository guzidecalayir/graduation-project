import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import RestaurantView from './RestaurantView';

const HomeScreenView = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const foodCategories = [
    { id: 1, title: 'Ev Yemekleri', image: require('../assets/ev_yemekleri.png') },
    { id: 2, title: 'Burger', image: require('../assets/burger.png') },
    { id: 3, title: 'Çiğ Köfte', image: require('../assets/cig_kofte.png') },
    { id: 4, title: 'Pizza', image: require('../assets/pizza.png') },
    { id: 5, title: 'Döner', image: require('../assets/doner.png') },
    { id: 6, title: 'Tatlı', image: require('../assets/tatli.png') },
    { id: 7, title: 'Tavuk', image: require('../assets/tavuk.png') },
    { id: 8, title: 'Köfte', image: require('../assets/kofte.png') },
    { id: 9, title: 'Kahvaltı', image: require('../assets/kahvalti.png') },
  ];

  const filteredCategories = foodCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderFoodCategory = (category) => (
    <TouchableOpacity
      key={category.id}
      style={styles.categoryContainer}
      onPress={() => navigation.navigate('Restaurant', { RestaurantView })}
    >
      <ImageBackground source={category.image} style={styles.categoryImage}>
        <Text style={styles.categoryTitle}>{category.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
      <AntDesign name="search1" size={24} color="black" />
        <TextInput
          style={styles.searchBar}
          placeholder="Restoran Konumu Bul"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.title}>Hoş Geldiniz!</Text>
        <Text style={styles.subtitle}>Leziz Kategorileri Keşfedin!</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.categoriesContainer}>
          {filteredCategories.map((category) => renderFoodCategory(category))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    marginLeft:10,
  },
  welcomeContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryContainer: {
    width: '48%', // Adjusted width to fit two categories in a row
    aspectRatio: 1, // Keep aspect ratio square
    marginBottom: 20, // Increased margin to add space between categories
    borderRadius: 10,
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  categoryTitle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
});

export default HomeScreenView;
