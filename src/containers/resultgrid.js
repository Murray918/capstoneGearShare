'use strtict'

import React, {Component} from 'react';

export default class ResultsGrid extends Component {

  render() {
    console.log('ahhh', this.props);
    let micArray = this.props.mics;
    let mics = micArray.filter((mics)=>
    (mics.model === this.props.search)).map((mics) => {
      return (
        <div key={mics.id} className='row'>
          <table className="ten columns">

            <tbody>
              <tr>
                <td>{mics.model} {mics.last_name}</td>
                <td>{mics.make}</td>
                <td>{mics.serial_number}</td>
                <td>{mics.description}</td>
                <td>{mics.power_source}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    })
    if (!this.props.searched)
    return <div></div>

    if (mics.length > 0){
    return (
      <div className="row">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Time Stamp</th>
          </tr>
        </thead>
        {mics}
      </div>
    )
  }
    return <div><h1>There are no microphones that match this criteria.</h1></div>
  }
}
