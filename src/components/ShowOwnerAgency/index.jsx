import React, { useEffect, useState } from 'react';
import './style.css';

const ShowOwnerAgency = (props) => {
    const [owner, setOwner] = useState([]);

    useEffect (() => {
      const fetchShowOwner = async () => {
      fetch(`https://mainhouseapi.herokuapp.com/owners/${props.id}` , {
        method: 'get',
        headers: {
        'Content-Type': 'application/json',
        },
        }).then((response) => response.json())
          .then((response) => {
            setOwner(response);
            console.log(response)
            }).catch(function() {
              console.log("error");
        });
      };       

      fetchShowOwner()
      
      }, [props]);
  
    return (

<div className="showbuildingcard">
<div className="containerbuilding-show">
  <div className="card-building-show">
    <div className="card-building-body-show">
      <div className="cardbuildname-show">
      </div>
      <span className="cardbuildref-show"><h2>Prénom: {owner.first_name}</h2></span>
      <span className="cardbuildref-show"><h2>Nom: {owner.last_name}</h2></span>
      <span className="cardbuildref-show"><h2>Email: {owner.email}</h2></span>
      <span className="cardbuildref-show"><h2>Numéro de téléphone: {owner.phone_number}</h2></span>
      <span className="cardbuildref-show"><h2>Numéro de lot: {owner.lot}</h2></span>
      <span className="cardbuildref-show"><h2>Numéro d'appartement: {owner.flat_number}</h2></span>
    </div>
  </div>
  </div>
  </div>
    );
}
export default ShowOwnerAgency;