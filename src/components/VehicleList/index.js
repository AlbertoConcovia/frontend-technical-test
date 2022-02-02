import React from 'react';
import useData from './useData';
import './style.scss';
import Vehicle from '../Vehicle/index';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{error}</div>;
  }

  return (
    <div data-testid="results">
      {/* <p>List of vehicles will be displayed here</p> */}

      <div data-testid="results" className="vehiclelist__container">
        {vehicles.map((e, index) => <Vehicle key={index} vehicle={e} /> )}
      </div>
    </div>
  );
}
