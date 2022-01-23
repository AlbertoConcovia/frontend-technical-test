import React from 'react';
import useData from './useData';
import './style.scss';
import Modal from '../Modal/Modal';

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
        {vehicles.map((e) => (
          <div key={e.id} className="vehicle">
            <div >
              <img
                src={e.media[0].url}
                alt="fpace_k17"
                width="100%"
                height="100%"
              />
            </div>
           <div>
              <p> Price: {e.price} </p>
              <p> Description: {e.description}  </p>
            </div>
            <Modal id={e.id} vehicle={e} />
          </div>
        ))}
      </div>
    </div>
  );
}
