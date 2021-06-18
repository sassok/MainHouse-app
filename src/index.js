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
import IndexEvent from './components/IndexEvents/index';

const App = () => {
    return (
    
    <>
        <Router>
            <Provider store={store}>
            <Sidebar/>
            <main>
                <Switch>
                    <Route path="/" exact>
                    <div id="sidebarContainer">
                        <div className="row1Sidebar"> 
                        </div>
                        <div className="row2Sidebar" style={{paddingLeft: "100"+"px"}}> 
                            <IndexBuilding />
                        </div>
                    </div>
                    </Route>
                    <Route path="/connexion/agence" exact>
                    <div id="sidebarContainer">
                        <div className="row1Sidebar"> 
                        </div>
                        <div className="row2Sidebar"> 
                            <LogInFormAgency/>
                        </div>
                    </div>
                    </Route>
                    <Route path="/connexion/proprietaire" exact>
                    <div id="sidebarContainer">
                        <div className="row1Sidebar"> 
                        </div>
                        <div className="row2Sidebar"> 
                            <LogInFormOwner/>
                        </div>
                    </div>
                    </Route>
                    <Route path="/nos_evenements" exact>
                    <div id="sidebarContainer">
                        <div className="row1Sidebar"> 
                        </div>
                        <div className="row2Sidebar"> 
                            <IndexEvent/>
                        </div>
                    </div>
                    </Route>
                </Switch>
            </main>
            </Provider>
        </Router>  
    </>

    );
  };

  ReactDOM.render(<App />, document.getElementById('root'));