import apiRestaurant from "../service/apiRestaurant";
import Restaurant from "../model/Restaurant";

class RestaurantViewModel{

    static async mapRestaurantData(restaurantData) {
        try {
            let restaurant;
    
            if (Array.isArray(restaurantData)) {
                restaurant = restaurantData.map(data => {
                    return new Restaurant(
                        this.name,
                        this.city,
                        this.district,
                        this.neighbourhood,
                        this.street,
                        this.building,
                        this.email,
                        this.password,
                    );
                });
            } else {
                restaurant = new Restaurant(
                    restaurantData.name,
                    restaurantData.city,
                    restaurantData.district,
                    restaurantData.neighbourhood,
                    restaurantData.street,
                    restaurantData.building,
                    restaurantData.email,
                    restaurantData.password,
                );
            }
    
            console.log(restaurant);
            await apiRestaurant.saveRestaurant(restaurant);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }






    
}
export default RestaurantViewModel;