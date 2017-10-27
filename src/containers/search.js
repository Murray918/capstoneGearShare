import React, {Component} from 'react';
import '../styles/skeleton.css';
import '../styles/normalize.css';
import ResultsGrid from './resultgrid.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
export default class Search extends Component {
  constructor(props) {
    super(props)

    // this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchingTheThings= this.fetchingTheThings.bind(this);
    //this sets the state to empty for the the first mount
    this.state = {
      users: [],
      value : ""
    }
  }


handleSubmit(event){
  event.preventDefault();
  console.log(event.target);
  // alert('Thank you, your form was submitted')
  this.setState({users: this.state.value})
}

fetchingTheThings() {
  fetch('http://localhost:8080/listusers/').then((response) => {
    return response.json()
  }).then((data) => {
    let users = data;
    this.setState({users: users})
  })
}


render() {

  return (
    <div id="headerStyle" className="mainSearchWrap">
      <form onSubmit ={this.handleSubmit} type="submit" className="mainSearchForm">
        <input type="search" placeholder="Search Gear" id="mainSrearchInput"/>
        <button onClick={this.fetchingTheThings} className="button-primary searchBtn">Search</button>
      </form>
      <ResultsGrid users = {this.state.users} />
    </div>
  );
}
}
