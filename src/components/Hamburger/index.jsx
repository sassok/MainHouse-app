import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { useSelector } from 'react-redux';
import './style.css';

const Hamburger=()=> {
  const is_connected_agency = useSelector(state => state.agency.is_connected_agency);
  const is_connected_owner = useSelector(state => state.owner.is_connected_owner);
  if (is_connected_agency === true) {
    return (
      
      <div className="burger">
        <Menu>
          <Link to="/mes-immeubles">Mes Immeubles</Link>
          <Link to="/nos_messagerie" >Messagerie</Link>
          <Link to="/nos_evenements" >Événements</Link>
          <Link to="/nos_proprietaires" >Les propriétaires</Link>
          <hr style={{ backgroundColor: "#464647", height: 1, border: "none"}} />
          <p>Dark Theme</p>
          <hr style={{ backgroundColor: "#464647", height: 1, border: "none"}} />
          <Link to="/notre_profil" >Mon profil</Link>
          <hr style={{ backgroundColor: "#464647", height: 1, border: "none"}} />
          <Link to="/deconnexion">Se déconnecter</Link>
        </ Menu>
      </div>
      
    );
  }
  if (is_connected_owner === true) {
    return (
      
      <div className="burger">
        <Menu>
        <Link to="/mon_dashboard" >Dashboard</Link>
        <Link to="/ma_messagerie" >Messagerie</Link>
        <Link to="/mes_evenements" >Événements</Link>
        <hr style={{ backgroundColor: "#464647", height: 1, border: "none"}} />
        Dark Theme
        <hr style={{ backgroundColor: "#464647", height: 1, border: "none"}} />
        <Link to="/mon_profil" >Mon profil</Link>
        <hr style={{ backgroundColor: "#464647", height: 1, border: "none"}} />
        <Link to="/deconnexion" >Se déconnecter</Link>
        </ Menu>
      </div>
      
    );
  }
  else {
    return (
    <div className="burger">
    </div>         
    );
  };
}
export default Hamburger;