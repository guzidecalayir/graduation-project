import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import apiRestaurant from '../service/apiRestaurant';
import { AuthContext } from '../context/AuthContext';

const UpdateRestaurantPhoto = () => {
  const { userToken } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);

  const selectPhoto = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: false,
    };

    try {
      const result = await ImagePicker.launchImageLibraryAsync(options);

      if (!result.cancelled) {
        setPhoto(result.assets[0]);
      }
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  const uploadPhoto = async () => {
    if (photo) {
      const result = await apiRestaurant.uploadRestaurantPhoto(photo, userToken);

      if (result.success) {
        Alert.alert('Success', 'Photo uploaded successfully!');
        console.log('Response:', result.data);
        setPhoto(null); // Clear the selected photo
      } else {
        Alert.alert('Upload Failed', result.message);
        console.log('Error:', result.message);
      }
    } else {
      Alert.alert('No photo selected', 'Please select a photo to upload.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restoran Fotoğrafı Güncelle</Text>

      <View style={styles.photoContainer}>
        {photo ? (
          <Image source={{ uri: photo.uri }} style={styles.photo} />
        ) : (
          <Text style={styles.placeholder}>Fotoğraf Seçilmedi</Text>
        )}
      </View>

      <TouchableOpacity onPress={selectPhoto} style={styles.button}>
        <Text style={styles.buttonText}>Fotoğraf Seç</Text>
      </TouchableOpacity>

      {photo && (
        <TouchableOpacity onPress={uploadPhoto} style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>Yükle</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UpdateRestaurantPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  photoContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  placeholder: {
    color: '#888',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  uploadButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});