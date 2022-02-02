import React from 'react';
import { render, screen } from '@testing-library/react';
import Vehicle from '../index';

describe('<Vehicle /> Tests', () => {
  const vehicle = {
    id:1,
    price: "£10",
    description: "car",
    media: [
      { url: "/images/16x9/ipace_k21.jpg" }
    ],
    meta: {
      passengers: 5,
      bodystyles: 'b',
      emissions: { template: 'x' },
    },
  };

  test('Vehicle - Given render Vehicle then it should be rendered', () => {
    render(<Vehicle vehicle={vehicle} />);
    const idVehicle = screen.getByTestId('idVehicle');
    expect(idVehicle).toBeTruthy();
  });

});
