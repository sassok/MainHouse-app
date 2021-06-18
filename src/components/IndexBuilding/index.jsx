import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './style.css';
import Cookies from 'js-cookie';

const IndexBuilding = () => {
    const agency = useSelector((state) => state.agency);
    const [building, setBuilding] = useState([]);
    const id = useSelector(state => state.agency.id);
    const bearer = useSelector(token => token.bearer)

    useEffect (() => {
      const fetchBuilding = async () => {
      fetch(`https://mainhouseapi.herokuapp.com/agency-buildings/${id}` , {
        method: 'get',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
        },
        }).then((response) => response.json())
          .then((response) => {
            setBuilding(response.buildings);
            console.log(response)
            }).catch(function() {
              console.log("error");
        });
  
      };       

      fetchBuilding()
      }, []);

  return (  
    <>
    
    <div className="cardscontainer row2Sidebar" style={{paddingLeft:"100"+"px"}}>
  <div className="containerbuilding">
  {building.map(build => (
    <div className="card-building">
      <div className="card-building-header">
        <img className="card-building-img" src="https://us.123rf.com/450wm/zhudifeng/zhudifeng1410/zhudifeng141000067/32987276-modern-business-office-building-exterior.jpg?ver=6" alt="city" />
      </div>
      <div className="card-building-body">
        <span className="cardbuildcity">{build.city}</span>
        <div className="cardbuildname">
        {build.name}
        </div>
        <span className="cardbuildref">Ref : {build.reference}</span>
      </div>
    </div>
    
    
  ))}
    </div>
    </div>
    </>

  );
};

export default IndexBuilding;