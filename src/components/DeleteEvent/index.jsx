import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { BiTrash } from "react-icons/bi";

import Cookies from 'js-cookie';


const DeleteEvent = (props) => {
 
    
     console.log(props.id)
        useEffect (() => {
          const fetchDeleteEvent = async () => {
             
          fetch(`https://mainhouseapi.herokuapp.com/events/${props.id}` , {
            method: 'delete',
            headers: {
            'Content-Type': 'application/json',
            },
            }).then((response) => response.json())
              .then((response) => {

                console.log(response)
                }).catch(function() {
                  console.log("error");
            });
          };       
    
          fetchDeleteEvent()
          
          }, [props]);


 
return(<p></p>)
}
export default DeleteEvent;