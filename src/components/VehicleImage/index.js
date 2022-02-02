import React from "react";
import "./style.scss";

const VehicleImage = ({ vehicle }) => {
    return (
        <div data-testid="idVehicleImage">
            <img
                src={vehicle.media[0].url}
                alt="fpace_k17"
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default VehicleImage;
