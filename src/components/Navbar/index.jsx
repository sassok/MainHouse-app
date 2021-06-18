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
                <button className="componentsNavbarLogin"><Link to="/connexion/agence" className="link__login">Connexion Agence</Link></button>
                <button className="componentsNavbarSignup"><Link to="/connexion/proprietaire" className="link__signup">Connexion Propriétaire</Link></button>
                
            </div>
        </div>
            )
};
export default Navbar