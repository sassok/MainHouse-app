import React, { useEffect, useState } from 'react';
import './style.css';
import DeleteEvent from '../DeleteEvent/index';
import { IoTrashBinOutline } from 'react-icons/io5'
import closeButton from '../../assets/images/iconeCloseButton.png';
import { BiPencil } from 'react-icons/bi';

const ShowEventAgency = (props) => {
  const [event, setOneEvent] = useState([]);
  const [DeleteId, setDeleteId] = useState([]);

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
        }).catch(function () {
          console.log("error");
        });
    };
    fetchShowEvent()
  }, [props]);

  const selectID = (id) => {
    setDeleteId(id);
  }
  const setDisplayNone = () => {
    document.getElementsByClassName('aside-right')[0].style.display = "none";
  }
  return (
    <>
      <div className="showbuildingcard">
        <div className="containerbuilding-show">
          <div className="card-building-show">
            <div className="card-building-body-show">
              <div className="cardbuildname-show">
              </div>
              <p><img className="responsiveCloseButtonEvent rotated" src={closeButton} alt="closebutton" onClick={() => setDisplayNone()} /><IoTrashBinOutline className="icondeleteevent" onClick={() => selectID(event.id)} /></p>
              <span className="cardbuildref-show">Titre: {event.title}</span>
              <span className="cardbuildref-show">Description: {event.description}</span>
              <span className="cardbuildref-show">Date: {event.datetime}</span>
              <span className="cardbuildref-show">Durée: {event.duration} minutes</span>
              <IoTrashBinOutline className="icondeleteevent" onClick={() => selectID(event.id)} />
            </div>
          </div>
        </div>
        <DeleteEvent id={DeleteId} />
      </div>
      <img className="iconeCloseButton" src={closeButton} alt="closebutton" onClick={() => setDisplayNone()}></img>
    </>
  );
}
export default ShowEventAgency;