import React from 'react';
import Navbar from '../../components/Navbar/index'
import HeroBannerLandingPage from '../../components/HeroBannerLandingPage/index'
import IconsLanding from '../../components/IconsLanding/index'
import "../../style.css"

const Landingpage= () => {
   

    return (
        

        <div>
           
          <Navbar/>
          <HeroBannerLandingPage/>
          <IconsLanding/>

        </div>
        );
}
export default Landingpage;