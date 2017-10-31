'use strtict'

import React, {Component} from 'react';
import {route} from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.han

    this.state = {
      username: "",
      tempUsername: "",
      password: "",
      tempPassword: "",
      users: []
    }

  }

  handleSubmit(event) {
    event.preventDefault(event);
    this.setState({password: this.state.tempPassword, username: this.state.tempUsername})
    console.log(event.target);

  }

  handlePassword(event) {
    event.preventDefault(event);
    this.setState({tempPassword: event.target.value})
  }

  handleUserName(event) {
    event.preventDefault(event);
    this.setState({tempUsername: event.target.value})
  }

  login() {

  }

  componentDidMount() {
    fetch('http://localhost:8080/listusers').then((response) => {
      console.log(response);
      return response.json()
    }).then((data) => {
      console.log(data.data)
      let users = data.data
      this.setState({users: users})
    })
  }

  render() {

    return (

      <div className="container">
        <h1>Gear Lend</h1>
id="loginButton"
        <h2>Get the gear you need when you need it!</h2>

        <form id="loginForm" className="row">
          <div className="six columns">
            <label>Username</label>
            <input className="u-full-width" type="text" placeholder="Enter your username here."/>
          </div>
          <div className="six columns">
            <label >Password</label>
            <input className="u-full-width" on type="text" placeholder="Enter your password here."/>
          </div>
          <div>
            <a class="button button-primary" id="loginButton" href="/search">Login</a>
          </div>
        </form>
        <a href="/newuser" className="list-group-item list-group-item-action contact-links loginLinks">Not Registered</a>

        <a href="#" className="list-group-item list-group-item-action contact-links loginLinks">Forgot Password</a>
      </div>
    )

  }

}
