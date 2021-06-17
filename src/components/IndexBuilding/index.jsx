import React, { useState, useEffect } from 'react';
import './style.css';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

const IndexBuilding = () => {
    const [building, setBuilding] = useState([]);
    const id = useSelector(state => state.agency.id);

    useEffect (() => {
      const fetchArticle = async () => {
      fetch(`https://mainhouseapi.herokuapp.com/agency-buildings/${id}` , {
        method: 'get',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('Bearer_agency')}`
        },
        }).then((response) => response.json())
          .then((response) => {
            setBuilding(response);
            console.log(response)
            }).catch(function() {
              console.log("error");
        });
  
      }; 
  
      fetchArticle()
      }, []);
  return (  
  <h1>BONJOUR MAMAN</h1>
  );
};

export default IndexBuilding;