import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const ProfileViewStudent = ({ navigation }) => {
  const { userProfile } = useContext(AuthContext);

  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userProfile && userProfile!== null && userProfile!== undefined) {
          
          setProfileData({
            firstName: userProfile.firstName,
            lastName: userProfile.lastName,
            phoneNumber: userProfile.phoneNumber,
            email: userProfile.email,
          });
          console.log('Fetched profile data:', userProfile);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userProfile, setProfileData]);

  // Map the profileData to an array for FlatList
  const profileArray = [
    { label: 'Ad', value: profileData.firstName || 'N/A' },
    { label: 'Soyad', value: profileData.lastName || 'N/A' },
    { label: 'Email', value: profileData.email || 'N/A' },
    { label: 'Telefon Numarası', value: profileData.phoneNumber || 'N/A' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.fieldContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{item.label}</Text>
      </View>
      <View style={styles.fieldBorder}>
        <Text style={styles.field}>{item.value}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profilim</Text>

      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={profileArray}
          renderItem={renderItem}
          keyExtractor={(item) => item.label}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fieldContainer: {
    width: '100%',
    marginBottom: 15,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  labelContainer: {
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    color: '#332',
  },
  fieldBorder: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  field: {
    fontSize: 16,
    color: '#000',
  },
  loadingText: {
    fontSize: 18,
    color: '#666',
  },
  flatListContainer: {
    width: '100%',
  },
});

export default ProfileViewStudent;
