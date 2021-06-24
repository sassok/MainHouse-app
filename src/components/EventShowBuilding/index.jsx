import React, { useState, useEffect} from 'react';
import './style.css';
import Cookies from 'js-cookie';

const EventShowBuilding = (props) => {
const [eventBuilding, setEventB] = useState([]);


    useEffect (() => {
      const fetchEventBuilding = async () => {
      fetch(`https://mainhouseapi.herokuapp.com/building-events/${props.id}` , {
        method: 'get',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
        },
        }).then((response) => response.json())
          .then((response) => {
            setEventB(response.events);
            }).catch(function() {
              console.log("error");
        });
      };       

      fetchEventBuilding()
      }, [props]);

  return (  
    <>
        <hr/>
        <div className="eventlistcardsBuilding">
        <span className="cardbuildref-show mb-5 mt-5">Evenements: </span>
        {eventBuilding.map(eventsB => (
        <div className="listeventsBuilding">
            <div className="list-item-eventBuilding">      
              <p className="event-list-titleBuilding">{eventsB.title}</p>   
              <p className="event-list-descBuilding">{eventsB.description}</p>
            </div>
          
        </div>
        ))}
      </div>
    </>

  );
};

export default EventShowBuilding;