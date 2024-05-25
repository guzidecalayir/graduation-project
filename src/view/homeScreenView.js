import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

const HomeScreenView = ({ navigation }) => {

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

  // Render each food category
  const renderFoodCategory = (category) => (
    <TouchableOpacity
      key={category.id}
      style={styles.categoryContainer}
      onPress={() => navigation.navigate('Category', { category })}
    >
      <ImageBackground source={category.image} style={styles.categoryImage}>
        <Text style={styles.categoryTitle}>{category.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoş Geldiniz!</Text>
      <Text style={styles.subtitle}>Leziz Kategorileri Keşfedin!</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.categoriesContainer}>
          {foodCategories.map((category) => renderFoodCategory(category))}
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
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
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