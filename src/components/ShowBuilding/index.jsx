import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './style.css';
import Cookies from 'js-cookie';
import './style.css';

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
      <div className="containerShowBuilding">

<div className="showbuildingcard">
<div className="containerbuilding-show">
  <div className="card-building-show">
    <div className="card-building-header-show">
      <img className="card-building-img-show " src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
    </div>
    <div className="card-building-body-show">
      <span className="cardbuildcity-show">Lyon</span>
      <div className="cardbuildname-show">
        <p>{oneBuilding.name}</p>
      </div>
      <span className="cardbuildref-show">{oneBuilding.reference}</span>
    </div>
  </div>
  </div>
  </div>
  </div>
    );
}
export default ShowBuilding;