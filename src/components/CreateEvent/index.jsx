import React, { useState, useEffect } from 'react';
import './style.css';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';


const CreateEvent = () => {
  const agencyId = Cookies.get('agency_id');
  const agency = useSelector((state) => state.agency);
  const [building, setBuilding] = useState([]);
  const id = useSelector(state => state.agency.id);

  useEffect (() => {
    const fetchBuilding = async () => {
    fetch(`https://mainhouseapi.herokuapp.com/agency-buildings/${id}` , {
      method: 'get',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
      },
      }).then((response) => response.json())
        .then((response) => {
          setBuilding(response.buildings);
          }).catch(function() {
            console.log("error");
      });

    };       

    fetchBuilding()
    }, []);

    const OnSend = (e) => {
      e.preventDefault();
      const agency_id = agency.id
      const title = document.querySelector('#title').value;
      const building_id = document.querySelector('#buildingid').value;
      const datetime = document.querySelector('#datetime').value;
      const duration = document.querySelector('#duration').value;
      const description = document.querySelector('#description').value;
 
      const infos = { "event": { "agency_id": agency_id, "building_id": building_id, "title": title, "description": description, "datetime": datetime, "duration": duration} };
      console.log(infos)
      fetch(`https://mainhouseapi.herokuapp.com/events`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
        },
        body: JSON.stringify(infos),
      }).then((response) => response.json())
      .then((response) => {

        console.log(response)
      }).catch(function () {
        console.log("error");
      });
  
  
    }
  
  return (
    <div className="bodyevent">
    <div className="FormContainerevent">
      <div className="formcontainer1">
          <form onSubmit={OnSend} className="ownerForm" >
            <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15 titleformCreate"> Créer un événement </span>
              <div className="field">
              <input className="champform" type="texte" id="title" name="title" placeholder="Titre" required />
            </div>
            <div className="labelformcreate">
              <label class="labelform">Nom de l'immeuble</label>
              <select className="formdropdowncreate" id="buildingid" name="buildingid"> 
              {building.map(building => (
                <option className="champform" value={building.id}>{building.name}</option>     
                ))}
              </select>
            </div>
            <div className="labelformcreate">
              <label class="labelform">Date JJ/MM/AAAA hh:mm</label>
              <input className="formdropdowncreate" type="datetime-local" id="datetime" name="datetime" />
            </div>
            <div className="labelformcreate">
              <label class="labelform">Durée de l'événement</label>
              <select className="formdropdowncreate" id="duration" name="duration"> 
                <option className="champform" value="5">5 minutes</option> 
                <option className="champform" value="10">10 minutes</option>
                <option className="champform" value="15">15 minutes</option>  
                <option className="champform" value="20">20 minutes</option>  
                <option className="champform" value="25">25 minutes</option>  
                <option className="champform" value="30">30 minutes</option>  
                <option className="champform" value="35">35 minutes</option>  
                <option className="champform" value="40">40 minutes</option>  
                <option className="champform" value="45">45 minutes</option>  
                <option className="champform" value="50">50 minutes</option>  
                <option className="champform" value="55">55 minutes</option>        
                <option className="champform" value="60">60 minutes</option>
                <option className="champform" value="90">90 minutes</option>
                <option className="champform" value="120">120 minutes</option>
                <option className="champform" value="180">180 minutes</option>
              </select>
            </div>
            <div className="field">
            <textarea className="champform" id="description" name="description" />
            </div>
              <button type="submit" className="boutonform">Créer</button>
          </div>
        </form>
    </div>
  </div>
  </div>
  )
};

export default CreateEvent;





