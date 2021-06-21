import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import Cookies from 'js-cookie';
import { IoMdSearch } from "react-icons/io";

const EditOwnerProfile = () => {
    const owner = useSelector((state) => state.owner);
    const [profile, setProfile] = useState([]);
    const id = useSelector(state => state.owner.id);
    const bearer = useSelector(token => token.bearer)

  useEffect(() => {
    const fetchProfile = () => {
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
    if (document.querySelector('#first_name').value != "") {
        first_name = document.querySelector('#first_name').value;
    }
    if (document.querySelector('#last_name').value != "") {
        last_name = document.querySelector('#last_name').value;
    }
    if (document.querySelector('#email').value != "") {
      email = document.querySelector('#email').value;
    }
    if (document.querySelector('#phone_number').value != "") {
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
    })

  }

  return (

    <main className="main">
      <div className="wrap">
        <div className="headprofile">
          <p type="text" className="left-head-profile">Bonjour {profile.last_name} {profile.first_name}</p>
        </div>
      </div>
      <div className="editform">
        <form onSubmit={OnSend}>
          <div className="input-style-long">
            <label className="label">Nom</label>
            <input className="input--style-4" type="text" name="first_name" id="first_name" placeholder={profile.first_name} />
          </div>
          <div className="input-style-long">
            <label className="label">Prénom</label>
            <input className="input--style-4" type="text" name="last_name" id="last_name" placeholder={profile.last_name} />
          </div>
          <div className="input-style-long">
            <label className="label">Email</label>
            <input className="input--style-4" type="text" name="email" id="email" placeholder={profile.email} />
          </div>
          <div className="input-style-long">
            <label className="label">Téléphone</label>
            <input className="input--style-4" type="text" name="phone_number" id="phone_number" placeholder={profile.phone_number} />
          </div>
          <button type="submit" className="btcreateform">Modifier</button>
        </form>
      </div>
    </main>
  );
};

export default EditOwnerProfile;
