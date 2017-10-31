'use strtict'

import React, {Component} from 'react';
 import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import '../styles/skeleton.css';
// import '../styles/normalize.css';

export default class UpdateUserForm extends Component {

  constructor(){
    super()


    this.state = {
      mounter : false
    }
  }



  render() {



      return(
      <div className="container">
        <form>
          <div className="row">
            <div className="updateForm">
              <label for="exampleEmailInput">New email</label>
              <input type="email" placeholder={this.props.email}/>
              <label for="exampleEmailInput">New Pnone Number</label>
              <input type="text" placeholder={this.props.phone}/>
              <label for="exampleEmailInput">New Userame</label>
              <input type="text" placeholder={this.props.username}/>
              <label for="exampleEmailInput">New First Name</label>
              <input type="text" placeholder={this.props.first_name}/>
              <label for="exampleEmailInput">New Last Name</label>
              <input type="text" placeholder={this.props.last_name}/>
              <label for="exampleEmailInput">New Area</label>
              <input type="text" placeholder={this.props.area}/>
              <a class="button button-primary" id="loginButton" href="/profile">update</a>
            </div>
          </div>

        </form>
      </div>

    );

  }
}
