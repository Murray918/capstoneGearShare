import React from 'react';
import ReactDOM from 'react-dom';
import './styles/skeleton.css';
import './styles/normalize.css';
import './styles/App.css'
import NewUser from './containers/newUser.js'
import BaseLayout from './components/Navbar.js';
import Search from './containers/search.js';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Find from './components/Findus.js'
// import About from './components/About';

ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
    {/* <Route path= '/rentout' component={}/> */}
      <Route path= '/newUser' component={NewUser}/>
      <Route path= '/' component={Search} />
    </Switch>
  </BaseLayout>
  </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();
