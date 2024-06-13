import apiRestaurant from '../service/apiRestaurant';

jest.mock('../service/apiRestaurant');

describe('apiRestaurant', () => {
  it('should save restaurant', async () => {
    const data = {
      name: 'Bistro',
      longitude: 37.7749,
      latitude: -122.4194,
      email: 'bistro@example.com',
      password: 'password123',
      phoneNumber: '1234567890',
    };

    await apiRestaurant.saveRestaurant(data);

    
    
  });

  it('should sign in restaurant', async () => {
    const data = {
      email: 'bistro@example.com',
      password: 'password123',
    };

    await apiRestaurant.signInRestaurant(data);

    
    
  });

 
});
