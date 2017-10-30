import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/skeleton.css';
import '../styles/normalize.css';

export default class BaseLayout extends Component {
  render() {

    return (
      <div>

        <nav>
          <div className="container">
            <div className="row navWrap">
              <div className="two columns navText">
                <NavLink to='/'>Home</NavLink>
              </div>
              <div className="two columns navText">
                <NavLink to='/newUser'>New User</NavLink>
              </div>
              <div className="two columns navText">
                <NavLink to='/rent'>Rent</NavLink>
              </div>
              <div className="two columns navText">
                <NavLink activeClassName="selected" to="">Message</NavLink>
              </div>

            </div>
          </div>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
