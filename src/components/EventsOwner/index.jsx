import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import closeButton from '../../assets/images/iconeCloseButton.png';

import Cookies from 'js-cookie';
import party from "../../assets/images/party.jpeg";

const EventsOwner = () => {
    const owner = useSelector((state) => state.owner);
    const [event, setEvent] = useState([]);
    const id = useSelector(state => state.owner.building_id);
    const bearer = useSelector(token => token.bearer)
    const [Eventid, setEventId] = useState([]);

    const setDisplay = () => {
      document.getElementsByClassName('aside-right')[0].style.display = "block";
      document.getElementsByClassName('showownereventright')[0].style.display = "block";
    }

    const setDisplayNone = () => {
      document.getElementsByClassName('aside-right')[0].style.display = "none";
    }

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

      const ShowEventOwner = (props) => {
        const [singleevent, setOneEvent] = useState([]);
    
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
            <div className="card-building-header-show">
              <img className="card-building-img-show " src="http://www.riadmehdi.net/wp-content/uploads/2018/11/csm_img-event_54745635d1.jpg" alt="rover" />
            </div>
            <div className="card-building-body-show">
              <div className="cardbuildname-show">
                <p>{singleevent.title}</p>
              </div>
              <span className="cardbuildref-show">Description: {singleevent.description}</span>
              <span className="cardbuildref-show">Le: {singleevent.datetime}</span>
              <span className="cardbuildref-show mb-5">Durée: {singleevent.duration} minutes</span>
              <img className="iconeCloseButton" src={closeButton} alt="closebutton" onClick={() => setDisplayNone()}></img>
            </div>
          </div>
        </div>

      </div>



    

 
        );
      }

      const getId = (id) => {
        setEventId(id);
        setDisplay();
      }

  return ( 
    <>
    <main className="main">
      <div className="eventslistcards">
        <div className="listevents">
          {event.map(events => (
            <div className="list-item-event" key="events.id" onClick={() => getId(events.id)}>      
              <p className="event-list-title">{events.title}</p>
              <p className="event-list-date">{events.datetime}</p>
              <p className="event-list-description">{events.description}</p>    
            </div>
          ))}
        </div>
      </div>
    </main>
     <aside className="aside-right showownereventright">
     <div className="showownereventright">
     <ShowEventOwner id={Eventid}/>
     </div>
     </aside>
     </>
  );
};

export default EventsOwner;