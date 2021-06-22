import React, { useEffect, useState } from 'react';
import './style.css';
import './style.css';
import closeButton from '../../assets/images/iconeCloseButton.png';
import OwnerShowBuilding from '../OwnerShowBuilding';
import EventShowBuilding from '../EventShowBuilding/index'


const setDisplayNone = () => {
      document.getElementsByClassName('aside-right')[0].style.display = "none";
    }

const ShowBuilding = (props) => {
    const [oneBuilding, setOneBuilding] = useState([]);

    useEffect (() => {
      const fetchShowBuilding = async () => {
      fetch(`https://mainhouseapi.herokuapp.com/buildings/${props.id}` , {
        method: 'get',
        headers: {
        'Content-Type': 'application/json',
        },
        }).then((response) => response.json())
          .then((response) => {
            setOneBuilding(response);
            console.log(response)
            }).catch(function() {
              console.log("error");
        });
      };       

      fetchShowBuilding()
      
      }, [props]);
  
    return (

<div className="showbuildingcard">
<div className="containerbuilding-show">
  <div className="card-building-show">
    <div className="card-building-header-show">
      <img className="card-building-img-show " src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
    </div>
    <div className="card-building-body-show">
      <div className="cardbuildname-show">
        <p>{oneBuilding.name}</p>
      </div>
      <span className="cardbuildref-show">Ville: {oneBuilding.city}</span>
      <span className="cardbuildref-show">Adresse: {oneBuilding.adress}</span>
      <span className="cardbuildref-show mb-5">Reference: {oneBuilding.reference}</span>
      <img className="iconeCloseButton" src={closeButton} alt="closebutton" onClick={() => setDisplayNone()}></img>
      <hr/>
      <span className="cardbuildref-show-owner mb-5">Propriétaires: </span>
      <div className="ContainerOwnerEventShowBuilding">
        <div className="ContainerOwnerShowBuilding">
          <OwnerShowBuilding id={oneBuilding.id}/>
        </div>
        <div className="ContainerEventShowBuilding">
          <EventShowBuilding id={oneBuilding.id}/>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
    );
}
export default ShowBuilding;