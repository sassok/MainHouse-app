import React from 'react';
import ReactDOM from 'react-dom';
import Landingpage from './pages/Landingpage/index'
import Sidebar from './components/Sidebar';

const App = () => {
    return (
        <>
            <Sidebar/>
            <Landingpage/>
            <div id="conteneur">
                <div className="row1"> 
                </div>
                <div className="row2">
                  <h1>bonjour</h1> 
                </div>
            </div>
        </>
    );
  };
  ReactDOM.render(<App />, document.getElementById('root'));