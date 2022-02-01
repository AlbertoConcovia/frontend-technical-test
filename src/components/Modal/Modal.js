import './Modal.scss';
import React from 'react';

const Modal = ({id , vehicle}) => {

    const btnId = `myBtn_${id}`;
    const modalId = `myModal_${id}`;
    
    const btnOnclick = () => {
        var modal = document.getElementById(modalId);
        modal.style.display = "block";
    }

    const btnOnclose = () => {
        var modal = document.getElementById(modalId);
        modal.style.display = "none";
    }

  return (

    <div > 
      <button id={btnId} onClick={btnOnclick}>Open Modal</button>
      <div id={modalId} className="modal"> 
        <div className="modal__content">
          <span onClick={btnOnclose} className="close">&times;</span>
          <p>Passengers : {JSON.stringify(vehicle.meta.passengers)} </p>
          <p>Bodystyles : {JSON.stringify(vehicle.meta.bodystyles[0])} </p>
          <p>Emissions : {JSON.stringify(vehicle.meta.emissions.template)} </p>
        </div>
      </div>
    </div> 
  );
};

export default Modal;
