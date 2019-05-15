import React, { Component } from 'react';
import './App.css';
import BodyContainer from './containers/BodyContainer'

function App() {
  return (
    <div className="App">
      <header>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      </header>
      
      
      <body>
        <BodyContainer />
      </body>
      
    </div>
  );
}

export default App;
