import React, {Component} from 'react';
import '../styles/skeleton.css';
import '../styles/normalize.css';
import UpdateUserForm from './updateForm.js'

export default class Profile extends Component {
constructor(props){
  super(props)

  this.handleClick = this.handleClick.bind(this);

  this.state = {
    username :'SwirlingBeeHive',
    first_name : 'Kevin',
    last_name : 'Murray',
    user_id : '13',
    phone : '918-555-5555',
    email : 'spinDoctors@gmail.com',
    area : 'Austin Area',
    password : '12345678',
    mounter : 0,
    numOfMics : 2,
    mics : [{'make' : 'sm5b', 'price' : 10 }, {'make' : 'neumann 102', 'price' : 67}],
    totalEarnings : 231,
}


}

handleClick(e) {
  e.preventDefault(e)
  let mount = 0;
  mount += 1;
  this.setState({mounter : mount})
}



  render() {

    if (this.state.mount = 0){
    return (
      <div className='container'>
        <div className="row">
          <h1>Welcome SwirlingBeeHive</h1>
          <div className="five columns">
            <p>here is your profile info</p>
            <ul>
              <li>{this.state.first_name + ' ' + this.state.last_name}</li>
              <li>
                Contact
                <ul>
                  <li>{this.state.phone}</li>
                  <li>{this.state.email}</li>
                </ul>
              </li>
              <li>{this.state.area}</li>
            </ul>
            <button onClick={this.handleClick}>Update Profile</button>
          </div>
          <div className="five columns">
            <p>here is your gear information</p>
            <ul>
              <li>You have {this.state.numOfMics} items</li>
              <li>
                Microphones
                <ul>
                  <li>sure {this.state.mics[0].make} at {this.state.mics[0].make} dollars a day</li>
                  <li>{this.state.mics[1].make} at {this.state.mics[1].make} dollars a day</li>
                </ul>
              </li>
              <li>you have made ${this.state.totalEarnings}</li>
            </ul>
            <button onClick = {this.handleClick} >Update Profile</button>
          </div>
        </div>
      </div>
    )   } else {
          return <UpdateUserForm/>
      }
  }
}
