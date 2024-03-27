import api_philanthropist from "../service/api_philanthropist";
import Philanthropist from "../model/model/Philanthropist";

class PhilanthropistViewModel {
    static async getPhilanthropists() {
        try {
            // Fetch philanthropist data from the API
            const philanthropistData = await api_philanthropist.getPhilanthropist();

            // Map the fetched data to Philanthropist instances
            const philanthropists = philanthropistData.map(data => {
                return new Philanthropist(
                    data.id,
                    data.firstName,
                    data.lastName,
                    data.e_mail,
                    data.password,
                    data.phoneNumber
                );
            });

            return philanthropists;
        } catch (error) {
            console.error('Error fetching philanthropists:', error);
            throw error;
        }
    }
}

export default PhilanthropistViewModel;