import React from 'react';
import './style.css';
import logo from  '../../assets/images/Mainhouseblack.png'

import { Link } from 'react-router-dom';
const Navbar = () => {
    return(
<div>
            <div className="containerNavbar">
                <p className="logoContainer">
                    <img className="logo" alt="logo" src={logo}></img>
                </p>
                <button className="componentsNavbarLogin"><Link to="/connexion/propriétaire" className="link__login">Connexion propriétaire</Link></button>
                <button className="componentsNavbarSignup"><Link to="/connexion/agence" className="link__signup">Connexion agence</Link></button>

            </div>
        </div>
            )
};
export default Navbar