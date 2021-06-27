import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import logo from "../../assets/images/logoMainhouseWhite.png";
import "react-pro-sidebar/dist/css/styles.css";
import "./style.css";
import { useSelector } from 'react-redux';
import Landingpage from '../../pages/Landingpage/index';
import Navbar from '../Navbar/index';
import HeaderMenu from '../HeaderMenu/index';
import DeleteAgencySession from "../DeleteAgencySession";

const Sidebar = () => {
  const is_connected_agency = useSelector(state => state.agency.is_connected_agency);
  const is_connected_owner = useSelector(state => state.owner.is_connected_owner);
  const [menuCollapse, setMenuCollapse] = useState(false)
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(false);
  };
  if (is_connected_agency === true) {
    return (
      <>
        <HeaderMenu />
        <aside className="sidenav">
          <div id="headerSidebar">
            <ProSidebar collapsed={menuCollapse}>
              <SidebarHeader>
                <div className="logotext">
                  <img src={logo} alt="white logo mainHouse" style={{ width: "90" + "%", margin: "10" + "px" }} />
                </div>
                <div className="closemenu" onClick={menuIconClick}>
                </div>
              </SidebarHeader>
              <SidebarContent>
                <Menu>
                  <MenuItem>
                    <Link to="/mes-immeubles">Mes Immeubles</Link>
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
                  <hr style={{ backgroundColor: "#464647", height: 1, border: "none" }} />
                  <MenuItem>
                    Dark Theme
                  </MenuItem>
                  <hr style={{ backgroundColor: "#464647", height: 1, border: "none" }} />
                  <MenuItem>
                    <Link to="/notre_profil" >Mon profil</Link>
                  </MenuItem>
                  <hr style={{ backgroundColor: "#464647", height: 1, border: "none" }} />
                  <MenuItem>
                    <Link to="/deconnexion">Se déconnecter</Link>
                  </MenuItem>
                </Menu>
              </SidebarFooter>
            </ProSidebar>
          </div>
        </aside>
      </>
    )
  }
  if (is_connected_owner === true) {
    return (
      <>
        <div id="headerSidebar">
          <ProSidebar collapsed={menuCollapse}>
            <SidebarHeader>
              <div className="logotext">
                <img src={logo} alt="white logo mainHouse" style={{ width: "90" + "%", margin: "10" + "px" }} />
              </div>
              <div className="closemenu" onClick={menuIconClick}>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <Menu>
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
                <hr style={{ backgroundColor: "#464647", height: 1, border: "none" }} />
                <MenuItem>
                  Dark Theme
            </MenuItem>
                <hr style={{ backgroundColor: "#464647", height: 1, border: "none" }} />
                <MenuItem>
                  <Link to="/mon_profil" >Mon profil</Link>
                </MenuItem>
                <hr style={{ backgroundColor: "#464647", height: 1, border: "none" }} />
                <MenuItem>
                  <Link to="/deconnexion-owner" >Se déconnecter</Link>
                </MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </div>
      </>
    )
  }
  else {
    return (
      <>
      </>
    )
  };
};

export default Sidebar;
