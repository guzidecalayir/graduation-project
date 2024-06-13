import Philanthropist from "../model/Philanthropist";

describe('Philanthropist', () => {
  it('should create a new philanthropist', () => {
    const philanthropist = new Philanthropist('John', 'Doe', 'john@example.com', 'password123', '1234567890', 0);
    expect(philanthropist.firstName).toBe('John');
    expect(philanthropist.lastName).toBe('Doe');
    expect(philanthropist.email).toBe('john@example.com');
    expect(philanthropist.password).toBe('password123');
    expect(philanthropist.phoneNumber).toBe('1234567890');
    expect(philanthropist.totalDonation).toBe(0);
  });

  it('should convert to a plain JavaScript object', () => {
    const philanthropist = new Philanthropist('John', 'Doe', 'john@example.com', 'password123', '1234567890', 0);
    const plainObject = philanthropist.toPlainObject();
    expect(plainObject).toEqual({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'password123',
      phoneNumber: '1234567890',
      totalDonation: 0,
    });
  });

  it('should clone the object', () => {
    const philanthropist = new Philanthropist('John', 'Doe', 'john@example.com', 'password123', '1234567890', 0);
    const clonedPhilanthropist = philanthropist.clone();
    expect(clonedPhilanthropist).toBeInstanceOf(Philanthropist);
    expect(clonedPhilanthropist.firstName).toBe('John');
    expect(clonedPhilanthropist.lastName).toBe('Doe');
    expect(clonedPhilanthropist.email).toBe('john@example.com');
    expect(clonedPhilanthropist.password).toBe('password123');
    expect(clonedPhilanthropist.phoneNumber).toBe('1234567890');
    expect(clonedPhilanthropist.totalDonation).toBe(0);
  });
});
