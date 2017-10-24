
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/App.css';



export default class BaseLayout extends Component {
  render(){
    // INLINE STYLING
    let titleStyle = {
      "fontFamily": "Helvetica",
      "fontSize": "18rem"
    }
    let subtitleStyle = {
      "fontFamily": "Andale Mono",
      "fontSize": "10rem"
    }
    let navTitle = {
      "fontFamily": "Helvetica",
      "fontSize": "180%"
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li style={navTitle}>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/rentout'>Lease Gear</NavLink>
                </li>
                <li>
                    <NavLink to='/rent'>Rent</NavLink>
                </li>
                <li>
                  <NavLink  activeClassName="selected" to="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-12 header"
            id = "headerStyle">
            <div className="header-title">
              <div
                className="restaurant-name"
                style={titleStyle}>
                  Rent Gear
              </div>
              <div className="subtitle" style={subtitleStyle}>
                Lease Gear
              </div>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
