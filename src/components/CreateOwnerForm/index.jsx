import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import PopUpButton from '../PopUpButton/index';

const CreateOwner = () => {
  const agencyId = useSelector(state => state.agency.id);
  const Bienvenue = "Bienvenue"
  const [isOpen, setIsOpen] = useState(true);

  const OnSend = (e) => {
    e.preventDefault();

    if (document.querySelector('#ffirst_name').value !== "") {
      var first_name = document.querySelector('#ffirst_name').value;
    }
    if (document.querySelector('#flast_name').value !== "") {
      var last_name = document.querySelector('#flast_name').value;
    }
    if (document.querySelector('#fmail').value !== "") {
      var mail = document.querySelector('#fmail').value;
    }
    if (document.querySelector('#fphone_number').value !== "") {
      var phone_number = document.querySelector('#fphone_number').value;
    }
    if (document.querySelector('#fflat_number').value !== "") {
      var flat_number = document.querySelector('#fflat_number').value;
    }
    if (document.querySelector('#fbuildingId').value !== "") {
      var buildingId = document.querySelector('#fbuildingId').value;
    }
  
    const data = {"owner": {
      "first_name": first_name,
      "last_name": last_name,
      "email": mail,
      "phone_number": phone_number,
      "flat_number": flat_number,
      "building_id": buildingId,
      "agency_id": agencyId,
      "password": Bienvenue
      }}
        fetch('https://mainhouseapi.herokuapp.com/owners', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json', 
            //'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
          },
          body: JSON.stringify(data)
        })
        .then( (response) => { 
          console.log(response);
      })
      }
  return (
    <>
  <div className="FormContainer">
    <div className="formcontainer1">
        <form onSubmit={OnSend} className="ownerForm" >
          <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15 titleformCreate"> Ajouter un nouveau propriétaire </span>
              <div className="field">
              <input className="champform" type="first_name" id="ffirst_name" name="mail" placeholder="Prenom" required />
            </div>
            <div className="field">
              <input className="champform" type="last_name" id="flast_name" name="last_name" placeholder="Nom" required />
            </div>
            <div className="field">
              <input className="champform" type="mail" id="fmail" name="mail" placeholder="Email" required />
            </div>
            <div className="field">
              <input className="champform" type="phone_number" id="fphone_number" name="phone_number" placeholder="Telephone" required />
            </div>
            <div className="field">
              <input className="champform" type="flat_number" id="fflat_number" name="flat_number" placeholder="Numéro d'appartement" required />
            </div>
            <div className="field">
              <input className="champform" type="buildingId" id="fbuildingId" name="buildingId" placeholder="ID de l'immeuble" required />
            </div>
              <button type="submit" id="formOwnerButton" className="boutonform">Valider</button>
            <div className="endform">
              <a  href="#"><Link to="" className="end__link">Nous contacter</Link></a>
            </div>
          </div>
        </form>
    </div>
  </div>
  </>
  )
};

export default CreateOwner;