'use strtict'

import React, {Component} from 'react';
 import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import '../styles/skeleton.css';
// import '../styles/normalize.css';

export default class UpdateUserForm extends Component {


  render() {
      return(
      <div className="container">
        <form>
          <div className="row">
            <div className="six columns">
              <label for="exampleEmailInput">Make</label>
              <input className="u-full-width" type="email" placeholder={this.props.email}/>
              <label for="exampleEmailInput">Model</label>
              <input className="u-full-width" type="text" placeholder={this.props.phone}/>
              <label for="exampleEmailInput">Serial Number</label>
              <input className="u-full-width" type="text" placeholder={this.props.username}/>
              <label for="exampleEmailInput">Discription</label>
              <textarea className="u-full-width" type="text" placeholder={this.props.first_name}></textarea>
              <label for="exampleEmailInput">Power Sourcs</label>
              <input className="u-full-width" type="text" placeholder={this.props.last_name}/>
            </div>
          </div>
          <a class="button button-primary" id="loginButton" href="/profile">Add</a>
        </form>
      </div>

    );

  }
}
