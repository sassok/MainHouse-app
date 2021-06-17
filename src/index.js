import React from 'react';
import ReactDOM from 'react-dom';
import Landingpage from './pages/Landingpage/index'

const App = () => {
    return (
        <h1>
            <Landingpage/>
        </h1>
    );
  };
  ReactDOM.render(<App />, document.getElementById('root'));