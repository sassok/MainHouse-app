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
    {is_connected_a || is_connected_o ? 
       
    <Router>
        <div className="grid-container">
        <Sidebar />
                <Switch>
                    <Route path="/mes-immeubles" exact>
                        <IndexBuilding/>
                    </Route>
                    <Route path="/nos_evenements" exact>
                        <IndexEvent/>
                    </Route>
                </Switch>
                </div>
                </Router>  
                
                    :
                    <Router>
                    <Switch>
                    <Route path="/" exact>
                        <Navbar />
                        <Landingpage />
                    </Route>
                    <Route path="/connexion/proprietaire">
                        <LogInFormAgency/>
                    </Route>
                    <Route path="/connexion/agence">
                        <LogInFormAgency/>
                    </Route>
                </Switch>
        
    </Router> 
    }
    </>
    );
  };

  ReactDOM.render(<AppWrapper />, document.getElementById('root'));