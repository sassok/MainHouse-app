import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Cookies } from 'js-cookie';

const CreateOwner = () => {
  const agencyId = useSelector(state => state.agency.id);
  const Bienvenue = "Bienvenue"

  const OnSend = (e) => {
    e.preventDefault();
    
      const first_name = document.querySelector('#ffirst_name').value;
      const last_name = document.querySelector('#flast_name').value;
      const mail = document.querySelector('#fmail').value;
      const phone_number = document.querySelector('#fphone_number').value;
      const flat_number = document.querySelector('#fflat_number').value;
      const buildingId = document.querySelector('#fbuildingId').value;
  
    const data = {"owner": {
      "first_name": first_name,
      "last_name": last_name,
      "email": mail,
      "phone_number": phone_number,
      "flat_number": flat_number,
      "building_id": buildingId,
      "agency_id": agencyId,
      "password": Bienvenue
      } }
        fetch('https://mainhouseapi.herokuapp.com/create-owner', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(data)
        })
        .then( (response) => { 
          console.log(response);
      })
      }
  return (
    <>
  <div className="FormContainerevent">
        <form onSubmit={OnSend} >
            <div className="createbuidform">
            <div className="titlebuildform">
              Ajouter un propriétaire
            </div>
            <div class="input-style-long">
            <label class="label">Prénom</label>
            <input className="input--style-4" type="first_name" id="ffirst_name" name="first_name" required />
            </div>
            <div class="input-style-long">
            <label class="label">Nom</label>
            <input className="input--style-4" type="last_name" id="flast_name" name="last_name" required />
            </div>
            <div class="input-style-long">
            <label class="label">Email</label>
            <input className="input--style-4" type="mail" id="fmail" name="mail" required />
            </div>
            <div class="input-style-long">
            <label class="label">Telephone</label>
            <input className="input--style-4" type="phone_number" id="fphone_number" name="phone_number" required />
            </div>
            <div class="input-style-long">
            <label class="label">Numéro d'appartement</label>
            <input className="input--style-4" type="flat_number" id="fflat_number" name="flat_number" required />
            </div>
          
            <div className="input-style-long">
            <label class="label">Identifiant du bâtiment</label>
            <input className="input--style-4" type="buildingId" id="fbuildingId" name="buildingId" required />
            </div>
            <button type="submit" id="formOwnerButton" className="boutonform">Valider</button>
            <div className="endform">
              <a href="#"><Link to="" className="end__link">Nous contacter</Link></a>
            </div>
          </div>
        </form>
    </div>
  </>
  )
};

export default CreateOwner;