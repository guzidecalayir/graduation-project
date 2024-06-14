class apiRestaurant{

    static async saveRestaurant(data) {
        try {
            console.log('JSON data to be sent:', JSON.stringify(data));
            
            const response = await fetch('https://studentdesk.azurewebsites.net/api/Restaurant/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
    
            const responseText = await response.text();
            
    
            if (!response.ok) {
                if (response.status === 404) {
                  throw new Error('User profile not found');
                } else if (response.status === 401) {
                  throw new Error('Unauthorized access');
                } else {
                  throw new Error(`Network response was not ok: ${response.statusText}`);
                }
              }
            return responseText;

        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    static async signInRestaurant (data) {
        try {
            console.log('JSON data to be sent:', JSON.stringify(data));

            const response = await fetch('https://studentdesk.azurewebsites.net/api/Restaurant/authenticate', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            
            const responseText = await response.text();

            
            if (!response.ok) {
                if (response.status === 404) {
                  throw new Error('User profile not found');
                } else if (response.status === 401) {
                  throw new Error('Unauthorized access');
                } else {
                  throw new Error(`Network response was not ok: ${response.statusText}`);
                }
              }
            return responseText;
      
          
      
        } catch (error) {
          throw error;
        }
      };

      static async getProfile (data) {
        try {
            console.log('JSON data to be sent:', JSON.stringify(data));

            const response = await fetch('https://studentdesk.azurewebsites.net/api/Restaurant/profile', {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${data}`
                },
                
            });

            
            const responseText = await response.json();

            if (!response.ok) {
                if (response.status === 404) {
                  throw new Error('User profile not found');
                } else if (response.status === 401) {
                  throw new Error('Unauthorized access');
                } else {
                  throw new Error(`Network response was not ok: ${response.statusText}`);
                }
              }
              
            return responseText;

          
      
        } catch (error) {
          throw error;
        }
      };
      static async uploadRestaurantPhoto  (photo,userToken) {
        if (photo) {
          const formData = new FormData();
          formData.append('file', {
            uri: photo.uri,
            type: 'image/jpeg',
            name: 'photo.jpg',
          });
      
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${userToken}`,
            },
            body: formData,
          };
      
          try {
            const response = await fetch(apiRestaurant.uploadRestaurantPhoto, options);
            const result = await response.json();
      
            if (result.success) {
              Alert.alert('Success', 'Photo uploaded successfully!');
              console.log('Response:', result.data);
              setPhoto(null); // Clear the selected photo
            } else {
              Alert.alert('Upload Failed', result.message);
              console.log('Error:', result.message);
            }
          } catch (error) {
            console.error('Error uploading photo:', error);
            Alert.alert('Error', 'An error occurred while uploading the photo.');
          }
        } else {
          Alert.alert('No photo selected', 'Please select a photo to upload.');
        }
      };
      // apiService.js



      static async addMenuItem(menuItem, userToken) {
        try {
          const response = await fetch('https://studentdesk.azurewebsites.net/api/Restaurant/menu/item', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${userToken}`,
            },
            body: JSON.stringify(menuItem),
          });
      
          if (!response.ok) {
            if (response.status === 401) {
              // Handle unauthorized error
            } else if (response.status === 404) {
              // Handle not found error
            } else {
              // Handle other errors
            }
          }
      
          return await response.json();
        } catch (error) {
          console.error( error);
          // Handle the error
        }
      };



}
export default apiRestaurant;