import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import BaseLayout from './components/Navbar.js';
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
      <Route path= '/' component={BaseLayout}/>
    </Switch>
  </BaseLayout>
  </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();
