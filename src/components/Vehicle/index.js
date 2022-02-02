import React from "react";
import Modal from '../Modal/index';
import VehicleImage from '../VehicleImage';
import './style.scss';

const Vehicle = ({ vehicle }) => {

return (

    <div data-testid="idVehicle" key={vehicle.id} className="vehicle">
        <VehicleImage vehicle={vehicle} />
        <div className="vehicle__labels">
            <p> Price: {vehicle.price} </p>
            <p> Description: {vehicle.description} </p>
        </div>
        <Modal id={vehicle.id} vehicle={vehicle} />
    </div>
)
};

export default Vehicle;
