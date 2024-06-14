import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import apiRestaurant from '../service/apiRestaurant'; // Import your API service
import { AuthContext } from '../context/AuthContext';

const { width } = Dimensions.get('window');

const AddMenuItemView = () => {
  const { userToken } = useContext(AuthContext);
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddMenuItem = async () => {
    if (!name || !description || !price) {
      Alert.alert('Hata', 'Tüm alanların doldurulması zorunludur.');
      return;
    }
    const isFormValid = () => {
      return name !== '' && description !== '' && price !== '';
    };
    const newItem = {
      name:name,
      description:description,
      price: parseFloat(price),
    };
    
    if (isFormValid()) {
      try {
        await apiRestaurant.addMenuItem(newItem, userToken);
    
        setName('');
        setDescription('');
        setPrice('');
    
        Alert.alert('Başarılı', 'Ürün başarıyla menüye eklendi.');
      } catch (error) {
        Alert.alert('Hata', 'Ürün eklenirken bir hata oluştu. Lütfen tekrar deneyiniz.');
      }
    } else {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Menü Güncelle</Text>
        <View style={styles.outerView}>
          <TextInput
            style={styles.input}
            placeholder="İsim"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Açıklama"
            value={description}
            onChangeText={setDescription}
          />

          <TextInput
            style={styles.input}
            placeholder="Fiyat"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.buttonsContainer}>
          <View style={[styles.buttonContainer, { width: width * 0.4 }]}>
            <Button title="Menüye Ekle" onPress={handleAddMenuItem} />
          </View>
        </View>

        {/* Removed menuItemsContainer section */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    margin: 5,
  },
  outerView: {
    width: '100%', 
    alignItems: 'flex-start',
  },
});

export default AddMenuItemView;
