import React from 'react';
import './style.css';

const Navbar = () => {
    return(
        <div>
            <div className="containerNavbar">
                <button  className="componentsNavbarLogin">Se connecter</button>
                <button  className="componentsNavbarSignup">S'inscrire</button>
            </div>
        </div>
            )
};
export default Navbar