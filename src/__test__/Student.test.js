import Student from  "../model/Student";

describe('Student', () => {
  it('should create a new student', () => {
    const student = new Student('John', 'Doe', 'john@example.com', 'password123', '1234567890', 'High School', '1999-01-01');
    expect(student.firstName).toBe('John');
    expect(student.lastName).toBe('Doe');
    expect(student.email).toBe('john@example.com');
    expect(student.password).toBe('password123');
    expect(student.phoneNumber).toBe('1234567890');
    expect(student.school).toBe('High School');
    expect(student.birthDate).toBe('1999-01-01');
  });

  it('should convert to a plain JavaScript object', () => {
    const student = new Student('John', 'Doe', 'john@example.com', 'password123', '1234567890', 'High School', '1999-01-01');
    const plainObject = student.toPlainObject();
    expect(plainObject).toEqual({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'password123',
      phoneNumber: '1234567890',
      school: 'High School',
      birthDate: '1999-01-01',
    });
  });

  it('should clone the object', () => {
    const student = new Student('John', 'Doe', 'john@example.com', 'password123', '1234567890', 'High School', '1999-01-01');
    const clonedStudent = student.clone();
    expect(clonedStudent).toBeInstanceOf(Student);
    expect(clonedStudent.firstName).toBe('John');
    expect(clonedStudent.lastName).toBe('Doe');
    expect(clonedStudent.email).toBe('john@example.com');
    expect(clonedStudent.password).toBe('password123');
    expect(clonedStudent.phoneNumber).toBe('1234567890');
    expect(clonedStudent.school).toBe('High School');
    expect(clonedStudent.birthDate).toBe('1999-01-01');
  });
});
