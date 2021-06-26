import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import Cookies from 'js-cookie';
import 'reactjs-popup/dist/index.css';
import { BiPlusCircle } from "react-icons/bi";
import closeButton from '../../assets/images/iconeCloseButton.png';
import { IoTrashBinOutline } from 'react-icons/io5'

const IndexEvent = () => {
  const agency = useSelector((state) => state.agency);
  const [event, setEvent] = useState([]);
  const id = useSelector(state => state.agency.id);
  const bearer = useSelector(token => token.bearer)
  const [EventId, setEventId] = useState([]);
  const [deleteeventid, setDestroy] = useState(0);
  const [create, setCreate] = useState();

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

  const fetchEvent = async () => {
    fetch(`https://mainhouseapi.herokuapp.com/agency-events/${id}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
      },
    }).then((response) => response.json())
      .then((response) => {
        setEvent(response.events);
        console.log(response)
      }).catch(function () {
        console.log("error");
      });
  };

  React.useEffect(() => { fetchEvent() }, [create, deleteeventid])

  const CreateEvent = () => {
    const [building, setBuilding] = useState([]);

    const setDisplayNone = () => {
      document.getElementsByClassName('aside-right')[0].style.display = "none";
    }

    useEffect(() => {
      const fetchBuilding = async () => {
        fetch(`https://mainhouseapi.herokuapp.com/agency-buildings/${id}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
          },
        }).then((response) => response.json())
          .then((response) => {
            setBuilding(response.buildings);
          }).catch(function () {
            console.log("error");
          });
      };
      fetchBuilding()
    }, []);

    const OnSendCreate = (e) => {
      e.preventDefault();
      const agency_id = agency.id
      const createtitle = document.querySelector('#createtitle').value;
      const createbuilding_id = document.querySelector('#createbuildingid').value;
      const createdatetime = document.querySelector('#createdatetime').value;
      const createduration = document.querySelector('#createduration').value;
      const createdescription = document.querySelector('#createdescription').value;
      const createinfos = { "event": { "agency_id": agency_id, "building_id": createbuilding_id, "title": createtitle, "description": createdescription, "datetime": createdatetime, "duration": createduration } };

      fetch(`https://mainhouseapi.herokuapp.com/events`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
        },
        body: JSON.stringify(createinfos),
      }).then((response) => response.json())
        .then((response) => {
          setCreate(response)
          console.log(response)
        }).catch(function () {
          console.log("error");
        });

    }
    return (
      <div className="FormContainerevent">
        <form onSubmit={OnSendCreate} >
          <div className="createbuidform">
            <div className="titlebuildform">
              Créer un événement
                      </div>
            <div className="input-style-long">
              <label className="label">Titre de l'événement</label>
              <input className="input--style-4" type="texte" id="createtitle" name="createtitle" placeholder="Titre" required />
            </div>
            <div className="input-style-long">
              <label className="label">Sélectionner un bâtiment</label>
              <select className="input--style-4" id="createbuildingid" name="createbuildingid">
                {building.map(building => (
                  <option className="champform" value={building.id}>{building.name}</option>
                ))}
              </select>
            </div>
            <div className="input-style-long">
              <label className="label">Date</label>
              <input className="input--style-4" type="datetime-local" id="createdatetime" name="createdatetime" />
            </div>
            <div className="input-style-long">
              <label className="label">Durée de l'événement</label>
              <select className="input--style-4" id="createduration" name="createduration">
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
              <label className="label">Description</label>
              <textarea className="input--style-4" id="createdescription" name="createdescription" />
              <p><button type="submit" className="boutonform" onClick={() => setDisplayNone()}>Créer</button></p>
            </div>
            <div className="input-style-long">
              <label className="label"></label>
            </div>
          </div>
        </form>
      </div>
    )
  };

  const ShowEventAgency = (props) => {
    const [showevent, setOneEvent] = useState([]);

    useEffect(() => {
      const fetchShowEvent = async () => {
        fetch(`https://mainhouseapi.herokuapp.com/events/${props.id}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => response.json())
          .then((response) => {
            setOneEvent(response);
          })
      };
      fetchShowEvent()
    }, [props]);

    const setDisplayNone = () => {
      document.getElementsByClassName('aside-right')[0].style.display = "none";
    }
    return (
      <div className="showbuildingcard">
        <div className="containerbuilding-show">
          <div className="card-building-show">
          <div className="containerCloseButton">
          <img className="responsiveCloseButtonBuilding rotated" src={closeButton} alt="closebutton" onClick={() => setDisplayNone()} />
        </div>
            <div className="card-building-header-show">
              <img className="card-building-img-show " src="http://www.riadmehdi.net/wp-content/uploads/2018/11/csm_img-event_54745635d1.jpg" alt="rover" />
            </div>
            <div className="card-building-body-show">
              <div className="cardbuildname-show">
                <p>{showevent.title}</p>
              </div>
              <span className="cardbuildref-show">Description: {showevent.description}</span>
              <span className="cardbuildref-show mb-5">Durée: {showevent.duration} minutes</span>
              <IoTrashBinOutline className="icondeleteevent" onClick={() => deleteEvent(showevent.id)} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const deleteEvent = (deleteid) => {

    fetch(`https://mainhouseapi.herokuapp.com/events/${deleteid}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setDestroy(deleteeventid + 1);
    setDisplayNone();
  };

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
              <BiPlusCircle className="iconaddevent" onClick={() => setDisplayCreate()} />
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
          <CreateEvent />
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
