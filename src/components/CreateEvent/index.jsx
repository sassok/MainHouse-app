import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';


const CreateEvent = () => {
  const agency = useSelector((state) => state.agency);
  const [building, setBuilding] = useState([]);
  const id = useSelector(state => state.agency.id);

  const setDisplayNone = () => {
    document.getElementsByClassName('aside-right')[0].style.display = "none";
  }
  
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
  <div className="FormContainerevent">
        <form onSubmit={OnSend} >
            <div className="createbuidform">
            <div className="titlebuildform">
              Créer un événement
            </div>
            <div class="input-style-long">
            <label class="label">Titre de l'événement</label>
            <input className="input--style-4" type="texte" id="title" name="title" placeholder="Titre" required />
            </div>
            <div className="input-style-long">
            <label class="label">Sélectionner un bâtiment</label>
            <select className="input--style-4" id="buildingid" name="buildingid"> 
            {building.map(building => (
            <option className="champform" value={building.id}>{building.name}</option>     
            ))}
            </select>
            </div>
            <div class="input-style-long">
            <label class="label">Date</label>
            <input className="input--style-4" type="datetime-local" id="datetime" name="datetime" />
            </div>
            <div className="input-style-long">
              <label class="label">Durée de l'événement</label>
              <select className="input--style-4" id="duration" name="duration"> 
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
            <div className="input-style-long">
            <label class="label">Description</label>
            <textarea className="input--style-4" id="description" name="description" />
            <p><button type="submit" className="boutonform" onClick={() => setDisplayNone()}>Créer</button></p>
            </div>
            <div className="input-style-long">
            <label class="label"></label>
            </div>
          </div>          
        </form>
    </div>
  )
};

export default CreateEvent;





