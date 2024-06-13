import React, { useState , useEffect, useContext} from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { AuthContext } from '../context/AuthContext';
import apiPhilanthropist from '../service/apiPhilanthropist';

const ProfileViewStudent = ({ navigation }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [university, setUniversity] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const { userToken } = useContext(AuthContext);  
  
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await apiPhilanthropist.getProfile(userToken);
        const { name, surname, school, email, phoneNumber } = response.data;
        setName(name);
        setSurname(surname);
        setUniversity(school);
        setEmail(email);
        setPhoneNumber(phoneNumber);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
        Alert.alert('Error', 'Failed to load user profile.');
      }
    };

    fetchUserProfile();
  }, [userToken]);

  const handleSave = () => {
    Alert.alert('Başarılı', 'Profil güncellendi.');
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    Alert.alert('Bilgi', 'Düzenleme iptal edildi.');
  };

  

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Profilim</Text>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Ad</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={name}
            editable={isEditing}
            onChangeText={setName}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Soyad</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={surname}
            editable={isEditing}
            onChangeText={setSurname}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Üniversite</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={university}
            editable={isEditing}
            onChangeText={setUniversity}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={email}
            editable={isEditing}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Telefon Numarası</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={phoneNumber}
            editable={isEditing}
            onChangeText={setPhoneNumber}
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
});

export default ProfileViewStudent;
