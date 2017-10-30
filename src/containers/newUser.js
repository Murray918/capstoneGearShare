'use strtict'

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class NewUser extends Component {

  constructor(props) {
    super(props)

    this.addUser = this.addUser.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

    this.state = {
      username : "",
      first_name : "",
      last_name : "",
      password : ""
  }
}
  addUser = (e) => {
 e.preventDefault();
 this.setState({username: e.target.value, first_name : e.target.value, last_name : e.target.value, password : e.target.value});
 let listItem = JSON.stringify(this.state);
 console.log(listItem);

 fetch("http://localhost:8080/createuser/", {
   method: "POST",
   body: listItem,
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   }
 }).then(response => {
   console.log(response, "yay");

 }).catch(err => {
   console.log(err, "boo!");
 });
//  this.setState({username : '', first_name : '', last_name : '', password : ''});
alert("You have succesfully signed in. Please click the home button on the menue to continue.")
}

handleFirstName(e){
e.preventDefault();
this.setState({first_name : e.target.value})
console.log(this.state);
}

handleLastName(e){
e.preventDefault();
this.setState({last_name : e.target.value})
console.log(this.state);
}

handleUsername(e){
  e.preventDefault();
  this.setState({username:e.target.value})
  console.log(this.state);
}

handlePassword(e){
e.preventDefault();
this.setState({password : e.target.value})
console.log(this.state);
}

    render() {
      return (
        <div className = "container">
        <form onSubmit = {this.addUser}>
          <div className="row">
            <div className="six columns">
              <label>First Name</label>
              <input className="u-full-width" onChange ={this.handleFirstName} value = {this.state.first_name} type="text" placeholder="What is your first name?"/>
            </div>
              <div className="six columns">
                <label >Last Name</label>
                <input className="u-full-width" type="text" onChange = {this.handleLastName} value = {this.state.last_name} placeholder="What is your last name?"/>
              </div>
              <div className = "row">
              <div className="six columns">
                <label>Username</label>
                <input className="u-full-width" type="text" onChange={this.handleUsername} value = {this.state.username}  placeholder="Make up a fun username."/>
              </div>
              <div className="six columns">
                <label>Password</label>
                <input className="u-full-width" type="text"
                onChange = {this.handlePassword} value = {this.state.password} placeholder="Make up a password."/>
              </div>
            </div>
          </div>
          {/* <label>Message</label>
          <textarea className="u-full-width" placeholder="Hi Dave …" id="exampleMessage"></textarea>
          <label className="example-send-yourself-copy">
            <input type="checkbox"/>
            <span className="label-body">Send a copy to yourself</span>
          </label> */}
          <br/>
          <input className="button-primary" type="submit" value="Submit"/>
        </form>
      </div>
      )
    }
  }
