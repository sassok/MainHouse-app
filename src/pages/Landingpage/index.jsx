import React from 'react';
import HeroBannerLandingPage from '../../components/HeroBannerLandingPage/index'
import IconsLanding from '../../components/IconsLanding/index'
import CustomerReview from '../../components/CustomerReview/index'
import Footer from '../../components/Footer/index'
import TablePrice from '../../components/TablePrice/index'
import Navbar from '../../components/Navbar/index';
import "../../style.css"
import { useSelector } from 'react-redux';

const Landingpage = () => {
  const is_connected_agency = useSelector(state => state.agency.is_connected_agency);
  const is_connected_owner = useSelector(state => state.owner.is_connected_owner);
  if (is_connected_agency === false || is_connected_agency === false) {
    return (
      <div>
        <Navbar />
        <HeroBannerLandingPage />
        <IconsLanding />
        <CustomerReview />
        <TablePrice />
        <Footer />
      </div>
    );
  }
  else {
    return (
      <>
        <br /> <br /> <br />
        <h1 style={{ paddingLeft: "300" + "px" }}>ERREUR 404 : cette page n'existe pas</h1>
        <h1 style={{ paddingLeft: "300" + "px" }}>MERCI DE VOUS REDIRIGER GRÂCE À LA BARRE DE NAVIGATION</h1>
      </>
    )
  }
}
export default Landingpage;