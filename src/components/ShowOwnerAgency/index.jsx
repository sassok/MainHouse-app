import React, { useEffect, useState } from 'react';
import ShowOwner from '../ShowOwner';
import './style.css';
import { BiPencil, BiMobileAlt, BiMessageRounded } from "react-icons/bi";
import {IoTrashBinOutline} from 'react-icons/io5'
import closeButton from '../../assets/images/iconeCloseButton.png';
const ShowOwnerAgency = (props) => {
  const [owner, setOwner] = useState([]);
  const [building, setBuilding] = useState([]);

  useEffect(() => {
    const fetchShowOwner = async () => {
      fetch(`https://mainhouseapi.herokuapp.com/owners/${props.id}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
        .then((response) => {
          setOwner(response);
          console.log(response)
        }).catch(function () {
          console.log("error");
        });
    };
    fetchShowOwner()
  }, [props]);

  useEffect(() => {
    const fetchShowBuilding = async () => {
      fetch(`https://mainhouseapi.herokuapp.com/buildings/${owner.building_id}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
        .then((response) => {
          setBuilding(response);
          console.log(response)
        }).catch(function () {
          console.log("error");
        });
    };
    fetchShowBuilding()
  }, [owner]);

 const setDisplayNone = () => {
    document.getElementsByClassName('aside-right')[0].style.display = "none";
  }
  return (
    <div>
      <div className="infoshead">
        <div className="ajustprofile">
          <div className="ownerifoshead">
            <img src="https://st4.depositphotos.com/21557188/23287/v/600/depositphotos_232872160-stock-illustration-simple-person-icon-linear-symbol.jpg" class="owner-image-show" />
          </div>
          <div className="ownerifoshead">
            <p className="nameownercard">{owner.first_name} {owner.last_name}</p>
            <p className="ownerinfoshead"><IoTrashBinOutline className="iconownerdelete" /><BiPencil className="iconowneredit" /></p>
          </div>
        </div>
      </div>
      <div className="mailandphone">
        <div className="iconifos">
          <p className="iconifos emailowner"><BiMessageRounded className="emailiconowner" /></p>
          <p className="iconifos">{owner.email}</p>
        </div>
        <div className="iconifos">
          <p className="iconifos">< BiMobileAlt className="phoneiconowner" /></p>
          <p className="iconifos phoneowner">{owner.phone_number}</p>
        </div>
      </div>
      <div className="infosownerbody">
        <p className="infoownerbuildname">{building.name}</p>
        <p className="infoowneradress">{building.adress}</p>
        <p className="infoowneradress">{building.zipcode} {building.city}</p>
        <p className="infoownerrefbuild">Ref : {building.reference}</p>
        <p className="infoownerlotnb">Lot N°{owner.lot}</p>
        <p className="infoownerflatnb">Appartement N°{owner.flat_number}</p>
      </div>
      <img className="iconeCloseButton" src={closeButton} alt="closebutton" onClick={() => setDisplayNone()}></img>
    </div>

  );
}
export default ShowOwnerAgency;