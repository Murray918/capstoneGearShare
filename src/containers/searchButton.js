
import React, { Component } from 'react';
import '../styles/skeleton.css';
import '../styles/normalize.css';

export default class SearchButton extends Component {
  render() {
    return (
      <button onClick={this.props.click} className = "searchBtn" >Submit</button>
    );
  }
}
