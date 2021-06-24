import React, { useState, useEffect } from 'react';
import './style.css';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

const AgencyProfileRight = () => {
  const [profile, setProfile] = useState({});
  const id = useSelector(state => state.agency.id);

  useEffect(() => {
      document.getElementsByClassName('aside-right')[0].style.display = "block";
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
    }, []);

  return (

    <div>
      <div className="wrap">
        <div className="headprofileright">
        <div className="img-owner-profile">
                <img src="https://st4.depositphotos.com/21557188/23287/v/600/depositphotos_232872160-stock-illustration-simple-person-icon-linear-symbol.jpg" className="owner-image-profile"/>
              </div>
        </div>
      </div>
    
     

  <div className="backgroundprofright">
  <div class="inner-div">
    <div class="front">
      <div class="front__bkg-photo"></div>
      <img src="https://st4.depositphotos.com/21557188/23287/v/600/depositphotos_232872160-stock-illustration-simple-person-icon-linear-symbol.jpg"class="front__face-photo"/>
      <div class="front__text">
        <h3 class="front__text-header">{profile.name}</h3>
        <p class="front__text-para"><i class="fas fa-map-marker-alt front-icons"></i>{profile.adress}</p>
        <p class="front__text-para"><i class="fas fa-map-marker-alt front-icons"></i>{profile.city}</p>
        <span class="front__text-hover">{profile.email}</span>
      </div>
    </div>
    <div class="back">
      <div class="social-media-wrapper">
        <a href="#" class="social-icon"><i class="fab fa-codepen" aria-hidden="true"></i></a> 
        <a href="#" class="social-icon"><i class="fab fa-github-square" aria-hidden="true"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-linkedin-square" aria-hidden="true"></i></a>
         <a href="#" class="social-icon"><i class="fab fa-instagram" aria-hidden="true"></i></a>
      </div>
    </div>

  </div>
  
      </div>
   
    </div>
  );
};

export default AgencyProfileRight;
