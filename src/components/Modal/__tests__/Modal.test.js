import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from '../Modal';

describe('<Modal /> Tests', () => {
  const id = 1;
  const vehicle = {
    meta: {
      passengers: 5,
      bodystyles: 'b',
      emissions: { template: 'x' },
    },
  };

  test('Modal - Given render Modal then FilterModal should be rendered', () => {
    render(<Modal id={id} vehicle={vehicle} />);
    const idModal = screen.getByTestId('idModal');
    expect(idModal).toBeTruthy();
  });

  test('Modal - Given render Modal then labels Passengers should be rendered', () => {
    console.log(`id ${id}`);
    render(<Modal id={id} vehicle={vehicle} />);
    const idPassengers = screen.getByLabelText('idPassengers');
    expect(idPassengers).toBeTruthy();
    const idBodystyles = screen.getByLabelText('idBodystyles');
    expect(idBodystyles).toBeTruthy();
    const idEmissions = screen.getByLabelText('idEmissions');
    expect(idEmissions).toBeTruthy();
  });
});
