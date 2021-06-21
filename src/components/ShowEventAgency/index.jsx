import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './style.css';
import Cookies from 'js-cookie';
import './style.css';

const ShowEventAgency = (props) => {
    const [event, setOneEvent] = useState([]);

    useEffect (() => {
      const fetchShowEvent = async () => {
      fetch(`https://mainhouseapi.herokuapp.com/events/${props.id}` , {
        method: 'get',
        headers: {
        'Content-Type': 'application/json',
        },
        }).then((response) => response.json())
          .then((response) => {
            setOneEvent(response);
            console.log(response)
            }).catch(function() {
              console.log("error");
        });
      };       

      fetchShowEvent()
      
      }, [props]);
  
    return (

<div className="showbuildingcard">
<div className="containerbuilding-show">
  <div className="card-building-show">
    <div className="card-building-body-show">
      <div className="cardbuildname-show">
      </div>
      <span className="cardbuildref-show">Titre: {event.title}</span>
      <span className="cardbuildref-show">Description: {event.description}</span>
      <span className="cardbuildref-show">Date: {event.datetime}</span>
    </div>
  </div>
  </div>
  </div>
    );
}
export default ShowEventAgency;