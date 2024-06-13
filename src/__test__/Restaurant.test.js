import Restaurant from "../model/Restaurant";

describe('Restaurant', () => {
  it('should create a new restaurant', () => {
    const restaurant = new Restaurant('Bistro', 37.7749, -122.4194, 'bistro@example.com', 'password123');
    expect(restaurant.name).toBe('Bistro');
    expect(restaurant.longitude).toBe(37.7749);
    expect(restaurant.latitude).toBe(-122.4194);
    expect(restaurant.email).toBe('bistro@example.com');
    expect(restaurant.password).toBe('password123');
  });

  it('should convert to a plain JavaScript object', () => {
    const restaurant = new Restaurant('Bistro', 37.7749, -122.4194, 'bistro@example.com', 'password123');
    const plainObject = restaurant.toPlainObject();
    expect(plainObject).toEqual({
      name: 'Bistro',
      longitude: 37.7749,
      latitude: -122.4194,
      email: 'bistro@example.com',
      password: 'password123',
    });
  });

  it('should clone the object', () => {
    const restaurant = new Restaurant('Bistro', 37.7749, -122.4194, 'bistro@example.com', 'password123');
    const clonedRestaurant = restaurant.clone();
    expect(clonedRestaurant).toBeInstanceOf(Restaurant);
    expect(clonedRestaurant.name).toBe('Bistro');
    expect(clonedRestaurant.longitude).toBe(37.7749);
    expect(clonedRestaurant.latitude).toBe(-122.4194);
    expect(clonedRestaurant.email).toBe('bistro@example.com');
    expect(clonedRestaurant.password).toBe('password123');
  });
});
