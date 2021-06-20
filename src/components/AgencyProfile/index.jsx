import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import Cookies from 'js-cookie';
import { IoMdSearch} from "react-icons/io";
import EditAgencyProfile from '../EditAgencyProfile';

const AgencyProfile = () => {
  

  return (  
    <main className="main">
        

    <EditAgencyProfile />
    </main>
  );
};

export default AgencyProfile;