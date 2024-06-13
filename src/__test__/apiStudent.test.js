import apiStudent from '../service/apiStudent';

jest.mock('../service/apiStudent');

describe('apiStudent', () => {
  it('should save student', async () => {
    const data = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'password123',
      phoneNumber: '1234567890',
      school: 'High School',
      birthDate: '1999-01-01',
    };

    await apiStudent.saveStudent(data);

    
  });

  it('should sign in student', async () => {
    const data = {
      email: 'john@example.com',
      password: 'password123',
    };

    await apiStudent.signInStudent(data);

    
    
  });

  it('should get student profile', async () => {
    const data = {
      email: 'john@example.com',
      password: 'password123',
    };


  });
});
