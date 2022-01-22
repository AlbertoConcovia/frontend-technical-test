import React from 'react';
import useData from './useData';
import './style.scss';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();
  console.log(`index.js after vehicles ${JSON.stringify(vehicles)}`);
  // const imgVehicle =  vehicles[0].media[0].url ;

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    <div data-testid="results">

      <p>
        Visit
        <a href="/api/vehicles.json" target="_blank"> /api/vehicles.json</a>
        {' '}
        (main endpoint)
      </p>
      <p>
        Visit
        <a href="/api/vehicle_fpace.json" target="_blank">/api/vehicle_fpace.json</a>
        {' '}
        (detail endpoint - apiUrl)
      </p>
      <p>
        Visit
        <a href="/api/vehicle_xf.json" target="_blank">/api/vehicle_xf.json</a>
        {' '}
        (vehicle without any price)
      </p>

      <p>List of vehicles will be displayed here</p>

      <div data-testid="results" className="vehicle__container">

        <div className="vehicle">
          <div>
            <img src="/images/16x9/fpace_k17.jpg" alt="fpace_k17" className="vehiclelist__img" />
          </div>
          <div>
            <p> { JSON.stringify(vehicles[0].modelYear) } </p>
            <p> { JSON.stringify(vehicles[0].media[0].url) } </p>
          </div>
        </div>

        <div className="vehicle">
          <div>
            <img src="/images/16x9/fpace_k17.jpg" alt="fpace_k17" className="vehiclelist__img" />
          </div>
          <div>
            <p> { JSON.stringify(vehicles[0].modelYear) } </p>
            <p> { JSON.stringify(vehicles[0].media[0].url) } </p>
          </div>
        </div>

        <div className="vehicle">
          <div>
            <img src="/images/16x9/fpace_k17.jpg" alt="fpace_k17" className="vehiclelist__img" />
          </div>
          <div>
            <p> { JSON.stringify(vehicles[0].modelYear) } </p>
            <p> { JSON.stringify(vehicles[0].media[0].url) } </p>
          </div>
        </div>


        <div className="vehicle">
          <div>
            <img src="/images/16x9/fpace_k17.jpg" alt="fpace_k17" className="vehiclelist__img" />
          </div>
          <div>
            <p> { JSON.stringify(vehicles[0].modelYear) } </p>
            <p> { JSON.stringify(vehicles[0].media[0].url) } </p>
          </div>
        </div>

      </div>

    </div>
  );
}
