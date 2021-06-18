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
  <div>
    {building.map(build => (
      <div>
      <p>{build.city}</p>
      <p>{build.name}</p>
      <p>{build.reference}</p>
      </div>
    ))}
  </div>
  );
};

export default IndexBuilding;