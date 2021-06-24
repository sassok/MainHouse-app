import React, { useState, useEffect } from 'react';
import './style.css';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';


const EditEvent = (props) => {

  console.log("props")
  console.log(props.id)
  console.log("props")

  const agencyName = useSelector(state => state.agency);
  const [eventPicker, setEventPicker] = useState([]);
  useEffect(() => {
    const fetchEvent = () => {
      fetch(`https://mainhouseapi.herokuapp.com/events/${props.id}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
        },
      }).then((response) => response.json())
        .then((response) => {
          console.log(response)
          setEventPicker(response);
        }).catch(function () {
          console.log("error");
        });

    };
    fetchEvent()
    console.log(eventPicker.name)
  }, []);

  const OnSend = (e) => {
    e.preventDefault();
    var title = eventPicker.title;
    var description = eventPicker.description;
    var datetime = eventPicker.datetime;
    var duration = eventPicker.duration;

    if (document.querySelector('#title').value !== "") {
      title = document.querySelector('#title').value;
    }
    if (document.querySelector('#description').value !== "") {
      description = document.querySelector('#description').value;
    }
    if (document.querySelector('#datetime').value !== "") {
      datetime = document.querySelector('#datetime').value;
    }
    if (document.querySelector('#duration').value !== "") {
      duration = document.querySelector('#duration').value;
    }

    const infos = { "event": { "title": title, "description": description, "datetime": datetime, "duration": duration } };
    fetch(`https://mainhouseapi.herokuapp.com/events/${props.id}`, {
      method: 'put',
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
  <>
    <main className="main">
      <div className="wrap">
        <div className="headprofile">
          <p type="text" className="left-head-profile">Bonjour {agencyName.name}</p>
        </div>
      </div>
      <div className="editEventform">
        <form onSubmit={OnSend}>
          <div className="input-style-long">
            <label className="label">Nom de l'événement</label>
            <input className="input--style-4" type="text" name="title" id="title" placeholder={eventPicker.title} />
          </div>
          <div className="input-style-long">
            <label className="label">Description :</label>
            <input className="input--style-4" type="text" name="description" id="description" placeholder={eventPicker.description} />
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
          <button type="submit" className="btcreateform">Modifier</button>
        </form>
      </div>
    </main>
  </>
  );
};

export default EditEvent;
