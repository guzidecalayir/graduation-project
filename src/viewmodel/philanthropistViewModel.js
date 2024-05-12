import apiPhilanthropist from "../service/apiPhilanthropist";
import philanthropist from "../model/philanthropist";

class philanthropistViewModel {
    static async getPhilanthropists() {
        try {
            // Fetch philanthropist data from the API
            const philanthropistData = await apiPhilanthropist.getPhilanthropist();

            // Map the fetched data to Philanthropist instances
            const philanthropists = philanthropistData.map(data => {
                return new philanthropist(
                    data.id,
                    data.firstName,
                    data.lastName,
                    data.e_mail,
                    data.password,
                    data.phoneNumber
                );
            });

            return philanthropist;
        } catch (error) {
            console.error('Error fetching philanthropists:', error);
            throw error;
        }
    }
}

export default philanthropistViewModel;