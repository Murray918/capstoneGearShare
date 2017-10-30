'use strtict'

import React, {Component} from 'react';

export default class ResultsGrid extends Component {

  render() {
    console.log('ahhh', this.props);
    let micArray = this.props.mics;
    let mics = micArray.map((mics) => {
      return (
        <div key={mics.id} className='row'>
          <table class="four columns">

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
}
