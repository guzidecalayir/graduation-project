import apiPhilanthropist from "../service/apiPhilanthropist";
import Philanthropist from "../model/Philanthropist";

class PhilanthropistViewModel {

    static async mapPhilanthropistData(philanthropistData) {
        try {
            let philanthropist;
    
            if (Array.isArray(philanthropistData)) {
                philanthropist = philanthropistData.map(data => {
                    return new Philanthropist(
                        data.firstName,
                        data.lastName,
                        data.email,
                        data.password,
                        data.phoneNumber,
                        data.totalDonation
                    );
                });
            } else {
                philanthropist = new Philanthropist(
                    philanthropistData.firstName,
                    philanthropistData.lastName,
                    philanthropistData.email,
                    philanthropistData.password,
                    philanthropistData.phoneNumber,
                    philanthropistData.totalDonation
                );
            }
    
            console.log(philanthropist);
             await apiPhilanthropist.savePhilanthropist(philanthropist);
            
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    static async mapPhilanthropistSignInData(philanthropistSignInData) {
        try {
            
            const { email, password } = philanthropistSignInData;
    
            
            const philanthropist = {
                email: email,
                password: password
            };
            
            
            const token = await apiPhilanthropist.signInPhilanthropist(philanthropist);
            return token; 
            
        } catch (error) {
            
            console.error('Error:', error);
            throw error;
        }
    }
    
    
    
    
    

}


export default PhilanthropistViewModel;