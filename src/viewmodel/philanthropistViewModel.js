import apiPhilanthropist from "../service/apiPhilanthropist";
import Philanthropist from "../model/Philanthropist";

class PhilanthropistViewModel {
    // static async getPhilanthropists() {
    //     try {
    //         // Fetch philanthropist data from the API
    //         const philanthropistData = await apiPhilanthropist.getPhilanthropist();

    //         // Map the fetched data to Philanthropist instances
    //         const philanthropists = philanthropistData.map(data => {
    //             return new Philanthropist(
    //                 data.id,
    //                 data.firstName,
    //                 data.lastName,
    //                 data.e_mail,
    //                 data.password,
    //                 data.phoneNumber,
    //                 data.salt,
    //                 data.totalDonation
    //             );
    //         });

    //         return Philanthropist;
    //     } catch (error) {
    //         console.error('Error fetching philanthropists:', error);
    //         throw error;
    //     }
    // }

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
    
    
//     static async mapSignInPhilanthropistData() {
//         try {
//             // Fetch philanthropist data from the API
//             const philanthropistData = await philanthropistSignInData();
            
            
//             const philanthropistSignIn = philanthropistSignInData.map(data => {
//                 return new Philanthropist(
//                     data.id,
//                     data.firstName,
//                     data.lastName,
//                     data.e_mail,
//                     data.password,
//                     data.phoneNumber,
//                     data.salt,
//                     data.totalDonation
//                 );
//             });

//             return Philanthropist;
//         } catch (error) {
//             console.error('Error fetching philanthropist data:', error);
//             throw error;
//         }
//     }

}


export default PhilanthropistViewModel;