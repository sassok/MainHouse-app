import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './style.css';
import Cookies from 'js-cookie';
import party from "../../assets/images/party.jpeg";

const IndexEvent = () => {
    const agency = useSelector((state) => state.agency);
    const [event, setEvent] = useState([]);
    const id = useSelector(state => state.agency.id);
    const bearer = useSelector(token => token.bearer)

    useEffect (() => {
      const fetchEvent = async () => {
      fetch(`https://mainhouseapi.herokuapp.com/agency-events/${id}` , {
        method: 'get',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
        },
        }).then((response) => response.json())
          .then((response) => {
            setEvent(response.events);
            console.log(response)
            }).catch(function() {
              console.log("error");
        });
  
      };       

      fetchEvent()
      }, []);

  return (  
    <>
    
    <div className="cardscontainer row2Sidebar">
  <div className="containerevent">
  {event.map(events => (
    <div className="card-event">
      <div className="card-event-header">
        <img className="card-event-img" src={party} alt="fiesta" />
      </div>
      <div className="card-event-body">
        <span className="cardeventcity">{events.datetime}</span>
        <div className="cardeventname">
        {events.title}
        </div>
        <span className="cardeventref">Ref : {events.description}</span>
      </div>
    </div>
    
    
  ))}
    </div>
    </div>
    </>

  );
};

export default IndexEvent;