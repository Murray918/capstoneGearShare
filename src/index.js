import React from 'react';
import ReactDOM from 'react-dom';
import './styles/skeleton.css';
import './styles/normalize.css';
import BaseLayout from './components/Navbar.js';
import ReultsGrid from './containers/resultgrid.js';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Find from './components/Findus.js'
// import About from './components/About';

ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      {/* <Route path= '/rentout' component={}/>
      <Route path= '/rent' component={Menu}/> */}
      <Route path= '/' component={ReultsGrid}/>
    </Switch>
  </BaseLayout>
  </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();
