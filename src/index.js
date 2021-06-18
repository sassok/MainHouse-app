import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store';
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
import IndexEvent from './components/IndexEvents/index';

const App = () => {

    return (  
    <>      
    <Router>
    <Provider store={store}>  
    <div className="grid-container">     
        <Sidebar />
                <Switch>
                    <Route path="/" exact>
                        <Navbar />
                        <Landingpage />
                    </Route>
                    <Route path="/connexion/proprietaire" exact>
                        <LogInFormAgency/>
                    </Route>
                            <Route path="/connexion/agence" exact>
                                <LogInFormAgency/>
                            </Route>
                            <Route path="/nos_evenements" exact>
                                <IndexEvent/>
                            </Route>
                            <Route path="/notre_dashboard" exact>
                            
                                <IndexBuilding/>
                            
                        </Route>
                </Switch>
                </div>
        </Provider>
    </Router> 
    </>

    );
  };

  ReactDOM.render(<App />, document.getElementById('root'));