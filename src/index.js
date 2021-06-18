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

const App = () => {
    return (
    
    <>
        <Router>
            <Provider store={store}>
            <Sidebar/>
            <Navbar />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <IndexBuilding />
                    </Route>
                    <Route path="/login/agency" exact>
                        <LogInFormAgency/>
                    </Route>
                    <Route path="/login/owner" exact>
                        <IndexBuilding/>
                    </Route>
                </Switch>
            </main>
            </Provider>
        </Router>  
        <div id="sidebarContainer">
            <div className="row1Sidebar"> 
            </div>
            <div className="row2Sidebar">              
            </div>
        </div>
    </>

    );
  };

  ReactDOM.render(<App />, document.getElementById('root'));