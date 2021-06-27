import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import Cookies from 'js-cookie';
import { IoMdSearch } from "react-icons/io";
import { BiMobileAlt, BiMessageRounded } from "react-icons/bi";

const EditOwnerProfile = () => {
    const owner = useSelector((state) => state.owner);
    const [profile, setProfile] = useState([]);
    const id = useSelector(state => state.owner.id);
    const buildingid = useSelector(state => state.owner.building_id);
    const [building, setBuilding] = useState([]);
    const bearer = useSelector(token => token.bearer)

    const showright = () => {
      document.getElementsByClassName('aside-right')[0].style.display = "block";
    }

    

  useEffect(() => {
    const fetchProfile = () => {
      showright();
      fetch(`https://mainhouseapi.herokuapp.com/owners/${id}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
        },
      }).then((response) => response.json())
        .then((response) => {
          console.log(response)
          setProfile(response);
        }).catch(function () {
          console.log("error");
        });

    };
    fetchProfile()
    console.log(profile.name)
  }, []);

  const OnSend = (e) => {
    e.preventDefault();
    var first_name = profile.first_name;
    var last_name = profile.last_name;
    var email = profile.email;
    var phone_number = profile.phone_number;
    if (document.querySelector('#first_name').value !== "") {
        first_name = document.querySelector('#first_name').value;
    }
    if (document.querySelector('#last_name').value !== "") {
        last_name = document.querySelector('#last_name').value;
    }
    if (document.querySelector('#email').value !== "") {
      email = document.querySelector('#email').value;
    }
    if (document.querySelector('#phone_number').value !== "") {
      phone_number = document.querySelector('#phone_number').value;
    }

    const infos = { "owner": { "first_name": first_name, "last_name": last_name, "email": email, "phone_number": phone_number } };
    fetch(`https://mainhouseapi.herokuapp.com/owners/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('Bearer_owner')}`
      },
      body: JSON.stringify(infos),
    }).then((response) => response.json())
    .then((response) => {
      setProfile(response);
    }).catch(function () {
      console.log("error");
    });
  }

  useEffect(() => {
    const fetchShowBuilding = async () => {
      fetch(`https://mainhouseapi.herokuapp.com/buildings/${buildingid}`, {
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
  }, [profile]);

  const OwnerProfileRight = () => {
    return (
      <div>
        <div className="wrap">
          <div className="headprofileright">
            <div className="img-owner-profile">
              <img src="https://st4.depositphotos.com/21557188/23287/v/600/depositphotos_232872160-stock-illustration-simple-person-icon-linear-symbol.jpg" className="owner-image-profile" />
            </div>
          </div>
        </div>
        <div className="backgroundprofright">
          <div className="inner-div">
            <div className="front">
              <div className="front__bkg-photo"></div>
              <img src="https://st4.depositphotos.com/21557188/23287/v/600/depositphotos_232872160-stock-illustration-simple-person-icon-linear-symbol.jpg" className="front__face-photo" />
              <div className="front__text">
                <h3 className="front__text-header">{profile.first_name} {profile.last_name}</h3>
                <p className="front__text-para">{building.adress}</p>
                <p className="front__text-para">{building.zipcode} {building.city}</p>
                <p className="front__text-para">lot N°{profile.lot}</p>
                <p className="front__text-para">Appartement N°: {profile.flat_numbe}</p>
              </div>
              <div className="emailagencyglob">
                <p className="iconifos emailagency"><BiMessageRounded className="emailiconowner" /></p>
                <p className="iconifos">{profile.email}</p>
              </div>
              <div className="phoneagencyglob">
                <p className="iconifos phoneagency">< BiMobileAlt className="phoneiconowner" /></p>
                <p className="iconifos">{profile.phone_number}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <>
    <main className="main">
      <div className="wrap">
        <div className="headprofile">
          <p type="text" className="left-head-profile">Bonjour {profile.last_name} {profile.first_name}</p>
        </div>
      </div>
      <div className="contanairfromeditmyprofile"></div>
      <div className="titleformmyprof">Modifier mes informations</div>
      <div className="editform">
        <form onSubmit={OnSend}>
          <div className="input-style-long">
            <label className="label">Nom</label>
            <input className="input--style-edit" type="text" name="first_name" id="first_name" placeholder={profile.first_name} />
          </div>
          <div className="input-style-long">
            <label className="label">Prénom</label>
            <input className="input--style-edit" type="text" name="last_name" id="last_name" placeholder={profile.last_name} />
          </div>
          <div className="input-style-long">
            <label className="label">Email</label>
            <input className="input--style-edit" type="text" name="email" id="email" placeholder={profile.email} />
          </div>
          <div className="input-style-long">
            <label className="label">Téléphone</label>
            <input className="input--style-edit" type="text" name="phone_number" id="phone_number" placeholder={profile.phone_number} />
          </div>
          <button type="submit" className="btcreateform">Modifier</button>
        </form>
      </div>
    </main>
    <aside className="aside-right">
        <OwnerProfileRight />
      </aside>
    </>
  );
};

export default EditOwnerProfile;
