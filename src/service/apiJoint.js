class apiJoint  {
    

    static async sendDemand (data , token) {
        try {
            console.log('JSON data to be sent:', JSON.stringify(data));
            console.log('JSON data to be sent:', JSON.stringify(token));

            const response = await fetch('https://studentdesk.azurewebsites.net/api/Philanthropist/request', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
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
              }else{
                alert('Destek talebiniz alındı. En kısa zamanda tarafınıza dönüş yapılacaktır.')
              }
            return responseText;
      
          
      
        } catch (error) {
          throw error;
        }
      };
      static async sendCode(email) {
        try {
          console.log('Email to be sent:', email);
      
          const response = await fetch('https://studentdesk.azurewebsites.net/api/Philanthropist/mail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(email), // Pass email directly without stringify
          });
      
          const responseText = await response.text();
      
          if (!response.ok) {
            if (response.status === 404) {
              throw new Error('User profile not found');
            } else if (response.status === 401) {
              throw new Error('Bu emaile kayıtlı bir kullanıcı bulunamadı.');
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
      static async sendInfo(data) {
        try {
          console.log(data);
      
          const response = await fetch('https://studentdesk.azurewebsites.net/api/Philanthropist/forgotpassword', {
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
              throw new Error('unauthorized access.');
            } else {
              throw new Error(`Network response was not ok: ${response.statusText}`);
            }
          }else{
            alert('Şifreniz başarıyla güncellendi.')
          }
          return responseText;
      
        } catch (error) {
          console.error('Error:', error);
          throw error;
        }
      }
    
    
      
}

export default apiJoint;