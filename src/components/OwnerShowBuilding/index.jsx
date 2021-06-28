import './style.css';
import React, { useEffect, useState } from 'react';

const OwnerShowBuilding = (props) => {
  const [listOwners, setListOwners] = useState([]);

  useEffect(() => {
    const fetchListOwner = async () => {
      fetch(`https://mainhouseapi.herokuapp.com/building-owners/${props.id}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
        .then((response) => {
          setListOwners(response.owners);
        }).catch(function () {
          console.log("error");
        });
    };
    fetchListOwner();
  }, [props]);

  return (
    <>
      <div className="ownerlistcards">
        <div className="listowners">
          {listOwners.map(owner => (
            <div className="list-item-owner">
              <div className="img-owner-list">
                <img src="https://st4.depositphotos.com/21557188/23287/v/600/depositphotos_232872160-stock-illustration-simple-person-icon-linear-symbol.jpg" className="owner-image" />
              </div>
              <div className="owner-list-content">
                <p className="owner-list-name">{owner.first_name} {owner.last_name}</p>
                <p className="owner-list-reff">{owner.email} <br /> {owner.phone_number}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OwnerShowBuilding;