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
                <button className="componentsNavbarLogin"><Link to="/dashboard" className="link__login">Dashboard</Link></button>
                <button className="componentsNavbarLogin"><Link to="/login/agency" className="link__login">Se connecter</Link></button>
                <button className="componentsNavbarSignup"><Link to="/login/agency" className="link__signup">S'inscrire</Link></button>
                
            </div>
        </div>
            )
};
export default Navbar