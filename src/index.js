import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Hamburger from './components/Hamburger/index';
import DeleteAgencySession from './components/DeleteAgencySession';
import LoginAgency from './pages/LoginAgency';
import LoginOwner from './pages/LoginOwner';
import PageIndexBuilding from './pages/IndexBuildingPage';
import Landingpage from './pages/Landingpage/index';
import PageIndexEvent from './pages/IndexEventPage';
import PageOwnerListAgency from './pages/OwnerListAgencyPage/index';
import PageEventsOwner from './pages/EventsOwnerPage/index';
import AgencyProfile from './pages/AgencyProfile/index';
import PageEditOwnerProfile from './pages/EditOwnerProfilePage/index';




const AppWrapper = () => {
return (
    <Provider store={store}>
        <App/>
    </Provider>
)
}
const App = () => {
    const is_connected_a = useSelector(state => state.agency.is_connected_agency);
    const is_connected_o = useSelector(state => state.owner.is_connected_owner);
    
    return (    
  
    <>
    
       
    <Router>
    {is_connected_a || is_connected_o ? 
        <div className="grid-container">
        <Sidebar />
        <div className="hamburger">
            <Hamburger/>
        </div>                
            <Switch>
                <Route path="/mes-immeubles">
                    <PageIndexBuilding/>
                </Route>
                <Route path="/nos_evenements" exact>
                    <PageIndexEvent/>
                </Route>
                <Route path="/mes_evenements" exact>
                    <PageEventsOwner/>
                </Route>
                <Route path="/nos_proprietaires" exact>
                    <PageOwnerListAgency/>
                </Route>
                <Route path="/notre_profil" exact>
                    <AgencyProfile/>
                </Route>
                <Route path="/mon_profil" exact>
                    <PageEditOwnerProfile/>
                </Route>
                    <Route path="/deconnexion" >
                        <DeleteAgencySession />
                    </Route>
            </Switch>
            </div>
                :
                <Switch>
                <Route path="/" exact>
                    <Landingpage />
                </Route>
                <Route path="/connexion/proprietaire">
                    <LoginOwner/>
                </Route>
                <Route path="/connexion/agence">
                    <LoginAgency/>
                </Route>
            </Switch>
    }
    </Router> 
    
    </>
    );
  };

  ReactDOM.render(<AppWrapper />, document.getElementById('root'));