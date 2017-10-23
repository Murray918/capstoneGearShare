import React, { Component } from 'react';
import '../styles/App.css';
// import


function logItTest (){
  console.log('bang');
}


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Give me a little drink from your lovin cup</h1>
        <button onClick ={logItTest}>TEST CREATE</button>
      </div>
    );
  }
}
