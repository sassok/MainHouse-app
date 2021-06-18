import React from 'react';
import Navbar from '../../components/Navbar/index'
import HeroBannerLandingPage from '../../components/HeroBannerLandingPage/index'
import IconsLanding from '../../components/IconsLanding/index'
import CustomerReview from '../../components/CustomerReview/index'
import Footer from '../../components/Footer/index'
import TablePrice from '../../components/TablePrice/index'
import "../../style.css" 

const Landingpage= () => {
   

    return (
        

        <div>
           
          <Navbar/>
          <HeroBannerLandingPage/>
          <IconsLanding/>
          <CustomerReview/>
          <TablePrice/>
          <Footer/>



        </div>
        );
}
export default Landingpage;