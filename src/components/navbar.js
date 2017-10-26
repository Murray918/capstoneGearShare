import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/skeleton.css';
import '../styles/normalize.css';

export default class BaseLayout extends Component {
  render() {
    // INLINE STYLING

    return (
      <div>
      <div className="container">
        <nav id ="clear" >
          <div className="row navWrap">
            <div className="two columns navText">
              <NavLink to='/'>Home</NavLink>
            </div>
            <div className="two columns navText">
              <NavLink to='/rentout'>Lease Gear</NavLink>
            </div>
            <div className="two columns navText">
              <NavLink to='/rent'>Rent</NavLink>
            </div>
            <div className="two columns navText">
              <NavLink activeClassName="selected" to="">Message</NavLink>
            </div>
          </div>
        </nav>
      </div>
        <div id="headerStyle" className="mainSearchWrap">
          <form type="submit" className="mainSearchForm">
            <input  type="search" placeholder="Search Gear" id="mainSrearchInput"/>
            <button className ="button-primary searchBtn" >Search</button>
          </form>
        </div>

          <div className="container">
        {this.props.children}
      </div>
    </div>
    );
  }
}
