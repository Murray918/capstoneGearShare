
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


export default class ItemResult extends Component {
  constructor(){
    super()

    this.state = {
      microphone : [],
      userToGet : 0

    }

  }


  componentWillReceiveProps(nextProps) {
    console.log("now look at it");
  console.log(this.props.itemId);
    fetch('http://localhost:8080/microphone/' + this.props.itemId)
    .then((response) => {
      console.log(response);
      return response.json()
    }).then((data) => {
      console.log('this is the data', data.data)
      let microphone = data
      this.setState({microphone: microphone, userToGet : microphone.user_id})
      console.log("this is that data", microphone.user_id);
      console.log( "this is the state", this.state.microphone);
    })
    // fetch('http://localhost:8080//getuser/' + this.state.userToGet)
    // .then((response) => {
    //   console.log(response);
    //   return response.json()
    // }).then((data) => {
    //   console.log('this is the data', data.data)
    //   let user = data.data
    //   this.setState({user: user})
    //   console.log(this.state.user);
    // })
  }


  render() {
      if (this.props.itemId === 0){
        return <div></div>
      } else {
        return(
          <div className = "container row">
            <div className = "six columns">
              <ul>
                <li>FluffyiKtty has this item for rent</li>
                <li>it is a sure ksm27</li>
                <li>to reach this user text ##########</li>
                <li>the price per day is $12</li>
              </ul>
            </div>
          </div>)
      }
  }
}
