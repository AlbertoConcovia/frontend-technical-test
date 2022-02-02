import React from "react";
import Modal from '../Modal/index';

const Vehicle = ({ vehicle }) => {

return (

    <div data-testid="idVehicle" key={vehicle.id} className="vehicle">
        <div>
            <img
                src={vehicle.media[0].url}
                alt="fpace_k17"
                width="100%"
                height="100%"
            />
        </div>
        <div className="labels">
            <p> Price: {vehicle.price} </p>
            <p> Description: {vehicle.description} </p>
        </div>

        <div className="vehiclelist__modal">
            <Modal id={vehicle.id} vehicle={vehicle} />
        </div>
    </div>
)
};

export default Vehicle;
