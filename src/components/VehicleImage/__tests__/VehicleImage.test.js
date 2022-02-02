import React from 'react';
import { render, screen } from '@testing-library/react';
import VehicleImage from '../index';

describe('<VehicleImage /> Tests', () => {
  const vehicle = {
    media: [
      { url: "/images/16x9/ipace_k21.jpg" }
    ]
  };

  test('VehicleImage - Given render VehicleImage then it should be rendered', () => {
    render(<VehicleImage vehicle={vehicle} />);
    const idVehicleImage = screen.getByTestId('idVehicleImage');
    expect(idVehicleImage).toBeTruthy();
  });

});
