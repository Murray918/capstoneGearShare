'use strtict'

import React, {Component} from 'react';
import ItemResult from './productResult.js'
import ReactModal from "react-modal";

export default class ResultsGrid extends Component {
  constructor(props){
    super(props)


      this.state = {
        itemId : 0,
        showModal: false
      };

      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOpenModal() {
      this.setState({ showModal: true });
    }

    handleCloseModal() {
      this.setState({ showModal: false });
    }


  handleSubmit(event) {
    event.preventDefault(event);
    // console.log("this is the Value", event.target.getAttribute('value'));
    this.setState({itemId : event.target.getAttribute('value')});
  }

  render() {
    // console.log('ahhh', this.props);
    let micArray = this.props.mics;
    let mics = micArray.filter((mics)=>
    (mics.model === this.props.search)).map((mics, index) => {
      return (
            <tbody key={index}>
              <tr onClick={this.handleSubmit} onClick ={this.handleOpenModal}>
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
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example">
          <div className = "container ">
          <div className = "three columns modal">
            <h2>FluffyiKtty has this item for rent</h2>
            <h2>it is a sure ksm27</h2>
            <h2>to reach this user text ##########</h2>
            <h2>the price per day is $12</h2>
            </div>
          <div calssName = "three columns ">
          <button className="button-primary modal" onClick={this.handleCloseModal}>
            Close Modal
          </button>
          <br/>
          <button className="button-primary modal" onClick={this.handleCloseModal}>
            Add To Cart
          </button>
          </div>
          </div>
        </ReactModal>
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
