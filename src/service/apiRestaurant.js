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


}
export default apiRestaurant;