import React from 'react';
import useData from './useData';
import './style.scss';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();
  // console.log(`index.js after vehicles ${JSON.stringify(vehicles)}`);
  // const imgVehicle =  vehicles[0].media[0].url ;

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
        {vehicles.map((e) => (
          <div className="vehicle">
            <div>
              <img
                src={e.media[0].url}
                alt="fpace_k17"
                className="vehiclelist__img"
              />
            </div>
            <div>
              <p> Price: {e.price} </p>
              <p> Description: {e.description}  </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
