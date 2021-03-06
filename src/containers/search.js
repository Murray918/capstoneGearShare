import React, {Component} from 'react';
import '../styles/skeleton.css';
import '../styles/normalize.css';
import ResultsGrid from './resultgrid.js'
import ItemResult from './productResult.js'

export default class Search extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this sets the state to empty for the the first mount
    this.state = {
      users: [],
      microphones : [],
      searchValue: "",
      searched: false,
      searchTerm:""
    }
  }

  handleSubmit(event) {
    event.preventDefault(event);
    this.setState({searchTerm : this.state.searchValue, searched : true})
    // console.log(event.target);
  }

  handleChange(event) {
    event.preventDefault(event);
    this.setState({searchValue : event.target.value})
    // console.log(this.state.vlaue);
  }

  componentDidMount() {
    fetch('http://localhost:8080/listmicrophones')
    .then((response) => {
      console.log(response);
      return response.json()
    }).then((data) => {
      console.log('this is what happens with will mount');
      let microphones = data.data
      this.setState({microphones: microphones})
    })
  }

  render() {

    return (
      <div>
      <div id="headerStyle" className="mainSearchWrap">
        <form onSubmit ={this.handleSubmit} type="submit" className="mainSearchForm">
          <input type="search" onChange={this.handleChange} placeholder="Search Gear" id="mainSrearchInput"/>
          <button onClick = {this.handleSubmit} className="button-primary searchBtn">Search</button>
        </form>
        <div/>
      </div>
      <div className="results container">
        <ResultsGrid mics={this.state.microphones} search ={this.state.searchTerm} searched={this.state.searched}/>
      </div>
    </div>
    );
  }
}
