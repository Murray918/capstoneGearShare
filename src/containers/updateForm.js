'use strtict'

import React, {Component} from 'react';
 import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import '../styles/skeleton.css';
// import '../styles/normalize.css';

export default class UpdateUserForm extends Component {

  constructor(){
    super()

this.handleClick = this.handleClick.bind(this);

    this.state = {
      mounter : false
    }
  }

  handleClick(e) {
    e.preventDefault(e)
    if (this.props.mounter === true){
    this.setState({mounter : false})
  } else {
    this.setState({mounter : true})
  }
  }

  render() {


      if (this.state.mounter === false || this.props.mounter === false){
        return <div></div>
      }return(
      <div className="container">
        <form>
          <div className="row">
            <div className="six columns">
              <label for="exampleEmailInput">New email</label>
              <input className="u-full-width" type="email" placeholder={this.props.email}/>
              <label for="exampleEmailInput">New Pnone Number</label>
              <input className="u-full-width" type="text" placeholder={this.props.phone}/>
              <label for="exampleEmailInput">New Userame</label>
              <input className="u-full-width" type="text" placeholder={this.props.username}/>
              <label for="exampleEmailInput">New First Name</label>
              <input className="u-full-width" type="text" placeholder={this.props.first_name}/>
              <label for="exampleEmailInput">New Last Name</label>
              <input className="u-full-width" type="text" placeholder={this.props.last_name}/>
            </div>
            <div className="six columns">
              <label for="exampleEmailInput">New Area</label>
              <input className="u-full-width" type="text" placeholder={this.props.area}/>
            </div>
          </div>
          <input onClick = {this.handleClick}
          Route path='/profile' className="button-primary" type="submit" value="Submit"/>
        </form>
      </div>

    );

  }
}
