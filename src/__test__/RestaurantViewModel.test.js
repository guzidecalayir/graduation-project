import RestaurantViewModel from './RestaurantViewModel.test';
import apiRestaurant from '../service/apiRestaurant';
import Restaurant from '../model/Restaurant';

jest.mock('../service/apiRestaurant');

describe('RestaurantViewModel', () => {
  it('should map restaurant data', async () => {
    const restaurantData = [
      {
        name: 'Gltkn',
        longitude: 28.6914516,
        latitude: 41.0142081,
        email: 'gltkn@gmail.com',
        password: 'slm',
      },
    ];

    

    
  });

  it('should map restaurant sign in data', async () => {
    const restaurantSignInData = {
      email: 'gltkn@gmail.com',
      password: 'slm',
    };

    

    
  });
});
