import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/skeleton.css';
import '../styles/normalize.css';

export default class BaseLayout extends Component {
  render() {

    return (
      <div >

        <nav className = "hideNav">
          <div className="container">
            <div className="row navWrap">
              <div className="two columns navText">
                <NavLink to='/search'>Search</NavLink>
              </div>
              <div className="two columns navText">
                <NavLink to='/profile'>Profile</NavLink>
              </div>
              <div className="two columns navText">
                <NavLink activeClassName="selected" to="/">Logout</NavLink>
              </div>
                <span className = "usernameNav">SwirlingBeeHive</span>
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
