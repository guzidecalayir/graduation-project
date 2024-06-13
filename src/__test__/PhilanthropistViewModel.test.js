import PhilanthropistViewModel from '../viewmodel/PhilanthropistViewModel'
import apiPhilanthropist from '../service/apiPhilanthropist.js';
import Philanthropist from '../model/Philanthropist.js';

jest.mock('./apiPhilanthropist.test.js');

describe('PhilanthropistViewModel', () => {
  it('should map philanthropist data', async () => {
    const philanthropistData = [
      {
        firstName: 'Hyman',
        lastName: 'Thiel"',
        email: 'Terrence_Bernier17@yahoo.com',
        password: 'password123',
        phoneNumber: '819-886-3272',
        totalDonation: 0,
      },
    ];

    

    
  });

  it('should map philanthropist sign in data', async () => {
    const philanthropistSignInData = {
      email: 'john@example.com',
      password: 'password123',
    };

    
  });
});
