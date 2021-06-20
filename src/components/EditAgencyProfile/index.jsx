import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import Cookies from 'js-cookie';
import { IoMdSearch } from "react-icons/io";

const EditAgencyProfile = () => {
  const agency = useSelector((state) => state.agency);
  const [profile, setProfile] = useState({});
  const id = useSelector(state => state.agency.id);
  const bearer = useSelector(token => token.bearer)

  useEffect(() => {
    const fetchProfile = () => {
      fetch(`https://mainhouseapi.herokuapp.com/agencies/${id}`, {
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
    var name = profile.name;
    var siren = profile.siren;
    var adress = profile.adress;
    var zipcode = profile.zipcode;
    var city = profile.city;
    var email = profile.email;
    var phone_number = profile.phone_number;
    if (document.querySelector('#name').value != "") {
      name = document.querySelector('#name').value;
    }
    if (document.querySelector('#siren').value != "") {
      siren = document.querySelector('#siren').value;
    }
    if (document.querySelector('#adress').value != "") {
      adress = document.querySelector('#adress').value;
    }
    if (document.querySelector('#zipcode').value != "") {
      zipcode = document.querySelector('#zipcode').value;
    }
    if (document.querySelector('#city').value != "") {
      city = document.querySelector('#city').value;
    }
    if (document.querySelector('#email').value != "") {
      email = document.querySelector('#email').value;
    }
    if (document.querySelector('#phone_number').value != "") {
      phone_number = document.querySelector('#phone_number').value;
    }

    const infos = { "agency": { "name": name, "siren": siren, "adress": adress, "zipcode": zipcode, "city": city, "email": email, "phone_number": phone_number } };
    fetch(`https://mainhouseapi.herokuapp.com/agencies/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
      },
      body: JSON.stringify(infos),
    })

  }

  return (

    <main className="main">
      <div className="wrap">
        <div className="headprofile">
          <p type="text" className="left-head-profile">Bonjour {profile.name}</p>
        </div>
      </div>
      <div className="editform">
        <form onSubmit={OnSend}>
          <div class="input-style-long">
            <label class="label">Nom de l'agence</label>
            <input class="input--style-4" type="text" name="name" id="name" placeholder={profile.name} />
          </div>
          <div class="input-style-long">
            <label class="label">N° de Siret</label>
            <input class="input--style-4" type="text" name="siren" id="siren" placeholder={profile.siren} />
          </div>
          <div class="input-style-long">
            <label class="label">Adresse</label>
            <input class="input--style-4" type="text" name="adress" id="adress" placeholder={profile.adress} />
          </div>
          <div class="input-style-long">
            <label class="label">Code postal</label>
            <input class="input--style-4" type="text" name="zipcode" id="zipcode" placeholder={profile.zipcode} />
          </div>
          <div class="input-style-long">
            <label class="label">Ville</label>
            <input class="input--style-4" type="text" name="city" id="city" placeholder={profile.city} />
          </div>
          <div class="input-style-long">
            <label class="label">Email</label>
            <input class="input--style-4" type="text" name="email" id="email" placeholder={profile.email} />
          </div>
          <div class="input-style-long">
            <label class="label">Téléphone</label>
            <input class="input--style-4" type="text" name="phone_number" id="phone_number" placeholder={profile.phone_number} />
          </div>
          <button type="submit" className="btcreateform">Modifier</button>
        </form>
      </div>
    </main>
  );
};

export default EditAgencyProfile;
