import React from 'react';
import './style.css';
import logo from  '../../assets/images/Mainhouseblack.png'

const Navbar = () => {
    return(
        <div>
            <div className="containerNavbar">
                <p className="logoContainer">
                    <img className="logo" alt="logo" src={logo}></img>
                </p>
                <button  className="componentsNavbarLogin">Se connecter</button>
                <button  className="componentsNavbarSignup">S'inscrire</button>
            </div>
        </div>
            )
};
export default Navbar