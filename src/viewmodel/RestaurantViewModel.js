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
                        this.longitude,
                        this.latitude,
                        this.email,
                        this.password,
                    );
                });
            } else {
                restaurant = new Restaurant(
                    restaurantData.name,
                    restaurantData.longitude,
                    restaurantData.latitude,
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