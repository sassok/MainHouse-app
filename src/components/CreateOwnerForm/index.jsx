import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

const CreateOwner = () => {
  const agencyId = useSelector(state => state.agency.id);
  const Bienvenue = "Bienvenue"
  const OnSend = (e) => {
    e.preventDefault();

        fetch('https://mainhouseapi.herokuapp.com/owners', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json', 
            //'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
          },
          body: JSON.stringify({
              first_name: document.querySelector('#ffirst_name').value,
              last_name: document.querySelector('#flast_name').value,
              email: document.querySelector('#fmail').value,
              phone_number: document.querySelector('#fphone_number').value,
              flat_number: document.querySelector('#fflat_number').value,
              building: document.querySelector('#fbuildingId').value,
              agency: agencyId.value,
              password: Bienvenue.value,
          }
        )  
      }
      )}
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