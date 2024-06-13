import axios from 'axios';
import { Alert } from 'react-native'; 

class apiMaps {
  static async getCoordinates(address) {
    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: address,
          key: 'AIzaSyBLG7j_Dz-gz5M2aKHaF0HyOv-nxVXu2Fo', 
        },
      });

      if (response.data.status === 'OK') {
        const location = response.data.results[0].geometry.location;
        return location;
      } else {
        Alert.alert('Error', 'Address not found. Please check again.');
        return null;
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while fetching coordinates.');
      console.error(error);
      return null;
    }
  }
  static async getAddress(latitude, longitude) {
    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          latlng: `${latitude},${longitude}`,
          key: 'AIzaSyBLG7j_Dz-gz5M2aKHaF0HyOv-nxVXu2Fo',
        },
      });

      if (response.data.status === 'OK') {
        const addressComponents = response.data.results[0].address_components;
        const address = {
          city: addressComponents.find(component => component.types.includes('locality'))?.long_name || '',
          district: addressComponents.find(component => component.types.includes('administrative_area_level_2'))?.long_name || '',
          neighbourhood: addressComponents.find(component => component.types.includes('sublocality'))?.long_name || '',
          building: addressComponents.find(component => component.types.includes('street_number'))?.long_name || '',
          street: addressComponents.find(component => component.types.includes('route'))?.long_name || '',
          // Add more components as needed (e.g., district, neighborhood, etc.)
        };
        return address;
      } else {
        Alert.alert('Error', 'Coordinates not found. Please check again.');
        return null;
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while fetching address.');
      console.error(error);
      return null;
    }
  }
}

export default apiMaps;
