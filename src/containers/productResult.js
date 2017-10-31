
import React, { Component } from 'react';


export default class ItemResult extends Component {
  constructor(){
    super()

    this.state = {
      microphone : []
    }

  }

  componentDidMount() {
    fetch('http://localhost:8080/search/microphones/' + this.porps.itemId)
    .then((response) => {
      console.log(response);
      return response.json()
    }).then((data) => {
      console.log(data.data)
      let microphone = data.data
      this.setState({microphone: microphone})
    })
  }


  render() {
    return (
      <div className = "container">
        {this.state.microphone}
      </div>
    );
  }
}
