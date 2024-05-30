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
}

export default apiMaps;
