import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const PriceandScoreView = () => {
  const [capacity, setCapacity] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const { userToken } = useContext(AuthContext);

  const handleIncreaseCapacity = async () => {
    if (!capacity) {
      Alert.alert('Hata', 'Kapasiteyi giriniz.');
      return;
    }
    const updatedCapacity = { amount: parseInt(capacity) };

    try {
      const response = await fetch('https://studentdesk.azurewebsites.net/api/Restaurant/meal/donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`,
        },
        body: JSON.stringify(updatedCapacity),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      } else {
        setCapacity('');
        Alert.alert('Başarılı', 'Kapasite başarıyla artırıldı.');
      }
    } catch (error) {
      Alert.alert('Hata', 'Kapasite arttırılırken bir hata oluştu. Lütfen tekrar deneyiniz.');
    }
  };

  const handleUpdatePrice = async () => {
    if (!newPrice) {
      Alert.alert('Hata', 'Yeni fiyatı giriniz.');
      return;
    }
    const updatedPrice = { credit: parseInt(newPrice) };

    try {
      const response = await fetch('https://studentdesk.azurewebsites.net/api/Restaurant/set/standart/credit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`,
        },
        body: JSON.stringify(updatedPrice),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      } else {
        setNewPrice('');
        Alert.alert('Başarılı', 'Fiyat başarıyla güncellendi.');
      }
    } catch (error) {
      Alert.alert('Hata', 'Fiyat güncellenirken bir hata oluştu. Lütfen tekrar deneyiniz.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Kapasite Arttır</Text>
        <TextInput
          style={styles.input}
          placeholder="Yeni Kapasite"
          value={capacity}
          onChangeText={(text) => setCapacity(text)}
          keyboardType="numeric"
        />
        <Button title="Kapasite Arttır" onPress={handleIncreaseCapacity} />

        <Text style={styles.title}>Fiyat Güncelle</Text>
        <TextInput
          style={styles.input}
          placeholder="Yeni Fiyat"
          value={newPrice}
          onChangeText={(text) => setNewPrice(text)}
          keyboardType="numeric"
        />
        <Button title="Fiyat Güncelle" onPress={handleUpdatePrice} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginTop: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default PriceandScoreView;