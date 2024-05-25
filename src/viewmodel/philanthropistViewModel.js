import apiPhilanthropist from "../service/apiPhilanthropist";
import Philanthropist from "../model/Philanthropist";

class PhilanthropistViewModel {
    static async getPhilanthropists() {
        try {
            // Fetch philanthropist data from the API
            const philanthropistData = await apiPhilanthropist.getPhilanthropist();

            // Map the fetched data to Philanthropist instances
            const philanthropists = philanthropistData.map(data => {
                return new Philanthropist(
                    data.id,
                    data.firstName,
                    data.lastName,
                    data.e_mail,
                    data.password,
                    data.phoneNumber,
                    data.salt,
                    data.totalDonation
                );
            });

            return Philanthropist;
        } catch (error) {
            console.error('Error fetching philanthropists:', error);
            throw error;
        }
    }
}

export default PhilanthropistViewModel;