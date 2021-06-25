import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import Cookies from 'js-cookie';
import ShowEventAgency from '../ShowEventAgency/index';
import 'reactjs-popup/dist/index.css';
import CreateEvent from '../CreateEvent/index';
import { BiPlusCircle } from "react-icons/bi";
import closeButton from '../../assets/images/iconeCloseButton.png';

const IndexEvent = () => {
 
    const agency = useSelector((state) => state.agency);
    const [event, setEvent] = useState([]);
    const id = useSelector(state => state.agency.id);
    const bearer = useSelector(token => token.bearer)
    const [EventId, setEventId] = useState([]);

    const setDisplay = () => {
      document.getElementsByClassName('aside-right')[0].style.display = "block";
      document.getElementsByClassName('showeventright')[0].style.display = "block";
      document.getElementsByClassName('createeventright')[0].style.display = "none";
    }
   
    const setDisplayCreate = () => {
      document.getElementsByClassName('aside-right')[0].style.display = "block";
      document.getElementsByClassName('createeventright')[0].style.display = "block";
      document.getElementsByClassName('showeventright')[0].style.display = "none";
    }

    const setDisplayNone = () => {
      document.getElementsByClassName('aside-right')[0].style.display = "none";
      document.getElementsByClassName('createeventright')[0].style.display = "none";
      document.getElementsByClassName('showeventright')[0].style.display = "none";
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
            console.log(response)
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
        <div className="positionicaddeve ">
        <BiPlusCircle className="iconaddevent" onClick={() => setDisplayCreate()}/>
      </div>
          {event.map(events => (
            <div className="list-item-event" key={events.id} onClick={() => getID(events.id)}>      
              <p className="event-list-title">{events.title}</p>
              <p className="event-list-date">{new Intl.DateTimeFormat("fr-FR", {
                year: "numeric",
                month: "long",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
                }).format(new Date(events.datetime))}
              </p>   
              <p className="event-list-title">{events.duration} minutes</p>
            </div>
          ))}
        </div>
      </div>
    </main>
      <aside className="aside-right">
        <div className="createeventright">
          <CreateEvent  />
        </div>
        <div className="showeventright">
          <ShowEventAgency id={EventId} />
        </div>
        <img className="iconeCloseButton" src={closeButton} alt="closebutton" onClick={() => setDisplayNone()}></img>
      </aside>
  </>
  );
};

export default IndexEvent;