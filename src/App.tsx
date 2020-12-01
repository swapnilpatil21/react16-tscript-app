import React from 'react';
// import logo from './logo.svg';
// import './App.css'; // this will cause error on jest TODO: will fix that(ref. https://github.com/facebook/jest/issues/3094)

import Todos from "./modules/todos/";

function App() {
  return (
    <div style={{margin: "20px"}}>
       <h4> React16 app from scratch </h4>
        <br />
        <Todos />
    </div>
  );
}

export default App;
