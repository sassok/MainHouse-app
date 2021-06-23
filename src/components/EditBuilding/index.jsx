import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';
import Cookies from 'js-cookie';
import { IoMdSearch } from "react-icons/io";

const EditBuilding = (id) => {
    /*const building = useSelector((state) => state.building);
    const [editbuilding, seteditbuilding] = useState({});
    const [current_building, setcurrent_building] = useState({});
    const bearer = useSelector(token => token.bearer)

  useEffect(() => {
    document.getElementsByClassName('aside-right')[0].style.display = "block";
    const fetchProfile = () => {
      fetch(`https://mainhouseapi.herokuapp.com/buildings/${id}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
        },
      }).then((response) => response.json())
        .then((response) => {
          console.log(response)
          setcurrent_building(response);
        }).catch(function () {
          console.log("error");
        });

    };
    fetchProfile()
    console.log(building.name)
  }, []);

  const OnSend = (e) => {
    e.preventDefault();
    var name = building.name;
    var adress = building.adress;

    if (document.querySelector('#name').value !== "") {
      name = document.querySelector('#name').value;
    }
    if (document.querySelector('#adress').value !== "") {
      adress = document.querySelector('#adress').value;
    }

    const infos = { "agency": { "name": name, "adress": adress} };
    fetch(`https://mainhouseapi.herokuapp.com/buildings/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
      },
      body: JSON.stringify(infos),
    }).then((response) => response.json())
    .then((response) => {
      seteditbuilding(response);
      console.log(response)
    }).catch(function () {
      console.log("error");
    });


  }*/

  return (
<>
    {/*}<div className="FormContainer">
    <div className="formcontainer1">
        <form onSubmit={OnSend} className="ownerForm" >
          <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15 titleformCreate"> Editer le building </span>
              <div className="field">
                <input className="champform" type="first_name" id="ffirst_name" name="mail" placeholder={building.name} required />
              </div>
            <div className="field">
              <input className="champform" type="last_name" id="flast_name" name="last_name" placeholder="Nom" required />
            </div>
              <button type="submit" id="formOwnerButton" className="boutonform">Valider</button>
            <div className="endform">
              <a  href="#"><Link to="" className="end__link">Nous contacter</Link></a>
            </div>
          </div>
        </form>
    </div>
  </div>{*/}
</>
  );
};

export default EditBuilding; 