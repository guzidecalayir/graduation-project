import StudentViewModel from '../viewmodel/StudentViewModel';
import apiStudent from '../service/apiStudent';
import Student from '../model/Student';

jest.mock('../service/apiStudent');

describe('StudentViewModel', () => {
  it('should map student data', async () => {
    const studentData = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: 'password123',
        phoneNumber: '1234567890',
        school: 'High School',
        birthDate: '1999-01-01',
      },
    ];

    
  });

  it('should map student sign in data', async () => {
    const studentSignInData = {
      email: 'john@example.com',
      password: 'password123',
    };

    await StudentViewModel.mapStudentSignInData(studentSignInData);

    expect(apiStudent.signInStudent).toHaveBeenCalledTimes(1);
  });
});
