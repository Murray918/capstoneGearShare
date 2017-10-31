
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import ReactModal from "react-modal";


export default class ItemResult extends Component {
  constructor(){
    super()

    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }


  //
  // componentWillReceiveProps(nextProps) {
  //   console.log("now look at it");
  // console.log(this.props.itemId);
  //   fetch('http://localhost:8080/microphones/' + this.props.itemId)
  //   .then((response) => {
  //     console.log(response);
  //     return response.json()
  //   }).then((data) => {
  //     console.log('this is the data', data.data)
  //     let microphone = data
  //     this.setState({microphone: microphone, userToGet : microphone.user_id})
  //     console.log("this is that data", microphone.user_id);
  //     console.log( "this is the state", this.state.microphone);
  //   })
  //   // fetch('http://localhost:8080//getuser/' + this.state.userToGet)
  //   // .then((response) => {
  //   //   console.log(response);
  //   //   return response.json()
  //   // }).then((data) => {
  //   //   console.log('this is the data', data.data)
  //   //   let user = data.data
  //   //   this.setState({user: user})
  //   //   console.log(this.state.user);
  //   // })
  // }


  render() {

    return (
         <div>
           <button className="updateButtonModal" onClick={this.handleOpenModal}>
             Update Item
           </button>

           {/* <this.props.IMAGESOURCE>
             will be mapping over our data and */}
           <ReactModal
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example">
             <div>
             </div>
               <h5>FluffyiKtty has this item for rent</h5>
               <h5>it is a sure ksm27</h5>
               <h5>to reach this user text ##########</h5>
               <h5>the price per day is $12</h5>
             <div>
             <button className="button-primary" onClick={this.handleCloseModal}>
               Close Modal
             </button>
             </div>
           </ReactModal>
         </div>
       );

      }
}
