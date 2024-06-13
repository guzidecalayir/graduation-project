import React from 'react';
import { shallow } from 'enzyme';

import PhilanthropistViewModel from './PhilanthropistViewModel.test'; // Adjust the path accordingly
import StudentViewModel from './StudentViewModel.test'; // Correct the import name and path
import RestaurantViewModel from './viewmodel/PhilanthropistViewModel'; // Adjust the path accordingly

describe('AuthProvider', () => {
  

  

  it('should render children', () => {
    const child = <div>Test Child</div>;
    wrapper.setProps({ children: child });
    expect(wrapper.contains(child)).toBe(true);
  });

  it('should have initial state', () => {
    const instance = wrapper.instance();
    expect(instance.state.isLoading).toBe(false);
    expect(instance.state.userToken).toBeNull();
    expect(instance.state.userType).toBeNull();
  });

  it('should login philanthropist', async () => {
    const email = 'philanthropist@example.com';
    const password = 'password';
    const userType = 'philanthropist';
    const token = 'philanthropist_token';

    jest.spyOn(PhilanthropistViewModel, 'mapPhilanthropistSignInData').mockResolvedValue(token);

    const instance = wrapper.instance();
    await instance.login(email, password, userType);

    expect(instance.state.isLoading).toBe(false);
    expect(instance.state.userToken).toBe(token);
    expect(instance.state.userType).toBe(userType);
  });

  it('should logout', () => {
    const instance = wrapper.instance();
    instance.logout();

    expect(instance.state.userToken).toBeNull();
    expect(instance.state.userType).toBeNull();
    expect(instance.state.isLoading).toBe(false);
  });
});
