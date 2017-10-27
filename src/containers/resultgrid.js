'use strtict'
import React, {Component} from 'react';


export default class ResultsGrid extends Component {

  render() {
    console.log(this.props.users);
    // let usersArray = this.props.users;
    // let user = usersArray.map((user) => {
    //   return (
    //     <div key= {user.id} className='row'>
    //       <h1>please stop having fun in the bedding section, {user.first_name}</h1>
    //     </div>
    //   )
    // })

    return (
      <div className="resultCard">
        {/* {user} */}
      </div>
    )
  }
}
