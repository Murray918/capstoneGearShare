'use strtict'

import React, {Component} from 'react';

export default class ResultsGrid extends Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)

      this.state = {
        itemId : null,
        renderResults : true
      }

  }

  handleSubmit(event) {
    event.preventDefault(event);
    console.log(event.target.getAttribute('value'));
    this.setState({itemId : event.target.getAttribute('value')});
    // console.log("in the handel", this.state.userId);
    if(this.state.renderResults !null){
      console.log('party time');
    }
  }

  render() {
    console.log('ahhh', this.props);
    let micArray = this.props.mics;
    let mics = micArray.filter((mics)=>
    (mics.model === this.props.search)).map((mics, index) => {
      return (
            <tbody >
              <tr onClick={this.handleSubmit} key={index}>
                <td value = {mics.id} dataLabel = "pic"  ><img className = "productImage" src="https://i.pinimg.com/736x/4c/73/cd/4c73cd4f18bb19f3f01bea263dfa397a.jpg"></img></td>
                <td value = {mics.id} datalabel = "model">{mics.model}</td>
                <td value = {mics.id} datalabel = "make">{mics.make}</td>
                <td value = {mics.id} datalabel = "serial number">{mics.serial_number}</td>
                <td value = {mics.id} datalabel = "description">{mics.description}</td>
                <td value = {mics.id} datalabel = "power source">{mics.power_source}</td>
              </tr>
            </tbody>


      )
    })
    if (!this.props.searched)
    return <div></div>

    if (mics.length > 0){
    return (
      <div className = "row">
        <table>
          <thead>
            <tr>
              <th scope = "col" ></th>
              <th scope = "col" >Model</th>
              <th scope = "col" >Make</th>
              <th scope = "col" >Serial</th>
              <th scope = "col" >Info</th>
              <th scope = "col" >Power Source</th>
            </tr>
          </thead>
        {mics}
        </table>
      </div>
    )
  }
    return <div><h1>There are no microphones that match this criteria.</h1></div>
  }
}
