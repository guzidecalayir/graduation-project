import apiPhilanthropist from '../service/apiPhilanthropist';

jest.mock('../service/apiPhilanthropist');

describe('apiPhilanthropist', () => {
  it('should save philanthropist', async () => {
    const data = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'password123',
      phoneNumber: '1234567890',
      totalDonation: 0,
    };

    await apiPhilanthropist.savePhilanthropist(data);

    
  });

  it('should sign in philanthropist', async () => {
    const data = {
      email: 'john@example.com',
      password: 'password123',
    };

    await apiPhilanthropist.signInPhilanthropist(data);

   
  });

  it('should get philanthropist profile', async () => {
    const data = {
      email: 'john@example.com',
      password: 'password123',
    };

   
  });
});
