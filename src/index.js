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
import Landingpage from './pages/Landingpage/index';
import LogInFormAgency from './components/LogInFormAgency';
import LogInFormOwner from './components/LogInFormOwner';

const App = () => {
    return (
    <Router>
        <Provider store={store}>
            <Switch>
                <Route path="/" exact>
                    <Landingpage />
                </Route>
                <Route path="/login/agency" exact>
                    <LogInFormAgency/>
                </Route>
                <Route path="/login/owner" exact>
                    <LogInFormOwner/>
                </Route>
            </Switch>
        </Provider>
    </Router>

    );
  };

  ReactDOM.render(<App />, document.getElementById('root'));