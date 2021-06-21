import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './style.css';
import Cookies from 'js-cookie';
import ShowEventAgency from '../ShowEventAgency/index';

const IndexEvent = () => {
    const agency = useSelector((state) => state.agency);
    const [event, setEvent] = useState([]);
    const id = useSelector(state => state.agency.id);
    const bearer = useSelector(token => token.bearer)
    const [EventId, setEventId] = useState([]);

    const setDisplay = () => {
      document.getElementsByClassName('aside-right')[0].style.display = "block";
    }

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
            }).catch(function() {
              console.log("error");
        });
      };       

      fetchEvent()
      }, []);

      const getID = (id) => {
        setEventId(id);
        setDisplay();
      }

  return ( 
    <>
    <main className="main">
      <div className="eventlistcards">
        <div className="listevents">
          {event.map(events => (
            <div className="list-item-event" onClick={() => getID(events.id)}>      
              <p className="event-list-title">{events.title}</p>
              <p className="event-list-date">{events.datetime}</p>    
            </div>
          ))}
        </div>
      </div>
    </main>
        <aside className="aside-right">
        <ShowEventAgency id={EventId}/>
  </aside>
  </>
  );
};

export default IndexEvent;