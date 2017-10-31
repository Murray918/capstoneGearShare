import React from 'react';
import ReactDOM from 'react-dom';
import './styles/skeleton.css';
import './styles/normalize.css';
import './styles/App.css'
import NewUser from './containers/newUser.js'
import Login from './containers/login.js'
import BaseLayout from './components/Navbar.js';
import Search from './containers/search.js';
import Profile from './containers/userProfile.js'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Find from './components/Findus.js'
// import About from './components/About';



ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path = '/' component = {Login}/>
      <Route path= '/profile' component={Profile}/>
      <Route path= '/newuser' component={NewUser}/>
      <Route path= '/search' component={Search} />
    </Switch>
  </BaseLayout>
  </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();
