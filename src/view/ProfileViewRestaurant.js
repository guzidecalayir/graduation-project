import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ProfileViewRestaurant = ({ navigation }) => {
  // These values should ideally be fetched from the backend
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [neighbourhood, setNeighbourhood] = useState('');
  const [street, setStreet] = useState('');
  const [building, setBuilding] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [photo, setPhoto] = useState(null);

  const handleSave = () => {
    Alert.alert('Başarılı', 'Profilgüncellendi.');
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    Alert.alert('Bilgi', 'Düzenleme iptal edildi.');
  };

  const handleSelectPhoto = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setPhoto(response.assets[0].uri);
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Profilim</Text>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Profil Fotoğrafım</Text>
          <View style={[styles.photoContainer, photo && styles.photoBorder]}>
            {photo ? (
              <Image source={{ uri: photo }} style={styles.photo} />
            ) : (
              <Text style={styles.noPhotoText}>Fotoğraf Seçilmedi</Text>
            )}
          </View>
          {isEditing && (
            <Button title="Fotoğraf Seç" onPress={handleSelectPhoto} />
          )}
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Restoran Adı</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={name}
            editable={isEditing}
            onChangeText={(text) => setName(text)}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>İl</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={city}
            editable={isEditing}
            onChangeText={(text) => setCity(text)}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>İlçe</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={district}
            editable={isEditing}
            onChangeText={(text) => setDistrict(text)}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Mahalle</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={neighbourhood}
            editable={isEditing}
            onChangeText={(text) => setNeighbourhood(text)}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Sokak</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={street}
            editable={isEditing}
            onChangeText={(text) => setStreet(text)}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Bina</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={building}
            editable={isEditing}
            onChangeText={(text) => setBuilding(text)}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={email}
            editable={isEditing}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Telefon Numarası</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={phoneNumber}
            editable={isEditing}
            onChangeText={(text) => setPhoneNumber(text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.buttonsContainer}>
          {isEditing ? (
            <>
              <View style={styles.buttonContainer}>
                <Button title="Kaydet" onPress={handleSave} />
              </View>
              <View style={styles.buttonContainer}>
                <Button title="Vazgeç" onPress={handleCancel} color="gray" />
              </View>
            </>
          ) : (
            <View style={styles.buttonContainer}>
              <Button title="Düzenle" onPress={handleEdit} />
            </View>
          )}
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
  fieldContainer: {
    width: '100%',
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#332',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  disabledInput: {
    backgroundColor: '#f0f0f0',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  buttonContainer: {
    width: '45%',
  },
  photoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  photoBorder: {
    borderColor: '#000',
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  noPhotoText: {
    color: '#999',
  },
});

export default ProfileViewRestaurant;
