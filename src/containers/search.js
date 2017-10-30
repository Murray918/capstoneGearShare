import React, {Component} from 'react';
import '../styles/skeleton.css';
import '../styles/normalize.css';
import ResultsGrid from './resultgrid.js'
import SearchButton from './searchButton.js'

export default class Search extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchingTheThings = this.fetchingTheThings.bind(this);
    //this sets the state to empty for the the first mount
    this.state = {
      users: [],
      micropnones : [],
      searchValue: ""
    }
  }

  handleSubmit(event) {
    event.preventDefault(event);
    console.log(event.target);
  }

  handleChange(event) {
    event.preventDefault(event);
    this.setState({searchValue : event.target.value})
    console.log(this.state.vlaue);
  }

  fetchingTheThings() {
    fetch('http://localhost:8080/listmicrophones')
    .then((response) => {
      console.log(response);
      return response.json()
    }).then((data) => {
      console.log(data.data)
      let micropnones = data.data
      this.setState({micropnones: micropnones})
    })
  }

  render() {

    return (

      <div id="headerStyle" className="mainSearchWrap">
        <h2>Get the gear you need when you need it!</h2>
        <form onSubmit ={this.handleSubmit} type="submit" className="mainSearchForm">
          <input type="search" onChange = {this.handleChange} placeholder="Search Gear" id="mainSrearchInput"/>
          <button onClick={this.fetchingTheThings} className="button-primary searchBtn">Search</button>
        </form>
        <div/>
        <div>
          <ResultsGrid mics={this.state.micropnones} search ={this.state.searchValue}/>
        </div>
      </div>

    );
  }
}
