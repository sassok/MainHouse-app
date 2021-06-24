import React, { useEffect, useState } from 'react';
import { BiTrash } from "react-icons/bi";
import './style.css';
import DeleteEvent from '../DeleteEvent/index';
import { FaRegEdit } from 'react-icons/fa';
import EditEvent from '../EditEvent/index';

const ShowEventAgency = (props) => {
    const [event, setOneEvent] = useState([]);
    const [DeleteId, setDeleteId] = useState([]);
    const [EditId, setEditId] = useState();

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

      const selectID = (id) => {
        setDeleteId(id);
      }
      const setID = (id) => {
        setEditId(id);
      }
      
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
          <BiTrash className="icondeleteevent" onClick={() => selectID(event.id)}/>
          <FaRegEdit className="iconeditevent" onClick={() => setID(event.id)}/>
          <EditEvent/> 
        </div>
      </div>
    </div>
    <DeleteEvent id={DeleteId}/>
    <EditEvent id={EditId}/>
  </div>
  );
}
export default ShowEventAgency;