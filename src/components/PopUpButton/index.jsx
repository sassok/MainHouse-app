import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CreateOwner from '../CreateOwnerForm/index';
 
const PopUpButton = () => (
    <Popup trigger={<button className="button addownbt"> Ajouter </button>} modal>
      <span> <CreateOwner /> </span>
    </Popup>
);

export default PopUpButton;