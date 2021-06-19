//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link } from 'react-router-dom';

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import logo from "../../assets/images/logoMainhouseWhite.png";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./style.css";
import { useSelector } from 'react-redux';
import Landingpage from '../../pages/Landingpage/index';
import Navbar from '../Navbar/index';
import HeaderMenu from '../HeaderMenu/index';

const Sidebar = () => {
    //check state
    const is_connected_agency = useSelector(state => state.agency.is_connected_agency);
    const is_connected_owner = useSelector(state => state.owner.is_connected_owner);
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(false);
  };
  if (is_connected_agency === true) {
  return (
    <>
    <HeaderMenu/>
    <aside className="sidenav">
      <div id="headerSidebar">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <img src={logo} alt="white logo mainHouse" style={{width: "90"+"%", margin: "10"+"px"}}/>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu>
              <MenuItem>
                <Link to="/mes-immeubles">Mes Immeubles</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/nos_messagerie" >Messagerie</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/nos_evenements" >Événements</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/nos_proprietaires" >Les propriétaires</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
          <Menu>
            <MenuItem>
              <Link to="/aide" >Demande d'assistance</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/legal" >Mentions légales</Link>
            </MenuItem>
          <hr style={{ backgroundColor: "#464647", height: 1, border: "none"}} />
            <MenuItem>
              Dark Theme
            </MenuItem>
          <hr style={{ backgroundColor: "#464647", height: 1, border: "none"}} />
            <MenuItem>
              <Link to="/notre_profil" >Mon profil</Link>
            </MenuItem>
          <hr style={{ backgroundColor: "#464647", height: 1, border: "none"}} />
            <MenuItem>        
              <Link to="/deconnexion" >Se déconnecter</Link>
            </MenuItem>
          </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
      </aside>
    </>

  )}
  if (is_connected_owner === true) {
    return (
      <>
        <div id="headerSidebar">
            {/* collapsed props to change menu size using menucollapse state */}
          <ProSidebar collapsed={menuCollapse}>
            <SidebarHeader>
            <div className="logotext">
                {/* small and big change using menucollapse state */}
                <img src={logo} alt="white logo mainHouse" style={{width: "90"+"%", margin: "10"+"px"}}/>
              </div>
              <div className="closemenu" onClick={menuIconClick}>
                  {/* changing menu collapse icon on click */}
              </div>
            </SidebarHeader>
            <SidebarContent>
            <Menu>
              <MenuItem>
                <Link to="/">Accueil</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/mon_dashboard" >Dashboard</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/ma_messagerie" >Messagerie</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/mes_evenements" >Événements</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
          <Menu>
            <MenuItem>
              <Link to="/aide" >Demande d'assistance</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/legal" >Mentions légales</Link>
            </MenuItem>
          <hr style={{ backgroundColor: "#464647", height: 1, border: "none"}} />
            <MenuItem>
              Dark Theme
            </MenuItem>
          <hr style={{ backgroundColor: "#464647", height: 1, border: "none"}} />
            <MenuItem>
              <Link to="/mon_profil" >Mon profil</Link>
            </MenuItem>
          <hr style={{ backgroundColor: "#464647", height: 1, border: "none"}} />
            <MenuItem>        
              <Link to="/deconnexion" >Se déconnecter</Link>
            </MenuItem>
          </Menu>
            </SidebarFooter>
          </ProSidebar>
        </div>
      </>
    )}
    else {
      return (
        <>
        </>
      )};


};

export default Sidebar;
