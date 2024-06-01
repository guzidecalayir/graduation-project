import PhilanthropistViewModel from "../viewmodel/PhilanthropistViewModel";

class apiPhilanthropist{

    // static async getPhilanthropist(){
    
    //     try{
    //         const response = await fetch('https://studesk.azurewebsites.net/api/Philanthropist/get');
    //         return await response.json();
            
    //     }catch(error){
    //         console.error('Error:', error);
    //         throw error;
    //     }
        
    // }
    static async savePhilanthropist(data) {
        try {
            console.log('JSON data to be sent:', JSON.stringify(data));
            
            const response = await fetch('https://studesk.azurewebsites.net/api/Philanthropist/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
    
            const responseText = await response.text();
            console.log('Raw response text:', responseText);
    
            if (!response.ok) {
                let errorData;
                try {
                    errorData = JSON.parse(responseText);
                } catch (e) {
                    console.error('Response is not JSON:', responseText);
                    throw new Error(`Network response was not ok: ${response.statusText}. Non-JSON response: ${responseText}`);
                }
    
                console.error('Error data:', errorData);
                throw new Error(`Network response was not ok: ${response.statusText}. Error details: ${JSON.stringify(errorData)}`);
            } else {
                if (responseText === 'true') {
                    alert('Kayıt işlemi başarılı.');
                    return true;
                } else {
                    const responseData = JSON.parse(responseText);
                    console.log('Response data:', responseData);
                    return responseData;
                }
            }
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
    
     static async signInPhilanthropist (data) {
        try {
            console.log('JSON data to be sent:', JSON.stringify(data));

            const response = await fetch('https://studesk.azurewebsites.net/api/Philanthropist/authenticate', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            
            const responseText = await response.text();

            if (!response.ok) {
                let errorData;
                try {
                    errorData = JSON.parse(responseText);
                } catch (e) {
                    console.error('Response is not JSON:', responseText);
                    throw new Error(`Network response was not ok: ${response.statusText}. Non-JSON response: ${responseText}`);
                }
                console.error('Error data:', errorData);
                throw new Error(`Network response was not ok: ${response.statusText}. Error details: ${JSON.stringify(errorData)}`);
            }else{
                if (responseText === 'true') {
                    alert('Giriş işlemi başarılı.');
                    return true;
                } else {
                    const responseData = JSON.parse(responseText);
                    console.log('Response data:', responseData);
                    return responseData;
                }
            }
      
          
      
        } catch (error) {
          throw error;
        }
      };
    
}

export default apiPhilanthropist;