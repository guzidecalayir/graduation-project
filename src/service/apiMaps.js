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
        console.log('Address components:', addressComponents);

        const address = {};
      addressComponents.forEach((component) => {
        console.log('Component types:', component.types);
        if (component.types.includes('street_number')) {
          address.building = component.long_name;
        } else if (component.types.includes('route')) {
          address.street = component.long_name;
        } else if (component.types.includes('administrative_area_level_2')) {
          address.district = component.long_name;
        } else if (component.types.includes('administrative_area_level_1')) {
          address.city = component.long_name;
        } else if (component.types.includes('administrative_area_level_4') || component.types.includes('sublocality') || component.types.includes('neighborhood')) {
          address.neighbourhood = component.long_name;
        }
      });
  

      console.log('Parsed address:', address);
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
