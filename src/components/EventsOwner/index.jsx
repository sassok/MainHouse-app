import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Cookies from 'js-cookie';
import party from "../../assets/images/party.jpeg";

const EventsOwner = () => {
    const owner = useSelector((state) => state.owner);
    const [event, setEvent] = useState([]);
    const id = useSelector(state => state.owner.building_id);
    const bearer = useSelector(token => token.bearer)

    useEffect (() => {
      const fetchEvent = async () => {
      fetch(`https://mainhouseapi.herokuapp.com/building-events/${id}` , {
        method: 'get',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('Bearer_owner')}`
        },
        }).then((response) => response.json())
          .then((response) => {
            setEvent(response.events);
            }).catch(function() {
              console.log("error");
        });
      };       

      fetchEvent()
      }, []);

  return ( 
    <main className="main">
      <div className="eventlistcards">
        <div className="listevents">
          {event.map(events => (
            <div className="list-item-event" key="events.id">      
              <p className="event-list-title">{events.title}</p>
              <p className="event-list-date">{events.datetime}</p>
              <p className="event-list-description">{events.description}</p>    
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default EventsOwner;