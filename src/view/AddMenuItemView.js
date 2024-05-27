import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const { width, height } = Dimensions.get('window');

const AddMenuItemView = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleAddMenuItem = () => {
    if (!name || !description || !price || !image) {
      Alert.alert('Hata', 'Tüm alanların doldurulması zorunludur.');
      return;
    }

    const newItem = {
      id: Math.random().toString(),
      name,
      description,
      price,
      image,
    };

    setMenuItems([...menuItems, newItem]);
    setName('');
    setDescription('');
    setPrice('');
    setImage(null);

    Alert.alert('Başarılı', 'Ürün başarıyla menüye eklendi.');
  };

  const handleSelectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0].uri);
      }
    });
  };

  const handleDeleteMenuItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
    Alert.alert('Başarılı', 'Ürün başarıyla menüden çıkarıldı.');
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

          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.inputButton} onPress={handleSelectImage}>
              <Text style={styles.inputButtonText}>Fotoğraf Seç</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={[styles.buttonContainer, { width: width * 0.4 }]}>
            <Button title="Menüye Ekle" onPress={handleAddMenuItem} />
          </View>
          
        </View>

        <View style={styles.menuItemsContainer}>
          {menuItems.map((item) => (
            <View key={item.id} style={styles.menuItem}>
              <Image source={{ uri: item.image }} style={styles.menuItemImage} />
              <View style={styles.menuItemDetails}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <Text style={styles.menuItemDescription}>{item.description}</Text>
                <Text style={styles.menuItemPrice}>{item.price}</Text>
                <View style={[styles.buttonContainer, { width: width * 0.4 }]}>
            <Button
              title="Menüden Çıkar"
              onPress={() => handleDeleteMenuItem(item.id)}
              color="red"
            />
          </View>
              </View>
            </View>
          ))}
        </View>
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
  imageContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
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
  menuItemsContainer: {
    width: '100%',
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  menuItemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  menuItemDetails: {
    flex: 1,
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#666',
  },
  menuItemPrice: {
    fontSize: 16,
    color: '#333',
  },
  outerView: {
    width: '100%', 
    alignItems: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#332',
    marginRight: 10,
  },
  inputButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  inputButtonText: {
    fontSize: 16,
    color: 'black',
  },
});

export default AddMenuItemView;
