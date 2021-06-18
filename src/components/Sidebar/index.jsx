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

const Sidebar = () => {
    //check state
    const is_connected_agency = useSelector(state => state.agency.is_connected_agency);
    const is_connected_owner = useSelector(state => state.owner.is_connected_owner);
    console.log(is_connected_agency)
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
            <Menu iconShape="square">
              <MenuItem active={true}>
                <Link to="/">Accueil</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/login/agency" >BITEZ-vous</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem>        
                <Link to="/logout" >Se déconnecter</Link>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
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
              <Menu iconShape="square">
                <MenuItem active={true}>
                  <Link to="/">Accueil</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/login/agency" >MANGEZ-vous</Link>
                </MenuItem>
              </Menu>
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem>        
                  <Link to="/logout" >Se déconnecter</Link>
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
