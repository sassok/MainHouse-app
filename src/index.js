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
import LogInFormAgency from './components/LogInFormAgency';
import LogInFormOwner from './components/LogInFormOwner';
import IndexBuilding from './components/IndexBuilding/index';
import Navbar from './components/Navbar/index';
import Landingpage from './pages/Landingpage/index';
import IndexEvent from './components/IndexEvent/index';
import AllOwnerListAgency from './components/AllOwnerListAgency/index';
import DeleteAgencySession from './components/DeleteAgencySession';
import EventsOwner from './components/EventsOwner/index';
import ShowBuilding from './components/ShowBuilding';


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
                <Switch>
                    <Route path="/mes-immeubles">
                        <IndexBuilding/>
                    </Route>
                    <Route path="/nos_evenements" exact>
                        <IndexEvent/>
                    </Route>
                    <Route path="/mes_evenements" exact>
                        <EventsOwner/>
                    </Route>
                    <Route path="/nos_proprietaires" exact>
                        <AllOwnerListAgency/>
                    </Route>
                        <Route path="/deconnexion" >
                            <DeleteAgencySession />
                        </Route>
                </Switch>
                </div>
                    :
                    <Switch>
                    <Route path="/" exact>
                        <Navbar />
                        <Landingpage />
                    </Route>
                    <Route path="/connexion/proprietaire">
                        <LogInFormOwner/>
                    </Route>
                    <Route path="/connexion/agence">
                        <LogInFormAgency/>
                    </Route>
                </Switch>
    }
    </Router> 
    
    </>
    );
  };

  ReactDOM.render(<AppWrapper />, document.getElementById('root'));